// Prevents an extra console window on Windows in release builds.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod accounts;
mod cas;
mod crash_report;
mod curseforge;
mod devmode;
mod export;
mod horizon;
mod import;
mod instance;
mod instances;
mod java;
mod launch;
mod modpack;
mod modrinth;
mod mods;
mod net;
mod prefs;
mod provenance;
mod scrubber;
mod servers;
mod shortcut;
mod storage;
mod twpack;
mod update;
mod versions;
mod worlds;

// Single source of truth for the header badge; falls out of the workspace
// version and auto-bumps with the milestone train.
#[tauri::command]
fn get_version() -> &'static str {
    env!("CARGO_PKG_VERSION")
}

/// Opens the WebView inspector. The UI only exposes this while App Developer
/// Mode is on; the Tauri `devtools` feature must be enabled for the binary.
#[tauri::command]
async fn open_devtools(app: tauri::AppHandle, window: tauri::WebviewWindow) -> Result<(), String> {
    let settings_path = crate::accounts::settings_path(&app).await?;
    if !crate::accounts::load_settings(&settings_path)
        .await
        .dev_mode
    {
        return Err("Developer Mode is not enabled".to_owned());
    }
    window.open_devtools();
    Ok(())
}

/// Injects a one-time webview keyboard listener for F12 / Ctrl+Shift+I /
/// Cmd+Option+I. It invokes `open_devtools` only after checking the persisted
/// setting, so a normal user never gets a debug shortcut.
fn install_devtools_shortcut() -> tauri::Builder<tauri::Wry> {
    tauri::Builder::default().on_page_load(|webview, _payload| {
        let script = r#"
          (() => {
            if (window.__twilightDevShortcut) return;
            window.__twilightDevShortcut = true;
            window.addEventListener('keydown', async (e) => {
              const chord = e.key === 'F12' ||
                ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
                ((e.metaKey || e.ctrlKey) && e.altKey && (e.key === 'i' || e.key === 'I'));
              if (!chord) return;
              try {
                const prefs = await window.__TAURI__.core.invoke('get_dev_settings');
                if (!prefs.devMode) return;
                e.preventDefault();
                await window.__TAURI__.core.invoke('open_devtools');
              } catch (_) { /* plain web build */ }
            });
          })();
        "#;
        let _ = webview.eval(script);
    })
}

/// Reveals a filesystem path in the platform file browser.
#[tauri::command]
fn open_path(path: String) -> Result<(), String> {
    spawn_open(&path)
}

/// Spawns the platform opener for a local path (folder or file); shared by
/// the file-browser command. Never used for URLs — see [`open_url`].
pub(crate) fn spawn_open(target: &str) -> Result<(), String> {
    #[cfg(windows)]
    let mut cmd = {
        let mut c = std::process::Command::new("explorer");
        c.arg(target);
        c
    };
    #[cfg(target_os = "macos")]
    let mut cmd = {
        let mut c = std::process::Command::new("open");
        c.arg(target);
        c
    };
    #[cfg(all(unix, not(target_os = "macos")))]
    let mut cmd = {
        let mut c = std::process::Command::new("xdg-open");
        c.arg(target);
        c
    };
    cmd.spawn().map_err(|e| e.to_string())?;
    Ok(())
}

/// Validates an absolute http(s) URL before it may reach the OS opener.
/// Anything else is rejected: local paths go through [`spawn_open`], and
/// foreign schemes (`file:`, `ftp:`, `javascript:`…) must never be handed
/// to a shell.
pub(crate) fn validate_http_url(url: &str) -> Result<(), String> {
    let url = url.trim();
    if url.is_empty() {
        return Err("empty URL".into());
    }
    if !(url.starts_with("https://") || url.starts_with("http://")) {
        return Err(format!("not an http(s) URL: {url}"));
    }
    if url.chars().any(|c| c.is_whitespace() || c.is_control()) {
        return Err("URL contains whitespace or control characters".into());
    }
    Ok(())
}

/// The PowerShell argument vector that opens `url` in the default browser.
/// A single-quoted `-Command` payload keeps `&` and `?` query parameters
/// literal (no `cmd` mangling), with `'` doubled per PowerShell quoting.
/// Windows-only: non-Windows runners open URLs through `open`/`xdg-open`.
#[cfg(windows)]
pub(crate) fn powershell_start_process_args(url: &str) -> Vec<String> {
    let escaped = url.replace('\'', "''");
    vec![
        "-NoProfile".to_owned(),
        "-NonInteractive".to_owned(),
        "-Command".to_owned(),
        format!("Start-Process '{escaped}'"),
    ]
}

