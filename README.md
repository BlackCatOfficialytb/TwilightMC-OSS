# TwilightMC

[![snapshot](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/snapshot.yml/badge.svg)](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/snapshot.yml)
[![alpha](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/alpha.yml/badge.svg)](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/alpha.yml)
[![beta](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/beta.yml/badge.svg)](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/beta.yml)
[![release](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/release.yml/badge.svg)](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/actions/workflows/release.yml)
[![Total Downloads](https://img.shields.io/github/downloads/BlackCatOfficialytb/TwilightMC-OSS/total?label=Downloads&logo=github&style=flat-square)](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/releases)
[![Language: Rust 2024](https://img.shields.io/badge/Rust-2024%20Edition-black?logo=rust&logoColor=white&style=flat-square)](https://www.rust-lang.org/)
[![Discord](https://img.shields.io/badge/Discord-Join%20Chat-5865F2?logo=discord&logoColor=white&style=flat-square)](https://dsc.gg/blackcatofficial)

**TwilightMC** is a clean-room, Rust-bred Minecraft launcher: a Prism Launcher–style
core rebuilt from scratch in pure Rust — Mojang manifest pipelines, metadata
failover mirrors, parallel SHA-1-verified downloads, JVM discovery and offline
profiles — shipped as a dependency-free CLI binary named `twilight` plus the
`twilight-ui` Tauri v2 desktop GUI, with first-class Fabric/Quilt loader
compositing and Modrinth `.mrpack` installation.

No Mojang assets or launcher code is bundled or copied: everything here is
original work (see [CONTRIBUTING.md](CONTRIBUTING.md)).

---

## Features

- **End-to-end launch pipeline** — `twilight launch` resolves a version through
  the metadata failover chain, stages its manifest and client jar, downloads
  every library in parallel with SHA-1 verification, fills the asset store
  (classic `assets/virtual/<id>` exports included), extracts natives with the
  platform 7-Zip CLI, assembles the JVM command line and spawns the game with
  output streamed back to the console.
- **Loader compositing** — `--loader fabric|quilt` (case-insensitive,
  `--loader-version` optional) resolves the Fabric (meta v2) or Quilt (meta v3)
  profile into a composite launch: the Knot launcher main class takes over,
  loader libraries join the shared store and lead the classpath, and the
  vanilla client jar stays last. `--dry-run` shows the exact plan first.
- **Modrinth `.mrpack` installation** — `twilight modpack install` reads an
  `.mrpack` archive from a path or `http(s)://` URL, parses the strict
  `modrinth.index.json` (format 1), skips server-unwanted files, stages every
  client download, extracts `overrides/` safely (zip-slip guarded) and stages
  the loader libraries implied by the index dependencies. A pack claiming both
  fabric-loader and quilt-loader is rejected as ambiguous.
- **Offline profiles with no account wizard** — deterministic offline v3 UUIDs
  from the `--username` you give, plus Microsoft account token structures for
  future use.
- **Modest node requirements** — one binary, one stable Rust toolchain to
  build, and a `7z` executable on `PATH` for native-extraction days.

## Download & install

Grab a platform archive from the
[releases page](https://github.com/BlackCatOfficialytb/TwilightMC-OSS/releases)
(or the rolling `snapshot` pre-release for the newest build). Every archive
unpacks into a single `twilight-…-<platform>` folder and contains:

| File | Purpose |
| --- | --- |
| `twilight` / `twilight.exe` | The **CLI**: `launch`, `modpack install`, JVM discovery. |
| `twilight-ui` / `twilight-ui.exe` | The **desktop GUI** (Tauri v2 + Svelte 5 frontend). |
| Runtime libraries *(when required)* | e.g. `WebView2Loader.dll` and the MinGW-w64 GCC runtime DLLs (`libgcc_s_seh-1.dll`, `libstdc++-6.dll`, `libwinpthread-1.dll`) in the Windows MinGW archive — keep them next to the executables. |
| `README.md`, `VERSION.md`, `CREDITS.md`, `LICENSE.md`, `LICENSE_AGPL`, `LICENSE_APACHE` | Governance & licensing docs. |

**Archive formats** — Windows and macOS ship `.zip`; Linux (x86_64 and
aarch64) ships `.tar.zst` (Zstandard-compressed tarballs).
Unpack the tarballs with `tar -xf <archive>.tar.zst` — minimal Linux
containers first need the `zstd` package (`apt install zstd`,
`apk add zstd`, `pacman -S zstd`, …), since both GNU tar and bsdtar call
it for the compression step. The `.zip` archives open with any standard
unzip tool.

Run the GUI with `twilight-ui`, drive everything from scripts with `twilight`.

Per-platform notes:

- **Windows** — the GUI needs the WebView2 Runtime (preinstalled on Windows 11;
  Windows 10 fetches it on first run). MSVC and Clang builds link the WebView2
  loader statically; the MinGW-w64 build bundles `WebView2Loader.dll` beside
  the executables (its GCC runtime is linked statically) — unpack the whole
  archive, never copy `twilight-ui.exe` out of its folder alone.
- **Linux** — the GUI needs WebKitGTK 4.1 at runtime (Debian/Ubuntu:
  `sudo apt install libwebkit2gtk-4.1-0`; Fedora: `webkit2gtk4.1`). The CLI
  stays dependency-free.
- **macOS** — both binaries run as-is; the system WebKit (WKWebView) needs
  nothing extra. Launch the GUI with `./twilight-ui`.
- **FreeBSD** — no pre-built archive is published. The VM build was brittle
  and slow, so automated FreeBSD packages were retired; build the CLI from
  source instead (`cargo build --release -p twilight-cli`). The Tauri GUI
  stack (wry/tao) is not officially supported on FreeBSD.

## Build

Requires a stable Rust toolchain (edition 2024):

```sh
cargo build --release --locked    # binary lands in target/release/
cargo test --workspace
```

Quality gates a contribution must pass (the same ones CI runs):

```sh
cargo fmt --all -- --check
cargo clippy --workspace --all-targets -- -D warnings
cargo test --workspace
```

## Usage

```
twilight launch <VERSION_OR_ID> [flags]
twilight modpack install <PATH_OR_URL> [flags]
twilight java        # scan the system for JVMs and print them
twilight versions    # resolve the vanilla version list through the failover chain
```

### Launch examples

```sh
# See the fully assembled command without downloading or spawning anything
twilight launch latest --dry-run

# Plain vanilla 1.21.4 as the default offline user "Steve"
twilight launch 1.21.4

# Fabric with a pinned loader version onto an explicit 26.3-style instance
twilight launch 1.21.4 --loader fabric --loader-version 0.16.9

# Point the artifact root at a Prism Launcher data directory to share libraries
twilight launch 1.21.4 --shared-dir "%APPDATA%\.jdks-dir" --username Alex

# Fixed JVM instead of discovery (PATH scan → OS roots → JAVA_HOME/registry)
twilight launch latest --java "C:\Program Files\Eclipse Adoptium\jdk-21\bin\java.exe"
```

`launch` flags (all also settable via `TWILIGHTMC_*` environment variables):

| Flag | Meaning |
| --- | --- |
| `--username NAME` | Offline profile name; deterministic offline UUID. Defaults to `Steve`. |
| `--instance-dir DIR` | Instance root. Defaults to `<shared-dir>/instances/<version>`. |
| `--shared-dir DIR` | Shared artifact root (`libraries/`, `assets/`). |
| `--temp-dir DIR` | Staging root. Defaults to `<system-temp>/twilightmc_staging`. |
| `--java FILE` | Explicit JVM executable; without it, full JVM discovery + best-match selection runs. |
| `--loader LOADER` | `fabric` or `quilt` (case-insensitive); anything else is a loud error. |
| `--loader-version VERSION` | Pin a loader release; omitted resolves the latest stable. |
| `--dry-run` | Print the assembled command and exit: no downloads, no native writes, no spawn. |

### Modpack examples

```sh
# Local archive, staged into <shared>/instances/<pack-name-slug>
twilight modpack install path\to\pack.mrpack

# Straight from a CDN — prints a launch hint when it finishes
twilight modpack install https://cdn.example.org/pack.mrpack

# Inspect the plan first: files, overrides, loader, destinations, dependencies
twilight modpack install pack.mrpack --dry-run
```

## On-disk layout

All state lives under one shared root and per-instance game dirs:

```
<shared-dir>/
├── libraries/                  # vanilla + loader libraries, shared across instances
├── assets/                     # asset store; virtual indexes also export assets/virtual/<id>
└── instances/
    └── <name>/
        └── minecraft/          # the game directory: saves/, options.txt, versions/, ...
```

Instance `<name>` is the launched version id, or the pack-name slug generated
by `modpack install`. `--instance-dir` renames it; `--shared-dir` relocates
the artifact root (point it at a Prism data dir to reuse its stores).

## Workspace architecture

Ten focused crates, each network-free at its core and covered by its own
tests (loopback HTTP servers included):

| Crate | Responsibility |
| --- | --- |
| `twilight-manifest` | Version list / version file parsing, metadata failover mirrors, per-version Java compat and asset-index exposure. |
| `twilight-downloader` | Parallel artifact downloads with SHA-1 verification and staging summaries. |
| `twilight-horizon` | Asset store; virtual indexes additionally export the classic `assets/virtual/<id>` tree. |
| `twilight-runtime` | System JVM discovery (PATH + OS roots + `JAVA_HOME`/Windows registry) and best-JVM selection against required majors. |
| `twilight-launch` | Classpath/argument assembly, natives extraction (7-Zip CLI), asynchronous process spawner. |
| `twilight-auth` | Offline profile generation (deterministic v3 UUIDs) and Microsoft token structures. |
| `twilight-modloader` | Fabric (meta v2) / Quilt (meta v3) profile resolution into composite Knot launch data. |
| `twilight-modrinth` | `.mrpack` engine: strict index parsing, env filtering, pure-Rust ZIP/DEFLATE reader (CRC-32 verified), zip-slip-safe overrides extraction, installer. |
| `twilight-cli` | clap 4 command surface, isolated `ArtifactStaging` under `<temp>/twilightmc_staging`, and the end-to-end `launch` / `modpack install` pipelines. |
| `twilight-ui` | Tauri v2 desktop launcher interface (Svelte 5 + Tailwind v4 frontend) bridging the backend crates over IPC. |

## Testing

```sh
cargo test --workspace
```

Everything is hermetic: version JSON fixtures are inline strings, DEFLATE
fixtures are committed hex blobs, and every network path is exercised against
a one-request-per-connection loopback server. Platform-specific tests are
`#[cfg]`-gated (e.g. the Windows `reg query` parser runs only on Windows, the
POSIX `bin/java` scan only off it) — CI builds the union across all five
platforms.

## Versioning & snapshot releases

Versions follow the spec in [VERSION.md](VERSION.md):

```
TwilightMC Stable   v1.2.3
TwilightMC Snapshot vX.Y.Z-ddmmyyyy-<commit>      # ddmmyyyy = UTC build date, <commit> = short hash
```

Pushes to `main` (or manual `workflow_dispatch` runs) start the pipeline in
[`.github/workflows/snapshot.yml`](.github/workflows/snapshot.yml):

1. **Verify** — `cargo fmt --all -- --check`, `cargo clippy --workspace
   --all-targets -- -D warnings`, `cargo test --workspace`, then compute the
   snapshot identity (workspace version + UTC date + short commit).
2. **Build** — seven-target matrix: Windows (MSVC, MinGW-GNU, and
   Clang-compiled), Linux (GCC, Clang with `CC=clang`/`CXX=clang++`, and
   ARM64 built natively on GitHub's free `ubuntu-24.04-arm` runner for SBCs
   such as the Raspberry Pi 5, Radxa Rock 5, Orange Pi and Asahi Linux on
   `aarch64-unknown-linux-gnu`), and macOS on Apple Silicon
   (`aarch64-apple-darwin`). Every job rebuilds the Svelte frontend first
   (`npm ci && npm run build`) because the Tauri GUI embeds it at compile
   time, then compiles **both** binaries in release mode — `twilight` (CLI)
   and `twilight-ui` (GUI) — and stages them with any runtime libraries the
   build emits (e.g. `WebView2Loader.dll` on the MinGW target, whose GCC
   runtime is statically linked) plus the full governance docs (`README.md`,
   `VERSION.md`, `CREDITS.md`, `LICENSE.md`, `LICENSE_AGPL`,
   `LICENSE_APACHE`). A staging assertion fails the job immediately if
   either binary is missing. Each result is packaged as
   `twilight-snapshot-vX.Y.Z-ddmmyyyy-<commit>-<platform-toolchain>` —
   `.zip` on Windows and macOS, `.tar.zst` (Zstandard) on Linux — and a
   `checksums.sha256` of all archives is regenerated per build.
3. **Release** — push-hosted only: the rolling `snapshot` **pre-release** is
   refreshed on GitHub Releases, titled
   `TwilightMC Snapshot vX.Y.Z-ddmmyyyy-<commit>`, each build superseding the
   previous one. Manual dispatch runs verify + build artifacts only and never
   touches a release.

All four channels share the reusable
[`.github/workflows/_build.yml`](.github/workflows/_build.yml)
(`on: workflow_call`); the channel files only own their triggers:

| Workflow | Trigger | Release |
| --- | --- | --- |
| [`snapshot.yml`](.github/workflows/snapshot.yml) | push to `main`, `workflow_dispatch` | rolling `snapshot` pre-release |
| [`alpha.yml`](.github/workflows/alpha.yml) | push `alpha-*` | `TwilightMC Bolide (<tag>)`, pre-release |
| [`beta.yml`](.github/workflows/beta.yml) | push `beta-*` | `TwilightMC Star (<tag>)`, pre-release |
| [`release.yml`](.github/workflows/release.yml) | push `vX.Y.Z` | `TwilightMC <tag>`, stable |

Tagged releases are created by the workflow itself (`gh release create
--generate-notes`), so the tag patterns stay disjoint and a tag never builds
twice. FreeBSD is no longer part of the automated matrix: the VM job was slow
and kept breaking on upstream system crates, so FreeBSD users build the CLI
from source (`cargo build --release -p twilight-cli`).

## Security & unsigned binaries

Every TwilightMC build — all four channels (`Stable`, `Star`, `Bolide` and
`Snapshot`) — is currently **unsigned**: we do not yet ship a commercial
code-signing certificate, so Windows SmartScreen and macOS Gatekeeper will
warn the first time you run a downloaded binary. Nothing is wrong with the
archive; it simply has no third-party signature attached yet.

Once community funding allows — voluntary support goes exclusively through
[Ko-fi](https://ko-fi.com/quanvm0501alt1) — and as we evaluate open-source
signing foundations during Beta and Stable, the project plans to obtain a
trusted, affordable code-signing certificate so these SmartScreen and
Gatekeeper warnings can be removed. Until then, verify the published
checksums and use the walkthrough below.

There is no trust gap to bridge, because every binary is compiled
reproducibly, straight from public open-source commits, by the public GitHub
Actions workflows in [`.github/workflows/`](.github/workflows/) — the exact
artifacts the runners produce are attached to the releases, and the workflow
source is auditable commit by commit.

### Verify the archive you downloaded

Each release ships a `checksums.sha256` covering every archive. Compare your
download before opening it:

Windows (PowerShell, run inside the download folder):

```powershell
# check one archive against the published digest
Get-FileHash .\twilight-alpha-v0.4.0-windows-msvc-x86_64.zip -Algorithm SHA256

# or verify every archive against checksums.sha256 at once
Get-Content .\checksums.sha256 | ForEach-Object {
    $parts = $_ -split '  ', 2
    $hash = (Get-FileHash $parts[1].Trim() -Algorithm SHA256).Hash.ToLower()
    "$($hash -eq $parts[0]) $($parts[1].Trim())"
}
```

Linux and macOS (run inside the download folder):

```sh
sha256sum -c checksums.sha256      # GNU coreutils (Linux), BusyBox, or `shasum -a 256 -c` on macOS
```

### Bypass the "unknown publisher" warnings

Windows SmartScreen: when the *Windows protected your PC* dialog appears,
click **More info**, then **Run anyway**.

macOS Gatekeeper: if macOS refuses to open the binary, open
**System Settings → Privacy & Security** and click **Open Anyway** next to
the blocked app, or from a terminal:

```sh
xattr -cr /path/to/twilight       # strips the quarantine attribute
```

On Linux nothing intervenes for the pre-built archives; FreeBSD users build
from source (`chmod +x target/release/twilight` if needed).

## License

TwilightMC uses a multi-tier model: the core utility crates are **Apache-2.0**,
the application crates are **AGPL-3.0-or-later** — see
[LICENSE.md](LICENSE.md). Upstream projects, APIs and people that made this
possible are credited in [CREDITS.md](CREDITS.md). By contributing you accept the CLA terms
in [CONTRIBUTING.md](CONTRIBUTING.md).
