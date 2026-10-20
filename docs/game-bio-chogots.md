[← Release Plan](README.md)

# Chogots — Game Bio (Source of Truth for Copy)

This is the canonical reference for marketing/store copy: name, tagline, descriptions at various lengths, genre/tags, asset references, and legal links. When writing a store listing, press kit, or any external-facing text, pull from here rather than re-deriving it — and if you change the copy somewhere external (a store listing, the marketing site), update this file to match so it stays the single source of truth.

The current canonical headline/subhead below are live today on the marketing site (`src/pages/Home.jsx`) and the press kit (`src/pages/Press.jsx`) — keep this file and those pages in sync; if one changes, update the others.

Last synced with the game at **Chogots v0.51.0** (2026-10-14). To catch up after later releases, read the [Play release notes](https://github.com/squalrus/chogots/tree/main/store-listing/release-notes) newer than that version — they're already written for players.

## Names

| | |
|---|---|
| **Public game name** | Chogots |
| **Repo/code name** | Chogots (same in both directions — used in the Unity project, namespaces, build artifacts, and player-facing copy) |
| **Publisher** | SQUALRUS GAMES LLC |
| **Contact email** | `games@squalr.us` |
| **Android package** | `com.SqualrusGames.Chogots` |

## Taglines

- **Primary:** "It's probably fine."
- **Store / key art:** "Hatch it. Feed it. Love it." (on the Play feature graphic)
- **Kicker / one-liner:** "Pixel-art creature care · Android"

## Descriptions

### Micro (≤80 characters — fits Android Play Store short description)

> Hatch it, feed it, play Gem Match, check back later. It's probably fine.

### Short (1–2 sentences — store taglines, social bios; matches `Press.jsx`'s game card)

> A pocket creature-care game with a deadpan sense of humor. Hatch an egg and see which species comes out, keep its five needs up, furnish its room, and play Gem Match to pay for it all. Check back later — it's probably fine.

### Long (current canonical version, matches `Home.jsx`'s subhead)

> A pocket creature-care game with a deadpan sense of humor. Hatch an egg, find out which species you got, then feed it, pet it, clean up after it and furnish its room. Gem Match pays for all of it. Check back later — it'll still be there, mostly fine.

### Long, expanded (for storefronts with more room)

> Chogots is a pixel-art creature-care game, Tamagotchi-adjacent but dry about it — the creature's status lines and flavor text read flat and mildly funny rather than cute or urgent ("Pomu is fine. Pomu has been fine all week.").
>
> Tap the egg until it hatches, and find out what's inside: every new chogot is one of six species — Sprig, Hopli, Floof, Dotti, Flit or Tabbo — picked at random the moment it hatches. The original pink Mochi lives on in saves from before species existed. Name it, then keep its food, joy, rest, hygiene and love up. Feed it from 21 foods (it has favorites, and things it won't touch), toss it one of 11 toys, pet it, bathe it, clean up its messes before the flies move in, and give it medicine when it's sick.
>
> Every level-up drops a few random items and a blue coin, the currency for furniture. There are 15 pieces to put in its room — a bed, a bathtub, a fish tank to feed, a plant to water, a window that opens onto the real day or night sky — plus wall and floor patterns. Your chogot sits on the seats to rest.
>
> Coins come from Gem Match, a match-3 minigame in Easy, Hard and Endless. Endless plays round after round on one board, and keeps your best.
>
> No pressure: leave the app and your chogot keeps living its life. Coins get collected and toys get played with while you're away, and a notification nudges you back if a need is about to run dry. Stats keeps totals across every chogot you've raised. Share your chogot's profile and care score when it's doing well. Or when it isn't.

## Feature list (for store bullets and press)

Counts are from the game's `ActionCatalog.cs` and `docs/systems/SPECIES_SYSTEM.md` as of v0.51.0 — recheck them when syncing.

- **Seven species.** Mochi, the original pink chogot, is kept for saves from before species existed and never hatches from a new egg. The other six are rolled at random on hatch: Sprig (leaf sprout), Hopli (long ears), Floof (fur tuft), Dotti (antenna and spots), Flit (wings), Tabbo (cat ears and stripes). Cosmetic only; every egg looks the same, so it's a surprise.
- **Five needs:** food, joy, rest, hygiene, love. Plus sickness and medicine.
- **21 foods, 11 toys, 5 tools** (trash bags, soap, shampoo, medicine), bought with coins in the Shop. Each chogot has its own likes and dislikes.
- **15 furnishings**, bought with blue coins: seats your chogot rests on, interactive pieces (fridge, toy chest, fish tank, potted plant, window, floor lamp), and wall pieces (framed art, a wall clock showing the real time). Lights and the window change the room's lighting.
- **Wall and floor patterns:** stripes, dots, planks, checks.
- **Gem Match**, match-3 in **Easy, Hard and Endless**, with combo coins. The only source of coins.
- **Level-up rewards:** 1–3 random items and a blue coin each level. Blue coins can also be bought for 500 coins.
- **Day and night:** a bright Day look from 7am to 7pm, Night otherwise.
- **Idle-friendly:** offline catch-up and need-based notifications.
- **Stats across every chogot**, a record of each one, and Share.

## Type

