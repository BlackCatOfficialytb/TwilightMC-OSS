//! Best-effort discovery of a local Horizon build and its Launch API.
//!
//! Nothing here compiles, links or vendors Horizon. A binary the player
//! installed (or TwilightMC downloaded) is asked `--launch-api`; its JSON
//! tells the launcher which options that build promises and which Minecraft
//! version its resources must target. Older builds that cannot answer are
//! still usable: the probe reports the failure instead of blocking the launch.

use std::path::{Path, PathBuf};

use serde_json::Value;

use crate::error::HorizonError;

/// One `--launch-api` reply, reduced to the fields a launcher acts on.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct LaunchApiInfo {
    pub launch_api: String,
    pub horizon: Option<String>,
    pub minecraft: Option<String>,
    /// Option names the build promises (`{"name": "--resources", ...}`).
    pub options: Vec<String>,
    /// The complete JSON object, for diagnostics.
    pub raw: String,
}

impl LaunchApiInfo {
    /// Whether the build advertises a flag. A build with an empty list is old;
    /// callers then fall back to documented defaults rather than refusing.
    pub fn supports(&self, option: &str) -> bool {
        self.options.is_empty() || self.options.iter().any(|name| name == option)
    }
}

/// Runs `<binary> --launch-api` with a short deadline and parses its reply.
pub async fn probe_launch_api(binary: &Path) -> Result<LaunchApiInfo, HorizonError> {
    if !binary.is_file() {
        return Err(HorizonError::Probe(format!(
            "{} does not exist",
            binary.display()
        )));
    }
    let mut command = tokio::process::Command::new(binary);
    command
        .arg("--launch-api")
        .stdin(std::process::Stdio::null())
        .kill_on_drop(true);
    let output = tokio::time::timeout(std::time::Duration::from_secs(10), command.output())
        .await
        .map_err(|_| HorizonError::Probe("--launch-api timed out".to_owned()))?
        .map_err(|e| HorizonError::Probe(format!("{}: {e}", binary.display())))?;
    if !output.status.success() {
        return Err(HorizonError::Probe(format!(
            "{} --launch-api exited with {}: {}",
            binary.display(),
            output.status,
            String::from_utf8_lossy(&output.stderr).trim()
        )));
    }
    parse_reply(&String::from_utf8_lossy(&output.stdout))
}

fn parse_reply(raw: &str) -> Result<LaunchApiInfo, HorizonError> {
    let value: Value = serde_json::from_str(raw.trim())
        .map_err(|e| HorizonError::Probe(format!("invalid Launch API JSON: {e}")))?;
    let text = |key: &str| {
        value
            .get(key)
            .and_then(Value::as_str)
            .filter(|text| !text.is_empty())
            .map(str::to_owned)
    };
    let launch_api = text("launch_api")
        .ok_or_else(|| HorizonError::Probe("the reply has no launch_api version".to_owned()))?;
    let options = value
        .get("options")
        .and_then(Value::as_array)
        .map(|options| {
            options
                .iter()
                .filter_map(|option| option.get("name").and_then(Value::as_str))
                .map(str::to_owned)
                .collect()
        })
        .unwrap_or_default();
    Ok(LaunchApiInfo {
        launch_api,
        horizon: text("horizon"),
        minecraft: text("minecraft"),
        options,
        raw: raw.trim().to_owned(),
    })
}

/// Every plausible native-client binary, best candidates first: explicit
/// environment overrides, the launcher's own folder, then `PATH`.
pub fn discover_client_binaries() -> Vec<PathBuf> {
    let names: &[&str] = if cfg!(windows) {
        &["horizon-client.exe", "horizon-client"]
    } else {
        &["horizon-client"]
    };
    discover(names, &["TWILIGHTMC_HORIZON", "HORIZON_CLIENT"])
}

/// Every plausible `horizon-prepare` binary, for the `--check`/repair path.
pub fn discover_prepare_binaries() -> Vec<PathBuf> {
    let names: &[&str] = if cfg!(windows) {
        &["horizon-prepare.exe", "horizon-prepare"]
    } else {
        &["horizon-prepare"]
    };
    discover(names, &["TWILIGHTMC_HORIZON_PREPARE", "HORIZON_PREPARE"])
}

fn discover(names: &[&str], variables: &[&str]) -> Vec<PathBuf> {
    let mut found = Vec::new();
    for variable in variables {
        if let Some(value) = std::env::var_os(variable) {
            let path = PathBuf::from(value);
            if path.is_file() {
                found.push(path);
            }
        }
    }
    if let Ok(current) = std::env::current_exe()
        && let Some(dir) = current.parent()
    {
        for name in names {
            let path = dir.join(name);
            if path.is_file() {
                found.push(path);
            }
        }
    }
    if let Some(paths) = std::env::var_os("PATH") {
        for dir in std::env::split_paths(&paths) {
            for name in names {
                let path = dir.join(name);
                if path.is_file() {
                    found.push(path);
                }
            }
        }
    }
    found.sort_by_key(|path| {
        let text = path.to_string_lossy().to_ascii_lowercase();
        (!text.contains("horizon"), text)
    });
    found.dedup();
    found
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_the_documented_reply_and_tolerates_unknown_fields() {
        let reply = parse_reply(
            r#"{
                "launch_api": "0.1.1",
                "horizon": "2026.10.13",
                "minecraft": "26.3",
                "content": {"mods": true},
                "options": [
                    {"name": "--resources", "value": "PATH"},
                    {"name": "--game-dir", "value": "DIR"},
                    {"name": "--session-stdin", "value": null}
                ]
            }"#,
        )
        .unwrap();
        assert_eq!(reply.launch_api, "0.1.1");
        assert_eq!(reply.horizon.as_deref(), Some("2026.10.13"));
        assert_eq!(reply.minecraft.as_deref(), Some("26.3"));
        assert_eq!(
            reply.options,
            ["--resources", "--game-dir", "--session-stdin"]
        );
        assert!(reply.supports("--resources"));
        assert!(!reply.supports("--assets"));
    }

    #[test]
    fn rejects_replies_without_a_launch_api_version() {
        assert!(parse_reply(r#"{"horizon": "x"}"#).is_err());
        assert!(parse_reply("not json").is_err());
    }

    #[test]
    fn an_empty_option_list_means_fall_back_to_documented_defaults() {
        let reply = parse_reply(r#"{"launch_api": "0.1.0"}"#).unwrap();
        assert!(reply.options.is_empty());
        assert!(reply.supports("--whatever"));
    }

    #[tokio::test]
    async fn a_missing_binary_is_reported_without_starting_it() {
        let error = probe_launch_api(Path::new("definitely-not-a-horizon-binary")).await;
        assert!(matches!(error, Err(HorizonError::Probe(_))));
    }
}
