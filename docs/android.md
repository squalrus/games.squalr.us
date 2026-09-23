[← Release Plan](README.md)

# Android (Google Play)

## Accounts & Licenses

- **Google Play Console developer account** — $25 one-time fee, tied to a Google account. If publishing as the LLC, register as an "Organization" account type (requires D-U-N-S number lookup/verification, takes a few extra days vs. individual).
- **Google Play Games Services** project (free) — for achievements/leaderboards, linked via Google Cloud Console.
- No separate Android licensing fee beyond the $25 console fee.

## Required Build Work (ties to backlog)

- [Investigate Release on Android](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-android) — generate a release keystore, configure **Player Settings → Publishing Settings**, decide upload key vs. Play App Signing (Play App Signing is Google's current default/recommended — Google holds the app signing key, you keep an upload key).
- Target API level must meet Google's current minimum (Play Console enforces a rolling minimum `targetSdkVersion`, typically the latest Android version minus one, at upload time — check the current requirement in Play Console before building).

## Store Assets Required

| Asset | Spec |
|---|---|
| App icon | 512×512 PNG, 32-bit, no alpha for the store listing icon |
| Feature graphic | 1024×500 PNG/JPG |
| Phone screenshots | 2–8 images, 16:9 or 9:16, min 320px on the short side |
| Short description | ≤80 characters |
| Full description | ≤4000 characters |
| Promo video | Optional, YouTube URL |
| Privacy policy | Required URL — must be hosted publicly (even a static GitHub Pages page is acceptable) |

## Metadata

- App title, short/long description, category (Action or Arcade), tags.
- **Content rating questionnaire** (via Google's IARC system, free, in-console) — generates ESRB/PEGI/USK/etc. ratings automatically based on your answers about violence, IAP, ads.
- **Data safety form** — must disclose what data is collected (if you add Unity Ads/Analytics later, this form needs updating).
- **Support/contact email** — public, shown on the store listing.
- **Target audience & content** declarations (under-13 appropriateness, ads targeting children, etc.)

## Achievements / Leaderboards

**Native option exists and is the right default for Android-only stats:** **Google Play Games Services (PGS) v2**. Players sign in with their existing Google Play Games / Google account — no custom account system required. Unity has an official Play Games Services plugin. Achievements and per-leaderboard high scores are free, hosted by Google, and show up in the Play Games app/overlay.

**Limitation:** PGS data is siloed to Android/Google accounts. It will **not** sync with Xbox, Steam, or Switch — there's no first-party bridge between Google Play Games, Xbox Live, Steamworks, and Nintendo. If you want one unified leaderboard across all four platforms, you need a custom backend (see [Cross-Platform Achievements/Leaderboards](achievements.md)).

## Suggested Price Point

No IAP/ad packages are currently wired into the project (see [Current State](README.md#current-state-affects-every-platform)). Two viable models:

- **Premium, no ads:** $1.99–$2.99. Matches comparable indie arcade/survival shooters on Play Store; low enough to be an impulse buy, high enough to be worth the Play Console overhead.
- **Free + ads + optional ad-removal IAP:** Viable since you already have the namespace/hooks for it conceptually, but requires building out Unity Ads/AdMob integration and an IAP SKU — real engineering work not yet started.

**Recommendation: ship premium ($1.99) for v1.** It's the lowest-effort path to a real release without retrofitting ad/IAP plumbing first, and it's easy to add a free ad-supported tier later if you want to compare retention.

## Testing

See [Testing on Each Platform: Android](testing.md#android).
