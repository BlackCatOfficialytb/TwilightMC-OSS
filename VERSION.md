# VERSION.md — TwilightMC Release & Deprecation Policy

## 1. Version format

Every published artifact — crates, the CLI executable and release tags —
carries the product version, presented as:

```
TwilightMC <release channel> vX.Y.Z
TwilightMC Snapshot vX.Y.Z-ddmmyyyy-<commit>
```

The `vX.Y.Z` semantics below drive every numbered channel — **Stable, Star
and Bolide**; a Snapshot reuses the same triple as its milestone target (§2):

- **X — major upgrade.** Breaking changes (renamed/removed subcommands,
  changed flag semantics, unreadable on-disk formats) increment X.
- **Y — minor update.** Backwards-compatible features increment Y.
- **Z — subupdate.** Bug fixes and identical-behaviour repairs increment Z.
  The subupdate component may be omitted: `v1.2` is shorthand for `v1.2.0`.
  Presentation strings may use `vX.Y`, while official release tags
  canonically spell out the full `vX.Y.Z` so comparisons stay unambiguous.
- **`<commit>`** in snapshots — short git hash of the built revision
  (minimum 7 characters).

### Example strings

```
v1.2                    → TwilightMC Stable v1.2.0
v2.1.3                  → TwilightMC Stable v2.1.3
v1.2.3-star.1           → TwilightMC Star v1.2.3-star.1
v1.2.3-bolide.2         → TwilightMC Bolide v1.2.3-bolide.2
v1.2.3-06112026-6c2d471 → TwilightMC Snapshot v1.2.3-06112026-6c2d471
```

All crates in the workspace share one release train (`version.workspace =
true` in every crate), so the workspace `version` field is the numeric part
of the product version; in the two-component case it always carries the
implicit `.0`.

## 2. Release channels

| Channel     | Version string                    | Meaning |
|-------------|-----------------------------------|---------|
| **Stable**    | `vX.Y[.Z]`                        | No suffix. Fully supported: bug-fix releases are cut against the latest Stable minor only. |
| **Star**      | `vX.Y[.Z]-star.N`, `N ≥ 1`        | *Beta*. Feature-complete for the upcoming milestone. Public API and on-disk formats are frozen; only bug fixes and polish land. |
| **Bolide**    | `vX.Y[.Z]-bolide.N`, `N ≥ 1`      | *Alpha*. May crash, may rewrite formats. APIs, CLI flags and staging layouts can change without notice between Bolide numbers. |
| **Snapshot**  | `vX.Y[.Z]-ddmmyyyy-<commit>`      | *Rolling*. Built straight from `main`, at least one per week while development is active. `ddmmyyyy` is the build date (two-digit day and month, four-digit year — `06112026` = 6 November 2026). Snapshots are **never patched** — a bad snapshot is superseded by the next one. |

`X.Y.Z` on a Star/Bolide/Snapshot build is the milestone **target** it is
believed to ship as, and must be `>=` the highest published version.

### Rolling snapshot tag

Snapshot builds always publish to the single rolling git tag `snapshot` —
never to dated or per-commit tags — and every push to `main` replaces the
previous snapshot release (`snapshot` tag deleted and re-created against the
built commit, with `--clobber` semantics for the assets). The rolling tag
carries no version information itself: the **release title** spells the full
identity (`TwilightMC Snapshot vX.Y.Z-ddmmyyyy-<commit>`) and every artifact
or archive is named with the same full identity
(`twilight-snapshot-vX.Y.Z-ddmmyyyy-<commit>-<platform-toolchain>`), plus a
`checksums.sha256` alongside them.

### Ascending order for the same milestone

```
v1.2.3-06112026-6c2d471 < v1.2.3-bolide.1 < v1.2.3-star.1 < v1.2.3
```

the last snapshot of a milestone is the last thing you test *before* it goes
Stable.

## 3. Ordering rules

