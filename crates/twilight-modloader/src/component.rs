//! Composite launch component: a raw loader-meta profile becomes the main-class
//! override plus the loader libraries to download and append to the classpath
//! (fabric/quilt: mapping jar first, then common, then client libraries;
//! Forge/NeoForge Meta v1: the profile's own `libraries`).

use std::collections::{BTreeSet, HashSet};
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

/// Composite launch data for one resolved loader profile: the main class takes
/// over from the vanilla manifest, and the loader libraries are downloaded into
/// the shared library store and prepended to the classpath.
#[derive(Debug, Clone)]
pub struct LoaderProfile {
    pub loader: ModLoader,
    pub loader_version: String,
    pub main_class: String,
    /// Extra JVM arguments (`+jvmArgs`); token-substituted by the caller.
    pub jvm_args: Vec<String>,
    /// Full game-argument template the profile overrides the manifest with
    /// (`minecraftArguments`). `None` keeps the vanilla manifest's arguments.
    pub minecraft_arguments: Option<String>,
    /// Launch-wrapper tweaker classes (`+tweakers`), emitted as
    /// `--tweakClass` pairs ahead of the profile's own arguments.
    pub tweakers: Vec<String>,
    /// Profile traits (`+traits`), merged into the manifest trait set.
    pub traits: BTreeSet<String>,
    /// Classpath entries.
    pub libraries: Vec<ResolvedLoaderLib>,
    /// Files staged into the library store but kept off the classpath
    /// (Forge/NeoForge `mavenFiles`: installers, universal jars, tooling).
    pub maven_files: Vec<ResolvedLoaderLib>,
}

