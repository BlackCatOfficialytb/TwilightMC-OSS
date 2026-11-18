//! Artifact resolution from the official APIs: Mojang piston-meta (Vanilla),
//! PaperMC Fill v3 (Paper/Velocity), Purpur API, Fabric meta, NeoForge maven
//! and GitHub releases (Pumpkin/Steel + helpers for Connect/AuthMe plugins).

use serde_json::Value;

use crate::ServerSoftware;

// ---- version ordering ----

/// Natural ordering for dotted numeric version ids (older < newer):
/// `1.21.10` > `1.21.9-pre2` and `26.3` > `26.3-rc-3`. Group/snapshot
/// suffixes rank a version below its plain stem, remaining ties fall back
/// to a plain string compare.
pub fn compare_versions(a: &str, b: &str) -> std::cmp::Ordering {
    fn stem(v: &str) -> &str {
        v.split(|c: char| !c.is_ascii_digit() && c != '.')
            .next()
            .unwrap_or("")
    }
    let nums =
        |v: &str| -> Vec<u64> { stem(v).split('.').filter_map(|s| s.parse().ok()).collect() };
    let is_pre = |v: &str| v.len() > stem(v).len();
    nums(a)
        .cmp(&nums(b))
        .then_with(|| is_pre(b).cmp(&is_pre(a)))
        .then_with(|| a.cmp(b))
}

// ---- Vanilla (Mojang piston-meta) ----

/// Vanilla version ids (newest first) from `version_manifest_v2.json`.
pub fn vanilla_version_ids(manifest: &Value) -> Vec<String> {
    manifest
        .get("versions")
        .and_then(Value::as_array)
        .map(|list| {
            list.iter()
                .filter_map(|v| v.get("id").and_then(Value::as_str))
                .map(str::to_owned)
                .collect()
        })
        .unwrap_or_default()
}

/// The manifest entry (`id`, `url`, `sha1`) for one Vanilla version.
pub fn vanilla_entry(manifest: &Value, version: &str) -> Option<(String, String, Option<String>)> {
    manifest
        .get("versions")?
        .as_array()?
        .iter()
        .find(|v| v.get("id").and_then(Value::as_str) == Some(version))
        .map(|v| {
            (
                version.to_owned(),
                v.get("url")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
                v.get("sha1").and_then(Value::as_str).map(str::to_owned),
            )
        })
}

/// The server-jar download (`url`, `sha1`) from one Vanilla version JSON.
pub fn vanilla_server_download(version_json: &Value) -> Option<(String, Option<String>)> {
    let dl = version_json.get("downloads")?.get("server")?;
    Some((
        dl.get("url")?.as_str()?.to_owned(),
        dl.get("sha1").and_then(Value::as_str).map(str::to_owned),
    ))
}

// ---- PaperMC Fill v3 (Paper / Velocity) ----

/// Fill v3 project JSON -> flattened version ids, newest first. `versions`
/// is a map of version groups (`{"26.3": ["26.3", "26.3-rc-3"], …}`), so
/// flatten and sort explicitly instead of trusting key order.
pub fn fill_versions(project: &Value) -> Vec<String> {
    let mut ids: Vec<String> = project
        .get("versions")
        .and_then(Value::as_object)
        .map(|groups| {
            groups
                .values()
                .filter_map(Value::as_array)
                .flat_map(|a| a.iter().filter_map(Value::as_str))
                .map(str::to_owned)
                .collect()
        })
        .unwrap_or_default();
    ids.sort_by(|a, b| compare_versions(b, a));
    ids.dedup();
    ids
}

/// Fill v3 builds JSON -> `(url, sha256)` of the newest stable build's
/// `server:default` download. Builds arrive newest first; the first
/// non-stable list falls back to the newest build of any channel.
pub fn fill_download(builds: &Value) -> Option<(String, Option<String>)> {
    let arr = builds.as_array()?;
    let build = arr
        .iter()
        .find(|b| {
            b.get("channel")
                .and_then(Value::as_str)
                .is_none_or(|c| c.eq_ignore_ascii_case("STABLE"))
        })
        .or_else(|| arr.first())?;
    let dl = build.get("downloads")?.get("server:default")?;
    Some((
        dl.get("url")?.as_str()?.to_owned(),
        dl.get("checksums")?
            .get("sha256")
            .and_then(Value::as_str)
            .map(str::to_owned),
    ))
}

