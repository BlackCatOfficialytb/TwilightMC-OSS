//! End-to-end launch pipeline: metadata failover, artifact pre-flight,
//! natives extraction, argument assembly and the final game spawn.
//!
//! The *pure* core is [`assemble_command`] — network-free and covered by unit
//! tests; everything with side effects hangs off [`run_launch`].

use std::collections::{BTreeSet, HashMap};
use std::path::{Path, PathBuf};
use std::time::Instant;

use tokio::sync::mpsc;

use twilight_auth::{Account, AccountType};
use twilight_downloader::{
    AssetIndex, DownloadRequest, ParallelDownloader, fetch_json_failover, fetch_version_manifest,
    vanilla_sources,
};
use twilight_horizon::{
    AssetStore, HorizonError, InstallRequest, LaunchOptions, client_command,
    discover_client_binaries, ensure_resources, resources_dir, session_json,
};
use twilight_launch::{
    GameOptions, LaunchEvent, LaunchPlan, ProfileVars, QuickPlay, active_paths, classpath_string,
    game_arguments, inject_account_vars, jvm_arguments, replace_tokens_in, separator,
};
use twilight_manifest::{RuntimeContext, VersionFile};
use twilight_modloader::{LoaderProfile, ModLoader, resolve_loader_profile};
use twilight_runtime::{JavaVersion, discover_java, probe_version, select_best_java};

use crate::cli::{LaunchArgs, LaunchConfig};
use crate::error::CliError;
use crate::staging::ArtifactStaging;

/// Resolved locations of everything a launch touches on disk.
#[derive(Debug, Clone)]
pub struct LaunchPaths {
    pub shared_dir: PathBuf,
    pub instance_dir: PathBuf,
    /// Game cwd — the `${game_directory}` var.
    pub work_dir: PathBuf,
    /// `libraries/` store root that every classpath entry roots at.
    pub library_root: PathBuf,
    /// The instance's own `libraries/` dir: where Prism puts component-pack
    /// files marked `"MMC-hint": "local"` (never the shared store).
    pub instance_library_root: PathBuf,
    /// Horizon/vanilla assets root (`objects/xx/<sha>`, `indexes/<id>.json`).
    pub assets_root: PathBuf,
    /// Client jar of the version.
    pub main_jar: PathBuf,
    /// Natives scratchpad inside the staging area — `${natives_directory}`.
    pub natives_dir: PathBuf,
    /// Classic `assets/virtual/<id>` folder for Mojang's two virtual indexes.
    pub game_assets: Option<PathBuf>,
    /// Effective assets id (`assets` short name or asset-index id).
    pub assets_id: String,
}

/// Outcome of JVM selection for the plan and the dry-run report.
#[derive(Debug, Clone)]
pub struct JavaSelection {
    pub executable: PathBuf,
    pub version: Option<JavaVersion>,
}

/// Instance label used inside the staging path — the instance dir file name.
fn instance_label(instance_dir: &Path) -> String {
    instance_dir
        .file_name()
        .map(|name| name.to_string_lossy().to_string())
        .filter(|name| !name.trim().is_empty())
        .unwrap_or_else(|| "default".to_owned())
}

/// Mojang reads `assets/virtual/<id>` only for these two legacy index ids.
fn is_virtual_assets_id(assets_id: &str) -> bool {
    matches!(assets_id, "legacy" | "pre-1.6")
}

/// Computes every on-disk location for a version from the CLI configuration.
/// Pure: nothing is created, only paths are named.
pub fn resolve_paths(cfg: &LaunchConfig, version: &VersionFile) -> LaunchPaths {
    let version_id = &version.id;
    let assets_id = version
        .assets
        .clone()
        .or_else(|| version.effective_asset_index().map(|index| index.id))
        .unwrap_or_default();
    let shared_dir = cfg.shared_dir.clone();
    let instance_dir = cfg
        .instance_dir
        .clone()
        .unwrap_or_else(|| shared_dir.join("instances").join(version_id));
    let work_dir = instance_dir.join("minecraft");
    let assets_root = shared_dir.join("assets");
    let main_jar = work_dir
        .join("versions")
        .join(version_id)
        .join(format!("{version_id}.jar"));
    let staging = ArtifactStaging::new(cfg.temp_dir.clone());
    let natives_dir = staging.natives_dir(&instance_label(&instance_dir));
    let game_assets = if is_virtual_assets_id(&assets_id) {
        Some(assets_root.join("virtual").join(&assets_id))
    } else {
        None
    };
    LaunchPaths {
        shared_dir: shared_dir.clone(),
        library_root: shared_dir.join("libraries"),
        instance_library_root: instance_dir.join("libraries"),
        instance_dir,
        work_dir,
        main_jar,
        assets_root,
        natives_dir,
        game_assets,
        assets_id,
    }
}
/// Resolves the java executable: an explicit `--java` wins (its version is
/// probed best-effort, mismatches only warn), otherwise the whole system is
/// discovered and `select_best_java` picks by manifest-required majors.
async fn resolve_java(
    explicit: Option<PathBuf>,
    required_majors: &[i32],
) -> Result<JavaSelection, CliError> {
    if let Some(path) = explicit {
        let version = probe_version(&path).await.ok();
        if let Some(found) = &version
            && !required_majors.is_empty()
            && !required_majors.contains(&found.major)
        {
            eprintln!(
                "warning: --java reports Java {} but the manifest requires {required_majors:?}",
                found.major
            );
        }
        return Ok(JavaSelection {
            executable: path,
            version,
        });
    }
    let installed = discover_java().await?;
    let Some(best) = select_best_java(&installed, required_majors) else {
        return Err(CliError::NoJava {
            majors: required_majors.to_vec(),
        });
    };
    Ok(JavaSelection {
        executable: best.executable.clone(),
        version: Some(best.version.clone()),
    })
}

/// Maps a resolved Java selection to the GC resolver's major argument. `0` is
/// the explicit "unknown" sentinel (the probe failed), never a fake version.
fn java_major_for_gc(java: &JavaSelection) -> i32 {
    java.version
        .as_ref()
        .map(|version| version.major)
        .filter(|major| *major > 0)
        .unwrap_or(0)
}

/// Validates the `--loader` token case-insensitively (`None` = vanilla only).
fn parse_loader_token(loader: Option<&str>) -> Result<Option<ModLoader>, CliError> {
    let Some(token) = loader else {
        return Ok(None);
    };
    ModLoader::from_token(token)
        .map(Some)
        .ok_or_else(|| CliError::UnknownLoader {
            given: token.to_owned(),
        })
}

