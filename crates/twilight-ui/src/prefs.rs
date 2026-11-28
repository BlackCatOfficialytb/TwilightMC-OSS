// IPC bridge for launcher preferences: theme selection, java override and
// the -Xms/-Xmx memory allocation, all persisted in `settings.json`.

use serde::{Deserialize, Serialize};
use sysinfo::{Pid, ProcessRefreshKind, ProcessesToUpdate, System};
use tauri::AppHandle;

use crate::accounts::{Settings, load_settings, save_settings, settings_path};
use crate::devmode::{LaunchTimings, last_timings, redact_settings_json};

/// Persisted java/memory allocation shown in the Settings modal.
#[derive(Debug, Clone, Serialize)]
pub struct JavaPrefs {
    /// Explicit java executable; `None` = auto-discovery.
    pub java_path: Option<String>,
    /// Custom Java executables added through the picker.
    pub custom_java_paths: Vec<String>,
    /// The runtime explicitly applied to launches.
    pub selected_java_path: Option<String>,
    /// `-Xms` in MiB; 0 = launcher default.
    pub min_memory_mb: u32,
    /// `-Xmx` in MiB; 0 = launcher default (no override).
    pub max_memory_mb: u32,
}

#[tauri::command]
pub async fn get_java_prefs(app: AppHandle) -> Result<JavaPrefs, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(JavaPrefs {
        java_path: settings.java_path,
        custom_java_paths: settings.custom_java_paths,
        selected_java_path: settings.selected_java_path,
        min_memory_mb: settings.min_memory_mb,
        max_memory_mb: settings.max_memory_mb,
    })
}

/// Persists the java override and memory allocation (`0` = no override).
#[tauri::command]
pub async fn set_java_prefs(
    app: AppHandle,
    java_path: Option<String>,
    min_memory_mb: u32,
    max_memory_mb: u32,
) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.java_path = java_path
        .map(|p| p.trim().to_owned())
        .filter(|p| !p.is_empty());
    // a min above max would make the JVM reject its flags
    settings.min_memory_mb = min_memory_mb.min(65536);
    settings.max_memory_mb = max_memory_mb.max(min_memory_mb).min(65536);
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Adds a probed Java executable to the saved custom list (idempotent).
#[tauri::command]
pub async fn add_custom_java(app: AppHandle, path: String) -> Result<Vec<String>, String> {
    let trimmed = path.trim().to_owned();
    if trimmed.is_empty() {
        return Err("no Java path given".into());
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    if !settings
        .custom_java_paths
        .iter()
        .any(|saved| saved.eq_ignore_ascii_case(&trimmed))
    {
        settings.custom_java_paths.push(trimmed);
    }
    save_settings(&settings_path(&app).await?, &settings).await?;
    Ok(settings.custom_java_paths)
}

/// Forgets a saved custom Java executable.
#[tauri::command]
pub async fn remove_custom_java(app: AppHandle, path: String) -> Result<Vec<String>, String> {
    let target = path.trim();
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings
        .custom_java_paths
        .retain(|saved| !saved.eq_ignore_ascii_case(target));
    // a removed runtime cannot stay applied
    if settings
        .selected_java_path
        .as_deref()
        .is_some_and(|selected| selected.eq_ignore_ascii_case(target))
    {
        settings.selected_java_path = None;
    }
    save_settings(&settings_path(&app).await?, &settings).await?;
    Ok(settings.custom_java_paths)
}

/// Applies (or clears, with an empty path) the Java runtime launches use, and
/// mirrors it into `java_path` so the launch pipeline needs no second lookup.
#[tauri::command]
pub async fn apply_java_runtime(app: AppHandle, path: Option<String>) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    let selected = path.map(|p| p.trim().to_owned()).filter(|p| !p.is_empty());
    settings.java_path = selected.clone();
    settings.selected_java_path = selected;
    save_settings(&settings_path(&app).await?, &settings).await
}

#[tauri::command]
pub async fn get_theme_config(app: AppHandle) -> Result<String, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(settings.theme.unwrap_or_else(|| "dark".to_owned()))
}

