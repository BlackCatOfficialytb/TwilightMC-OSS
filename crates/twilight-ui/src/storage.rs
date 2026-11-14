// IPC bridge for storage path configuration: the shared artifact library and
// the staging area (`%TEMP%\twilightmc_staging`), mirroring the CLI layout.
// Also hosts the vendor-launcher discovery engine: existing Prism and
// FreesmLauncher stores are adopted in place, so foreign instances and
// their shared libraries keep working without any copying.

use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::{AppHandle, Manager};
use twilight_cli::ArtifactStaging;

use crate::accounts::{load_settings, save_settings, settings_path};
use crate::instance::resolved_instances_root;

/// Storage paths shown in the Settings page.
#[derive(Debug, Clone, Serialize)]
pub struct StoragePaths {
    /// Shared artifact store root used by launches.
    pub shared_dir: String,
    /// True while `shared_dir` is a default (vendor store or app data), not
    /// user-configured.
    pub is_default_shared: bool,
    /// Instances root shown to the grid (override, vendor store, or ours).
    pub instances_dir: String,
    /// True while no explicit instances override is configured.
    pub is_default_instances: bool,
    /// Transient staging root (`%TEMP%\twilightmc_staging` by default).
    pub staging_root: String,
    /// Base app data dir every default folder roots under —
    /// `%APPDATA%\io.github.blackcatofficialytb.twilightmc` on Windows,
    /// `~/.local/share/…` on Linux, `~/Library/Application Support/…` on
    /// macOS.
    pub app_data: String,
    /// Version metadata & jars folder.
    pub versions_dir: String,
    pub is_default_versions: bool,
    /// Central mods folder / cache.
    pub mods_dir: String,
    pub is_default_mods: bool,
    /// Custom instance icons.
    pub icons_dir: String,
    pub is_default_icons: bool,
    /// Auto-downloaded Java runtimes.
    pub java_dir: String,
    pub is_default_java: bool,
    /// Local skins & cape store.
    pub skins_dir: String,
    pub is_default_skins: bool,
    /// Downloads folder override (staging/temp root); empty = the OS temp.
    pub downloads_dir: String,
    /// True while staging uses the OS temp default.
    pub is_default_staging: bool,
}

// ---- vendor launchers -------------------------------------------------------

/// Vendor launchers whose stores TwilightMC recognizes in place.
#[derive(Debug, Clone, Copy)]
pub(crate) enum Vendor {
    Prism,
    Freesm,
}

impl Vendor {
    /// Directory name under the OS data root (e.g. `%APPDATA%\PrismLauncher`).
    fn dir_name(self) -> &'static str {
        match self {
            Vendor::Prism => "PrismLauncher",
            Vendor::Freesm => "FreesmLauncher",
        }
    }
}

/// Scan order: Prism first as the established default, then Freesm.
const VENDORS: [Vendor; 2] = [Vendor::Prism, Vendor::Freesm];

/// OS data roots that host vendor launcher stores, in discovery order.
/// Pure core of `vendor_data_roots` so each OS layout is unit-testable.
fn data_roots_from(
    appdata: Option<&str>,
    home: Option<&str>,
    xdg_data_home: Option<&str>,
) -> Vec<PathBuf> {
    let home = home.map(PathBuf::from);
    #[cfg(windows)]
    {
        let _ = (&home, &xdg_data_home);
        appdata.map(PathBuf::from).into_iter().collect()
    }
    #[cfg(target_os = "macos")]
    {
        let _ = (appdata, &xdg_data_home);
        home.map(|h| h.join("Library/Application Support"))
            .into_iter()
            .collect()
    }
    #[cfg(all(unix, not(target_os = "macos")))]
    {
        // `%APPDATA%` is meaningless on unix, but the parameter must stay
        // part of the portable signature.
        let _ = appdata;
        let primary = xdg_data_home
            .map(str::trim)
            .filter(|d| !d.is_empty())
            .map(PathBuf::from)
            .or_else(|| home.as_ref().map(|h| h.join(".local/share")));
        let flatpak = home.as_ref().map(|h| h.join(".var/app"));
        primary.into_iter().chain(flatpak).collect()
    }
}

/// Live wrapper around `data_roots_from`, reading the process environment.
fn vendor_data_roots() -> Vec<PathBuf> {
    data_roots_from(
        std::env::var("APPDATA").ok().as_deref(),
        std::env::var("HOME")
            .ok()
            .or_else(|| std::env::var("USERPROFILE").ok())
            .as_deref(),
        std::env::var("XDG_DATA_HOME").ok().as_deref(),
    )
}