/// Network-free core: turns a resolved manifest + paths + account into the
/// final [`LaunchPlan`]. Modern manifests own `-cp ${classpath}` (the token is
/// resolved through vars, and the plan adds no second classpath switch);
/// legacy manifests get the classpath from the plan itself. A resolved
/// [`LoaderProfile`] overrides the main class with Knot and prepends the
/// loader libraries to the classpath — and drops any vanilla library a patch
/// set replaces (Cleanroom's LWJGL 3 over 1.12.2's LWJGL 2).
pub fn assemble_command(
    java: &JavaSelection,
    ctx: &RuntimeContext,
    version: &VersionFile,
    paths: &LaunchPaths,
    account: &Account,
    loader: Option<&LoaderProfile>,
    game_options: &GameOptions,
) -> Result<LaunchPlan, CliError> {
    let none = BTreeSet::<String>::new();
    // a patch set supersedes vanilla entries by `group:artifact`; keeping both
    // would put LWJGL 2 and LWJGL 3 on one classpath
    let vanilla_libraries: Vec<twilight_manifest::Library> = version
        .libraries
        .iter()
        .filter(|library| {
            !loader.is_some_and(|profile| profile.is_replaced(&library.name.to_string()))
        })
        .cloned()
        .collect();
    let (vanilla_entries, _native_jars) =
        active_paths(&vanilla_libraries, ctx, &paths.library_root, &none);
    // loader jars come first so the Knot launcher wins class resolution.
    // `MMC-hint: local` entries live in the instance's own `libraries/` dir,
    // exactly where Prism extracts them from the component pack.
    let mut classpath_entries: Vec<PathBuf> = match loader {
        Some(profile) => profile
            .libraries
            .iter()
            .map(|lib| {
                if lib.local {
                    paths.instance_library_root.join(&lib.storage)
                } else {
                    paths.library_root.join(&lib.storage)
                }
            })
            .collect(),
        None => Vec::new(),
    };
    classpath_entries.extend(vanilla_entries);
    let full_classpath = classpath_string(&classpath_entries, Some(&paths.main_jar));

    let profile = ProfileVars {
        profile_name: version.id.clone(),
        version_name: version.id.clone(),
        version_type: version
            .r#type
            .clone()
            .unwrap_or_else(|| "release".to_owned()),
        game_directory: paths.work_dir.display().to_string(),
        game_assets: paths.game_assets.as_ref().map(|p| p.display().to_string()),
        assets_root: paths.assets_root.display().to_string(),
        assets_index_name: paths.assets_id.clone(),
        library_directory: paths.library_root.display().to_string(),
        natives_directory: paths.natives_dir.display().to_string(),
        launcher_name: Some("twilight-cli".to_owned()),
        launcher_version: Some(env!("CARGO_PKG_VERSION").to_owned()),
    };
    let mut vars = profile.to_map();
    inject_account_vars(&mut vars, account);
    // the classpath token must resolve even when the manifest itself owns `-cp`
    vars.insert("classpath".to_owned(), full_classpath.clone());
    vars.insert("classpath_separator".to_owned(), separator().to_owned());

    // loader traits (Meta v1 `+traits`) drive quick-play detection and travel
    // into the diagnostics header, mirroring Prism's profile trait set
    let traits: BTreeSet<String> = loader
        .map(|profile| profile.traits.clone())
        .unwrap_or_default();

    // Prism prepends `+jvmArgs` (extraArguments) ahead of the manifest list
    let mut jvm_args = loader
        .map(|profile| {
            profile
                .jvm_args
                .iter()
                .map(|arg| replace_tokens_in(arg, &vars))
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();
    jvm_args.extend(jvm_arguments(version, ctx, &none, &vars, None));
    // legacy manifests (`minecraftArguments` era) have no `arguments.jvm`
    // block: the era's own launcher carried the natives scratchpad onto
    // java.library.path itself. Without it LWJGL 2/3 can never find its DLLs.
    if version.arguments.is_none() {
        jvm_args.push(format!(
            "-Djava.library.path={}",
            paths.natives_dir.display()
        ));
    }
    let manifest_supplies_classpath = jvm_args
        .iter()
        .any(|arg| arg == "-cp" || arg == "-classpath");

    // a Meta v1 profile owns the whole game-argument template; patching a
    // scratch manifest reuses the legacy `minecraftArguments` substitution
    let scratch;
    let game_source = match loader.and_then(|profile| profile.minecraft_arguments.as_deref()) {
        Some(arguments) => {
            scratch = VersionFile {
                arguments: None,
                minecraft_arguments: Some(arguments.to_owned()),
                ..version.clone()
            };
            &scratch
        }
        None => version,
    };
    let mut options = game_options.clone();
    if let Some(profile) = loader {
        options
            .tweakers
            .splice(0..0, profile.tweakers.iter().cloned());
    }
    let game_args = game_arguments(game_source, ctx, &none, &traits, &vars, &options);

    // the Knot main class takes over whenever a loader profile was resolved;
    // without one the manifest's own main class is mandatory
    let main_class: String = match loader {
        Some(profile) => profile.main_class.clone(),
        None => {
            let class = version
                .main_class
                .as_deref()
                .filter(|class| !class.trim().is_empty())
                .ok_or_else(|| CliError::NoMainClass {
                    id: version.id.clone(),
                })?;
            class.to_owned()
        }
    };

    Ok(LaunchPlan {
        java_executable: java.executable.clone(),
        jvm_args,
        classpath: if manifest_supplies_classpath {
            String::new()
        } else {
            full_classpath
        },
        main_class,
        game_args,
        work_dir: paths.work_dir.clone(),
        env: HashMap::new(),
    })
}

/// Appends the authlib-injector `-javaagent` flags when a custom Yggdrasil
/// account launched with a resolved agent jar.
fn inject_authlib(plan: &mut LaunchPlan, authlib_jar: &Option<(PathBuf, String)>) {
    if let Some((jar, url)) = authlib_jar {
        plan.jvm_args
            .extend(twilight_auth::authlib_injector_jvm_args(
                &jar.display().to_string(),
                url,
            ));
    }
}

/// Human-readable `--dry-run` summary. Ends with a newline.
pub fn dry_run_report(
    plan: &LaunchPlan,
    paths: &LaunchPaths,
    ctx: &RuntimeContext,
    account: &Account,
    java: &JavaSelection,
    loader: Option<&LoaderProfile>,
) -> String {
    let command = twilight_launch::build_command(plan);
    let std_command = command.as_std();
    let mut argv = vec![std_command.get_program().to_string_lossy().into_owned()];
    argv.extend(
        std_command
            .get_args()
            .map(|arg| arg.to_string_lossy().into_owned()),
    );

    let mut lines = vec![
        "twilight --dry-run: launch plan (no downloads, no natives writes, no game spawn)"
            .to_owned(),
        format!("work directory: {}", paths.work_dir.display()),
        format!("library root:   {}", paths.library_root.display()),
        format!(
            "assets root:    {} [{}]",
            paths.assets_root.display(),
            paths.assets_id
        ),
        format!("natives:        {}", paths.natives_dir.display()),
        format!("runtime: {}", ctx.classifier()),
    ];
    match &java.version {
        Some(found) => {
            lines.push(format!(
                "java: {} (Java {} / {})",
                java.executable.display(),
                found.major,
                found.full
            ));
        }
        None => {
            lines.push(format!(
                "java: {} (version not probed)",
                java.executable.display()
            ));
        }
    }
    lines.push(format!(
        "account: {} (offline uuid {})",
        account.username, account.uuid
    ));
    if let Some(profile) = loader {
        lines.push(format!(
            "loader: {} {} ({} with {} loader libraries)",
            profile.loader,
            profile.loader_version,
            profile.main_class,
            profile.libraries.len()
        ));
    }
    if plan.classpath.is_empty() {
        lines.push("classpath: embedded in the manifest jvm arguments".to_owned());
    } else {
        lines.push(format!("classpath: {}", plan.classpath));
    }
    lines.push(format!("command ({} argument(s)):", argv.len() - 1));
    lines.push(
        argv.iter()
            .map(|arg| format!("  {arg}"))
            .collect::<Vec<_>>()
            .join("\n"),
    );
    lines.join("\n") + "\n"
}

/// Assembles the Prism/Freesm-style diagnostic header from the resolved
/// launch inputs. Pure: the environment snapshot (DNS/GPU/OS/CPU/RAM) is
/// collected by the caller and passed in.
#[allow(clippy::too_many_arguments)]
fn build_diagnostics(
    account: &Account,
    paths: &LaunchPaths,
    version: &VersionFile,
    java: &JavaSelection,
    loader: Option<&LoaderProfile>,
    plan: &LaunchPlan,
    vanilla_entries: &[PathBuf],
    native_jars: &[PathBuf],
    dns: Vec<(String, String)>,
    hardware: twilight_launch::Hardware,
) -> twilight_launch::DiagnosticInfo {
    let mut components = Vec::new();
    if let Some(profile) = loader {
        let (display, uid) = match profile.loader {
            ModLoader::Fabric => ("Fabric Loader", "net.fabricmc.fabric-loader"),
            ModLoader::Quilt => ("Quilt Loader", "net.quiltmc.quilt-loader"),
            ModLoader::Forge => ("Forge Loader", "net.minecraftforge"),
            ModLoader::NeoForge => ("NeoForge Loader", "net.neoforged"),
            ModLoader::LegacyFabric => ("Legacy Fabric Loader", "net.legacyfabric.fabric-loader"),
            ModLoader::Cleanroom => ("Cleanroom Loader", "net.minecraftforge"),
        };
        components.push(format!("{display} ({uid}) {}", profile.loader_version));
    }
    components.push(format!("Minecraft (net.minecraft) {}", version.id));

    // the full probed version string wins ("21.0.2"); unprobed runtimes
    // degrade to the major, then to "unknown"
    let java_version = java
        .version
        .as_ref()
        .map(|found| found.full.clone())
        .filter(|full| !full.trim().is_empty())
        .or_else(|| java.version.as_ref().map(|found| found.major.to_string()))
        .unwrap_or_else(|| "unknown".to_owned());

    // loader jars, then the active vanilla entries, then the client jar —
    // the exact classpath order
    let mut libraries = match loader {
        Some(profile) => profile
            .libraries
            .iter()
            .map(|lib| {
                let root = if lib.local {
                    &paths.instance_library_root
                } else {
                    &paths.library_root
                };
                root.join(&lib.storage).display().to_string()
            })
            .collect::<Vec<_>>(),
        None => Vec::new(),
    };
    libraries.extend(
        vanilla_entries
            .iter()
            .map(|path| path.display().to_string()),
    );
    libraries.push(paths.main_jar.display().to_string());

    twilight_launch::DiagnosticInfo {
        version: twilight_launch::VERSION_LABEL.to_owned(),
        auth_mode: twilight_launch::auth_mode_name(account).to_owned(),
        dns,
        game_dir: paths.work_dir.display().to_string(),
        java_path: java.executable.display().to_string(),
        java_version,
        hardware,
        components,
        main_class: plan.main_class.clone(),
        traits: loader
            .map(|profile| profile.traits.iter().cloned().collect())
            .unwrap_or_default(),
        libraries,
        native_libraries: native_jars
            .iter()
            .map(|path| path.display().to_string())
            .collect(),
        natives_dir: paths.natives_dir.display().to_string(),
        game_args: plan.game_args.clone(),
        jvm_args: plan.jvm_args.clone(),
    }
}

/// Runs the `launch` subcommand: metadata failover, JVM selection, artifact
/// downloads, horizon assets, natives extraction, spawn. `--dry-run` stops
/// after the (network-read-only) plan assembly, prints and exits 0.
/// Native Horizon path: prepare the resources Horizon reads, assemble its
/// documented command line and hand the Microsoft session over on stdin.
async fn run_horizon_cli(cfg: &LaunchConfig, account: &Account) -> Result<i32, CliError> {
    let binary = cfg
        .horizon
        .clone()
        .or_else(|| discover_client_binaries().into_iter().next())
        .ok_or_else(|| {
            CliError::Horizon(HorizonError::Probe(
                "no horizon-client binary found; pass --horizon /path/to/horizon-client".to_owned(),
            ))
        })?;
    if !cfg.dry_run && !binary.is_file() {
        return Err(CliError::Horizon(HorizonError::Probe(format!(
            "{} does not exist",
            binary.display()
        ))));
    }

    let client = reqwest::Client::new();
    // Fresh piston-meta first; the shared cache only covers offline launches.
    let manifest = fetch_version_manifest(
        &client,
        &vanilla_sources(),
        &cfg.version_or_id,
        Some(&cfg.shared_dir.join("meta")),
    )
    .await?;
    let version =
        twilight_manifest::parse_version_file(&manifest.raw.to_string()).map_err(|source| {
            CliError::ManifestParse {
                id: manifest.id.clone(),
                source,
            }
        })?;
    let client_jar = version.client().ok_or_else(|| {
        CliError::Horizon(HorizonError::MissingResourceFile(format!(
            "{} declares no client jar download",
            manifest.id
        )))
    })?;
    let index_info = version.effective_asset_index().ok_or_else(|| {
        CliError::Horizon(HorizonError::MissingResourceFile(format!(
            "{} declares no asset index",
            manifest.id
        )))
    })?;

    // A dry run never downloads, but still shows the real paths it would use.
    let resources = if cfg.dry_run {
        resources_dir(&cfg.shared_dir, &manifest.id)
    } else {
        ensure_resources(
            &client,
            &InstallRequest {
                version: &manifest.id,
                shared_root: &cfg.shared_dir,
                client: client_jar,
                asset_index: &index_info,
            },
        )
        .await?
        .dir
    };
    let instance_dir = cfg
        .instance_dir
        .clone()
        .unwrap_or_else(|| cfg.shared_dir.join("instances").join(&manifest.id));
    let game_dir = instance_dir.join("minecraft");
    let home = instance_dir.join("horizon");
    if !cfg.dry_run {
        tokio::fs::create_dir_all(&game_dir).await?;
        tokio::fs::create_dir_all(&home).await?;
    }

    let mut options = LaunchOptions::new(&resources, &game_dir, &home);
    options.quick_play_multiplayer = cfg.server.clone();
    options.quick_play_singleplayer = cfg.world.clone().filter(|_| cfg.server.is_none());
    let session = if let Some(file) = &cfg.horizon_session {
        options.session_file = Some(file.clone());
        None
    } else if account.account_type == AccountType::Microsoft && !cfg.dry_run {
        let token = account
            .access_token
            .as_deref()
            .filter(|token| !token.trim().is_empty())
            .ok_or_else(|| {
                CliError::Horizon(HorizonError::Session(
                    "the active Microsoft account has no Minecraft access token; sign in again"
                        .to_owned(),
                ))
            })?;
        let json = session_json(&account.username, &account.uuid.to_string(), token)?;
        options.session_stdin = true;
        Some(json)
    } else if !cfg.dry_run {
        return Err(CliError::Horizon(HorizonError::Launch(
            "Horizon requires a Microsoft account that owns Minecraft (or --horizon-session)"
                .to_owned(),
        )));
    } else {
        None
    };
    let command = client_command(&binary, &options)?;
    if cfg.dry_run {
        println!("{}", command.display());
        return Ok(0);
    }

    let mut process = tokio::process::Command::new(&command.program);
    process.args(&command.args);
    for (key, value) in &command.environment {
        process.env(key, value);
    }
    for key in &command.remove_environment {
        process.env_remove(key);
    }
    let mut child = process.spawn()?;
    if let Some(session) = session {
        use tokio::io::AsyncWriteExt;
        let mut stdin = child.stdin.take().ok_or_else(|| {
            CliError::Horizon(HorizonError::Session(
                "Horizon stdin pipe unavailable".to_owned(),
            ))
        })?;
        stdin.write_all(session.as_bytes()).await?;
        drop(stdin);
    }
    let status = child.wait().await?;
    Ok(status.code().unwrap_or(-1))
}

pub async fn run_launch(args: LaunchArgs) -> Result<i32, CliError> {
    run_launch_with(args.to_config()?, None).await
}

/// Launches from a fully resolved [`LaunchConfig`], forwarding every game
/// output line into `sink` when provided (the desktop UI's console drawer).
/// Forwards one developer-timing milestone to the desktop UI without making
/// the CLI print anything extra.
async fn send_phase(
    sink: &Option<mpsc::Sender<LaunchEvent>>,
    name: &'static str,
    started: Instant,
) {
    if let Some(sink) = sink {
        let _ = sink
            .send(LaunchEvent::Phase(
                name,
                started.elapsed().as_millis() as u64,
            ))
            .await;
    }
}

pub async fn run_launch_with(
    cfg: LaunchConfig,
    sink: Option<mpsc::Sender<LaunchEvent>>,
) -> Result<i32, CliError> {
    // Standalone CLI: print the identity line before any network work. The
    // desktop host emits the same line itself, so it is never duplicated.
    if sink.is_none() {
        println!("{}", twilight_launch::VERSION_BANNER);
    }
    let account = cfg
        .account
        .clone()
        .unwrap_or_else(|| Account::offline(cfg.username.clone()));
    // `horizon` is an engine, not a JVM loader: it has no Java, classpath or
    // loader profile, so it leaves the generic pipeline before those stages.
    if cfg
        .loader
        .as_deref()
        .is_some_and(|loader| loader.eq_ignore_ascii_case("horizon"))
    {
        return run_horizon_cli(&cfg, &account).await;
    }
    let mut phase_started = Instant::now();
    let game_options = GameOptions {
        quick_play: QuickPlay {
            server_address: cfg.server.clone(),
            server_port: None,
            world: cfg.world.clone(),
        },
        ..Default::default()
    };
    let client = reqwest::Client::new();

    // ---- metadata first: required majors and paths depend on the manifest.
    // Fresh piston-meta always wins; the disk cache is only an offline fallback.
    let manifest = fetch_version_manifest(
        &client,
        &vanilla_sources(),
        &cfg.version_or_id,
        Some(&cfg.shared_dir.join("meta")),
    )
    .await?;
    let version =
        twilight_manifest::parse_version_file(&manifest.raw.to_string()).map_err(|e| {
            CliError::ManifestParse {
                id: manifest.id.clone(),
                source: e,
            }
        })?;
    let ctx = RuntimeContext::host();
    let paths = resolve_paths(&cfg, &version);

    // ---- loader overlay: resolve the composite launch data for `--loader`
    //      first, because a loader may override the Java requirement (Cleanroom
    //      runs 1.12.2 on modern JDKs, not the manifest's Java 8)
    let loader_token = parse_loader_token(cfg.loader.as_deref())?;
    // a loader pinned to one game version (Cleanroom targets 1.12.2 only)
    // rejects a mismatched manifest instead of composing a broken launch
    if let Some(loader) = loader_token
        && let Some(fixed) = loader.fixed_game_version()
        && !manifest.id.trim().eq_ignore_ascii_case(fixed)
    {
        return Err(CliError::LoaderGameMismatch {
            loader: loader.to_string(),
            required: fixed.to_owned(),
            given: manifest.id.clone(),
        });
    }
    let loader_profile: Option<LoaderProfile> = match loader_token {
        Some(loader) => Some(
            resolve_loader_profile(&client, loader, &manifest.id, cfg.loader_version.as_deref())
                .await?,
        ),
        None => None,
    };
    let required_majors = loader_profile
        .as_ref()
        .map(|profile| profile.required_java_majors(&version.compatible_java_majors))
        .unwrap_or(&version.compatible_java_majors)
        .to_vec();
    let java = resolve_java(cfg.java.clone(), &required_majors).await?;

    // GC flags must be chosen for the Java that will actually spawn, not for a
    // settings-only override that may be unset. `0` is the unknown sentinel.
    let java_major = java_major_for_gc(&java);
    let (gc_flags, gc_notice) = twilight_launch::resolve_gc_flags(
        cfg.gc.preset,
        java_major,
        cfg.gc.max_memory_mib,
        &cfg.gc.custom_flags,
        &cfg.gc.extra_args,
    );
    if let Some(notice) = gc_notice {
        println!("{notice}");
        if let Some(sink) = &sink {
            let _ = sink.send(LaunchEvent::Stdout(notice)).await;
        }
    }

    // ---- authlib-injector: Ely.by (first-class) and custom Yggdrasil
    //      accounts launch through the agent jar, auto-fetched + SHA-256
    //      verified into <shared>/libraries; Ely.by always targets its
    //      canonical endpoint
    //
    //      Deliberate design note: Ely.by's own authlib replacement meta
    //      (`https://authlib.ely.by/api/authlib-injector`, the `by.ely`
    //      namespace some launchers swap in) is NOT used here. The canonical
    //      authlib-injector endpoint above already serves valid Yggdrasil
    //      session payloads for every signed-in account, and swapping the
    //      meta would only widen the surface (extra fetch, different skin
    //      resolution) without fixing anything. Skins come from the account's
    //      stored textures (skinsystem for classic sign-ins, the OAuth2
    //      profile otherwise) and the game validates sessions against the
    //      endpoint the account actually signed in with.
    let authlib_jar = match account.authlib_server() {
        Some(server_url) => Some((
            twilight_auth::ensure_authlib_injector(&client, &paths.shared_dir).await?,
            server_url.to_owned(),
        )),
        None => None,
    };
    send_phase(&sink, "preflight", phase_started).await;
    phase_started = Instant::now();

    // ---- pre-launch diagnostics: service DNS answers, GPU/OS/CPU/RAM and
    //      the classpath layout, collected once for both output branches
    let (dns, hardware) = tokio::join!(
        twilight_launch::resolve_service_hosts(),
        twilight_launch::collect_hardware(),
    );
    let none = BTreeSet::<String>::new();
    // the diagnostics and natives pass must see the same filtered set the
    // classpath uses, or a patch-set replacement shows up as a stale entry
    let diagnostic_libraries: Vec<twilight_manifest::Library> = version
        .libraries
        .iter()
        .filter(|library| {
            !loader_profile
                .as_ref()
                .is_some_and(|profile| profile.is_replaced(&library.name.to_string()))
        })
        .cloned()
        .collect();
    let (vanilla_entries, native_jars) =
        active_paths(&diagnostic_libraries, &ctx, &paths.library_root, &none);

    if cfg.dry_run {
        let plan = assemble_command(
            &java,
            &ctx,
            &version,
            &paths,
            &account,
            loader_profile.as_ref(),
            &game_options,
        )?;
        let mut plan = plan;
        plan.jvm_args.extend(cfg.jvm_args.clone());
        plan.jvm_args.extend(gc_flags);
        inject_authlib(&mut plan, &authlib_jar);
        let diag = build_diagnostics(
            &account,
            &paths,
            &version,
            &java,
            loader_profile.as_ref(),
            &plan,
            &vanilla_entries,
            &native_jars,
            dns,
            hardware,
        );
        println!("{}", twilight_launch::header_lines(&diag).join("\n"));
        println!(
            "{}",
            dry_run_report(
                &plan,
                &paths,
                &ctx,
                &account,
                &java,
                loader_profile.as_ref()
            )
        );
        return Ok(0);
    }

    // ---- mandatory BareBones gate: CleanroomMC cannot boot 1.12.2 on
    //      Java 21/25+ without its core compatibility mods, so every real
    //      (non dry-run) Cleanroom launch checks the instance mods dir first
    if loader_token
        .as_ref()
        .is_some_and(|loader| *loader == twilight_modloader::ModLoader::Cleanroom)
        && let Err(missing) = twilight_launch::check_cleanroom_gate(&paths.work_dir.join("mods"))
    {
        return Err(CliError::CleanroomGate {
            message: twilight_launch::CLEANROOM_GATE_MESSAGE.to_owned(),
            missing: missing.join(", "),
            url: twilight_launch::BAREBONES_CURSEFORGE_URL.to_owned(),
        });
    }

    // ---- fresh staging: purge hook before every real launch
    let staging = ArtifactStaging::new(cfg.temp_dir.clone());
    staging.clean().await?;
    staging.ensure_dirs().await?;

    // the game cwd must exist before the JVM spawns inside it — foreign
    // Prism layouts and freshly created instances alike
    tokio::fs::create_dir_all(&paths.work_dir).await?;

    // ---- component-pack libraries: Prism extracts the pack's own
    //      `libraries/` tree into the instance dir and marks those entries
    //      `MMC-hint: local`, so nothing downloads them. Writing them first
    //      makes the classpath valid before the network pass runs.
    if let Some(profile) = &loader_profile
        && !profile.bundled_libraries.is_empty()
    {
        tokio::fs::create_dir_all(&paths.instance_library_root).await?;
        for (name, bytes) in &profile.bundled_libraries {
            // flat filenames only: a pack must not write outside the dir
            let safe = std::path::Path::new(name)
                .file_name()
                .map(|leaf| leaf.to_string_lossy().into_owned())
                .unwrap_or_default();
            if safe.is_empty() {
                continue;
            }
            tokio::fs::write(paths.instance_library_root.join(safe), bytes).await?;
        }
    }

    // ---- libraries + client jar (parallel, sha1-verified)
    let downloader = ParallelDownloader::new(client.clone(), 8);
    let mut requests = Vec::new();
    if let Some(client_info) = version.client() {
        requests.push(DownloadRequest {
            url: client_info.url.clone(),
            dest: paths.main_jar.clone(),
            sha1: Some(client_info.sha1.clone()),
        });
    }
    for library in &version.libraries {
        if library.is_local() || !library.is_active(&ctx, &none) {
            continue;
        }
        // a patch-set replacement supersedes this vanilla artifact entirely
        if loader_profile
            .as_ref()
            .is_some_and(|profile| profile.is_replaced(&library.name.to_string()))
        {
            continue;
        }
        for resolved in library.resolve_downloads(&ctx) {
            requests.push(DownloadRequest {
                url: resolved.url,
                dest: paths.library_root.join(&resolved.storage),
                sha1: resolved.sha1,
            });
        }
    }
    // FreeType artifacts are security-relevant: record which requests carry a
    // manifest SHA-1 so the advisory can distinguish verified from unknown.
    let mut freetype_requests: Vec<(PathBuf, bool)> = requests
        .iter()
        .filter(|request| {
            twilight_launch::is_lwjgl_freetype_artifact(&request.url)
                || twilight_launch::is_lwjgl_freetype_artifact(&request.dest.to_string_lossy())
        })
        .map(|request| (request.dest.clone(), request.sha1.is_some()))
        .collect();
    let mut downloads = downloader.download_all(&requests).await?;
    // loader libraries stage into the same shared store and lead the classpath
    if let Some(profile) = &loader_profile {
        let loader_requests = profile.download_requests(&paths.library_root);
        for request in &loader_requests {
            if twilight_launch::is_lwjgl_freetype_artifact(&request.url)
                || twilight_launch::is_lwjgl_freetype_artifact(&request.dest.to_string_lossy())
            {
                freetype_requests.push((request.dest.clone(), request.sha1.is_some()));
            }
        }
        downloads.extend(downloader.download_all(&loader_requests).await?);
    }
    // A refreshed native is the expected outcome of Mojang re-publishing a
    // patched lwjgl-freetype; make the replacement visible in the console.
    let mut freetype_refreshed: Vec<String> = Vec::new();
    for file in &downloads {
        let is_freetype = freetype_requests.iter().any(|(dest, _)| dest == &file.dest);
        if is_freetype && !file.was_skipped {
            freetype_refreshed.push(format!(
                "[SECURITY] refreshed lwjgl-freetype artifact {} (sha1 {}) from the fresh manifest",
                file.dest.display(),
                file.sha1
            ));
        }
    }
    let freetype_verified =
        !freetype_requests.is_empty() && freetype_requests.iter().all(|(_, has_sha1)| *has_sha1);

    // ---- assets: horizon store; virtual indexes additionally export the
    //      classic `assets/virtual/<id>` layout the old game versions want
    if let Some(index_info) = version.effective_asset_index() {
        let index_raw = fetch_json_failover(&client, std::slice::from_ref(&index_info.url)).await?;
        let index_text = index_raw.to_string();
        let index = AssetIndex::parse(index_text.as_bytes())?;
        if !paths.assets_id.is_empty() {
            let index_dir = paths.assets_root.join("indexes");
            tokio::fs::create_dir_all(&index_dir).await?;
            tokio::fs::write(
                index_dir.join(format!("{}.json", paths.assets_id)),
                &index_text,
            )
            .await?;
        }
        let store = AssetStore::new(&paths.assets_root);
        store.ensure_objects(&index, &downloader).await?;
        let needs_export = index.is_virtual == Some(true) || is_virtual_assets_id(&paths.assets_id);
        if needs_export {
            let virtual_root = paths.assets_root.join("virtual").join(&paths.assets_id);
            store.export_to_resources(&index, &virtual_root).await?;
        }
    }
    send_phase(&sink, "assets", phase_started).await;
    phase_started = Instant::now();

    // ---- natives: fresh scratchpad; extraction via 7-Zip or the fallback
    twilight_launch::clean_natives_dir(&paths.natives_dir).await?;
    let mut excludes = BTreeSet::new();
    let mut native_jar_paths: Vec<PathBuf> = native_jars.clone();
    for library in &version.libraries {
        if library.is_active(&ctx, &none) && library.is_native() {
            // a patch-set replacement (Cleanroom's LWJGL 3, Legacy Fabric's
            // patched LWJGL 2) supersedes the vanilla native of that coordinate
            if loader_profile
                .as_ref()
                .is_some_and(|profile| profile.is_replaced(&library.name.to_string()))
            {
                continue;
            }
            excludes.extend(library.extract_excludes.iter().cloned());
        }
    }
    if let Some(profile) = &loader_profile {
        for entry in &profile.native_libraries {
            excludes.extend(entry.library.extract_excludes.iter().cloned());
        }
        native_jar_paths.extend(profile.native_jar_paths(&paths.library_root));
    }
    let exclude_list: Vec<String> = excludes.into_iter().collect();
    twilight_launch::extract_natives(&paths.natives_dir, &native_jar_paths, &exclude_list).await?;
    send_phase(&sink, "natives", phase_started).await;

    // ---- assemble and spawn, streaming game output to the console
    let plan = assemble_command(
        &java,
        &ctx,
        &version,
        &paths,
        &account,
        loader_profile.as_ref(),
        &game_options,
    )?;
    let mut plan = plan;
    let advisories = cfg.advisories.clone();
    plan.jvm_args.extend(cfg.jvm_args);
    plan.jvm_args.extend(gc_flags);
    inject_authlib(&mut plan, &authlib_jar);
    if let Some(sink) = &sink {
        let _ = sink
            .send(LaunchEvent::Command(twilight_launch::command_line(&plan)))
            .await;
    }
    let (tx, mut rx) = mpsc::channel::<LaunchEvent>(512);
    let printer = tokio::spawn(async move {
        while let Some(event) = rx.recv().await {
            match event {
                LaunchEvent::Started(pid) => {
                    if sink.is_none() {
                        println!("Minecraft process ID: {pid}");
                    }
                    if let Some(sink) = &sink {
                        let _ = sink.send(LaunchEvent::Started(pid)).await;
                    }
                }
                LaunchEvent::Stdout(line) => {
                    if sink.is_none() {
                        println!("{line}");
                    }
                    if let Some(sink) = &sink {
                        let _ = sink.send(LaunchEvent::Stdout(line)).await;
                    }
                }
                LaunchEvent::Stderr(line) => {
                    if sink.is_none() {
                        eprintln!("{line}");
                    }
                    if let Some(sink) = &sink {
                        let _ = sink.send(LaunchEvent::Stderr(line)).await;
                    }
                }
                // The raw command was already forwarded to the sink above;
                // phase timings only feed the desktop Developer tab.
                LaunchEvent::Command(_) | LaunchEvent::Phase(_, _) => {}
            }
        }
    });
    // ---- console order: diagnostic header first, then the pre-spawn
    //      advisories, then the pid/output from the spawn pump.
    let advisory = twilight_launch::assess_minecraft2shell(
        &manifest.id,
        &ctx,
        manifest.is_fresh(),
        freetype_verified,
    );
    let mut pre_spawn = advisories;
    pre_spawn.extend(advisory.advisory_lines());
    pre_spawn.extend(freetype_refreshed.iter().cloned());
    // ---- diagnostics header straight through the same pump, so CLI stdout
    //      and the GUI console drawer print the identical block
    let diag = build_diagnostics(
        &account,
        &paths,
        &version,
        &java,
        loader_profile.as_ref(),
        &plan,
        &vanilla_entries,
        &native_jars,
        dns,
        hardware,
    );
    for line in twilight_launch::pre_spawn_lines(&diag, &pre_spawn) {
        let _ = tx.send(LaunchEvent::Stdout(line)).await;
    }
    let status = twilight_launch::run(plan, tx).await?;
    // the pump can only fail by panicking (e.g. a broken console pipe)
    if let Err(join_error) = printer.await {
        eprintln!("twilight: output pump terminated early: {join_error}");
    }
    if status.success() {
        Ok(0)
    } else {
        Err(CliError::GameFailed {
            status: status.to_string(),
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const MODERN: &str = r#"{
        "id": "26.3",
        "type": "release",
        "mainClass": "net.minecraft.client.main.Main",
        "assets": "26.3",
        "compatibleJavaMajors": [21],
        "arguments": {
            "game": [
                "--username", "${auth_player_name}",
                "--assetIndex", "${assets_index_name}",
                "--gameDir", "${game_directory}"
            ],
            "jvm": [
                "-Djava.library.path=${natives_directory}",
                "-cp", "${classpath}"
            ]
        },
        "libraries": [ { "name": "com.google.guava:guava:33.0.0-jre" } ]
    }"#;

    const LEGACY: &str = r#"{
        "id": "1.5.2",
        "mainClass": "yawk.mine.hull",
        "assets": "legacy",
        "minecraftArguments": "--username ${auth_player_name} --gameDir ${game_directory}",
        "libraries": [ { "name": "com.google.guava:guava:33.0.0-jre" } ]
    }"#;

    fn ctx() -> RuntimeContext {
        RuntimeContext::new("linux", "x86_64")
    }

    fn cfg() -> LaunchConfig {
        LaunchConfig {
            version_or_id: "latest".to_owned(),
            username: "Steve".to_owned(),
            instance_dir: None,
            shared_dir: PathBuf::from("S"),
            temp_dir: None,
            java: None,
            loader: None,
            loader_version: None,
            horizon: None,
            horizon_session: None,
            jvm_args: Vec::new(),
            advisories: Vec::new(),
            gc: twilight_launch::GcSettings::default(),
            account: None,
            server: None,
            world: None,
            dry_run: true,
        }
    }

    fn account() -> Account {
        Account::offline("Steve")
    }

    fn java() -> JavaSelection {
        JavaSelection {
            executable: PathBuf::from("/j/bin/java"),
            version: Some(JavaVersion {
                major: 21,
                full: "21.0.2".into(),
            }),
        }
    }

    fn assemble_for(json: &str) -> (LaunchPlan, LaunchPaths) {
        let version = twilight_manifest::parse_version_file(json).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            None,
            &GameOptions::default(),
        )
        .unwrap();
        (plan, paths)
    }

    #[test]
    fn modern_manifest_embeds_classpath_into_jvm_args_only() {
        let (plan, paths) = assemble_for(MODERN);
        let natives = paths.natives_dir.display().to_string();
        assert_eq!(plan.jvm_args[0], format!("-Djava.library.path={natives}"));
        let cp_pos = plan
            .jvm_args
            .iter()
            .position(|a| a == "-cp")
            .expect("manifest owns the classpath switch");
        let normalized = plan.jvm_args[cp_pos + 1].replace('\\', "/");
        assert!(
            normalized
                .contains("S/libraries/com/google/guava/guava/33.0.0-jre/guava-33.0.0-jre.jar"),
            "{normalized}"
        );
        assert!(
            normalized.contains("S/instances/26.3/minecraft/versions/26.3/26.3.jar"),
            "{normalized} must include the client jar"
        );
        assert_eq!(plan.classpath, "", "no duplicated -cp switch");
        assert!(
            plan.game_args
                .windows(2)
                .any(|p| p[0] == "--username" && p[1] == "Steve")
        );
        assert!(
            plan.game_args
                .windows(2)
                .any(|p| p[0] == "--assetIndex" && p[1] == "26.3")
        );
        assert_eq!(plan.main_class, "net.minecraft.client.main.Main");
        assert_eq!(
            plan.work_dir,
            PathBuf::from("S")
                .join("instances")
                .join("26.3")
                .join("minecraft")
        );
    }

    #[test]
    fn legacy_manifest_receives_launcher_owned_classpath() {
        let (plan, paths) = assemble_for(LEGACY);
        // the minecraftArguments era predates `arguments.jvm`: the launcher
        // itself carries the natives scratchpad onto java.library.path
        assert_eq!(
            plan.jvm_args,
            vec![format!(
                "-Djava.library.path={}",
                paths.natives_dir.display()
            )],
            "legacy manifests must still expose natives_directory"
        );
        assert!(!plan.classpath.is_empty());
        assert!(plan.classpath.contains(separator()));
        let normalized = plan.classpath.replace('\\', "/");
        assert!(
            normalized.contains("S/libraries/")
                && normalized.contains("S/instances/1.5.2/minecraft/versions/1.5.2/1.5.2.jar"),
            "{normalized}"
        );
        assert!(
            paths
                .game_assets
                .iter()
                .any(|p| p.ends_with("virtual/legacy")),
            "virtual assets id maps to the classic layout"
        );

        let argv: Vec<String> = twilight_launch::build_command(&plan)
            .as_std()
            .get_args()
            .map(|a| a.to_string_lossy().into_owned())
            .collect();
        // the launcher-owned natives flag leads, then the classpath switch
        assert_eq!(argv[0], plan.jvm_args[0]);
        assert!(argv[0].starts_with("-Djava.library.path="));
        assert_eq!(argv[1], "-cp");
        assert_eq!(argv[2], plan.classpath);
        assert_eq!(argv[3], "yawk.mine.hull");
        assert_eq!(argv[4], "--username");
        assert_eq!(argv[5], "Steve");
        let last = argv.len();
        assert_eq!(argv[last - 2], "--gameDir");
        assert_eq!(argv[last - 1], plan.work_dir.display().to_string());
    }

    #[test]
    fn manifest_without_main_class_is_rejected() {
        let version = twilight_manifest::parse_version_file(r#"{ "id": "x" }"#).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let err = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            None,
            &GameOptions::default(),
        )
        .unwrap_err();
        assert!(
            matches!(err, CliError::NoMainClass { ref id } if id == "x"),
            "{err:?}"
        );
    }

    #[test]
    fn staging_natives_dir_is_per_instance_isolated() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        assert!(paths.natives_dir.ends_with("staging/natives/26.3"));
        assert!(paths.library_root.ends_with("libraries"));
        assert!(paths.assets_root.ends_with("assets"));
    }

    #[test]
    fn quick_play_server_lands_in_the_game_args() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let options = GameOptions {
            quick_play: QuickPlay {
                server_address: Some("mc.example.net".into()),
                server_port: None,
                world: None,
            },
            ..Default::default()
        };
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            None,
            &options,
        )
        .unwrap();
        // without the multiplayer trait the legacy --server/--port form fires
        let at = plan
            .game_args
            .iter()
            .position(|a| a == "--server")
            .expect("quick play target present");
        assert_eq!(plan.game_args[at + 1], "mc.example.net");
        assert_eq!(plan.game_args[at + 2], "--port");
        assert_eq!(plan.game_args[at + 3], "25565");
    }

    #[test]
    fn dry_run_report_lists_context_and_command() {
        let (plan, paths) = assemble_for(MODERN);
        let report = dry_run_report(&plan, &paths, &ctx(), &account(), &java(), None);
        assert!(report.starts_with("twilight --dry-run"), "{report}");
        assert!(
            report.contains("offline uuid 5627dd98-e6be-3c21-b8a8-e92344183641"),
            "{report}"
        );
        assert!(report.contains("/j/bin/java"), "{report}");
        assert!(
            report.contains("net.minecraft.client.main.Main"),
            "{report}"
        );
        assert!(report.contains("linux-x86_64"), "{report}");
    }

    /// Minimal fabric v2 profile exercising the Knot overlay in the plan.
    const FABRIC_PROFILE: &str = r#"{
        "loader": { "version": "0.16.9", "stable": true },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.4" },
        "launcherMeta": {
            "libraries": {
                "common": [
                    { "name": "net.fabricmc:fabric-loader:0.16.9" }
                ],
                "client": [],
                "server": []
            }
        }
    }"#;

    fn fabric_profile() -> LoaderProfile {
        let raw: serde_json::Value = serde_json::from_str(FABRIC_PROFILE).unwrap();
        twilight_modloader::parse_loader_meta(ModLoader::Fabric, &raw).unwrap()
    }

    #[test]
    fn loader_profile_overrides_main_class_and_prepends_libraries() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let profile = fabric_profile();
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            Some(&profile),
            &GameOptions::default(),
        )
        .unwrap();

        assert_eq!(
            plan.main_class, "net.fabricmc.loader.impl.launch.knot.KnotClient",
            "Knot takes over the main class"
        );
        // mapping jar leads, main jar stays last
        let cp_pos = plan
            .jvm_args
            .iter()
            .position(|arg| arg == "-cp")
            .expect("modern manifest owns the classpath switch");
        let normalized = plan.jvm_args[cp_pos + 1].replace('\\', "/");
        let entries: Vec<&str> = normalized.split(separator()).collect();
        assert_eq!(
            entries[0], "S/libraries/net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar",
            "the mapping jar leads the classpath: {normalized}"
        );
        assert_eq!(
            entries.last().copied(),
            Some("S/instances/26.3/minecraft/versions/26.3/26.3.jar"),
            "the client jar stays last: {normalized}"
        );
    }

    #[test]
    fn dry_run_report_shows_the_loader_line() {
        let (plan, paths) = assemble_for(MODERN);
        let report = dry_run_report(
            &plan,
            &paths,
            &ctx(),
            &account(),
            &java(),
            Some(&fabric_profile()),
        );
        assert!(
            report.contains(
                "loader: fabric 0.16.9 (net.fabricmc.loader.impl.launch.knot.KnotClient with 2 loader libraries)"
            ),
            "{report}"
        );
    }

    /// Meta v1 Forge 1.20.1 profile: wrapper class, `minecraftArguments` and an
    /// installer staged off the classpath.
    const FORGE_PROFILE: &str = r#"{
        "uid": "net.minecraftforge",
        "version": "47.4.29",
        "mainClass": "io.github.zekerzhayard.forgewrapper.installer.Main",
        "minecraftArguments": "--username ${auth_player_name} --gameDir ${game_directory} --launchTarget forgeclient --fml.forgeVersion 47.4.29 --fml.mcVersion 1.20.1",
        "+jvmArgs": ["-Dtwilight.test=${version_name}"],
        "libraries": [
            { "name": "io.github.zekerzhayard:ForgeWrapper:prism-2026-08-01",
              "downloads": { "artifact": {
                  "sha1": "852b7e59748da1512d40e38407eadb1f0031a996",
                  "url": "https://files.prismlauncher.org/maven/io/github/zekerzhayard/ForgeWrapper/prism-2026-08-01/ForgeWrapper-prism-2026-08-01.jar" } } },
            { "name": "cpw.mods:securejarhandler:2.1.10",
              "downloads": { "artifact": {
                  "path": "cpw/mods/securejarhandler/2.1.10/securejarhandler-2.1.10.jar",
                  "sha1": "51e6a22c6c716beb11e244bf5b8be480f51dd6b5",
                  "url": "https://maven.minecraftforge.net/cpw/mods/securejarhandler/2.1.10/securejarhandler-2.1.10.jar" } } }
        ],
        "mavenFiles": [
            { "name": "net.minecraftforge:forge:1.20.1-47.4.29:installer",
              "downloads": { "artifact": {
                  "sha1": "5061de68499474cc8eeeede3d794afb063dd3e6d",
                  "url": "https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-47.4.29/forge-1.20.1-47.4.29-installer.jar" } } }
        ]
    }"#;

    fn forge_profile() -> LoaderProfile {
        let raw: serde_json::Value = serde_json::from_str(FORGE_PROFILE).unwrap();
        twilight_modloader::parse_loader_meta(ModLoader::Forge, &raw).unwrap()
    }

    #[test]
    fn forge_profile_drives_the_wrapper_launch() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let profile = forge_profile();
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            Some(&profile),
            &GameOptions::default(),
        )
        .unwrap();

        assert_eq!(plan.main_class, twilight_modloader::FORGE_WRAPPER_MAIN);
        // `+jvmArgs` lead the jvm list, tokens substituted, manifest list after
        assert_eq!(
            plan.jvm_args[0], "-Dtwilight.test=26.3",
            "{:?}",
            plan.jvm_args
        );
        assert!(
            plan.jvm_args
                .iter()
                .any(|arg| arg == &format!("-Djava.library.path={}", paths.natives_dir.display())),
            "{:?}",
            plan.jvm_args
        );

        // the profile's own argument template replaces the manifest's game args
        assert!(
            plan.game_args
                .windows(2)
                .any(|p| p[0] == "--launchTarget" && p[1] == "forgeclient"),
            "{:?}",
            plan.game_args
        );
        assert!(
            plan.game_args
                .windows(2)
                .any(|p| p[0] == "--fml.forgeVersion" && p[1] == "47.4.29"),
            "{:?}",
            plan.game_args
        );
        assert!(
            !plan.game_args.iter().any(|arg| arg == "--assetIndex"),
            "the profile template, not the manifest list, wins: {:?}",
            plan.game_args
        );

        // wrapper + support jar lead the classpath, main jar stays last
        let cp_pos = plan.jvm_args.iter().position(|a| a == "-cp").unwrap();
        let normalized = plan.jvm_args[cp_pos + 1].replace('\\', "/");
        let entries: Vec<&str> = normalized.split(separator()).collect();
        assert_eq!(
            entries[0],
            "S/libraries/io/github/zekerzhayard/ForgeWrapper/prism-2026-08-01/ForgeWrapper-prism-2026-08-01.jar"
        );
        assert_eq!(
            entries[1],
            "S/libraries/cpw/mods/securejarhandler/2.1.10/securejarhandler-2.1.10.jar"
        );
        assert_eq!(
            entries.last().copied(),
            Some("S/instances/26.3/minecraft/versions/26.3/26.3.jar")
        );
        assert!(
            !normalized.contains("forge-1.20.1-47.4.29-installer.jar"),
            "mavenFiles stay off the classpath: {normalized}"
        );
    }

    #[test]
    fn legacy_forge_tweakers_become_tweakclass_pairs() {
        let version = twilight_manifest::parse_version_file(LEGACY).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let raw = serde_json::json!({
            "uid": "net.minecraftforge",
            "version": "14.23.5.2864",
            "mainClass": "net.minecraft.launchwrapper.Launch",
            "+tweakers": ["net.minecraftforge.fml.common.launcher.FMLTweaker"],
            "+traits": ["legacyLaunch"],
            "libraries": []
        });
        let profile = twilight_modloader::parse_loader_meta(ModLoader::Forge, &raw).unwrap();
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            Some(&profile),
            &GameOptions::default(),
        )
        .unwrap();

        assert_eq!(plan.main_class, "net.minecraft.launchwrapper.Launch");
        let at = plan
            .game_args
            .iter()
            .position(|arg| arg == "--tweakClass")
            .expect("tweakers emit --tweakClass pairs");
        assert_eq!(
            plan.game_args[at + 1],
            "net.minecraftforge.fml.common.launcher.FMLTweaker"
        );
        // legacy manifests keep their own argument string
        assert!(
            plan.game_args
                .windows(2)
                .any(|p| p[0] == "--username" && p[1] == "Steve"),
            "{:?}",
            plan.game_args
        );
    }

    #[test]
    fn dry_run_report_shows_the_forge_loader_line() {
        let (_, paths) = assemble_for(MODERN);
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let profile = forge_profile();
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            Some(&profile),
            &GameOptions::default(),
        )
        .unwrap();
        let report = dry_run_report(&plan, &paths, &ctx(), &account(), &java(), Some(&profile));
        assert!(
            report.contains(
                "loader: forge 47.4.29 (io.github.zekerzhayard.forgewrapper.installer.Main with 2 loader libraries)"
            ),
            "{report}"
        );
        assert!(report.contains("--launchTarget"), "{report}");
    }

    /// 1.12.2 manifest carrying LWJGL 2, the shape Cleanroom's patch upgrades.
    const LWJGL2_MANIFEST: &str = r#"{
        "id": "1.12.2",
        "type": "release",
        "mainClass": "net.minecraft.client.main.Main",
        "assets": "1.12",
        "compatibleJavaMajors": [8],
        "arguments": { "jvm": ["-cp", "${classpath}"], "game": [] },
        "libraries": [
            { "name": "org.lwjgl.lwjgl:lwjgl:2.9.4-nightly-20150209" },
            { "name": "org.lwjgl.lwjgl:lwjgl_util:2.9.4-nightly-20150209" },
            { "name": "com.google.guava:guava:17.0" }
        ]
    }"#;

    #[test]
    fn cleanroom_drops_vanilla_lwjgl2_from_the_classpath() {
        let version = twilight_manifest::parse_version_file(LWJGL2_MANIFEST).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let raw = serde_json::json!({
            "uid": "net.minecraftforge",
            "version": "0.7.14-alpha",
            "mainClass": "top.outlands.foundation.boot.Foundation",
            "compatibleJavaMajors": [25],
            "+tweakers": ["net.minecraftforge.fml.common.launcher.FMLTweaker"],
            "libraries": [
                { "name": "org.lwjgl:lwjgl:3.4.3", "downloads": { "artifact": {
                    "url": "https://repo.maven.apache.org/maven2/org/lwjgl/lwjgl/3.4.3/lwjgl-3.4.3.jar"
                } } }
            ]
        });
        let profile = twilight_modloader::parse_loader_meta(ModLoader::Cleanroom, &raw).unwrap();

        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            Some(&profile),
            &GameOptions::default(),
        )
        .unwrap();

        let cp_pos = plan
            .jvm_args
            .iter()
            .position(|arg| arg == "-cp")
            .expect("test manifest owns the classpath switch");
        let normalized = plan.jvm_args[cp_pos + 1].replace('\\', "/");
        assert!(
            normalized.contains("org/lwjgl/lwjgl/3.4.3/lwjgl-3.4.3.jar"),
            "LWJGL 3 leads the classpath: {normalized}"
        );
        for legacy in ["lwjgl-2.9.4-nightly-20150209.jar", "lwjgl_util-2.9.4"] {
            assert!(
                !normalized.contains(legacy),
                "vanilla LWJGL 2 ({legacy}) must be retired: {normalized}"
            );
        }
        assert!(
            normalized.contains("com/google/guava/guava/17.0"),
            "unrelated vanilla libraries survive: {normalized}"
        );

        // Java 21/25 replaces the manifest's Java 8 requirement
        let majors = profile.required_java_majors(&version.compatible_java_majors);
        assert_eq!(majors, &[25]);

        // the tweaker still reaches the command line
        let at = plan
            .game_args
            .iter()
            .position(|arg| arg == "--tweakClass")
            .expect("Cleanroom boots through FMLTweaker");
        assert_eq!(
            plan.game_args[at + 1],
            "net.minecraftforge.fml.common.launcher.FMLTweaker"
        );
    }

    #[test]
    fn diagnostic_header_names_the_forge_component() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let profile = forge_profile();
        let plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            Some(&profile),
            &GameOptions::default(),
        )
        .unwrap();
        let hardware = twilight_launch::Hardware {
            os: "Test OS".into(),
            cpu: "Test CPU".into(),
            ram_total_mib: 1024,
            ram_available_mib: 512,
            arch: "64-bit",
            gpu: "Unknown".into(),
        };
        let diag = build_diagnostics(
            &account(),
            &paths,
            &version,
            &java(),
            Some(&profile),
            &plan,
            &[],
            &[],
            Vec::new(),
            hardware,
        );
        let text = twilight_launch::render(&diag).replace('\\', "/");
        assert!(
            text.contains("1) Forge Loader (net.minecraftforge) 47.4.29"),
            "{text}"
        );
        assert!(text.contains("2) Minecraft (net.minecraft) 26.3"), "{text}");
        assert!(text.contains("--launchTarget"), "{text}");
    }

    #[test]
    fn diagnostic_header_lists_components_libraries_and_paths() {
        let (plan, paths) = assemble_for(MODERN);
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let dns = vec![(
            "api.mojang.com".to_owned(),
            "skipped/unreachable".to_owned(),
        )];
        let hardware = twilight_launch::Hardware {
            os: "Test OS".into(),
            cpu: "Test CPU".into(),
            ram_total_mib: 1024,
            ram_available_mib: 512,
            arch: "64-bit",
            gpu: "Unknown".into(),
        };
        let diag = build_diagnostics(
            &account(),
            &paths,
            &version,
            &java(),
            None,
            &plan,
            &[PathBuf::from("S/libraries/vanilla.jar")],
            &[PathBuf::from("S/libraries/native.jar")],
            dns,
            hardware,
        );
        let text = twilight_launch::render(&diag).replace('\\', "/");
        assert!(
            text.starts_with("TwilightMC Bolide version: alpha-v"),
            "{text}"
        );
        assert!(text.contains("Launched instance in offline mode"), "{text}");
        assert!(
            text.contains("Components:\n  1) Minecraft (net.minecraft) 26.3"),
            "{text}"
        );
        // classpath order: vanilla entries first, the client jar last
        assert!(text.contains("  S/libraries/vanilla.jar"), "{text}");
        assert!(
            text.contains("S/instances/26.3/minecraft/versions/26.3/26.3.jar"),
            "{text}"
        );
        assert!(
            text.contains("Native libraries:\n  S/libraries/native.jar"),
            "{text}"
        );
        assert!(
            text.contains("RAM: 1024 MiB (available: 512 MiB)"),
            "{text}"
        );
        // the pid line is appended by the spawn pump, not the header
        assert!(!text.contains("Minecraft process ID"), "{text}");
    }

    #[test]
    fn parse_loader_token_is_case_insensitive_and_loud() {
        assert_eq!(
            parse_loader_token(Some("Quilt")).unwrap(),
            Some(ModLoader::Quilt)
        );
        assert_eq!(
            parse_loader_token(Some(" FABRIC ")).unwrap(),
            Some(ModLoader::Fabric)
        );
        assert_eq!(
            parse_loader_token(Some("Forge")).unwrap(),
            Some(ModLoader::Forge)
        );
        assert_eq!(
            parse_loader_token(Some(" neoforge ")).unwrap(),
            Some(ModLoader::NeoForge)
        );
        assert_eq!(parse_loader_token(None).unwrap(), None);
        let err = parse_loader_token(Some("liteloader")).unwrap_err();
        assert!(
            matches!(err, CliError::UnknownLoader { ref given } if given == "liteloader"),
            "{err:?}"
        );
    }

    #[test]
    fn legacy_and_cleanroom_tokens_resolve() {
        assert_eq!(
            parse_loader_token(Some("Legacy Fabric")).unwrap(),
            Some(ModLoader::LegacyFabric)
        );
        assert_eq!(
            parse_loader_token(Some("cleanroom")).unwrap(),
            Some(ModLoader::Cleanroom)
        );
    }

    #[test]
    fn cleanroom_pins_the_game_version_and_modern_java() {
        // the loader declares 1.12.2 + Java 21/25; the CLI guard compares
        // these against the resolved manifest before composing a launch
        let cleanroom = ModLoader::Cleanroom;
        assert_eq!(cleanroom.fixed_game_version(), Some("1.12.2"));
        let majors = cleanroom
            .required_java_majors()
            .expect("cleanroom overrides the manifest java");
        assert!(!majors.contains(&8), "never selects Java 8: {majors:?}");
        assert!(majors.iter().all(|major| *major >= 21));
    }

    #[test]
    fn explicit_instance_dir_renames_the_staging_label() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let mut custom = cfg();
        custom.instance_dir = Some(PathBuf::from("I").join("my-world"));
        let paths = resolve_paths(&custom, &version);
        assert!(paths.natives_dir.ends_with("staging/natives/my-world"));
        assert_eq!(
            paths.work_dir,
            PathBuf::from("I").join("my-world").join("minecraft")
        );
    }

    fn selection(major: Option<i32>) -> JavaSelection {
        JavaSelection {
            executable: PathBuf::from("/jvm/bin/java"),
            version: major.map(|major| JavaVersion {
                major,
                full: format!("{major}.0.0"),
            }),
        }
    }

    #[test]
    fn resolved_java_majors_are_forwarded_to_gc_resolution() {
        for major in [8, 17, 21, 25] {
            let java = selection(Some(major));
            assert_eq!(java_major_for_gc(&java), major);
            assert_ne!(
                java_major_for_gc(&java),
                0,
                "valid Java {major} must never reach the GC resolver as unknown"
            );
        }
    }

    #[test]
    fn failed_java_probe_uses_the_safe_unknown_fallback() {
        let java = selection(None);
        assert_eq!(java_major_for_gc(&java), 0);

        let (flags, notice) = twilight_launch::resolve_gc_flags(
            twilight_launch::GcPreset::GenerationalZgc,
            java_major_for_gc(&java),
            8192,
            &[],
            "",
        );
        assert!(flags.iter().any(|flag| flag == "-XX:+UseG1GC"));
        let notice = notice.expect("unknown Java must explain the fallback");
        assert!(!notice.contains("Java 0"), "{notice}");
        assert!(notice.to_ascii_lowercase().contains("unknown"), "{notice}");
    }

    #[test]
    fn extra_jvm_args_reach_the_modern_command_line() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let config = cfg();
        let paths = resolve_paths(&config, &version);
        let mut plan = assemble_command(
            &java(),
            &ctx(),
            &version,
            &paths,
            &account(),
            None,
            &GameOptions::default(),
        )
        .unwrap();
        // The Settings "Extra JVM arguments" field is forwarded through
        // GcSettings.extra_args; Default must not drop it.
        let (gc_flags, _) = twilight_launch::resolve_gc_flags(
            twilight_launch::GcPreset::Default,
            21,
            8192,
            &[],
            "-XX:+test",
        );
        plan.jvm_args.extend(config.jvm_args);
        plan.jvm_args.extend(gc_flags);
        let argv: Vec<String> = twilight_launch::build_command(&plan)
            .as_std()
            .get_args()
            .map(|arg| arg.to_string_lossy().into_owned())
            .collect();
        assert!(
            argv.iter().any(|arg| arg == "-XX:+test"),
            "custom JVM arg missing from spawned command: {argv:?}"
        );
    }
}
