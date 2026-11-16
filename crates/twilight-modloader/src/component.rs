//! Composite launch component: a raw loader-meta profile becomes the main-class
//! override plus the loader libraries to download and append to the classpath
//! (fabric/quilt: mapping jar first, then common, then client libraries;
//! Forge/NeoForge Meta v1: the profile's own `libraries`).

use std::collections::{BTreeSet, HashSet};
use std::path::Path;

use serde::Deserialize;

use twilight_downloader::DownloadRequest;

use crate::error::LoaderError;
use crate::resolver::{MINECRAFT_MAVEN_BASE, ModLoader};

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

/// One full manifest-shaped library from a loader patch set: classpath and
/// natives entries alike, plus its Mojang `downloads` block so the vanilla
/// resolver can expand OS classifiers. Forge/NeoForge publish flat artifact
/// lists, but Prism/Freesm MMC component patches (Legacy Fabric, Cleanroom)
/// ship native libraries that must reach the natives extraction pass.
#[derive(Debug, Clone)]
pub struct LoaderLibrary {
    pub library: twilight_manifest::Library,
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
    /// Java majors the loader patch itself declares. `None` defers to the
    /// vanilla manifest. Cleanroom declares 25 here, which is what lets a
    /// 1.12.2 instance launch on a modern JDK instead of Java 8.
    pub compatible_java_majors: Option<Vec<i32>>,
    /// Native libraries a component patch set contributes (Cleanroom's LWJGL 3,
    /// Legacy Fabric's patched LWJGL 2 / jinput). These must reach the natives
    /// extraction pass, so they travel as full manifest libraries.
    pub native_libraries: Vec<LoaderLibrary>,
    /// Coordinates the patch set *replaces*: when a patch ships an upgraded
    /// artifact for an implicit-maven coordinate, the vanilla manifest's
    /// original entry must drop out of the classpath and natives list.
    /// Prism matches by `group:artifact`, so the same shape is used here.
    pub replacements: Vec<String>,
    /// `true` when the patch set ships LWJGL 3 (`org.lwjgl:*`), which retires
    /// every legacy `org.lwjgl.lwjgl:*` entry the vanilla manifest carries.
    pub replaces_legacy_lwjgl: bool,
}

impl LoaderProfile {
    /// Java majors this profile requires, loader first then manifest.
    pub fn required_java_majors<'a>(&'a self, manifest: &'a [i32]) -> &'a [i32] {
        match &self.compatible_java_majors {
            Some(majors) if !majors.is_empty() => majors,
            _ => manifest,
        }
    }

    /// `true` when `name` (`group:artifact:version[:classifier]`) is superseded
    /// by a patch-set library.
    ///
    /// Matching is by `group:artifact` like Prism's `Library::isActive`, with
    /// one deliberate extension: LWJGL 3 lives in the `org.lwjgl` group while
    /// LWJGL 2 lives in `org.lwjgl.lwjgl`, so a patch set that upgrades LWJGL
    /// (Cleanroom's `org.lwjgl` component) must also retire the *old* group's
    /// entries — otherwise 1.12.2 gets both stacks on one classpath and dies
    /// on Java 21+.
    pub fn is_replaced(&self, name: &str) -> bool {
        let key = coordinate_key(name);
        if self
            .replacements
            .iter()
            .any(|replacement| coordinate_key(replacement) == key)
        {
            return true;
        }
        if !self.replaces_legacy_lwjgl || !key.starts_with("org.lwjgl.lwjgl:") {
            return false;
        }
        // only retire the legacy group when the patch set does *not* ship that
        // exact coordinate itself (Legacy Fabric keeps patched LWJGL 2)
        !self
            .replacements
            .iter()
            .any(|replacement| replacement == name)
    }