/// Candidate vendor store dirs directly under one data root (Prism first).
fn vendor_dirs_under(base: &Path) -> Vec<PathBuf> {
    VENDORS.iter().map(|v| base.join(v.dir_name())).collect()
}

/// Flatpak sandboxes keep per-app data under `~/.var/app/<app-id>/data`;
/// every existing vendor store in that tree is returned (Prism first).
fn flatpak_vendor_dirs(flatpak_root: &Path) -> Vec<PathBuf> {
    let mut out = Vec::new();
    let Ok(entries) = std::fs::read_dir(flatpak_root) else {
        return out;
    };
    for entry in entries.flatten() {
        for dir in vendor_dirs_under(&entry.path().join("data")) {
            if dir.is_dir() {
                out.push(dir);
            }
        }
    }
    out
}

/// Every existing vendor store dir on this machine, Prism before Freesm.
pub(crate) fn discovered_vendor_dirs() -> Vec<PathBuf> {
    let mut out = Vec::new();
    for base in vendor_data_roots() {
        for dir in vendor_dirs_under(&base) {
            if dir.is_dir() && !out.contains(&dir) {
                out.push(dir);
            }
        }
        if base.ends_with(".var/app") {
            for dir in flatpak_vendor_dirs(&base) {
                if !out.contains(&dir) {
                    out.push(dir);
                }
            }
        }
    }
    out
}

/// First path in `paths` that exists as a directory.
pub(crate) fn first_existing_dir(paths: impl Iterator<Item = PathBuf>) -> Option<PathBuf> {
    paths.into_iter().find(|p| p.is_dir())
}

/// The first vendor dir that is a complete store — carrying *both*
/// `instances` and `libraries` — so adopting it keeps the pair together.
fn vendor_store_in(dirs: &[PathBuf]) -> Option<PathBuf> {
    dirs.iter()
        .find(|dir| dir.join("instances").is_dir() && dir.join("libraries").is_dir())
        .cloned()
}

// ---- roots ------------------------------------------------------------------

/// Resolves one Folders-page entry: the user override when set, else the
/// default `<app_data>/<name>` subdirectory. Returns `(path, is_default)`.
fn folder(app_data: &Path, configured: Option<&str>, name: &str) -> (PathBuf, bool) {
    match configured.map(str::trim).filter(|d| !d.is_empty()) {
        Some(dir) => (PathBuf::from(dir), false),
        None => (app_data.join(name), true),
    }
}

/// Effective staging root: `<downloads>\twilightmc_staging` when a downloads
/// folder is configured, else `%TEMP%\twilightmc_staging`.
pub(crate) fn staging_root_for(downloads_dir: Option<&str>) -> PathBuf {
    ArtifactStaging::new(
        downloads_dir
            .map(str::trim)
            .filter(|d| !d.is_empty())
            .map(PathBuf::from),
    )
    .root()
    .to_path_buf()
}

/// Shared library root for launches: the user-configured dir when set, else
/// a complete vendor store — adopted in place only while the instances root
/// is not pinned elsewhere, so libraries and instances stay together — else
/// `app_data_dir/shared`.
pub(crate) async fn shared_root(app: &AppHandle) -> Result<PathBuf, String> {
    let settings = load_settings(&settings_path(app).await?).await;
    if let Some(dir) = settings
        .shared_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
    {
        return Ok(PathBuf::from(dir));
    }
    if settings
        .instances_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
        .is_none()
        && let Some(store) = vendor_store_in(&discovered_vendor_dirs())
    {
        return Ok(store);
    }
    Ok(app
        .path()
        .app_data_dir()
        .map_err(|e| e.to_string())?
        .join("shared"))
}

