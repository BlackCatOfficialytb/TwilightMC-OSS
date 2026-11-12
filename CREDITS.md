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

### Modrinth (Theseus / labrinth)

- **https://github.com/modrinth/code** · per-package licensing (the Theseus
  `app-lib` backend is GPL-3.0-only)
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
- **Modrinth** — the v2 API, the `.mrpack` pack format and
  `cdn.modrinth.com` power the in-app mods browser and the drag-and-drop
  pack installer. The planned **Minecraft Access** integration for the Blind
  Mode accessibility profile installs straight from Modrinth.
- **MultiMC** — the original launcher whose instance metadata formats Prism
  carried forward and TwilightMC now reads in place.
- **XMCL** — inspiration for the dynamic accent color engine
  (whole-shell recolor from a single pick).

## Interface iconography

- The current temporary interface iconography borrows from **Twitter
  Twemoji** ([github.com/twitter/twemoji](https://github.com/twitter/twemoji)),
  licensed under the **Creative Commons Attribution 4.0 International
  (CC-BY 4.0)** license. These emoji-based glyphs are placeholders until the
  dedicated TwilightMC icon set lands; attribution is kept here as long as
  any of them ship.

## Special thanks

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
