// IPC bridge to the Modrinth `.mrpack` installer (`twilight-cli::modpack`):
// the wizard's Modpack tab hands over a local file path or http(s) URL and the
// pipeline stages downloads + overrides into a new managed instance.

use tauri::AppHandle;

use twilight_cli::ModpackArgs;

use crate::storage::shared_root;

/// Installs a `.mrpack` (local path or URL) into the shared instance library.
/// The pack slug names the instance; the frontend re-scans the grid after.
#[tauri::command]
pub async fn install_modpack(app: AppHandle, path_or_url: String) -> Result<(), String> {
    if path_or_url.trim().is_empty() {
        return Err("modpack path or URL is required".into());
    }
    let shared_dir = shared_root(&app).await?;
    let args = ModpackArgs {
        path_or_url: path_or_url.trim().to_owned(),
        instance_dir: None,
        shared_dir: Some(shared_dir),
        temp_dir: None,
        dry_run: false,
    };
    twilight_cli::modpack::run_install(args)
        .await
        .map(|_| ())
        .map_err(|e| e.to_string())
}