    /// Loader jars as downloader requests rooted at the shared library store.
    /// `mavenFiles` stage alongside the classpath entries: the Forge wrapper
    /// locates them inside the libraries directory, not on the classpath.
    pub fn download_requests(&self, library_root: &Path) -> Vec<DownloadRequest> {
        let mut requests: Vec<DownloadRequest> = self
            .libraries
            .iter()
            .chain(self.maven_files.iter())
            .map(|lib| DownloadRequest {
                url: lib.url.clone(),
                dest: library_root.join(&lib.storage),
                sha1: lib.sha1.clone(),
            })
            .collect();
        requests.extend(self.native_download_requests(library_root));
        requests
    }

    /// Downloads for the native libraries, resolved through the same manifest
    /// machinery the vanilla artifacts use (so `${arch}` classifiers expand).
    pub fn native_download_requests(&self, library_root: &Path) -> Vec<DownloadRequest> {
        let ctx = twilight_manifest::RuntimeContext::host();
        let mut requests = Vec::new();
        for entry in &self.native_libraries {
            if !entry.library.is_active(&ctx, &BTreeSet::new()) {
                continue;
            }
            for download in entry.library.resolve_downloads(&ctx) {
                requests.push(DownloadRequest {
                    url: download.url,
                    dest: library_root.join(&download.storage),
                    sha1: download.sha1,
                });
            }
        }
        requests
    }

    /// Every native jar path the extraction pass must unpack.
    pub fn native_jar_paths(&self, library_root: &Path) -> Vec<std::path::PathBuf> {
        let ctx = twilight_manifest::RuntimeContext::host();
        let mut paths = Vec::new();
        for entry in &self.native_libraries {
            if !entry.library.is_active(&ctx, &BTreeSet::new()) {
                continue;
            }
            for download in entry.library.resolve_downloads(&ctx) {
                paths.push(library_root.join(&download.storage));
            }
        }
        paths
    }
}

/// `group:artifact` of a maven coordinate, the key Prism compares on.
pub(crate) fn coordinate_key(name: &str) -> String {
    let mut parts = name.split(':');
    match (parts.next(), parts.next()) {
        (Some(group), Some(artifact)) => format!("{group}:{artifact}"),
        _ => name.to_owned(),
    }
}

/// `uid → version` map of an `mmc-pack.json` component list. The loader patch
/// files routinely omit their own `version`, so the pack document supplies it.
fn component_versions(
    mmc_pack: &[u8],
) -> Result<std::collections::HashMap<String, String>, LoaderError> {
    #[derive(Deserialize)]
    struct PackDoc {
        #[serde(default)]
        components: Vec<PackComponent>,
    }
    #[derive(Deserialize)]
    struct PackComponent {
        uid: String,
        #[serde(default)]
        version: Option<String>,
        #[serde(default)]
        cached_version: Option<String>,
    }
    let doc: PackDoc = serde_json::from_slice(mmc_pack)?;
    Ok(doc
        .components
        .into_iter()
        .filter_map(|component| {
            let version = component.version.or(component.cached_version)?;
            Some((component.uid, version))
        })
        .collect())
}

/// Test-only: merge a patch list the way [`ComponentPack`] does, without
/// building a zip. Keeps the merge logic under test where a full archive would
/// only add fixture noise.
#[cfg(test)]
pub(crate) fn merge_patches_for_test(
    loader: ModLoader,
    patches: Vec<(&str, serde_json::Value)>,
    primary: Option<&str>,
) -> Result<LoaderProfile, LoaderError> {
    let mut pack = ComponentPack::default();
    for (uid, raw) in patches {
        pack.patches.push(PackPatch {
            uid: uid.to_owned(),
            raw: serde_json::from_value(raw)?,
        });
    }
    pack.merge(loader, primary)
}

