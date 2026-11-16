// IPC bridge to the vanilla metadata failover chain (Mojang piston-meta ->
// Prism -> Freesm), feeding the searchable version picker, plus the loader
// build lists (fabric/quilt meta) feeding the wizard dropdown.

use serde::Serialize;
use twilight_downloader::{list_vanilla_versions, vanilla_sources};
use twilight_modloader::{ModLoader, profile_url};

/// One picker row; `details_url` stays server-side — the UI never fetches.
#[derive(Debug, Clone, Serialize)]
pub struct VersionRow {
    pub id: String,
    /// `release`, `snapshot`, `old_beta`, `old_alpha`, ...
    pub version_type: String,
    pub release_time: Option<String>,
    /// True when this row is the source's `latest.release` pointer.
    pub is_latest_release: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct VersionCatalog {
    /// Total rows available after failover (the picker may show a subset).
    pub total: usize,
    pub latest_release_id: Option<String>,
    pub versions: Vec<VersionRow>,
}

fn to_catalog(list: twilight_downloader::VanillaVersionList) -> VersionCatalog {
    let total = list.versions.len();
    let latest = list.latest_release_id.clone();
    let versions = list
        .versions
        .into_iter()
        .map(|v| {
            let is_latest_release = Some(v.id.clone()) == latest;
            VersionRow {
                id: v.id,
                version_type: v.version_type,
                release_time: v.release_time,
                is_latest_release,
            }
        })
        .collect();
    VersionCatalog {
        total,
        latest_release_id: latest,
        versions,
    }
}

/// Fetches the version list through the full failover chain; the raw list is
/// large Mojang payload data, so the whole catalog travels once per request.
#[tauri::command]
pub async fn fetch_vanilla_versions() -> Result<VersionCatalog, String> {
    let client = reqwest::Client::new();
    let list = list_vanilla_versions(&client, &vanilla_sources())
        .await
        .map_err(|e| e.to_string())?;
    Ok(to_catalog(list))
}

/// One loader build row of the wizard dropdown.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct LoaderVersionRow {
    pub version: String,
    pub stable: bool,
}

/// Flattens a fabric/quilt meta `versions/loader/{game}` array into dropdown
/// rows (`/loader/{version,stable}` pointers).
pub(crate) fn parse_loader_versions(raw: &serde_json::Value) -> Vec<LoaderVersionRow> {
    raw.as_array()
        .map(|list| {
            list.iter()
                .filter_map(|entry| {
                    let version = entry.pointer("/loader/version")?.as_str()?;
                    Some(LoaderVersionRow {
                        stable: entry.pointer("/loader/stable")
                            == Some(&serde_json::Value::Bool(true)),
                        version: version.to_owned(),
                    })
                })
                .collect()
        })
        .unwrap_or_default()
}

/// Meta v1 Forge/NeoForge index → dropdown rows for one game version. The
/// index spans every game version, so it is filtered by the `net.minecraft`
/// requirement; `recommended` maps onto the dropdown's `stable` flag.
pub(crate) fn parse_meta_versions(
    raw: &serde_json::Value,
    game_version: &str,
) -> Vec<LoaderVersionRow> {
    twilight_modloader::parse_meta_index(raw, game_version)
        .into_iter()
        .map(|build| LoaderVersionRow {
            version: build.version,
            stable: build.recommended,
        })
        .collect()
}

/// Lists the builds a loader published for one Minecraft version (the
/// wizard's loader-version dropdown). Fabric/Quilt/Legacy Fabric answer from
/// their own meta APIs; Forge/NeoForge filter the Meta v1 index across its
/// failover hosts; Cleanroom lists its maven releases.
#[tauri::command]
pub async fn fetch_loader_versions(
    loader: String,
    game_version: String,
) -> Result<Vec<LoaderVersionRow>, String> {
    let loader = ModLoader::from_token(&loader).ok_or_else(|| {
        format!("unsupported loader {loader:?} (fabric, quilt, forge, neoforge, legacyfabric, cleanroom)")
    })?;
    let client = reqwest::Client::new();

    if loader == ModLoader::Cleanroom {
        // Cleanroom only ships 1.12.2 builds; the maven metadata lists them
        if !game_version.trim().is_empty() && !game_version.trim().eq_ignore_ascii_case("1.12.2") {
            return Ok(Vec::new());
        }
        let text = client
            .get(twilight_modloader::CLEANROOM_METADATA_URL)
            .send()
            .await
            .map_err(|e| e.to_string())?
            .error_for_status()
            .map_err(|e| e.to_string())?
            .text()
            .await
            .map_err(|e| e.to_string())?;
        return Ok(parse_cleanroom_versions(&text));
    }

    if loader.meta_uid().is_some() {
        let mut last = String::new();
        for base in loader.meta_v1_bases() {
            let url = profile_url(base, loader, &game_version, None);
            let raw = match client
                .get(url)
                .send()
                .await
                .and_then(reqwest::Response::error_for_status)
            {
                Ok(response) => match response.json::<serde_json::Value>().await {
                    Ok(raw) => raw,
                    Err(e) => {
                        last = e.to_string();
                        continue;
                    }
                },
                Err(e) => {
                    last = e.to_string();
                    continue;
                }
            };
            return Ok(parse_meta_versions(&raw, &game_version));
        }
        return Err(last);
    }

    let url = profile_url(loader.meta_base(), loader, &game_version, None);
    let raw = client
        .get(url)
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    Ok(parse_loader_versions(&raw))
}