// ---- Purpur / Fabric ----

/// Purpur direct binary URL: `…/v2/purpur/{version}/latest/download`.
pub fn purpur_download_url(version: &str) -> String {
    format!("https://api.purpurmc.org/v2/purpur/{version}/latest/download")
}

/// Fabric server launcher jar (single jar, no checksum).
pub fn fabric_download_url(game: &str, loader: &str) -> String {
    format!("https://meta.fabricmc.net/v2/versions/loader/{game}/{loader}/server/jar")
}

// ---- NeoForge (maven.neoforged.net) ----

/// NeoForge `maven-metadata.xml` -> version ids, newest first. The maven
/// lists versions alphabetically, so re-sort by natural version order.
pub fn neoforge_versions(xml: &str) -> Vec<String> {
    let Some(body) = xml
        .split("<versions>")
        .nth(1)
        .and_then(|s| s.split("</versions>").next())
    else {
        return Vec::new();
    };
    let mut ids: Vec<String> = body
        .split("<version>")
        .skip(1)
        .filter_map(|chunk| chunk.split("</version>").next())
        .map(str::to_owned)
        .collect();
    ids.sort_by(|a, b| compare_versions(b, a));
    ids
}

/// The `--installServer` installer jar on the NeoForge releases maven.
pub fn neoforge_installer_url(version: &str) -> String {
    format!(
        "https://maven.neoforged.net/releases/net/neoforged/neoforge/{version}/neoforge-{version}-installer.jar"
    )
}

// ---- GitHub releases (Pumpkin / Steel / plugins) ----

/// `true` when the host CPU supports AVX2 (x86_64-v3 microarch level).
pub fn host_supports_avx2() -> bool {
    #[cfg(any(target_arch = "x86", target_arch = "x86_64"))]
    {
        std::arch::is_x86_feature_detected!("avx2")
    }
    #[cfg(not(any(target_arch = "x86", target_arch = "x86_64")))]
    {
        false
    }
}

/// Human-readable host microarch target for the wizard and logs.
pub fn host_cpu_target() -> &'static str {
    #[cfg(any(target_arch = "x86", target_arch = "x86_64"))]
    {
        if host_supports_avx2() {
            "x86_64-v3 (AVX2)"
        } else {
            "x86_64"
        }
    }
    #[cfg(not(any(target_arch = "x86", target_arch = "x86_64")))]
    {
        std::env::consts::ARCH
    }
}

/// The `-v3` (x86_64-v3 / AVX2) build marker in asset names.
fn is_v3_build(name: &str) -> bool {
    name.to_ascii_lowercase().contains("-v3")
}

/// Arch tokens release asset names carry, used to detect (and reject)
/// foreign-arch assets while accepting archless names (SteelMC).
const ARCH_TOKENS: &[&str] = &["x64", "x86_64", "amd64", "arm64", "aarch64"];

/// Asset predicate for a concrete target (OS tags + our arch tags):
/// OS tag required; arch tag required only when the asset name carries one
/// (SteelMC names omit it, e.g. `steel-windows.exe`).
pub fn asset_matches_for(name: &str, os_tags: &[&str], ours: &[&str]) -> bool {
    let n = name.to_ascii_lowercase();
    if !os_tags.iter().any(|o| n.contains(o)) {
        return false;
    }
    match ARCH_TOKENS.iter().find(|a| n.contains(*a)) {
        Some(found) => ours.contains(found),
        None => true,
    }
}

/// Asset predicate for the host target.
pub fn host_asset_matches(name: &str) -> bool {
    let os: &[&str] = if cfg!(target_os = "windows") {
        &["windows", ".exe"]
    } else if cfg!(target_os = "macos") {
        &["macos", "darwin", "apple"]
    } else {
        &["linux"]
    };
    let ours: &[&str] = if cfg!(target_arch = "x86_64") {
        &["x64", "x86_64", "amd64"]
    } else if cfg!(target_arch = "aarch64") {
        &["arm64", "aarch64"]
    } else {
        return false;
    };
    asset_matches_for(name, os, ours)
}

