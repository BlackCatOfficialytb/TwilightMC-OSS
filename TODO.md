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
- [x] CI/CD: `.github/workflows/snapshot.yml` — fmt/clippy/test gates then a seven-target snapshot build matrix (Windows MSVC/MinGW/Clang, Linux GCC/Clang, macOS aarch64, FreeBSD native VM) with prism-style product-taxonomy artifact names (`twilight-snapshot-vX.Y.Z-ddmmyyyy-<commit>-<platform-toolchain>`), a push-only rolling `snapshot` pre-release (single rolling tag, `--cleanup-tag` replacement) carrying `checksums.sha256`
- [x] CI/CD: `.github/workflows/release.yml` — a created GitHub release triggers the same gates + five-way matrix and attaches `twilight-<tag>-<target>` archives to the release; the `snapshot` tag is excluded since snapshot.yml already supplies its files

## Milestone 1 — Bolide Alpha desktop UI (alpha-v0.1.0 → alpha-v0.2.0)

- [x] Task 1 `alpha-v0.1.0`: Tauri v2 foundation — `crates/twilight-ui` desktop app (Svelte 5 + Tailwind v4, plain JS) with a dark Prism-style shell: header (`TwilightMC Bolide vX.Y.Z` via the `get_version` IPC command), left nav (Instances / Accounts / Settings / Logs) and dark main container
- [x] Task 2 `alpha-v0.1.1`: auth IPC bridge — `get_accounts` / `add_offline_account` / `remove_account` / `set_active_account` / `get_active_account` wired to `twilight-auth::AccountStore` (`accounts.json` + `settings.json` under app data dir), topbar account badge, account management modal with add-offline form, active remove clears the badge pointer
- [ ] Task 3 `alpha-v0.1.2`: Java runtime discovery IPC bridge with a settings runtime preview (parsed versions)
- [ ] Task 4 `alpha-v0.1.3`: version metadata failover IPC (Piston → Prism → Freesm) with a searchable version picker
- [ ] Task 5 `alpha-v0.1.4`: launch pipeline bridge with real-time `launch-log` streaming, exit/crash handling and a console drawer
- [ ] Task 6 `alpha-v0.1.5`: storage path configuration (shared library dir, `%TEMP%\twilightmc_staging`) and staging cleanup
- [ ] Task 7 `alpha-v0.2.0`: full UI/UX audit, workspace version bump to 0.2.0, milestone completion
