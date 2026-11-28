//! Manual, channel-aware update check against the project's GitHub releases.
//!
//! Strictly on click: every request in this module is reached through
//! [`check_for_updates`]. There are no background loops, timers or setup
//! hooks, and nothing is fetched until the user asks for it.

use std::cmp::Ordering;

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

/// Channel → accepted release-tag families (VERSION.md §2).
#[derive(Clone, Copy, PartialEq, Eq)]
enum UpdateChannel {
    Stable,
    Star,
    Bolide,
    Snapshot,
}

impl UpdateChannel {
    fn parse(channel: &str) -> Result<Self, String> {
        match channel {
            "stable" => Ok(Self::Stable),
            "star" => Ok(Self::Star),
            "bolide" => Ok(Self::Bolide),
            "snapshot" => Ok(Self::Snapshot),
            other => Err(format!(
                "unsupported update channel {other:?}; expected stable, star, bolide or snapshot"
            )),
        }
    }
}

/// PEP 440-style stage ranking for the same `X.Y.Z` milestone. Snapshots are
/// built from the in-development milestone, so they rank below its alphas.
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
enum ReleaseStage {
    Snapshot,
    Alpha,
    Beta,
    Stable,
}

/// One parsed release identity. Ordering mirrors VERSION.md §3:
/// `X.Y.Z` first, then stage (Stable > Star > Bolide > Snapshot), then the
/// build number or snapshot date/commit.
#[derive(Debug, Clone, PartialEq, Eq)]
struct ReleaseVersion {
    nums: [u64; 3],
    stage: ReleaseStage,
    build: u64,
    snapshot_date: Option<u32>,
    snapshot_commit: String,
}

impl ReleaseVersion {
    fn new(nums: [u64; 3], stage: ReleaseStage, build: u64) -> Self {
        Self {
            nums,
            stage,
            build,
            snapshot_date: None,
            snapshot_commit: String::new(),
        }
    }
}

impl Ord for ReleaseVersion {
    fn cmp(&self, other: &Self) -> Ordering {
        self.nums
            .cmp(&other.nums)
            .then_with(|| self.stage.cmp(&other.stage))
            .then_with(|| self.build.cmp(&other.build))
            .then_with(|| self.snapshot_date.cmp(&other.snapshot_date))
            .then_with(|| self.snapshot_commit.cmp(&other.snapshot_commit))
    }
}