/// Test-only: build a valid stored-entry ZIP so loopback tests can serve a real
/// MMC component pack without network access.
#[cfg(test)]
pub(crate) fn build_test_pack(entries: &[(&str, &[u8])]) -> Vec<u8> {
    fn crc32(data: &[u8]) -> u32 {
        let mut crc = 0xFFFF_FFFFu32;
        for &byte in data {
            crc ^= u32::from(byte);
            for _ in 0..8 {
                crc = if crc & 1 != 0 {
                    0xEDB8_8320 ^ (crc >> 1)
                } else {
                    crc >> 1
                };
            }
        }
        crc ^ 0xFFFF_FFFF
    }
    let mut out = Vec::new();
    let mut central = Vec::new();
    for (name, body) in entries {
        let local_offset = out.len() as u32;
        let crc = crc32(body);
        out.extend_from_slice(b"PK\x03\x04");
        out.extend_from_slice(&20u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes()); // stored
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&crc.to_le_bytes());
        out.extend_from_slice(&(body.len() as u32).to_le_bytes());
        out.extend_from_slice(&(body.len() as u32).to_le_bytes());
        out.extend_from_slice(&(name.len() as u16).to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(name.as_bytes());
        out.extend_from_slice(body);

        central.extend_from_slice(b"PK\x01\x02");
        central.extend_from_slice(&20u16.to_le_bytes());
        central.extend_from_slice(&20u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&crc.to_le_bytes());
        central.extend_from_slice(&(body.len() as u32).to_le_bytes());
        central.extend_from_slice(&(body.len() as u32).to_le_bytes());
        central.extend_from_slice(&(name.len() as u16).to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&0u32.to_le_bytes());
        central.extend_from_slice(&local_offset.to_le_bytes());
        central.extend_from_slice(name.as_bytes());
    }
    let central_offset = out.len() as u32;
    out.extend_from_slice(&central);
    out.extend_from_slice(b"PK\x05\x06");
    out.extend_from_slice(&0u16.to_le_bytes());
    out.extend_from_slice(&0u16.to_le_bytes());
    out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
    out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
    out.extend_from_slice(&(central.len() as u32).to_le_bytes());
    out.extend_from_slice(&central_offset.to_le_bytes());
    out.extend_from_slice(&0u16.to_le_bytes());
    out
}

// ---------------------------------------------------------------------------
// raw meta shapes
// ---------------------------------------------------------------------------

/// Unified raw profile shape; fabric v2, quilt v3 and the Prism/Freesm Meta v1
/// Forge/NeoForge profiles all fit it. Every field is optional so the same
/// model covers both sexes of profiles — and so MMC component patches can merge
/// field by field.
#[derive(Debug, Clone, Default, Deserialize)]
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
    /// MMC patch: `+libraries` are *additions* to the parent's list.
    #[serde(default, rename = "+libraries")]
    add_libraries: Vec<RawMetaLib>,
    /// Meta v1: library-store files kept off the classpath.
    #[serde(default)]
    maven_files: Vec<RawMetaLib>,
    /// MMC patch field: the Java majors the component was built for.
    #[serde(default)]
    compatible_java_majors: Option<Vec<i32>>,
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

/// One Meta v1 / MMC patch `libraries` entry (Mojang-shaped, plus the Prism
/// `url`/`extract` extensions).
#[derive(Debug, Clone, Deserialize)]
struct RawMetaLib {
    name: String,
    /// Deprecated Prism/Mojang repository base for implicit-maven entries.
    #[serde(default)]
    url: Option<String>,
    /// Prism extension: complete URL taking precedence over the maven layout.
    #[serde(default)]
    absolute_url: Option<String>,
    #[serde(default)]
    downloads: Option<RawDownloads>,
    /// Native classifier table (`{"linux": "natives-linux"}`).
    #[serde(default)]
    natives: std::collections::HashMap<String, String>,
    #[serde(default, rename = "extract")]
    extract: Option<RawExtract>,
    #[serde(default)]
    rules: Vec<twilight_manifest::Rule>,
}

impl RawMetaLib {
    /// A natives-only sibling has a `downloads` block with classifiers but no
    /// `artifact`. An entry with *no* `downloads` at all is an implicit-maven
    /// classpath jar (`net.legacyfabric:intermediary:1.8.9`), not a native.
    fn is_natives_only(&self) -> bool {
        self.downloads
            .as_ref()
            .is_some_and(|downloads| downloads.artifact.is_none())
    }

