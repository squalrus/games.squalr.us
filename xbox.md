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
| The hook | In just a few sentences or paragraphs, describe your game and why gamers will care about it | TBD |
| Gameplay details and summary | List and describe game modes (campaign, tutorials, mini games, etc). Provide a detailed moment-to-moment walkthrough of the core game experience — what the player is seeing, doing, and thinking. | TBD |
| Estimated gameplay duration | How long it takes to complete the game, or reach a "full experience." | TBD |
| Levels / Stages | More detail about the levels / stages in the game (sectors, in this game's case). | TBD |
| Number of levels / stages | The number of levels / stages / chapters / sections that make up the game. | TBD |

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
