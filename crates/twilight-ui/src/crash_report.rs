//! Opt-in, zero-PII crash reporting. Preparation is entirely local; sending
//! happens only after the user has reviewed and explicitly submitted the text.

use std::path::Path;
use std::time::Duration;

use tauri::AppHandle;
use tokio::io::{AsyncReadExt, AsyncSeekExt};

use crate::scrubber::{CrashReportInput, scrub_crash_report};

/// The reviewed report plus whether a prompt should be shown for future exits.
#[derive(Debug, Clone, serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CrashReport {
    pub report: String,
    pub prompted: bool,
}

/// Non-zero exits that were not user-killed are reportable crashes.
pub fn should_prompt_crash_report(exit_code: i32, killed_by_user: bool) -> bool {
    exit_code != 0 && !killed_by_user
}

const MAX_LOG_BYTES: u64 = 4 * 1024 * 1024;
const MAX_MODS: usize = 512;

/// Reads at most the tail of `latest.log`, so a huge or hand-edited log can
/// never make report preparation unbounded.
async fn read_tail_text(path: &Path) -> Option<String> {
    let mut file = tokio::fs::File::open(path).await.ok()?;
    let length = file.metadata().await.ok()?.len();
    file.seek(std::io::SeekFrom::Start(
        length.saturating_sub(MAX_LOG_BYTES),
    ))
    .await
    .ok()?;
    let mut bytes = Vec::new();
    file.take(MAX_LOG_BYTES)
        .read_to_end(&mut bytes)
        .await
        .ok()?;
    Some(String::from_utf8_lossy(&bytes).into_owned())
}

/// Enumerates jar filenames only; the scrubber decides which of them may be
/// named in the report.
async fn list_mod_names(dir: &Path) -> Vec<String> {
    let mut names = Vec::new();
    let Ok(mut entries) = tokio::fs::read_dir(dir).await else {
        return names;
    };
    while let Ok(Some(entry)) = entries.next_entry().await {
        let name = entry.file_name().to_string_lossy().into_owned();
        let lower = name.to_ascii_lowercase();
        if lower.ends_with(".jar") || lower.ends_with(".jar.disabled") {
            names.push(name);
            if names.len() >= MAX_MODS {
                break;
            }
        }
    }
    names.sort();
    names
}

/// Builds a scrubbed, reviewable report. Nothing here touches the network.
/// `tail_lines` is an optional fallback from the live console drawer when
/// `logs/latest.log` is missing or unreadable.
#[tauri::command]
pub async fn prepare_crash_report(
    app: AppHandle,
    instance_id: String,
    exit_code: i32,
    killed_by_user: Option<bool>,
    tail_lines: Option<Vec<String>>,
) -> Result<Option<CrashReport>, String> {
    let killed_by_user = killed_by_user.unwrap_or(false);
    if !should_prompt_crash_report(exit_code, killed_by_user) {
        return Ok(None);
    }
    crate::instances::validate_instance_id(&instance_id)?;

    let settings =
        crate::accounts::load_settings(&crate::accounts::settings_path(&app).await?).await;
    let prompted = settings.crash_prompt_enabled;
    let root = crate::instances::instances_root(&app).await?;
    let instance_dir = root.join(&instance_id);
    let meta = crate::instances::read_meta(&instance_dir).await;

    let logs = crate::instances::instance_subdir(&root, &instance_id, "logs");
    let mut tail_log = read_tail_text(&logs.join("latest.log"))
        .await
        .unwrap_or_default();
    if tail_log.trim().is_empty()
        && let Some(lines) = tail_lines
    {
        tail_log = lines.join("\n");
        if tail_log.len() as u64 > MAX_LOG_BYTES {
            let start = tail_log.len().saturating_sub(MAX_LOG_BYTES as usize);
            tail_log = tail_log[start..].to_owned();
        }
    }
    let mods = crate::instances::instance_subdir(&root, &instance_id, "mods");
    let mod_filenames = list_mod_names(&mods).await;
    let public_mods = crate::provenance::public_mods(&instance_dir);

    let input = CrashReportInput {
        launcher_version: env!("CARGO_PKG_VERSION").to_owned(),
        channel: settings
            .update_channel
            .filter(|channel| !channel.trim().is_empty())
            .unwrap_or_else(|| "unknown".to_owned()),
        os: std::env::consts::OS.to_owned(),
        arch: std::env::consts::ARCH.to_owned(),
        minecraft_version: meta
            .as_ref()
            .map(|meta| meta.version.clone())
            .unwrap_or_else(|| "unknown".to_owned()),
        loader: meta
            .as_ref()
            .and_then(|meta| meta.loader.clone())
            .filter(|loader| !loader.is_empty())
            .unwrap_or_else(|| "vanilla".to_owned()),
        loader_version: meta
            .as_ref()
            .and_then(|meta| meta.loader_version.clone())
            .filter(|version| !version.is_empty())
            .unwrap_or_else(|| "unknown".to_owned()),
        // Settings do not persist a parsed Java major and probing one here
        // would spawn a process, so the field stays unknown.
        java_major: None,
        gc_preset: settings
            .gc_preset
            .filter(|preset| !preset.trim().is_empty())
            .unwrap_or_else(|| "Default".to_owned()),
        tail_log,
        mod_filenames,
        public_mods,
    };

    Ok(Some(CrashReport {
        report: scrub_crash_report(&input),
        prompted,
    }))
}

/// Uploads the exact user-reviewed report. Refuses to run unless reporting is
/// both enabled and configured with an http(s) endpoint; no retries, no
/// background work and no additional fields are sent.
#[tauri::command]
pub async fn send_crash_report(app: AppHandle, report: String) -> Result<(), String> {
    let settings =
        crate::accounts::load_settings(&crate::accounts::settings_path(&app).await?).await;
    if !settings.crash_reporter_enabled {
        return Err("crash reporting is disabled".to_owned());
    }
    let Some(endpoint) = settings.crash_endpoint else {
        return Err("no crash report endpoint configured".to_owned());
    };
    let endpoint = endpoint.trim().to_owned();
    if endpoint.is_empty() {
        return Err("no crash report endpoint configured".to_owned());
    }
    crate::validate_http_url(&endpoint)?;

    let version = env!("CARGO_PKG_VERSION");
    let user_agent = format!("TwilightMC/{version}");
    let client = reqwest::Client::builder()
        .user_agent(user_agent)
        .timeout(Duration::from_secs(10))
        .build()
        .map_err(|e| e.to_string())?;
    let response = client
        .post(endpoint.as_str())
        .json(&serde_json::json!({ "report": report }))
        .send()
        .await
        .map_err(|e| e.to_string())?;
    if !response.status().is_success() {
        let status = response.status().as_u16();
        return Err(format!("crash report upload failed with HTTP {status}"));
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn crash_classification_skips_clean_and_user_killed_exits() {
        assert!(!should_prompt_crash_report(0, false));
        assert!(!should_prompt_crash_report(0, true));
        assert!(!should_prompt_crash_report(1, true));
    }

    #[test]
    fn crash_classification_reports_nonzero_unexpected_exit() {
        assert!(should_prompt_crash_report(1, false));
        assert!(should_prompt_crash_report(-1, false));
    }
}
