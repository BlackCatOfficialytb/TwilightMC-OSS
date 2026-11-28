//! Manual, channel-aware update check against the project's GitHub releases.
//!
//! Strictly on click: every request in this module is reached through
//! [`check_for_updates`]. There are no background loops, timers or setup
//! hooks, and nothing is fetched until the user asks for it.

use std::cmp::Ordering;

use twilight_server::engine::compare_versions;

/// GitHub API repository root; the UI opens `html_url`, never a guessed URL.
const API_BASE: &str = "https://api.github.com/repos/BlackCatOfficialytb/TwilightMC-OSS";

/// Every published build is unsigned, so the published digest is the only
/// integrity check the user has before running an archive.
const CHECKSUMS_NOTE: &str = "Binaries are unsigned. Verify the downloaded archive against checksums.sha256 before running (sha256sum -c or Get-FileHash).";

/// What the Settings → About & Updates panel shows for one channel.
#[derive(Debug, Clone, PartialEq, serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct UpdateInfo {
    pub channel: String,
    pub current_version: String,
    pub latest_tag: String,
    pub is_newer: bool,
    pub release_notes: String,
    pub release_url: String,
    pub checksums_note: String,
}

/// The subset of a GitHub release payload the updater needs.
#[derive(serde::Deserialize)]
struct GitHubRelease {
    tag_name: String,
    #[serde(default)]
    name: Option<String>,
    #[serde(default)]
    body: Option<String>,
    #[serde(default)]
    html_url: String,
    #[serde(default)]
    draft: bool,
}

/// Channel → release-tag prefix from VERSION.md §2.
fn channel_prefix(channel: &str) -> Result<&'static str, String> {
    match channel {
        "stable" => Ok("v"),
        "star" => Ok("beta-v"),
        "bolide" => Ok("alpha-v"),
        "snapshot" => Ok("snapshot"),
        other => Err(format!(
            "unsupported update channel {other:?}; expected stable, star, bolide or snapshot"
        )),
    }
}

/// Snapshot-style tags reuse a milestone triple but add a zero-padded build
/// date and a short commit hash: `vX.Y.Z-ddmmyyyy-<commit>`.
fn is_snapshot_style(tag: &str) -> bool {
    let Some(rest) = tag.strip_prefix('v') else {
        return false;
    };
    let mut parts = rest.split('-');
    let (Some(version), Some(date), Some(commit)) = (parts.next(), parts.next(), parts.next())
    else {
        return false;
    };
    version
        .split('.')
        .all(|part| !part.is_empty() && part.bytes().all(|b| b.is_ascii_digit()))
        && date.len() == 8
        && date.bytes().all(|b| b.is_ascii_digit())
        && commit.len() >= 7
        && commit.bytes().all(|b| b.is_ascii_hexdigit())
}

/// Recovers the version carried in a release title, used only for the rolling
/// `snapshot` tag (the tag itself holds no version information).
fn version_from_title(title: &str) -> Option<String> {
    let token = title.split_whitespace().find(|word| {
        (word.starts_with('v') || word.starts_with("beta-v") || word.starts_with("alpha-v"))
            && word.len() > 1
    })?;
    let version = token
        .strip_prefix("beta-v")
        .or_else(|| token.strip_prefix("alpha-v"))
        .or_else(|| token.strip_prefix('v'))?;
    if version.starts_with(|c: char| c.is_ascii_digit()) {
        Some(version.to_owned())
    } else {
        None
    }
}

/// Strips the channel prefix (or reads the snapshot title) and returns the
/// version string passed to [`compare_versions`]. Other channels' tags are
/// rejected so a Stable release never masquerades as a Bolide update.
fn release_version(prefix: &str, tag: &str, name: Option<&str>) -> Option<String> {
    match prefix {
        "v" => {
            let version = tag.strip_prefix('v')?;
            if is_snapshot_style(tag) || !version.starts_with(|c: char| c.is_ascii_digit()) {
                return None;
            }
            Some(version.to_owned())
        }
        "beta-v" | "alpha-v" => {
            let version = tag.strip_prefix(prefix)?;
            if version.starts_with(|c: char| c.is_ascii_digit()) {
                Some(version.to_owned())
            } else {
                None
            }
        }
        "snapshot" => {
            if tag == "snapshot" {
                name.and_then(version_from_title)
            } else if is_snapshot_style(tag) {
                Some(tag.strip_prefix('v')?.to_owned())
            } else {
                None
            }
        }
        _ => None,
    }
}

