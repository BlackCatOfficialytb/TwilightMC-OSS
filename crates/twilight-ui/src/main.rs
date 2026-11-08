// Prevents an extra console window on Windows in release builds.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod accounts;
mod instances;
mod java;
mod launch;
mod storage;
mod versions;

// Single source of truth for the header badge; falls out of the workspace
// version and auto-bumps with the milestone train.
#[tauri::command]
fn get_version() -> &'static str {
    env!("CARGO_PKG_VERSION")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_version,
            accounts::get_accounts,
            accounts::add_offline_account,
            accounts::remove_account,
            accounts::set_active_account,
            accounts::get_active_account,
            java::list_java,
            versions::list_versions,
            launch::launch_instance,
            instances::get_instances,
            instances::create_instance,
            storage::get_storage,
            storage::set_shared_dir,
            storage::clean_staging
        ])
        .run(tauri::generate_context!())
        .expect("error while running TwilightMC UI");
}