/// Asset choice with explicit AVX2 preference: `prefer_v3` picks `-v3`
/// builds first, falling back to plain; `!prefer_v3` is strictly plain
/// (never a `-v3` build).
pub fn pick_asset_for(
    release: &Value,
    prefer_v3: bool,
    matches: impl Fn(&str) -> bool,
) -> Option<String> {
    if prefer_v3 {
        pick_asset(release, |name| matches(name) && is_v3_build(name))
            .or_else(|| pick_asset(release, matches))
    } else {
        pick_asset(release, |name| matches(name) && !is_v3_build(name))
    }
}

/// Host asset choice, preference driven by `host_supports_avx2`.
pub fn pick_host_asset(release: &Value, prefer_v3: bool) -> Option<String> {
    pick_asset_for(release, prefer_v3, host_asset_matches)
}

/// Pumpkin release binary URL matching the host OS/arch and CPU features.
pub fn pumpkin_asset_url(latest: &Value) -> Option<String> {
    pick_host_asset(latest, host_supports_avx2())
}

/// Picks the release to install from a GitHub releases list: the pinned
/// tag when present, else the first stable release with a matching asset,
/// else the first release with one at all (nightly/canary count, drafts
/// never). [`pick_release`] uses the host predicate and CPU features.
pub fn pick_release_with<'a>(
    releases: &'a [Value],
    pinned_tag: &str,
    prefer_v3: bool,
    matches: impl Fn(&str) -> bool,
) -> Option<&'a Value> {
    let usable = |r: &&Value| {
        r.get("draft").and_then(Value::as_bool) != Some(true)
            && pick_asset_for(r, prefer_v3, &matches).is_some()
    };
    releases
        .iter()
        .find(|r| {
            !pinned_tag.is_empty() && r.get("tag_name").and_then(Value::as_str) == Some(pinned_tag)
        })
        .or_else(|| {
            releases
                .iter()
                .find(|r| r.get("prerelease").and_then(Value::as_bool) != Some(true) && usable(r))
        })
        .or_else(|| releases.iter().find(usable))
}

/// [`pick_release_with`] with the host asset predicate.
pub fn pick_release<'a>(releases: &'a [Value], pinned_tag: &str) -> Option<&'a Value> {
    pick_release_with(
        releases,
        pinned_tag,
        host_supports_avx2(),
        host_asset_matches,
    )
}

/// Tag names of a GitHub releases list, in response order (newest first).
pub fn release_tag_names(releases: &Value) -> Vec<String> {
    releases
        .as_array()
        .map(|list| {
            list.iter()
                .filter_map(|r| r.get("tag_name").and_then(Value::as_str).map(str::to_owned))
                .collect()
        })
        .unwrap_or_default()
}

/// Picks the first asset whose name satisfies `want` (case-insensitive
/// contains). GitHub release JSON shape: `assets[].name` + `browser_download_url`.
pub fn pick_asset(release: &Value, want: impl Fn(&str) -> bool) -> Option<String> {
    release
        .get("assets")?
        .as_array()?
        .iter()
        .filter_map(|a| {
            let name = a.get("name")?.as_str()?;
            a.get("browser_download_url")?.as_str().map(|u| (name, u))
        })
        .find(|(name, _)| want(name))
        .map(|(_, url)| url.to_owned())
}

/// The three proxy/plugin bridges Minekube Connect ships per release.
pub fn connect_plugin_asset(url: &Value, software: ServerSoftware) -> Option<String> {
    let want = match software {
        ServerSoftware::Velocity => "connect-velocity",
        ServerSoftware::Purpur | ServerSoftware::Paper => "connect-spigot",
        _ => "connect-spigot",
    };
    pick_asset(url, |name| {
        name.eq_ignore_ascii_case(&format!("{want}.jar"))
    })
}

