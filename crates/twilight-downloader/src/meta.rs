//! HTTP fetching a version list for vanilla with failover.
//!
//! Like Prism's meta service contract, alternative metadata hosts mirror
//! Mojang's data; sources are tried in order: Mojang live (piston-meta)
//! -> `meta.prismlauncher.org` -> `meta.freesmlauncher.org`.

pub const MOJANG_MANIFEST_V2: &str =
    "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";
pub const PRISM_META_BASE: &str = "https://meta.prismlauncher.org/v1/";
pub const FREESM_META_BASE: &str = "https://meta.freesmlauncher.org/v1/";
/// Content-addressed asset object CDN (`MojangDownloadInfo` resource base).
pub const MOJANG_RESOURCES_BASE: &str = "https://resources.download.minecraft.net/";

use crate::error::DownloadError;

/// Ordered vanilla metadata sources: first success wins.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum SourceKind {
    /// Mojang's own `version_manifest_v2.json`; per-version URLs come from the manifest itself.
    Mojang { manifest_v2: String },
    /// Launcher meta service (Prism/Freesm): list at `{base}net.minecraft/index.json`,
    /// details at `{base}net.minecraft/{version}.json`.
    Meta { base: String },
}

pub fn vanilla_sources() -> Vec<SourceKind> {
    vec![
        SourceKind::Mojang {
            manifest_v2: MOJANG_MANIFEST_V2.to_owned(),
        },
        SourceKind::Meta {
            base: PRISM_META_BASE.to_owned(),
        },
        SourceKind::Meta {
            base: FREESM_META_BASE.to_owned(),
        },
    ]
}

/// Unified version entry across supported metadata hosts.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct VanillaMetaVersion {
    pub id: String,
    pub version_type: String,
    pub release_time: Option<String>,
    /// JSON manifest of the version itself (parses to `twilight_manifest::VersionFile`).
    pub details_url: String,
}

/// `list_vanilla_versions` result: whole list plus the "latest release" pointer.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct VanillaVersionList {
    pub versions: Vec<VanillaMetaVersion>,
    /// Mojang's `latest.release` or a meta list's recommended entry.
    pub latest_release_id: Option<String>,
}

impl VanillaVersionList {
    pub fn find(&self, id: &str) -> Option<&VanillaMetaVersion> {
        self.versions.iter().find(|v| v.id == id)
    }

    /// `"latest"` resolves through the host-provided pointer, otherwise an exact id.
    pub fn resolve(&self, wanted: &str) -> Option<VanillaMetaVersion> {
        let found = match wanted {
            "latest" => self
                .latest_release_id
                .as_deref()
                .and_then(|id| self.find(id)),
            other => self.find(other),
        };
        found.cloned()
    }
}

/// Fetches the first working source into a unified list. Network failures,
/// non-2xx statuses and malformed JSON all fail over to the next source.
pub async fn list_vanilla_versions(
    client: &reqwest::Client,
    sources: &[SourceKind],
) -> Result<VanillaVersionList, DownloadError> {
    let mut last: Option<DownloadError> = None;
    for source in sources {
        match fetch_source(client, source).await {
            Ok(list) => return Ok(list),
            Err(e) => last = Some(e),
        }
    }
    Err(DownloadError::AllSourcesOut {
        sources: sources.len(),
        source: Box::new(last.unwrap_or(DownloadError::EmptyChain)),
    })
}

/// Convenience wrapper: resolves `wanted` via the failover chain.
pub async fn resolve_vanilla_version(
    client: &reqwest::Client,
    sources: &[SourceKind],
    wanted: &str,
) -> Result<VanillaMetaVersion, DownloadError> {
    list_vanilla_versions(client, sources)
        .await?
        .resolve(wanted)
        .ok_or_else(|| DownloadError::VersionNotFound {
            wanted: wanted.to_owned(),
        })
}

impl SourceKind {
    fn list_url(&self) -> String {
        match self {
            SourceKind::Mojang { manifest_v2 } => manifest_v2.clone(),
            SourceKind::Meta { base } => format!("{base}net.minecraft/index.json"),
        }
    }
}

