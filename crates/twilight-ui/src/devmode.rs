//! App Developer Mode support that is independent of one launch path:
//! bounded launch-provenance records, in-memory phase timings and the
//! redaction helpers used by the Developer tab.
//!
//! Everything here is opt-in. The launch pipeline only calls into this module
//! after it has checked `Settings::dev_mode`; a normal profile therefore never
//! gets a record, a timing or a redacted-looking debug artifact.

use std::path::{Path, PathBuf};
use std::sync::Mutex;
use std::time::{SystemTime, UNIX_EPOCH};

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};

/// Keep the provenance log useful without letting `dev_launches.json` grow
/// without bound.
pub(crate) const MAX_RECORDS: usize = 100;

/// One build launched while Developer Mode (or a Horizon developer flag) was
/// active. Timestamps are Unix seconds so the UI can format them with the
/// active locale.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DevLaunchRecord {
    pub timestamp: u64,
    pub instance_id: String,
    pub engine_or_loader: String,
    pub binary_or_version: String,
    pub flags_used: Vec<String>,
    pub provenance: String,
}

/// Phase durations of the most recent launch, in milliseconds. `total_ms` is
/// the sum of the phases, not the game session length.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct LaunchTimings {
    pub instance_id: String,
    pub preflight_ms: u64,
    pub assets_ms: u64,
    pub natives_ms: u64,
    pub spawn_ms: u64,
    pub total_ms: u64,
}

impl LaunchTimings {
    /// Applies one pipeline phase. Unknown names are ignored so a newer CLI
    /// can add phases without breaking an older UI.
    pub(crate) fn apply_phase(&mut self, phase: &str, ms: u64) {
        match phase {
            "preflight" => self.preflight_ms = ms,
            "assets" => self.assets_ms = ms,
            "natives" => self.natives_ms = ms,
            "spawn" => self.spawn_ms = ms,
            _ => return,
        }
        self.total_ms = self
            .preflight_ms
            .saturating_add(self.assets_ms)
            .saturating_add(self.natives_ms)
            .saturating_add(self.spawn_ms);
    }
}

static LAST_TIMINGS: Mutex<Option<LaunchTimings>> = Mutex::new(None);

pub(crate) fn reset_timings(instance_id: &str) {
    if let Ok(mut guard) = LAST_TIMINGS.lock() {
        *guard = Some(LaunchTimings {
            instance_id: instance_id.to_owned(),
            ..LaunchTimings::default()
        });
    }
}

pub(crate) fn record_phase(instance_id: &str, phase: &str, ms: u64) {
    let Ok(mut guard) = LAST_TIMINGS.lock() else {
        return;
    };
    let timings = guard.get_or_insert_with(|| LaunchTimings {
        instance_id: instance_id.to_owned(),
        ..LaunchTimings::default()
    });
    if timings.instance_id != instance_id {
        *timings = LaunchTimings {
            instance_id: instance_id.to_owned(),
            ..LaunchTimings::default()
        };
    }
    timings.apply_phase(phase, ms);
}

pub(crate) fn last_timings() -> Option<LaunchTimings> {
    LAST_TIMINGS.lock().ok().and_then(|guard| guard.clone())
}

pub(crate) fn now_unix() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_secs())
        .unwrap_or_default()
}

fn parse_records(text: &str) -> Vec<DevLaunchRecord> {
    serde_json::from_str(text).unwrap_or_default()
}

pub(crate) fn push_bounded(records: &mut Vec<DevLaunchRecord>, record: DevLaunchRecord) {
    records.push(record);
    if records.len() > MAX_RECORDS {
        let excess = records.len() - MAX_RECORDS;
        records.drain(0..excess);
    }
}

async fn records_path(app: &AppHandle) -> Result<PathBuf, String> {
    let dir = app
        .path()
        .app_data_dir()
        .map_err(|error| error.to_string())?;
    tokio::fs::create_dir_all(&dir)
        .await
        .map_err(|error| error.to_string())?;
    Ok(dir.join("dev_launches.json"))
}

