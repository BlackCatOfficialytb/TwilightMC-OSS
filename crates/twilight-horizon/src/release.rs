//! Horizon release discovery and installation from `horizon-rust/horizon`.
//!
//! The game is never bundled: the player picks a build, TwilightMC downloads
//! the platform archive from the project's GitHub releases and unpacks it into
//! the shared folder. Horizon's own launcher uses the same asset names
//! (docs/release-flow.md): `horizon-windows-x64.zip`, `horizon-linux-x86_64.tar.gz`,
//! and so on.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};

use crate::error::HorizonError;
use crate::store::safe_relative;

/// Where release metadata comes from.
pub const RELEASES_URL: &str =
    "https://api.github.com/repos/horizon-rust/horizon/releases?per_page=30";

/// The game archive for the host, or `None` when Horizon ships no build for it.
pub fn platform_asset_name() -> Option<&'static str> {
    match (std::env::consts::OS, std::env::consts::ARCH) {
        ("windows", "x86_64") => Some("horizon-windows-x64.zip"),
        ("windows", "aarch64") => Some("horizon-windows-arm64.zip"),
        ("macos", "x86_64") => Some("horizon-macos-x64.zip"),
        ("macos", "aarch64") => Some("horizon-macos-arm64.zip"),
        ("linux", "x86_64") => Some("horizon-linux-x86_64.tar.gz"),
        _ => None,
    }
}

/// One downloadable archive.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ReleaseAsset {
    pub name: String,
    pub url: String,
    pub size: u64,
}

/// One GitHub release reduced to what the launcher shows.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Release {
    pub tag: String,
    pub name: String,
    pub prerelease: bool,
    pub assets: Vec<ReleaseAsset>,
}

/// What an installed release provides.
#[derive(Debug, Clone, PartialEq, Eq, Serialize)]
pub struct InstalledRelease {
    pub tag: String,
    pub directory: PathBuf,
    pub client: PathBuf,
    pub prepare: Option<PathBuf>,
}

#[derive(Deserialize)]
struct GitHubRelease {
    tag_name: String,
    #[serde(default)]
    name: Option<String>,
    #[serde(default)]
    prerelease: bool,
    #[serde(default)]
    draft: bool,
    #[serde(default)]
    assets: Vec<GitHubAsset>,
}

#[derive(Deserialize)]
struct GitHubAsset {
    name: String,
    browser_download_url: String,
    #[serde(default)]
    size: u64,
}

/// Fetches published releases, drafts removed and newest first.
pub async fn fetch_releases(client: &reqwest::Client) -> Result<Vec<Release>, HorizonError> {
    let response = client
        .get(RELEASES_URL)
        .header(reqwest::header::USER_AGENT, user_agent())
        .header(reqwest::header::ACCEPT, "application/vnd.github+json")
        .send()
        .await
        .map_err(|e| HorizonError::Release(e.to_string()))?;
    if !response.status().is_success() {
        return Err(HorizonError::Release(format!(
            "GitHub returned {} for {RELEASES_URL}",
            response.status()
        )));
    }
    let releases: Vec<GitHubRelease> = response
        .json()
        .await
        .map_err(|e| HorizonError::Release(e.to_string()))?;
    Ok(releases
        .into_iter()
        .filter(|release| !release.draft)
        .map(|release| Release {
            name: release
                .name
                .filter(|name| !name.trim().is_empty())
                .unwrap_or_else(|| release.tag_name.clone()),
            tag: release.tag_name,
            prerelease: release.prerelease,
            assets: release
                .assets
                .into_iter()
                .map(|asset| ReleaseAsset {
                    name: asset.name,
                    url: asset.browser_download_url,
                    size: asset.size,
                })
                .collect(),
        })
        .collect())
}

/// The archive a release provides for this platform.
pub fn release_asset(release: &Release) -> Option<&ReleaseAsset> {
    let wanted = platform_asset_name()?;
    release.assets.iter().find(|asset| asset.name == wanted)
}

/// The newest stable release with a build for this platform, else the newest
/// pre-release with one (nightlies are what early adopters run).
pub fn preferred_release(releases: &[Release]) -> Option<&Release> {
    releases
        .iter()
        .find(|release| !release.prerelease && release_asset(release).is_some())
        .or_else(|| {
            releases
                .iter()
                .find(|release| release_asset(release).is_some())
        })
}

