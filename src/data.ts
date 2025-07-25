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
    name: "Aster",
    listedAt: 1741711269,
    referralUrl: "https://www.asterdex.com/en/referral/1403b1",
    portfolioUrl: "https://www.asterdex.com/en/stage1/team",
    module: "adapters/astherus.ts",
    defillama: {
      slug: "aster-perps",
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
    portfolioUrl: "https://app.dolomite.io/balances",
    claimUrl: "https://app.dolomite.io/airdrop",
    module: "adapters/dolomite.ts",
    defillama: {
      slug: "dolomite",
      description: "A next-gen money market and DeFi prime brokerage.",
      logo: "https://icons.llama.fi/dolomite.jpg",
      url: "https://dolomite.io",
      twitter: "Dolomite_io",
    },
    symbol: "DOLO",
  },
  {
    id: 6,
    name: "EtherFi",
    symbol: "ETHFI",
    listedAt: 1741711269,
    referralUrl:
      "https://app.ether.fi/weeth?address=0xd3be243c7b11cc0233af0caebac54b713d1403b1",
    portfolioUrl: "https://app.ether.fi",
    module: "adapters/etherfi.ts",
    defillama: {
      slug: "ether.fi-stake",
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
    referralUrl:
      "https://gravityfinance.io/silov2?referrer=0xD3bE243C7B11Cc0233af0cAeBAc54b713d1403b1",
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
    portfolioUrl: "https://app.henlo.com",
    module: "adapters/henlo.ts",
  },
  {
    id: 9,
    name: "Karak",
    listedAt: 1741711269,
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
    referralUrl:
      "https://kelpdao.xyz/restake/?utm_source=0xD3bE243C7B11Cc0233af0cAeBAc54b713d1403b1",
    portfolioUrl: "https://kelpdao.xyz/defi",
    claimUrl: "https://kerneldao.com/claim-airdrop/",
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
    referralUrl: "https://www.lombard.finance/app/?referrer=pl7zti",
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
    portfolioUrl: "https://app.methprotocol.xyz/campaigns/methamorphosis-s3",
    module: "adapters/methprotocol.ts",
    defillama: {
      slug: "meth-protocol",
      description:
        "A permissionless, non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle.",
      logo: "https://icons.llama.fi/meth-protocol.png",
      url: "https://www.mantle.xyz/meth",
      twitter: "0xMantle",
    },
    symbol: "COOK",
  },
  {
    id: 13,
    name: "Ramen",
    symbol: "RAM",
    listedAt: 1741711269,
    portfolioUrl: "https://app.ramen.finance/stake",
    module: "adapters/ramen.ts",
    defillama: {
      slug: "",
      description:
        "Token launchpad powering liquidity for next-gen protocols on Berachain.",
      logo: "https://miro.medium.com/v2/resize:fill:128:128/1*bVUWp4miIuMBX4MlqOChZA.png",
      url: "https://ramen.finance/",
      twitter: "ramen_finance",
    },
  },
  {
    id: 14,
    name: "Resolv",
    listedAt: 1741711269,
    referralUrl: "https://app.resolv.xyz/ref/portal-labs",
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
    symbol: "RESOLV",
  },
  {
    id: 15,
    name: "Solv Finance",
    symbol: "SOLV",
    listedAt: 1741711269,
    referralUrl: "https://app.solv.finance/points/MRNNDW",
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
    portfolioUrl: "https://my.soniclabs.com/points",
    module: "adapters/sonic.ts",
    defillama: {
      isChain: true,
      slug: "Sonic",
      description:
        "DeFi redefined. Sonic is the highest-performing EVM blockchain, combining speed, incentives, and world-class infrastructure.",
      logo: "https://icons.llamao.fi/icons/chains/rsz_sonic.jpg",
      url: "https://www.soniclabs.com/",
      twitter: "SonicLabs",
    },
  },
  {
    id: 17,
    name: "Superform",
    listedAt: 1741711269,
    portfolioUrl: "https://rewards.superform.xyz",
    referralUrl: "https://app.superform.xyz/?ref=2eSYf5ugHvWCGTs3HRTNt",
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
    portfolioUrl: "https://swaps.io/",
    module: "adapters/swapsio.ts",
    defillama: {
      slug: "",
      description:
        "Automate your swapping, staking, and minting actions across 150+ of your favorite dApps & enjoy a seamless UX",
      logo: "https://avatars.githubusercontent.com/u/184085435?s=200&v=4",
      twitter: "swaps_io",
      url: "https://swaps.io/",
    },
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
    name: "Trevee Earn",
    listedAt: 1743179811,
    module: "adapters/rings.ts",
    referralUrl:
      "https://app.rings.money/#/points?referrer=0xD3bE243C7B11Cc0233af0cAeBAc54b713d1403b1",
    portfolioUrl: "https://app.rings.money/#/points",
    defillama: {
      slug: "trevee-earn",
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
    defillama: {
      slug: "",
      description: "Institutional yield, unlocked.",
      logo: "https://s2.coinmarketcap.com/static/img/coins/128x128/33824.png",
      twitter: "syrupfi",
      url: "https://syrup.fi/",
    },
  },
  {
    id: 24,
    name: "Treehouse Protocol",
    listedAt: 1743179811,
    module: "adapters/treehouse.ts",
    referralUrl: "https://app.treehouse.finance/referral/E79CA",
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
  {
    id: 26,
    name: "Ethereal",
    listedAt: 1743287542,
    module: "adapters/ethereal.ts",
    portfolioUrl: "https://deposit.ethereal.trade/points",
    defillama: {
      slug: "ethereal-season-zero",
      description:
        "Ethereal is a decentralized spot and perpetuals exchange built on the Ethena Network, powered by native USDe collateral. With institutional-grade performance (sub-20ms latency, 1M+ orders/s) and DeFi-enabled self-custody from day one, Ethereal aims to be the premier trading venue for the rapidly growing Ethena ecosystem and beyond",
      logo: "https://icons.llama.fi/ethereal.png",
      twitter: "etherealdex",
      url: "https://www.ethereal.trade/",
    },
  },
  {
    id: 27,
    name: "Level Money",
    listedAt: 1743333920,
    module: "adapters/level.ts",
    referralUrl: "https://app.level.money/farm?referralCode=1vfdc0",
    portfolioUrl: "https://app.level.money",
    defillama: {
      slug: "level",
      description:
        "Level is a yield-bearing stablecoin protocol powered by USDT and USDC deposited into DeFi-native sources.",
      logo: "https://icons.llama.fi/level-money.jpg",
      twitter: "levelusd",
      url: "https://www.level.money",
    },
  },
  {
    id: 28,
    name: "Taiko",
    listedAt: 1743552397,
    module: "adapters/taiko.ts",
    portfolioUrl: "https://trailblazers.taiko.xyz/",
    defillama: {
      slug: "Taiko",
      isChain: true,
      description:
        "The most developer-friendly and secure Ethereum scaling solution.",
      logo: "https://icons.llama.fi/taiko.png",
      twitter: "taikoxyz",
      url: "https://taiko.xyz/",
    },
  },
  {
    id: 29,
    name: "Jumper Exchange",
    listedAt: 1744122637,
    module: "adapters/jumperexchange.ts",
    portfolioUrl: "https://jumper.exchange/profile",
    defillama: {
      slug: "jumper-exchange",
      description: "Crypto's Everything Exchange",
      logo: "https://icons.llama.fi/jumper-exchange.jpg",
      twitter: "JumperExchange",
      url: "https://jumper.exchange",
    },
  },
  {
    id: 30,
    name: "Infrared Finance",
    listedAt: 1745509142,
    module: "adapters/infrared.ts",
    portfolioUrl: "https://infrared.finance/points",
    defillama: {
      slug: "infrared-finance",
      description:
        "Infrared is a decentralized protocol that allows users to earn yield on their assets by staking them in a decentralized manner.",
      logo: "https://icons.llama.fi/infrared-finance.jpg",
      twitter: "Infrared_Finance",
      url: "https://infrared.finance",
    },
  },
  {
    id: 31,
    name: "Ethena",
    listedAt: 1745790801,
    module: "adapters/ethena.ts",
    referralUrl: "https://app.ethena.fi/join/j9u8y",
    portfolioUrl: "https://app.ethena.fi/",
    defillama: {
      slug: "ethena-usde",
      description:
        "Ethena is a decentralized protocol that allows users to earn yield on their assets by staking them in a decentralized manner.",
      logo: "https://icons.llama.fi/ethena.png",
      twitter: "Ethena_Protocol",
      url: "https://ethena.xyz",
    },
    symbol: "ENA",
  },
  {
    id: 32,
    name: "deBridge",
    listedAt: 1746642287,
    module: "adapters/debridge.ts",
    referralUrl: "https://app.debridge.finance/r/31994",
    portfolioUrl: "https://app.debridge.finance",
    defillama: {
      slug: "debridge",
      description:
        "deBridge is a cross-chain interoperability and liquidity transfer protocol that allows the decentralized transfer of arbitrary data and assets between various blockchains",
      logo: "https://icons.llama.fi/debridge.jpg",
      twitter: "deBridgeFinance",
      url: "https://debridge.finance",
    },
    symbol: "DBR",
  },
  {
    id: 33,
    name: "Spark",
    listedAt: 1748200290,
    module: "adapters/spark.ts",
    referralUrl: "https://app.spark.fi/points/QTIFUX",
    portfolioUrl: "https://app.spark.fi/points",
    defillama: {
      slug: "sparklend",
      description:
        "Spark is an at-scale stablecoin allocation engine capturing yield across DeFi, RWAs and exchanges. This yield is provided cross-chain to Savings USDS holders",
      logo: "https://icons.llama.fi/sparklend.jpg",
      twitter: "sparkdotfi",
      url: "https://www.spark.fi/",
    },
    symbol: "SPK",
  },
];

export default protocols;
