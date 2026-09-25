export interface Protocol {
  id: number;
  name: string;
  symbol?: string;
  listedAt: number;
  referralUrl?: string;
  portfolioUrl: string;
  /** Reviewed active claim programme; never implies eligibility for a specific wallet.
   * For projects without claimSeasons. Missing/false disables claim promotion.
   * Adapters must not override this field.
   */
  claimAvailable?: boolean;
  /** Exclusive promotion deadline, UTC ISO timestamp (YYYY-MM-DDTHH:mm:ssZ).
   * Omit only when no deadline is known. Invalid values disable promotion.
   */
  claimEndsAt?: string;
  /** Optional reviewed claim destination; portfolioUrl is the fallback. */
  claimUrl?: string;
  /** Season-specific programmes. When present, replaces project-wide availability.
   * Keys are season labels (e.g. "Season 2"); unknown seasons stay unavailable.
   */
  claimSeasons?: Record<string, { claimAvailable?: boolean; claimUrl?: string; claimEndsAt?: string }>;
  module: string;
  defillama?: {
    isChain?: boolean;
    slug: string;
    description: string;
    logo: string | null;
    twitter?: string;
    url: string;
  };
}
