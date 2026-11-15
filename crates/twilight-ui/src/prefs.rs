// IPC bridge for launcher preferences: theme selection, java override and
// the -Xms/-Xmx memory allocation, all persisted in `settings.json`.

use serde::Serialize;
use tauri::AppHandle;

use crate::accounts::{load_settings, save_settings, settings_path};

/// Persisted java/memory allocation shown in the Settings modal.
#[derive(Debug, Clone, Serialize)]
pub struct JavaPrefs {
    /// Explicit java executable; `None` = auto-discovery.
    pub java_path: Option<String>,
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
