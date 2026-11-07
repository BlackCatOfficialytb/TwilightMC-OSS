//! Composite launch component: a raw loader-meta profile becomes the Knot
//! main-class override plus the loader libraries to download (mapping jar
//! first, then common, then client libraries) and append to the classpath.

use std::collections::HashSet;
use std::path::Path;

use serde::Deserialize;

use twilight_downloader::DownloadRequest;

use crate::error::LoaderError;
use crate::resolver::ModLoader;

/// One resolved loader library: artifact URL, storage path relative to the
/// shared library store and optional expected sha1.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ResolvedLoaderLib {
    /// Original maven coordinate, e.g. `net.fabricmc:fabric-loader:0.16.9`.
    pub name: String,
    /// Absolute artifact URL the loader jar can be fetched from.
    pub url: String,
    /// Library-store path, e.g.
    /// `net/fabricmc/fabric-loader/0.16.9/fabric-loader-0.16.9.jar`.
    pub storage: String,
    /// Expected sha1 (hex) when the metadata carries one.
    pub sha1: Option<String>,
}

/// Composite launch data for one resolved loader profile: the Knot main class
/// takes over from the vanilla manifest main class, and the loader libraries
/// are downloaded into the shared library store and prepended to the classpath.
#[derive(Debug, Clone)]
pub struct LoaderProfile {
    pub loader: ModLoader,
    pub loader_version: String,
    pub main_class: String,
    /// Mapping jar (fabric `intermediary` / quilt `hashed`) first, then common
    /// followed by client libraries, de-duplicated by coordinate.
    pub libraries: Vec<ResolvedLoaderLib>,
}

impl LoaderProfile {
    /// Loader jars as downloader requests rooted at the shared library store.
    pub fn download_requests(&self, library_root: &Path) -> Vec<DownloadRequest> {
        self.libraries
            .iter()
            .map(|lib| DownloadRequest {
                url: lib.url.clone(),
                dest: library_root.join(&lib.storage),
                sha1: lib.sha1.clone(),
            })
            .collect()
    }
}

// ---------------------------------------------------------------------------
// raw meta shapes
// ---------------------------------------------------------------------------

/// Unified raw profile shape; fabric v2 and quilt v3 both fit it. Every field
/// is optional so the same model covers both sexes of profiles.
#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub(crate) struct RawProfile {
    #[serde(default)]
    loader: Option<RawLoaderRecord>,
    #[serde(default)]
    intermediary: Option<RawMavenRef>,
    #[serde(default)]
    hashed: Option<RawMavenRef>,
    /// Quilt-style loader coordinate (`org.quiltmc:quilt-loader:<version>`).
    #[serde(default)]
    maven: Option<String>,
    #[serde(default)]
    launcher_meta: Option<RawLauncherMeta>,
}

/// `loader: { version: "...", stable: true|false }` — fabric wording.
#[derive(Debug, Clone, Deserialize)]
struct RawLoaderRecord {
    version: String,
}

/// Mapping-jar reference (fabric `intermediary`, quilt `hashed`).
#[derive(Debug, Clone, Deserialize)]
struct RawMavenRef {
    /// `group:artifact:version[:classifier]` coordinate.
    #[serde(default)]
    maven: Option<String>,
    /// Verbatim jar URL or repository base accepting the storage path.
    #[serde(default)]
    url: Option<String>,
}

/// `launcherMeta.libraries.{common,client}` grouping of a profile.
#[derive(Debug, Clone, Default, Deserialize)]
struct RawLibGroups {
    #[serde(default)]
    common: Vec<RawLibEntry>,
    #[serde(default)]
    client: Vec<RawLibEntry>,
}

#[derive(Debug, Clone, Deserialize)]
struct RawLauncherMeta {
    #[serde(default)]
    libraries: RawLibGroups,
}

/// One `launchermeta` library entry.
#[derive(Debug, Clone, Deserialize)]
struct RawLibEntry {
    name: String,
    #[serde(default)]
    url: Option<String>,
    #[serde(default)]
    sha1: Option<String>,
}