/// Downloads one archive.
pub async fn download_asset(
    client: &reqwest::Client,
    asset: &ReleaseAsset,
) -> Result<Vec<u8>, HorizonError> {
    let response = client
        .get(&asset.url)
        .header(reqwest::header::USER_AGENT, user_agent())
        .send()
        .await
        .map_err(|e| HorizonError::Release(e.to_string()))?;
    if !response.status().is_success() {
        return Err(HorizonError::Release(format!(
            "download of {} returned {}",
            asset.name,
            response.status()
        )));
    }
    response
        .bytes()
        .await
        .map(|bytes| bytes.to_vec())
        .map_err(|e| HorizonError::Release(e.to_string()))
}

/// Downloads and unpacks the newest build for this host under `root/<tag>`.
pub async fn install_latest_client(
    client: &reqwest::Client,
    root: &Path,
) -> Result<InstalledRelease, HorizonError> {
    let releases = fetch_releases(client).await?;
    let release = preferred_release(&releases).cloned().ok_or_else(|| {
        HorizonError::Release(format!(
            "no published Horizon release has a build for {}/{}",
            std::env::consts::OS,
            std::env::consts::ARCH
        ))
    })?;
    let asset = release_asset(&release)
        .cloned()
        .ok_or_else(|| HorizonError::Release("the release has no platform archive".to_owned()))?;
    let bytes = download_asset(client, &asset).await?;
    let directory = root.join(sanitize_tag(&release.tag));
    let files = extract_archive(&bytes, &asset.name, &directory)?;
    let client_name = if cfg!(windows) {
        "horizon-client.exe"
    } else {
        "horizon-client"
    };
    let prepare_name = if cfg!(windows) {
        "horizon-prepare.exe"
    } else {
        "horizon-prepare"
    };
    let client = files
        .iter()
        .find(|path| path.file_name().is_some_and(|name| name == client_name))
        .cloned()
        .ok_or_else(|| {
            HorizonError::Release(format!("{} contains no {client_name}", asset.name))
        })?;
    let prepare = files
        .iter()
        .find(|path| path.file_name().is_some_and(|name| name == prepare_name))
        .cloned();
    Ok(InstalledRelease {
        tag: release.tag,
        directory,
        client,
        prepare,
    })
}

/// Extracts a Horizon release archive: `.zip` on Windows/macOS, `.tar.gz` on
/// Linux. Both are unpacked with zip-slip guards; only files are written.
pub fn extract_archive(
    bytes: &[u8],
    archive_name: &str,
    directory: &Path,
) -> Result<Vec<PathBuf>, HorizonError> {
    if archive_name.ends_with(".zip") {
        extract_zip(bytes, directory)
    } else if archive_name.ends_with(".tar.gz") || archive_name.ends_with(".tgz") {
        extract_tar_gz(bytes, directory)
    } else {
        Err(HorizonError::Release(format!(
            "{archive_name} is not a .zip or .tar.gz archive"
        )))
    }
}

fn extract_zip(bytes: &[u8], directory: &Path) -> Result<Vec<PathBuf>, HorizonError> {
    let entries = twilight_modrinth::extract_archive(bytes)?;
    write_files(directory, entries)
}

/// USTAR entries are 512-byte headers followed by padded file data. Only the
/// fields a release archive needs (name, prefix, size, type) are decoded.
fn extract_tar_gz(bytes: &[u8], directory: &Path) -> Result<Vec<PathBuf>, HorizonError> {
    use flate2::read::GzDecoder;
    use std::io::Read;
    let mut decoder = GzDecoder::new(bytes);
    let mut tar = Vec::new();
    decoder
        .read_to_end(&mut tar)
        .map_err(|e| HorizonError::Archive(format!("corrupt gzip archive: {e}")))?;
    let mut files = Vec::new();
    let mut offset = 0usize;
    while offset + 512 <= tar.len() {
        let header = &tar[offset..offset + 512];
        if header.iter().all(|byte| *byte == 0) {
            break;
        }
        let name = header_string(&header[0..100]);
        let prefix = header_string(&header[345..500]);
        let full = if prefix.is_empty() {
            name
        } else {
            format!("{prefix}/{name}")
        };
        let size = parse_octal(&header[124..136])?;
        let kind = header[156];
        offset += 512;
        let end = offset
            .checked_add(size)
            .ok_or_else(|| HorizonError::Archive("tar entry size overflow".to_owned()))?;
        if end > tar.len() {
            return Err(HorizonError::Archive("truncated tar entry".to_owned()));
        }
        let data = tar[offset..end].to_vec();
        offset += size.div_ceil(512) * 512;
        if kind != b'5' && !full.ends_with('/') {
            files.push((full, data));
        }
    }
    write_files(directory, files)
}

