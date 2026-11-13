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
    /// Transient staging root (`%TEMP%\twilightmc_staging`).
    pub staging_root: String,
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

/// Storage paths for the Settings page. Both roots go through the same
/// resolution the scanner and launcher use, so what is shown is what runs.
#[tauri::command]
pub async fn get_storage(app: AppHandle) -> Result<StoragePaths, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let shared_configured = settings
        .shared_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
        .is_some();
    let instances_configured = settings
        .instances_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
        .is_some();
    let shared = shared_root(&app).await?;
    let instances = resolved_instances_root(&app).await?;
    Ok(StoragePaths {
        shared_dir: shared.display().to_string(),
        is_default_shared: !shared_configured,
        instances_dir: instances.display().to_string(),
        is_default_instances: !instances_configured,
        staging_root: ArtifactStaging::new(None).root().display().to_string(),
    })
}

/// Persists a custom shared library dir; `None`/empty resets to the default.
#[tauri::command]
pub async fn set_shared_dir(app: AppHandle, path: Option<String>) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.shared_dir = path.map(|p| p.trim().to_owned()).filter(|p| !p.is_empty());
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Persists a custom instances root (e.g. `D:\ins\instances`); `None`/empty
/// resolves back to the defaults (an existing Prism/Freesm store, else our
/// library).
#[tauri::command]
pub async fn set_instances_dir(app: AppHandle, path: Option<String>) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.instances_dir = path.map(|p| p.trim().to_owned()).filter(|p| !p.is_empty());
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Purges the staging area (`%TEMP%\twilightmc_staging`); idempotent.
#[tauri::command]
pub async fn clean_staging() -> Result<(), String> {
    ArtifactStaging::new(None)
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