/// Storage paths for the Settings page. Every root goes through the same
/// resolution the scanners and the launcher use, so what is shown is what
/// runs. Default subfolders under the app data dir are created lazily here;
/// user overrides are never auto-created.
#[tauri::command]
pub async fn get_storage(app: AppHandle) -> Result<StoragePaths, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let configured = |value: &Option<String>| {
        value
            .as_deref()
            .map(str::trim)
            .filter(|d| !d.is_empty())
            .is_some()
    };
    let app_data = app.path().app_data_dir().map_err(|e| e.to_string())?;

    let shared = shared_root(&app).await?;
    let instances = resolved_instances_root(&app).await?;
    let (versions, versions_default) =
        folder(&app_data, settings.versions_dir.as_deref(), "versions");
    let (mods, mods_default) = folder(&app_data, settings.mods_dir.as_deref(), "mods");
    let (icons, icons_default) = folder(&app_data, settings.icons_dir.as_deref(), "icons");
    let (java, java_default) = folder(&app_data, settings.java_dir.as_deref(), "java");
    let (skins, skins_default) = folder(&app_data, settings.skins_dir.as_deref(), "skins");
    let downloads_configured = configured(&settings.downloads_dir);

    // lazy creation: only the app-data defaults materialize on demand; a
    // configured override (e.g. an existing Prism `D:\instances`) is never
    // touched, so foreign stores stay exactly as they are
    if versions_default {
        let _ = tokio::fs::create_dir_all(&versions).await;
    }
    if mods_default {
        let _ = tokio::fs::create_dir_all(&mods).await;
    }
    if icons_default {
        let _ = tokio::fs::create_dir_all(&icons).await;
    }
    if java_default {
        let _ = tokio::fs::create_dir_all(&java).await;
    }
    if skins_default {
        let _ = tokio::fs::create_dir_all(&skins).await;
    }
    let _ = tokio::fs::create_dir_all(&app_data).await;

    Ok(StoragePaths {
        shared_dir: shared.display().to_string(),
        is_default_shared: !configured(&settings.shared_dir),
        instances_dir: instances.display().to_string(),
        is_default_instances: !configured(&settings.instances_dir),
        staging_root: staging_root_for(settings.downloads_dir.as_deref())
            .display()
            .to_string(),
        app_data: app_data.display().to_string(),
        versions_dir: versions.display().to_string(),
        is_default_versions: versions_default,
        mods_dir: mods.display().to_string(),
        is_default_mods: mods_default,
        icons_dir: icons.display().to_string(),
        is_default_icons: icons_default,
        java_dir: java.display().to_string(),
        is_default_java: java_default,
        skins_dir: skins.display().to_string(),
        is_default_skins: skins_default,
        downloads_dir: settings
            .downloads_dir
            .clone()
            .map(|d| d.trim().to_owned())
            .filter(|d| !d.is_empty())
            .unwrap_or_default(),
        is_default_staging: !downloads_configured,
    })
}