/// Newline-normalized, bounded release-notes excerpt (characters, not bytes).
fn notes_summary(body: &str) -> String {
    body.replace("\r\n", "\n")
        .replace('\r', "\n")
        .chars()
        .take(600)
        .collect()
}

/// Fetches and selects the newest release for `channel`, comparing versions
/// ourselves instead of trusting the API's ordering. `api_base` is the GitHub
/// API repository root, so tests can point this at a loopback server.
pub(crate) async fn check_for_updates_core(
    client: &reqwest::Client,
    api_base: &str,
    channel: &str,
    current: &str,
) -> Result<UpdateInfo, String> {
    let prefix = channel_prefix(channel)?;
    let current_version = current.strip_prefix('v').unwrap_or(current);
    let url = format!("{}/releases?per_page=30", api_base.trim_end_matches('/'));

    let response = client
        .get(&url)
        .header(reqwest::header::ACCEPT, "application/vnd.github+json")
        .send()
        .await
        .map_err(|e| format!("failed to query GitHub releases: {e}"))?;
    let status = response.status();
    let raw = response
        .text()
        .await
        .map_err(|e| format!("failed to read GitHub releases response: {e}"))?;
    if !status.is_success() {
        let excerpt: String = raw.chars().take(200).collect();
        return Err(format!("GitHub returned {status} for {url}: {excerpt}"));
    }
    let releases: Vec<GitHubRelease> = serde_json::from_str(&raw)
        .map_err(|e| format!("invalid GitHub releases response from {url}: {e}"))?;

    let mut best: Option<(&GitHubRelease, String)> = None;
    for release in &releases {
        if release.draft {
            continue;
        }
        let version = match release_version(prefix, &release.tag_name, release.name.as_deref()) {
            Some(version) => version,
            // A rolling snapshot tag is rebuilt in place; if neither tag nor
            // title carries a version, we cannot claim an update.
            None if release.tag_name == "snapshot" => current_version.to_owned(),
            None => continue,
        };
        let replace = match &best {
            Some((_, best_version)) => {
                compare_versions(&version, best_version) == Ordering::Greater
            }
            None => true,
        };
        if replace {
            best = Some((release, version));
        }
    }
    let (release, latest_version) = best.ok_or_else(|| {
        format!("no {channel} release found in the 30 most recent GitHub releases")
    })?;

    Ok(UpdateInfo {
        channel: channel.to_owned(),
        current_version: current.to_owned(),
        latest_tag: release.tag_name.clone(),
        is_newer: compare_versions(&latest_version, current_version) == Ordering::Greater,
        release_notes: notes_summary(release.body.as_deref().unwrap_or_default()),
        release_url: release.html_url.clone(),
        checksums_note: CHECKSUMS_NOTE.to_owned(),
    })
}

/// Invoked only by the Settings → Check for updates button. The shared
/// client supplies the RFC-compliant `TwilightMC/…` User-Agent; the API
/// `Accept` header is set per request in [`check_for_updates_core`].
#[tauri::command]
pub async fn check_for_updates(channel: String) -> Result<UpdateInfo, String> {
    let client = twilight_server::headers::api_client();
    check_for_updates_core(&client, API_BASE, &channel, env!("CARGO_PKG_VERSION")).await
}

#[cfg(test)]
mod tests {
    use serde_json::Value;
    use std::io::{Read, Write};
    use std::net::TcpListener;
    use std::sync::mpsc::{Receiver, Sender, channel};

    use super::*;

    /// One-shot loopback GitHub API: answers `/releases?...` with the canned
    /// body, 404 for any other path, and forwards the raw request so the
    /// caller can assert headers. No real network is touched.
    fn loopback(body: String) -> (String, Receiver<String>) {
        let listener = TcpListener::bind("127.0.0.1:0").unwrap();
        let base = format!("http://{}", listener.local_addr().unwrap());
        let (tx, rx) = channel();
        std::thread::spawn(move || serve_one(listener, tx, body));
        (base, rx)
    }

    fn serve_one(listener: TcpListener, tx: Sender<String>, body: String) {
        let (mut stream, _) = listener.accept().unwrap();
        let mut buf = [0u8; 8192];
        let n = stream.read(&mut buf).unwrap_or(0);
        let request = String::from_utf8_lossy(&buf[..n]).into_owned();
        let path = request
            .split_whitespace()
            .nth(1)
            .unwrap_or_default()
            .split('?')
            .next()
            .unwrap_or_default()
            .to_owned();
        let _ = tx.send(request);
        let (status, payload) = if path == "/releases" {
            ("200 OK", body)
        } else {
            ("404 Not Found", "{\"message\":\"Not Found\"}".to_owned())
        };
        let response = format!(
            "HTTP/1.1 {status}\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{payload}",
            payload.len()
        );
        let _ = stream.write_all(response.as_bytes());
        let _ = stream.flush();
    }