impl LoaderProfile {
    /// Loader jars as downloader requests rooted at the shared library store.
    /// `mavenFiles` stage alongside the classpath entries: the Forge wrapper
    /// locates them inside the libraries directory, not on the classpath.
    pub fn download_requests(&self, library_root: &Path) -> Vec<DownloadRequest> {
        self.libraries
            .iter()
            .chain(self.maven_files.iter())
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

/// Unified raw profile shape; fabric v2, quilt v3 and the Prism/Freesm Meta v1
/// Forge/NeoForge profiles all fit it. Every field is optional so the same
/// model covers both sexes of profiles.
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
    /// Meta v1: the build string the profile was published under.
    #[serde(default)]
    version: Option<String>,
    /// Meta v1: main class to spawn (`...forgewrapper.installer.Main`).
    #[serde(default)]
    main_class: Option<String>,
    /// Meta v1: full game-argument template.
    #[serde(default)]
    minecraft_arguments: Option<String>,
    #[serde(default, rename = "+jvmArgs")]
    jvm_args: Vec<String>,
    #[serde(default, rename = "+tweakers")]
    tweakers: Vec<String>,
    #[serde(default, rename = "+traits")]
    traits: Vec<String>,
    /// Meta v1: classpath entries.
    #[serde(default)]
    libraries: Vec<RawMetaLib>,
    /// Meta v1: library-store files kept off the classpath.
    #[serde(default)]
    maven_files: Vec<RawMetaLib>,
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

/// One Meta v1 `libraries` / `mavenFiles` entry (Mojang-style shape).
#[derive(Debug, Clone, Deserialize)]
struct RawMetaLib {
    name: String,
    #[serde(default)]
    downloads: Option<RawDownloads>,
}

#[derive(Debug, Clone, Deserialize)]
struct RawDownloads {
    #[serde(default)]
    artifact: Option<RawArtifact>,
}

#[derive(Debug, Clone, Deserialize)]
struct RawArtifact {
    #[serde(default)]
    url: Option<String>,
    /// Verbatim store path; authoritative when present because coordinates do
    /// not round-trip (versions may carry `+`, names an `@zip` extension).
    #[serde(default)]
    path: Option<String>,
    #[serde(default)]
    sha1: Option<String>,
}

impl RawProfile {
    /// Builds the composite [`LoaderProfile`] from one raw profile object.
    pub(crate) fn into_profile(self, loader: ModLoader) -> Result<LoaderProfile, LoaderError> {
        match loader {
            ModLoader::Forge | ModLoader::NeoForge => self.into_meta_profile(loader),
            ModLoader::Fabric | ModLoader::Quilt => self.into_knot_profile(loader),
        }
    }

    /// Prism/Freesm Meta v1 (Forge, NeoForge): the profile owns its main class,
    /// classpath entries and library-store files. Nothing is synthesized — the
    /// published payload is already the complete wrapper launch data.
    fn into_meta_profile(self, loader: ModLoader) -> Result<LoaderProfile, LoaderError> {
        let loader_version = self
            .version
            .as_deref()
            .map(str::trim)
            .filter(|version| !version.is_empty())
            .map(str::to_owned)
            .or_else(|| version_from_coordinate(self.maven.as_deref()))
            .ok_or(LoaderError::MissingField { field: "version" })?;

        // Meta v1 profiles normally carry the wrapper class; Forge 1.12.2-era
        // payloads name the launchwrapper class and lean on `+tweakers`
        // instead, so fall back to the loader's own default.
        let main_class = self
            .main_class
            .as_deref()
            .map(str::trim)
            .filter(|class| !class.is_empty())
            .unwrap_or_else(|| loader.knot_main_class())
            .to_owned();

        let libraries = self
            .libraries
            .iter()
            .map(|lib| resolve_meta_lib(lib, loader.maven_base()))
            .collect::<Result<Vec<_>, _>>()?;
        let maven_files = self
            .maven_files
            .iter()
            .map(|lib| resolve_meta_lib(lib, loader.maven_base()))
            .collect::<Result<Vec<_>, _>>()?;

        Ok(LoaderProfile {
            loader,
            loader_version,
            main_class,
            jvm_args: self.jvm_args,
            minecraft_arguments: self
                .minecraft_arguments
                .map(|args| args.trim().to_owned())
                .filter(|args| !args.is_empty()),
            tweakers: self.tweakers,
            traits: self.traits.into_iter().collect(),
            libraries,
            maven_files,
        })
    }

    /// Fabric/Quilt: mapping jar, then common + client libraries, then the
    /// synthesized loader jar when the meta dropped it.
    fn into_knot_profile(self, loader: ModLoader) -> Result<LoaderProfile, LoaderError> {
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
            ModLoader::Forge | ModLoader::NeoForge => {
                unreachable!("meta v1 profiles take the other branch")
            }
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

        // launcherMeta v2 dropped the loader artifact from its library lists
        // (`common` carries only support jars like asm/mixin): spawning the
        // Knot main class without it dies instantly with
        // `ClassNotFoundException: ...launch.knot.KnotClient`. Synthesize the
        // loader coordinate from the resolved version unless the meta already
        // lists it (older meta wordings did).
        let loader_coordinate = loader
            .loader_coordinate(&loader_version)
            .expect("fabric/quilt always carry a loader artifact coordinate");
        if !libraries.iter().any(|lib| lib.name == loader_coordinate) {
            // right behind the mapping jar keeps the loader-first classpath
            libraries.insert(1, resolve_ref(&loader_coordinate, None, None, maven_base)?);
        }

        Ok(LoaderProfile {
            loader,
            loader_version,
            main_class: loader.knot_main_class().to_owned(),
            jvm_args: Vec::new(),
            minecraft_arguments: None,
            tweakers: Vec::new(),
            traits: BTreeSet::new(),
            libraries,
            maven_files: Vec::new(),
        })
    }
}

/// Extracts the version segment of a `group:artifact:version[:...]` coordinate.
fn version_from_coordinate(coordinate: Option<&str>) -> Option<String> {
    coordinate?.split(':').nth(2).map(str::to_owned)
}

/// Resolves one Meta v1 `libraries`/`mavenFiles` entry. The metadata usually
/// names the storage path verbatim; when it does not (the Forge wrapper and
/// installer entries), expand the coordinate instead. URL-less entries fall
/// back to the loader's own maven repository.
fn resolve_meta_lib(
    entry: &RawMetaLib,
    fallback_base: &str,
) -> Result<ResolvedLoaderLib, LoaderError> {
    let artifact = entry.downloads.as_ref().and_then(|d| d.artifact.as_ref());
    let storage = match artifact.and_then(|artifact| artifact.path.as_deref()) {
        Some(path) if !path.trim().is_empty() => path.trim().to_owned(),
        _ => maven_storage_path(&entry.name)?,
    };
    let url = match artifact.and_then(|artifact| artifact.url.as_deref()) {
        Some(url) if !url.trim().is_empty() => url.trim().to_owned(),
        _ => repo_url(fallback_base, &storage),
    };
    Ok(ResolvedLoaderLib {
        name: entry.name.clone(),
        url,
        storage,
        sha1: artifact
            .and_then(|artifact| artifact.sha1.as_deref())
            .map(str::to_owned),
    })
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
/// storage path `group/artifact/version/artifact-version[-classifier].<ext>`.
/// A `name@zip` IEEE suffix names the extension instead of defaulting to
/// `.jar` (NeoForge's `neoform@zip`).
pub(crate) fn maven_storage_path(coordinate: &str) -> Result<String, LoaderError> {
    let (coordinate, suffix) = match coordinate.rsplit_once('@') {
        Some((coordinate, extension)) if !extension.is_empty() && !extension.contains(':') => {
            (coordinate, Some(extension))
        }
        _ => (coordinate, None),
    };
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
    let extension = suffix.unwrap_or("jar");
    match segments.len() {
        3 => Ok(format!("{head}.{extension}")),
        4 => Ok(format!("{head}-{}.{extension}", segments[3])),
        _ => Ok(format!("{head}-{}.{}", segments[3], segments[4])),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::resolver::{
        FABRIC_PROFILE_FIXTURE, FORGE_LEGACY_PROFILE_FIXTURE, FORGE_MODERN_PROFILE_FIXTURE,
        FORGE_WRAPPER_MAIN, NEOFORGE_PROFILE_FIXTURE, QUILT_PROFILE_FIXTURE, parse_loader_meta,
    };
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
    fn meta_without_the_loader_jar_still_yields_the_loader_artifact() {
        // genuine fabric launcherMeta v2 shape (0.20.x era): `common` carries
        // only asm support jars — the fabric-loader artifact itself is absent
        let raw = serde_json::json!({
            "loader": { "version": "0.20.1", "stable": true },
            "intermediary": { "maven": "net.fabricmc:intermediary:26.4-snapshot-8" },
            "launcherMeta": { "libraries": {
                "common": [
                    { "name": "org.ow2.asm:asm:9.10.1", "url": "https://maven.fabricmc.net/" }
                ],
                "client": [],
                "server": []
            } }
        });
        let profile = parse_loader_meta(ModLoader::Fabric, &raw).unwrap();
        let libs = &profile.libraries;
        assert_eq!(
            libs.len(),
            3,
            "intermediary + synthesized loader jar + meta-carried asm"
        );
        assert_eq!(libs[0].name, "net.fabricmc:intermediary:26.4-snapshot-8");
        assert_eq!(libs[1].name, "net.fabricmc:fabric-loader:0.20.1");
        assert_eq!(
            libs[1].storage,
            "net/fabricmc/fabric-loader/0.20.1/fabric-loader-0.20.1.jar"
        );
        assert_eq!(
            libs[1].url,
            "https://maven.fabricmc.net/net/fabricmc/fabric-loader/0.20.1/fabric-loader-0.20.1.jar"
        );
        assert_eq!(
            libs[2].name, "org.ow2.asm:asm:9.10.1",
            "meta-carried libraries keep following the synthesized loader jar"
        );
    }

    #[test]
    fn a_meta_that_already_lists_the_loader_jar_is_not_duplicated() {
        // the fixture carries fabric-loader inside `common` (older meta
        // wordings did); the synthesis must not append it a second time
        let profile = fabric_profile();
        let count = profile
            .libraries
            .iter()
            .filter(|lib| lib.name == "net.fabricmc:fabric-loader:0.16.9")
            .count();
        assert_eq!(count, 1);
        assert_eq!(profile.libraries.len(), 4);
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
        // `@ext` names the extension (NeoForge's neoform@zip)
        assert_eq!(
            maven_storage_path("net.neoforged:neoform:1.21.4-20241203.161809@zip").unwrap(),
            "net/neoforged/neoform/1.21.4-20241203.161809/neoform-1.21.4-20241203.161809.zip"
        );
        assert_eq!(maven_storage_path("g:a:1@zip").unwrap(), "g/a/1/a-1.zip");
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
    fn legacy_forge_profile_carries_tweakers_and_the_launchwrapper_class() {
        let raw: serde_json::Value = serde_json::from_str(FORGE_LEGACY_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Forge, &raw).unwrap();
        assert_eq!(profile.loader_version, "14.23.5.2864");
        assert_eq!(profile.main_class, "net.minecraft.launchwrapper.Launch");
        assert_eq!(
            profile.tweakers,
            vec!["net.minecraftforge.fml.common.launcher.FMLTweaker".to_owned()]
        );
        assert_eq!(
            profile.jvm_args,
            vec!["-Dfml.ignoreInvalidMinecraftCertificates=true".to_owned()]
        );
        assert!(profile.traits.contains("legacyLaunch"));
        assert!(profile.minecraft_arguments.is_none(), "no arg template");
        assert!(profile.maven_files.is_empty());
        assert_eq!(profile.libraries.len(), 2);
        assert_eq!(
            profile.libraries[0].storage,
            "net/minecraftforge/forge/1.12.2-14.23.5.2864/forge-1.12.2-14.23.5.2864-universal.jar"
        );
        assert_eq!(
            profile.libraries[1].url,
            "https://libraries.minecraft.net/net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar"
        );
    }

    #[test]
    fn modern_forge_profile_spawns_the_wrapper_and_stages_the_installer() {
        let raw: serde_json::Value = serde_json::from_str(FORGE_MODERN_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Forge, &raw).unwrap();
        assert_eq!(profile.loader_version, "47.4.29");
        assert_eq!(profile.main_class, FORGE_WRAPPER_MAIN);
        assert_eq!(
            profile.minecraft_arguments.as_deref(),
            Some(
                "--username ${auth_player_name} --gameDir ${game_directory} \
                 --launchTarget forgeclient --fml.forgeVersion 47.4.29 --fml.mcVersion 1.20.1"
            )
        );
        assert!(profile.tweakers.is_empty(), "modern Forge has no tweakers");
        assert!(profile.jvm_args.is_empty());

        // the wrapper artifact has no `path`: the coordinate expands instead
        assert_eq!(
            profile.libraries[0].name,
            "io.github.zekerzhayard:ForgeWrapper:prism-2026-08-01"
        );
        assert_eq!(
            profile.libraries[0].storage,
            "io/github/zekerzhayard/ForgeWrapper/prism-2026-08-01/ForgeWrapper-prism-2026-08-01.jar"
        );
        // its URL is verbatim (Prism's own mirror), not the loader maven
        assert_eq!(
            profile.libraries[0].url,
            "https://files.prismlauncher.org/maven/io/github/zekerzhayard/ForgeWrapper/prism-2026-08-01/ForgeWrapper-prism-2026-08-01.jar"
        );
        assert_eq!(
            profile.libraries[0].sha1.as_deref(),
            Some("852b7e59748da1512d40e38407eadb1f0031a996")
        );
        assert_eq!(
            profile.libraries[1].storage,
            "cpw/mods/securejarhandler/2.1.10/securejarhandler-2.1.10.jar"
        );

        // the installer stays off the classpath but is still downloaded
        assert_eq!(profile.maven_files.len(), 1);
        assert_eq!(
            profile.maven_files[0].storage,
            "net/minecraftforge/forge/1.20.1-47.4.29/forge-1.20.1-47.4.29-installer.jar"
        );
    }

    #[test]
    fn neoforge_profile_handles_zip_extensions_and_plus_versions() {
        let raw: serde_json::Value = serde_json::from_str(NEOFORGE_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::NeoForge, &raw).unwrap();
        assert_eq!(profile.loader, ModLoader::NeoForge);
        assert_eq!(profile.loader_version, "21.4.161");
        assert_eq!(profile.main_class, FORGE_WRAPPER_MAIN);
        assert!(
            profile
                .minecraft_arguments
                .as_deref()
                .is_some_and(|args| args.contains("--launchTarget neoforgeclient"))
        );
        assert_eq!(profile.libraries.len(), 1);
        assert_eq!(
            profile.libraries[0].url,
            "https://maven.neoforged.net/releases/net/neoforged/neoforge/21.4.161/neoforge-21.4.161-universal.jar"
        );

        // mavenFiles keep the verbatim `path` when present: `+` in the version
        // segment and the `@zip` extension do not round-trip coordinates
        let storages: Vec<&str> = profile
            .maven_files
            .iter()
            .map(|lib| lib.storage.as_str())
            .collect();
        assert_eq!(
            storages,
            vec![
                "net/neoforged/neoforge/21.4.161/neoforge-21.4.161-installer.jar",
                "net/neoforged/neoform/1.21.4-20241203.161809/neoform-1.21.4-20241203.161809.zip",
                "net/fabricmc/sponge-mixin/0.15.2+mixin.0.8.7/sponge-mixin-0.15.2+mixin.0.8.7.jar",
            ]
        );
    }

    #[test]
    fn meta_profiles_download_libraries_and_maven_files_into_one_store() {
        let raw: serde_json::Value = serde_json::from_str(NEOFORGE_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::NeoForge, &raw).unwrap();
        let requests = profile.download_requests(Path::new("S/libraries"));
        assert_eq!(
            requests.len(),
            profile.libraries.len() + profile.maven_files.len(),
            "classpath entries and library-store files are both fetched"
        );
        assert_eq!(
            requests.last().unwrap().dest,
            Path::new("S/libraries").join(
                "net/fabricmc/sponge-mixin/0.15.2+mixin.0.8.7/sponge-mixin-0.15.2+mixin.0.8.7.jar"
            )
        );
    }

    #[test]
    fn meta_profile_without_a_version_is_loud() {
        let raw = serde_json::json!({ "mainClass": FORGE_WRAPPER_MAIN, "libraries": [] });
        let err = parse_loader_meta(ModLoader::Forge, &raw).unwrap_err();
        assert!(
            matches!(err, LoaderError::MissingField { field: "version" }),
            "{err:?}"
        );
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