fn header_string(bytes: &[u8]) -> String {
    let end = bytes
        .iter()
        .position(|byte| *byte == 0)
        .unwrap_or(bytes.len());
    String::from_utf8_lossy(&bytes[..end]).into_owned()
}

fn parse_octal(bytes: &[u8]) -> Result<usize, HorizonError> {
    let text = String::from_utf8_lossy(bytes);
    let text = text.trim_matches(['\0', ' ']);
    if text.is_empty() {
        return Ok(0);
    }
    usize::from_str_radix(text, 8)
        .map_err(|e| HorizonError::Archive(format!("bad tar entry size: {e}")))
}

fn write_files(
    directory: &Path,
    entries: Vec<(String, Vec<u8>)>,
) -> Result<Vec<PathBuf>, HorizonError> {
    std::fs::create_dir_all(directory)?;
    let mut written = Vec::new();
    for (name, data) in entries {
        let Some(relative) = safe_relative(&name) else {
            return Err(HorizonError::UnsafeArchivePath(name));
        };
        let target = directory.join(relative);
        if let Some(parent) = target.parent() {
            std::fs::create_dir_all(parent)?;
        }
        std::fs::write(&target, data)?;
        written.push(target);
    }
    Ok(written)
}

fn sanitize_tag(tag: &str) -> String {
    let cleaned: String = tag
        .chars()
        .map(|c| {
            if c.is_ascii_alphanumeric() || matches!(c, '.' | '-' | '_') {
                c
            } else {
                '-'
            }
        })
        .collect();
    if cleaned.is_empty() {
        "latest".to_owned()
    } else {
        cleaned
    }
}