The format is deliberately *not* strict SemVer 2.0.0 — the two-component
`vX.Y` shorthand and the zero-padded snapshot date would both fail SemVer
validators — so precedence is defined here:

1. Compare X, then Y, then Z (a missing Z counts as `0`).
2. Same numbers: channel ranking is **Stable > Star > Bolide > Snapshot**.
3. Star/Bolide: higher `N` is newer.
4. Snapshot: a later `ddmmyyyy` is newer; equal dates order by the commit
   hash (greater is newer).

## 4. Bump rules

- **Z (subupdate)** — bug fixes and identical-behaviour repairs. No new CLI
  flags, no new public crate functions beyond trivial additions.
- **Y (minor update)** — backwards-compatible features: new subcommand, new
  flag, new public crate API, staging-layout *extensions* that older
  versions tolerate.
- **X (major upgrade)** — breaking change: renamed or removed subcommand,
  changed flag semantics, changed staging/shared-directory layout in a way
  an older version cannot read, MSRV bump.
- **0.x caveat** — before `1.0.0`, minor bumps may carry breaking CLI
  changes, but they must be flagged `⚠ BREAKING` in the changelog and follow
  the notice period in §5.

## 5. Deprecation policy

1. A deprecated CLI subcommand/flag or a deprecated public crate API is
   **announced in the changelog** of the channel where the deprecation
   appears, and keeps functioning unchanged.
2. For Stable releases, removal happens **no earlier than two minor versions
   later**, and always in a minor (0.x: the next one).
3. Bolide and Snapshot builds offer no deprecation window — anything can
   change or vanish without notice.
4. On-disk compatibility (instance directories, `horizon-assets.json`,
   staging layout) follows the same ramp: reading is permissive, writing a
   format an older release cannot read counts as a breaking change.
5. Release tags and their binary checksums are **immutable**. A broken
   release is fixed by a new update (`Z`); force-updating an existing tag is
   only tolerated for a confirmed supply-chain/security incident, and must
   be disclosed in the changelog.

## 6. Current version

- Latest Stable: `v0.2.0`.
- Bolide line: `v0.5.0` — the workspace `version` carries `0.5.0` since the
  Milestone-4 auth, skins & client-mode UI (Bolide tags `alpha-v0.4.1` …
  `alpha-v0.5.0`: the README security/unsigned-binaries guide, the Microsoft
  OAuth2 device-flow token chain with sha256-verified authlib-injector
  auto-fetch for custom Yggdrasil accounts, the account manager modal with a
  skinview3d 3D character viewer and skin/cape editors, the Launcher/Client
  mode toggle with the minimal client dashboard and `--server` quick-play
  joining); Bolide builds carry no API-stability promises (§2).
- Snapshot line: `v0.5.0-ddmmyyyy-<commit>`, built as rolling works land on
  `main`.

## 7. Supported build targets

Every published build is compiled for the officially tier-supported targets
below (identical matrices in `snapshot.yml` and `release.yml`):

| Target                        | Platform                                          |
|-------------------------------|---------------------------------------------------|
| `x86_64-pc-windows-msvc`      | Windows 64-bit (MSVC; also the Clang-compiled build) |
| `x86_64-pc-windows-gnu`       | Windows 64-bit (MinGW-GNU)                        |
| `x86_64-unknown-linux-gnu`    | Linux 64-bit (GCC; also the Clang-compiled build) |
| `aarch64-unknown-linux-gnu`   | **Linux ARM64** — Raspberry Pi 4/5, Radxa Rock 5, Orange Pi and other SBCs, cross-compiled with `gcc-aarch64-linux-gnu` |
| `aarch64-apple-darwin`        | macOS on Apple Silicon                            |
| `x86_64-unknown-freebsd`      | FreeBSD 64-bit (native VM build)                  |

A target earns official support only when its build job is green in the CI
matrix; ad-hoc local builds of other targets are best-effort and untested.
