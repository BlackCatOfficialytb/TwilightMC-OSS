// IPC bridge for storage path configuration: the shared artifact library and
// the staging area (`%TEMP%\twilightmc_staging`), mirroring the CLI layout.

use std::path::PathBuf;

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
    /// True while `shared_dir` is the app-data default, not user-configured.
    pub is_default_shared: bool,
    /// Instances root shown to the grid (override, Prism default, or ours).
    pub instances_dir: String,
    /// True while no explicit instances override is configured.
    pub is_default_instances: bool,
    /// Transient staging root (`%TEMP%\twilightmc_staging`).
    pub staging_root: String,
}

/// Shared library root for launches: the user-configured dir when set, else
/// `app_data_dir/shared`.
pub(crate) async fn shared_root(app: &AppHandle) -> Result<PathBuf, String> {
    let settings = load_settings(&settings_path(app).await?).await;
    match settings.shared_dir {
        Some(dir) if !dir.trim().is_empty() => Ok(PathBuf::from(dir)),
        _ => Ok(app
            .path()
            .app_data_dir()
            .map_err(|e| e.to_string())?
            .join("shared")),
    }
}

#[tauri::command]
pub async fn get_storage(app: AppHandle) -> Result<StoragePaths, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let custom = settings.shared_dir.filter(|d| !d.trim().is_empty());
    let shared = match &custom {
        Some(dir) => PathBuf::from(dir),
        None => app
            .path()
            .app_data_dir()
            .map_err(|e| e.to_string())?
            .join("shared"),
    };
    let instances_override = settings
        .instances_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty());
    let instances = match instances_override {
        Some(dir) => PathBuf::from(dir),
        None => resolved_instances_root(&app).await?,
    };
    Ok(StoragePaths {
        shared_dir: shared.display().to_string(),
        is_default_shared: custom.is_none(),
        instances_dir: instances.display().to_string(),
        is_default_instances: instances_override.is_none(),
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
/// resolves back to the defaults (Prism dir on Windows, else our library).
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
