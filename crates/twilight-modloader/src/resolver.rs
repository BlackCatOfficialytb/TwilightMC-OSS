//! Loader metadata endpoints and profile resolution: fabric meta v2, quilt
//! meta v3, legacy fabric meta v2, the Prism/Freesm Meta v1 indices
//! (`net.minecraftforge`, `net.neoforged`) and CleanroomMC's MMC component
//! pack. Latest stable comes from the list endpoint, a pinned request hits the
//! version endpoint.

use std::fmt;

use reqwest::Client;
use twilight_downloader::{FREESM_META_BASE, PRISM_META_BASE};

use crate::component::{LoaderProfile, RawProfile};
use crate::error::LoaderError;

/// Fabric metadata host (API v2).
pub const FABRIC_META_BASE: &str = "https://meta.fabricmc.net";
/// Legacy Fabric metadata host (same v2 schema as Fabric).
pub const LEGACY_FABRIC_META_BASE: &str = "https://meta.legacyfabric.net";
/// Legacy Fabric maven repository (intermediary + patched LWJGL2).
pub const LEGACY_FABRIC_MAVEN_BASE: &str = "https://maven.legacyfabric.net/";
/// CleanroomMC maven repository (cleanroom, cleanmix, patched fork artifacts).
pub const CLEANROOM_MAVEN_BASE: &str = "https://maven.cleanroommc.com/";
/// CleanroomMC release channel publishing the MMC component packs.
pub const CLEANROOM_RELEASES_BASE: &str =
    "https://github.com/CleanroomMC/Cleanroom/releases/download";
/// CleanroomMC release listing (`maven-metadata.xml` pins `<release>`).
pub const CLEANROOM_METADATA_URL: &str =
    "https://maven.cleanroommc.com/com/cleanroommc/cleanroom/maven-metadata.xml";
/// Java majors Cleanroom's own patch declares (`compatibleJavaMajors`); the
/// loader is a 1.12.2 fork that runs on modern runtimes only.
pub const CLEANROOM_JAVA_MAJORS: &[i32] = &[25, 21];
/// Quilt metadata host (API v3).
pub const QUILT_META_BASE: &str = "https://meta.quiltmc.org";
/// Forge wrapper main class both Prism Meta v1 Forge and NeoForge profiles
/// spawn; the wrapper installs the real loader before handing over.
pub const FORGE_WRAPPER_MAIN: &str = "io.github.zekerzhayard.forgewrapper.installer.Main";
/// Maven repository Forge profile entries resolve against.
pub const FORGE_MAVEN_BASE: &str = "https://maven.minecraftforge.net/";
/// Maven repository NeoForge profile entries resolve against.
pub const NEOFORGE_MAVEN_BASE: &str = "https://maven.neoforged.net/releases/";
/// Minecraft libraries repository, the fallback for `mavenFiles` entries the
/// Prism profiles leave url-less.
pub const MINECRAFT_MAVEN_BASE: &str = "https://libraries.minecraft.net/";

/// Wire formats TwilightMC resolves into composite launch overlays.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ModLoader {
    Fabric,
    Quilt,
    Forge,
    NeoForge,
    /// Legacy Fabric: Fabric's v2 meta schema backed by a pre-1.14 fork.
    LegacyFabric,
    /// CleanroomMC: a 1.12.2 Forge fork running on modern Java.
    Cleanroom,
}

impl ModLoader {
    /// Maps a case-insensitive CLI token (`fabric`, `quilt`, `forge`,
    /// `neoforge`, `legacyfabric`, `cleanroom`, whitespace trimmed) onto a
    /// loader.
    pub fn from_token(token: &str) -> Option<Self> {
        match token
            .trim()
            .to_ascii_lowercase()
            .replace([' ', '-', '_'], "")
            .as_str()
        {
            "fabric" => Some(Self::Fabric),
            "quilt" => Some(Self::Quilt),
            "forge" => Some(Self::Forge),
            "neoforge" => Some(Self::NeoForge),
            "legacyfabric" => Some(Self::LegacyFabric),
            "cleanroom" | "cleanroommc" => Some(Self::Cleanroom),
            _ => None,
        }
    }