impl PartialOrd for ReleaseVersion {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

/// Splits `X.Y.Z` from an arbitrary suffix. Returns `None` unless all three
/// numeric components are present.
fn split_triple(text: &str) -> Option<([u64; 3], &str)> {
    let mut nums = [0u64; 3];
    let mut rest = text;
    for (index, slot) in nums.iter_mut().enumerate() {
        let end = rest
            .find(|c: char| !c.is_ascii_digit())
            .unwrap_or(rest.len());
        if end == 0 {
            return None;
        }
        *slot = rest[..end].parse().ok()?;
        rest = &rest[end..];
        if index < 2 {
            rest = rest.strip_prefix('.')?;
        }
    }
    Some((nums, rest))
}

/// `vX.Y.ZaN` (Bolide) or `vX.Y.ZbN` (Star).
fn parse_compact(tag: &str, marker: char, stage: ReleaseStage) -> Option<ReleaseVersion> {
    let text = tag.strip_prefix('v')?;
    let (nums, rest) = split_triple(text)?;
    let build = rest.strip_prefix(marker)?;
    if build.is_empty() || !build.bytes().all(|b| b.is_ascii_digit()) {
        return None;
    }
    Some(ReleaseVersion::new(nums, stage, build.parse().ok()?))
}

/// Legacy `alpha-vX.Y.Z[-bN]` / `beta-vX.Y.Z[-bN]`.
fn parse_legacy(tag: &str, prefix: &str, stage: ReleaseStage) -> Option<ReleaseVersion> {
    let text = tag.strip_prefix(prefix)?;
    let (nums, rest) = split_triple(text)?;
    let build = if rest.is_empty() {
        0
    } else {
        let digits = rest.strip_prefix("-b")?;
        if digits.is_empty() || !digits.bytes().all(|b| b.is_ascii_digit()) {
            return None;
        }
        digits.parse().ok()?
    };
    Some(ReleaseVersion::new(nums, stage, build))
}

/// Plain `vX.Y.Z` Stable tag; snapshot/alpha/beta suffixes are rejected.
fn parse_stable(tag: &str) -> Option<ReleaseVersion> {
    let text = tag.strip_prefix('v')?;
    let (nums, rest) = split_triple(text)?;
    rest.is_empty()
        .then(|| ReleaseVersion::new(nums, ReleaseStage::Stable, 0))
}

/// Snapshot identity `vX.Y.Z-ddmmyyyy-<commit>` (the leading `v` is optional
/// because release titles spell the version without it).
fn parse_snapshot(text: &str) -> Option<ReleaseVersion> {
    let text = text.strip_prefix('v').unwrap_or(text);
    let (nums, rest) = split_triple(text)?;
    let rest = rest.strip_prefix('-')?;
    let (date, commit) = rest.split_once('-')?;
    if date.len() != 8
        || !date.bytes().all(|b| b.is_ascii_digit())
        || commit.len() < 7
        || !commit.bytes().all(|b| b.is_ascii_hexdigit())
    {
        return None;
    }
    let mut version = ReleaseVersion::new(nums, ReleaseStage::Snapshot, 0);
    version.snapshot_date = Some(date.parse().ok()?);
    version.snapshot_commit = commit.to_owned();
    Some(version)
}

/// Recovers the version carried in a release title, used only for the rolling
/// `snapshot` tag (the tag itself holds no version information). Titles wrap
/// the version in punctuation: `TwilightMC Bolide (v1.2.3a1)`.
fn version_from_title(title: &str) -> Option<String> {
    for word in title.split_whitespace() {
        let token = word.trim_matches(|c: char| !c.is_ascii_alphanumeric() && c != '.' && c != '-');
        let version = token
            .strip_prefix("beta-v")
            .or_else(|| token.strip_prefix("alpha-v"))
            .or_else(|| token.strip_prefix('v'));
        if let Some(version) = version
            && version.starts_with(|c: char| c.is_ascii_digit())
        {
            return Some(version.to_owned());
        }
    }
    None
}

/// Channel-specific tag acceptance. Other channels' tags are rejected so a
/// Stable release never masquerades as a Bolide update.
fn release_version(
    channel: UpdateChannel,
    tag: &str,
    name: Option<&str>,
) -> Option<ReleaseVersion> {
    match channel {
        UpdateChannel::Stable => parse_stable(tag),
        UpdateChannel::Star => parse_compact(tag, 'b', ReleaseStage::Beta)
            .or_else(|| parse_legacy(tag, "beta-v", ReleaseStage::Beta)),
        UpdateChannel::Bolide => parse_compact(tag, 'a', ReleaseStage::Alpha)
            .or_else(|| parse_legacy(tag, "alpha-v", ReleaseStage::Alpha)),
        UpdateChannel::Snapshot => {
            if tag == "snapshot" {
                name.and_then(version_from_title)
                    .and_then(|v| parse_snapshot(&v))
            } else {
                parse_snapshot(tag)
            }
        }
    }
}

/// Interprets the running `CARGO_PKG_VERSION` (plain `X.Y.Z`, possibly with a
/// compact suffix during development) for comparison with release tags.
fn parse_current_version(text: &str) -> ReleaseVersion {
    let text = text.strip_prefix('v').unwrap_or(text);
    let (nums, rest) = split_triple(text).unwrap_or(([0, 0, 0], ""));
    let (stage, build) = if let Some(build) = rest.strip_prefix('a') {
        (ReleaseStage::Alpha, build.parse().unwrap_or(0))
    } else if let Some(build) = rest.strip_prefix('b') {
        (ReleaseStage::Beta, build.parse().unwrap_or(0))
    } else if let Some(build) = rest.strip_prefix("-b") {
        (ReleaseStage::Beta, build.parse().unwrap_or(0))
    } else {
        (ReleaseStage::Stable, 0)
    };
    ReleaseVersion::new(nums, stage, build)
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
    let channel = UpdateChannel::parse(channel)?;
    let current_version = parse_current_version(current);
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

    let mut best: Option<(&GitHubRelease, ReleaseVersion)> = None;
    for release in &releases {
        if release.draft {
            continue;
        }
        let version = match release_version(channel, &release.tag_name, release.name.as_deref()) {
            Some(version) => version,
            // A rolling snapshot tag is rebuilt in place; if neither tag nor
            // title carries a version, we cannot claim an update.
            None if release.tag_name == "snapshot" => current_version.clone(),
            None => continue,
        };
        let replace = match &best {
            Some((_, best_version)) => version.cmp(best_version) == Ordering::Greater,
            None => true,
        };
        if replace {
            best = Some((release, version));
        }
    }
    let (release, latest_version) = best.ok_or_else(|| {
        format!(
            "no {} release found in the 30 most recent GitHub releases",
            channel_name(channel)
        )
    })?;

    Ok(UpdateInfo {
        channel: channel_name(channel).to_owned(),
        current_version: current.to_owned(),
        latest_tag: release.tag_name.clone(),
        is_newer: latest_version.cmp(&current_version) == Ordering::Greater,
        release_notes: notes_summary(release.body.as_deref().unwrap_or_default()),
        release_url: release.html_url.clone(),
        checksums_note: CHECKSUMS_NOTE.to_owned(),
    })
}

fn channel_name(channel: UpdateChannel) -> &'static str {
    match channel {
        UpdateChannel::Stable => "stable",
        UpdateChannel::Star => "star",
        UpdateChannel::Bolide => "bolide",
        UpdateChannel::Snapshot => "snapshot",
    }
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
    async fn compact_pep440_tags_are_parsed_per_channel() {
        let client = reqwest::Client::new();

        let (api, _rx) = loopback(releases_json(&[release(
            "v0.7.2a1",
            "compact bolide",
            "https://x/v0.7.2a1",
        )]));
        let info = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "v0.7.2a1");
        assert!(info.is_newer);