The game uses **Silkscreen** (titles, labels, numbers) and **Chivo** (body copy), since its 0.34–0.36 redesign; the original Outfit / Space Mono are retired. The site's Chogots sections match: Silkscreen for the "CHOGOTS" title and stat values, Chivo for taglines and descriptions (`--f-chogots` in `style.css`, scoped to `.panel--chogots` and `.game-card--chogots`). The rest of the site keeps the studio's Space Grotesk / Pixelify Sans / Silkscreen, as listed in the press kit.

## Genre / Tags

- **Primary genre:** Simulation, Casual
- **Secondary tags:** Creature Care, Pixel Art, Tamagotchi-like, Match-3 Minigame, Idle-friendly, Room Decorating
- **Comparable framing:** "pixel-art creature-care game" is the phrase used consistently on the marketing site (`Home.jsx`'s SEO description and Chogots section) and in [chogots/docs/GAME_DESIGN.md](https://github.com/squalrus/chogots/blob/main/docs/GAME_DESIGN.md) — keep using it rather than introducing a new genre framing per platform.

## Core Pillars (for any "why should I care" pitch)

1. **Deadpan, not cute** — status lines and flavor text read flat and dryly funny ("It has done nothing for six hours. Tap it anyway."), a deliberate tonal choice distinguishing it from typical cutesy creature-care games.
2. **Real needs, real consequences** — food, joy, rest, hygiene and love all decay independently and feed a Care Score; a background notification nags you back only when a need is actually about to run out, not on a fixed timer.
3. **Gem Match is the economy** — it's the only way to earn coins, which buy food, toys and tools (and, 500 at a time, blue coins for furniture); there's no other income source or IAP shortcut today.
4. **A room of its own** — level-ups pay out blue coins for furniture, and the room fills up over time with pieces your chogot actually uses.
5. **Low friction, idle-friendly** — no punishment for stepping away: offline catch-up simulates coin pickups and toy play while the app is closed, scaled by how well-tended the chogot was, so returning after a long gap doesn't feel like a chogot was abandoned.

## Legal / Support Links

- **Privacy policy:** <https://games.squalr.us/privacy>
- **Support / contact:** <https://games.squalr.us/support> (routes to `games@squalr.us`)
- Both pages already cover Chogots alongside Infinity Space (`src/pages/Privacy.jsx`, `src/pages/Support.jsx`) — paste these exact URLs rather than re-typing or guessing a path.
- Chogots saves locally on-device via Unity's `PlayerPrefs`/persistent data path (see [chogots/docs/SAVE_FORMAT.md](https://github.com/squalrus/chogots/blob/main/docs/SAVE_FORMAT.md)); no account or cloud save exists yet. Share uses Android's share sheet and sends nothing on its own. **Keep this file's claim and the actual code in sync** — if cloud save, ads, or analytics ever ship, this paragraph and the live privacy policy both need to be rewritten before the next release.

## Asset References

Binaries on the site are copies; the chogots repo holds the sources. Re-copy them when the game's art changes.

| Asset | Source (chogots repo) | On the site | Status |
|---|---|---|---|
| App icon (512×512) | `Assets/Art/Chogots/app_icon.png` | `public/press/chogots-app-icon.png` (press kit) | In use |
| Feature graphic / key art (1024×500) | `store-listing/feature_graphic_1024x500.png` | `public/press/chogots-feature-graphic.png` (press kit) | In use |
| Logo (640×400, transparent, pale wordmark — dark backgrounds only) | `Assets/Art/Chogots/splash_logo.png` | `public/press/chogots-logo.png` (press kit) | In use |
| In-game sprites (species sheets, food, toys, furniture, gems, coins) | `Assets/Art/Chogots/Generated/*.png` (generated from code — `ChogotsItemArt.cs`, `ChogotsSpeciesArt.cs`, etc.) | `public/chogots/` — the homepage's species row and the Chogots panel's floating background (`src/lib/pixelfield.js`) | In use |
| Store screenshots | `store-listing/screenshots/` | Not used | **Stale** — captured at v0.27, before the 0.34–0.36 redesign. Recapture before using anywhere. |
| Store release notes | `store-listing/release-notes/vX.Y.Z.txt` | — | Player-facing changelog, a good source for "what's new" copy |
| Design source | [chogots/docs/GAME_DESIGN.md](https://github.com/squalrus/chogots/blob/main/docs/GAME_DESIGN.md) (screens, palette, type), [chogots/docs/GEM_MATCH.md](https://github.com/squalrus/chogots/blob/main/docs/GEM_MATCH.md) (minigame), [chogots/docs/systems/](https://github.com/squalrus/chogots/tree/main/docs/systems) (per-system docs) | — | Living docs |
| Marketing site source | — | `src/pages/Home.jsx` (Chogots section, `#chogots`), `src/pages/Press.jsx` (game card, Chogots art), `src/lib/pixelfield.js` + `PixelBackground.jsx` (panel background), `style.css` `.panel--chogots` / `.species` rules | Live |

## Platform Availability (keep in sync with `Home.jsx`'s Chogots section stat row)

Stated as **Android — closed testing** on the live marketing site, with a link to the Google Play test build. This is the only platform in scope today; no Xbox, Steam, GOG, Switch, or iOS plans exist in [chogots/BACKLOG.md](https://github.com/squalrus/chogots/blob/main/BACKLOG.md) or elsewhere in the project. If that changes, mirror the multi-platform structure used in [Infinity Space's release plan](README.md) rather than inventing a new one.
