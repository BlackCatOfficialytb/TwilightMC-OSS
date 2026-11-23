// IPC bridge for launcher preferences: theme selection, java override and
// the -Xms/-Xmx memory allocation, all persisted in `settings.json`.

use serde::{Deserialize, Serialize};
use tauri::AppHandle;

use crate::accounts::{load_settings, save_settings, settings_path};

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
    pub jdwp_enabled: bool,
    pub jdwp_port: u16,
    pub mixin_debug: bool,
}

#[tauri::command]
pub async fn get_dev_settings(app: AppHandle) -> Result<DevSettings, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    Ok(DevSettings {
        dev_mode: settings.dev_mode,
        jdwp_enabled: settings.jdwp_enabled,
        jdwp_port: if settings.jdwp_port == 0 {
            5005
        } else {
            settings.jdwp_port
        },
        mixin_debug: settings.mixin_debug,
    })
}

#[tauri::command]
pub async fn set_dev_settings(app: AppHandle, settings: DevSettings) -> Result<(), String> {
    let mut stored = load_settings(&settings_path(&app).await?).await;
    stored.dev_mode = settings.dev_mode;
    stored.jdwp_enabled = settings.jdwp_enabled;
    stored.jdwp_port = if settings.jdwp_port == 0 {
        5005
    } else {
        settings.jdwp_port
    };
    stored.mixin_debug = settings.mixin_debug;
    save_settings(&settings_path(&app).await?, &stored).await
}

/// Raw `twilight_config.json` (`settings.json`) contents for the Developer tab.
#[tauri::command]
pub async fn get_raw_config_json(app: AppHandle) -> Result<String, String> {
    let path = settings_path(&app).await?;
    let bytes = tokio::fs::read(&path).await.map_err(|e| e.to_string())?;
    Ok(String::from_utf8_lossy(&bytes).into_owned())
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
}

#[tauri::command]
pub async fn get_dev_diagnostics(app: AppHandle) -> Result<DevDiagnostics, String> {
    let cas_root = crate::storage::shared_root(&app)
        .await?
        .join("cas")
        .to_string_lossy()
        .into_owned();
    Ok(DevDiagnostics {
        unprivileged_symlinks: probe_unprivileged_symlinks(),
        cas_root,
        link_strategy: "hardlink → NTFS junction → symlink → copy",
    })
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