#[tauri::command]
pub async fn set_theme_config(app: AppHandle, theme: String) -> Result<(), String> {
    if theme != "light" && theme != "dark" {
        return Err("theme must be 'light' or 'dark'".into());
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.theme = Some(theme);
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Only the catalogs bundled with the UI can be selected from Settings.
fn valid_locale(locale: &str) -> bool {
    matches!(locale, "en-US" | "vi-VN")
}

/// The accepted update streams; `bolide` is the default channel.
fn valid_update_channel(channel: &str) -> bool {
    matches!(channel, "bolide" | "star" | "stable" | "snapshot")
}

/// Read-side fallback: a legacy or hand-edited settings file cannot select an
/// unsupported catalog or channel. Kept separate from the command so it can be
/// tested without an `AppHandle`.
fn resolved_locale(settings: &Settings) -> String {
    settings
        .locale
        .as_deref()
        .filter(|locale| valid_locale(locale))
        .unwrap_or("en-US")
        .to_owned()
}

fn resolved_update_channel(settings: &Settings) -> String {
    settings
        .update_channel
        .as_deref()
        .filter(|channel| valid_update_channel(channel))
        .unwrap_or("bolide")
        .to_owned()
}

#[tauri::command]
pub async fn get_locale_config(app: AppHandle) -> Result<String, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(resolved_locale(&settings))
}

#[tauri::command]
pub async fn set_locale_config(app: AppHandle, locale: String) -> Result<(), String> {
    if !valid_locale(&locale) {
        return Err("locale must be 'en-US' or 'vi-VN'".into());
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.locale = Some(locale);
    save_settings(&settings_path(&app).await?, &settings).await
}

#[tauri::command]
pub async fn get_curseforge_enabled(app: AppHandle) -> Result<bool, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(settings.curseforge_enabled)
}

#[tauri::command]
pub async fn set_curseforge_enabled(app: AppHandle, enabled: bool) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.curseforge_enabled = enabled;
    save_settings(&settings_path(&app).await?, &settings).await
}

#[tauri::command]
pub async fn get_update_channel(app: AppHandle) -> Result<String, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(resolved_update_channel(&settings))
}

#[tauri::command]
pub async fn set_update_channel(app: AppHandle, channel: String) -> Result<(), String> {
    if !valid_update_channel(&channel) {
        return Err("update channel must be 'bolide', 'star', 'stable' or 'snapshot'".into());
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.update_channel = Some(channel);
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Crash-report preferences exposed to Settings. The endpoint is not secret
/// (it is configured by the user), but no request is ever made from this
/// module: sending only happens on an explicit click in the preview dialog.
#[derive(Debug, Clone, PartialEq, serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CrashReportConfig {
    pub enabled: bool,
    pub endpoint: String,
    pub prompt_enabled: bool,
}

#[tauri::command]
pub async fn get_crash_report_config(app: AppHandle) -> Result<CrashReportConfig, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(CrashReportConfig {
        enabled: settings.crash_reporter_enabled,
        endpoint: settings.crash_endpoint.unwrap_or_default(),
        prompt_enabled: settings.crash_prompt_enabled,
    })
}

#[tauri::command]
pub async fn set_crash_report_config(
    app: AppHandle,
    enabled: bool,
    endpoint: String,
    prompt_enabled: bool,
) -> Result<(), String> {
    let endpoint = endpoint.trim().to_owned();
    if !endpoint.is_empty() {
        let url =
            reqwest::Url::parse(&endpoint).map_err(|e| format!("invalid endpoint URL: {e}"))?;
        if !matches!(url.scheme(), "http" | "https") {
            return Err("crash endpoint must use http:// or https://".into());
        }
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.crash_reporter_enabled = enabled;
    settings.crash_endpoint = if endpoint.is_empty() {
        None
    } else {
        Some(endpoint)
    };
    settings.crash_prompt_enabled = prompt_enabled;
    save_settings(&settings_path(&app).await?, &settings).await
}

#[tauri::command]
pub async fn get_mode_config(app: AppHandle) -> Result<String, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(settings.mode.unwrap_or_else(|| "launcher".to_owned()))
}

/// Persists the Launcher/Client mode toggle (`launcher` | `client`).
#[tauri::command]
pub async fn set_mode_config(app: AppHandle, mode: String) -> Result<(), String> {
    if mode != "launcher" && mode != "client" {
        return Err("mode must be 'launcher' or 'client'".into());
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.mode = Some(mode);
    save_settings(&settings_path(&app).await?, &settings).await
}

/// The optional CurseForge API key (`None` = the zero-key FOSS flow).
#[derive(Debug, Clone, Serialize)]
pub struct CurseForgeKey {
    pub configured: bool,
}

#[tauri::command]
pub async fn get_curseforge_api_key(app: AppHandle) -> Result<CurseForgeKey, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(CurseForgeKey {
        configured: settings
            .curseforge_api_key
            .as_deref()
            .is_some_and(|k| !k.trim().is_empty()),
    })
}

