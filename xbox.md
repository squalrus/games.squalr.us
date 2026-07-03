[← Release Plan](README.md)

# Xbox

## Accounts & Licenses

Two distinct programs exist — pick one:

1. **Xbox Live Creators Program (XLCP)** — low barrier to entry, free to join via a **Microsoft Partner Center** account, self-publish, builds run on retail Xbox consoles via "Dev Mode" (any consumer can put their console in developer mode for free). Supports a *limited* subset of Xbox Live services: presence, limited leaderboards, no achievements with Gamerscore. Good for a first console release.
2. **ID@Xbox** — the full program (richer Xbox Live features incl. real Gamerscore achievements, marketing support, access to dev kits) but is an **application/approval process**, not self-serve — Microsoft reviews your studio and game before granting access. Historically free to join once accepted, but expect a multi-week vetting period.

**Recommendation: start with Xbox Live Creators Program** for the initial release — it gets a build live fastest — and apply to ID@Xbox in parallel if you want real Gamerscore-bearing achievements later.

- **Microsoft Partner Center account** — **already registered** (see [Business Entity: Current Status](business-entity.md#current-status)). Confirm the account is re-associated with SQUALRUS GAMES LLC once formation completes, for a cleaner paper trail on payouts.
- Unity's Xbox platform module requires a Microsoft-provided Xbox extension package (gated behind Partner Center/ID@Xbox access — not in the public Unity Hub module list). Confirm current access requirements when you're ready to build, since this gating has changed over the years.

## Required Build Work (ties to backlog)

- [Investigate Release on Windows and Xbox](../BACKLOG.md#investigate-release-on-windows-and-xbox) is still "exploratory" in the backlog — this needs to happen before any submission: verify Input System gamepad bindings work on Xbox controllers, verify UI Toolkit renders correctly at console-safe resolutions/TV-safe areas, and test performance at 1080p/4K depending on target Xbox SKU (Series S vs Series X). This same Windows Standalone build work is also the prerequisite for [Steam](steam.md) — sequence Xbox and Steam together rather than redoing the Windows build validation twice.

## Game Concept Questions

The Xbox/Partner Center application asks for the following descriptive content. Still TBD — fill these in as the game's scope solidifies:

| Question | Asks for | Content |
|---|---|---|
| The hook | In just a few sentences or paragraphs, describe your game and why gamers will care about it | Infinity Space is a top-down survival space shooter where the real enemy isn't the enemy — it's the fuel gauge. Every sector drops you into a procedurally generated kill zone with a finite tank and a finite magazine. Enemies and asteroids drop ship parts when destroyed; those parts are the only way to stay armed, fueled, and alive. Spend them mid-run for emergency top-offs, or save them for permanent ship upgrades between sectors that make the next run feel earned. There's no defined end — you push until the ship goes dark. No accounts, no ads, no pay-to-win: just the ship, the sector, and however far you can go. |
| Gameplay details and summary | List and describe game modes (campaign, tutorials, mini games, etc). Provide a detailed moment-to-moment walkthrough of the core game experience — what the player is seeing, doing, and thinking. | **Single mode: Endless Sector Run.** No tutorial screen — the game drops the player directly into sector 1 with basic enemies and trusts the controls to be self-evident. Moment-to-moment: the player steers and thrusts with the left stick and fires with the primary button. Enemies lock on and close range; asteroids drift across the play area as cover and loot. Every destroyed object scatters glowing ship parts that float toward the player once within magnet range. The HUD shows health, fuel, ammo, and a radar with a live objective progress bar. Once enough enemies are cleared (the sector's completion threshold), the sector portal opens. Flying into the portal ends the sector and opens the between-sector screen — three pages: a stats summary, sector achievements that pay out bonus parts, and a ship upgrade shop for permanent speed/firepower/capacity/research improvements. "Launch Sector" sends the player into the next sector, which is harder. Sector *type* varies each run: most sectors are standard clear-percentage objectives; Relic sectors mark one enemy as a carrier — destroy it carefully and collect the drop before it's shot down, or fail the objective; Large Threat sectors pit the player against a single large, tough enemy backed by light support instead of a swarm. Death at any point ends the run and shows a game-over screen with session statistics. |
| Estimated gameplay duration | How long it takes to complete the game, or reach a "full experience." | Infinity Space has no fixed ending — the run continues until the ship is destroyed. A single sector takes roughly 3–8 minutes depending on size and objective type. A typical novice run ends around sector 3–6 (15–30 minutes total); a skilled player extending a session to sector 10 or beyond will see 45–60+ minutes. The "full experience" is mastering the resource loop well enough to push deeper each session — closer to a roguelite time model than a story-completion model. |
| Levels / Stages | More detail about the levels / stages in the game (sectors, in this game's case). | Each **sector** is a self-contained play area procedurally populated at load time — enemy count, spread, and asteroid density are all generated fresh, so no two runs look identical. Sectors are organized into four difficulty tiers that unlock as the run progresses: a smaller introductory tier for sector 1, a standard tier for sectors 2–4, a large-threat boss tier at sector 5, and a harder standard tier from sector 6 onward. Independently of tier, each sector is assigned one of three objective types: standard (clear a percentage of enemies to open the portal), Relic (find and collect a Relic carried by a single marked enemy without letting it be destroyed), or Large Threat (destroy a single large enemy boss backed by support ships). Tier and objective type are chosen separately, so the combination varies each run. |
| Number of levels / stages | The number of levels / stages / chapters / sections that make up the game. | Sectors are procedurally generated and infinite — there is no final sector. The run ends when the player's ship is destroyed. There are 4 distinct sector difficulty tiers and 3 sector objective types, producing a varied mix of encounters across an unbounded run length. |

## Store Assets Required

| Asset | Spec (approximate — confirm in Partner Center at submission time) |
|---|---|
| Store icon (Square 310×310) | PNG |
| Store icon (Wide 558×744 / Poster) | PNG |
| Hero/background art | 1920×1080 |
| Screenshots | 1920×1080, several required |
| Trailer | Optional but recommended, video file |
| Age rating | Via **IARC** questionnaire (same underlying system Google uses) inside Partner Center |

## Metadata

- Title, description (short + long), category, store contact/support email.
- Privacy policy URL (same requirement as Android — can reuse the same hosted page).
- Pricing tier selection (Microsoft uses fixed price tiers per region rather than arbitrary prices).

## Achievements / Leaderboards

- **Xbox Live Creators Program:** limited leaderboard support, no traditional achievement/Gamerscore system. Players authenticate with their existing **Xbox/Microsoft account** — no custom account needed for what XLCP does offer.
- **Full ID@Xbox / Xbox Live:** real achievements (with Gamerscore) and full leaderboard service, also tied to the player's existing Xbox Live/Microsoft account.
- Either way: **no custom account system required for Xbox-native achievements/leaderboards.** Same cross-platform-silo caveat as Android applies — Xbox Live data won't bridge to Google Play Games or Switch natively. See [Cross-Platform Achievements/Leaderboards](achievements.md).

## Suggested Price Point

Console buyers expect premium pricing and dislike ads in paid console titles. Suggest **$4.99–$6.99** for an Xbox release of this scope (small indie arcade shooter) — meaningfully higher than the mobile price point because console storefronts skew toward paid-only expectations and Xbox doesn't have a comparable ad-supported norm.

## Testing

See [Testing on Each Platform: Xbox](testing.md#xbox).
