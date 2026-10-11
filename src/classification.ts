import {
  type Protocol,
  PROTOCOL_CATEGORIES,
  type ProtocolCategory,
} from "./types.ts";

/** Exact, reviewed taxonomy mapping. Unknown values must remain visible as gaps. */
export const DEFILLAMA_CATEGORY_MAP: Readonly<
  Record<string, ProtocolCategory>
> = {
  "Anchor BTC": "DeFi",
  "Basis Trading": "Yield",
  "Bridge": "Bridge",
  "Bridge Aggregator": "Bridge",
  "CDP": "Stables",
  "Collateral Markets": "DeFi",
  "Derivatives": "DEX",
  "DEX Aggregator": "DEX",
  "Dexs": "DEX",
  "Farm": "Yield",
  "Interface": "DeFi",
  "Launchpad": "Launchpad",
  "Lending": "Lending",
  "Liquid Restaking": "Staking",
  "Liquid Staking": "Staking",
  "Liquidity Manager": "Yield",
  "Onchain Capital Allocator": "Yield",
  "Options": "DEX",
  "Prediction Market": "Prediction Market",
  "Restaked BTC": "Staking",
  "Restaking": "Staking",
  "RWA": "RWA",
  "Stablecoin Wrapper": "Stables",
  "Wallets": "Wallet",
  "Yield": "Yield",
  "Yield Aggregator": "Yield",
};

export type ClassificationInput = Pick<
  Protocol,
  "categoryOverride" | "defillama"
>;

export function resolveCategory(protocol: ClassificationInput): {
  category: ProtocolCategory;
  issues: string[];
} {
  const issues: string[] = [];
  const raw = protocol.defillama?.category;
  const mapped = raw && Object.hasOwn(DEFILLAMA_CATEGORY_MAP, raw)
    ? DEFILLAMA_CATEGORY_MAP[raw]
    : undefined;
  const chain = protocol.defillama?.isChain === true;
  if (raw && !mapped) {
    issues.push(`Unmapped DeFiLlama category: ${JSON.stringify(raw)}`);
  }
  if (chain && raw) {
    issues.push(
      `Chain metadata also carries a protocol category: ${JSON.stringify(raw)}`,
    );
  }

  const override = protocol.categoryOverride;
  if (override) {
    if (
      !PROTOCOL_CATEGORIES.includes(override.category) ||
      !override.reason?.trim()
    ) {
      throw new Error(
        "Category override requires an allowed category and a review reason",
      );
    }
    const source = new URL(override.source);
    if (source.protocol !== "https:" || source.username || source.password) {
      throw new Error("Category override requires an HTTPS review source");
    }
    const generated = chain ? "Chain" : mapped;
    if (generated && override.category !== generated) {
      issues.push(
        `Reviewed override ${override.category} conflicts with generated ${generated}; review source: ${override.source}`,
      );
    }
    return { category: override.category, issues };
  }
  if (chain) return { category: "Chain", issues };
  if (mapped) return { category: mapped, issues };
  if (!raw) {
    issues.push("No upstream category or reviewed override; using Other");
  }
  return { category: "Other", issues };
}