/// Persists (or clears, with an empty key) the CurseForge API key. The key is
/// user-supplied through Settings — never bundled with the launcher.
#[tauri::command]
pub async fn set_curseforge_api_key(app: AppHandle, api_key: String) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.curseforge_api_key = Some(api_key.trim().to_owned()).filter(|k| !k.is_empty());
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Persisted Horizon (native Rust engine) location shown in Settings.
#[derive(Debug, Clone, Serialize)]
pub struct HorizonPrefs {
    /// Explicit Horizon binary; `None` = not configured.
    pub horizon_path: Option<String>,
    /// True when the configured path points at an existing file.
    pub configured: bool,
}

#[tauri::command]
pub async fn get_horizon_prefs(app: AppHandle) -> Result<HorizonPrefs, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let path = settings.horizon_path.filter(|p| !p.trim().is_empty());
    let configured = path
        .as_deref()
        .is_some_and(|p| std::path::Path::new(p).is_file());
    Ok(HorizonPrefs {
        horizon_path: path,
        configured,
    })
}

/// Persists (or clears, with an empty path) the Horizon binary location.
/// A non-empty path must point at an existing file so a typo cannot silently
/// break every Horizon launch later.
#[tauri::command]
pub async fn set_horizon_prefs(app: AppHandle, horizon_path: Option<String>) -> Result<(), String> {
    let cleaned = horizon_path
        .map(|p| p.trim().to_owned())
        .filter(|p| !p.is_empty());
    if let Some(path) = &cleaned
        && !std::path::Path::new(path).is_file()
    {
        return Err(format!("Horizon binary not found: {path}"));
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.horizon_path = cleaned;
    save_settings(&settings_path(&app).await?, &settings).await
}

/// App Developer Mode preferences (Settings → Developer).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DevSettings {
    pub dev_mode: bool,
    pub horizon_dev_offline: bool,
    pub horizon_dev_single_player: bool,
    pub horizon_allow_unsigned_local: bool,
    pub jdwp_enabled: bool,
    pub jdwp_port: u16,
    pub mixin_debug: bool,
    #[serde(default)]
    pub debug_http_enabled: bool,
    #[serde(default = "default_debug_http_port")]
    pub debug_http_port: u16,
    #[serde(default = "default_true")]
    pub debug_http_tls: bool,
    #[serde(default)]
    pub debug_mcp_enabled: bool,
    #[serde(default = "default_debug_mcp_port")]
    pub debug_mcp_port: u16,
    #[serde(default)]
    pub debug_api_key: Option<String>,
    #[serde(default = "default_true")]
    pub debug_require_api_key: bool,
    #[serde(default)]
    pub debug_permissions: DebugPermissionsDto,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DebugPermissionsDto {
    #[serde(default = "default_true")]
    pub read_state: bool,
    #[serde(default = "default_true")]
    pub read_events: bool,
    #[serde(default = "default_true")]
    pub read_logs: bool,
    #[serde(default)]
    pub read_instances: bool,
    #[serde(default)]
    pub read_config: bool,
}

impl Default for DebugPermissionsDto {
    fn default() -> Self {
        Self {
            read_state: true,
            read_events: true,
            read_logs: true,
            read_instances: false,
            read_config: false,
        }
    }
}

impl From<crate::accounts::DebugPermissions> for DebugPermissionsDto {
    fn from(p: crate::accounts::DebugPermissions) -> Self {
        Self {
            read_state: p.read_state,
            read_events: p.read_events,
            read_logs: p.read_logs,
            read_instances: p.read_instances,
            read_config: p.read_config,
        }
    }
}

impl From<DebugPermissionsDto> for crate::accounts::DebugPermissions {
    fn from(p: DebugPermissionsDto) -> Self {
        Self {
            read_state: p.read_state,
            read_events: p.read_events,
            read_logs: p.read_logs,
            read_instances: p.read_instances,
            read_config: p.read_config,
        }
    }
}

fn default_debug_http_port() -> u16 {
    28445
}
fn default_debug_mcp_port() -> u16 {
    28446
}
fn default_true() -> bool {
    true
}

#[tauri::command]
pub async fn get_dev_settings(app: AppHandle) -> Result<DevSettings, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(DevSettings {
        dev_mode: settings.dev_mode,
        horizon_dev_offline: settings.horizon_dev_offline,
        horizon_dev_single_player: settings.horizon_dev_single_player,
        horizon_allow_unsigned_local: settings.horizon_allow_unsigned_local,
        jdwp_enabled: settings.jdwp_enabled,
        jdwp_port: if settings.jdwp_port == 0 {
            5005
        } else {
            settings.jdwp_port
        },
        mixin_debug: settings.mixin_debug,
        debug_http_enabled: settings.debug_http_enabled || settings.debug_protocol_enabled,
        debug_http_port: if settings.debug_http_port == 0 {
            if settings.debug_protocol_port == 0 {
                default_debug_http_port()
            } else {
                settings.debug_protocol_port
            }
        } else {
            settings.debug_http_port
        },
        debug_http_tls: settings.debug_http_tls,
        debug_mcp_enabled: settings.debug_mcp_enabled,
        debug_mcp_port: if settings.debug_mcp_port == 0 {
            default_debug_mcp_port()
        } else {
            settings.debug_mcp_port
        },
        debug_api_key: settings.debug_api_key.clone(),
        debug_require_api_key: settings.debug_require_api_key,
        debug_permissions: settings.debug_permissions.into(),
    })
}

