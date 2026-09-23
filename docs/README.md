# InfinitySpace — Multi-Platform Release Plan

> Prepared: 2026-06-23
> Scope: turns the high-level backlog items [Investigate Release on Android](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-android), [Investigate Release on Windows and Xbox](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-windows-and-xbox), [Investigate Release on Steam](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-steam), and [Investigate Release on Nintendo Switch](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-nintendo-switch) into a concrete, platform-by-platform launch checklist: accounts, licenses, store assets, metadata, achievements/leaderboards integration, pricing, and the business-entity question.

This is a planning document, not a committed schedule. Treat dollar figures and turnaround times as 2026 ballpark estimates — verify against each platform's current developer portal before committing money.

This plan is split across documents in this folder:

- [Game Bio](game-bio-infinity-space.md) — source of truth for name, tagline, short/long descriptions, asset references, legal links
- [Business Entity](business-entity.md) — LLC vs. individual, current registration status
- [Android](android.md)
- [Xbox](xbox.md)
- [Steam](steam.md)
- [GOG](gog.md) — speculative; curated, not self-serve, so listing isn't guaranteed
- [Nintendo Switch](switch.md)
- [Cross-Platform Achievements/Leaderboards](achievements.md) — decision summary across all four platforms
- [Testing on Each Platform](testing.md)

---

## Current State (affects every platform)

- No ad network or IAP package is currently in `Packages/manifest.json` (`com.unity.ads`/`com.unity.purchasing` are listed in [AUDIT.md](https://github.com/squalrus/infinity-space/blob/main/AUDIT.md) as "packages to keep" but are **not actually installed** — they were either removed during the Unity 6 upgrade or never re-added). Monetization is undecided in code, not just in store config.
- A privacy policy and support page are live at **<https://games.squalr.us/privacy>** and **<https://games.squalr.us/support>** (source: `src/pages/Privacy.jsx` / `Support.jsx`, deployed via Azure Static Web Apps). Every storefront in this plan, including [GOG](gog.md), requires both — wire these URLs into each store listing's metadata.
- `companyName` in `ProjectSettings/ProjectSettings.asset` is currently `Squalrus` — the decided public developer/publisher name is **SQUALRUS GAMES** (see [Business Entity: Current Status](business-entity.md#current-status)); update this field to match before it shows up in store listings.
- No cloud save / leaderboard backend exists yet ([Connected Service for Cloud Saving and Leaderboards](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#connected-service-for-cloud-saving-and-leaderboards) is still backlog). Each platform's document below depends on a decision about whether achievements/leaderboards are per-platform-native or a custom cross-platform backend (see [Cross-Platform Achievements/Leaderboards](achievements.md)).

---

## Suggested Sequencing

1. **Decide entity** (LLC vs. individual) — blocks Nintendo application timing the most; doesn't block Android/Xbox/Steam. See [Business Entity](business-entity.md).
2. **Android first** — lowest cost ($25), fastest review, no hardware dev kit, validates the build/signing/store pipeline end to end. Wire up Play Games Services if achievements/leaderboards matter for v1. See [Android](android.md).
3. **Xbox and Steam together** — both depend on the same Windows Standalone build validation work ([Investigate Release on Windows and Xbox](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-windows-and-xbox)), so do that once and submit to both: Xbox via Creators Program (no approval gate to start) and Steam (only gated by the $100 app fee, no vetting). See [Xbox](xbox.md) and [Steam](steam.md).
4. **GOG, opportunistically, once Steam's build/listing exists** — same Windows build, no extra engineering, but it's a curated platform that may simply decline the pitch. Low effort to try, so submit after Steam is live rather than blocking on it; don't treat acceptance as a given. See [GOG](gog.md).
5. **Nintendo last** — longest lead time (company vetting, dev kit purchase, lotcheck), so start the Developer Portal application early even if the actual port happens after Android/Xbox/Steam ship, since the approval clock runs independently of your dev time. See [Nintendo Switch](switch.md).
6. Build the custom cross-platform backend ([Cross-Platform Achievements/Leaderboards](achievements.md)) only if/when a unified leaderboard is actually a goal — it's not required to ship any individual platform.

---

## Open Decisions (yours to make, not inferable from the repo)

- ~~LLC name, formation state, registered agent.~~ **Resolved:** SQUALRUS GAMES LLC, Washington — filing pending (see [Business Entity: Current Status](business-entity.md#current-status)). Registered agent still TBD if not already named on the filing.
- ~~Public developer/publisher name shown on storefronts.~~ **Resolved:** SQUALRUS GAMES (note: `companyName` in `ProjectSettings/ProjectSettings.asset` is still `Squalrus` — update before it shows up in store listings, see [Current State](#current-state-affects-every-platform)).
- ~~Support/contact email domain and address.~~ **Resolved:** `games@squalr.us`.
- ~~Where the privacy policy will be hosted.~~ **Resolved:** live at <https://games.squalr.us/privacy> (and <https://games.squalr.us/support> for the support/contact requirement), served alongside the marketing landing page.
- Whether GOG will accept the title at all — see [GOG](gog.md). This is a curation/acceptance question, not something resolvable by more engineering work; budget time to pitch and possibly get declined.
- Premium vs. free+ads monetization model — affects whether ad/IAP integration work needs to be scheduled before any store submission.
- Whether a unified cross-platform leaderboard is actually a goal for v1, or a later nice-to-have.
- Which Steamworks SDK wrapper to use for Unity — **Steamworks.NET** vs. **Facepunch.Steamworks** — neither is officially blessed by Valve; pick based on whichever has better current Unity 6 compatibility at integration time.
- Xbox application media/content answers (the hook, gameplay summary, estimated duration, level/stage details — see [Xbox: Game Concept Questions](xbox.md#game-concept-questions)) — all still TBD.