async fn fetch_source(
    client: &reqwest::Client,
    source: &SourceKind,
) -> Result<VanillaVersionList, DownloadError> {
    let json = fetch_json_failover(client, &[source.list_url()]).await?;
    match source {
        SourceKind::Mojang { .. } => {
            let list: MojangManifest = serde_json::from_value(json)?;
            let versions = list
                .versions
                .into_iter()
                .map(|e| VanillaMetaVersion {
                    id: e.id,
                    version_type: e.version_type,
                    release_time: e.release_time,
                    details_url: e.url,
                })
                .collect();
            Ok(VanillaVersionList {
                versions,
                latest_release_id: list.latest.map(|l| l.release),
            })
        }
        SourceKind::Meta { base } => {
            let list: MetaList = serde_json::from_value(json)?;
            let mut latest_release_id = None;
            let mut versions = Vec::new();
            for e in list.versions {
                let Some(id) = e.version else { continue };
                if e.recommended.unwrap_or(false) && latest_release_id.is_none() {
                    latest_release_id = Some(id.clone());
                }
                let details_url = format!("{base}net.minecraft/{}.json", id.clone());
                versions.push(VanillaMetaVersion {
                    id,
                    version_type: e.version_type.unwrap_or_default(),
                    release_time: Some(e.release_time),
                    details_url,
                });
            }
            Ok(VanillaVersionList {
                versions,
                latest_release_id,
            })
        }
    }
}

/// Downloads bytes and returns a JSON value; every network failure, non-2xx
/// status or malformed payload moves on to the next URL in the chain.
pub async fn fetch_json_failover(
    client: &reqwest::Client,
    urls: &[String],
) -> Result<serde_json::Value, DownloadError> {
    if urls.is_empty() {
        return Err(DownloadError::EmptyChain);
    }
    let mut last: Option<DownloadError> = None;
    for url in urls {
        let resp = match client.get(url).send().await {
            Ok(r) => r,
            Err(e) => {
                last = Some(DownloadError::Http {
                    url: url.clone(),
                    source: e,
                });
                continue;
            }
        };
        if !resp.status().is_success() {
            last = Some(DownloadError::HttpStatus {
                url: url.clone(),
                status: resp.status().as_u16(),
            });
            continue;
        }
        let bytes = match resp.bytes().await {
            Ok(b) => b,
            Err(e) => {
                last = Some(DownloadError::Http {
                    url: url.clone(),
                    source: e,
                });
                continue;
            }
        };
        match serde_json::from_slice::<serde_json::Value>(&bytes) {
            // malformed payloads fail over exactly like dead hosts
            Err(e) => {
                last = Some(DownloadError::BadJson {
                    url: url.clone(),
                    source: e,
                });
                continue;
            }
            Ok(v) => return Ok(v),
        }
    }
    Err(last.unwrap_or(DownloadError::EmptyChain))
}

/// Mojang `version_manifest_v2.json` shape.
#[derive(Debug, Clone, serde::Deserialize)]
struct MojangManifest {
    #[serde(default)]
    latest: Option<MojangLatest>,
    versions: Vec<MojangVersionEntry>,
}

#[derive(Debug, Clone, serde::Deserialize)]
struct MojangLatest {
    release: String,
}

#[derive(Debug, Clone, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
struct MojangVersionEntry {
    id: String,
    #[serde(rename = "type")]
    version_type: String,
    url: String,
    release_time: Option<String>,
}

/// Prism-style meta list (`net.minecraft/index.json`). Mirrors
/// `Meta::parseCommonVersion` upstream (`version`/`releaseTime`/`recommended`).
#[derive(Debug, Clone, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
struct MetaList {
    #[serde(default)]
    versions: Vec<MetaVersionEntry>,
}

#[derive(Debug, Clone, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
struct MetaVersionEntry {
    version: Option<String>,
    #[serde(rename = "type")]
    version_type: Option<String>,
    release_time: String,
    #[serde(default)]
    recommended: Option<bool>,
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use std::collections::HashMap;

    fn client() -> reqwest::Client {
        reqwest::Client::new()
    }