    /// `true` when this entry contributes native jars to extract.
    fn is_native(&self) -> bool {
        !self.natives.is_empty()
    }

    /// Converts to the manifest model so the shared resolver expands
    /// classifiers, rules and `${arch}` exactly like a Mojang entry.
    fn to_library(&self) -> Result<twilight_manifest::Library, LoaderError> {
        let spec = twilight_manifest::GradleSpecifier::parse(&self.name);
        let base = self.base();
        let downloads = match &self.downloads {
            Some(downloads) => {
                let mut classifiers = std::collections::HashMap::new();
                for (classifier, info) in &downloads.classifiers {
                    let storage = maven_storage_path_for(&self.name, Some(classifier))?;
                    classifiers.insert(
                        classifier.clone(),
                        twilight_manifest::DownloadInfo {
                            url: info
                                .url
                                .clone()
                                .filter(|url| !url.trim().is_empty())
                                .unwrap_or_else(|| format!("{base}/{storage}")),
                            sha1: info.sha1.clone().unwrap_or_default(),
                            size: info.size,
                            path: None,
                        },
                    );
                }
                let artifact = match &downloads.artifact {
                    Some(info) => {
                        let storage = info
                            .path
                            .clone()
                            .filter(|path| !path.trim().is_empty())
                            .unwrap_or_else(|| self.storage_guess());
                        Some(twilight_manifest::DownloadInfo {
                            url: info
                                .url
                                .clone()
                                .filter(|url| !url.trim().is_empty())
                                .unwrap_or_else(|| format!("{base}/{storage}")),
                            sha1: info.sha1.clone().unwrap_or_default(),
                            size: info.size,
                            path: None,
                        })
                    }
                    // natives-only siblings carry classifiers but no artifact;
                    // an empty slot keeps `resolve_downloads` on the classifier
                    // path instead of falling back to implicit maven.
                    None => Some(twilight_manifest::DownloadInfo {
                        url: String::new(),
                        sha1: String::new(),
                        size: 0,
                        path: None,
                    }),
                };
                Some(twilight_manifest::LibraryDownloads {
                    artifact,
                    classifiers,
                })
            }
            None => None,
        };
        Ok(twilight_manifest::Library {
            name: spec,
            url: self.url.clone(),
            absolute_url: self.absolute_url.clone(),
            filename: None,
            hint: None,
            natives: self.natives.clone(),
            rules: self.rules.clone(),
            downloads,
            extract_excludes: self
                .extract
                .as_ref()
                .map(|extract| extract.exclude.clone())
                .unwrap_or_default(),
        })
    }

    /// Repository base for URL-less entries.
    fn base(&self) -> String {
        self.url
            .clone()
            .filter(|url| !url.trim().is_empty())
            .unwrap_or_else(|| MINECRAFT_MAVEN_BASE.to_owned())
    }

    /// The entry's own repository base when it has one, else the caller's
    /// loader maven (Forge/NeoForge publish their support jars there).
    fn base_or(&self, fallback: &str) -> String {
        self.url
            .clone()
            .filter(|url| !url.trim().is_empty())
            .unwrap_or_else(|| fallback.to_owned())
    }

    fn storage_guess(&self) -> String {
        maven_storage_path(&self.name).unwrap_or_default()
    }
}

#[derive(Debug, Clone, Default, Deserialize)]
struct RawExtract {
    #[serde(default)]
    exclude: Vec<String>,
}

#[derive(Debug, Clone, Default, Deserialize)]
struct RawDownloads {
    #[serde(default)]
    artifact: Option<RawArtifact>,
    #[serde(default)]
    classifiers: std::collections::HashMap<String, RawArtifact>,
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
    #[serde(default)]
    size: i64,
}

impl RawProfile {
    /// Builds the composite [`LoaderProfile`] from one raw profile object.
    pub(crate) fn into_profile(self, loader: ModLoader) -> Result<LoaderProfile, LoaderError> {
        match loader {
            ModLoader::Forge
            | ModLoader::NeoForge
            | ModLoader::Cleanroom
            | ModLoader::LegacyFabric => self.into_meta_profile(loader),
            ModLoader::Fabric | ModLoader::Quilt => self.into_knot_profile(loader),
        }
    }

