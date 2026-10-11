import type { Protocol } from "../src/types.ts";
import { resolveCategory } from "../src/classification.ts";
import { readFile, rename, unlink, writeFile } from "node:fs/promises";

const LLAMA = "https://api.llama.fi";
const DATA_FILE = new URL("../src/data.ts", import.meta.url);
// Use --classification-only to preserve unrelated catalogue fields and comments.
// Add --dry-run to report gaps without writing. Failed lookups exit nonzero.
type Row = Record<string, unknown>;
type Fetcher = (url: string) => Promise<Response>;
export interface RefreshResult {
  protocols: Protocol[];
  issues: Array<{ id: number; name: string; message: string }>;
  failed: number[];
}

function object(value: unknown): Row {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Invalid upstream object");
  }
  return value as Row;
}

async function json(url: string, fetcher: Fetcher): Promise<unknown> {
  const response = await fetcher(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

function index(value: unknown, key: string): Map<string, Row> {
  if (!Array.isArray(value) || !value.length) {
    throw new Error(`Invalid upstream ${key} index`);
  }
  const result = new Map<string, Row>();
  for (const item of value) {
    const row = object(item);
    const id = row[key];
    if (typeof id !== "string" || !id || result.has(id)) {
      throw new Error(`Invalid or duplicate upstream ${key}`);
    }
    result.set(id, row);
  }
  return result;
}

/** Refresh exact identities only; never choose a parent, child or similar name. */
export async function refreshProtocols(
  protocols: readonly Protocol[],
  fetcher: Fetcher = (url) =>
    fetch(url, { signal: AbortSignal.timeout(30_000) }),
  options: { classificationOnly?: boolean } = {},
): Promise<RefreshResult> {
  // Global failures abort before any write. Per-entry failures preserve that record.
  const [protocolRows, chainRows] = await Promise.all([
    json(`${LLAMA}/protocols`, fetcher),
    json(`${LLAMA}/v2/chains`, fetcher),
  ]);
  const bySlug = index(protocolRows, "slug");
  const byChain = index(chainRows, "name");
  const issues: RefreshResult["issues"] = [];
  const failed: number[] = [];
  const updated: Protocol[] = [];
  let platforms: Promise<unknown> | undefined;
  for (const protocol of protocols) {
    const report = (message: string) =>
      issues.push({ id: protocol.id, name: protocol.name, message });
    // Validate reviewed input even if the upstream lookup later fails.
    resolveCategory(protocol);
    let next = structuredClone(protocol);
    const metadata = next.defillama;
    try {
      if (metadata?.slug) {
        const upstream = metadata.isChain
          ? byChain.get(metadata.slug)
          : bySlug.get(metadata.slug) ?? object(
            await json(
              `${LLAMA}/protocol/${encodeURIComponent(metadata.slug)}`,
              fetcher,
            ),
          );
        if (
          !upstream || typeof upstream.name !== "string" ||
          !upstream.name.trim()
        ) {
          throw new Error(`No valid exact listing for ${metadata.slug}`);
        }
        const parent = typeof upstream.id === "string" &&
          upstream.id.startsWith("parent#");
        if (parent) {
          report(
            `Parent listing ${metadata.slug}; no child category is inferred`,
          );
        }
        const raw = upstream.category;
        if (raw != null && (typeof raw !== "string" || !raw.trim())) {
          throw new Error(`Invalid category for ${metadata.slug}`);
        }
        if (raw == null) delete metadata.category;
        else metadata.category = raw as string;
        // Keep identity validation explicit, even when a reviewed override wins.
        if (
          !metadata.isChain && typeof upstream.slug === "string" &&
          upstream.slug !== metadata.slug
        ) {
          throw new Error(
            `Exact lookup returned a different slug: ${upstream.slug}`,
          );
        }
        if (!options.classificationOnly) {
          let logo = upstream.logo;
          const symbol = metadata.isChain
            ? upstream.tokenSymbol
            : upstream.symbol;
          if (metadata.isChain && !metadata.logo) {
            platforms ??= json(
              "https://api.coingecko.com/api/v3/asset_platforms",
              fetcher,
            );
            const values = await platforms;
            if (!Array.isArray(values)) {
              throw new Error("Invalid asset platform list");
            }
            const match = values.map(object).find((p) =>
              p.native_coin_id === upstream.gecko_id
            );
            logo = match?.image ? object(match.image).thumb : null;
          }
          // Enrich missing metadata only; never erase existing reviewed values.
          if (!next.symbol && typeof symbol === "string" && symbol !== "-") {
            next.symbol = symbol;
          }
          if (!metadata.logo && typeof logo === "string") metadata.logo = logo;
          for (const field of ["description", "twitter", "url"] as const) {
            if (!metadata[field] && typeof upstream[field] === "string") {
              metadata[field] = upstream[field];
            }
          }
        }
      } else {
        // A removed listing must not leave a stale upstream category behind.
        if (metadata) delete metadata.category;
        report(
          "No DeFiLlama slug; classification requires a reviewed override or explicit chain metadata",
        );
      }
      const resolved = resolveCategory(next);
      next.category = resolved.category;
      resolved.issues.forEach(report);
    } catch (error) {
      next = structuredClone(protocol);
      // Reviewed edits do not depend on upstream availability. Keep saved raw
      // evidence while applying an explicit override or chain flag.
      if (next.categoryOverride || next.defillama?.isChain === true) {
        const resolved = resolveCategory(next);
        next.category = resolved.category;
        resolved.issues.forEach(report);
      }
      failed.push(protocol.id);
      report(
        `Refresh failed; retained saved upstream metadata: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
    updated.push(next);
  }
  return { protocols: updated, issues, failed };
}

/** Classification-only writes retain comments and every unrelated byte of data.ts. */
export function renderClassifications(
  source: string,
  protocols: readonly Protocol[],
): string {
  const remaining = new Map(protocols.map((p) => [p.id, p]));
  if (remaining.size !== protocols.length) {
    throw new Error("Duplicate catalogue IDs");
  }
  const result = source.replace(
    /^ {2}\{\n {4}id: (\d+),\n[\s\S]*?^ {2}\},?/gm,
    (block, id) => {
      const protocol = remaining.get(Number(id));
      if (!protocol) throw new Error(`Unexpected or duplicate source ID ${id}`);
      remaining.delete(protocol.id);
      const line = `    category: ${JSON.stringify(protocol.category)},\n`;
      if (/^ {4}category: .*,\n/m.test(block)) {
        block = block.replace(
          /^ {4}category: .*,\n/m,
          line,
        );
      } else {
        if (!/^ {4}name: .*,\n/m.test(block)) {
          throw new Error(
            `Unsupported source layout for ${id}`,
          );
        }
        block = block.replace(/(^ {4}name: .*,\n)/m, `$1${line}`);
      }
      if (
        protocol.defillama?.category !== undefined &&
        !block.includes("    defillama: {\n")
      ) {
        throw new Error(`Missing metadata block for ${id}`);
      }
      block = block.replace(
        /(^ {4}defillama: \{\n)([\s\S]*?)(^ {4}\},?)/m,
        (_match: string, start: string, body: string, end: string) => {
          const raw = protocol.defillama?.category;
          const categoryLine = raw === undefined
            ? ""
            : `      category: ${JSON.stringify(raw)},\n`;
          return start + categoryLine +
            body.replace(/^ {6}category: .*,?\n/m, "") + end;
        },
      );
      return block;
    },
  );
  if (remaining.size) {
    throw new Error("Catalogue source layout does not match the dataset");
  }
  return result;
}

export async function updateDataFile(
  file: string | URL,
  protocols: readonly Protocol[],
  fetcher?: Fetcher,
  options: { classificationOnly?: boolean; dryRun?: boolean } = {},
): Promise<RefreshResult> {
  const original = await readFile(file, "utf8");
  const result = await refreshProtocols(protocols, fetcher, options);
  if (options.dryRun) return result;
  const content = options.classificationOnly
    ? renderClassifications(original, result.protocols)
    : `import type { Protocol } from "./types.ts";\n\nconst protocols: Protocol[] = ${
      JSON.stringify(result.protocols, null, 2).replace(
        /^(\s*)"([A-Za-z_]\w*)":/gm,
        "$1$2:",
      )
    };\n\nexport default protocols;\n`;
  // Do not overwrite edits made during a slow upstream refresh.
  if (await readFile(file, "utf8") !== original) {
    throw new Error("Catalogue changed during refresh; no write performed");
  }
  if (content === original) return result;
  const temp = typeof file === "string"
    ? `${file}.tmp`
    : new URL(`${file.href}.tmp`);
  try {
    await writeFile(temp, content, { flag: "wx" });
    await rename(temp, file);
  } catch (error) {
    // An existing temp file may belong to another updater; never remove it.
    if ((error as NodeJS.ErrnoException).code !== "EEXIST") {
      await unlink(temp).catch(() => {});
    }
    throw error;
  }
  return result;
}

if (import.meta.main) {
  try {
    const args = new Set(Deno.args);
    for (const arg of args) {
      if (!["--classification-only", "--dry-run"].includes(arg)) {
        throw new Error(`Unknown option: ${arg}`);
      }
    }
    const { default: protocols } = await import("../src/data.ts");
    const result = await updateDataFile(DATA_FILE, protocols, undefined, {
      classificationOnly: args.has("--classification-only"),
      dryRun: args.has("--dry-run"),
    });
    for (const issue of result.issues) {
      console.warn(`[${issue.id} ${issue.name}] ${issue.message}`);
    }
    console.log(
      `${result.protocols.length} protocols; ${result.issues.length} review notices; ${result.failed.length} failed lookups`,
    );
    if (result.failed.length) Deno.exitCode = 1;
  } catch (error) {
    console.error("Error updating protocols:", error);
    Deno.exitCode = 1;
  }
}