/// Persists one Folders-page directory. `kind` is one of `shared`,
/// `instances`, `versions`, `mods`, `icons`, `java`, `skins`, `downloads`;
/// `None`/empty resets that folder to its default.
#[tauri::command]
pub async fn set_folder_dir(
    app: AppHandle,
    kind: String,
    path: Option<String>,
) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    let value = path.map(|p| p.trim().to_owned()).filter(|p| !p.is_empty());
    match kind.as_str() {
        "shared" => settings.shared_dir = value,
        "instances" => settings.instances_dir = value,
        "versions" => settings.versions_dir = value,
        "mods" => settings.mods_dir = value,
        "icons" => settings.icons_dir = value,
        "java" => settings.java_dir = value,
        "skins" => settings.skins_dir = value,
        "downloads" => settings.downloads_dir = value,
        _ => return Err(format!("unknown folder {kind}")),
    }
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Purges the staging area (`%TEMP%\twilightmc_staging`, or
/// `<downloads>\twilightmc_staging` when a downloads folder is configured);
/// idempotent.
#[tauri::command]
pub async fn clean_staging(app: AppHandle) -> Result<(), String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    ArtifactStaging::new(
        settings
            .downloads_dir
            .as_deref()
            .map(str::trim)
            .filter(|d| !d.is_empty())
            .map(PathBuf::from),
    )
    .clean()
    .await
    .map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn temp_root(tag: &str) -> PathBuf {
        let root = std::env::temp_dir().join(format!(
            "twi-store-test-{tag}-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        std::fs::create_dir_all(&root).unwrap();
        root
    }

    #[test]
    fn vendor_candidates_come_in_prism_first_order() {
        let dirs = vendor_dirs_under(Path::new("/data"));
        assert_eq!(dirs.len(), 2);
        assert!(dirs[0].ends_with("PrismLauncher"));
        assert!(dirs[1].ends_with("FreesmLauncher"));
    }

    #[test]
    fn folders_resolve_override_first_else_app_data() {
        let base = Path::new("/base");
        // configured override wins and is not default
        assert_eq!(
            folder(base, Some(r"D:\ins"), "instances"),
            (PathBuf::from(r"D:\ins"), false)
        );
        // blank/whitespace overrides fall back to the app-data default
        assert_eq!(
            folder(base, Some("   "), "skins"),
            (base.join("skins"), true)
        );
        assert_eq!(folder(base, None, "mods"), (base.join("mods"), true));
        // the whole Folders catalog defaults under the app data dir
        for name in [
            "shared",
            "instances",
            "versions",
            "mods",
            "icons",
            "java",
            "skins",
        ] {
            assert_eq!(
                folder(base, None, name),
                (base.join(name), true),
                "default for {name}"
            );
        }
    }

    #[test]
    fn staging_root_follows_the_downloads_override() {
        // default: the OS temp root
        assert_eq!(
            staging_root_for(None),
            std::env::temp_dir().join("twilightmc_staging")
        );
        // blank strings are no override
        assert_eq!(
            staging_root_for(Some("   ")),
            std::env::temp_dir().join("twilightmc_staging")
        );
        // configured downloads folder becomes the staging parent
        assert_eq!(
            staging_root_for(Some("D:/downloads")),
            PathBuf::from("D:/downloads").join("twilightmc_staging")
        );
    }

    #[test]
    fn vendor_store_needs_instances_and_libraries() {
        let base = temp_root("store");
        let prism = base.join("PrismLauncher");
        let freesm = base.join("FreesmLauncher");
        std::fs::create_dir_all(prism.join("instances")).unwrap();
        std::fs::create_dir_all(freesm.join("instances")).unwrap();
        std::fs::create_dir_all(freesm.join("libraries")).unwrap();
        // Prism is scanned first but lacks `libraries`: Freesm is the store
        assert_eq!(
            vendor_store_in(&[prism.clone(), freesm.clone()]),
            Some(freesm.clone())
        );
        std::fs::create_dir_all(prism.join("libraries")).unwrap();
        assert_eq!(
            vendor_store_in(&[prism.clone(), freesm.clone()]),
            Some(prism)
        );
        assert_eq!(vendor_store_in(&[]), None);
    }

    #[test]
    fn first_existing_dir_picks_in_order() {
        let base = temp_root("first");
        let missing = base.join("missing");
        let existing = base.join("existing");
        std::fs::create_dir_all(&existing).unwrap();
        assert_eq!(
            first_existing_dir([missing, existing.clone()].into_iter()),
            Some(existing)
        );
        assert_eq!(first_existing_dir([base.join("nope")].into_iter()), None);
    }

    #[test]
    fn flatpak_vendor_dirs_scan_app_ids() {
        let base = temp_root("flatpak");
        let prism = base
            .join("org.prismlauncher.PrismLauncher")
            .join("data")
            .join("PrismLauncher");
        std::fs::create_dir_all(&prism).unwrap();
        // an app whose data dir is not a vendor store is skipped
        let other = base.join("org.other.App").join("data").join("OtherThing");
        std::fs::create_dir_all(&other).unwrap();
        assert_eq!(flatpak_vendor_dirs(&base), vec![prism]);
        assert!(flatpak_vendor_dirs(&base.join("nope")).is_empty());
    }

    #[cfg(windows)]
    #[test]
    fn windows_data_roots_use_appdata() {
        assert_eq!(
            data_roots_from(
                Some(r"C:\Users\u\AppData\Roaming"),
                Some(r"C:\Users\u"),
                None
            ),
            vec![PathBuf::from(r"C:\Users\u\AppData\Roaming")]
        );
        assert!(data_roots_from(None, None, None).is_empty());
    }

    #[cfg(target_os = "macos")]
    #[test]
    fn macos_data_roots_use_application_support() {
        assert_eq!(
            data_roots_from(None, Some("/Users/u"), None),
            vec![PathBuf::from("/Users/u/Library/Application Support")]
        );
        assert!(data_roots_from(None, None, None).is_empty());
    }

    #[cfg(all(unix, not(target_os = "macos")))]
    #[test]
    fn linux_data_roots_prefer_xdg_and_add_flatpak() {
        let roots = data_roots_from(None, Some("/home/u"), Some("/xdg/data"));
        assert_eq!(
            roots,
            vec![
                PathBuf::from("/xdg/data"),
                PathBuf::from("/home/u/.var/app")
            ]
        );
        // blank XDG falls back to ~/.local/share
        let roots = data_roots_from(None, Some("/home/u"), Some("   "));
        assert_eq!(roots[0], PathBuf::from("/home/u/.local/share"));
        assert!(data_roots_from(None, None, None).is_empty());
    }
}
