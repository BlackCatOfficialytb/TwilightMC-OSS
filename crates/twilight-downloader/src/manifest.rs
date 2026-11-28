//! Fresh-first resolution of a Minecraft `version.json` manifest.
//!
//! Mojang's `piston-meta` copy is always the primary read: the on-disk cache is
//! consulted only after every remote source in the failover chain has failed.
//! That matters for security updates such as a re-published `lwjgl-freetype`
//! native: a stale cached manifest must never win over a live one while the
//! machine is online.

use std::path::{Path, PathBuf};

use crate::error::DownloadError;
use crate::meta::{
    FREESM_META_BASE, PRISM_META_BASE, SourceKind, fetch_json_failover, resolve_vanilla_version,
};

/// Where the returned manifest came from.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ManifestOrigin {
    /// A live Mojang/mirror response, fetched on this call.
    Remote,
    /// Local disk fallback, used only because every remote source failed.
    DiskCache,
}

/// A resolved version manifest plus its provenance.
#[derive(Debug, Clone)]
pub struct FetchedVersionManifest {
    /// Manifest id (not necessarily the requested token: `"latest"` resolves).
    pub id: String,
    pub raw: serde_json::Value,
    pub origin: ManifestOrigin,
}

impl FetchedVersionManifest {
    /// True only for a live response fetched during this call.
    pub fn is_fresh(&self) -> bool {
        self.origin == ManifestOrigin::Remote
    }
}

/// Resolves `wanted` through the live failover chain first, then (and only
/// then) through `cache_dir/<id>.json`. A successful live fetch refreshes the
/// cache for offline launches.
pub async fn fetch_version_manifest(
    client: &reqwest::Client,
    sources: &[SourceKind],
    wanted: &str,
    cache_dir: Option<&Path>,
) -> Result<FetchedVersionManifest, DownloadError> {
    match fetch_remote(client, sources, wanted).await {
        Ok((resolved_id, raw)) => {
            if let Some(dir) = cache_dir {
                store_cache(dir, &resolved_id, &raw).await;
                // `latest` is a moving pointer: keep a copy under that name so
                // an offline launch can still resolve the last known release.
                if wanted == "latest" && resolved_id != "latest" {
                    store_cache(dir, "latest", &raw).await;
                }
            }
            let id = raw_id(&raw).unwrap_or(resolved_id);
            Ok(FetchedVersionManifest {
                id,
                raw,
                origin: ManifestOrigin::Remote,
            })
        }
        Err(remote_error) => {
            if let Some(dir) = cache_dir
                && let Some(raw) = load_cache(dir, wanted).await
            {
                let id = raw_id(&raw).unwrap_or_else(|| wanted.to_owned());
                return Ok(FetchedVersionManifest {
                    id,
                    raw,
                    origin: ManifestOrigin::DiskCache,
                });
            }
            Err(remote_error)
        }
    }
}

/// Live list -> version detail, with the mirror detail URLs appended exactly
/// like the launch pipelines did before caching was centralized.
async fn fetch_remote(
    client: &reqwest::Client,
    sources: &[SourceKind],
    wanted: &str,
) -> Result<(String, serde_json::Value), DownloadError> {
    let meta = resolve_vanilla_version(client, sources, wanted).await?;
    let mut detail_chain = vec![meta.details_url.clone()];
    for base in [PRISM_META_BASE, FREESM_META_BASE] {
        let fallback = format!("{base}net.minecraft/{}.json", meta.id);
        if !detail_chain.contains(&fallback) {
            detail_chain.push(fallback);
        }
    }
    let raw = fetch_json_failover(client, &detail_chain).await?;
    Ok((meta.id, raw))
}

fn raw_id(raw: &serde_json::Value) -> Option<String> {
    raw.get("id")
        .and_then(serde_json::Value::as_str)
        .map(str::trim)
        .filter(|id| !id.is_empty())
        .map(str::to_owned)
}

/// Cache keys are version ids reduced to a single safe path component; a
/// caller-controlled id can never traverse outside the cache directory.
fn cache_file_name(id: &str) -> String {
    let mut safe = String::with_capacity(id.len());
    for ch in id.chars() {
        if ch.is_ascii_alphanumeric() || matches!(ch, '.' | '-' | '_') {
            safe.push(ch);
        } else {
            safe.push('_');
        }
    }
    if safe.is_empty() {
        safe.push_str("unknown");
    }
    format!("{safe}.json")
}

fn cache_path(dir: &Path, id: &str) -> PathBuf {
    dir.join(cache_file_name(id))
}

async fn load_cache(dir: &Path, id: &str) -> Option<serde_json::Value> {
    let bytes = tokio::fs::read(cache_path(dir, id)).await.ok()?;
    serde_json::from_slice(&bytes).ok()
}

