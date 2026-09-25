# Claim programme metadata

Maintain claim availability and official destinations in `src/data.ts`. Availability describes an open programme, not wallet eligibility.

| Field | Purpose |
| --- | --- |
| `claimAvailable` | Set to `true` for a verified open programme. Missing or `false` disables promotion. |
| `claimUrl` | Optional official HTTPS destination; falls back to `portfolioUrl`. |
| `claimEndsAt` | Optional exclusive UTC deadline: `YYYY-MM-DDTHH:mm:ssZ`. Expired or invalid values disable promotion. |
| `claimSeasons` | One entry per season containing the fields above. Replaces project-wide availability; deadlines are not inherited. |

1. Verify availability, destination, and any deadline against official project information.
2. Configure the project or individual seasons. Season links fall back to the project’s `claimUrl`, then `portfolioUrl`.
3. Keep older open claims enabled when a new points season starts. Disable the relevant flag for early closure; configured deadlines expire automatically.
4. Release catalog changes through the consuming app’s submodule update and rebuild.

Use unique season keys such as `"Season 2"`. Do not derive these fields from adapter responses.