/// AuthMe plugin jar, preferring the Paper build.
pub fn authme_asset_url(latest: &Value) -> Option<String> {
    pick_asset(latest, |name| {
        let n = name.to_ascii_lowercase();
        n.ends_with(".jar") && n.contains("authme") && n.contains("paper")
    })
    .or_else(|| {
        pick_asset(latest, |name| {
            let n = name.to_ascii_lowercase();
            n.ends_with(".jar") && n.contains("authme")
        })
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    #[test]
    fn version_ordering() {
        assert_eq!(
            compare_versions("1.21.10", "1.21.9-pre2"),
            std::cmp::Ordering::Greater
        );
        assert_eq!(
            compare_versions("26.3", "26.3-rc-3"),
            std::cmp::Ordering::Greater
        );
        assert_eq!(
            compare_versions("26.3.0.110", "26.3.0.90"),
            std::cmp::Ordering::Greater
        );
        assert_eq!(
            compare_versions("21.1.9-beta", "21.1.10"),
            std::cmp::Ordering::Less
        );
        assert_eq!(
            compare_versions("1.21.11-pre5", "1.21.11-pre4"),
            std::cmp::Ordering::Greater
        );
        assert_eq!(compare_versions("2.0", "10.0"), std::cmp::Ordering::Less);
    }

    #[test]
    fn vanilla_manifest_parse() {
        let m = json!({
            "versions": [
                {"id": "1.21.4", "url": "https://piston-meta.mojang.com/v1/packages/aaa/1.21.4.json", "sha1": "abc"},
                {"id": "1.20.1", "url": "https://piston-meta.mojang.com/v1/packages/bbb/1.20.1.json"}
            ]
        });
        assert_eq!(vanilla_version_ids(&m), vec!["1.21.4", "1.20.1"]);
        let (id, url, sha1) = vanilla_entry(&m, "1.21.4").unwrap();
        assert_eq!(id, "1.21.4");
        assert_eq!(
            url,
            "https://piston-meta.mojang.com/v1/packages/aaa/1.21.4.json"
        );
        assert_eq!(sha1.as_deref(), Some("abc"));
        assert!(vanilla_entry(&m, "9.9.9").is_none());
    }

    #[test]
    fn vanilla_server_download_parse() {
        let v = json!({"downloads": {"server": {"url": "https://piston-data.mojang.com/server.jar", "sha1": "deadbeef"}}});
        let (url, sha1) = vanilla_server_download(&v).unwrap();
        assert_eq!(url, "https://piston-data.mojang.com/server.jar");
        assert_eq!(sha1.as_deref(), Some("deadbeef"));
    }

    #[test]
    fn fill_versions_flatten_and_sort() {
        // Live shape of fill.papermc.io/v3/projects/paper.
        let project = json!({
            "project": {"id": "paper", "name": "Paper"},
            "versions": {
                "26.3": ["26.3", "26.3-rc-3"],
                "1.21": ["1.21.11", "1.21.10", "1.21"],
                "1.20": ["1.20.6", "1.20.1"]
            }
        });
        assert_eq!(
            fill_versions(&project),
            vec![
                "26.3",
                "26.3-rc-3",
                "1.21.11",
                "1.21.10",
                "1.21",
                "1.20.6",
                "1.20.1"
            ]
        );
    }

    #[test]
    fn fill_builds_parse() {
        // Live shape of fill.papermc.io/v3/projects/velocity/versions/…/builds.
        let builds = json!([
            {"id": 563, "channel": "STABLE", "downloads": {"server:default": {
                "name": "velocity-3.4.0-SNAPSHOT-563.jar",
                "checksums": {"sha256": "fe5302"},
                "url": "https://fill-data.papermc.io/v1/objects/fe5302/velocity-563.jar"
            }}},
            {"id": 562, "channel": "STABLE", "downloads": {"server:default": {
                "name": "velocity-562.jar", "checksums": {"sha256": "b22459"},
                "url": "https://fill-data.papermc.io/v1/objects/b22459/velocity-562.jar"
            }}}
        ]);
        let (url, sha256) = fill_download(&builds).unwrap();
        assert_eq!(
            url,
            "https://fill-data.papermc.io/v1/objects/fe5302/velocity-563.jar"
        );
        assert_eq!(sha256.as_deref(), Some("fe5302"));

        // A newest EXPERIMENTAL build must not be picked over the stable one.
        let mixed = json!([
            {"id": 2, "channel": "EXPERIMENTAL", "downloads": {"server:default": {
                "url": "https://x/exp.jar", "checksums": {"sha256": "e"}}}},
            {"id": 1, "channel": "STABLE", "downloads": {"server:default": {
                "url": "https://x/stable.jar", "checksums": {"sha256": "s"}}}}
        ]);
        let (url, _) = fill_download(&mixed).unwrap();
        assert_eq!(url, "https://x/stable.jar");
        assert!(fill_download(&json!([])).is_none());
    }

    #[test]
    fn neoforge_metadata_parse() {
        // Live shape of maven.neoforged.net …/neoforge/maven-metadata.xml
        // (alphabetical order, needs re-sorting).
        let xml = "<metadata><groupId>net.neoforged</groupId><artifactId>neoforge</artifactId>\
            <versioning><latest>26.3.0.110</latest><release>26.3.0.110</release><versions>\
            <version>26.1.0.0-alpha.1+snapshot-1</version><version>21.8.27</version>\
            <version>26.3.0.110</version><version>26.3.0.109-beta</version>\
            <version>26.3.0.90</version><version>21.1.9</version>\
            </versions></versioning></metadata>";
        assert_eq!(
            neoforge_versions(xml),
            vec![
                "26.3.0.110",
                "26.3.0.109-beta",
                "26.3.0.90",
                "26.1.0.0-alpha.1+snapshot-1",
                "21.8.27",
                "21.1.9"
            ]
        );
        assert!(neoforge_versions("<metadata></metadata>").is_empty());
        assert_eq!(
            neoforge_installer_url("26.3.0.110"),
            "https://maven.neoforged.net/releases/net/neoforged/neoforge/26.3.0.110/neoforge-26.3.0.110-installer.jar"
        );
    }

    /// Windows-x64 asset matcher passed explicitly so these tests are
    /// independent of the host running them (CI is Linux x86_64, the dev
    /// box Windows x64).
    fn win_x64(name: &str) -> bool {
        asset_matches_for(name, &["windows", ".exe"], &["x64", "x86_64", "amd64"])
    }

    #[test]
    fn asset_selection_prefers_v3_only_when_asked() {
        // Live Pumpkin asset naming (X64 host, Windows).
        let release = json!({
            "assets": [
                {"name": "pumpkin-ARM64-Linux", "browser_download_url": "https://x/arm"},
                {"name": "pumpkin-aarch64-android", "browser_download_url": "https://x/android"},
                {"name": "checksums.sha256", "browser_download_url": "https://x/sha"},
                {"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/plain.exe"},
                {"name": "pumpkin-X64-v3-Windows.exe", "browser_download_url": "https://x/v3.exe"}
            ]
        });
        assert_eq!(
            pick_asset_for(&release, false, win_x64).unwrap(),
            "https://x/plain.exe"
        );
        assert_eq!(
            pick_asset_for(&release, true, win_x64).unwrap(),
            "https://x/v3.exe"
        );

        // Without AVX2 a v3-only release must never be selected.
        let v3_only = json!({
            "assets": [
                {"name": "pumpkin-X64-v3-Windows.exe", "browser_download_url": "https://x/v3.exe"}
            ]
        });
        assert!(pick_asset_for(&v3_only, false, win_x64).is_none());
        assert_eq!(
            pick_asset_for(&v3_only, true, win_x64).unwrap(),
            "https://x/v3.exe"
        );

        // With AVX2 a plain-only release falls back to plain.
        let plain_only = json!({
            "assets": [
                {"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/plain.exe"}
            ]
        });
        assert_eq!(
            pick_asset_for(&plain_only, true, win_x64).unwrap(),
            "https://x/plain.exe"
        );
    }

    #[test]
    fn asset_matches_os_and_arch_tokens() {
        // SteelMC omits the arch token entirely: any OS-matching archless
        // asset is accepted by every arch target.
        let steel = json!({
            "assets": [
                {"name": "steel-linux", "browser_download_url": "https://x/linux"},
                {"name": "steel-macos", "browser_download_url": "https://x/mac"},
                {"name": "steel-windows.exe", "browser_download_url": "https://x/win.exe"}
            ]
        });
        assert_eq!(
            pick_asset_for(&steel, false, win_x64).unwrap(),
            "https://x/win.exe"
        );
        assert_eq!(
            pick_asset_for(&steel, false, |name| {
                asset_matches_for(name, &["linux"], &["x64", "x86_64", "amd64"])
            })
            .unwrap(),
            "https://x/linux"
        );
        // Arch-tagged names are rejected when the arch is foreign.
        let arm_linux = json!({
            "assets": [
                {"name": "pumpkin-ARM64-Linux", "browser_download_url": "https://x/arm"}
            ]
        });
        assert!(pick_asset_for(&arm_linux, false, win_x64).is_none());
        // The host wrapper rejects files without an OS tag.
        assert!(!host_asset_matches("checksums.sha256"));
    }

    #[test]
    fn pick_release_prefers_pinned_then_stable() {
        let releases = json!([
            {"tag_name": "nightly", "prerelease": true, "draft": false,
             "assets": [{"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/nightly"}]},
            {"tag_name": "0.2.2+26.3-26.60", "prerelease": false, "draft": false,
             "assets": [{"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/stable"}]},
            {"tag_name": "0.2.1", "prerelease": false, "draft": false,
             "assets": [{"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/old"}]}
        ])
        .as_array()
        .unwrap()
        .clone();
        assert_eq!(
            pick_release_with(&releases, "0.2.1", false, win_x64).unwrap()["tag_name"],
            "0.2.1"
        );
        assert_eq!(
            pick_release_with(&releases, "", false, win_x64).unwrap()["tag_name"],
            "0.2.2+26.3-26.60"
        );
        // Only prereleases usable -> fall through to the first one.
        let only_nightly = json!([
            {"tag_name": "nightly", "prerelease": true, "draft": false,
             "assets": [{"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/n"}]}
        ])
        .as_array()
        .unwrap()
        .clone();
        assert_eq!(
            pick_release_with(&only_nightly, "", false, win_x64).unwrap()["tag_name"],
            "nightly"
        );
        // Drafts are never usable.
        let drafts = json!([
            {"tag_name": "secret", "prerelease": false, "draft": true,
             "assets": [{"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/d"}]}
        ])
        .as_array()
        .unwrap()
        .clone();
        assert!(pick_release_with(&drafts, "", false, win_x64).is_none());
    }

    #[test]
    fn release_tag_names_parse() {
        let releases = json!([
            {"tag_name": "nightly", "prerelease": true},
            {"tag_name": "0.2.2+26.3-26.60"}
        ]);
        assert_eq!(
            release_tag_names(&releases),
            vec!["nightly", "0.2.2+26.3-26.60"]
        );
    }

    #[test]
    fn purpur_and_fabric_urls() {
        assert_eq!(
            purpur_download_url("1.21.4"),
            "https://api.purpurmc.org/v2/purpur/1.21.4/latest/download"
        );
        assert_eq!(
            fabric_download_url("1.21.4", "0.16.9"),
            "https://meta.fabricmc.net/v2/versions/loader/1.21.4/0.16.9/server/jar"
        );
    }

    #[test]
    fn connect_and_authme_assets() {
        let release = json!({
            "assets": [
                {"name": "connect-velocity.jar", "browser_download_url": "https://x/velocity.jar"},
                {"name": "connect-spigot.jar", "browser_download_url": "https://x/spigot.jar"},
                {"name": "AuthMe-6.0.1-Spigot-1.21.jar", "browser_download_url": "https://x/spigot-auth.jar"},
                {"name": "AuthMe-6.0.1-Paper.jar", "browser_download_url": "https://x/paper-auth.jar"}
            ]
        });
        assert_eq!(
            connect_plugin_asset(&release, ServerSoftware::Velocity).unwrap(),
            "https://x/velocity.jar"
        );
        assert_eq!(
            connect_plugin_asset(&release, ServerSoftware::Paper).unwrap(),
            "https://x/spigot.jar"
        );
        assert_eq!(
            authme_asset_url(&release).unwrap(),
            "https://x/paper-auth.jar"
        );
    }
}