async fn read_records(path: &Path) -> Vec<DevLaunchRecord> {
    match tokio::fs::read_to_string(path).await {
        Ok(text) => parse_records(&text),
        Err(_) => Vec::new(),
    }
}

async fn write_records(path: &Path, records: &[DevLaunchRecord]) -> Result<(), String> {
    let json = serde_json::to_string_pretty(records).map_err(|error| error.to_string())?;
    tokio::fs::write(path, json)
        .await
        .map_err(|error| error.to_string())
}

/// Appends one record and trims the log to [`MAX_RECORDS`]. A broken log file
/// is treated as empty rather than making every launch fail.
pub(crate) async fn record_launch(app: &AppHandle, record: DevLaunchRecord) -> Result<(), String> {
    let path = records_path(app).await?;
    let mut records = read_records(&path).await;
    push_bounded(&mut records, record);
    write_records(&path, &records).await
}

#[tauri::command]
pub async fn list_dev_launch_records(app: AppHandle) -> Result<Vec<DevLaunchRecord>, String> {
    let path = records_path(&app).await?;
    Ok(read_records(&path).await)
}

#[tauri::command]
pub async fn clear_dev_launch_records(app: AppHandle) -> Result<(), String> {
    let path = records_path(&app).await?;
    write_records(&path, &[]).await
}

fn sensitive_arg(name: &str) -> bool {
    let name = name
        .trim_start_matches('-')
        .to_ascii_lowercase()
        .replace('-', "_");
    name == "accesstoken"
        || name == "access_token"
        || name == "clienttoken"
        || name == "client_token"
        || name == "session"
        || name == "apikey"
        || name == "api_key"
        || name == "curseforge_api_key"
        || name.contains("secret")
        || name.contains("password")
}

/// Masks session-token values in an assembled command line. Whitespace and
/// quoting are preserved exactly, because quoted paths often contain spaces.
pub(crate) fn redact_launch_command(command: &str) -> String {
    let mut out = String::with_capacity(command.len());
    let mut mask_next = false;
    for token in command.split_inclusive(char::is_whitespace) {
        let core = token.trim_end_matches(char::is_whitespace);
        let whitespace = &token[core.len()..];
        if mask_next {
            out.push_str("********");
            out.push_str(whitespace);
            mask_next = false;
            continue;
        }
        if sensitive_arg(core) {
            out.push_str(core);
            out.push_str(whitespace);
            mask_next = true;
        } else if let Some(equals) = core.find('=') {
            if sensitive_arg(&core[..equals]) {
                out.push_str(&core[..=equals]);
                out.push_str("********");
                out.push_str(whitespace);
            } else {
                out.push_str(token);
            }
        } else {
            out.push_str(token);
        }
    }
    out
}

fn sensitive_key(key: &str) -> bool {
    let key = key.to_ascii_lowercase().replace('-', "_");
    key.contains("api_key")
        || key.contains("apikey")
        || key.contains("token")
        || key.contains("secret")
        || key.contains("password")
}

fn empty_value(value: &serde_json::Value) -> bool {
    value.is_null() || value.as_str().is_some_and(|text| text.trim().is_empty())
}

fn redact_value(value: &mut serde_json::Value) {
    match value {
        serde_json::Value::Object(map) => {
            for (key, child) in map.iter_mut() {
                if sensitive_key(key) && !empty_value(child) {
                    *child = serde_json::Value::String("********".to_owned());
                } else {
                    redact_value(child);
                }
            }
        }
        serde_json::Value::Array(items) => {
            for item in items {
                redact_value(item);
            }
        }
        _ => {}
    }
}

fn redact_config_line(line: &str) -> String {
    let Some(colon) = line.find(':') else {
        return line.to_owned();
    };
    let key = line[..colon].trim().trim_matches('"');
    if !sensitive_key(key) {
        return line.to_owned();
    }
    let value = &line[colon + 1..];
    let trimmed = value.trim_end();
    let suffix = &value[trimmed.len()..];
    format!("{} \"********\"{}", &line[..=colon], suffix)
}