    /// Prism/Freesm Meta v1 (Forge, NeoForge) and CleanroomMC component
    /// patches: the profile owns its main class, classpath entries and
    /// library-store files. Nothing is synthesized — the published payload is
    /// already the complete launch data.
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

        // A patch may carry one entry per artifact *and* a natives-only sibling
        // (Mojang `classifiers`). Artifact-only entries go on the classpath;
        // natives entries travel as full manifest libraries so the extraction
        // pass can unpack them.
        let mut native_libraries = Vec::new();
        let mut replacements = Vec::new();
        let mut libraries = Vec::new();
        for entry in self.libraries.iter().chain(self.add_libraries.iter()) {
            if entry.is_native() {
                // a natives-bearing entry may still carry a classpath artifact
                // (LWJGL's `lwjgl-platform` does not, Cleanroom's `lwjgl` does)
                if !entry.is_natives_only() {
                    libraries.push(resolve_meta_lib(entry, loader.maven_base())?);
                    // the natives of this same entry still need extracting
                    native_libraries.push(LoaderLibrary {
                        library: entry.to_library()?,
                    });
                } else {
                    native_libraries.push(LoaderLibrary {
                        library: entry.to_library()?,
                    });
                }
                // Prism replaces by `group:artifact`, whatever the version
                replacements.push(entry.name.clone());
                continue;
            }
            if entry.is_natives_only() {
                // classifiers-only sibling with no native table either: this is
                // a mavenFile-style store entry, not a classpath jar
                native_libraries.push(LoaderLibrary {
                    library: entry.to_library()?,
                });
                continue;
            }
            libraries.push(resolve_meta_lib(entry, loader.maven_base())?);
        }
        let maven_files = self
            .maven_files
            .iter()
            .filter(|lib| !lib.is_natives_only())
            .map(|lib| resolve_meta_lib(lib, loader.maven_base()))
            .collect::<Result<Vec<_>, _>>()?;