#[tauri::command]
pub async fn set_dev_settings(app: AppHandle, settings: DevSettings) -> Result<(), String> {
    let mut stored = load_settings(&settings_path(&app).await?).await;
    stored.dev_mode = settings.dev_mode;
    stored.horizon_dev_offline = settings.horizon_dev_offline;
    stored.horizon_dev_single_player = settings.horizon_dev_single_player;
    stored.horizon_allow_unsigned_local = settings.horizon_allow_unsigned_local;
    stored.jdwp_enabled = settings.jdwp_enabled;
    stored.jdwp_port = if settings.jdwp_port == 0 {
        5005
    } else {
        settings.jdwp_port
    };
    stored.mixin_debug = settings.mixin_debug;
    stored.debug_http_enabled = settings.dev_mode && settings.debug_http_enabled;
    stored.debug_http_port = if settings.debug_http_port == 0 {
        default_debug_http_port()
    } else {
        settings.debug_http_port
    };
    stored.debug_http_tls = settings.debug_http_tls;
    stored.debug_mcp_enabled = settings.dev_mode && settings.debug_mcp_enabled;
    stored.debug_mcp_port = if settings.debug_mcp_port == 0 {
        default_debug_mcp_port()
    } else {
        settings.debug_mcp_port
    };
    stored.debug_api_key = settings
        .debug_api_key
        .as_deref()
        .map(str::trim)
        .filter(|s| !s.is_empty())
        .map(ToOwned::to_owned);
    stored.debug_require_api_key = settings.debug_require_api_key;
    stored.debug_permissions = settings.debug_permissions.into();
    // legacy sync
    stored.debug_protocol_enabled = stored.debug_http_enabled;
    stored.debug_protocol_port = stored.debug_http_port;
    save_settings(&settings_path(&app).await?, &stored).await?;
    crate::debug_protocol::sync_server(&app).await;
    Ok(())
}

/// Raw `twilight_config.json` (`settings.json`) contents for the Developer tab.
#[tauri::command]
pub async fn get_raw_config_json(app: AppHandle) -> Result<String, String> {
    let path = settings_path(&app).await?;
    let bytes = tokio::fs::read(&path).await.map_err(|e| e.to_string())?;
    Ok(redact_settings_json(&String::from_utf8_lossy(&bytes)))
}

/// Filesystem facts the Developer tab shows alongside the CAS stats.
#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DevDiagnostics {
    /// `Some(true)` when an unprivileged symlink could be created on Windows;
    /// `None` on platforms where the distinction does not apply.
    pub unprivileged_symlinks: Option<bool>,
    pub cas_root: String,
    /// Strategy cascade used for a file link.
    pub link_strategy: &'static str,
    /// Resident set size of the launcher process itself.
    pub launcher_rss_bytes: u64,
    pub cas_blob_count: usize,
    pub cas_total_size_bytes: u64,
    /// Phase timings from the most recent launch (in-memory).
    pub last_launch: Option<LaunchTimings>,
}

