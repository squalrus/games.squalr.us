[← Release Plan](README.md)

# Infinity Space — Game Bio (Source of Truth for Copy)

This is the canonical reference for marketing/store copy: name, tagline, descriptions at various lengths, genre/tags, asset references, and legal links. When writing a store listing, press kit, or any external-facing text, pull from here rather than re-deriving it — and if you change the copy somewhere external (a store listing, the marketing site), update this file to match so it stays the single source of truth.

The current canonical headline/subhead below are live today on the marketing site (`src/pages/Home.jsx`) — keep this file and that page in sync; if one changes, update the other.

## Names

| | |
|---|---|
| **Public game name** | Infinity Space |
| **Repo/code name** | InfinitySpace (no space — used in the Unity project, namespaces, build artifacts; never shown to players) |
| **Publisher** | SQUALRUS GAMES LLC |
| **Contact email** | `games@squalr.us` |

## Taglines

- **Primary:** "Worlds that never end."
- **Kicker / one-liner:** "Procedurally generated · Top-down · Survival shooter"

## Descriptions

### Micro (≤80 characters — fits Android Play Store short description)

> Fight through endless procedural sectors. Scavenge parts. Survive.

### Short (1–2 sentences — store taglines, social bios)

> A top-down survival space shooter with procedurally generated sectors. Fight through hostile space, scavenge ship parts to stay fueled and armed, and push as deep as you can before the next sector ends you.

### Long (store page "about this game" — current canonical version, matches `Home.jsx`'s subhead)

> A top-down survival space shooter coming to Android, Xbox, and Steam. Fight through procedurally generated sectors, scavenge ship parts to stay fueled and armed, and push as deep as you can before the next sector ends you.

### Long, expanded (for storefronts with more room — Steam, GOG, Xbox "about" sections)

> Infinity Space drops you into a hostile sector with a ship, a dwindling fuel tank, and a finite stock of ammunition. Every enemy and asteroid you destroy drops ship parts — the only currency that keeps you alive. Spend them mid-run to top off fuel, ammo, or health, or save them between sectors to permanently upgrade your ship's speed, firepower, capacity, and more.
>
> Every sector is procedurally populated, so no two runs look the same. Some sectors hide a Relic carried by a single marked enemy — destroy it carefully and collect the drop before it's lost, or shoot it down and fail the objective. Others throw a single large, tough threat at you backed by light support, instead of a swarm. Survive long enough to open the sector's portal, then push into the next one — harder, and waiting.
>
> No accounts, no always-online requirement, no pay-to-win. Just you, your ship, and however many sectors you can clear before you run out of fuel, ammo, or luck.

## Genre / Tags

- **Primary genre:** Survival, Shooter
- **Secondary tags:** Top-down, Space, Arcade, Procedural Generation, Roguelite-adjacent (run-based, not a full roguelike — no permadeath meta yet)
- **Comparable framing:** "top-down survival space shooter" is the phrase used consistently across the marketing site, [README.md](https://github.com/squalrus/infinity-space/blob/main/README.md), and [DESIGN_DOCUMENT.md](https://github.com/squalrus/infinity-space/blob/main/DESIGN_DOCUMENT.md) — keep using it rather than introducing a new genre framing per platform.

## Core Pillars (for any "why should I care" pitch — e.g. Xbox's "the hook" question, see [Xbox: Game Concept Questions](xbox.md#game-concept-questions))

1. **Survival tension, not just combat** — fuel and ammo are finite resources, not just a health bar; running out of either is as real a threat as enemy fire.
2. **Procedural, not hand-authored** — every sector's enemy/asteroid layout is generated fresh, and sector *type* (standard clear, Relic escort, single Large Threat boss) varies independently of layout.
3. **Run-to-run progression** — parts spent on permanent ship upgrades (Research) carry forward across sectors within a session, so later sectors feel earned, not just harder.
4. **No friction** — no accounts, no ads (currently), no pay-to-win; play starts immediately and saves locally.

## Legal / Support Links

- **Privacy policy:** <https://games.squalr.us/privacy>
- **Support / contact:** <https://games.squalr.us/support> (routes to `games@squalr.us`)
- Both are required metadata fields on every storefront in [the release plan](README.md) — paste these exact URLs rather than re-typing or guessing a path.
- Per the live privacy policy: Infinity Space does not require an account and does not collect personal information; progress/statistics save locally on-device only. This is a genuine selling point for privacy-conscious players and a true statement for any store's data-safety questionnaire (Android's Data Safety form, etc.) — **keep this file's claim and the actual code in sync**: if cloud save/leaderboards ([Connected Service for Cloud Saving and Leaderboards](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#connected-service-for-cloud-saving-and-leaderboards)) or ads/analytics ever ship, this paragraph and the live privacy policy both need to be rewritten before the next release.

## Asset References

Source art lives outside this file — link to it rather than duplicating binaries here.

| Asset | Location | Status |
|---|---|---|
| Icon/UI glyph set | [Infinity Space Icons on Behance](https://www.behance.net/gallery/12721009/Infinity-Space-Icons) (license verification in progress — see [Verify Infinity Icons HU Font License](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#verify-infinity-icons-hu-font-license)) | In use, unresolved license |
| Title logo / app icon | None yet — see [Logo and Icon Design](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#logo-and-icon-design) | Not started |
| Source art files | `Design/` (`.afdesign`) | — |
| Marketing site source | `src/pages/Home.jsx` (hero copy), `SiteFooter.jsx` (footer/legal links) | Live |
| Screenshots / key art for store listings | Not yet captured — none of the per-platform docs in this folder have real screenshots staged | Not started |

## Platform Availability (keep in sync with `Home.jsx`'s Infinity Space section stat row)

Currently stated as **Android, Xbox, Steam — all TBD** on the live marketing site. [GOG](gog.md) is being explored but is not yet confirmed (curated platform, acceptance isn't guaranteed) and should not be added to public-facing copy until a listing is actually secured. [Nintendo Switch](switch.md) is in the release plan but has the longest lead time and similarly shouldn't appear in public copy until closer to confirmed.
