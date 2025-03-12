export interface Protocol {
  id: number;
  name: string;
  symbol?: string;
  listedAt: number;
  referralUrl?: string;
  portfolioUrl: string;
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