#[tauri::command]
pub async fn get_dev_diagnostics(app: AppHandle) -> Result<DevDiagnostics, String> {
    let cas_path = crate::storage::shared_root(&app).await?.join("cas");
    let stats = twilight_cas::cas_stats(&cas_path).ok();
    Ok(DevDiagnostics {
        unprivileged_symlinks: probe_unprivileged_symlinks(),
        cas_root: cas_path.to_string_lossy().into_owned(),
        link_strategy: "hardlink → NTFS junction → symlink → copy",
        launcher_rss_bytes: launcher_rss_bytes(),
        cas_blob_count: stats.as_ref().map_or(0, |stats| stats.blob_count),
        cas_total_size_bytes: stats.as_ref().map_or(0, |stats| stats.total_size_bytes),
        last_launch: last_timings(),
    })
}

/// One sysinfo refresh of the launcher's own PID: RSS in bytes.
fn launcher_rss_bytes() -> u64 {
    let pid = Pid::from_u32(std::process::id());
    let Ok(mut system) = System::new() else {
        return 0;
    };
    system.refresh_processes_specifics(
        ProcessesToUpdate::Some(&[pid]),
        true,
        ProcessRefreshKind::nothing().with_memory(),
    );
    system.process(pid).map_or(0, |process| process.memory())
}

#[cfg(windows)]
fn probe_unprivileged_symlinks() -> Option<bool> {
    use std::os::windows::fs::symlink_file;
    let dir = std::env::temp_dir().join(format!("twilight-symlink-probe-{}", std::process::id()));
    let target = dir.join("target");
    let link = dir.join("link");
    let _ = std::fs::create_dir_all(&dir);
    let _ = std::fs::write(&target, b"probe");
    let ok = symlink_file(&target, &link).is_ok();
    let _ = std::fs::remove_file(&link);
    let _ = std::fs::remove_file(&target);
    let _ = std::fs::remove_dir(&dir);
    Some(ok)
}

#[cfg(not(windows))]
fn probe_unprivileged_symlinks() -> Option<bool> {
    None
}

/// Persisted zero-copy linking preference (Settings → Folders).
#[tauri::command]
pub async fn set_cas_links(app: AppHandle, enabled: bool) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.use_cas_links = enabled;
    save_settings(&settings_path(&app).await?, &settings).await
}

// ---- global CAS (uv-style hardlinks / symlinks / NTFS junctions) ----

/// Live CAS stats: how many blobs are stored and how many bytes they use.
#[derive(Debug, Clone, Serialize)]
pub struct CasStats {
    pub blob_count: usize,
    pub total_size_bytes: u64,
    pub use_cas_links: bool,
}

#[tauri::command]
pub async fn get_cas_stats(app: AppHandle) -> Result<CasStats, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let shared = crate::storage::shared_root(&app).await?;
    let cas_root = shared.join("cas");
    let stats = twilight_cas::cas_stats(&cas_root).map_err(|e| e.to_string())?;
    Ok(CasStats {
        blob_count: stats.blob_count,
        total_size_bytes: stats.total_size_bytes,
        use_cas_links: settings.use_cas_links,
    })
}

#[tauri::command]
pub async fn run_cas_deduplicate(app: AppHandle) -> Result<twilight_cas::DedupeReport, String> {
    let instances_dir = crate::instances::instances_root(&app).await?;
    let cas_root = crate::storage::shared_root(&app).await?.join("cas");
    crate::cas::deduplicate_instances(&instances_dir, &cas_root)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn run_cas_gc(app: AppHandle) -> Result<twilight_cas::GcReport, String> {
    let instances_dir = crate::instances::instances_root(&app).await?;
    let cas_root = crate::storage::shared_root(&app).await?.join("cas");
    crate::cas::cas_garbage_collect(&cas_root, &instances_dir)
        .await
        .map_err(|e| e.to_string())
}

/// Persisted accessibility flags shown in the Settings page.
#[derive(Debug, Clone, Serialize)]
pub struct AccessibilityConfig {
    /// Blind Mode: screen-reader & audio navigation profile.
    pub blind_mode: bool,
    /// Deaf Mode: closed-captions & visual sound-cues profile.
    pub deaf_mode: bool,
}

#[tauri::command]
pub async fn get_accessibility_config(app: AppHandle) -> Result<AccessibilityConfig, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(AccessibilityConfig {
        blind_mode: settings.blind_mode,
        deaf_mode: settings.deaf_mode,
    })
}