    /// Main class the composited launch spawns when the profile itself does
    /// not carry one (fabric/quilt Knot launchers, the Forge wrapper).
    pub const fn knot_main_class(self) -> &'static str {
        match self {
            Self::Fabric | Self::LegacyFabric => "net.fabricmc.loader.impl.launch.knot.KnotClient",
            Self::Quilt => "org.quiltmc.loader.impl.launch.knot.KnotClient",
            Self::Forge | Self::NeoForge => FORGE_WRAPPER_MAIN,
            // Cleanroom's component pack names its own bootstrap class
            Self::Cleanroom => "top.outlands.foundation.boot.Foundation",
        }
    }

    /// Primary maven repository resolving url-less profile entries.
    pub const fn maven_base(self) -> &'static str {
        match self {
            Self::Fabric => "https://maven.fabricmc.net/",
            Self::Quilt => "https://maven.quiltmc.org/repository/release/",
            Self::Forge => FORGE_MAVEN_BASE,
            Self::NeoForge => NEOFORGE_MAVEN_BASE,
            Self::LegacyFabric => LEGACY_FABRIC_MAVEN_BASE,
            Self::Cleanroom => CLEANROOM_MAVEN_BASE,
        }
    }

    /// Fallback repositories tried when the primary base misses.
    pub const fn maven_fallbacks(self) -> &'static [&'static str] {
        match self {
            // legacy fabric's support jars (asm, mixin, fabric-loader) live in
            // the upstream fabric repo; patched LWJGL2 lives in its own
            Self::LegacyFabric => &["https://maven.fabricmc.net/", MINECRAFT_MAVEN_BASE],
            // cleanroom forks part of the Forge stack and pulls plain Maven
            Self::Cleanroom => &[
                "https://repo.maven.apache.org/maven2/",
                MINECRAFT_MAVEN_BASE,
            ],
            _ => &[],
        }
    }

    /// True when the loader's classes are a Fabric v2 meta schema (the
    /// composite needs a mapping jar and a synthesized loader artifact).
    pub const fn is_fabric_family(self) -> bool {
        matches!(self, Self::Fabric | Self::Quilt | Self::LegacyFabric)
    }

    /// Java majors the loader itself requires, overriding the vanilla
    /// manifest's requirement. Cleanroom is the whole point of this override:
    /// its 1.12.2 target declares Java 8 upstream, but the fork needs 21+.
    pub const fn required_java_majors(self) -> Option<&'static [i32]> {
        match self {
            Self::Cleanroom => Some(CLEANROOM_JAVA_MAJORS),
            _ => None,
        }
    }

    /// True when the loader targets exactly one Minecraft version.
    pub const fn fixed_game_version(self) -> Option<&'static str> {
        match self {
            Self::Cleanroom => Some("1.12.2"),
            _ => None,
        }
    }

    /// Prism Meta v1 component uid of loaders served by that index; `None` for
    /// the loaders with their own native meta APIs.
    pub const fn meta_uid(self) -> Option<&'static str> {
        match self {
            Self::Forge => Some("net.minecraftforge"),
            Self::NeoForge => Some("net.neoforged"),
            _ => None,
        }
    }

    /// Meta v1 hosts, in failover order (Prism first, Freesm mirror second).
    pub const fn meta_v1_bases(self) -> &'static [&'static str] {
        &[PRISM_META_BASE, FREESM_META_BASE]
    }

    /// Maven coordinate of the loader artifact itself. Modern `launcherMeta`
    /// v2 library lists no longer include it (they carry only support jars
    /// like asm/mixin), so profile resolution must synthesize this entry or
    /// the Knot main class cannot load. Meta v1 Forge/NeoForge profiles list
    /// every artifact they need, so they synthesize nothing.
    pub fn loader_coordinate(self, version: &str) -> Option<String> {
        match self {
            Self::Fabric | Self::LegacyFabric => {
                Some(format!("net.fabricmc:fabric-loader:{version}"))
            }
            Self::Quilt => Some(format!("org.quiltmc:quilt-loader:{version}")),
            Self::Forge | Self::NeoForge | Self::Cleanroom => None,
        }
    }

    /// Envelope field of the mapping jar (`intermediary` / `hashed`); the
    /// Forge profiles ship their mapping inside the loader payload instead.
    pub const fn mapping_field(self) -> &'static str {
        match self {
            Self::Fabric | Self::LegacyFabric => "intermediary",
            Self::Quilt => "hashed",
            Self::Forge | Self::NeoForge | Self::Cleanroom => "mappings",
        }
    }

    /// Metadata host of the loader API (native APIs only; Meta v1 loaders
    /// answer from the first failover host). Cleanroom publishes component
    /// packs on GitHub, so it has no meta host.
    pub const fn meta_base(self) -> &'static str {
        match self {
            Self::Fabric => FABRIC_META_BASE,
            Self::LegacyFabric => LEGACY_FABRIC_META_BASE,
            Self::Quilt => QUILT_META_BASE,
            // Meta v1 loaders fail over across two hosts; the first wins.
            Self::Forge | Self::NeoForge => self.meta_v1_bases()[0],
            Self::Cleanroom => CLEANROOM_MAVEN_BASE,
        }
    }

    /// Endpoint path `v2|v3/versions/loader/{game}[/{loader_version}]` for the
    /// native APIs, `{uid}/index.json` / `{uid}/{version}.json` for Meta v1.
    /// An empty loader version selects the list endpoint (latest stable).
    fn endpoint_path(self, game_version: &str, loader_version: Option<&str>) -> String {
        let pinned = loader_version.filter(|version| !version.trim().is_empty());
        if let Some(uid) = self.meta_uid() {
            return match pinned {
                Some(version) => format!("{uid}/{}.json", version.trim()),
                None => format!("{uid}/index.json"),
            };
        }
        let api = match self {
            Self::Fabric | Self::LegacyFabric => "v2",
            Self::Quilt => "v3",
            Self::Forge | Self::NeoForge => unreachable!("meta v1 loaders returned above"),
            Self::Cleanroom => unreachable!("cleanroom resolves through component packs"),
        };
        match pinned {
            Some(version) => format!("{api}/versions/loader/{game_version}/{}", version.trim()),
            None => format!("{api}/versions/loader/{game_version}"),
        }
    }
}

impl fmt::Display for ModLoader {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(match self {
            Self::Fabric => "fabric",
            Self::Quilt => "quilt",
            Self::Forge => "forge",
            Self::NeoForge => "neoforge",
            Self::LegacyFabric => "legacyfabric",
            Self::Cleanroom => "cleanroom",
        })
    }
}

/// Endpoint URL for `loader.meta_base()`. Bases may or may not carry a
/// trailing slash (the Meta v1 constants do).
pub fn profile_url(
    base: &str,
    loader: ModLoader,
    game_version: &str,
    loader_version: Option<&str>,
) -> String {
    format!(
        "{}/{}",
        base.trim_end_matches('/'),
        loader.endpoint_path(game_version, loader_version)
    )
}

/// One Meta v1 index entry, filtered down to what launch needs.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct LoaderBuild {
    /// Loader build string, e.g. `47.4.29` or `21.4.161`.
    pub version: String,
    /// The index marks this build recommended for its game version.
    pub recommended: bool,
}

/// Picks the index entries whose `requires` pin `net.minecraft` to
/// `game_version`, preserving index order (newest first in practice).
///
/// Both the Prism and Freesm Meta v1 indices are plain
/// `{ "versions": [ { "version", "recommended", "requires": [ { "uid",
/// "equals" } ] } ] }` objects; unrelated requirements (loader/API
/// components) are ignored, only the Minecraft pin matters.
pub fn parse_meta_index(raw: &serde_json::Value, game_version: &str) -> Vec<LoaderBuild> {
    let wanted = game_version.trim();
    let Some(list) = raw.get("versions").and_then(|value| value.as_array()) else {
        return Vec::new();
    };
    list.iter()
        .filter(|entry| {
            entry
                .get("requires")
                .and_then(|value| value.as_array())
                .is_some_and(|requires| {
                    requires.iter().any(|require| {
                        require.get("uid").and_then(|uid| uid.as_str()) == Some("net.minecraft")
                            && require
                                .get("equals")
                                .and_then(|equals| equals.as_str())
                                .is_some_and(|equals| equals.trim() == wanted)
                    })
                })
        })
        .filter_map(|entry| {
            let version = entry.get("version")?.as_str()?.trim();
            if version.is_empty() {
                return None;
            }
            Some(LoaderBuild {
                version: version.to_owned(),
                recommended: entry.get("recommended") == Some(&serde_json::Value::Bool(true)),
            })
        })
        .collect()
}

/// Latest build for `game_version`: the recommended entry when the index
/// carries one, else the newest (first) build.
pub fn pick_meta_build(raw: &serde_json::Value, game_version: &str) -> Option<LoaderBuild> {
    let builds = parse_meta_index(raw, game_version);
    builds
        .iter()
        .find(|build| build.recommended)
        .or_else(|| builds.first())
        .cloned()
}

