# TwilightMC

TwilightMC is the Rust-bred clean-room Minecraft launcher: a Prism Launcher–style
core (Mojang manifest pipelines, asset failover mirrors, parallel SHA-1 verified
downloads, offline profiles) shipped as a single `twilight` binary, with first
class Fabric/Quilt loader compositing and Modrinth `.mrpack` installation.

## Build

Requires a stable Rust toolchain (edition 2024):

```
cargo build --release        # binary lands in target/release/
cargo test --workspace
```

## Usage

```
twilight launch latest --dry-run
twilight launch 1.21.4 --loader fabric --loader-version 0.16.9
twilight java
twilight versions
twilight modpack install path\to\pack.mrpack
```

See `VERSION.md` for the release channel and snapshot versioning spec.
