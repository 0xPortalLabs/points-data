import type { Protocol } from "../src/types.ts";
import protocols from "../src/data.ts";
import { resolveCategory } from "../src/classification.ts";

import { exec } from "node:child_process";
import * as path from "node:path";
import * as fs from "node:fs";

const DATA_FILE = path.join(
  new URL(".", import.meta.url).pathname,
  "..",
  "src",
  "data.ts",
);

const classify = (protocol: Protocol): Protocol => {
  const { category, issues } = resolveCategory(protocol);
  issues.forEach((issue) => console.warn(`[${protocol.name}] ${issue}`));
  return { ...protocol, category };
};

const getProtocol = async (
  slug: string,
  protocolsMap: Map<string, Record<string, string>>,
) => {
  const protocol = protocolsMap.get(slug);
  if (protocol) return protocol;

  const response = await fetch(`https://api.llama.fi/protocol/${slug}`);
  if (!response.ok) return null;

  return await response.json();
};

(async () => {
  try {
    const resProtocols = await (
      await fetch("https://api.llama.fi/protocols")
    ).json();
    const resChains = await (
      await fetch("https://api.llama.fi/v2/chains")
    ).json();

    const protocolsMap = new Map<string, Record<string, string>>(
      resProtocols.map((x: Record<string, string>) => [x.slug, x]),
    );
    const chainsMap = new Map<string, Record<string, string>>(
      resChains.map((x: Record<string, string>) => [x.name, x]),
    );

    const updatedProtocols = await Promise.all(
      protocols.map(async (protocol: Protocol) => {
        const { defillama } = protocol;
        if (!defillama?.slug) {
          return classify({
            ...protocol,
            ...(defillama
              ? { defillama: { ...defillama, category: undefined } }
              : {}),
          });
        }

        const llama = defillama.isChain
          ? chainsMap.get(defillama.slug)
          : await getProtocol(defillama.slug, protocolsMap);
        if (!llama?.name) {
          throw new Error(`did not find protocol: ${defillama.slug}`);
        }

        if (
          llama.category != null &&
          (typeof llama.category !== "string" || !llama.category.trim())
        ) {
          throw new Error(`invalid category: ${defillama.slug}`);
        }
        if (!defillama.isChain && llama.slug && llama.slug !== defillama.slug) {
          throw new Error(`unexpected protocol slug: ${llama.slug}`);
        }
        if (String(llama.id).startsWith("parent#")) {
          console.warn(
            `[${protocol.name}] Parent listing; no child category is inferred`,
          );
        }

        let symbol: string | undefined;
        let logo: string | undefined;

        if (defillama.isChain) {
          const res = await (
            await fetch("https://api.coingecko.com/api/v3/asset_platforms")
          ).json();
          const match = res.find(
            (p: any) => p.native_coin_id === llama.gecko_id,
          );

          logo = match?.image?.thumb || null;
          symbol = llama.tokenSymbol || undefined;
        } else {
          logo = llama.logo;
          symbol = llama.symbol !== "-" ? llama.symbol : undefined;
        }

        // Supplied project metadata takes priority; upstream only fills gaps.
        protocol.symbol = protocol.symbol || symbol;

        return classify({
          ...protocol,
          defillama: {
            ...defillama,
            category: llama.category ?? undefined,
            description: defillama.description || llama.description || "",
            logo: defillama.logo || logo || null,
            twitter: defillama.twitter || llama?.twitter,
            url: defillama.url || llama.url!,
          },
        });
      }),
    );

    const file = `import type { Protocol } from "./types.ts";

const protocols: Protocol[] = ${JSON.stringify(updatedProtocols, null, 2)};

export default protocols;
`;

    console.log("writing");
    fs.writeFileSync(DATA_FILE, file);

    console.log("formatting");
    exec(`prettier --write ${DATA_FILE}`); // dont care if this fails

    console.log("done");
  } catch (error) {
    console.error("Error updating protocols:", error);
  }
})();
