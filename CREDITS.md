# Credits & Acknowledgments

TwilightMC is an independent launcher built on the shoulders of the Minecraft
launcher and modding community. This file credits the projects and people who
made it possible.

## Upstream reference projects

The `upstream/` directory vendors complete snapshots of the projects below as
**reference material only** — none of it is compiled into TwilightMC. The Rust
codebase is an independent implementation shaped by studying how these
launchers solve the same problems. Their licenses (GPL-3.0 unless noted)
govern those snapshots themselves.

### Prism Launcher

- **https://github.com/PrismLauncher/PrismLauncher** · GPL-3.0 · a fork of MultiMC
- Shape-shaping contributions: the instance-library model and its foreign
  metadata compatibility (`instance.cfg` + `mmc-pack.json` scanning),
  the metadata failover chain (Mojang `piston-meta` primary with Prism and
  Freesm mirrors), instance-root resolution conventions and icon artwork
  conventions.

### Freesm Launcher

- **https://github.com/FreesmTeam/FreesmLauncher** · GPL-3.0 · a Prism fork
- Shape-shaping contributions: offline-bypass and
  [authlib-injector](https://github.com/yushijinhun/authlib-injector) custom
  Yggdrasil (third-party account server) integration guidance, plus the third
  metadata failover mirror (`meta.freesmlauncher.org`).

### Modrinth (modrinth-code / labrinth)

- **https://github.com/modrinth/code** · per-package licensing (the
  modrinth-code `app-lib` backend is GPL-3.0-only)
- Shape-shaping contributions: launcher engineering standards, the composite
  launch-overlay approach, and the Modrinth project ecosystem TwilightMC
  integrates with (browser + `.mrpack` installer).

## Ecosystem, APIs & services

- **Mojang** — `piston-meta` version manifests, `libraries.minecraft.net` and
  the asset store (`resources.download.minecraft.net`) that every launch is
  built from.
- **Fabric** — meta v2 (`meta.fabricmc.net`), `maven.fabricmc.net` and the
  Knot loader that Fabric and Quilt launches compose through.
- **Quilt** — meta v3 (`meta.quiltmc.org`) and `maven.quiltmc.org`.
- **Legacy Fabric** — meta v2 at `meta.legacyfabric.net` and
  `maven.legacyfabric.net`, the pre-1.14 Fabric backport stack.
- **CleanroomMC** — [github.com/CleanroomMC/Cleanroom](https://github.com/CleanroomMC/Cleanroom),
  a 1.12.2 Forge fork that boots on modern Java; its published MMC component
  packs (`cleanroom-<version>.zip`) and `maven.cleanroommc.com` supply the
  launch data.
- **Modrinth** — the v2 API, the `.mrpack` pack format and
  `cdn.modrinth.com` power the in-app mods browser and the drag-and-drop
  pack installer. The planned **Minecraft Access** integration for the Blind
  Mode accessibility profile installs straight from Modrinth.
- **MultiMC** — the original launcher whose instance metadata formats Prism
  carried forward and TwilightMC now reads in place.
- **XMCL** — inspiration for the dynamic accent color engine
  (whole-shell recolor from a single pick).

## Interface iconography

The launcher ships four vendored icon packs (in `crates/twilight-ui/ui/public/icons/`)
plus a Twemoji fallback. The **Fluent (Auto)** default picks Fluent or Fluent Dark
by the theme ground; a missing glyph always falls back to Twemoji.

- **Fluent / Fluent Dark (Freesm Launcher icon pack)**
  [github.com/FreesmTeam/FreesmLauncher](https://github.com/FreesmTeam/FreesmLauncher)
  — vendored SVGs based on **Microsoft's Fluent UI System Icons**
  ([github.com/microsoft/fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons),
  MIT). Credited to the FreesmTeam (GPL-3.0 pack packaging) and Microsoft.
- **Breeze Dark / Breeze Light (Prism Launcher icon pack)**
  [github.com/PrismLauncher/PrismLauncher](https://github.com/PrismLauncher/PrismLauncher)
  — vendored SVGs of KDE's **Breeze icon theme**
  ([invent.kde.org/frameworks/breeze-icons](https://invent.kde.org/frameworks/breeze-icons),
  LGPL-2.1-or-later). Credited to the Prism team (GPL-3.0 pack packaging) and
  the KDE Visual Design Group.
- **Prism PE Colored (Prism Launcher PE icon pack)**
  [github.com/PrismLauncher/PrismLauncher](https://github.com/PrismLauncher/PrismLauncher)
  — full-color portable-edition style SVGs, GPL-3.0, credited to the Prism team.
- **Twitter Twemoji**
  ([github.com/twitter/twemoji](https://github.com/twitter/twemoji)) — the
  fallback glyph set (with additions from
  [github.com/jdecked/twemoji](https://github.com/jdecked/twemoji)), licensed
  under the **Creative Commons Attribution 4.0 International (CC-BY 4.0)**
  license. Attribution is kept here as long as any Twemoji glyphs ship.

### Instance icons

The instance icon picker (`crates/twilight-ui/ui/public/instance-icons/`) and its
Twemoji tab reuse the same upstream art:

- **Prism / MultiMC classic instance icons**
  [github.com/PrismLauncher/PrismLauncher](https://github.com/PrismLauncher/PrismLauncher)
  (`launcher/resources/multimc/scalable/instances`) — the grass/dirt/stone/
  diamond/creeper/enderman/netherstar/loader-brand set, GPL-3.0, credited to the
  Prism Launcher and MultiMC contributors. Vendored verbatim under
  `public/instance-icons/prism/` so the picker works fully offline.
- **Twemoji instance tab** — the curated gaming/Minecraft subset (crossed swords,
  shield, pickaxe, bow, gem, fire, rocket, crab, star, compass, dragon, …) ships
  from the same CC-BY 4.0 set described above, under `public/twemoji/`.

## Community Inspiration & Special Thanks

- Special thanks to `cheryy_on_top` and `mimoji` from `discord.gg/sabatank`
  for the hilarious late-night debate about the Minecraft Narrator jumpscare
  (listening to Lofi gone wrong) that sparked the idea for the Blind & Deaf
  accessibility modes.

## TwilightMC

Built and maintained by **BlackCat** and the TwilightMC contributors.
Contributions are welcome under the CLA terms in
[CONTRIBUTING.md](CONTRIBUTING.md); the full license model (core crates
Apache-2.0, application crates AGPL-3.0-or-later) lives in
[LICENSE.md](LICENSE.md).