/// Resolves the composite [`LoaderProfile`] for a Minecraft version:
/// `loader_version` `None`/empty uses the latest stable list entry, otherwise
/// the version-pinned profile endpoint answers.
///
/// Meta v1 loaders take two requests: the `{uid}/index.json` list filtered by
/// the `net.minecraft` requirement, then the pinned `{uid}/{version}.json`
/// profile. Both hosts are tried in failover order.
pub async fn resolve_loader_profile(
    client: &Client,
    loader: ModLoader,
    game_version: &str,
    loader_version: Option<&str>,
) -> Result<LoaderProfile, LoaderError> {
    if loader == ModLoader::Cleanroom {
        return resolve_cleanroom(client, loader_version).await;
    }
    let Some(uid) = loader.meta_uid() else {
        let url = profile_url(loader.meta_base(), loader, game_version, loader_version);
        return fetch_profile(client, loader, &url).await;
    };
    resolve_meta_v1(
        client,
        loader,
        uid,
        game_version,
        loader_version,
        loader.meta_v1_bases(),
    )
    .await
}

/// Resolves CleanroomMC from its published MMC component packs: the maven
/// metadata pins the release, the release zip carries `mmc-pack.json` plus a
/// `patches/net.minecraftforge.json` describing the loader itself.
///
/// Unlike every other loader, Cleanroom's launch data is a *patch set*: it
/// needs the vanilla 1.12.2 manifest plus the Forge patch's main class,
/// tweakers and 128 library coordinates. `game_version` is fixed at 1.12.2.
pub async fn resolve_cleanroom(
    client: &Client,
    loader_version: Option<&str>,
) -> Result<LoaderProfile, LoaderError> {
    let pin = loader_version
        .map(str::trim)
        .filter(|version| !version.is_empty());
    let version = match pin {
        Some(version) => version.to_owned(),
        None => fetch_cleanroom_release(client).await?,
    };
    let url = cleanroom_pack_url(&version);
    let response = client
        .get(&url)
        .send()
        .await
        .map_err(|source| LoaderError::Http {
            url: url.clone(),
            source,
        })?;
    if !response.status().is_success() {
        return Err(LoaderError::HttpStatus {
            url: url.clone(),
            status: response.status().as_u16(),
        });
    }
    let bytes = response
        .bytes()
        .await
        .map_err(|source| LoaderError::Http {
            url: url.clone(),
            source,
        })?
        .to_vec();
    let patch = twilight_modrinth::zip_entry(&bytes, "patches/net.minecraftforge.json")
        .map_err(LoaderError::Pack)?;
    let raw: serde_json::Value = serde_json::from_slice(&patch).map_err(LoaderError::from)?;
    let mut profile = parse_loader_meta(ModLoader::Cleanroom, &raw)?;
    // the pack's forge patch does not repeat the release version we fetched
    if profile.loader_version.trim().is_empty() {
        profile.loader_version = version;
    }
    Ok(profile)
}

/// `maven-metadata.xml`'s `<release>` tag pins the newest Cleanroom build.
async fn fetch_cleanroom_release(client: &Client) -> Result<String, LoaderError> {
    let url = CLEANROOM_METADATA_URL.to_owned();
    let response = client
        .get(&url)
        .send()
        .await
        .map_err(|source| LoaderError::Http {
            url: url.clone(),
            source,
        })?;
    if !response.status().is_success() {
        return Err(LoaderError::HttpStatus {
            url: url.clone(),
            status: response.status().as_u16(),
        });
    }
    let text = response.text().await.map_err(|source| LoaderError::Http {
        url: url.clone(),
        source,
    })?;
    parse_cleanroom_release(&text).ok_or(LoaderError::NoStableProfile {
        loader: "cleanroom".to_owned(),
    })
}

/// Extracts `<release>` from Cleanroom's maven metadata, falling back to the
/// last `<version>` when the tag is absent.
pub fn parse_cleanroom_release(xml: &str) -> Option<String> {
    fn tag<'a>(text: &'a str, name: &str) -> Option<&'a str> {
        let open = format!("<{name}>");
        let close = format!("</{name}>");
        let start = text.find(&open)? + open.len();
        let end = text[start..].find(&close)? + start;
        Some(text[start..end].trim())
    }
    if let Some(release) = tag(xml, "release").filter(|v| !v.is_empty()) {
        return Some(release.to_owned());
    }
    // no `<release>`: the last well-formed `<version>` entry answers
    xml.rsplit("<version>")
        .next()
        .and_then(|tail| tail.split("</version>").next())
        .map(str::trim)
        .filter(|v| !v.is_empty() && !v.contains('<'))
        .map(str::to_owned)
}

/// Release asset URL of the MMC component pack for `version`.
pub fn cleanroom_pack_url(version: &str) -> String {
    format!("{CLEANROOM_RELEASES_BASE}/{version}/cleanroom-{version}.zip")
}

/// Two-step Meta v1 resolution over an ordered host list: pick the build from
/// `{uid}/index.json` when the request is unpinned, then read
/// `{uid}/{version}.json`. Each host is tried in turn; the last failure wins.
async fn resolve_meta_v1(
    client: &Client,
    loader: ModLoader,
    uid: &str,
    game_version: &str,
    loader_version: Option<&str>,
    bases: &[&str],
) -> Result<LoaderProfile, LoaderError> {
    let pinned = loader_version
        .map(str::trim)
        .filter(|version| !version.is_empty());

    let resolved = match pinned {
        Some(version) => version.to_owned(),
        None => {
            let mut last_error = None;
            let mut picked = None;
            for base in bases {
                let url = format!("{base}{uid}/index.json");
                match fetch_json(client, &url).await {
                    Ok(raw) => match pick_meta_build(&raw, game_version) {
                        Some(build) => {
                            picked = Some(build.version);
                            break;
                        }
                        None => {
                            last_error = Some(LoaderError::NoStableProfile {
                                loader: format!("{loader} {game_version}"),
                            })
                        }
                    },
                    Err(error) => last_error = Some(error),
                }
            }
            match picked {
                Some(version) => version,
                None => {
                    return Err(last_error.unwrap_or(LoaderError::NoStableProfile {
                        loader: loader.to_string(),
                    }));
                }
            }
        }
    };

    let mut last_error = None;
    for base in bases {
        let url = format!("{base}{uid}/{resolved}.json");
        match fetch_profile(client, loader, &url).await {
            Ok(profile) => return Ok(profile),
            Err(error) => last_error = Some(error),
        }
    }
    Err(last_error.unwrap_or(LoaderError::NoStableProfile {
        loader: loader.to_string(),
    }))
}

