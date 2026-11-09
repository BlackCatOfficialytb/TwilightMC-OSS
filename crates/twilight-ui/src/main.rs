// Prevents an extra console window on Windows in release builds.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod accounts;
mod instances;
mod java;
mod launch;
mod modpack;
mod prefs;
mod storage;
mod versions;

// Single source of truth for the header badge; falls out of the workspace
// version and auto-bumps with the milestone train.
#[tauri::command]
fn get_version() -> &'static str {
    env!("CARGO_PKG_VERSION")
}

/// Reveals a filesystem path in the platform file browser.
#[tauri::command]
fn open_path(path: String) -> Result<(), String> {
    #[cfg(windows)]
    let mut cmd = {
        let mut c = std::process::Command::new("explorer");
        c.arg(&path);
        c
    };
    #[cfg(target_os = "macos")]
    let mut cmd = {
        let mut c = std::process::Command::new("open");
        c.arg(&path);
        c
    };
    #[cfg(all(unix, not(target_os = "macos")))]
    let mut cmd = {
        let mut c = std::process::Command::new("xdg-open");
        c.arg(&path);
        c
    };
    cmd.spawn().map_err(|e| e.to_string())?;
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_version,
            open_path,
            accounts::get_accounts,
            accounts::add_offline_account,
            accounts::remove_account,
            accounts::set_active_account,
            accounts::get_active_account,
            java::discover_java_installations,
            versions::fetch_vanilla_versions,
            launch::launch_instance,
            launch::kill_instance,
            instances::get_instances,
            instances::create_instance,
            instances::delete_instance,
            instances::list_mods,
            instances::toggle_mod,
            modpack::install_modpack,
            prefs::get_java_prefs,
            prefs::set_java_prefs,
            prefs::get_theme_config,
            prefs::set_theme_config,
            storage::get_storage,
            storage::set_shared_dir,
            storage::clean_staging
        ])
        .run(tauri::generate_context!())
        .expect("error while running TwilightMC UI");
}