/// Opens an http(s) URL in the user's default web browser. Deliberately
/// separate from [`spawn_open`]: handing an OAuth2 URL (which carries `?`
/// and `&` query parameters) to a file/folder opener such as `explorer`
/// makes Windows fall back to File Explorer instead of the browser.
#[tauri::command]
fn open_external_url(url: String) -> Result<(), String> {
    open_url(&url)
}

/// [`open_external_url`] core, isolated from tauri for reuse and tests.
pub(crate) fn open_url(url: &str) -> Result<(), String> {
    // trim once, up front: the trimmed form is both what gets validated and
    // what reaches the OS, so stray newlines can never ride along into the
    // shell payload
    let url = url.trim();
    validate_http_url(url)?;
    #[cfg(windows)]
    {
        let mut cmd = std::process::Command::new("powershell");
        cmd.args(powershell_start_process_args(url));
        cmd.spawn().map_err(|e| e.to_string())?;
    }
    #[cfg(target_os = "macos")]
    {
        std::process::Command::new("open")
            .arg(url)
            .spawn()
            .map_err(|e| e.to_string())?;
    }
    #[cfg(all(unix, not(target_os = "macos")))]
    {
        std::process::Command::new("xdg-open")
            .arg(url)
            .spawn()
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

fn main() {
    // Desktop-shortcut boot: `--launch <id>` / `--launch=<id>` decides the
    // auto-launch target before Tauri takes over the event loop.
    shortcut::init_startup_launch(&std::env::args().collect::<Vec<_>>());

    let result = install_devtools_shortcut()
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            get_version,
            open_devtools,
            open_path,
            open_external_url,
            accounts::get_accounts,
            accounts::refresh_elyby_account,
            accounts::add_offline_account,
            accounts::remove_account,
            accounts::set_active_account,
            accounts::get_active_account,
            accounts::offline_uuid,
            accounts::add_custom_yggdrasil_account,
            accounts::add_elyby_account,
            accounts::start_elyby_device_code,
            accounts::poll_elyby_device_code,
            accounts::elyby_browser_login,
            accounts::proxy_skin_png,
            accounts::start_microsoft_device_code,
            accounts::poll_microsoft_device_code,
            accounts::refresh_microsoft_account,
            accounts::set_account_textures,
            java::discover_java_installations,
            java::probe_java_path,
            java::download_adoptium_java,
            versions::fetch_vanilla_versions,
            versions::fetch_loader_versions,
            servers::list_servers,
            servers::open_server_folder,
            servers::create_server,
            servers::delete_server,
            servers::start_server,
            servers::stop_server,
            servers::kill_server,
            servers::kill_orphaned_server,
            servers::set_connect_enabled,
            servers::remove_connect,
            servers::restart_server,
            servers::send_server_command,
            servers::get_server_properties,
            servers::update_server_properties,
            servers::install_authme,
            servers::install_connect,
            servers::get_connect_status,
            servers::fetch_server_versions,
            servers::get_cpu_target,
            servers::get_server_metrics,
            servers::list_server_files,
            servers::read_server_text_file,
            servers::write_server_text_file,
            servers::create_server_dir,
            servers::delete_server_entry,
            servers::rename_server_entry,
            servers::upload_server_files,
            servers::archive_server_entries,
            servers::set_server_startup,
            servers::list_server_backups,
            servers::create_server_backup,
            servers::restore_server_backup,
            servers::delete_server_backup,
            modrinth::search_modrinth_mods,
            modrinth::install_modrinth_mod,
            modrinth::install_mod_with_deps,
            modrinth::download_modrinth_pack,
            modrinth::suggest_accessibility_mods,
            modrinth::preview_mod_download_queue,
            modrinth::get_modrinth_project_details,
            modrinth::install_modrinth_batch,
            modrinth::install_cleanroom_core_mods,
            curseforge::search_curseforge_mods,
            curseforge::install_curseforge_mod,
            curseforge::install_curseforge_pack,
            worlds::list_instance_worlds,
            worlds::backup_instance_world,
            worlds::list_world_backups,
            worlds::restore_world_backup,
            launch::launch_instance,
            launch::kill_instance,
            launch::get_raw_launch_command,
            instances::get_instances,
            instances::create_instance,
            instances::duplicate_instance,
            instances::rename_instance,
            instances::set_instance_icon,
            instances::set_instance_icon_key,
            instance::scan_instances,
            instance::set_instance_group,
            instances::delete_instance,
            instances::list_screenshots,
            instances::delete_screenshot,
            instances::read_instance_screenshot,
            instances::list_logs,
            instances::read_instance_log,
            instances::open_instance_game_folder,
            instances::instance_game_path,
            shortcut::create_desktop_shortcut,
            shortcut::get_startup_launch,
            export::export_instance_zip,
            twpack::export_instance_twpack,
            twpack::inspect_twpack,
            twpack::install_twpack,
            mods::list_instance_mods,
            mods::toggle_mod,
            mods::delete_mod,
            mods::import_mod,
            mods::list_instance_packs,
            mods::delete_pack,
            mods::import_pack,
            modpack::inspect_modpack,
            modpack::install_mrpack,
            modpack::install_modpack,
            modpack::import_curseforge_pack,
            import::inspect_instance_import,
            import::import_instance_archive,
            prefs::get_dev_settings,
            prefs::set_dev_settings,
            prefs::get_raw_config_json,
            prefs::get_dev_diagnostics,
            devmode::list_dev_launch_records,
            devmode::clear_dev_launch_records,
            prefs::get_java_prefs,
            prefs::set_java_prefs,
            prefs::add_custom_java,
            prefs::remove_custom_java,
            prefs::apply_java_runtime,
            prefs::get_theme_config,
            prefs::set_theme_config,
            prefs::get_mode_config,
            prefs::set_mode_config,
            prefs::get_accessibility_config,
            prefs::set_accessibility_config,
            prefs::get_gc_prefs,
            prefs::set_gc_prefs,
            prefs::get_curseforge_api_key,
            prefs::set_curseforge_api_key,
            prefs::get_locale_config,
            prefs::set_locale_config,
            prefs::get_curseforge_enabled,
            prefs::set_curseforge_enabled,
            prefs::get_update_channel,
            prefs::set_update_channel,
            prefs::get_crash_report_config,
            prefs::set_crash_report_config,
            crash_report::prepare_crash_report,
            crash_report::send_crash_report,
            update::check_for_updates,
            prefs::get_horizon_prefs,
            prefs::set_horizon_prefs,
            horizon::detect_horizon,
            horizon::list_horizon_releases,
            horizon::install_horizon_release,
            prefs::get_cas_stats,
            prefs::set_cas_links,
            prefs::run_cas_deduplicate,
            prefs::run_cas_gc,
            storage::get_storage,
            storage::set_folder_dir,
            storage::clean_staging
        ])
        .run(tauri::generate_context!());
    if let Err(err) = result {
        eprintln!("TwilightMC UI failed to start: {err}");
        std::process::exit(1);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn version_sources_match_the_crate_version() {
        let version = env!("CARGO_PKG_VERSION");
        // The header badge, About page and console identity line all read this
        // command; keep every packaged manifest on the same milestone.
        assert_eq!(get_version(), version);

        let tauri: serde_json::Value =
            serde_json::from_str(include_str!("../tauri.conf.json")).expect("tauri.conf.json");
        assert_eq!(tauri["version"], version);

        let package: serde_json::Value =
            serde_json::from_str(include_str!("../ui/package.json")).expect("ui/package.json");
        assert_eq!(package["version"], version);
    }

    #[test]
    fn http_urls_validate_and_foreign_schemes_reject() {
        assert!(validate_http_url("https://account.ely.by/oauth2/v1?x=1&y=2").is_ok());
        assert!(validate_http_url("http://localhost:1234/?code=abc").is_ok());
        assert!(validate_http_url("  https://github.com/BlackCatOfficialytb  ").is_ok());

        for bad in [
            "",
            "   ",
            "ftp://example.com/file",
            "file:///C:/Windows",
            "javascript:alert(1)",
            "C:\\Users\\Admin",
            "/etc/passwd",
        ] {
            assert!(validate_http_url(bad).is_err(), "{bad:?} must be rejected");
        }
        // whitespace and control characters never reach the shell (open_url
        // trims the ends first, so only inner ones can smuggle through)
        assert!(validate_http_url("https://a.b/path with space").is_err());
        assert!(validate_http_url("https://a.b/?x=\u{7}y").is_err());
        assert!(validate_http_url("https://a.b\u{0}").is_err());
    }

    #[test]
    #[cfg(windows)]
    fn powershell_command_keeps_query_parameters_literal() {
        let args = powershell_start_process_args(
            "https://account.ely.by/oauth2/v1?response_type=code&scope=a+b",
        );
        assert_eq!(args[0], "-NoProfile");
        assert_eq!(args[1], "-NonInteractive");
        assert_eq!(args[2], "-Command");
        // `&` survives unescaped inside the single-quoted payload
        assert_eq!(
            args[3],
            "Start-Process 'https://account.ely.by/oauth2/v1?response_type=code&scope=a+b'"
        );
    }

    #[test]
    #[cfg(windows)]
    fn powershell_command_escapes_single_quotes_by_doubling() {
        let args = powershell_start_process_args("https://a.b/?x=it's");
        assert_eq!(args[3], "Start-Process 'https://a.b/?x=it''s'");
        assert_eq!(
            powershell_start_process_args("it's a 'test'")[3],
            "Start-Process 'it''s a ''test'''"
        );
    }
}
