//! End-to-end launch pipeline: metadata failover, artifact pre-flight,
//! natives extraction, argument assembly and the final game spawn.
//!
//! The *pure* core is [`assemble_command`] — network-free and covered by unit
//! tests; everything with side effects hangs off [`run_launch`].

use std::collections::{BTreeSet, HashMap};
use std::path::{Path, PathBuf};

use tokio::sync::mpsc;

use twilight_auth::Account;
use twilight_downloader::{
    AssetIndex, DownloadRequest, FREESM_META_BASE, PRISM_META_BASE, ParallelDownloader,
    fetch_json_failover, resolve_vanilla_version, vanilla_sources,
};
use twilight_horizon::AssetStore;
use twilight_launch::{
    GameOptions, LaunchEvent, LaunchPlan, ProfileVars, active_paths, classpath_string,
    game_arguments, inject_account_vars, jvm_arguments, separator,
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
/// loader libraries to the classpath.
pub fn assemble_command(
    java: &JavaSelection,
    ctx: &RuntimeContext,
    version: &VersionFile,
    paths: &LaunchPaths,
    account: &Account,
    loader: Option<&LoaderProfile>,
) -> Result<LaunchPlan, CliError> {
    let none = BTreeSet::<String>::new();
    let (vanilla_entries, _native_jars) =
        active_paths(&version.libraries, ctx, &paths.library_root, &none);
    // loader jars come first so the Knot launcher wins class resolution
    let mut classpath_entries: Vec<PathBuf> = match loader {
        Some(profile) => profile
            .libraries
            .iter()
            .map(|lib| paths.library_root.join(&lib.storage))
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

    let jvm_args = jvm_arguments(version, ctx, &none, &vars, None);
    let manifest_supplies_classpath = jvm_args
        .iter()
        .any(|arg| arg == "-cp" || arg == "-classpath");
    let game_args = game_arguments(version, ctx, &none, &none, &vars, &GameOptions::default());

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

/// Runs the `launch` subcommand: metadata failover, JVM selection, artifact
/// downloads, horizon assets, natives extraction, spawn. `--dry-run` stops
/// after the (network-read-only) plan assembly, prints and exits 0.
pub async fn run_launch(args: LaunchArgs) -> Result<i32, CliError> {
    let cfg = args.to_config()?;
    let account = Account::offline(cfg.username.clone());
    let client = reqwest::Client::new();

    // ---- metadata first: required majors and paths depend on the manifest
    let sources = vanilla_sources();
    let meta = resolve_vanilla_version(&client, &sources, &cfg.version_or_id).await?;
    let mut detail_chain = vec![meta.details_url.clone()];
    for base in [PRISM_META_BASE, FREESM_META_BASE] {
        let fallback = format!("{base}net.minecraft/{}.json", meta.id);
        if !detail_chain.contains(&fallback) {
            detail_chain.push(fallback);
        }
    }
    let raw = fetch_json_failover(&client, &detail_chain).await?;
    let version_text = raw.to_string();
    let version = twilight_manifest::parse_version_file(&version_text).map_err(|e| {
        CliError::ManifestParse {
            id: meta.id.clone(),
            source: e,
        }
    })?;
    let ctx = RuntimeContext::host();
    let paths = resolve_paths(&cfg, &version);
    let java = resolve_java(cfg.java.clone(), &version.compatible_java_majors).await?;

    // ---- loader overlay: resolve Knot launch data for `--loader`
    let loader_token = parse_loader_token(cfg.loader.as_deref())?;
    let loader_profile: Option<LoaderProfile> = match loader_token {
        Some(loader) => Some(
            resolve_loader_profile(&client, loader, &meta.id, cfg.loader_version.as_deref())
                .await?,
        ),
        None => None,
    };

    if cfg.dry_run {
        let plan = assemble_command(
            &java,
            &ctx,
            &version,
            &paths,
            &account,
            loader_profile.as_ref(),
        )?;
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

    // ---- fresh staging: purge hook before every real launch
    let staging = ArtifactStaging::new(cfg.temp_dir.clone());
    staging.clean().await?;
    staging.ensure_dirs().await?;

    // ---- libraries + client jar (parallel, sha1-verified)
    let downloader = ParallelDownloader::new(client.clone(), 8);
    let none = BTreeSet::<String>::new();
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
        for resolved in library.resolve_downloads(&ctx) {
            requests.push(DownloadRequest {
                url: resolved.url,
                dest: paths.library_root.join(&resolved.storage),
                sha1: resolved.sha1,
            });
        }
    }
    downloader.download_all(&requests).await?;
    // loader libraries stage into the same shared store and lead the classpath
    if let Some(profile) = &loader_profile {
        downloader
            .download_all(&profile.download_requests(&paths.library_root))
            .await?;
    }

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
        store.install(&paths.assets_id, &index, &downloader).await?;
        let needs_export = index.is_virtual == Some(true) || is_virtual_assets_id(&paths.assets_id);
        if needs_export {
            let virtual_root = paths.assets_root.join("virtual").join(&paths.assets_id);
            store.export_to_resources(&index, &virtual_root).await?;
        }
    }

    // ---- natives: fresh scratchpad; extraction via 7-Zip or the fallback
    twilight_launch::clean_natives_dir(&paths.natives_dir).await?;
    let (_classpath, native_jars) =
        active_paths(&version.libraries, &ctx, &paths.library_root, &none);
    let mut excludes = BTreeSet::new();
    for library in &version.libraries {
        if library.is_active(&ctx, &none) && library.is_native() {
            excludes.extend(library.extract_excludes.iter().cloned());
        }
    }
    let exclude_list: Vec<String> = excludes.into_iter().collect();
    twilight_launch::extract_natives(&paths.natives_dir, &native_jars, &exclude_list).await?;

    // ---- assemble and spawn, streaming game output to the console
    let plan = assemble_command(
        &java,
        &ctx,
        &version,
        &paths,
        &account,
        loader_profile.as_ref(),
    )?;
    let (tx, mut rx) = mpsc::channel::<LaunchEvent>(512);
    let printer = tokio::spawn(async move {
        while let Some(event) = rx.recv().await {
            match event {
                LaunchEvent::Stdout(line) => println!("{line}"),
                LaunchEvent::Stderr(line) => eprintln!("{line}"),
            }
        }
    });
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
        let plan = assemble_command(&java(), &ctx(), &version, &paths, &account(), None).unwrap();
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
        assert!(
            plan.jvm_args.is_empty(),
            "legacy manifests carry no jvm list"
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
        assert_eq!(argv[0], "-cp");
        assert_eq!(argv[1], plan.classpath);
        assert_eq!(argv[2], "yawk.mine.hull");
        assert_eq!(argv[3], "--username");
        assert_eq!(argv[4], "Steve");
        let last = argv.len();
        assert_eq!(argv[last - 2], "--gameDir");
        assert_eq!(argv[last - 1], plan.work_dir.display().to_string());
    }

    #[test]
    fn manifest_without_main_class_is_rejected() {
        let version = twilight_manifest::parse_version_file(r#"{ "id": "x" }"#).unwrap();
        let paths = resolve_paths(&cfg(), &version);
        let err =
            assemble_command(&java(), &ctx(), &version, &paths, &account(), None).unwrap_err();
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
        assert_eq!(parse_loader_token(None).unwrap(), None);
        let err = parse_loader_token(Some("forge")).unwrap_err();
        assert!(
            matches!(err, CliError::UnknownLoader { ref given } if given == "forge"),
            "{err:?}"
        );
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
}
