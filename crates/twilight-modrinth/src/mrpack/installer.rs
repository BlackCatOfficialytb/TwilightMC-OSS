//! `.mrpack` installer: staged client downloads, overrides extraction and the
//! full install flow.

use std::collections::BTreeMap;
use std::path::Path;

use twilight_downloader::{DownloadRequest, ParallelDownloader};

use super::schema::{ModpackIndex, parse_index};
use super::zip;
use crate::error::ModrinthError;

const INDEX_NAME: &str = "modrinth.index.json";
const OVERRIDES_PREFIX: &str = "overrides/";
const CLIENT_OVERRIDES_PREFIX: &str = "client-overrides/";

/// A parsed `.mrpack` archive: raw bytes plus the validated index.
#[derive(Debug)]
pub struct Mrpack {
    archive: Vec<u8>,
    index: ModpackIndex,
}

/// Outcome of a real `.mrpack` install.
#[derive(Debug, Clone)]
pub struct InstallSummary {
    pub files_downloaded: usize,
    pub overrides_copied: usize,
    pub dependencies: BTreeMap<String, String>,
}

impl Mrpack {
    /// Opens a local `.mrpack` file.
    pub async fn open(path: &Path) -> Result<Self, ModrinthError> {
        let bytes = tokio::fs::read(path)
            .await
            .map_err(|source| ModrinthError::Io {
                path: path.to_path_buf(),
                source,
            })?;
        Self::from_bytes(bytes)
    }

    /// Parses in-memory archive bytes (local read or an http fetch upstream).
    pub fn from_bytes(archive: Vec<u8>) -> Result<Self, ModrinthError> {
        let entries = zip::central_directory_entries(&archive).map_err(ModrinthError::Zip)?;
        let entry = entries
            .iter()
            .find(|entry| entry.name == INDEX_NAME)
            .ok_or(ModrinthError::MissingIndex)?;
        let index = parse_index(&zip::entry_content(&archive, entry)?)?;
        Ok(Self { archive, index })
    }

    /// Validated index of the pack.
    pub fn index(&self) -> &ModpackIndex {
        &self.index
    }

    /// Exact size of the archive the pack was parsed from (bytes).
    pub fn archive_len(&self) -> usize {
        self.archive.len()
    }

    /// Number of index files skipped as server-only (`env.client == unsupported`).
    pub fn skipped_server_side(&self) -> usize {
        self.index
            .files
            .iter()
            .filter(|file| !file.applies_to_client())
            .count()
    }

    /// Client-applicable staged downloads rooted at the game directory; the
    /// primary mirror (`downloads[0]`) is used with the sha1 checksum.
    pub fn download_requests(
        &self,
        game_dir: &Path,
    ) -> Result<Vec<DownloadRequest>, ModrinthError> {
        let mut requests = Vec::new();
        for file in &self.index.files {
            if !file.applies_to_client() {
                continue;
            }
            let Some(url) = file.downloads.first() else {
                return Err(ModrinthError::MissingDownload {
                    path: file.path.clone(),
                });
            };
            zip::safe_relative_path(&file.path)?;
            requests.push(DownloadRequest {
                url: url.clone(),
                dest: game_dir.join(&file.path),
                sha1: Some(file.hashes.sha1.clone()),
            });
        }
        Ok(requests)
    }

    /// Target paths of override entries relative to the game directory
    /// (dry-run preview; validates zip-slip paths immediately).
    pub fn override_paths(&self) -> Result<Vec<String>, ModrinthError> {
        let entries = zip::central_directory_entries(&self.archive).map_err(ModrinthError::Zip)?;
        let mut paths = Vec::new();
        for entry in &entries {
            if entry.name.ends_with('/') {
                continue;
            }
            if let Some(relative) = override_relative(&entry.name) {
                zip::safe_relative_path(relative)?;
                paths.push(relative.to_owned());
            }
        }
        paths.sort();
        Ok(paths)
    }

