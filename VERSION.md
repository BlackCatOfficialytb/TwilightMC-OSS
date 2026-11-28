# VERSION.md — TwilightMC Release & Deprecation Policy

## 1. Version format

Every published artifact — crates, the CLI executable and release tags —
carries the product version, presented in **PEP 440 / Classic Minecraft**
notation:

```
TwilightMC Bolide (vX.Y.ZaN)
TwilightMC Star (vX.Y.ZbN)
TwilightMC vX.Y.Z
TwilightMC Snapshot vX.Y.Z-ddmmyyyy-<commit>
```

The `vX.Y.Z` semantics below drive every numbered channel — **Stable, Star
and Bolide**; a Snapshot reuses the same triple as its milestone target (§2):

- **X — major upgrade.** Breaking changes (renamed/removed subcommands,
  changed flag semantics, unreadable on-disk formats) increment X.
- **Y — minor update.** Backwards-compatible features increment Y.
- **Z — subupdate.** Bug fixes and identical-behaviour repairs increment Z.
  The subupdate component may be omitted in prose: `v1.2` is shorthand for
  `v1.2.0`. Official release tags always spell out the full `vX.Y.Z`.
- **`aN`** — Bolide (alpha) build `N` of that milestone. `N` starts at `1`
  and increases for every Bolide build of the same `X.Y.Z`.
- **`bN`** — Star (beta) build `N` of that milestone. `N` starts at `1` and
  increases for every Star build of the same `X.Y.Z`.
- **`<commit>`** in snapshots — short git hash of the built revision
  (minimum 7 characters).

### Example strings

```
v1.2.0                   → TwilightMC v1.2.0
v2.1.3                   → TwilightMC v2.1.3
v1.2.3a1                 → TwilightMC Bolide (v1.2.3a1)
v1.2.3a2                 → TwilightMC Bolide (v1.2.3a2)
v1.2.3b1                 → TwilightMC Star (v1.2.3b1)
v1.2.3-06112026-6c2d471  → TwilightMC Snapshot v1.2.3-06112026-6c2d471
```

The `vX.Y` shorthand is prose-only. Official release tags — the ones that
trigger the release workflows — always spell out the full `vX.Y.Z`
(`v1.0.0`, never `v1.0`) so tag ordering and comparisons stay unambiguous.
Bolide/Star suffixes are lowercase and directly appended, exactly like
classic Minecraft `1.8.9a`-style builds and PEP 440 pre-releases.

Historical tags `alpha-vX.Y.Z[...]` and `beta-vX.Y.Z-bN` remain valid and
are still recognised by the release workflows and the in-app updater; new
builds use the compact `vX.Y.ZaN` / `vX.Y.ZbN` spelling only.

All crates in the workspace share one release train (`version.workspace =
true` in every crate), so the workspace `version` field is the numeric part
of the product version; in the two-component case it always carries the
implicit `.0`.

## 2. Release channels

| Channel     | Tag / version string              | Meaning |
|-------------|-----------------------------------|---------|
| **Stable**    | `vX.Y.Z`                          | No suffix. Fully supported: bug-fix releases are cut against the latest Stable minor only. |
| **Star**      | `vX.Y.ZbN`, `N ≥ 1`               | *Beta*. Feature-complete for the upcoming milestone. Public API and on-disk formats are frozen; only bug fixes and polish land. Legacy `beta-vX.Y.Z-bN` tags are still accepted. |
| **Bolide**    | `vX.Y.ZaN`, `N ≥ 1`               | *Alpha*. May crash, may rewrite formats. APIs, CLI flags and staging layouts can change without notice between Bolide numbers. Legacy `alpha-vX.Y.Z` / `alpha-vX.Y.Z-bN` tags are still accepted. |
| **Snapshot**  | tag `snapshot`; `vX.Y.Z-ddmmyyyy-<commit>` | *Rolling*. Built straight from `main`, at least one per week while development is active. `ddmmyyyy` is the build date (two-digit day and month, four-digit year — `06112026` = 6 November 2026). Snapshots are **never patched** — a bad snapshot is superseded by the next one. |

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
`checksums.sha256` alongside them. Archives ship as `.zip` on Windows and
macOS and as `.tar.zst` (Zstandard) on Linux.