/// Returns the raw settings JSON with API keys/tokens/secrets masked. Parsing
/// keeps the output valid JSON; a malformed file falls back to a line scan.
pub(crate) fn redact_settings_json(text: &str) -> String {
    match serde_json::from_str::<serde_json::Value>(text) {
        Ok(mut value) => {
            redact_value(&mut value);
            serde_json::to_string_pretty(&value).unwrap_or_else(|_| text.to_owned())
        }
        Err(_) => text
            .lines()
            .map(redact_config_line)
            .collect::<Vec<_>>()
            .join("\n"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn record(index: u64) -> DevLaunchRecord {
        DevLaunchRecord {
            timestamp: 1_700_000_000 + index,
            instance_id: format!("instance-{index}"),
            engine_or_loader: "fabric".to_owned(),
            binary_or_version: "Minecraft 1.21.4".to_owned(),
            flags_used: vec!["JDWP".to_owned()],
            provenance: "official-with-dev-flags".to_owned(),
        }
    }

    #[test]
    fn records_round_trip_through_camel_case_json() {
        let serialized = serde_json::to_string(&record(1)).unwrap();
        assert!(serialized.contains("\"instanceId\""));
        assert!(serialized.contains("\"flagsUsed\""));
        let parsed: DevLaunchRecord = serde_json::from_str(&serialized).unwrap();
        assert_eq!(parsed, record(1));
    }

    #[test]
    fn retention_keeps_only_the_newest_records() {
        let mut records = Vec::new();
        for index in 0..(MAX_RECORDS as u64 + 3) {
            push_bounded(&mut records, record(index));
        }
        assert_eq!(records.len(), MAX_RECORDS);
        assert_eq!(records.first(), Some(&record(3)));
        assert_eq!(records.last(), Some(&record(MAX_RECORDS as u64 + 2)));
    }

    #[test]
    fn phase_timings_sum_the_pipeline_stages() {
        let mut timings = LaunchTimings::default();
        timings.apply_phase("preflight", 12);
        timings.apply_phase("assets", 30);
        timings.apply_phase("natives", 8);
        timings.apply_phase("spawn", 40);
        timings.apply_phase("unknown", 999);
        assert_eq!(timings.preflight_ms, 12);
        assert_eq!(timings.assets_ms, 30);
        assert_eq!(timings.natives_ms, 8);
        assert_eq!(timings.spawn_ms, 40);
        assert_eq!(timings.total_ms, 90);
    }

    #[test]
    fn command_redaction_preserves_quoted_paths_and_hides_tokens() {
        let command = r#""C:\Program Files\Java\bin\java.exe" -cp "a b" --accessToken token-value --clientToken=other-value --version 1.21"#;
        let redacted = redact_launch_command(command);
        assert!(!redacted.contains("token-value"));
        assert!(!redacted.contains("other-value"));
        assert!(redacted.contains(r#""C:\Program Files\Java\bin\java.exe""#));
        assert!(redacted.contains(r#""a b""#));
        assert!(redacted.contains("--accessToken ********"));
        assert!(redacted.contains("--clientToken=********"));
        assert!(redacted.contains("--version 1.21"));
    }

    #[test]
    fn config_redaction_hides_keys_and_is_valid_json() {
        let text = r#"{
  "curseforge_api_key": "cf-secret",
  "active_account": "Alex",
  "nested": { "refresh_token": "token", "empty_key": "" },
  "list": [{ "password": "hunter2" }]
}"#;
        let redacted = redact_settings_json(text);
        assert!(!redacted.contains("cf-secret"));
        assert!(!redacted.contains("\"token\""));
        assert!(!redacted.contains("hunter2"));
        assert!(redacted.contains("\"active_account\": \"Alex\""));
        let parsed: serde_json::Value = serde_json::from_str(&redacted).unwrap();
        assert_eq!(parsed["nested"]["empty_key"], "");
    }

    #[test]
    fn malformed_config_falls_back_to_line_redaction() {
        let redacted =
            redact_settings_json("curseforge_api_key: cf-secret\nactive_account: Alex\n");
        assert!(!redacted.contains("cf-secret"));
        assert!(redacted.contains("active_account: Alex"));
    }
}