    /// Extracts `overrides/` and `client-overrides/` entries into the game
    /// directory (`server-overrides/` is skipped on client installs).
    /// Returns the number of copied files.
    pub async fn extract_overrides(&self, game_dir: &Path) -> Result<usize, ModrinthError> {
        let entries = zip::central_directory_entries(&self.archive).map_err(ModrinthError::Zip)?;
        let mut copied = 0usize;
        for entry in &entries {
            if entry.name.ends_with('/') {
                continue;
            }
            let Some(relative) = override_relative(&entry.name) else {
                continue;
            };
            // traversal archives fail loudly instead of half-installing
            zip::safe_relative_path(relative)?;
            let content = zip::entry_content(&self.archive, entry)?;
            let target = game_dir.join(relative);
            if let Some(parent) = target.parent() {
                tokio::fs::create_dir_all(parent)
                    .await
                    .map_err(|source| ModrinthError::Io {
                        path: parent.to_path_buf(),
                        source,
                    })?;
            }
            tokio::fs::write(&target, &content)
                .await
                .map_err(|source| ModrinthError::Io {
                    path: target.clone(),
                    source,
                })?;
            copied += 1;
        }
        Ok(copied)
    }

    /// Full install: staged SHA-1 verified downloads of client-applicable
    /// files, then overrides extraction into the game directory.
    pub async fn install(
        &self,
        game_dir: &Path,
        downloader: &ParallelDownloader,
    ) -> Result<InstallSummary, ModrinthError> {
        let requests = self.download_requests(game_dir)?;
        downloader.download_all(&requests).await?;
        let overrides_copied = self.extract_overrides(game_dir).await?;
        Ok(InstallSummary {
            files_downloaded: requests.len(),
            overrides_copied,
            dependencies: self.index.dependencies.clone(),
        })
    }
}