### Ascending order for the same milestone

```
v1.2.3-06112026-6c2d471 < v1.2.3a1 < v1.2.3a2 < v1.2.3b1 < v1.2.3
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
- Current line: `0.8.0` on `main`. The release taxonomy (§5) uses `vX.Y.ZaN`
  for Bolide and `vX.Y.ZbN` for Star. Historical tags `alpha-v0.4.1` . `alpha-v0.5.0` delivered the README
  security/unsigned-binaries guide, the Microsoft OAuth2 device-flow token
  chain with sha256-verified authlib-injector auto-fetch, the account manager
  with its skinview3d viewer and skin/cape editors, and the Launcher/Client
  mode toggle. `alpha-v0.6.0` added the aligned native Horizon engine path:
  `horizon-client --resources/--game-dir/--home`, prepared-resource schema 7 /
  output version 5, on-demand Mojang assets (never bundled), read-once session
  hand-over, release install in Settings, Java-major import detection, the
  uv-style zero-copy CAS links and the first App Developer Mode pass (About
  version chip x7, JDWP/Mixin flags, WebView DevTools shortcut, copy actions and
  symlink/CAS diagnostics). `alpha-v0.7.0` completes App Developer Mode with
  Horizon unsigned/build-from-source provenance aligned to the upstream Launch
  API (`HORIZON_LAUNCHER_DEVELOPER_OFFLINE=1` and `--developer-single-player`
  only under an explicit opt-in), bounded `dev_launches.json` launch records,
  redacted command/config inspection, launcher RSS/CAS and phase-timing
  diagnostics, and full EN/VI coverage for every developer string. The
  Minecraft2Shell security patch shipped as the legacy `alpha-v0.7.1` tag:
  fresh `piston-meta` resolution with
  offline-only caching, SHA-1 verification/replacement of every
  `lwjgl-freetype` artifact before launch, a version/platform exposure advisory
  (Server Resource Packs: Disabled on untrusted servers; avoid untrusted `.zip`
  packs), and `.ttf`/`.ttc`/`.otf` inspection of imported resource packs with
  explicit confirmation on 1.20.5+. Backport
  tags `alpha-v0.0.1` . `alpha-v0.0.3` are published as pre-releases titled
  `TwilightMC Bolide v0.0.X (Backported)`; Bolide builds carry no API-stability
  promises (2).
- Star (beta) line: `v0.8.0b1` is the first Star beta, cut from `main` on
  the `beta` branch and published as `TwilightMC Star (v0.8.0b1)` by
  `.github/workflows/beta.yml`. Only bug fixes and polish land on `beta`;
  `main` continues toward the next minor.
- Snapshot line: `v0.8.0-ddmmyyyy-<commit>`, built as rolling works land on
  `main`.RSION.md — TwilightMC Release & Deprecation Policy

## 1. Version format

Every published artifact — crates, the CLI executable and release tags —
carries the product version, presented in **PEP 440 / Classic Minecraft**
notation:

```
TwilightMC Bolide (vX.Y.ZaN)
TwilightMC Star (vX.Y.ZbN)
TwilightMC vX.Y.Z
TwilightMC Snapshot vX.Y.Z-ddmmyyyy-<commit>
```

The `vX.Y.Z` semantics below drive every numbered channel — **Stable, Star
and Bolide**; a Snapshot reuses the same triple as its milestone target (§2):

- **X — major upgrade.** Breaking changes (renamed/removed subcommands,
  changed flag semantics, unreadable on-disk formats) increment X.
- **Y — minor update.** Backwards-compatible features increment Y.
- **Z — subupdate.** Bug fixes and identical-behaviour repairs increment Z.
  The subupdate component may be omitted in prose: `v1.2` is shorthand for
  `v1.2.0`. Official release tags always spell out the full `vX.Y.Z`.
- **`aN`** — Bolide (alpha) build `N` of that milestone. `N` starts at `1`
  and increases for every Bolide build of the same `X.Y.Z`.
- **`bN`** — Star (beta) build `N` of that milestone. `N` starts at `1` and
  increases for every Star build of the same `X.Y.Z`.
- **`<commit>`** in snapshots — short git hash of the built revision
  (minimum 7 characters).

### Example strings

```
v1.2.0                   → TwilightMC v1.2.0
v2.1.3                   → TwilightMC v2.1.3
v1.2.3a1                 → TwilightMC Bolide (v1.2.3a1)
v1.2.3a2                 → TwilightMC Bolide (v1.2.3a2)
v1.2.3b1                 → TwilightMC Star (v1.2.3b1)
v1.2.3-06112026-6c2d471  → TwilightMC Snapshot v1.2.3-06112026-6c2d471
```

The `vX.Y` shorthand is prose-only. Official release tags — the ones that
trigger the release workflows — always spell out the full `vX.Y.Z`
(`v1.0.0`, never `v1.0`) so tag ordering and comparisons stay unambiguous.
Bolide/Star suffixes are lowercase and directly appended, exactly like
classic Minecraft `1.8.9a`-style builds and PEP 440 pre-releases.

Historical tags `alpha-vX.Y.Z[...]` and `beta-vX.Y.Z-bN` remain valid and
are still recognised by the release workflows and the in-app updater; new
builds use the compact `vX.Y.ZaN` / `vX.Y.ZbN` spelling only.

All crates in the workspace share one release train (`version.workspace =
true` in every crate), so the workspace `version` field is the numeric part
of the product version; in the two-component case it always carries the
implicit `.0`.

## 2. Release channels

| Channel     | Tag / version string              | Meaning |
|-------------|-----------------------------------|---------|
| **Stable**    | `vX.Y.Z`                          | No suffix. Fully supported: bug-fix releases are cut against the latest Stable minor only. |
| **Star**      | `vX.Y.ZbN`, `N ≥ 1`               | *Beta*. Feature-complete for the upcoming milestone. Public API and on-disk formats are frozen; only bug fixes and polish land. Legacy `beta-vX.Y.Z-bN` tags are still accepted. |
| **Bolide**    | `vX.Y.ZaN`, `N ≥ 1`               | *Alpha*. May crash, may rewrite formats. APIs, CLI flags and staging layouts can change without notice between Bolide numbers. Legacy `alpha-vX.Y.Z` / `alpha-vX.Y.Z-bN` tags are still accepted. |
| **Snapshot**  | tag `snapshot`; `vX.Y.Z-ddmmyyyy-<commit>` | *Rolling*. Built straight from `main`, at least one per week while development is active. `ddmmyyyy` is the build date (two-digit day and month, four-digit year — `06112026` = 6 November 2026). Snapshots are **never patched** — a bad snapshot is superseded by the next one. |

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
`checksums.sha256` alongside them. Archives ship as `.zip` on Windows and
macOS and as `.tar.zst` (Zstandard) on Linux.

### Ascending order for the same milestone

```
v1.2.3-06112026-6c2d471 < v1.2.3a1 < v1.2.3a2 < v1.2.3b1 < v1.2.3
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
- Bolide line: `v0.7.1aN` — the workspace `version` carries `0.7.1` from
  Mission 6 onward, so the next Bolide build publishes as `v0.7.1a1`,
  `v0.7.1a2`, … . Historical tags `alpha-v0.4.1` … `alpha-v0.5.0` delivered the README
  security/unsigned-binaries guide, the Microsoft OAuth2 device-flow token
  chain with sha256-verified authlib-injector auto-fetch, the account manager
  with its skinview3d viewer and skin/cape editors, and the Launcher/Client
  mode toggle. `alpha-v0.6.0` added the aligned native Horizon engine path:
  `horizon-client --resources/--game-dir/--home`, prepared-resource schema 7 /
  output version 5, on-demand Mojang assets (never bundled), read-once session
  hand-over, release install in Settings, Java-major import detection, the
  uv-style zero-copy CAS links and the first App Developer Mode pass (About
  version chip ×7, JDWP/Mixin flags, WebView DevTools shortcut, copy actions and
  symlink/CAS diagnostics). `alpha-v0.7.0` completes App Developer Mode with
  Horizon unsigned/build-from-source provenance aligned to the upstream Launch
  API (`HORIZON_LAUNCHER_DEVELOPER_OFFLINE=1` and `--developer-single-player`
  only under an explicit opt-in), bounded `dev_launches.json` launch records,
  redacted command/config inspection, launcher RSS/CAS and phase-timing
  diagnostics, and full EN/VI coverage for every developer string. The
  Minecraft2Shell security patch shipped as the legacy `alpha-v0.7.1` tag:
  fresh `piston-meta` resolution with
  offline-only caching, SHA-1 verification/replacement of every
  `lwjgl-freetype` artifact before launch, a version/platform exposure advisory
  (Server Resource Packs: Disabled on untrusted servers; avoid untrusted `.zip`
  packs), and `.ttf`/`.ttc`/`.otf` inspection of imported resource packs with
  explicit confirmation on 1.20.5+. Backport
  tags `alpha-v0.0.1` … `alpha-v0.0.3` are published as pre-releases titled
  `TwilightMC Bolide v0.0.X (Backported)`; Bolide builds carry no API-stability
  promises (§2).