        // Bolide builds of the current milestone still rank below the release.
        let (api, _rx) = loopback(releases_json(&[release(
            "v0.7.1a9",
            "same milestone",
            "https://x/v0.7.1a9",
        )]));
        let info = check_for_updates_core(&client, &api, "bolide", "0.7.1")
            .await
            .unwrap();
        assert!(!info.is_newer);

        let (api, _rx) = loopback(releases_json(&[release(
            "v0.7.1b1",
            "compact star",
            "https://x/v0.7.1b1",
        )]));
        let info = check_for_updates_core(&client, &api, "star", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "v0.7.1b1");
        assert!(!info.is_newer);

        // Compact alpha/beta tags are not Stable releases.
        let (api, _rx) = loopback(releases_json(&[
            release("v0.8.0a1", "wrong channel", "https://x/v0.8.0a1"),
            release("v0.8.0b1", "wrong channel", "https://x/v0.8.0b1"),
            release("v0.7.2", "stable", "https://x/v0.7.2"),
        ]));
        let info = check_for_updates_core(&client, &api, "stable", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "v0.7.2");
        assert!(info.is_newer);
    }

    #[test]
    fn compact_build_numbers_sort_numerically() {
        let alpha9 = parse_compact("v0.7.2a9", 'a', ReleaseStage::Alpha).unwrap();
        let alpha10 = parse_compact("v0.7.2a10", 'a', ReleaseStage::Alpha).unwrap();
        let beta1 = parse_compact("v0.7.2b1", 'b', ReleaseStage::Beta).unwrap();
        let stable = parse_stable("v0.7.2").unwrap();
        assert!(alpha9 < alpha10);
        assert!(alpha10 < beta1);
        assert!(beta1 < stable);
        assert_eq!(
            parse_compact("v0.7.2", 'a', ReleaseStage::Alpha),
            None,
            "a compact tag must carry its build number"
        );
    }

    #[tokio::test]
    async fn snapshot_style_tag_is_accepted_without_the_rolling_tag() {
        let (api, _rx) = loopback(releases_json(&[release(
            "v0.7.2-25112026-6c2d471",
            "tagged snapshot",
            "https://x/snapshot",
        )]));
        let info = check_for_updates_core(&reqwest::Client::new(), &api, "snapshot", "0.7.1")
            .await
            .unwrap();
        assert_eq!(info.latest_tag, "v0.7.2-25112026-6c2d471");
        assert!(info.is_newer);
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