    const MOJANG_BODY: &str = r#"{
        "latest": { "release": "1.21.4", "snapshot": "1.21.6-pre2" },
        "versions": [
            { "id": "1.21.4", "type": "release", "url": "https://piston/1.21.4.json", "releaseTime": "2024-12-19T08:11:48+00:00" },
            { "id": "26.3", "type": "snapshot", "url": "https://piston/26.3.json", "releaseTime": "2026-06-10T00:00:00+00:00" }
        ]
    }"#;

    const META_BODY: &str = r#"{
        "uid": "net.minecraft",
        "versions": [
            { "version": "1.21.4", "type": "release", "releaseTime": "2024-12-19T08:11:48+00:00", "recommended": true },
            { "version": "26.3", "type": "snapshot", "releaseTime": "2026-06-10T00:00:00+00:00" }
        ]
    }"#;

    #[tokio::test]
    async fn fails_over_from_dead_mojang_to_mirror_meta() {
        // piston-meta primary answers 500; prism mirror serves the list
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            (
                "mc/game/version_manifest_v2.json".to_owned(),
                (500u16, b"boom".to_vec()),
            ),
            (
                "prism/net.minecraft/index.json".to_owned(),
                (200u16, META_BODY.as_bytes().to_vec()),
            ),
        ]);
        let addr = spawn(routes).await;
        let sources = vec![
            SourceKind::Mojang {
                manifest_v2: format!("http://{addr}/mc/game/version_manifest_v2.json"),
            },
            SourceKind::Meta {
                base: format!("http://{addr}/prism/"),
            },
        ];
        let list = list_vanilla_versions(&client(), &sources).await.unwrap();
        assert_eq!(list.versions.len(), 2);
        assert_eq!(list.latest_release_id.as_deref(), Some("1.21.4"));
        let v = list.resolve("1.21.4").unwrap();
        assert!(
            v.details_url.ends_with("net.minecraft/1.21.4.json"),
            "{}",
            v.details_url
        );
    }

    #[tokio::test]
    async fn mojang_primary_resolves_latest_from_manifest_pointer() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "mc/game/version_manifest_v2.json".to_owned(),
            (200u16, MOJANG_BODY.as_bytes().to_vec()),
        )]);
        let addr = spawn(routes).await;
        let sources = vec![SourceKind::Mojang {
            manifest_v2: format!("http://{addr}/mc/game/version_manifest_v2.json"),
        }];
        let list = list_vanilla_versions(&client(), &sources).await.unwrap();
        let latest = list.resolve("latest").unwrap();
        assert_eq!(latest.id, "1.21.4");
        assert_eq!(latest.details_url, "https://piston/1.21.4.json");
        assert!(
            list.resolve("26.3")
                .unwrap()
                .details_url
                .ends_with("26.3.json")
        );
    }

    #[tokio::test]
    async fn unknown_id_and_empty_chains_error_cleanly() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "prism/net.minecraft/index.json".to_owned(),
            (200u16, META_BODY.as_bytes().to_vec()),
        )]);
        let addr = spawn(routes).await;
        let sources = vec![
            SourceKind::Mojang {
                manifest_v2: format!("http://{addr}/missing/mc.json"),
            },
            SourceKind::Meta {
                base: format!("http://{addr}/prism/"),
            },
        ];
        let list = list_vanilla_versions(&client(), &sources).await.unwrap();
        assert!(list.resolve("nope").is_none());
        assert!(matches!(
            resolve_vanilla_version(&client(), &sources, "nope").await,
            Err(DownloadError::VersionNotFound { wanted }) if wanted == "nope"
        ));
        // every host dead -> chained error
        let all_dead = vec![
            SourceKind::Mojang {
                manifest_v2: format!("http://{addr}/nothing.json"),
            },
            SourceKind::Meta {
                base: format!("http://{addr}/void/"),
            },
        ];
        assert!(matches!(
            list_vanilla_versions(&client(), &all_dead).await,
            Err(DownloadError::AllSourcesOut { sources: 2, .. })
        ));
    }

    #[tokio::test]
    async fn json_failover_skips_bad_statuses_and_bad_payloads() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            ("a.json".to_owned(), (404u16, vec![])),
            ("b.json".to_owned(), (200u16, b"{not json".to_vec())),
            ("c.json".to_owned(), (200u16, br#"{"ok":1}"#.to_vec())),
        ]);
        let addr = spawn(routes).await;
        let chain = ["a.json", "b.json", "c.json"]
            .map(|p| format!("http://{addr}/{p}"))
            .to_vec();
        let v = fetch_json_failover(&client(), &chain).await.unwrap();
        assert_eq!(v["ok"], 1);
    }
}