/// Cleanroom's maven metadata → dropdown rows, newest first (the list is
/// ascending upstream). The `<release>` tag is the newest stable build.
pub(crate) fn parse_cleanroom_versions(xml: &str) -> Vec<LoaderVersionRow> {
    let release = twilight_modloader::parse_cleanroom_release(xml);
    let mut versions: Vec<String> = xml
        .split("<version>")
        .skip(1)
        .filter_map(|tail| tail.split("</version>").next())
        .map(str::trim)
        .filter(|v| !v.is_empty())
        .map(str::to_owned)
        .collect();
    versions.reverse();
    versions
        .into_iter()
        .map(|version| LoaderVersionRow {
            stable: release.as_deref() == Some(version.as_str()),
            version,
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn loader_version_rows_parse_from_meta_list() {
        let raw: serde_json::Value = serde_json::from_str(
            r#"[
                 {"loader":{"version":"0.16.14","stable":false},
                  "intermediary":{"maven":"x"}},
                 {"loader":{"version":"0.16.9-minecraft.1.21.4","stable":true}},
                 {"loader":{"version":"0.16.5","stable":true}},
                 {"intermediary":{"maven":"y"}},
                 {"loader":{"version":"0.16.14-beta.1","stable":false}}
               ]"#,
        )
        .unwrap();

        let rows = parse_loader_versions(&raw);
        assert_eq!(
            rows,
            vec![
                LoaderVersionRow {
                    version: "0.16.14".into(),
                    stable: false
                },
                LoaderVersionRow {
                    version: "0.16.9-minecraft.1.21.4".into(),
                    stable: true
                },
                LoaderVersionRow {
                    version: "0.16.5".into(),
                    stable: true
                },
                LoaderVersionRow {
                    version: "0.16.14-beta.1".into(),
                    stable: false
                },
            ],
            "entries without a loader.version pointer are dropped"
        );
        assert!(rows.iter().any(|r| r.stable));
    }

    #[test]
    fn meta_index_rows_filter_by_game_version() {
        let raw: serde_json::Value = serde_json::from_str(
            r#"{
              "uid": "net.neoforged",
              "versions": [
                {"version":"21.4.161","recommended":true,
                 "requires":[{"uid":"net.minecraft","equals":"1.21.4"}]},
                {"version":"21.4.160","recommended":false,
                 "requires":[{"uid":"net.minecraft","equals":"1.21.4"}]},
                {"version":"21.5.1","recommended":true,
                 "requires":[{"uid":"net.minecraft","equals":"1.21.5"}]}
              ]
            }"#,
        )
        .unwrap();

        assert_eq!(
            parse_meta_versions(&raw, "1.21.4"),
            vec![
                LoaderVersionRow {
                    version: "21.4.161".into(),
                    stable: true
                },
                LoaderVersionRow {
                    version: "21.4.160".into(),
                    stable: false
                },
            ],
            "other game versions are filtered out; recommended maps to stable"
        );
        assert!(parse_meta_versions(&raw, "1.8.9").is_empty());
    }

    #[test]
    fn cleanroom_versions_list_newest_first() {
        let rows = parse_cleanroom_versions(
            "<metadata><versioning><release>0.7.14-alpha</release><versions>\
             <version>0.7.12-alpha</version><version>0.7.13-alpha</version>\
             <version>0.7.14-alpha</version></versions></versioning></metadata>",
        );
        assert_eq!(
            rows,
            vec![
                LoaderVersionRow {
                    version: "0.7.14-alpha".into(),
                    stable: true
                },
                LoaderVersionRow {
                    version: "0.7.13-alpha".into(),
                    stable: false
                },
                LoaderVersionRow {
                    version: "0.7.12-alpha".into(),
                    stable: false
                },
            ],
            "newest first, <release> flagged stable"
        );
    }

    #[test]
    fn catalog_flags_the_latest_release_row() {
        let list = twilight_downloader::VanillaVersionList {
            latest_release_id: Some("1.21.4".into()),
            versions: vec![
                row("1.21.4", "release"),
                row("26.3", "snapshot"),
                row("1.21.3", "release"),
            ],
        };

        let catalog = to_catalog(list);
        assert_eq!(catalog.total, 3);
        assert_eq!(catalog.latest_release_id.as_deref(), Some("1.21.4"));
        assert!(catalog.versions[0].is_latest_release, "1.21.4 is flagged");
        assert!(!catalog.versions[1].is_latest_release);
        assert_eq!(catalog.versions[1].version_type, "snapshot");
    }

    fn row(id: &str, version_type: &str) -> twilight_downloader::VanillaMetaVersion {
        twilight_downloader::VanillaMetaVersion {
            id: id.to_owned(),
            version_type: version_type.to_owned(),
            release_time: None,
            details_url: String::new(),
        }
    }
}
