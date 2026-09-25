# Claim programme metadata

Data owns claim promotion and official destinations. Adapter responses do not set these fields. Availability never implies eligibility for a particular wallet.

- `claimAvailable: true`: reviewed project-level availability for a project without season-specific configuration.
- `claimSeasons`: a map of season labels to `{ claimAvailable, claimUrl?, claimEndsAt? }`. When present, this replaces project-level availability. Explicit season rows/routes never inherit the project flag; missing, false, unknown, or ambiguous seasons are unavailable.
- `claimEndsAt`: optional exclusive UTC deadline in `YYYY-MM-DDTHH:mm:ssZ` format, at project or season level. Availability requires the flag to be true and the current time to be strictly before this deadline. Invalid, empty, timezone-less, and impossible dates disable promotion. Season deadlines are independent; a project-level deadline is not inherited by seasons.
- Use one entry per season, such as `"Season 2"`. The frontend's existing season resolver recognizes equivalent labels such as `"S2 Points"`; do not add duplicate keys for the same season number.
- Project-level actions list available programmes independently of the displayed points season. For example, showing Season 3 or Season 4 points still offers **Check S2 claim** while Season 2 remains enabled. Multiple available seasons offer a choice. A badge beside a specific season’s points uses only that season’s entry; explicit season routes/rows remain scoped to that season.
- Each claim action uses its season’s `claimUrl`, then the project’s `claimUrl`, then `portfolioUrl`. Project-level actions identify the available season rather than silently selecting an arbitrary season destination.
- Destinations must be absolute HTTPS URLs without embedded credentials. Do not copy URLs from adapter responses.
- False/missing availability keeps the portfolio **Check claim** Easter egg, with **Visit project** linking to `portfolioUrl`. The project page wallet module retains **Check Points** when no programme is available.
- For known deadlines, the frontend automatically stops promotion at `claimEndsAt`, including in open tabs and at click time; a rebuild is not needed when an already-shipped deadline passes. It uses the device clock for presentation, not on-chain authorization. For early closure or an unknown deadline, set the relevant flag to false and release a Data/app update. Starting a new points season does not close older claims. Retaining a URL does not reactivate a closed programme.

## Initial migration

- deBridge: Season 2 enabled; Seasons 1 and 3 disabled, matching the old Season 2 claim check.
- Harmonix: Season 1 enabled; Season 2 disabled, matching the old Season 1 claim check.
- Lombard: S3 enabled until October 29, 2026 at 00:00 UTC; S4 disabled. Confirmed in the [official BARD FAQ](https://docs.lombard.finance/use/faq/bard), reviewed September 25, 2026.
- Treehouse: S1 vested claims and S2 enabled, using the existing Gaia Foundation link published in the [official announcement](https://www.treehouse.finance/blog/s2-airdrop). S2 closes November 25, 2026 at 07:00 UTC per [key information](https://docs.treehouse.finance/protocol/tree-token/airdrop-details-s2/key-information). S1 is reported as closing October 27 without an exact time; we conservatively stop promotion at 00:00 UTC that day pending an exact published time. S2 claiming ends vesting and is one-time; the UI offers a check, not advice to claim immediately. Reviewed September 25, 2026.
- Fusion: points tracking stays active, but S1/S2 claim promotion remains disabled. The [official points page](https://app.ipor.io/fusion/points) describes earning points, not a confirmed redemption window. The old adapter only tested whether the aggregate balance was positive.
- Dolomite, Ethena, Kelp DAO, and Rainbow retain the prior project-level claim paths; the inspected adapter checks did not identify a season. An explicit season still requires its own Data entry.
- Infrared and MegaETH remain unavailable because their legacy adapters record expired claim deadlines (January 12 and June 10, 2026 respectively).

Except for the explicitly sourced reviews above, this migration uses prior application behavior, not fresh external verification of each programme. Adapter flags are no longer consulted at runtime. The catalog update script preserves these manually maintained fields.