/// GETs one JSON document, surfacing transport and status failures.
async fn fetch_json(client: &Client, url: &str) -> Result<serde_json::Value, LoaderError> {
    let response = client
        .get(url)
        .send()
        .await
        .map_err(|source| LoaderError::Http {
            url: url.to_owned(),
            source,
        })?;
    if !response.status().is_success() {
        return Err(LoaderError::HttpStatus {
            url: url.to_owned(),
            status: response.status().as_u16(),
        });
    }
    response.json().await.map_err(|source| LoaderError::Http {
        url: url.to_owned(),
        source,
    })
}

/// Fetches and parses one meta endpoint (shared by production + loopback tests).
async fn fetch_profile(
    client: &Client,
    loader: ModLoader,
    url: &str,
) -> Result<LoaderProfile, LoaderError> {
    let raw = fetch_json(client, url).await?;
    parse_loader_meta(loader, &raw)
}

/// Parses a list endpoint (first stable entry wins, else the first entry) or a
/// version-pinned profile object into the composite launch component.
///
/// Meta v1 Forge/NeoForge profiles are single objects and parse directly;
/// their index documents are handled by [`parse_meta_index`].
pub fn parse_loader_meta(
    loader: ModLoader,
    raw: &serde_json::Value,
) -> Result<LoaderProfile, LoaderError> {
    let picked = match raw {
        serde_json::Value::Array(list) => list
            .iter()
            .find(|entry| {
                matches!(
                    entry.pointer("/loader/stable"),
                    Some(serde_json::Value::Bool(true))
                )
            })
            .or_else(|| list.first())
            .ok_or_else(|| LoaderError::NoStableProfile {
                loader: loader.to_string(),
            })?
            .clone(),
        other => other.clone(),
    };
    let profile: RawProfile = serde_json::from_value(picked)?;
    profile.into_profile(loader)
}

#[cfg(test)]
pub(crate) const FABRIC_PROFILE_FIXTURE: &str = r#"{
    "loader": { "version": "0.16.9", "stable": true },
    "intermediary": {
        "maven": "net.fabricmc:intermediary:1.21.4",
        "url": "https://maven.fabricmc.net/net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar",
        "version": "1.21.4"
    },
    "launcherMeta": {
        "libraries": {
            "common": [
                { "name": "net.fabricmc:fabric-loader:0.16.9", "url": "https://maven.fabricmc.net/" },
                { "name": "org.ow2.asm:asm:9.6", "sha1": "3d2af0b73e0d4032ac0f726d1b1c9e5a0b8e2be1" }
            ],
            "client": [
                { "name": "org.spongepowered:mixin:0.8.5", "url": "https://repo.spongepowered.org/repository/maven-public/" }
            ],
            "server": [
                { "name": "org.spongepowered:mixin:0.8.5", "url": "https://repo.spongepowered.org/repository/maven-public/" }
            ]
        }
    }
}"#;

#[cfg(test)]
pub(crate) const QUILT_PROFILE_FIXTURE: &str = r#"{
    "hashed": {
        "maven": "org.quiltmc:hashed:1.21.4",
        "version": "1.21.4"
    },
    "maven": "org.quiltmc:quilt-loader:0.26.4",
    "launcherMeta": {
        "libraries": {
            "common": [
                { "name": "org.quiltmc:quilt-loader:0.26.4", "url": "https://maven.quiltmc.org/repository/release/" },
                { "name": "org.ow2.asm:asm:9.6", "url": "https://maven.fabricmc.net/" }
            ],
            "client": [],
            "server": []
        }
    }
}"#;

#[cfg(test)]
pub(crate) const FABRIC_LIST_FIXTURE: &str = r#"[
    {
        "loader": { "version": "0.15.3", "stable": false },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.3" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    },
    {
        "loader": { "version": "0.16.9", "stable": true },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.4" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    },
    {
        "loader": { "version": "0.17.0-beta.1", "stable": false },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.5" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    }
]"#;

#[cfg(test)]
pub(crate) const FORGE_INDEX_FIXTURE: &str = r#"{
    "formatVersion": 1,
    "name": "Forge",
    "uid": "net.minecraftforge",
    "versions": [
        {
            "version": "47.4.29", "type": "release", "recommended": false,
            "releaseTime": "2026-11-01T00:00:00+00:00",
            "requires": [{ "uid": "net.minecraft", "equals": "1.20.1" }]
        },
        {
            "version": "47.3.0", "type": "release", "recommended": true,
            "releaseTime": "2025-06-01T00:00:00+00:00",
            "requires": [{ "uid": "net.minecraft", "equals": "1.20.1" }]
        },
        {
            "version": "47.2.0", "type": "release", "recommended": false,
            "releaseTime": "2025-01-01T00:00:00+00:00",
            "requires": [
                { "uid": "net.minecraft", "equals": "1.20.1" },
                { "uid": "net.minecraftforge", "equals": "1.20.1" }
            ]
        },
        {
            "version": "49.0.30", "type": "release", "recommended": false,
            "releaseTime": "2026-11-02T00:00:00+00:00",
            "requires": [{ "uid": "net.minecraft", "equals": "1.21.1" }]
        },
        {
            "version": "14.23.5.2864", "type": "release", "recommended": false,
            "releaseTime": "2020-01-01T00:00:00+00:00",
            "requires": [{ "uid": "net.minecraft", "equals": "1.12.2" }]
        }
    ]
}"#;

/// Forge 1.12.2-era profile: launchwrapper main class plus `+tweakers`.
#[cfg(test)]
pub(crate) const FORGE_LEGACY_PROFILE_FIXTURE: &str = r#"{
    "formatVersion": 1,
    "uid": "net.minecraftforge",
    "name": "Forge",
    "version": "14.23.5.2864",
    "mainClass": "net.minecraft.launchwrapper.Launch",
    "+tweakers": ["net.minecraftforge.fml.common.launcher.FMLTweaker"],
    "+jvmArgs": ["-Dfml.ignoreInvalidMinecraftCertificates=true"],
    "+traits": ["legacyLaunch"],
    "libraries": [
        {
            "name": "net.minecraftforge:forge:1.12.2-14.23.5.2864:universal",
            "downloads": { "artifact": {
                "path": "net/minecraftforge/forge/1.12.2-14.23.5.2864/forge-1.12.2-14.23.5.2864-universal.jar",
                "sha1": "d0ab8e116da0e50c6e6099791f97772a08469626",
                "url": "https://maven.minecraftforge.net/net/minecraftforge/forge/1.12.2-14.23.5.2864/forge-1.12.2-14.23.5.2864-universal.jar"
            } }
        },
        {
            "name": "net.minecraft:launchwrapper:1.12",
            "downloads": { "artifact": {
                "path": "net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar",
                "sha1": "111e7bea9c968cdb3d06ef4632bf7ff0824d0f36",
                "url": "https://libraries.minecraft.net/net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar"
            } }
        }
    ],
    "requires": [{ "uid": "net.minecraft", "equals": "1.12.2" }]
}"#;

