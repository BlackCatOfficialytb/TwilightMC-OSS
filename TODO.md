# TODO

- [x] Setup Cargo Workspace root (`crates/` layout)
- [x] `twilight-manifest`: Parse Mojang `version.json` schema (`VersionFile.cpp`)
- [x] `twilight-manifest`: Implement OS and feature `Rule` evaluation (`Rule.cpp`)
- [x] `twilight-manifest`: Implement `Library` artifact resolving and natives filtering
- [x] `twilight-downloader`: Async asset index parser (`indexes/<version>.json`)
- [x] `twilight-downloader`: Multi-threaded parallel file downloader with SHA-1 check
- [x] Meta failover chain: Mojang `piston-meta` primary, `meta.prismlauncher.org` and `meta.freesmlauncher.org` mirrors
- [x] `twilight-horizon`: Clean-room vanilla 26.3 asset extractor for Horizon native engine (`horizon-assets-v1` manifest, content-addressed store, `map_to_resources` export)
- [x] `twilight-launch`: JVM arguments template resolver (`${auth_player_name}`, etc.)
- [x] `twilight-launch`: Classpath builder and asynchronous process spawner
- [x] `twilight-auth`: Offline profile generator and Microsoft token structures — extended for Freesm-style offline bypass and authlib-injector custom Yggdrasil servers (`upstream/freesm/launcher/minecraft/auth/`)
- [x] `VERSION.md`: product version format (`TwilightMC <release channel> vX.Y.Z`, Snapshot `vX.Y.Z-ddmmyyyy-<commit>`), ordering and deprecation policy
- [x] `twilight-runtime`: system JVM discovery (PATH + OS roots + `JAVA_HOME`/registry fallback), fast version detection (`release` file primary, `-version` probe fallback) and `select_best_java` compatibility matching
- [x] `twilight-launch::natives`: 7-Zip CLI extraction (`7z x -y -o<dir> <jar> -xr!META-INF*` + excludes) with `Missing7z` error path and natives-dir cleaning
- [x] `twilight-cli`: clap 4 CLI (`launch` / `java` / `versions`), isolated `ArtifactStaging` under `%TEMP%\twilightmc_staging`, end-to-end launch pipeline and `--dry-run`
- [x] `twilight-modloader`: Quilt (meta v3) and Fabric (meta v2) profile resolution into composite Knot launch data (`--loader` / `--loader-version` CLI overlay, mapping jar + loader library staging, case-insensitive tokens)
- [x] `twilight-modrinth`: `.mrpack` engine — strict `modrinth.index.json` (format 1) parsing, client-env filtering, zip-slip-safe overrides extraction via a pure-Rust ZIP/DEFLATE (CRC-32 verified) reader, loopback-tested installer
- [x] `twilight-cli`: `modpack install <PATH_OR_URL>` subcommand with dry-run plan printing, loader detection from index dependencies (ambiguous packs rejected) and `<shared>/instances/<slug>` instance layout, verified by loopback staging tests