        // an `org.lwjgl:*` patch is a whole-family upgrade: LWJGL 3 supersedes
        // 1.12.2's `org.lwjgl.lwjgl:*` (LWJGL 2) entries
        let replaces_legacy_lwjgl =
            self.libraries
                .iter()
                .chain(self.add_libraries.iter())
                .any(|entry| {
                    let mut segments = entry.name.split(':');
                    segments.next() == Some("org.lwjgl")
                        && segments.next().is_some()
                        && !entry.is_natives_only()
                });

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
            compatible_java_majors: self.compatible_java_majors,
            native_libraries,
            replacements,
            replaces_legacy_lwjgl,
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
            ModLoader::Forge
            | ModLoader::NeoForge
            | ModLoader::Cleanroom
            | ModLoader::LegacyFabric => {
                unreachable!("meta v1 / patch-set profiles take the other branch")
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
            compatible_java_majors: None,
            native_libraries: Vec::new(),
            replacements: Vec::new(),
            replaces_legacy_lwjgl: false,
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
        // a Prism/Mojang `url` on the entry itself is the repository base
        _ => repo_url(&entry.base_or(fallback_base), &storage),
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

/// Storage path of one classifier artifact of `coordinate`, e.g.
/// `org/lwjgl/lwjgl/3.3.3/lwjgl-3.3.3-natives-windows.jar`.
fn maven_storage_path_for(
    coordinate: &str,
    classifier: Option<&str>,
) -> Result<String, LoaderError> {
    let base = maven_storage_path(coordinate)?;
    let Some(classifier) = classifier.filter(|c| !c.is_empty()) else {
        return Ok(base);
    };
    // `.../artifact-version.jar` → `.../artifact-version-<classifier>.jar`
    let (stem, extension) = match base.rsplit_once('.') {
        Some((stem, extension)) => (stem, extension),
        None => (base.as_str(), "jar"),
    };
    Ok(format!("{stem}-{classifier}.{extension}"))
}

// ---------------------------------------------------------------------------
// MMC component packs (`instance/zip`, `cleanroom-<version>.zip`)
// ---------------------------------------------------------------------------

/// One patch file inside an MMC component pack.
#[derive(Debug, Clone)]
pub struct PackPatch {
    /// Patch file stem, e.g. `patches/org.lwjgl.json` → `org.lwjgl`.
    pub uid: String,
    /// Parsed patch document.
    pub(crate) raw: RawProfile,
}

/// A parsed MultiMC/Prism component pack: `mmc-pack.json` plus every
/// `patches/*.json` it lists. This is the authoritative launch description for
/// loaders that publish one (Legacy Fabric, CleanroomMC) — the launcher-stock
/// list endpoints omit native patches entirely.
#[derive(Debug, Clone, Default)]
pub struct ComponentPack {
    pub patches: Vec<PackPatch>,
    /// Loader build the pack document declares. Legacy Fabric ships no
    /// `patches/*fabric-loader.json`, so this is the only place its version is.
    pub loader_version: Option<String>,
}

impl ComponentPack {
    /// Reads `mmc-pack.json` + `patches/*.json` out of an archive.
    pub fn parse(archive: &[u8]) -> Result<Self, LoaderError> {
        let entries = twilight_modrinth::zip_entry_names(archive).map_err(LoaderError::Pack)?;
        let mut patches = Vec::new();
        // `mmc-pack.json` names the components *and* their versions; a patch
        // file often omits `version`, so the pack document is the authority
        let pack_versions = match entries.iter().find(|name| name.as_str() == "mmc-pack.json") {
            Some(name) => {
                let bytes =
                    twilight_modrinth::zip_entry(archive, name).map_err(LoaderError::Pack)?;
                component_versions(&bytes)?
            }
            None => std::collections::HashMap::new(),
        };
        // the pack document also names the loader build; no patch file exists
        // for it in a Legacy Fabric instance zip
        let pack_loader_version = pack_versions
            .iter()
            .find(|(uid, _)| uid.ends_with("fabric-loader") || uid.ends_with("forge"))
            .map(|(_, version)| version.clone());
        for name in entries {
            let Some(stem) = name
                .strip_prefix("patches/")
                .and_then(|rest| rest.strip_suffix(".json"))
                .map(str::to_owned)
            else {
                continue;
            };
            let bytes = twilight_modrinth::zip_entry(archive, &name).map_err(LoaderError::Pack)?;
            let mut raw: RawProfile = serde_json::from_slice(&bytes)?;
            if raw.version.is_none() {
                raw.version = pack_versions.get(&stem).cloned();
            }
            patches.push(PackPatch { uid: stem, raw });
        }
        Ok(Self {
            patches,
            loader_version: pack_loader_version,
        })
    }

    /// Merges every patch into one profile, in pack order.
    pub fn into_profile(self, loader: ModLoader) -> Result<LoaderProfile, LoaderError> {
        self.merge(loader, None)
    }

    /// Merges only the patch whose uid is `uid` (Cleanroom's loader lives in
    /// the `net.minecraftforge` component), plus every natives-bearing patch.
    pub fn into_named_profile(
        self,
        loader: ModLoader,
        uid: &str,
    ) -> Result<LoaderProfile, LoaderError> {
        self.merge(loader, Some(uid))
    }

    fn merge(self, loader: ModLoader, primary: Option<&str>) -> Result<LoaderProfile, LoaderError> {
        let mut merged = RawProfile::default();
        let mut saw_primary = primary.is_none();
        // the pack document's loader build wins over any patch's `version`
        // (the LWJGL patch also carries one, and it is not the loader's)
        let mut loader_version = self.loader_version.clone();
        for patch in self.patches {
            let is_primary = primary.is_none_or(|uid| patch.uid == uid);
            saw_primary |= is_primary;
            let names_loader = patch.uid.ends_with("fabric-loader")
                || patch.uid.ends_with("forge")
                || patch.uid.ends_with("quilt-loader");
            // natives and replacement coordinates always merge: the LWJGL patch
            // is a separate component from the loader patch
            merged.libraries.extend(patch.raw.libraries.iter().cloned());
            merged
                .add_libraries
                .extend(patch.raw.add_libraries.iter().cloned());
            if !is_primary {
                continue;
            }
            if names_loader {
                loader_version = loader_version.or(patch.raw.version.clone());
            }
            merged.version = merged.version.or(patch.raw.version);
            merged.main_class = merged.main_class.or(patch.raw.main_class);
            merged.minecraft_arguments =
                merged.minecraft_arguments.or(patch.raw.minecraft_arguments);
            merged.jvm_args.extend(patch.raw.jvm_args);
            merged.tweakers.extend(patch.raw.tweakers);
            merged.traits.extend(patch.raw.traits);
            if merged.compatible_java_majors.is_none() {
                merged.compatible_java_majors = patch.raw.compatible_java_majors;
            }
        }
        if !saw_primary {
            return Err(LoaderError::MissingField {
                field: "loader component patch",
            });
        }
        merged.version = loader_version.or(merged.version);
        merged.into_profile(loader)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::resolver::{
        CLEANROOM_JAVA_MAJORS, CLEANROOM_PROFILE_FIXTURE, FABRIC_PROFILE_FIXTURE,
        FORGE_LEGACY_PROFILE_FIXTURE, FORGE_MODERN_PROFILE_FIXTURE, FORGE_WRAPPER_MAIN,
        NEOFORGE_PROFILE_FIXTURE, QUILT_PROFILE_FIXTURE, parse_loader_meta,
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
    fn cleanroom_patch_parses_the_modern_java_bootstrap() {
        let raw: serde_json::Value = serde_json::from_str(CLEANROOM_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Cleanroom, &raw).unwrap();

        assert_eq!(profile.loader, ModLoader::Cleanroom);
        assert_eq!(profile.loader_version, "0.7.14-alpha");
        assert_eq!(
            profile.main_class, "top.outlands.foundation.boot.Foundation",
            "Cleanroom boots through its own Foundation class"
        );
        assert_eq!(
            profile.compatible_java_majors.as_deref(),
            Some(&[25][..]),
            "the published patch declares exactly Java 25"
        );
        assert_eq!(
            profile.required_java_majors(&[8]),
            &[25],
            "the patch's Java 25 requirement overrides 1.12.2's Java 8"
        );
        assert!(
            CLEANROOM_JAVA_MAJORS.iter().all(|major| *major >= 21),
            "the loader's fallback majors accept modern runtimes only"
        );
        assert!(CLEANROOM_JAVA_MAJORS.contains(&21), "Java 21 also works");
        assert_eq!(
            profile.tweakers,
            vec!["net.minecraftforge.fml.common.launcher.FMLTweaker".to_owned()],
            "Cleanroom still boots Forge's launchwrapper tweaker"
        );
        assert!(profile.traits.contains("FirstThreadOnMacOS"));

        // the natives-only sibling entry is dropped from the classpath
        assert_eq!(
            profile.libraries.len(),
            3,
            "classifier-only entries never reach the classpath: {:?}",
            profile
                .libraries
                .iter()
                .map(|lib| lib.name.as_str())
                .collect::<Vec<_>>()
        );
        assert_eq!(
            profile.libraries[0].url,
            "https://maven.cleanroommc.com/com/cleanroommc/cleanroom/0.7.14-alpha/cleanroom-0.7.14-alpha-universal.jar"
        );
    }

    #[test]
    fn non_cleanroom_profiles_defer_to_the_manifest_java() {
        let profile = fabric_profile();
        assert_eq!(profile.compatible_java_majors, None);
        assert_eq!(
            profile.required_java_majors(&[21]),
            &[21],
            "loaders without a java declaration keep the manifest majors"
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