/// Forge 1.20.1 profile: ForgeWrapper main class, `minecraftArguments` carrying
/// the `--fml.*` module-path tokens, classpath `libraries` and `mavenFiles`.
#[cfg(test)]
pub(crate) const FORGE_MODERN_PROFILE_FIXTURE: &str = r#"{
    "formatVersion": 1,
    "uid": "net.minecraftforge",
    "name": "Forge",
    "version": "47.4.29",
    "mainClass": "io.github.zekerzhayard.forgewrapper.installer.Main",
    "minecraftArguments": "--username ${auth_player_name} --gameDir ${game_directory} --launchTarget forgeclient --fml.forgeVersion 47.4.29 --fml.mcVersion 1.20.1",
    "libraries": [
        {
            "name": "io.github.zekerzhayard:ForgeWrapper:prism-2026-08-01",
            "downloads": { "artifact": {
                "sha1": "852b7e59748da1512d40e38407eadb1f0031a996",
                "url": "https://files.prismlauncher.org/maven/io/github/zekerzhayard/ForgeWrapper/prism-2026-08-01/ForgeWrapper-prism-2026-08-01.jar"
            } }
        },
        {
            "name": "cpw.mods:securejarhandler:2.1.10",
            "downloads": { "artifact": {
                "path": "cpw/mods/securejarhandler/2.1.10/securejarhandler-2.1.10.jar",
                "sha1": "51e6a22c6c716beb11e244bf5b8be480f51dd6b5",
                "url": "https://maven.minecraftforge.net/cpw/mods/securejarhandler/2.1.10/securejarhandler-2.1.10.jar"
            } }
        }
    ],
    "mavenFiles": [
        {
            "name": "net.minecraftforge:forge:1.20.1-47.4.29:installer",
            "downloads": { "artifact": {
                "sha1": "5061de68499474cc8eeeede3d794afb063dd3e6d",
                "url": "https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-47.4.29/forge-1.20.1-47.4.29-installer.jar"
            } }
        }
    ],
    "requires": [{ "uid": "net.minecraft", "equals": "1.20.1" }]
}"#;

/// NeoForge 1.21.4 profile: same wrapper shape, `@zip` and `+` version suffixes.
#[cfg(test)]
pub(crate) const NEOFORGE_PROFILE_FIXTURE: &str = r#"{
    "formatVersion": 1,
    "uid": "net.neoforged",
    "name": "NeoForge",
    "version": "21.4.161",
    "mainClass": "io.github.zekerzhayard.forgewrapper.installer.Main",
    "minecraftArguments": "--username ${auth_player_name} --launchTarget neoforgeclient --fml.neoForgeVersion 21.4.161 --fml.mcVersion 1.21.4",
    "libraries": [
        {
            "name": "net.neoforged:neoforge:21.4.161:universal",
            "downloads": { "artifact": {
                "path": "net/neoforged/neoforge/21.4.161/neoforge-21.4.161-universal.jar",
                "sha1": "0000000000000000000000000000000000000001",
                "url": "https://maven.neoforged.net/releases/net/neoforged/neoforge/21.4.161/neoforge-21.4.161-universal.jar"
            } }
        }
    ],
    "mavenFiles": [
        {
            "name": "net.neoforged:neoforge:21.4.161:installer",
            "downloads": { "artifact": {
                "sha1": "0000000000000000000000000000000000000002",
                "url": "https://maven.neoforged.net/releases/net/neoforged/neoforge/21.4.161/neoforge-21.4.161-installer.jar"
            } }
        },
        {
            "name": "net.neoforged:neoform:1.21.4-20241203.161809@zip",
            "downloads": { "artifact": {
                "path": "net/neoforged/neoform/1.21.4-20241203.161809/neoform-1.21.4-20241203.161809.zip",
                "sha1": "0000000000000000000000000000000000000003",
                "url": "https://maven.neoforged.net/releases/net/neoforged/neoform/1.21.4-20241203.161809/neoform-1.21.4-20241203.161809.zip"
            } }
        },
        {
            "name": "net.fabricmc:sponge-mixin:0.15.2+mixin.0.8.7",
            "downloads": { "artifact": {
                "path": "net/fabricmc/sponge-mixin/0.15.2+mixin.0.8.7/sponge-mixin-0.15.2+mixin.0.8.7.jar",
                "sha1": "0000000000000000000000000000000000000004",
                "url": "https://maven.neoforged.net/releases/net/fabricmc/sponge-mixin/0.15.2+mixin.0.8.7/sponge-mixin-0.15.2+mixin.0.8.7.jar"
            } }
        }
    ],
    "requires": [{ "uid": "net.minecraft", "equals": "1.21.4" }]
}"#;

/// Legacy Fabric 1.8.9 list entry: the stock Fabric v2 schema, but the
/// loader build is upstream Fabric while `intermediary` comes from the
/// legacyfabric maven.
#[cfg(test)]
pub(crate) const LEGACY_FABRIC_LIST_FIXTURE: &str = r#"[
    {
        "loader": {
            "separator": ".",
            "build": 1,
            "maven": "net.fabricmc:fabric-loader:0.20.1",
            "version": "0.20.1",
            "stable": true
        },
        "intermediary": {
            "maven": "net.legacyfabric:intermediary:1.8.9",
            "version": "1.8.9",
            "stable": true
        },
        "launcherMeta": {
            "version": 2,
            "min_java_version": 8,
            "libraries": {
                "common": [
                    { "name": "org.ow2.asm:asm:9.10.1", "url": "https://maven.fabricmc.net/", "sha1": "ada2141c0cc52ee8f5c48cd5fa4ce0e794f22236" },
                    { "name": "net.fabricmc:sponge-mixin:0.17.5+mixin.0.8.7", "url": "https://maven.fabricmc.net/" }
                ],
                "client": [],
                "server": []
            }
        }
    },
    {
        "loader": { "version": "0.19.5", "stable": false },
        "intermediary": { "maven": "net.legacyfabric:intermediary:1.8.9" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    }
]"#;