/// Maps an override archive entry onto its game-directory-relative target.
fn override_relative(name: &str) -> Option<&str> {
    name.strip_prefix(OVERRIDES_PREFIX)
        .or_else(|| name.strip_prefix(CLIENT_OVERRIDES_PREFIX))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use std::collections::HashMap;
    use std::path::PathBuf;

    // ------------------------------------------------------------------
    // .NET-generated DEFLATE fixtures (verified against the pure-Rust engine)
    // ------------------------------------------------------------------

    const INDEX_DEFLATE_HEX: &str = include_str!("../../fixtures/index_archived.hex");
    const OVERRIDE_DEFLATE_HEX: &str = include_str!("../../fixtures/override_file.hex");
    const OVERRIDE_TEXT: &str = "client-mode=true\nserver=false\ntwilight=engine";

    /// The index payload archived in DEFLATE form by `INDEX_DEFLATE_HEX`.
    fn archive_index_json() -> String {
        let alpha_sha1 = "0".repeat(39) + "1";
        format!(
            r#"{{"formatVersion": 1, "game": "minecraft", "name": "Twilight Archive Pack", "versionId": "tap-1.0.0", "dependencies": {{"minecraft": "1.21.4", "fabric-loader": "0.16.9"}}, "files": [{{"path": "mods/alpha.jar", "hashes": {{"sha1": "{}", "sha512": "{}"}}, "downloads": ["{}"], "env": {{"client": "required", "server": "required"}}, "fileSize": 1024}}, {{"path": "mods/beta.jar", "hashes": {{"sha1": "{}", "sha512": "{}"}}, "downloads": ["https://cdn.modrinth.com/data/CCDD/versions/2.0.0/beta.jar"], "env": {{"client": "unsupported", "server": "required"}}, "fileSize": 2048}}, {{"path": "mods/gamma.jar", "hashes": {{"sha1": "{}", "sha512": "{}"}}, "downloads": ["https://cdn.modrinth.com/data/DDEE/versions/3.0.0/gamma.jar"], "fileSize": 512}}]}}"#,
            alpha_sha1,
            "1".repeat(128),
            "https://cdn.modrinth.com/data/AABB/versions/1.0.0/alpha.jar",
            "2".repeat(40),
            "5".repeat(128),
            "3".repeat(40),
            "6".repeat(128),
        )
    }

    fn decode_hex(text: &str) -> Vec<u8> {
        (0..text.len())
            .step_by(2)
            .map(|i| u8::from_str_radix(&text[i..i + 2], 16).unwrap())
            .collect()
    }

    // ------------------------------------------------------------------
    // fixture .mrpack builder (valid CRCs; deflate payloads pre-generated)
    // ------------------------------------------------------------------

    struct ArchiveBuilder {
        out: Vec<u8>,
        central: Vec<u8>,
        count: u16,
    }

    impl ArchiveBuilder {
        fn new() -> Self {
            Self {
                out: Vec::new(),
                central: Vec::new(),
                count: 0,
            }
        }

        /// Writes one entry: `payload` is the on-disk (compressed) bytes and
        /// `content` the decoded original feeding the CRC field.
        fn entry_raw(mut self, name: &str, method: u16, payload: &[u8], content: &[u8]) -> Self {
            let crc = zip::crc32_ieee(content);
            let local_offset = self.out.len() as u32;

            self.out.extend_from_slice(b"PK\x03\x04");
            self.out.extend_from_slice(&20u16.to_le_bytes());
            self.out.extend_from_slice(&0u16.to_le_bytes()); // flags
            self.out.extend_from_slice(&method.to_le_bytes());
            self.out.extend_from_slice(&0u16.to_le_bytes()); // mtime
            self.out.extend_from_slice(&0u16.to_le_bytes()); // mdate
            self.out.extend_from_slice(&crc.to_le_bytes());
            self.out
                .extend_from_slice(&(payload.len() as u32).to_le_bytes());
            self.out
                .extend_from_slice(&(content.len() as u32).to_le_bytes());
            self.out
                .extend_from_slice(&(name.len() as u16).to_le_bytes());
            self.out.extend_from_slice(&0u16.to_le_bytes()); // extra
            self.out.extend_from_slice(name.as_bytes());
            self.out.extend_from_slice(payload);

            self.central.extend_from_slice(b"PK\x01\x02");
            self.central.extend_from_slice(&20u16.to_le_bytes());
            self.central.extend_from_slice(&20u16.to_le_bytes());
            self.central.extend_from_slice(&0u16.to_le_bytes()); // flags
            self.central.extend_from_slice(&method.to_le_bytes());
            self.central.extend_from_slice(&0u16.to_le_bytes()); // time
            self.central.extend_from_slice(&0u16.to_le_bytes()); // date
            self.central.extend_from_slice(&crc.to_le_bytes());
            self.central
                .extend_from_slice(&(payload.len() as u32).to_le_bytes());
            self.central
                .extend_from_slice(&(content.len() as u32).to_le_bytes());
            self.central
                .extend_from_slice(&(name.len() as u16).to_le_bytes());
            self.central.extend_from_slice(&0u16.to_le_bytes()); // extra
            self.central.extend_from_slice(&0u16.to_le_bytes()); // comment
            self.central.extend_from_slice(&0u16.to_le_bytes()); // disk
            self.central.extend_from_slice(&0u16.to_le_bytes()); // internal attrs
            self.central.extend_from_slice(&0u32.to_le_bytes()); // external attrs
            self.central.extend_from_slice(&local_offset.to_le_bytes());
            self.central.extend_from_slice(name.as_bytes());
            self.count += 1;
            self
        }

        fn stored(self, name: &str, content: &[u8]) -> Self {
            self.entry_raw(name, zip::METHOD_STORED, content, content)
        }

        /// Deflated entry from a pre-generated hex fixture.
        fn deflated_hex(self, name: &str, deflate_hex: &str, content: &[u8]) -> Self {
            self.entry_raw(name, zip::METHOD_DEFLATE, &decode_hex(deflate_hex), content)
        }

        fn finish(self) -> Vec<u8> {
            let central_offset = self.out.len() as u32;
            let mut out = self.out;
            out.extend_from_slice(&self.central);
            out.extend_from_slice(b"PK\x05\x06");
            out.extend_from_slice(&0u16.to_le_bytes()); // disk ids
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&self.count.to_le_bytes());
            out.extend_from_slice(&self.count.to_le_bytes());
            out.extend_from_slice(&(self.central.len() as u32).to_le_bytes());
            out.extend_from_slice(&central_offset.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes()); // comment
            out
        }

        /// Central-directory offset of the first entry (its CRC sits at +16).
        fn first_entry_crc_offset(&self) -> usize {
            self.out.len() + 16
        }
    }

    fn fresh_dir(tag: &str) -> PathBuf {
        let nanos = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|d| d.subsec_nanos())
            .unwrap_or(0);
        std::env::temp_dir().join(format!("modrinth-{tag}-{}-{nanos}", std::process::id()))
    }

    #[test]
    fn archived_deflate_fixtures_match_their_payloads() {
        let expected = archive_index_json();
        let decoded = crate::mrpack::zip::inflate(&decode_hex(INDEX_DEFLATE_HEX))
            .map_err(|e| e.to_string())
            .unwrap();
        assert_eq!(decoded, expected.as_bytes(), "index fixture transcription");
        let override_decoded = crate::mrpack::zip::inflate(&decode_hex(OVERRIDE_DEFLATE_HEX))
            .map_err(|e| e.to_string())
            .unwrap();
        assert_eq!(override_decoded, OVERRIDE_TEXT.as_bytes());
    }

    #[test]
    fn opens_the_deflated_index_and_reports_the_pack() {
        let archive = ArchiveBuilder::new()
            .deflated_hex(
                "modrinth.index.json",
                INDEX_DEFLATE_HEX,
                archive_index_json().as_bytes(),
            )
            .finish();
        let pack = Mrpack::from_bytes(archive).unwrap();
        assert_eq!(pack.index().name, "Twilight Archive Pack");
        assert_eq!(pack.index().version_id, "tap-1.0.0");
        assert_eq!(pack.index().dependencies["fabric-loader"], "0.16.9");
        assert_eq!(pack.index().dependencies["minecraft"], "1.21.4");
        assert_eq!(pack.skipped_server_side(), 1);
    }

    #[test]
    fn client_env_filtering_stages_only_applicable_files() {
        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .deflated_hex(
                    "modrinth.index.json",
                    INDEX_DEFLATE_HEX,
                    archive_index_json().as_bytes(),
                )
                .finish(),
        )
        .unwrap();

        let requests = pack.download_requests(Path::new("I/minecraft")).unwrap();
        // alpha (required) + gamma (no env → required); beta is server-only
        assert_eq!(requests.len(), 2);
        let alpha_sha1 = format!("{}{}", "0".repeat(39), "1");
        assert!(requests.iter().any(|request| {
            request.url == "https://cdn.modrinth.com/data/AABB/versions/1.0.0/alpha.jar"
                && request.dest == Path::new("I/minecraft").join("mods/alpha.jar")
                && request.sha1.as_deref() == Some(alpha_sha1.as_str())
        }));
        assert!(requests.iter().any(|request| {
            request.url == "https://cdn.modrinth.com/data/DDEE/versions/3.0.0/gamma.jar"
                && request.dest == Path::new("I/minecraft").join("mods/gamma.jar")
        }));

        // evil file paths escape the instance directory (stored variant: the
        // payload no longer matches the pre-generated deflate fixture)
        let evil =
            archive_index_json().replace(r#""path": "mods/alpha.jar""#, r#""path": "../evil.jar""#);
        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .stored("modrinth.index.json", evil.as_bytes())
                .finish(),
        )
        .unwrap();
        let err = pack
            .download_requests(Path::new("I/minecraft"))
            .unwrap_err();
        assert!(
            matches!(err, ModrinthError::UnsafePath { ref path } if path == "../evil.jar"),
            "{err:?}"
        );

        // no download mirror on a file
        let broken = archive_index_json().replace(
            r#"["https://cdn.modrinth.com/data/AABB/versions/1.0.0/alpha.jar"]"#,
            "[]",
        );
        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .stored("modrinth.index.json", broken.as_bytes())
                .finish(),
        )
        .unwrap();
        let err = pack
            .download_requests(Path::new("I/minecraft"))
            .unwrap_err();
        assert!(
            matches!(err, ModrinthError::MissingDownload { ref path } if path == "mods/alpha.jar"),
            "{err:?}"
        );
    }

    #[test]
    fn override_paths_list_and_validate_targets() {
        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .deflated_hex(
                    "modrinth.index.json",
                    INDEX_DEFLATE_HEX,
                    archive_index_json().as_bytes(),
                )
                .stored("overrides/config/twilight.toml", b"enabled=true\n")
                .deflated_hex(
                    "client-overrides/options.txt",
                    OVERRIDE_DEFLATE_HEX,
                    OVERRIDE_TEXT.as_bytes(),
                )
                .stored("server-overrides/server.properties", b"unreachable")
                .stored("mods/alpha.jar", b"jar-payload")
                .finish(),
        )
        .unwrap();
        let paths = pack.override_paths().unwrap();
        assert_eq!(paths, vec!["config/twilight.toml", "options.txt"]);
    }

    #[tokio::test]
    async fn extraction_copies_client_overrides_and_skips_server() {
        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .deflated_hex(
                    "modrinth.index.json",
                    INDEX_DEFLATE_HEX,
                    archive_index_json().as_bytes(),
                )
                .stored("overrides/config/twilight.toml", b"enabled=true\n")
                .deflated_hex(
                    "client-overrides/options.txt",
                    OVERRIDE_DEFLATE_HEX,
                    OVERRIDE_TEXT.as_bytes(),
                )
                .stored("server-overrides/server.properties", b"unreachable")
                .stored("mods/alpha.jar", b"jar-payload")
                .finish(),
        )
        .unwrap();

        let game_dir = fresh_dir("extract");
        let copied = pack.extract_overrides(&game_dir).await.unwrap();
        assert_eq!(copied, 2, "server-overrides and top-level files skipped");

        // stored override lands verbatim at its mapped relative path
        assert_eq!(
            tokio::fs::read(game_dir.join("config/twilight.toml"))
                .await
                .unwrap(),
            b"enabled=true\n"
        );
        // deflated override content survives the round trip intact
        assert_eq!(
            tokio::fs::read(game_dir.join("options.txt")).await.unwrap(),
            OVERRIDE_TEXT.as_bytes()
        );
        // mod jars stage via downloads, never from the archive root
        assert!(!game_dir.join("mods/alpha.jar").exists());
        assert!(!game_dir.join("server-overrides").exists());
        let _ = tokio::fs::remove_dir_all(&game_dir).await;
    }

    #[tokio::test]
    async fn full_install_downloads_and_copies_overrides() {
        let body = b"loopback staged mod payload for alpha";
        let scratch = fresh_dir("install-src");
        tokio::fs::create_dir_all(&scratch).await.unwrap();
        let body_file = scratch.join("alpha.jar");
        tokio::fs::write(&body_file, body).await.unwrap();
        let sha1 = twilight_downloader::sha1_of_file(&body_file).await.unwrap();
        let _ = tokio::fs::remove_dir_all(&scratch).await;

        let routes: HashMap<String, (u16, Vec<u8>)> =
            HashMap::from([("mods/alpha.jar".to_owned(), (200u16, body.to_vec()))]);
        let addr = spawn(routes).await;

        // runtime-built index aimed at the loopback mirror (stored, since the
        // deflate fixtures are pre-generated offline)
        let index = format!(
            r#"{{"formatVersion": 1, "game": "minecraft", "name": "Loopback Pack", "versionId": "lp-1.0.0", "dependencies": {{"minecraft": "1.21.4"}}, "files": [{{"path": "mods/alpha.jar", "hashes": {{"sha1": "{}", "sha512": "{}"}}, "downloads": ["http://{addr}/mods/alpha.jar"], "env": {{"client": "required", "server": "required"}}, "fileSize": {}}}, {{"path": "mods/beta.jar", "hashes": {{"sha1": "{}", "sha512": "{}"}}, "downloads": ["https://cdn.modrinth.com/data/CCDD/versions/2.0.0/beta.jar"], "env": {{"client": "unsupported", "server": "required"}}, "fileSize": 2048}}]}}"#,
            sha1,
            "1".repeat(128),
            body.len(),
            "2".repeat(40),
            "5".repeat(128),
        );

        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .stored("modrinth.index.json", index.as_bytes())
                .stored("overrides/options.txt", b"staged\n")
                .finish(),
        )
        .unwrap();

        let game_dir = fresh_dir("install");
        let downloader = ParallelDownloader::new(reqwest::Client::new(), 2);
        let summary = pack.install(&game_dir, &downloader).await.unwrap();

        assert_eq!(summary.files_downloaded, 1, "beta is skipped server-side");
        assert_eq!(summary.overrides_copied, 1);
        assert_eq!(summary.dependencies["minecraft"], "1.21.4");
        assert_eq!(
            tokio::fs::read(game_dir.join("mods/alpha.jar"))
                .await
                .unwrap(),
            body
        );
        assert_eq!(
            tokio::fs::read(game_dir.join("options.txt")).await.unwrap(),
            b"staged\n"
        );
        assert!(!game_dir.join("mods/beta.jar").exists());
        let _ = tokio::fs::remove_dir_all(&game_dir).await;
    }

    #[tokio::test]
    async fn traversal_override_entries_are_rejected_loudly() {
        let pack = Mrpack::from_bytes(
            ArchiveBuilder::new()
                .deflated_hex(
                    "modrinth.index.json",
                    INDEX_DEFLATE_HEX,
                    archive_index_json().as_bytes(),
                )
                .stored("overrides/../evil.cfg", b"nope")
                .finish(),
        )
        .unwrap();
        let game_dir = fresh_dir("traversal");
        let err = pack.extract_overrides(&game_dir).await.unwrap_err();
        assert!(
            matches!(err, ModrinthError::UnsafePath { ref path } if path == "../evil.cfg"),
            "{err:?}"
        );
        assert!(!game_dir.join("evil.cfg").exists());
        let _ = tokio::fs::remove_dir_all(&game_dir).await;
    }

    #[tokio::test]
    async fn crc_mismatch_is_detected_during_open() {
        let mut builder = ArchiveBuilder::new();
        builder = builder.stored("modrinth.index.json", archive_index_json().as_bytes());
        let crc_offset = builder.first_entry_crc_offset();
        let mut archive = builder.finish();
        // flip one byte of the first central-directory CRC field
        archive[crc_offset] ^= 0xFF;

        let err = Mrpack::from_bytes(archive).unwrap_err();
        assert!(
            matches!(err, ModrinthError::CrcMismatch { ref entry, .. } if entry == "modrinth.index.json"),
            "{err:?}"
        );
    }

    #[tokio::test]
    async fn missing_index_entry_reports_clearly() {
        let archive = ArchiveBuilder::new()
            .stored("readme.txt", b"not a pack")
            .finish();
        let err = Mrpack::from_bytes(archive).unwrap_err();
        assert!(matches!(err, ModrinthError::MissingIndex), "{err:?}");
    }

    #[tokio::test]
    async fn open_reads_a_local_mrpack_file() {
        let archive = ArchiveBuilder::new()
            .deflated_hex(
                "modrinth.index.json",
                INDEX_DEFLATE_HEX,
                archive_index_json().as_bytes(),
            )
            .finish();
        let dir = fresh_dir("open");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let path = dir.join("pack.mrpack");
        tokio::fs::write(&path, &archive).await.unwrap();
        let pack = Mrpack::open(&path).await.unwrap();
        assert_eq!(pack.archive_len(), archive.len());
        assert_eq!(pack.index().name, "Twilight Archive Pack");
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }
}
