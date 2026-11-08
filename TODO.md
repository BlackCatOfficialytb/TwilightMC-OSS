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
- [x] Task 3 `alpha-v0.1.2`: Java runtime discovery IPC bridge (`list_java` over `twilight-runtime::discover_java`, DTO with parsed major/version) and a settings runtime preview: scan button, newest-major-first table with version + JVM home; Windows `\\?\` verbatim paths demoted in `scan_roots` (fixes CLI and UI rendering)
- [x] Task 4 `alpha-v0.1.3`: version metadata failover IPC (`list_versions` over `twilight-downloader`'s piston → Prism → Freesm chain, `VersionRow`/`VersionCatalog` DTOs with latest-release flag) and a searchable version picker (query, All/Releases/Snapshots chips, latest badge) in the Instances section
- [x] Task 5 `alpha-v0.1.4`: launch pipeline bridge (`launch_game` over `twilight-cli`'s exported `run_launch_with`, `launch-log` events per stdout/stderr line, one-game-per-run guard, exit-code report) and a console drawer (Console toggle, auto-scroll, Clear/Hide); higher-ranked `download_all` closure fixed in `twilight-downloader` for the Tauri command wrapper
- [x] Task 6 `alpha-v0.1.5`: storage path configuration — `get_storage` / `set_shared_dir` / `clean_staging` IPC, custom shared library dir persisted in `settings.json` (launches honor it, default `app_data_dir/shared`), staging root shown (`%TEMP%\twilightmc_staging`) with a Clean-staging button in the Settings page
- [x] Task 7 `alpha-v0.2.0`: full UI/UX audit (nav dead-ends fixed — Accounts opens the account manager, Logs renders live game output inline) and workspace version bump to 0.2.0 — milestone complete
