import type { Protocol } from "./types.ts";

const protocols: Protocol[] = [
  {
    id: 1,
    name: "Avalon Finance",
    listedAt: 1741711269,
    portfolioUrl: "https://app.avalonfinance.xyz/points",
    module: "adapters/avalon.ts",
    defillama: {
      slug: "avalon-finance",
      description: "The Liquidity Hub For BTC LSDFi and CeDeFi Lending",
      logo: "https://icons.llama.fi/avalon-labs.jpg",
      url: "https://www.avalonfinance.xyz",
      twitter: "avalonfinance_",
    },
  },
  {
    id: 2,
    name: "Astherus",
    listedAt: 1741711269,
    portfolioUrl: "https://www.astherus.finance/en/stage1/team",
    module: "adapters/astherus.ts",
    defillama: {
      slug: "astherus-perps",
      description:
        "Astherus is a liquidity hub for staked assets such as LSTs (liquid staking tokens) and LRTs (liquid restaking tokens), aiming to scale their utilization and boost user profitability.",
      logo: "https://icons.llama.fi/astherus-perps.jpg",
      url: "https://www.astherus.finance",
      twitter: "AstherusHub",
    },
  },
  {
    id: 3,
    name: "Bedrock",
    listedAt: 1741711269,
    portfolioUrl: "https://app.bedrock.technology",
    module: "adapters/bedrock.ts",
    defillama: {
      slug: "bedrock-unibtc",
      description: "BTC staked into babylon",
      logo: "https://icons.llama.fi/bedrock-unibtc.jpg",
      url: "https://app.bedrock.technology/",
      twitter: "Bedrock_DeFi",
    },
  },
  {
    id: 4,
    name: "Corn",
    listedAt: 1741711269,
    referralUrl: "https://usecorn.com/app",
    portfolioUrl: "https://usecorn.com/app",
    module: "adapters/corn.ts",
    defillama: {
      slug: "corn-kernels",
      description:
        "Kernels are off-chain points that represent your share of the initial $CORN Community Airdrop",
      logo: "https://icons.llama.fi/corn-kernels.jpg",
      url: "https://usecorn.com/",
      twitter: "use_corn",
    },
  },
  {
    id: 5,
    name: "Dolomite",
    listedAt: 1741711269,
    referralUrl: "https://app.dolomite.io/balances",
    portfolioUrl: "https://app.dolomite.io/balances",
    module: "adapters/dolomite.ts",
    defillama: {
      slug: "dolomite",
      description: "A next-gen money market and DeFi prime brokerage.",
      logo: "https://icons.llama.fi/dolomite.jpg",
      url: "https://dolomite.io",
      twitter: "Dolomite_io",
    },
  },
  {
    id: 6,
    name: "EtherFi",
    symbol: "ETHFI",
    listedAt: 1741711269,
    referralUrl: "https://app.ether.fi",
    portfolioUrl: "https://app.ether.fi",
    module: "adapters/etherfi.ts",
    defillama: {
      slug: "ether.fi-vaults",
      description:
        "An automated vault that earns you Symbiotic, Veda or ether.fi points on your liquid staking assets.",
      logo: "https://icons.llama.fi/ether.fi-vaults.jpg",
      url: "https://app.ether.fi/liquid/symbiotic",
      twitter: "ether_fi",
    },
  },
  {
    id: 7,
    name: "Gravity Finance",
    symbol: "GFI",
    listedAt: 1741711269,
    referralUrl: "https://gravityfinance.io/rewards",
    portfolioUrl: "https://gravityfinance.io/rewards",
    module: "adapters/gravityfinance.ts",
    defillama: {
      slug: "gravity-finance",
      description:
        "Gravity Finance is a DeFi platform, consisting of a Decentralised Exchange, Yield Farms, Auto-Compounding Vaults, an IDO Launchpad and Automated Investment Strategies called Silos. Gravity Admin Fees are paid to Governance Token Holders as ETH and BTC.",
      logo: "https://icons.llama.fi/gravity-finance.png",
      url: "https://gravityfinance.io/",
      twitter: "Gravity_Finance",
    },
  },
  {
    id: 8,
    name: "Henlo",
    symbol: "HEN",
    listedAt: 1741711269,
    referralUrl: "https://app.henlo.com",
    portfolioUrl: "https://app.henlo.com",
    module: "adapters/henlo.ts",
  },
  {
    id: 9,
    name: "Karak",
    listedAt: 1741711269,
    referralUrl: "https://app.karak.network/portfolio",
    portfolioUrl: "https://app.karak.network/portfolio",
    module: "adapters/karak.ts",
    defillama: {
      slug: "karak",
      description:
        "The universal restaking layer powered by the entire cryptoeconomy.",
      logo: "https://icons.llama.fi/karak.png",
      url: "https://karak.network",
      twitter: "Karak_Network",
    },
  },
  {
    id: 10,
    name: "KelpDAO",
    listedAt: 1741711269,
    referralUrl: "https://kelpdao.xyz/defi",
    portfolioUrl: "https://kelpdao.xyz/defi",
    module: "adapters/kelpdao.ts",
    defillama: {
      slug: "kelp",
      description:
        "Kelp is the second largest liquid restaking protocol with ~$2B+ in TVL. Its liquid restaked token, rsETH, is live across 10+ major L2s and 40+ DeFi platforms, allowing users to restake while maintaining full liquidity.",
      logo: "https://icons.llama.fi/kelp-dao.png",
      url: "https://kelpdao.xyz/restake",
      twitter: "KelpDAO",
    },
  },
  {
    id: 11,
    name: "Lombard",
    listedAt: 1741711269,
    referralUrl: "https://www.lombard.finance/app/dashboard",
    portfolioUrl: "https://www.lombard.finance/app/dashboard",
    module: "adapters/lombard.ts",
    defillama: {
      slug: "lombard",
      description:
        "Lombard is transforming Bitcoin's utility from a store of value into a productive financial tool through a security-first liquid Bitcoin primitive—LBTC. LBTC is a liquid, yield-bearing, natively cross-chain, and 1:1 backed by bitcoin.",
      logo: "https://icons.llama.fi/lombard.jpg",
      url: "https://www.lombard.finance",
      twitter: "Lombard_Finance",
    },
  },
  {
    id: 12,
    name: "mETH Protocol",
    listedAt: 1741711269,
    referralUrl: "https://app.methprotocol.xyz/campaigns/methamorphosis-s2",
    portfolioUrl: "https://app.methprotocol.xyz/campaigns/methamorphosis-s2",
    module: "adapters/methprotocol.ts",
    defillama: {
      slug: "meth-protocol",
      description:
        "A permissionless, non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle.",
      logo: "https://icons.llama.fi/meth-protocol.png",
      url: "https://www.mantle.xyz/meth",
      twitter: "0xMantle",
    },
  },
  {
    id: 13,
    name: "Ramen",
    symbol: "RAM",
    listedAt: 1741711269,
    referralUrl: "https://app.ramen.finance/stake",
    portfolioUrl: "https://app.ramen.finance/stake",
    module: "adapters/ramen.ts",
  },
  {
    id: 14,
    name: "Resolv",
    listedAt: 1741711269,
    referralUrl: "https://app.resolv.xyz/points",
    portfolioUrl: "https://app.resolv.xyz/points",
    module: "adapters/resolv.ts",
    defillama: {
      slug: "resolv",
      description:
        "Resolv is a protocol that maintains USR, a stablecoin fully backed by ETH and pegged to the US Dollar. The stablecoin’s delta-neutral design ensures price stability, and is backed by an innovative insurance pool (RLP) to provide additional security and overcollateralization.",
      logo: "https://icons.llama.fi/resolv.jpg",
      url: "https://resolv.xyz/",
      twitter: "ResolvLabs",
    },
  },
  {
    id: 15,
    name: "Solv Finance",
    symbol: "SOLV",
    listedAt: 1741711269,
    referralUrl: "https://app.solv.finance/points",
    portfolioUrl: "https://app.solv.finance/points",
    module: "adapters/solv.ts",
    defillama: {
      slug: "solvbtc",
      description: "Earn Solv Points By Staking Your BTC",
      logo: "https://icons.llama.fi/solvbtc.jpg",
      url: "https://app.solv.finance/solvbtc",
      twitter: "SolvProtocol",
    },
  },
  {
    id: 16,
    name: "Sonic",
    symbol: "S",
    listedAt: 1741711269,
    referralUrl: "https://my.soniclabs.com/points",
    portfolioUrl: "https://my.soniclabs.com/points",
    module: "adapters/sonic.ts",
    defillama: {
      isChain: true,
      slug: "Sonic",
      description: "",
      logo: "https://coin-images.coingecko.com/asset_platforms/images/22192/thumb/128xS_token_Black-BG_2x.png?1735963719",
      url: "https://www.soniclabs.com/",
    },
  },
  {
    id: 17,
    name: "Superform",
    listedAt: 1741711269,
    referralUrl: "https://www.superform.xyz/cred/",
    portfolioUrl: "https://www.superform.xyz/cred/",
    module: "adapters/superform.ts",
    defillama: {
      slug: "superform",
      description:
        "Superform is the onchain wealth app. Superform earns you the best returns on your crypto to grow your onchain wealth. Use SuperVaults to automatically optimize your earnings, or build your customized portfolio by directly depositing into over 800 earning opportunities",
      logo: "https://icons.llama.fi/superform.png",
      url: "https://www.superform.xyz/",
      twitter: "superformxyz",
    },
  },
  {
    id: 18,
    name: "Swaps.io",
    listedAt: 1741711269,
    referralUrl: "https://swaps.io/",
    portfolioUrl: "https://swaps.io/",
    module: "adapters/swapsio.ts",
  },
  {
    id: 19,
    name: "Silo Finance",
    listedAt: 1742925546,
    portfolioUrl: "https://points.silo.finance/",
    module: "adapters/silofinance.ts",
    defillama: {
      slug: "silo-v2",
      description:
        "Silo Finance creates permissionless and risk-isolated lending markets.",
      logo: "https://icons.llama.fi/silo-finance.png",
      twitter: "SiloFinance",
      url: "https://app.silo.finance",
    },
    symbol: "SILO",
  },
  {
    id: 20,
    name: "SwapX",
    listedAt: 1742925546,
    module: "adapters/swapx.ts",
    portfolioUrl: "https://swapx.fi/airdrop",
    defillama: {
      slug: "swapx-v2",
      description:
        "SwapX, Sonic's native DEX, leverages Algebra V4 for advanced concentrated liquidity management and ve(3,3) tokenomics while pioneering modular DeFi with plugin technology",
      logo: "https://icons.llama.fi/swapx-v2.jpg",
      twitter: "SwapXfi",
      url: "https://swapx.fi/",
    },
    symbol: "SWPX",
  },
  {
    id: 21,
    name: "Rings",
    listedAt: 1743179811,
    module: "adapters/rings.ts",
    portfolioUrl: "https://app.rings.money/#/points",
    defillama: {
      slug: "rings",
      description:
        "Rings is a meta-stablecoin for USD & ETH offering competitive yield for stakers, providing deep liquidity for Sonic DeFi, and funding Sonic DeFi projects via its lockers.",
      logo: "https://icons.llama.fi/rings.jpg",
      twitter: "Rings_Protocol",
      url: "https://rings.money/",
    },
  },
  {
    id: 22,
    name: "Symbiotic",
    listedAt: 1743179811,
    module: "adapters/symbiotic.ts",
    portfolioUrl: "https://app.symbiotic.fi/dashboard/positions",
    defillama: {
      slug: "symbiotic",
      description:
        "Symbiotic is a generalized shared security system enabling decentralized networks to bootstrap powerful, fully sovereign ecosystems.",
      logo: "https://icons.llama.fi/symbiotic.png",
      twitter: "symbioticfi",
      url: "https://symbiotic.fi",
    },
  },
  {
    id: 23,
    name: "Syrup",
    listedAt: 1743179811,
    module: "adapters/syrup.ts",
    portfolioUrl: "https://syrup.fi/portfolio",
  },
  {
    id: 24,
    name: "Treehouse Protocol",
    listedAt: 1743179811,
    module: "adapters/treehouse.ts",
    portfolioUrl: "https://app.treehouse.finance/portfolio",
    defillama: {
      slug: "treehouse-protocol",
      description:
        "Treehouse is a decentralized application that introduces Treehouse Assets (tAssets) and Decentralized Offered Rates (DOR), new primitives that enable fixed income products in digital assets.",
      logo: "https://icons.llama.fi/treehouse-protocol.jpg",
      twitter: "TreehouseFi",
      url: "https://www.treehouse.finance/",
    },
  },
  {
    id: 25,
    name: "Veda",
    listedAt: 1743179811,
    module: "adapters/veda.ts",
    portfolioUrl: "https://app.veda.tech/points",
    defillama: {
      slug: "veda",
      description:
        "Veda is the leading DeFi vault platform, enabling crypto applications, asset issuers, and protocols to build consumer-grade cross chain yield products. Veda's technology is powering many of DeFi's largest vault products, including ether.fi Liquid, Lombard DeFi Vault, and Mantle cmETH",
      logo: "https://icons.llama.fi/veda.png",
      twitter: "veda_labs",
      url: "https://veda.tech",
    },
  },
];

export default protocols;