    fn release(tag: &str, body: &str, html_url: &str) -> Value {
        serde_json::json!({
            "tag_name": tag,
            "name": format!("TwilightMC {tag}"),
            "body": body,
            "html_url": html_url,
            "draft": false,
            "prerelease": true,
        })
    }

    fn releases_json(releases: &[Value]) -> String {
        Value::Array(releases.to_vec()).to_string()
    }

    #[tokio::test]
    async fn newer_bolide_tag_is_reported() {
        let (api, rx) = loopback(releases_json(&[release(
            "alpha-v0.7.2",
            "Fixed the thing.\r\nSecond line.",
            "https://github.com/BlackCatOfficialytb/TwilightMC-OSS/releases/tag/alpha-v0.7.2",
        )]));
        let info = check_for_updates_core(&reqwest::Client::new(), &api, "bolide", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.channel, "bolide");
        assert_eq!(info.current_version, "0.7.1");
        assert_eq!(info.latest_tag, "alpha-v0.7.2");
        assert!(info.is_newer);
        assert_eq!(info.release_notes, "Fixed the thing.\nSecond line.");
        assert!(info.release_url.ends_with("/alpha-v0.7.2"));
        assert!(info.checksums_note.contains("checksums.sha256"));

        let req = rx.recv_timeout(std::time::Duration::from_secs(5)).unwrap();
        assert!(req.starts_with("GET /releases?per_page=30 "), "{req}");
        assert!(
            req.to_ascii_lowercase()
                .contains("accept: application/vnd.github+json"),
            "{req}"
        );
    }

    #[tokio::test]
    async fn equal_and_older_tags_are_not_newer() {
        let client = reqwest::Client::new();
        // A newer Stable release must not count as a Bolide update.
        let (api, _rx) = loopback(releases_json(&[
            release("v0.9.0", "wrong channel", "https://x/v0.9.0"),
            release("alpha-v0.7.1", "same milestone", "https://x/equal"),
            release("alpha-v0.6.9", "older", "https://x/older"),
        ]));
        let info = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "alpha-v0.7.1");
        assert!(!info.is_newer);

        let (api, _rx) = loopback(releases_json(&[release(
            "alpha-v0.6.9",
            "older",
            "https://x/older",
        )]));
        let info = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "alpha-v0.6.9");
        assert!(!info.is_newer);
    }

    #[tokio::test]
    async fn prerelease_of_the_current_version_is_not_newer() {
        let (api, _rx) = loopback(releases_json(&[release(
            "beta-v0.7.1-b1",
            "beta polish",
            "https://x/beta-v0.7.1-b1",
        )]));
        let info = check_for_updates_core(&reqwest::Client::new(), &api, "star", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "beta-v0.7.1-b1");
        assert!(!info.is_newer);
    }

    #[tokio::test]
    async fn rolling_snapshot_tag_reads_version_from_title() {
        let body = serde_json::json!([{
            "tag_name": "snapshot",
            "name": "TwilightMC Snapshot v0.7.2-25112026-6c2d471",
            "body": "Nightly build.",
            "html_url": "https://github.com/BlackCatOfficialytb/TwilightMC-OSS/releases/tag/snapshot",
            "draft": false,
        }])
        .to_string();
        let (api, _rx) = loopback(body);
        let info = check_for_updates_core(&reqwest::Client::new(), &api, "snapshot", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "snapshot");
        assert!(info.is_newer);
    }

    #[tokio::test]
    async fn invalid_channel_errors_before_any_request() {
        let err = check_for_updates_core(
            &reqwest::Client::new(),
            "http://127.0.0.1:1",
            "nightly",
            "0.7.1",
        )
        .await
        .unwrap_err();
        assert!(err.contains("nightly"), "{err}");
        assert!(err.contains("stable, star, bolide or snapshot"), "{err}");
    }

    #[tokio::test]
    async fn malformed_responses_error_clearly() {
        let client = reqwest::Client::new();
        let (api, _rx) = loopback("{\"message\":\"Not Found\"}".to_owned());
        let err = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap_err();
        assert!(err.contains("invalid GitHub releases response"), "{err}");

        let (api, _rx) = loopback("{".to_owned());
        let err = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap_err();
        assert!(err.contains("invalid GitHub releases response"), "{err}");

        let (api, _rx) = loopback("[]".to_owned());
        let err = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap_err();
        assert!(err.contains("no bolide release found"), "{err}");
    }
}