async fn store_cache(dir: &Path, id: &str, raw: &serde_json::Value) {
    if tokio::fs::create_dir_all(dir).await.is_err() {
        return;
    }
    let Ok(bytes) = serde_json::to_vec(raw) else {
        return;
    };
    let path = cache_path(dir, id);
    let temp = path.with_extension(format!("tmp-{}", std::process::id()));
    if tokio::fs::write(&temp, bytes).await.is_ok() {
        let _ = tokio::fs::rename(&temp, &path).await;
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use std::collections::HashMap;
    use std::time::{SystemTime, UNIX_EPOCH};

    const META_BODY: &str = r#"{
        "uid": "net.minecraft",
        "versions": [
            { "version": "1.21.4", "type": "release", "releaseTime": "2024-12-19T08:11:48+00:00", "recommended": true },
            { "version": "26.3", "type": "snapshot", "releaseTime": "2026-06-10T00:00:00+00:00" }
        ]
    }"#;

    fn client() -> reqwest::Client {
        reqwest::Client::new()
    }

    fn scratch(tag: &str) -> PathBuf {
        let nanos = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|d| d.subsec_nanos())
            .unwrap_or_default();
        let dir = std::env::temp_dir().join(format!(
            "twilight-manifest-{tag}-{}-{nanos}",
            std::process::id()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[tokio::test]
    async fn fresh_remote_manifest_wins_over_stale_cache() {
        let fresh = br#"{"id":"1.21.4","mainClass":"fresh.remote.Main"}"#;
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            (
                "prism/net.minecraft/index.json".to_owned(),
                (200u16, META_BODY.as_bytes().to_vec()),
            ),
            (
                "prism/net.minecraft/1.21.4.json".to_owned(),
                (200u16, fresh.to_vec()),
            ),
        ]);
        let addr = spawn(routes).await;
        let cache = scratch("fresh");

        // an old vulnerable manifest is already on disk
        std::fs::write(
            cache.join("1.21.4.json"),
            br#"{"id":"1.21.4","mainClass":"stale.cached.Main"}"#,
        )
        .unwrap();

        let sources = vec![SourceKind::Meta {
            base: format!("http://{addr}/prism/"),
        }];
        let got = fetch_version_manifest(&client(), &sources, "1.21.4", Some(&cache))
            .await
            .unwrap();

        assert_eq!(got.origin, ManifestOrigin::Remote);
        assert!(got.is_fresh());
        assert_eq!(got.raw["mainClass"], "fresh.remote.Main");
        // the live response refreshes the offline copy
        let cached: serde_json::Value =
            serde_json::from_slice(&tokio::fs::read(cache.join("1.21.4.json")).await.unwrap())
                .unwrap();
        assert_eq!(cached["mainClass"], "fresh.remote.Main");
        std::fs::remove_dir_all(&cache).ok();
    }

    #[tokio::test]
    async fn disk_cache_is_only_used_when_remote_sources_are_down() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::new();
        let addr = spawn(routes).await;
        let cache = scratch("offline");
        std::fs::write(
            cache.join("1.21.4.json"),
            br#"{"id":"1.21.4","mainClass":"cached.offline.Main"}"#,
        )
        .unwrap();

        let sources = vec![SourceKind::Meta {
            base: format!("http://{addr}/dead/"),
        }];
        let got = fetch_version_manifest(&client(), &sources, "1.21.4", Some(&cache))
            .await
            .unwrap();

        assert_eq!(got.origin, ManifestOrigin::DiskCache);
        assert!(!got.is_fresh());
        assert_eq!(got.id, "1.21.4");
        assert_eq!(got.raw["mainClass"], "cached.offline.Main");
        std::fs::remove_dir_all(&cache).ok();
    }

    #[tokio::test]
    async fn missing_cache_still_surfaces_the_remote_error() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::new();
        let addr = spawn(routes).await;
        let cache = scratch("missing");
        let sources = vec![SourceKind::Meta {
            base: format!("http://{addr}/dead/"),
        }];
        assert!(
            fetch_version_manifest(&client(), &sources, "1.21.4", Some(&cache))
                .await
                .is_err()
        );
        std::fs::remove_dir_all(&cache).ok();
    }

    #[test]
    fn cache_keys_are_single_safe_path_components() {
        assert_eq!(cache_file_name("26.3"), "26.3.json");
        assert_eq!(cache_file_name("../escape"), ".._escape.json");
        assert_eq!(cache_file_name("a/b\\c:d"), "a_b_c_d.json");
        assert_eq!(cache_file_name(""), "unknown.json");
        assert!(!cache_file_name("../escape").contains('/'));
        assert!(!cache_file_name("../escape").contains('\\'));
    }
}