impl RawProfile {
    /// Builds the composite [`LoaderProfile`] from one raw profile object.
    pub(crate) fn into_profile(self, loader: ModLoader) -> Result<LoaderProfile, LoaderError> {
        let maven_base = loader.maven_base();

        // fabric declares `loader.version`; quilt only mirrors the loader
        // coordinate in `maven` — accept both wordings.
        let loader_version = match self.loader {
            Some(record) => record.version,
            None => version_from_coordinate(self.maven.as_deref()).ok_or_else(|| {
                LoaderError::MissingField {
                    field: "loader version",
                }
            })?,
        };

        let mapping = match loader {
            ModLoader::Fabric => self.intermediary,
            ModLoader::Quilt => self.hashed,
        }
        .ok_or_else(|| LoaderError::MissingField {
            field: loader.mapping_field(),
        })?;
        let mapping_coordinate =
            mapping
                .maven
                .as_deref()
                .ok_or_else(|| LoaderError::MissingField {
                    field: loader.mapping_field(),
                })?;

        let mut libraries = vec![resolve_ref(
            mapping_coordinate,
            mapping.url.as_deref(),
            None,
            maven_base,
        )?];

        // union of common then client libraries, deduped by coordinate
        let groups = self
            .launcher_meta
            .map(|meta| meta.libraries)
            .unwrap_or_default();
        let mut seen: HashSet<String> = libraries.iter().map(|lib| lib.name.clone()).collect();
        for entry in groups.common.iter().chain(groups.client.iter()) {
            if !seen.insert(entry.name.clone()) {
                continue;
            }
            libraries.push(resolve_ref(
                &entry.name,
                entry.url.as_deref(),
                entry.sha1.as_deref(),
                maven_base,
            )?);
        }

        Ok(LoaderProfile {
            loader,
            loader_version,
            main_class: loader.knot_main_class().to_owned(),
            libraries,
        })
    }
}

/// Extracts the version segment of a `group:artifact:version[:...]` coordinate.
fn version_from_coordinate(coordinate: Option<&str>) -> Option<String> {
    coordinate?.split(':').nth(2).map(str::to_owned)
}

/// Resolves one coordinate reference into URL + storage path.
fn resolve_ref(
    name: &str,
    url: Option<&str>,
    sha1: Option<&str>,
    fallback_base: &str,
) -> Result<ResolvedLoaderLib, LoaderError> {
    let storage = maven_storage_path(name)?;
    let url = match url {
        // a URL ending in `.jar` is the artifact itself
        Some(bare) if bare.ends_with(".jar") => bare.to_owned(),
        // otherwise it is a repository base and the storage path appends
        Some(base) => repo_url(base, &storage),
        None => repo_url(fallback_base, &storage),
    };
    Ok(ResolvedLoaderLib {
        name: name.to_owned(),
        url,
        storage,
        sha1: sha1.map(str::to_owned),
    })
}

/// Joins a repository base (trailing slashes tolerated) with a maven storage
/// path.
fn repo_url(base: &str, storage: &str) -> String {
    format!("{}/{storage}", base.trim_end_matches('/'))
}