/// Persists the Blind/Deaf accessibility profile flags.
#[tauri::command]
pub async fn set_accessibility_config(
    app: AppHandle,
    blind_mode: bool,
    deaf_mode: bool,
) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.blind_mode = blind_mode;
    settings.deaf_mode = deaf_mode;
    save_settings(&settings_path(&app).await?, &settings).await
}

/// Persisted garbage-collector preferences shown in Settings.
#[derive(Debug, Clone, Serialize)]
pub struct GcPrefs {
    pub gc_preset: String,
    pub custom_gc_flags: Vec<String>,
    pub extra_jvm_args: String,
}

#[tauri::command]
pub async fn get_gc_prefs(app: AppHandle) -> Result<GcPrefs, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(GcPrefs {
        gc_preset: settings
            .gc_preset
            .clone()
            .unwrap_or_else(|| "Default".to_owned()),
        custom_gc_flags: settings.custom_gc_flags.clone(),
        extra_jvm_args: settings.extra_jvm_args.clone().unwrap_or_default(),
    })
}

#[tauri::command]
pub async fn set_gc_prefs(
    app: AppHandle,
    gc_preset: String,
    custom_gc_flags: Vec<String>,
    extra_jvm_args: String,
) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.gc_preset = Some(gc_preset.trim().to_owned()).filter(|s| !s.is_empty());
    settings.custom_gc_flags = custom_gc_flags;
    settings.extra_jvm_args = Some(extra_jvm_args.trim().to_owned()).filter(|s| !s.is_empty());
    save_settings(&settings_path(&app).await?, &settings).await
}

#[cfg(test)]
mod tests {
    use super::*;

    async fn test_settings_path() -> std::path::PathBuf {
        // tests run in parallel: a per-process counter keeps the dirs distinct
        // even when two land in the same nanosecond
        static COUNTER: std::sync::atomic::AtomicU64 = std::sync::atomic::AtomicU64::new(0);
        let seq = COUNTER.fetch_add(1, std::sync::atomic::Ordering::Relaxed);
        let dir = std::env::temp_dir().join(format!(
            "twi-prefs-test-{}-{}-{seq}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        tokio::fs::create_dir_all(&dir).await.unwrap();
        dir.join("settings.json")
    }

    #[test]
    fn locale_and_channel_validation() {
        assert!(valid_locale("en-US"));
        assert!(valid_locale("vi-VN"));
        assert!(!valid_locale("en"));
        assert!(!valid_locale("fr-FR"));
        for channel in ["bolide", "star", "stable", "snapshot"] {
            assert!(valid_update_channel(channel), "{channel}");
        }
        assert!(!valid_update_channel("beta"));
        assert!(!valid_update_channel(""));
    }

    #[test]
    fn invalid_stored_values_fall_back() {
        let settings = Settings {
            locale: Some("fr-FR".into()),
            update_channel: Some("beta".into()),
            ..Settings::default()
        };
        assert_eq!(resolved_locale(&settings), "en-US");
        assert_eq!(resolved_update_channel(&settings), "bolide");
        // valid values survive unchanged
        let settings = Settings {
            locale: Some("vi-VN".into()),
            update_channel: Some("star".into()),
            ..Settings::default()
        };
        assert_eq!(resolved_locale(&settings), "vi-VN");
        assert_eq!(resolved_update_channel(&settings), "star");
    }

    #[tokio::test]
    async fn locale_channel_and_curseforge_round_trip() {
        let path = test_settings_path().await;
        // empty settings file: CurseForge on, default channel, no forced locale
        let settings = load_settings(&path).await;
        assert_eq!(settings.locale, None);
        assert_eq!(settings.update_channel.as_deref(), Some("bolide"));
        assert!(settings.curseforge_enabled);

        let mut settings = settings;
        settings.locale = Some("vi-VN".into());
        settings.update_channel = Some("snapshot".into());
        settings.curseforge_enabled = false;
        save_settings(&path, &settings).await.unwrap();

        let loaded = load_settings(&path).await;
        assert_eq!(resolved_locale(&loaded), "vi-VN");
        assert_eq!(resolved_update_channel(&loaded), "snapshot");
        assert!(!loaded.curseforge_enabled);
    }
}
