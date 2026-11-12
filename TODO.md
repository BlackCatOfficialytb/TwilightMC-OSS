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
- [x] Task 7 `alpha-v0.2.0`: full UI/UX audit (nav dead-ends fixed - Accounts opens the account manager, Logs renders live game output inline) and workspace version bump to 0.2.0 - milestone complete

## Milestone 2 - Prism-style launcher UI (v0.2.0 → v0.3.0) — complete

- [x] `feat(ipc)`: backend hooks - `LaunchEvent::Started(pid)` child-pid event, `kill_instance` (Windows tree-kill via `taskkill /T /F`), `LaunchConfig.jvm_args` (`-Xms`/`-Xmx`), persisted java/memory/theme prefs (`get_java_prefs`/`set_java_prefs`/`get_theme_config`/`set_theme_config` in `settings.json`), `list_mods`/`toggle_mod` (`.disabled` rename), `delete_instance` (+ id traversal guards), `install_modpack` bridge to `twilight-cli::modpack`, `discover_java_installations`/`fetch_vanilla_versions` command renames, `open_path` (explorer/open/xdg-open)
- [x] Theme engine polished to the Cosmic Cyan palettes (Twilight Dark `#06B6D4` accent / Twilight Light Dawn `#0891B2`), no Indigo anywhere; theme choice persists locally and to `settings.json`
- [x] Collapsible sidebar (`w-16` ⇄ `w-60`, hover chevron, account card at the bottom opening the manager)
- [x] Action toolbar (Add Instance / Folders / Settings / theme toggle / real-time instance search) + instance context menu (Play, Edit Instance, Open Folder, View Logs, Delete)
- [x] New Instance Wizard: version picker tab, loader tab (Vanilla/Fabric/Quilt, pinned loader version persisted), `.mrpack` dropzone tab
- [x] Edit Instance modal: Version Components / Mods (.jar toggles + path import), Screenshots, Logs tabs
- [x] Settings modal: java dropdown (detected JREs), memory sliders (`-Xms`/`-Xmx`), storage paths + staging cleanup
- [x] Console drawer: always-visible collapsible bar (`h-10` ⇄ `h-48`), level coloring (INFO cyan / WARN amber / ERROR rose), Copy-to-clipboard and Kill-process controls
- [x] Task `alpha-v0.2.1` — instance discovery engine: unified `scan_instances` grid source over own `instance.json` (+ legacy `twilight.json`) and foreign Prism/MultiMC (`instance.cfg` + `mmc-pack.json`) metadata, root resolution (`settings.json` override → `%APPDATA%\PrismLauncher\instances` → `<shared>/instances`), local `icon.*` / Prism icon-library artwork, `set_instances_dir` override surfaced in Settings
- [x] Task `alpha-v0.2.2` — live instance grid: `InstanceGrid`/`InstanceCard` (click selection, Enter/Space play, right-click menu, hover play overlay), `convertFileSrc` icons via the asset protocol, Prism-style empty states (no-match + first-run)
- [x] Task `alpha-v0.2.3` — `fetch_loader_versions`: fabric (meta v2) / quilt (meta v3) build lists for one game version feeding the wizard dropdown
- [x] Task `alpha-v0.2.4` — wizard polish: loader-build dropdown with latest-stable preselection and offline free-text fallback, live `instance.json` slug (id) preview mirroring the backend slugify
- [x] Task `alpha-v0.2.5` — delete trust boundary: `delete_instance(to_trash)` moving instances into the sibling `.twilight-trash` (outside the scan root, cross-volume copy fallback), styled confirmation modal (Move to Trash / Delete Permanently)
- [x] Task `alpha-v0.3.0` — keyboard polish (arrow-key grid navigation with Enter-to-play, full Escape chain) and workspace version bump to 0.3.0 — Milestone 2 complete
- [x] Task `alpha-v0.3.1` — CI hotfix: delete/resolve tests pass the slug id from `create_instance_in` instead of the display name (`Trashables` vs `trashables`), fixing the failover on case-sensitive filesystems (Linux CI)

## Milestone 3 - desktop-grade design pass & modding (v0.3.1 → v0.4.0) — complete

- [x] Task `alpha-v0.3.2` — edit-instance modal extracted from the shell, mods manager with enable-toggles, sizes, delete and native OS picker
- [x] OpenDesign token implementation plus an XMCL-style dynamic accent color picker (ore presets + custom hex, whole-shell recolor)
- [x] Yardarm-style right context panel for the selected instance (identity, path, meta, action column, live mods count)
- [x] Instance card grammar: select on single click, launch on double click, hover play overlay dropped
- [x] Launch pipeline repair, verified with a real 26.4-snapshot-8 Fabric 0.20.1 launch booting to the title screen: launch resolves the same instances root the grid scans, metadata reads report precise failures (and accept Prism `instance.cfg`/`mmc-pack.json`), `javaVersion.majorVersion` bridges into `compatible_java_majors` (real manifests never carried a top-level list — Java 17 was spawned for a Java 25 game), launcherMeta v2 profiles synthesize the loader jar (Knot died with ClassNotFoundException without it), the game work dir is created before spawn, and launch failures print bright red in the auto-opened console drawer
- [x] Settings refactored from the 520px modal into a full-page two-column view (Appearance / Java & Memory / Storage & Staging / About & Updates) on the `settings` nav route
- [x] Task `alpha-v0.3.3` — in-app Modrinth browser and 1-click mod install: v2 search bridge (project_type/version/loader facets), latest compatible version resolution, SHA-1 verified primary-jar install into `<instance>/mods`, debounced browser modal wired from the context panel and the mods tab
- [x] Task `alpha-v0.3.4` — global drag-and-drop `.mrpack` installer: dropping a pack anywhere opens MrpackInstallModal (title, summary, versions, loader, file counts via `inspect_modpack`), `install_mrpack` stages downloads + overrides under a user-chosen instance name and writes the grid metadata (wizard installs previously stayed invisible to the scan), auto-selecting the new instance
- [x] Task `alpha-v0.4.0` — quality gates audit (fmt/clippy -D warnings/test workspace/frontend build) and workspace version bump to 0.4.0 — Milestone 3 complete

## Theme queue (milestone-polish backlog)

- [ ] Catppuccin Latte flavor (light palette pass over `app.css` tokens)
- [ ] Catppuccin Macchiato flavor (dark palette pass over `app.css` tokens)

## Accessibility Suite (Chế độ Trợ Năng Chuyên Biệt)

- [ ] **Blind Mode (Chế độ Khiếm Thị)** — profile preset / toggle in the settings page:
  - When creating or editing a Fabric instance: auto-suggest and 1-click install the **Minecraft Access** mod plus assistive spatial-audio tooling (reusing the Modrinth browser pipeline).
  - Show an explicit warning / guidance advising against Vanilla and Horizon engines for this profile — they lack the deep 3D screen-reader hooks and spatial navigation support that modded clients provide.
- [ ] **Deaf Mode (Chế độ Khiếm Thính)** — profile preset / toggle in the settings page:
  - Automatically enforce `showSubtitles: true` in the instance's `options.txt` before every launch.
  - Suggest visual audio-cue / subtitle-enhancer mods when the instance runs Fabric (without discouraging Vanilla — native closed captions are already supported there).

## Special thanks

- Special thanks to `cheryy_on_top` and `mimoji` from `.gg/sabatank` for the hilarious late-night debate about the Minecraft Narrator jumpscare (listening to Lofi gone wrong) that sparked the idea for the Blind & Deaf accessibility modes.