fn user_agent() -> String {
    format!("TwilightMC/{}", env!("CARGO_PKG_VERSION"))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn release(tag: &str, prerelease: bool, asset: &str) -> Release {
        Release {
            tag: tag.to_owned(),
            name: tag.to_owned(),
            prerelease,
            assets: vec![ReleaseAsset {
                name: asset.to_owned(),
                url: format!("https://example.invalid/{asset}"),
                size: 1,
            }],
        }
    }

    #[test]
    fn stable_builds_are_preferred_over_nightlies() {
        let wanted = platform_asset_name().unwrap_or("horizon-windows-x64.zip");
        let releases = vec![
            release("nightly", true, wanted),
            release("stable", false, wanted),
        ];
        assert_eq!(
            preferred_release(&releases).map(|release| release.tag.as_str()),
            Some("stable")
        );
        // A stable release without this platform's archive is skipped.
        let releases = vec![
            release("stable-other", false, "horizon-other.zip"),
            release("nightly", true, wanted),
        ];
        assert_eq!(
            preferred_release(&releases).map(|release| release.tag.as_str()),
            Some("nightly")
        );
    }

    #[test]
    fn platform_names_match_the_release_flow() {
        let name = platform_asset_name();
        if cfg!(all(windows, target_arch = "x86_64")) {
            assert_eq!(name, Some("horizon-windows-x64.zip"));
        }
        if cfg!(all(windows, target_arch = "aarch64")) {
            assert_eq!(name, Some("horizon-windows-arm64.zip"));
        }
    }

    #[test]
    fn linux_tar_gz_extracts_with_a_zip_slip_guard() {
        use flate2::{Compression, write::GzEncoder};
        use std::io::Write;

        fn header(name: &str, size: usize) -> [u8; 512] {
            let mut block = [0u8; 512];
            block[..name.len()].copy_from_slice(name.as_bytes());
            let octal = format!("{:011o}\0", size);
            block[124..136].copy_from_slice(octal.as_bytes());
            block[156] = b'0';
            block[257..263].copy_from_slice(b"ustar\0");
            block
        }

        let mut tar = Vec::new();
        tar.extend_from_slice(&header("bin/horizon-client", 3));
        tar.extend_from_slice(b"bin");
        tar.resize(tar.len() + 509, 0);
        tar.extend_from_slice(&header("../escape", 1));
        tar.extend_from_slice(b"x");
        tar.resize(tar.len() + 511, 0);
        tar.extend_from_slice(&[0u8; 1024]);

        let mut encoder = GzEncoder::new(Vec::new(), Compression::default());
        encoder.write_all(&tar).unwrap();
        let archive = encoder.finish().unwrap();
        let dir =
            std::env::temp_dir().join(format!("twilight-horizon-targz-{}-2", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        let error = extract_archive(&archive, "horizon-linux-x86_64.tar.gz", &dir).unwrap_err();
        assert!(matches!(error, HorizonError::UnsafeArchivePath(_)));
        assert_eq!(
            std::fs::read(dir.join("bin/horizon-client")).unwrap(),
            b"bin"
        );
        assert!(!dir.join("../escape").exists());
        let _ = std::fs::remove_dir_all(&dir);
    }

    #[test]
    fn tags_never_escape_the_install_root() {
        assert_eq!(sanitize_tag("v2026.10.13"), "v2026.10.13");
        assert_eq!(sanitize_tag("../../etc"), "..-..-etc");
        assert_eq!(sanitize_tag(""), "latest");
    }

    #[test]
    fn zip_extraction_rejects_traversal() {
        // A stored entry named `../escape` must be refused before writing.
        let mut zip = Vec::new();
        let name = b"../escape";
        let data = b"x";
        let crc = crc32(data);
        let offset = 0u32;
        zip.extend_from_slice(&0x0403_4b50u32.to_le_bytes());
        zip.extend_from_slice(&20u16.to_le_bytes());
        zip.extend_from_slice(&[0u8; 8]);
        zip.extend_from_slice(&crc.to_le_bytes());
        zip.extend_from_slice(&1u32.to_le_bytes());
        zip.extend_from_slice(&1u32.to_le_bytes());
        zip.extend_from_slice(&(name.len() as u16).to_le_bytes());
        zip.extend_from_slice(&0u16.to_le_bytes());
        zip.extend_from_slice(name);
        zip.extend_from_slice(data);
        let central_offset = zip.len() as u32;
        zip.extend_from_slice(&0x0201_4b50u32.to_le_bytes());
        zip.extend_from_slice(&20u16.to_le_bytes());
        zip.extend_from_slice(&20u16.to_le_bytes());
        zip.extend_from_slice(&[0u8; 8]);
        zip.extend_from_slice(&crc.to_le_bytes());
        zip.extend_from_slice(&1u32.to_le_bytes());
        zip.extend_from_slice(&1u32.to_le_bytes());
        zip.extend_from_slice(&(name.len() as u16).to_le_bytes());
        zip.extend_from_slice(&[0u8; 12]);
        zip.extend_from_slice(&offset.to_le_bytes());
        zip.extend_from_slice(name);
        let cd_size = zip.len() as u32 - central_offset;
        zip.extend_from_slice(&0x0605_4b50u32.to_le_bytes());
        zip.extend_from_slice(&[0u8; 4]);
        zip.extend_from_slice(&1u16.to_le_bytes());
        zip.extend_from_slice(&1u16.to_le_bytes());
        zip.extend_from_slice(&cd_size.to_le_bytes());
        zip.extend_from_slice(&central_offset.to_le_bytes());
        zip.extend_from_slice(&0u16.to_le_bytes());

        let dir =
            std::env::temp_dir().join(format!("twilight-horizon-release-{}", std::process::id()));
        let error = extract_archive(&zip, "test.zip", &dir).unwrap_err();
        assert!(matches!(error, HorizonError::UnsafeArchivePath(_)));
    }

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
}
