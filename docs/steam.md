[← Release Plan](README.md)

# Steam (PC)

## Accounts & Licenses

- **Steamworks account** — register at partner.steamgames.com (free to register), then pay a **$100 one-time app fee** per game submitted, refundable against the title's own future sales once it reaches $1,000 in gross revenue. No company registration required — individuals can publish directly, unlike Nintendo.
- Steamworks SDK access is granted immediately on app creation — no approval/vetting gate like ID@Xbox or Nintendo's developer portal. This makes Steam the fastest console/PC-adjacent storefront to get into after Android.
- Tax/banking interview required in Steamworks (W-9/W-8BEN equivalent) before payouts begin — same paperwork regardless of LLC vs. individual.

## Required Build Work (ties to backlog)

- [Investigate Release on Steam](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-steam) — build Windows Standalone (x86_64), the same build target [Investigate Release on Windows and Xbox](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-windows-and-xbox) covers, so this should be sequenced alongside or right after that work rather than redone from scratch.
- Integrate a Steamworks SDK wrapper for Unity — **Steamworks.NET** or **Facepunch.Steamworks** are the two common community wrappers (Valve doesn't ship an official Unity package); pick one and wire up `SteamAPI_Init()` at startup.
- Local testing requires a `steam_appid.txt` file alongside the build (placeholder app ID before your real one is approved); production builds bake the real App ID in via Steamworks' build/depot tools instead.
- Verify mouse/keyboard input alongside the existing gamepad-first Input System setup, since Steam players expect both to work — this project's `GamepadUiNavigation.cs` menu flow (see [CLAUDE.md](https://github.com/squalrus/infinity-space/blob/main/CLAUDE.md)) was built gamepad-first and should be spot-checked with mouse/keyboard on PC.

## Store Assets Required

| Asset | Spec |
|---|---|
| Header capsule | 460×215 |
| Small capsule | 231×87 |
| Main capsule | 616×353 |
| Library capsule (vertical) | 600×900 |
| Library hero | 3840×1240 |
| Screenshots | Minimum 1, 1280×720 recommended, several encouraged |
| Trailer | Strongly recommended, video file upload |
| Age rating | IARC questionnaire (same system Google/Microsoft use) plus Steam's own content descriptor self-disclosure for mature content |

## Metadata

- Store page title, short/long description, tags/genres (affects Steam's discovery/recommendation algorithm — pick accurately), supported languages.
- System requirements (minimum and recommended) — needs at least one real performance pass on representative PC hardware to fill in honestly.
- Support URL, privacy policy URL (same hosted page as the other platforms is fine).

## Achievements / Leaderboards

- **Steamworks provides native Achievements and Leaderboards APIs**, tied to the player's existing Steam account — no custom backend needed for Steam-only stats, same shape as Google Play Games Services and Xbox Live.
- Same cross-platform-silo caveat as the other platforms: Steam achievements/leaderboards don't bridge to Google Play Games, Xbox Live, or Switch. A unified cross-platform leaderboard still requires the custom backend discussed in [Cross-Platform Achievements/Leaderboards](achievements.md).

## Suggested Price Point

PC indie arcade/survival shooters of this scope commonly land **$4.99–$9.99** on Steam. Suggest **$5.99–$6.99** to stay roughly aligned with the [Xbox price point](xbox.md#suggested-price-point) rather than significantly undercutting it — Steam's discovery algorithm and regular storewide sales naturally provide discount exposure over time, so launch pricing doesn't need to chase the bottom of that range.

## Testing

See [Testing on Each Platform: Steam](testing.md#steam).