/// CleanroomMC component patch (`patches/net.minecraftforge.json` inside the
/// published `cleanroom-<version>.zip`): a 1.12.2 Forge fork bootstrapped by
/// `top.outlands.foundation.boot.Foundation` on Java 25.
#[cfg(test)]
pub(crate) const CLEANROOM_PROFILE_FIXTURE: &str = r#"{
    "formatVersion": 1,
    "name": "Cleanroom",
    "uid": "net.minecraftforge",
    "version": "0.7.14-alpha",
    "requires": [
        { "uid": "net.minecraft", "equals": "1.12.2" },
        { "uid": "org.lwjgl", "equals": "3.4.3" }
    ],
    "mainClass": "top.outlands.foundation.boot.Foundation",
    "compatibleJavaMajors": [25],
    "compatibleJavaName": "java-runtime-epsilon",
    "+tweakers": ["net.minecraftforge.fml.common.launcher.FMLTweaker"],
    "+traits": ["FirstThreadOnMacOS"],
    "libraries": [
        {
            "name": "com.cleanroommc:cleanroom:0.7.14-alpha:universal",
            "downloads": { "artifact": {
                "url": "https://maven.cleanroommc.com/com/cleanroommc/cleanroom/0.7.14-alpha/cleanroom-0.7.14-alpha-universal.jar",
                "sha1": "9e7ed10176074d58903f72358d4f54dba0c50677",
                "size": 12795007
            } }
        },
        {
            "name": "com.cleanroommc:cleanmix:0.9.0",
            "downloads": { "artifact": {
                "url": "https://maven.cleanroommc.com/com/cleanroommc/cleanmix/0.9.0/cleanmix-0.9.0.jar",
                "sha1": "ff362d6091772d816873457336659c8f6f29e70c",
                "size": 1130554
            } }
        },
        {
            "name": "org.lwjgl:lwjgl:3.4.3",
            "downloads": { "artifact": {
                "url": "https://repo.maven.apache.org/maven2/org/lwjgl/lwjgl/3.4.3/lwjgl-3.4.3.jar",
                "sha1": "0000000000000000000000000000000000000005"
            } }
        },
        {
            "name": "org.lwjgl:lwjgl:3.4.3",
            "downloads": { "classifiers": {
                "natives-windows": { "url": "https://repo.maven.apache.org/maven2/org/lwjgl/lwjgl/3.4.3/lwjgl-3.4.3-natives-windows.jar" }
            } }
        }
    ]
}"#;

/// `maven-metadata.xml` as repo.cleanroommc.com serves it.
#[cfg(test)]
pub(crate) const CLEANROOM_METADATA_FIXTURE: &str = r#"<?xml version="1.0" encoding="UTF-8"?>
<metadata>
  <groupId>com.cleanroommc</groupId>
  <artifactId>cleanroom</artifactId>
  <versioning>
    <latest>0.7.15-alpha</latest>
    <release>0.7.14-alpha</release>
    <versions>
      <version>0.7.12-alpha</version>
      <version>0.7.13-alpha</version>
      <version>0.7.14-alpha</version>
      <version>0.7.15-alpha</version>
    </versions>
  </versioning>