/// Expands `group:artifact:version[:classifier[:extension]]` into its maven
/// storage path `group/artifact/version/artifact-version[-classifier][.ext].jar`.
pub(crate) fn maven_storage_path(coordinate: &str) -> Result<String, LoaderError> {
    let segments: Vec<&str> = coordinate.split(':').collect();
    if segments.len() < 3 || segments.len() > 5 || segments.iter().any(|s| s.is_empty()) {
        return Err(LoaderError::BadCoordinate {
            name: coordinate.to_owned(),
        });
    }
    let head = format!(
        "{}/{}/{}/{}-{}",
        segments[0].replace('.', "/"),
        segments[1],
        segments[2],
        segments[1],
        segments[2],
    );
    match segments.len() {
        3 => Ok(format!("{head}.jar")),
        4 => Ok(format!("{head}-{}.jar", segments[3])),
        _ => Ok(format!("{head}-{}.{}", segments[3], segments[4])),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::resolver::{FABRIC_PROFILE_FIXTURE, QUILT_PROFILE_FIXTURE, parse_loader_meta};
    use std::path::Path;

    fn fabric_profile() -> LoaderProfile {
        let raw: serde_json::Value = serde_json::from_str(FABRIC_PROFILE_FIXTURE).unwrap();
        parse_loader_meta(ModLoader::Fabric, &raw).unwrap()
    }

    fn quilt_profile() -> LoaderProfile {
        let raw: serde_json::Value = serde_json::from_str(QUILT_PROFILE_FIXTURE).unwrap();
        parse_loader_meta(ModLoader::Quilt, &raw).unwrap()
    }

    #[test]
    fn fabric_profile_parses_composite_launch_data() {
        let profile = fabric_profile();
        assert_eq!(profile.loader, ModLoader::Fabric);
        assert_eq!(profile.loader_version, "0.16.9");
        assert_eq!(
            profile.main_class,
            "net.fabricmc.loader.impl.launch.knot.KnotClient"
        );

        let libs = &profile.libraries;
        assert_eq!(libs.len(), 4, "intermediary + common(2) + client(1)");
        // the mapping jar is first and its `.jar`-suffixed URL is verbatim
        assert_eq!(libs[0].name, "net.fabricmc:intermediary:1.21.4");
        assert_eq!(
            libs[0].url,
            "https://maven.fabricmc.net/net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar"
        );
        assert_eq!(
            libs[0].storage,
            "net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar"
        );
        assert!(libs[0].sha1.is_none());
        // repository base gets the storage path appended
        assert_eq!(
            libs[1].url,
            "https://maven.fabricmc.net/net/fabricmc/fabric-loader/0.16.9/fabric-loader-0.16.9.jar"
        );
        assert_eq!(
            libs[1].storage,
            "net/fabricmc/fabric-loader/0.16.9/fabric-loader-0.16.9.jar"
        );
        // url-less entries fall back to the loader's own maven base
        assert_eq!(
            libs[2].url,
            "https://maven.fabricmc.net/org/ow2/asm/asm/9.6/asm-9.6.jar"
        );
        assert_eq!(
            libs[2].sha1.as_deref(),
            Some("3d2af0b73e0d4032ac0f726d1b1c9e5a0b8e2be1")
        );
        // entries with another repo base keep that base
        assert_eq!(
            libs[3].url,
            "https://repo.spongepowered.org/repository/maven-public/org/spongepowered/mixin/0.8.5/mixin-0.8.5.jar"
        );
    }

    #[test]
    fn quilt_profile_uses_maven_coordinate_fallback_and_hashed_mapping() {
        let profile = quilt_profile();
        // no `loader` object: the coordinate `org.quiltmc:quilt-loader:<v>`
        // carries the loader version
        assert_eq!(profile.loader_version, "0.26.4");
        assert_eq!(profile.loader, ModLoader::Quilt);
        assert_eq!(
            profile.main_class,
            "org.quiltmc.loader.impl.launch.knot.KnotClient"
        );

        let libs = &profile.libraries;
        assert_eq!(libs.len(), 3);
        // hashed mapping jar first, URL derived from the quilt maven base
        assert_eq!(libs[0].name, "org.quiltmc:hashed:1.21.4");
        assert_eq!(
            libs[0].url,
            "https://maven.quiltmc.org/repository/release/org/quiltmc/hashed/1.21.4/hashed-1.21.4.jar"
        );
        assert_eq!(
            libs[0].storage,
            "org/quiltmc/hashed/1.21.4/hashed-1.21.4.jar"
        );
        assert_eq!(
            libs[1].url,
            "https://maven.quiltmc.org/repository/release/org/quiltmc/quilt-loader/0.26.4/quilt-loader-0.26.4.jar"
        );
        // `url`-bearing entry from a foreign repo is honored
        assert_eq!(
            libs[2].url,
            "https://maven.fabricmc.net/org/ow2/asm/asm/9.6/asm-9.6.jar"
        );
    }

    #[test]
    fn download_requests_target_the_library_store() {
        let profile = fabric_profile();
        let requests = profile.download_requests(Path::new("S/libraries"));
        assert_eq!(requests.len(), profile.libraries.len());
        assert_eq!(
            requests[0].dest,
            Path::new("S/libraries")
                .join("net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar")
        );
        assert_eq!(requests[0].url, profile.libraries[0].url);
        assert_eq!(
            requests[2].sha1.as_deref(),
            Some("3d2af0b73e0d4032ac0f726d1b1c9e5a0b8e2be1")
        );
        assert_eq!(requests[3].dest, {
            Path::new("S/libraries").join("org/spongepowered/mixin/0.8.5/mixin-0.8.5.jar")
        });
    }

    #[test]
    fn coordinates_expand_to_maven_storage_paths() {
        assert_eq!(
            maven_storage_path("net.fabricmc:fabric-loader:0.16.9").unwrap(),
            "net/fabricmc/fabric-loader/0.16.9/fabric-loader-0.16.9.jar"
        );
        assert_eq!(
            maven_storage_path("org.lwjgl:lwjgl:3.3.3:natives-linux").unwrap(),
            "org/lwjgl/lwjgl/3.3.3/lwjgl-3.3.3-natives-linux.jar"
        );
        assert_eq!(
            maven_storage_path("g:a:1:cls:zip").unwrap(),
            "g/a/1/a-1-cls.zip"
        );
        assert!(matches!(
            maven_storage_path("net.fabricmc"),
            Err(LoaderError::BadCoordinate { .. })
        ));
        assert!(matches!(
            maven_storage_path("g:a:"),
            Err(LoaderError::BadCoordinate { .. })
        ));
    }

    #[test]
    fn missing_required_profile_fields_are_loud() {
        // quilt profile without the hashed mapping jar
        let raw = serde_json::json!({
            "maven": "org.quiltmc:quilt-loader:0.26.4",
            "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
        });
        let err = parse_loader_meta(ModLoader::Quilt, &raw).unwrap_err();
        assert!(
            matches!(err, LoaderError::MissingField { field: "hashed" }),
            "{err:?}"
        );

        // neither loader record nor coordinate: no loader version anywhere
        let raw = serde_json::json!({
            "intermediary": { "maven": "net.fabricmc:intermediary:1.21.4" }
        });
        let err = parse_loader_meta(ModLoader::Fabric, &raw).unwrap_err();
        assert!(
            matches!(
                err,
                LoaderError::MissingField {
                    field: "loader version"
                }
            ),
            "{err:?}"
        );
    }
}
