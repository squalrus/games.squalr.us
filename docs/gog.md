[← Release Plan](README.md)

# GOG (PC, DRM-free)

> **Speculative.** Unlike every other platform in this plan, GOG is not self-serve — getting listed at all is the open question, not just the mechanics of submission. Treat this document as "what we'd need to investigate," not a committed path.

## Accounts & Licenses

- **GOG Publishing partner account** — register at `partners.gog.com` (GOG's developer/publisher portal). No public flat listing fee like Steam's $100 — instead GOG takes a revenue-share cut on sales (tiered, broadly similar in spirit to Steam's 30%, reportedly stepping down at higher revenue thresholds; **verify current rates in the partner portal**, GOG's terms have changed over the years and aren't fully public outside the portal).
- **Curation gate, not a fee gate:** GOG reviews submissions for fit/quality before agreeing to carry a title — there's no guaranteed-acceptance self-publish tier the way Steam Direct works. A small indie title with no prior track record may simply be declined; this is the main reason this whole platform is "investigate" rather than "ship."
- No company registration required to apply, but a registered business (see [Business Entity](business-entity.md)) presents better in a curated pitch than an individual with no history.

## Required Build Work (ties to backlog)

- [Investigate Release on GOG](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-gog) — reuses the same Windows Standalone (x86_64) build as [Steam](steam.md) and [Xbox](xbox.md); no separate build target needed. Sequence this after that build validation work is already done for Steam, not before.
- **DRM-free requirement:** the build must run standalone without requiring any GOG client to be installed or running — this is GOG's core brand promise to players. Since this project has no DRM/license-check code to begin with, this is likely a non-issue, but verify nothing platform-specific (Steamworks calls, achievement SDK calls) accidentally hard-fails when that SDK isn't present, if Steam integration work happens first.
- **GOG Galaxy SDK integration is optional**, not required to list. Skip it for an initial submission; only revisit if GOG-native achievements/cloud saves become a priority later.

## Store Assets Required

| Asset | Spec |
|---|---|
| Cover art / box art | Similar dimensions to Steam's library capsule (vertical) — confirm exact spec in the partner portal, GOG's asset specs aren't fully public pre-acceptance |
| Background/hero art | Confirm in partner portal |
| Screenshots | Several, similar to Steam's requirements |
| Trailer | Recommended, video file upload |
| Age rating | Self-disclosure / regional rating questionnaire, similar in spirit to IARC |

## Metadata

- Store page title, short/long description, tags/genres, supported languages.
- Support URL, privacy policy URL — same hosted pages as the other platforms: **<https://games.squalr.us/privacy>** and **<https://games.squalr.us/support>**.
- System requirements (minimum and recommended) — same data needed for [Steam](steam.md#metadata).

## Achievements / Leaderboards

- **GOG Galaxy SDK** offers optional achievements/leaderboards/cloud saves, but only functions when the player has the GOG Galaxy client running — since the game itself is DRM-free and playable without Galaxy, a meaningful slice of GOG players may never launch it through Galaxy at all.
- Not worth building for v1. If pursued later, it's additive on top of the DRM-free build, same shape as the other platforms' native integrations — see [Cross-Platform Achievements/Leaderboards](achievements.md).

## Suggested Price Point

No independent pricing rationale beyond [Steam's](steam.md#suggested-price-point) — GOG buyers expect price parity with Steam for the same game, so whatever price is set there should be mirrored here rather than treated as a separate decision.

## Testing

See [Testing on Each Platform: GOG](testing.md#gog).
