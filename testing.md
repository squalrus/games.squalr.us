[← Release Plan](README.md)

# Testing on Each Platform

## Android

- **No special account needed for basic testing** — build an APK (**File → Build Settings → Android → Build**) and sideload via `adb install`, as already documented in this repo's README/CLAUDE.md.
- **Internal Testing track (Play Console)** — once you have a Play Console account, upload builds to the "Internal testing" track (up to 100 testers, added by email, no review wait — live within minutes). This is the right tier for your own QA pass and a few trusted testers.
- **Closed/Open testing tracks** — wider rings (closed = invite list/Google Group, open = anyone with the link) before promoting to Production; each has a minimum testing period Google enforces before you can publish a brand-new app's first production release (this "new developer" review/testing requirement has changed over time — check current Play Console requirements when you get there).
- **Pre-launch report** — Play Console automatically runs your build on a farm of real devices and flags crashes/performance issues for free once you upload to any testing track.
- Test Play Games Services sign-in/achievements using your own Google account added as a tester on the linked Play Games Services project — achievements won't show correctly to unauthorized testers until the game is at least in an internal-testing state.

See also: [Android release plan](android.md).

## Xbox

- **Xbox Live Creators Program path:** any retail Xbox console (Series S/X or One) can be switched into **Dev Mode** for free via the "Dev Home" app from the Microsoft Store — no special hardware purchase needed. Once in Dev Mode, you deploy your build directly from Unity/Visual Studio over the network to the console, the same way you'd deploy to a Windows PC.
- You do **not** need ID@Xbox approval just to test on your own console in Dev Mode — that gate only matters for the full Xbox Live feature set (Gamerscore achievements) and for store submission.
- **Sandboxes in Partner Center** — Microsoft gives you isolated test "sandboxes" so you can test IAP, achievements, and store metadata without affecting the live/retail environment. Testers can be invited into a sandbox via their Microsoft account.
- Test on **both** a Series S (lower-spec target) and Series X/One if you can get access to both, since Unity's Xbox builds historically need separate per-SKU performance validation, not just one "Xbox build."

See also: [Xbox release plan](xbox.md).

## Steam

- **No special account needed for basic testing** — build Windows Standalone from the Editor and run the `.exe` directly on any PC, same as any other Windows build.
- **`steam_appid.txt` placeholder** lets you initialize the Steamworks SDK locally before your real App ID is approved, so achievement/leaderboard API calls can be exercised during development without waiting on Steamworks onboarding.
- **Steamworks playtest/beta branches** — once you have a real App ID, Steamworks supports private "beta" depot branches (visible only to Steam accounts you add) for sharing builds with testers before public release, comparable to Play Console's internal testing track.
- Verify mouse/keyboard input paths specifically, since this project's UI navigation (`GamepadUiNavigation.cs`) was built gamepad-first — a Steam-specific regression here wouldn't show up in Android/Xbox testing.

See also: [Steam release plan](steam.md).

## Nintendo Switch

- **This is the one platform where you cannot test without paid hardware.** There is no public "developer mode" for retail Switch consoles the way Xbox has Dev Mode. You must be an approved Nintendo developer and purchase an official **Switch dev kit** to run and test any build at all — there's no sideloading path on consumer hardware.
- Once you have a dev kit, Nintendo's portal provides build deployment tools (comparable in spirit to `adb install`, but Nintendo-proprietary) and your own NX-specific toolchain integration in Unity (gated behind the same developer approval).
- Because of this, your realistic testing sequence is: get the Unity project running well on PC/Android first (shared codebase, same Input System/UI Toolkit stack), apply to Nintendo early so the dev kit purchase isn't the bottleneck, then do hands-on dev kit testing once approved — don't plan to "test as you go" on Switch the way you can on Android/Xbox.
- **Lotcheck submissions are themselves a form of testing** — Nintendo's certification team will reject builds for platform UX violations (e.g., incorrect button prompts, missing suspend/resume handling), so budget at least one round-trip through lotcheck as part of your test plan, not just pre-submission QA.

See also: [Nintendo Switch release plan](switch.md).

## Practical note for this project

Since gameplay code is shared across all four (same Input System actions, same UI Toolkit screens), your fastest iteration loop for general bug-hunting is still the **Unity Editor and Android sideload** — reserve Xbox Dev Mode, Steam's local Windows build, and Switch dev kit time for platform-specific concerns (controller button mapping/prompts, console-safe resolutions, achievement/leaderboard wiring, certification requirements) rather than general gameplay QA.
