[← Release Plan](README.md)

# Chogots — Game Bio (Source of Truth for Copy)

This is the canonical reference for marketing/store copy: name, tagline, descriptions at various lengths, genre/tags, asset references, and legal links. When writing a store listing, press kit, or any external-facing text, pull from here rather than re-deriving it — and if you change the copy somewhere external (a store listing, the marketing site), update this file to match so it stays the single source of truth.

The current canonical headline/subhead below are live today on the marketing site (`src/pages/Home.jsx`) — keep this file and that page in sync; if one changes, update the other.

## Names

| | |
|---|---|
| **Public game name** | Chogots |
| **Repo/code name** | Chogots (same in both directions — used in the Unity project, namespaces, build artifacts, and player-facing copy) |
| **Publisher** | SQUALRUS GAMES LLC |
| **Contact email** | `games@squalr.us` |

## Taglines

- **Primary:** "It's probably fine."
- **Kicker / one-liner:** "Pixel-art creature care · Android"

## Descriptions

### Micro (≤80 characters — fits Android Play Store short description)

> Feed your chogot, play Gem Match, check back later. It's probably fine.

### Short (1–2 sentences — store taglines, social bios)

> A pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to keep it happy, and check back later — it's probably fine.

### Long (store page "about this game" — current canonical version, matches `Home.jsx`'s subhead)

> A pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to keep it happy, and check back later — it'll still be there, mostly fine.

### Long, expanded (for storefronts with more room)

> Chogots is a pixel-art creature-care game, Tamagotchi-adjacent but dry about it — the creature's status lines and flavor text read flat and mildly funny rather than cute or urgent ("Pomu is fine. Pomu has been fine all week.").
>
> Keep your chogot's food, joy, rest, and hygiene up by feeding it, playing with toys, sponging up messes, and letting it sleep. Every action earns XP toward its next evolution. Coins — the only currency for buying food and toys from the Shop — come from Gem Match, a match-3 minigame that's the game's sole income source.
>
> No pressure, no fail state: leave the app and your chogot keeps living its life. Coins get collected and toys get played with while you're away, at a pace that reflects how well cared-for it was when you left, and a local notification nudges you back if a need is about to run dry. Just check in, poke around, and see how it's doing.

## Genre / Tags

- **Primary genre:** Simulation, Casual
- **Secondary tags:** Creature Care, Pixel Art, Tamagotchi-like, Match-3 Minigame, Idle-friendly
- **Comparable framing:** "pixel-art creature-care game" is the phrase used consistently on the marketing site (`Home.jsx`'s SEO description and Chogots section) and in [chogots/docs/GAME_DESIGN.md](https://github.com/squalrus/chogots/blob/main/docs/GAME_DESIGN.md) — keep using it rather than introducing a new genre framing per platform.

## Core Pillars (for any "why should I care" pitch)

1. **Deadpan, not cute** — status lines and flavor text read flat and dryly funny ("It has done nothing for six hours. Tap it anyway."), a deliberate tonal choice distinguishing it from typical cutesy creature-care games.
2. **Real needs, real consequences** — food, joy, rest, and hygiene all decay independently and feed a Care Score; a background notification nags you back only when a need is actually about to run out, not on a fixed timer.
3. **Gem Match is the economy** — it's the only way to earn coins, which are the only way to buy food and toys; there's no other income source or IAP shortcut today.
4. **Low friction, idle-friendly** — no fail state and no punishment for stepping away: offline catch-up simulates coin pickups and toy play while the app is closed, scaled by how well-tended the chogot was, so returning after a long gap doesn't feel like a chogot was abandoned.

## Legal / Support Links

- **Privacy policy:** <https://games.squalr.us/privacy>
- **Support / contact:** <https://games.squalr.us/support> (routes to `games@squalr.us`)
- Both pages already cover Chogots alongside Infinity Space (`src/pages/Privacy.jsx`, `src/pages/Support.jsx`) — paste these exact URLs rather than re-typing or guessing a path.
- Chogots saves locally on-device via Unity's `PlayerPrefs`/persistent data path (see [chogots/docs/SAVE_FORMAT.md](https://github.com/squalrus/chogots/blob/main/docs/SAVE_FORMAT.md)); no account or cloud save exists yet. **Keep this file's claim and the actual code in sync** — if cloud save, ads, or analytics ever ship, this paragraph and the live privacy policy both need to be rewritten before the next release.

## Asset References

Source art lives outside this file — link to it rather than duplicating binaries here.

| Asset | Location | Status |
|---|---|---|
| In-game sprites (food, coins, toys, items) | Procedural, generated in code (`ChogotsItemArt.cs`, `ChogotsPlaceholderArt.cs`) | In use, no external source files |
| Title logo / app icon | Not yet created | Not started |
| Design source | [chogots/docs/GAME_DESIGN.md](https://github.com/squalrus/chogots/blob/main/docs/GAME_DESIGN.md) (screens, palette, type), [chogots/docs/GEM_MATCH.md](https://github.com/squalrus/chogots/blob/main/docs/GEM_MATCH.md) (minigame) | Living docs |
| Marketing site source | `src/pages/Home.jsx` (Chogots section, `#chogots`), `src/lib/pixelfield.js` + `PixelBackground.jsx` (panel background art), `style.css` `.panel--chogots` rules | Live |
| Screenshots / key art for store listings | Not yet captured | Not started |

## Platform Availability (keep in sync with `Home.jsx`'s Chogots section stat row)

Currently stated as **Android — TBD** on the live marketing site. This is the only platform in scope today; no Xbox, Steam, GOG, Switch, or iOS plans exist in [chogots/BACKLOG.md](https://github.com/squalrus/chogots/blob/main/BACKLOG.md) or elsewhere in the project. If that changes, mirror the multi-platform structure used in [Infinity Space's release plan](README.md) rather than inventing a new one.