</metadata>"#;

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use std::collections::HashMap;

    #[test]
    fn endpoint_urls_follow_the_meta_apis() {
        assert_eq!(
            profile_url(FABRIC_META_BASE, ModLoader::Fabric, "1.21.4", None),
            "https://meta.fabricmc.net/v2/versions/loader/1.21.4"
        );
        assert_eq!(
            profile_url(
                FABRIC_META_BASE,
                ModLoader::Fabric,
                "1.21.4",
                Some("0.16.9")
            ),
            "https://meta.fabricmc.net/v2/versions/loader/1.21.4/0.16.9"
        );
        // empty loader versions select the list endpoint
        assert_eq!(
            profile_url(QUILT_META_BASE, ModLoader::Quilt, "1.7.10", Some("   ")),
            "https://meta.quiltmc.org/v3/versions/loader/1.7.10"
        );
        assert_eq!(
            ModLoader::Quilt.maven_base(),
            "https://maven.quiltmc.org/repository/release/"
        );
        assert_eq!(
            ModLoader::Fabric.maven_base(),
            "https://maven.fabricmc.net/"
        );
    }

    #[test]
    fn loader_coordinates_match_each_maven() {
        assert_eq!(
            ModLoader::Fabric.loader_coordinate("0.20.1").as_deref(),
            Some("net.fabricmc:fabric-loader:0.20.1")
        );
        assert_eq!(
            ModLoader::Quilt.loader_coordinate("0.26.4").as_deref(),
            Some("org.quiltmc:quilt-loader:0.26.4")
        );
        // Meta v1 profiles publish every artifact they need
        assert_eq!(ModLoader::Forge.loader_coordinate("47.4.29"), None);
        assert_eq!(ModLoader::NeoForge.loader_coordinate("21.4.161"), None);
    }

    #[test]
    fn loader_tokens_are_case_insensitive() {
        assert_eq!(ModLoader::from_token("Quilt"), Some(ModLoader::Quilt));
        assert_eq!(ModLoader::from_token(" FABRIC "), Some(ModLoader::Fabric));
        assert_eq!(ModLoader::from_token("quiltmc"), None);
        assert_eq!(ModLoader::from_token("Forge"), Some(ModLoader::Forge));
        assert_eq!(
            ModLoader::from_token(" NeoForge "),
            Some(ModLoader::NeoForge)
        );
        assert_eq!(
            ModLoader::from_token("Legacy Fabric"),
            Some(ModLoader::LegacyFabric)
        );
        assert_eq!(
            ModLoader::from_token("legacy-fabric"),
            Some(ModLoader::LegacyFabric)
        );
        assert_eq!(
            ModLoader::from_token("legacyfabric"),
            Some(ModLoader::LegacyFabric)
        );
        assert_eq!(
            ModLoader::from_token("Cleanroom"),
            Some(ModLoader::Cleanroom)
        );
        assert_eq!(
            ModLoader::from_token("CleanroomMC"),
            Some(ModLoader::Cleanroom)
        );
        assert_eq!(ModLoader::from_token("liteloader"), None);
    }

    #[test]
    fn legacy_fabric_rides_the_fabric_v2_schema() {
        assert_eq!(
            profile_url(
                LEGACY_FABRIC_META_BASE,
                ModLoader::LegacyFabric,
                "1.8.9",
                None
            ),
            "https://meta.legacyfabric.net/v2/versions/loader/1.8.9"
        );
        assert_eq!(
            profile_url(
                LEGACY_FABRIC_META_BASE,
                ModLoader::LegacyFabric,
                "1.12.2",
                Some("0.20.1")
            ),
            "https://meta.legacyfabric.net/v2/versions/loader/1.12.2/0.20.1"
        );
        assert_eq!(
            ModLoader::LegacyFabric.maven_base(),
            "https://maven.legacyfabric.net/"
        );
        assert_eq!(
            ModLoader::LegacyFabric.maven_fallbacks()[0],
            "https://maven.fabricmc.net/",
            "legacy fabric's support jars come from upstream fabric"
        );
        assert_eq!(
            ModLoader::LegacyFabric
                .loader_coordinate("0.20.1")
                .as_deref(),
            Some("net.fabricmc:fabric-loader:0.20.1"),
            "the loader artifact itself is unmodified fabric"
        );
        assert_eq!(ModLoader::LegacyFabric.mapping_field(), "intermediary");
        assert!(ModLoader::LegacyFabric.is_fabric_family());
        assert_eq!(ModLoader::LegacyFabric.to_string(), "legacyfabric");
    }

    #[test]
    fn cleanroom_declares_its_modern_java_and_pinned_game_version() {
        assert_eq!(ModLoader::Cleanroom.fixed_game_version(), Some("1.12.2"));
        let majors = ModLoader::Cleanroom
            .required_java_majors()
            .expect("cleanroom overrides the manifest java");
        assert_eq!(majors, CLEANROOM_JAVA_MAJORS);
        assert!(
            majors.iter().all(|major| *major >= 21),
            "cleanroom must never pick Java 8: {majors:?}"
        );
        assert!(
            !majors.contains(&8),
            "the 1.12.2 manifest's Java 8 requirement must be overridden"
        );
        // every other loader defers to the manifest
        assert_eq!(ModLoader::Forge.required_java_majors(), None);
        assert_eq!(ModLoader::Fabric.required_java_majors(), None);
        assert_eq!(ModLoader::LegacyFabric.fixed_game_version(), None);
    }

    #[test]
    fn cleanroom_release_resolution_reads_the_maven_metadata() {
        assert_eq!(
            parse_cleanroom_release(CLEANROOM_METADATA_FIXTURE).as_deref(),
            Some("0.7.14-alpha"),
            "<release> wins over the newer <latest>"
        );
        assert_eq!(
            cleanroom_pack_url("0.7.14-alpha"),
            "https://github.com/CleanroomMC/Cleanroom/releases/download/0.7.14-alpha/cleanroom-0.7.14-alpha.zip"
        );
        // no <release> tag: the last <version> answers
        assert_eq!(
            parse_cleanroom_release(
                "<metadata><versioning><versions><version>1.0</version><version>2.0</version></versions></versioning></metadata>"
            )
            .as_deref(),
            Some("2.0")
        );
        assert_eq!(parse_cleanroom_release("<metadata/>"), None);
    }

    #[test]
    fn meta_v1_endpoints_use_the_prism_component_uids() {
        assert_eq!(
            profile_url(PRISM_META_BASE, ModLoader::Forge, "1.20.1", None),
            "https://meta.prismlauncher.org/v1/net.minecraftforge/index.json"
        );
        assert_eq!(
            profile_url(PRISM_META_BASE, ModLoader::Forge, "1.20.1", Some("47.4.29")),
            "https://meta.prismlauncher.org/v1/net.minecraftforge/47.4.29.json"
        );
        assert_eq!(
            profile_url(
                PRISM_META_BASE,
                ModLoader::NeoForge,
                "1.21.4",
                Some("21.4.161")
            ),
            "https://meta.prismlauncher.org/v1/net.neoforged/21.4.161.json"
        );
        assert_eq!(
            ModLoader::Forge.meta_v1_bases(),
            &[PRISM_META_BASE, FREESM_META_BASE]
        );
        assert_eq!(ModLoader::NeoForge.to_string(), "neoforge");
    }

    #[test]
    fn meta_index_filters_by_the_minecraft_requirement() {
        let raw: serde_json::Value = serde_json::from_str(FORGE_INDEX_FIXTURE).unwrap();
        let builds = parse_meta_index(&raw, "1.20.1");
        assert_eq!(
            builds
                .iter()
                .map(|b| b.version.as_str())
                .collect::<Vec<_>>(),
            vec!["47.4.29", "47.3.0", "47.2.0"],
            "index order preserved, other game versions dropped"
        );
        assert_eq!(
            builds.iter().filter(|b| b.recommended).count(),
            1,
            "the index carries exactly one recommendation"
        );
        assert!(parse_meta_index(&raw, "1.19.2").is_empty());
        assert!(parse_meta_index(&serde_json::json!({}), "1.20.1").is_empty());
    }

    #[test]
    fn latest_build_prefers_the_recommended_entry() {
        let raw: serde_json::Value = serde_json::from_str(FORGE_INDEX_FIXTURE).unwrap();
        assert_eq!(
            pick_meta_build(&raw, "1.20.1").map(|b| b.version),
            Some("47.3.0".to_owned()),
            "recommended wins over the newest build"
        );
        // no recommendation for 1.12.2: the first entry wins
        assert_eq!(
            pick_meta_build(&raw, "1.12.2").map(|b| b.version),
            Some("14.23.5.2864".to_owned())
        );
        assert_eq!(pick_meta_build(&raw, "9.9.9"), None);
    }

    #[test]
    fn list_meta_picks_the_latest_stable_entry() {
        let raw: serde_json::Value = serde_json::from_str(FABRIC_LIST_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Fabric, &raw).unwrap();
        assert_eq!(profile.loader_version, "0.16.9");
        assert_eq!(
            profile.libraries[0].storage,
            "net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar"
        );
    }

    #[test]
    fn empty_list_meta_is_an_error() {
        let raw = serde_json::json!([]);
        let err = parse_loader_meta(ModLoader::Quilt, &raw).unwrap_err();
        assert!(
            matches!(err, LoaderError::NoStableProfile { ref loader } if loader == "quilt"),
            "{err:?}"
        );
    }

    #[test]
    fn quilt_profile_parses_composite_launch_data() {
        let raw: serde_json::Value = serde_json::from_str(QUILT_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Quilt, &raw).unwrap();
        assert_eq!(profile.loader_version, "0.26.4");
        assert_eq!(
            profile.main_class,
            "org.quiltmc.loader.impl.launch.knot.KnotClient"
        );
    }

    #[tokio::test]
    async fn fetches_profiles_over_the_loopback_endpoints() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            (
                "v2/versions/loader/1.21.4".to_owned(),
                (200u16, FABRIC_LIST_FIXTURE.as_bytes().to_vec()),
            ),
            (
                "v2/versions/loader/1.21.4/0.16.9".to_owned(),
                (200u16, FABRIC_PROFILE_FIXTURE.as_bytes().to_vec()),
            ),
            (
                "v3/versions/loader/1.21.4/0.26.4".to_owned(),
                (200u16, QUILT_PROFILE_FIXTURE.as_bytes().to_vec()),
            ),
        ]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}");
        let client = Client::new();

        // latest stable from a list endpoint
        let fabric = fetch_profile(
            &client,
            ModLoader::Fabric,
            &profile_url(&base, ModLoader::Fabric, "1.21.4", None),
        )
        .await
        .unwrap();
        assert_eq!(fabric.loader_version, "0.16.9");
        assert_eq!(
            fabric.main_class,
            "net.fabricmc.loader.impl.launch.knot.KnotClient"
        );

        // version-pinned profile object
        let pinned = fetch_profile(
            &client,
            ModLoader::Fabric,
            &profile_url(&base, ModLoader::Fabric, "1.21.4", Some("0.16.9")),
        )
        .await
        .unwrap();
        assert_eq!(pinned.loader_version, "0.16.9");
        assert_eq!(pinned.libraries.len(), 4, "full fabric fixture shape");

        let quilt = fetch_profile(
            &client,
            ModLoader::Quilt,
            &profile_url(&base, ModLoader::Quilt, "1.21.4", Some("0.26.4")),
        )
        .await
        .unwrap();
        assert_eq!(quilt.loader_version, "0.26.4");
        assert!(
            quilt.libraries[0]
                .storage
                .starts_with("org/quiltmc/hashed/1.21.4/"),
            "hashed mapping jar leads the library list"
        );
    }

    #[tokio::test]
    async fn meta_v1_resolution_walks_index_then_pinned_profile() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            (
                "net.minecraftforge/index.json".to_owned(),
                (200u16, FORGE_INDEX_FIXTURE.as_bytes().to_vec()),
            ),
            (
                "net.minecraftforge/47.3.0.json".to_owned(),
                (
                    200u16,
                    FORGE_MODERN_PROFILE_FIXTURE
                        .replace("47.4.29", "47.3.0")
                        .into_bytes(),
                ),
            ),
            (
                "net.neoforged/21.4.161.json".to_owned(),
                (200u16, NEOFORGE_PROFILE_FIXTURE.as_bytes().to_vec()),
            ),
        ]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}/");
        let client = Client::new();

        // unpinned: the recommended 1.20.1 build drives the profile fetch
        let forge = resolve_meta_v1(
            &client,
            ModLoader::Forge,
            "net.minecraftforge",
            "1.20.1",
            None,
            &[&base],
        )
        .await
        .unwrap();
        assert_eq!(forge.loader_version, "47.3.0");
        assert_eq!(forge.main_class, FORGE_WRAPPER_MAIN);
        assert!(
            forge
                .minecraft_arguments
                .as_deref()
                .is_some_and(|args| args.contains("--launchTarget forgeclient")),
            "{:?}",
            forge.minecraft_arguments
        );
        assert_eq!(forge.maven_files.len(), 1, "the installer is staged too");

        // pinned: index skipped entirely
        let neoforge = resolve_meta_v1(
            &client,
            ModLoader::NeoForge,
            "net.neoforged",
            "1.21.4",
            Some("21.4.161"),
            &[&base],
        )
        .await
        .unwrap();
        assert_eq!(neoforge.loader_version, "21.4.161");
        assert_eq!(neoforge.main_class, FORGE_WRAPPER_MAIN);
    }

    #[tokio::test]
    async fn meta_v1_resolution_fails_over_to_the_second_host() {
        // the first host answers 500 for everything, the mirror serves the data
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            (
                "dead/net.minecraftforge/47.4.29.json".to_owned(),
                (500u16, b"boom".to_vec()),
            ),
            (
                "live/net.minecraftforge/47.4.29.json".to_owned(),
                (200u16, FORGE_MODERN_PROFILE_FIXTURE.as_bytes().to_vec()),
            ),
        ]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}/");
        let dead = format!("{base}dead/");
        let live = format!("{base}live/");
        let profile = resolve_meta_v1(
            &Client::new(),
            ModLoader::Forge,
            "net.minecraftforge",
            "1.20.1",
            Some("47.4.29"),
            &[&dead, &live],
        )
        .await
        .unwrap();
        assert_eq!(profile.loader_version, "47.4.29");
        assert_eq!(profile.libraries.len(), 2);
    }

    #[tokio::test]
    async fn meta_v1_resolution_reports_a_game_version_without_builds() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "net.neoforged/index.json".to_owned(),
            (200u16, FORGE_INDEX_FIXTURE.as_bytes().to_vec()),
        )]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}/");
        let err = resolve_meta_v1(
            &Client::new(),
            ModLoader::NeoForge,
            "net.neoforged",
            "1.6.4",
            None,
            &[&base],
        )
        .await
        .unwrap_err();
        assert!(
            matches!(err, LoaderError::NoStableProfile { ref loader } if loader == "neoforge 1.6.4"),
            "{err:?}"
        );
    }

    #[tokio::test]
    async fn legacy_fabric_resolves_over_the_loopback_endpoints() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "v2/versions/loader/1.8.9".to_owned(),
            (200u16, LEGACY_FABRIC_LIST_FIXTURE.as_bytes().to_vec()),
        )]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}");
        let list = fetch_profile(
            &Client::new(),
            ModLoader::LegacyFabric,
            &profile_url(&base, ModLoader::LegacyFabric, "1.8.9", None),
        )
        .await
        .unwrap();
        assert_eq!(list.loader_version, "0.20.1");
        assert_eq!(
            list.main_class,
            "net.fabricmc.loader.impl.launch.knot.KnotClient"
        );
        // intermediary leads, then the synthesized loader jar, then common
        assert_eq!(
            list.libraries[0].name,
            "net.legacyfabric:intermediary:1.8.9"
        );
        assert_eq!(
            list.libraries[0].url,
            "https://maven.legacyfabric.net/net/legacyfabric/intermediary/1.8.9/intermediary-1.8.9.jar",
            "the legacy mapping jar resolves against the legacyfabric maven"
        );
        assert_eq!(list.libraries[1].name, "net.fabricmc:fabric-loader:0.20.1");
    }

    #[tokio::test]
    async fn http_errors_surface_the_endpoint_and_status() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "v2/versions/loader/9.9.9".to_owned(),
            (404u16, b"gone".to_vec()),
        )]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}");
        let err = fetch_profile(
            &Client::new(),
            ModLoader::Fabric,
            &profile_url(&base, ModLoader::Fabric, "9.9.9", None),
        )
        .await
        .unwrap_err();
        assert!(
            matches!(err, LoaderError::HttpStatus { ref status, .. } if *status == 404),
            "{err:?}"
        );
    }
}
