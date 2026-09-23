[← Release Plan](README.md)

# Cross-Platform Achievements/Leaderboards — Decision Summary

| Platform | Native achievements/leaderboards? | Account used | Cross-platform sync? |
|---|---|---|---|
| [Android](android.md) | Yes — Google Play Games Services | Player's existing Google account | No (Android-only) |
| [Xbox](xbox.md) | Yes — Xbox Live (full via ID@Xbox; limited via Creators Program) | Player's existing Xbox/Microsoft account | No (Xbox-only) |
| [Steam](steam.md) | Yes — Steamworks Achievements/Leaderboards | Player's existing Steam account | No (Steam-only) |
| [GOG](gog.md) | Optional — GOG Galaxy SDK, but only functions when the player runs the game through the Galaxy client (game itself is DRM-free and playable without it) | Player's existing GOG account, only if using Galaxy | No (GOG-only, and only for players who opt into Galaxy) |
| [Nintendo Switch](switch.md) | No public self-serve API | N/A | N/A |

**Recommendation:** ship each platform's native achievements/leaderboards for that platform's audience (no extra engineering — it's "free" once the SDK is wired in, and it's what players on that storefront expect). Separately, if a unified cross-platform leaderboard matters to you, build it as its own feature on top of a custom backend (Unity Gaming Services is the most natural fit since you're already in Unity) — that is the only way to include Switch at all, and it's additive rather than a replacement for the native integrations.

No custom account system is required for the native, per-platform integrations — players authenticate with the account they already have on that device.
