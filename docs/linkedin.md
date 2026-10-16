[← Release Plan](README.md)

# LinkedIn Company Page

Everything needed to set up and fill out the **Squalrus Games** LinkedIn page. Voice and facts follow the [Press Kit](https://games.squalr.us/press) and [About](https://games.squalr.us/about) pages; if those change, update this too.

Assets live in [`linkedin/`](linkedin/).

---

## 1. Create page form

| Field | Value |
|---|---|
| Name* | `Squalrus Games` |
| linkedin.com/company/* | `squalrus-games` (fallback if taken: `squalrusgames`) |
| Website | `https://games.squalr.us` |
| Industry* | `Computer Games` (pick from the dropdown; `Mobile Gaming Apps` is the alternate) |
| Organization size* | `0-1 employees` |
| Organization type* | `Privately held` (a single-member LLC — not "Self-employed" or "Sole proprietorship") |
| Logo | [`linkedin/squalrus-linkedin-logo-300.png`](linkedin/squalrus-linkedin-logo-300.png) (300×300; a 400×400 version is also there) |
| Tagline (100/120) | `Small, focused games from Seattle. A creature that's probably fine. A space shooter that never ends.` |

Alternate tagline (106/120): `Independent game studio in Seattle making small, focused games — then finishing them anyway, out of spite.`

Name note: use **Squalrus Games** on LinkedIn, not SQUALRUS GAMES LLC. The legal name is only for places where the entity matters.

---

## 2. After the page exists: Edit page

### Cover image

[`linkedin/squalrus-linkedin-cover.png`](linkedin/squalrus-linkedin-cover.png): 2256×382, which is 2× LinkedIn's 1128×191. The lower-left is left empty on purpose because LinkedIn puts the page logo there. If the crop tool shows up, keep the full width.

### Overview / About (max 2,000 chars)

```text
Squalrus Games is an independent game studio based in Seattle, Washington. We make small games, try out strange ideas, and build software that no one asked for — then finish it anyway, out of spite.

Our games are self-published and deliberately small. None of them require an account, and none of them collect personal data.

What we're making:

▸ Chogots — A pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to keep it happy, and check back later. It's probably fine. Pixel art, Android, in closed testing on Google Play now.

▸ Infinity Space — A top-down survival space shooter with procedurally generated sectors. Fight through hostile space, scavenge ship parts to stay fueled and armed, and push as deep as you can before the next sector ends you. In development for Android, Xbox, and Steam.

Want to test Chogots? Email games@squalr.us and we'll add you to the list.

Press kit, logos, and brand guide: games.squalr.us/press
```

### Details

| Field | Value |
|---|---|
| Phone | leave blank |
| Year founded | `2026` |
| Headquarters | Seattle, Washington, United States (city only, no street address. Uncheck "primary" address details if it asks for a street) |
| Specialties (max 20) | `Indie games`, `Game development`, `Mobile games`, `Pixel art`, `Android games`, `Casual games`, `Simulation games`, `Shooters`, `Procedural generation`, `Self-publishing` |
| Custom button | **Visit website** → `https://games.squalr.us` (switch to **Sign up** → the Chogots test link once there's a public opt-in URL) |
| Hashtags (3) | `#indiegames` `#gamedev` `#pixelart` |

### Link your profile

On Chad's personal profile, add an Experience entry: **Founder & CEO**, company = the new Squalrus Games page (so the logo links), Seattle, start date = LLC filing month. The About page claims six titles; LinkedIn only needs one.

---

## 3. First posts

Post these a few days apart. Attach an image to each one, because LinkedIn ranks image posts higher. Good sources are the cover PNG and Chogots sprites from `public/chogots/` scaled up in whole multiples (8× = 128px). Don't put a link in the post body: LinkedIn shows fewer people posts with links, so put the link in the first comment instead.

**Post 1: Hello**

```text
Squalrus Games is open for business.

We're an independent studio in Seattle that makes small games, tries out strange ideas, and builds software no one asked for — then finishes it anyway, out of spite.

The staff: one person, six job titles. The Head of QA and the Lead Programmer are not currently speaking.

Two games in the works. More on both soon.

#indiegames #gamedev #pixelart
```

**Post 2: Chogots tester call**

```text
Chogots is a pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to keep it happy, and check back later.

It's probably fine.

We're in closed testing on Android. If you'd like in, email games@squalr.us with the subject "Chogots tester request" and we'll add you.

#indiegames #androidgames #pixelart
```

First comment: `Test build: https://play.google.com/apps/testing/com.SqualrusGames.Chogots`

**Post 3: Infinity Space teaser**

```text
Infinity Space: worlds that never end.

A top-down survival space shooter with procedurally generated sectors. Scavenge ship parts, stay fueled, stay armed, and push as deep as you can before the next sector ends you.

In development for Android, Xbox, and Steam. Dates TBD, because we'd rather be right than early.

#gamedev #indiegames #roguelike
```

---

## Regenerating the assets

- **Logo:** `python docs/linkedin/render_logo.py` draws [`public/press/squalrus-mark.svg`](../public/press/squalrus-mark.svg) pixel-exact onto Void (`#050C11`). The mark is 16 px with 2 px of clear space on each side, so the canvas is 20 mark-pixels: 300 px is a 15× scale and 400 px is 20×, both whole numbers as the press kit requires.
- **Cover:** edit [`linkedin/cover.html`](linkedin/cover.html), then:

  ```powershell
  & "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=8000 --allow-file-access-from-files --window-size=1128,191 --screenshot="docs\linkedin\squalrus-linkedin-cover.png" "file:///C:/github/games.squalr.us/docs/linkedin/cover.html"
  ```