- Star (beta) line: `v0.7.1bN` once the `beta` branch is cut; Star
  releases are built from that branch and published as
  `TwilightMC Star (<tag>)` by `.github/workflows/beta.yml`.
- Snapshot line: `v0.7.1-ddmmyyyy-<commit>`, built as rolling works land on
  `main`.

## 7. Supported build targets

Every published build is compiled for the officially tier-supported targets
below (one shared 7-target matrix in `.github/workflows/_build.yml`, called by
`snapshot.yml`, `alpha.yml`, `beta.yml` and `release.yml`):

| Target                        | Platform                                          |
|-------------------------------|---------------------------------------------------|
| `x86_64-pc-windows-msvc`      | Windows 64-bit (MSVC; also the Clang-compiled build) |
| `x86_64-pc-windows-gnu`       | Windows 64-bit (MinGW-GNU)                        |
| `x86_64-unknown-linux-gnu`    | Linux 64-bit (GCC; also the Clang-compiled build) |
| `aarch64-unknown-linux-gnu`   | **Linux ARM64** — Raspberry Pi 4/5, Radxa Rock 5, Orange Pi and other SBCs, cross-compiled with `gcc-aarch64-linux-gnu` |
| `aarch64-apple-darwin`        | macOS on Apple Silicon                            |

FreeBSD (`x86_64-unknown-freebsd`) was removed from the automated matrix: the
VM build was slow and repeatedly broke on upstream system crates
(`sysinfo` / `webkit2-gtk`). FreeBSD remains **source-build supported** —
compile the CLI directly with `cargo build --release -p twilight-cli`; the
Tauri GUI stack is not officially supported there.

Archive formats per platform: `.zip` on Windows (all three toolchains) and
macOS, `.tar.zst` (Zstandard) on Linux (x86_64 and ARM64) — unpack the
tarballs with `tar -xf <archive>.tar.zst`; minimal Linux containers need the
`zstd` package for that.

A target earns official support only when its build job is green in the CI
matrix; ad-hoc local builds of other targets are best-effort and untested.
