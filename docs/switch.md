[← Release Plan](README.md)

# Nintendo Switch

## Accounts & Licenses

- **Nintendo Developer Portal** registration — **already registered** (see [Business Entity: Current Status](business-entity.md#current-status)). Historically requires you to register as a **company**, not an individual, in most regions; confirm the registration is updated to reflect SQUALRUS GAMES LLC once formation completes, since the application asks for company registration documents, website, and a description of your prior work/portfolio.
- Approval is **not guaranteed or instant** — Nintendo vets applicants; turnaround has historically ranged from a few weeks to a couple of months.
- Once approved: sign Nintendo's developer NDA, gain portal access, and **purchase a Switch dev kit** (a physical device, cost varies and is billed through the portal — historically in the few-hundred-dollar range, confirm current pricing in the portal since this isn't publicly listed and changes).
- Unity's Switch build support is also gated — Unity requires you to be an approved Nintendo developer before they'll grant access to the Nintendo Switch module/license for the Unity Editor.

## Required Build Work (ties to backlog)

- [Investigate Release on Nintendo Switch](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#investigate-release-on-nintendo-switch) — investigate Joy-Con/Pro Controller mapping via the existing Input System setup, docked vs. handheld resolution/performance targets, and Nintendo's certification (lotcheck) process, which checks for platform-specific UX requirements (e.g., proper handling of suspend/resume, button prompt conventions matching Nintendo's button layout, save data requirements).
- Nintendo lotcheck is stricter than Google/Microsoft's automated review — budget real QA time for it, and expect at least one rejection-and-resubmission cycle on a first title.

## Store Assets Required

| Asset | Spec (confirm exact current specs in the Developer Portal) |
|---|---|
| Icon | Nintendo-specified square icon, multiple sizes |
| Key art / banner | For the eShop listing page |
| Screenshots | Multiple, console-safe resolution |
| Trailer | Strongly recommended for eShop visibility |
| Age rating | Nintendo requires **physical age rating board submissions per region** in many territories (ESRB for US is typically free for digital-only via a streamlined digital rating process; other regions like PEGI/USK/CERO may have separate, sometimes paid, submission processes) |

## Metadata

- Title, description, support/contact email, privacy policy URL.
- Localization: even an English-only release needs to declare supported languages; Nintendo eShop visibility benefits from at least a few additional languages if budget allows (not required for v1).

## Achievements / Leaderboards

This is the platform where the premise of the question changes: **Nintendo does not expose a broadly available, self-serve, third-party achievements/leaderboards API the way Google (Play Games Services), Microsoft (Xbox Live), and Valve (Steamworks) do.** There is no public "Nintendo Achievements SDK" indie developers can plug into for Switch the way they can for Android, Xbox, or Steam. Some first-party/large-studio titles have proprietary integrations, but it is not a standard self-serve offering for an indie release.

**Practical implication:** for Switch, you will need a **custom backend** for any cross-run stats, leaderboards, or achievement-style tracking — there's no platform-native account system to hang it on. This pulls forward the backlog's [Connected Service for Cloud Saving and Leaderboards](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#connected-service-for-cloud-saving-and-leaderboards) item: services like **Unity Gaming Services (Leaderboards + Cloud Save)**, **PlayFab**, or **Firebase** all support Switch via the engine SDK rather than a platform identity provider, typically using an anonymous device-bound or email-based account you control, not Nintendo's account system.

**This also means:** if you want one consistent leaderboard/achievement experience across Android + Xbox + Steam + Switch, the unified version has to be the custom backend on all four — using each platform's native system only gets you same-platform-only leaderboards, and Switch can't participate in a "native" leaderboard at all. See [Cross-Platform Achievements/Leaderboards](achievements.md).

## Suggested Price Point

Switch eShop pricing for a small arcade/survival shooter of this scope typically lands **$4.99–$7.99**, similar to Xbox — slightly higher end is reasonable given Nintendo's certification overhead and the platform's willingness to pay for premium indie titles (Switch has a strong track record for indie premium pricing vs. mobile).

## Testing

See [Testing on Each Platform: Nintendo Switch](testing.md#nintendo-switch).
