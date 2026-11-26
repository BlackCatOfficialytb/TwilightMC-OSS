//! Adoptium/Temurin Java auto-downloader.
//!
//! Metadata comes from the v3 `/assets/latest/{major}/hotspot` endpoint; the
//! archive is streamed to an atomic `<dest>.part`, verified against the
//! published SHA-256 and only then unpacked into `root/temurin-<major>/`.
//! Archive paths are guarded against traversal and archive special modes.

use std::io::Read as _;
use std::path::{Path, PathBuf};

use flate2::read::GzDecoder;
use sha2::{Digest, Sha256};
use tokio::io::AsyncWriteExt as _;

use crate::error::RuntimeError;
use crate::version::JavaInstallation;

/// Public Adoptium API root used by the launcher UI.
pub const ADOPTIUM_API_BASE: &str = "https://api.adoptium.net/v3";

const USER_AGENT: &str = concat!(
    "TwilightMC/",
    env!("CARGO_PKG_VERSION"),
    " (Adoptium JRE installer; +https://github.com/TwilightMC/TwilightMC)"
);

/// One usable binary entry from an Adoptium v3 asset response.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct AdoptiumAsset {
    pub release_name: String,
    pub url: String,
    pub sha256: String,
    pub image_type: String,
    pub package_type: String,
}

/// The `image_type=jre` asset URL required by the UI contract.
pub fn adoptium_asset_url(api_base: &str, major: i32) -> Result<String, RuntimeError> {
    asset_url(api_base, major, "jre")
}

fn asset_url(api_base: &str, major: i32, image_type: &str) -> Result<String, RuntimeError> {
    if major <= 0 {
        return Err(RuntimeError::InvalidMajor(major));
    }
    let base = api_base.trim_end_matches('/');
    if base.is_empty() {
        return Err(RuntimeError::BadMetadata(
            "empty Adoptium API base URL".into(),
        ));
    }
    let (os, arch) = map_os_arch();
    Ok(format!(
        "{base}/assets/latest/{major}/hotspot?os={os}&architecture={arch}&image_type={image_type}"
    ))
}

/// Maps the current target to Adoptium's `os` and `architecture` query values.
pub fn map_os_arch() -> (&'static str, &'static str) {
    let os = if cfg!(target_os = "windows") {
        "windows"
    } else if cfg!(target_os = "macos") {
        "mac"
    } else if cfg!(target_os = "linux") {
        "linux"
    } else {
        std::env::consts::OS
    };
    let arch = match std::env::consts::ARCH {
        "x86_64" => "x64",
        "aarch64" | "arm64" => "aarch64",
        "x86" => "x86",
        other => other,
    };
    (os, arch)
}

fn json_str<'a>(value: &'a serde_json::Value, keys: &[&str]) -> Option<&'a str> {
    for key in keys {
        if let Some(text) = value.get(*key).and_then(|v| v.as_str())
            && !text.is_empty()
        {
            return Some(text);
        }
    }
    None
}

/// String-or-number field, used for `version.major` and friends.
fn json_scalar(value: &serde_json::Value, keys: &[&str]) -> Option<String> {
    for key in keys {
        match value.get(*key) {
            Some(serde_json::Value::String(text)) if !text.is_empty() => return Some(text.clone()),
            Some(serde_json::Value::Number(number)) => return Some(number.to_string()),
            _ => {}
        }
    }
    None
}

fn binaries_of(raw: &serde_json::Value) -> Result<Vec<&serde_json::Value>, RuntimeError> {
    let binaries = if let Some(array) = raw.as_array() {
        array
    } else if let Some(array) = raw.get("binaries").and_then(|v| v.as_array()) {
        array
    } else if let Some(array) = raw.get("assets").and_then(|v| v.as_array()) {
        array
    } else if let Some(array) = raw
        .get("result")
        .and_then(|v| v.get("binaries"))
        .and_then(|v| v.as_array())
    {
        array
    } else {
        return Err(RuntimeError::BadMetadata(
            "unexpected Adoptium asset payload shape".into(),
        ));
    };
    Ok(binaries.iter().collect())
}

fn is_sha256(text: &str) -> bool {
    text.len() == 64 && text.bytes().all(|byte| byte.is_ascii_hexdigit())
}

fn normalize_package_type(raw: &str) -> &'static str {
    match raw.trim().to_ascii_lowercase().as_str() {
        "zip" => "zip",
        "tar.gz" | "targz" | "tgz" | "gz" => "tar.gz",
        _ => "unknown",
    }
}

fn derive_release_name(binary: &serde_json::Value, link: &str) -> String {
    let version = binary.get("version").filter(|v| v.is_object());
    if let Some(major) = version
        .and_then(|v| json_scalar(v, &["major"]))
        .or_else(|| json_scalar(binary, &["major"]))
    {
        let minor = version
            .and_then(|v| json_scalar(v, &["minor"]))
            .unwrap_or_else(|| "0".into());
        let security = version
            .and_then(|v| json_scalar(v, &["security"]))
            .unwrap_or_else(|| "0".into());
        let build = version
            .and_then(|v| json_scalar(v, &["build"]))
            .unwrap_or_else(|| "0".into());
        return format!("jdk-{major}.{minor}.{security}+{build}");
    }
    let file = link.rsplit('/').next().unwrap_or(link);
    if file.is_empty() {
        "jdk".to_owned()
    } else {
        file.to_owned()
    }
}

/// Pure, HTTP-free parser for Adoptium v3 asset metadata.
///
/// Tolerates a bare array, `binaries`, `assets` and `result.binaries`, and
/// accepts the `sha256sum`, `sha256` and `checksum` spellings (including
/// checksums prefixed to a filename). Entries without a usable link or a
/// 64-digit hex digest are skipped.
pub fn parse_assets(raw: &serde_json::Value) -> Result<Vec<AdoptiumAsset>, RuntimeError> {
    let mut assets = Vec::new();
    for binary in binaries_of(raw)? {
        let package = binary.get("package").filter(|v| v.is_object());
        let Some(link) = package
            .and_then(|p| json_str(p, &["link", "url", "download_url"]))
            .or_else(|| json_str(binary, &["link", "url", "download_url"]))
            .map(str::trim)
            .filter(|text| !text.is_empty())
        else {
            continue;
        };
        let Some(checksum) = package
            .and_then(|p| json_str(p, &["sha256sum", "sha256", "checksum"]))
            .or_else(|| json_str(binary, &["sha256sum", "sha256", "checksum"]))
            .or_else(|| {
                binary
                    .get("checksum")
                    .and_then(|c| json_str(c, &["sha256", "sum"]))
            })
        else {
            continue;
        };
        let sha256 = checksum
            .split_whitespace()
            .next()
            .unwrap_or("")
            .trim()
            .to_owned();
        if !is_sha256(&sha256) {
            continue;
        }
        let release_name = package
            .and_then(|p| json_str(p, &["release_name", "releaseName"]))
            .or_else(|| json_str(binary, &["release_name", "releaseName"]))
            .or_else(|| {
                binary
                    .get("version")
                    .and_then(|v| json_str(v, &["release_name"]))
            })
            .map(str::to_owned)
            .unwrap_or_else(|| derive_release_name(binary, link));
        let image_type = json_str(binary, &["image_type", "imageType"])
            .map(|s| s.to_ascii_lowercase())
            .unwrap_or_else(|| {
                if release_name.starts_with("jre-") {
                    "jre".to_owned()
                } else {
                    "jdk".to_owned()
                }
            });
        let package_type = json_str(binary, &["package_type", "packageType"])
            .or_else(|| package.and_then(|p| json_str(p, &["package_type", "packageType"])))
            .map(|s| normalize_package_type(s).to_owned())
            .unwrap_or_else(|| {
                let lower = link.to_ascii_lowercase();
                if lower.ends_with(".zip") {
                    "zip".to_owned()
                } else if lower.ends_with(".tar.gz") || lower.ends_with(".tgz") {
                    "tar.gz".to_owned()
                } else {
                    "unknown".to_owned()
                }
            });

        assets.push(AdoptiumAsset {
            release_name,
            url: link.to_owned(),
            sha256,
            image_type,
            package_type,
        });
    }
    Ok(assets)
}

fn http_error(url: &str, source: reqwest::Error) -> RuntimeError {
    RuntimeError::Http {
        url: url.to_owned(),
        source: Box::new(source),
    }
}

/// Tries `image_type=jre`, then `jdk`, and returns the first asset matching
/// this OS, architecture and archive format.
pub async fn fetch_adoptium_asset(
    client: &reqwest::Client,
    api_base: &str,
    major: i32,
) -> Result<AdoptiumAsset, RuntimeError> {
    let (os, arch) = map_os_arch();
    let expected_package = if cfg!(windows) { "zip" } else { "tar.gz" };
    let mut last_status: Option<(String, u16)> = None;
    let mut saw_metadata = false;

    for image_type in ["jre", "jdk"] {
        let url = asset_url(api_base, major, image_type)?;
        let response = client
            .get(url.as_str())
            .header("User-Agent", USER_AGENT)
            .send()
            .await
            .map_err(|e| http_error(&url, e))?;
        if !response.status().is_success() {
            last_status = Some((url, response.status().as_u16()));
            continue;
        }
        let bytes = response.bytes().await.map_err(|e| http_error(&url, e))?;
        let raw: serde_json::Value = serde_json::from_slice(&bytes)?;
        saw_metadata = true;

        let filtered: Vec<serde_json::Value> = binaries_of(&raw)?
            .into_iter()
            .filter(|binary| {
                let binary_os = json_str(binary, &["os", "operating_system"])
                    .unwrap_or("")
                    .to_ascii_lowercase();
                let binary_arch = json_str(binary, &["architecture", "arch"])
                    .unwrap_or("")
                    .to_ascii_lowercase();
                let os_ok = binary_os.is_empty() || binary_os == os;
                let arch_ok = binary_arch.is_empty() || binary_arch == arch;
                os_ok && arch_ok
            })
            .cloned()
            .collect();
        let assets = parse_assets(&serde_json::Value::Array(filtered))?;
        if let Some(asset) = assets.into_iter().find(|asset| {
            asset.image_type.eq_ignore_ascii_case(image_type)
                && asset.package_type == expected_package
        }) {
            return Ok(asset);
        }
    }

    if !saw_metadata && let Some((url, status)) = last_status {
        return Err(RuntimeError::HttpStatus { url, status });
    }
    Err(RuntimeError::AssetNotFound {
        major,
        image_type: "jre or jdk",
    })
}

fn hex_encode(bytes: &[u8]) -> String {
    use std::fmt::Write as _;
    let mut out = String::with_capacity(bytes.len() * 2);
    for byte in bytes {
        let _ = write!(out, "{byte:02x}");
    }
    out
}

/// Streams one URL into `part`, returning the hex SHA-256 of the bytes seen.
async fn download_to_part(
    client: &reqwest::Client,
    url: &str,
    part: &Path,
) -> Result<String, RuntimeError> {
    let mut response = client
        .get(url)
        .header("User-Agent", USER_AGENT)
        .send()
        .await
        .map_err(|e| http_error(url, e))?;
    if !response.status().is_success() {
        return Err(RuntimeError::HttpStatus {
            url: url.to_owned(),
            status: response.status().as_u16(),
        });
    }
    let mut file = tokio::fs::File::create(part).await?;
    let mut hasher = Sha256::new();
    while let Some(chunk) = response.chunk().await.map_err(|e| http_error(url, e))? {
        hasher.update(&chunk);
        file.write_all(&chunk).await?;
    }
    file.flush().await?;
    drop(file);
    Ok(hex_encode(&hasher.finalize()))
}

/// Rejects DOS-style symlinks and other special modes recorded in a ZIP
/// central directory. Plain DOS attributes (upper 16 bits zero) and regular
/// files/directories are allowed.
fn zip_special_modes(bytes: &[u8]) -> Result<(), RuntimeError> {
    let Some(eocd) = bytes.windows(4).rposition(|window| window == b"PK\x05\x06") else {
        return Err(RuntimeError::BadArchive(
            "no zip end-of-central-directory".into(),
        ));
    };
    if eocd + 22 > bytes.len() {
        return Err(RuntimeError::BadArchive(
            "truncated zip end-of-central-directory".into(),
        ));
    }
    let count = u16::from_le_bytes([bytes[eocd + 10], bytes[eocd + 11]]) as usize;
    let mut cursor = u32::from_le_bytes([
        bytes[eocd + 16],
        bytes[eocd + 17],
        bytes[eocd + 18],
        bytes[eocd + 19],
    ]) as usize;
    for _ in 0..count {
        if cursor + 46 > bytes.len() || &bytes[cursor..cursor + 4] != b"PK\x01\x02" {
            return Err(RuntimeError::BadArchive(
                "invalid zip central directory".into(),
            ));
        }
        let name_len = u16::from_le_bytes([bytes[cursor + 28], bytes[cursor + 29]]) as usize;
        let extra_len = u16::from_le_bytes([bytes[cursor + 30], bytes[cursor + 31]]) as usize;
        let comment_len = u16::from_le_bytes([bytes[cursor + 32], bytes[cursor + 33]]) as usize;
        if cursor + 46 + name_len > bytes.len() {
            return Err(RuntimeError::BadArchive("truncated zip entry name".into()));
        }
        let name =
            String::from_utf8_lossy(&bytes[cursor + 46..cursor + 46 + name_len]).into_owned();
        let attrs = u32::from_le_bytes([
            bytes[cursor + 38],
            bytes[cursor + 39],
            bytes[cursor + 40],
            bytes[cursor + 41],
        ]);
        let unix_mode = (attrs >> 16) & 0xFFFF;
        let file_type = unix_mode & 0xF000;
        if file_type != 0 && file_type != 0x8000 && file_type != 0x4000 {
            return Err(RuntimeError::UnsafePath { path: name });
        }
        cursor += 46 + name_len + extra_len + comment_len;
    }
    Ok(())
}

fn zip_entries(bytes: &[u8]) -> Result<Vec<(String, Vec<u8>)>, RuntimeError> {
    zip_special_modes(bytes)?;
    twilight_modrinth::extract_archive(bytes)
        .map_err(|e| RuntimeError::BadArchive(format!("zip extraction failed: {e}")))
}

fn tar_field(field: &[u8]) -> String {
    let end = field
        .iter()
        .position(|&byte| byte == 0)
        .unwrap_or(field.len());
    String::from_utf8_lossy(&field[..end]).trim().to_owned()
}

fn tar_octal(field: &[u8]) -> Option<usize> {
    usize::from_str_radix(&tar_field(field), 8).ok()
}

/// Minimal USTAR reader. Only regular files are accepted: links, FIFOs,
/// devices and GNU/PAX metadata records are rejected as unsafe.
fn tar_entries(bytes: &[u8]) -> Result<Vec<(String, Vec<u8>)>, RuntimeError> {
    let mut inflated = Vec::new();
    GzDecoder::new(bytes)
        .read_to_end(&mut inflated)
        .map_err(|e| RuntimeError::BadArchive(format!("gzip decode failed: {e}")))?;

    let mut entries = Vec::new();
    let mut cursor = 0usize;
    while cursor + 512 <= inflated.len() {
        let header = &inflated[cursor..cursor + 512];
        if header.iter().all(|&byte| byte == 0) {
            break;
        }
        let name = tar_field(&header[0..100]);
        let prefix = tar_field(&header[345..500]);
        let full_name = if prefix.is_empty() {
            name
        } else {
            format!("{prefix}/{name}")
        };
        let size = tar_octal(&header[124..136])
            .ok_or_else(|| RuntimeError::BadArchive("invalid tar entry size".into()))?;
        let kind = header[156];
        let link_name = tar_field(&header[157..257]);
        cursor += 512;
        if cursor + size > inflated.len() {
            return Err(RuntimeError::BadArchive("truncated tar entry".into()));
        }
        let data = inflated[cursor..cursor + size].to_vec();
        cursor += size.div_ceil(512) * 512;

        match kind {
            b'0' | b'\0' | b'7' => {
                if !link_name.is_empty() {
                    return Err(RuntimeError::UnsafePath { path: full_name });
                }
                entries.push((full_name, data));
            }
            b'5' => {}
            _ => return Err(RuntimeError::UnsafePath { path: full_name }),
        }
    }
    Ok(entries)
}

/// Canonicalizes one archive entry into a path strictly below `dest`.
fn safe_entry_path(raw: &str) -> Result<PathBuf, RuntimeError> {
    let unsafe_path = || RuntimeError::UnsafePath {
        path: raw.to_owned(),
    };
    if raw.is_empty() || raw.contains(['\\', '\0', ':']) {
        return Err(unsafe_path());
    }
    let trimmed = raw.strip_prefix("./").unwrap_or(raw);
    if trimmed.starts_with('/') {
        return Err(unsafe_path());
    }
    let segments: Vec<&str> = trimmed.split('/').filter(|part| !part.is_empty()).collect();
    if segments.is_empty() || segments.contains(&"..") {
        return Err(unsafe_path());
    }
    let mut path = PathBuf::new();
    for segment in segments {
        path.push(segment);
    }
    Ok(path)
}

fn write_entries(entries: &[(String, Vec<u8>)], dest: &Path) -> Result<(), RuntimeError> {
    for (name, data) in entries {
        let relative = safe_entry_path(name)?;
        let target = dest.join(relative);
        if let Some(parent) = target.parent() {
            std::fs::create_dir_all(parent)?;
        }
        if name.ends_with('/') {
            std::fs::create_dir_all(&target)?;
        } else {
            std::fs::write(&target, data)?;
        }
    }
    Ok(())
}

/// Finds a `bin/java(.exe)` anywhere below `root` (Temurin tarballs ship a
/// single `jdk-*/` or `jre-*/` wrapper directory).
fn find_java(root: &Path, depth: u32) -> std::io::Result<Option<PathBuf>> {
    if depth > 6 {
        return Ok(None);
    }
    let wanted = if cfg!(windows) { "java.exe" } else { "java" };
    let mut directories = Vec::new();
    for entry in std::fs::read_dir(root)? {
        let entry = entry?;
        let path = entry.path();
        let kind = entry.file_type()?;
        if kind.is_file()
            && path.file_name().and_then(|name| name.to_str()) == Some(wanted)
            && path
                .parent()
                .and_then(|parent| parent.file_name())
                .and_then(|name| name.to_str())
                == Some("bin")
        {
            return Ok(Some(path));
        }
        if kind.is_dir() {
            directories.push(path);
        }
    }
    for directory in directories {
        if let Some(found) = find_java(&directory, depth + 1)? {
            return Ok(Some(found));
        }
    }
    Ok(None)
}

/// Downloads, verifies and unpacks a Temurin runtime into
/// `root/temurin-<major>/`, returning a probed [`JavaInstallation`].
pub async fn install_adoptium_java(
    client: &reqwest::Client,
    api_base: &str,
    root: &Path,
    major: i32,
) -> Result<JavaInstallation, RuntimeError> {
    let asset = fetch_adoptium_asset(client, api_base, major).await?;
    let destination = root.join(format!("temurin-{major}"));
    tokio::fs::create_dir_all(&destination).await?;

    let suffix = if asset.package_type == "zip" {
        "zip"
    } else {
        "tar.gz"
    };
    let archive = root.join(format!("temurin-{major}.{suffix}"));
    let part = root.join(format!("temurin-{major}.{suffix}.part"));

    let computed = match download_to_part(client, &asset.url, &part).await {
        Ok(digest) => digest,
        Err(error) => {
            let _ = tokio::fs::remove_file(&part).await;
            return Err(error);
        }
    };
    let expected = asset.sha256.trim().to_ascii_lowercase();
    if computed != expected {
        let _ = tokio::fs::remove_file(&part).await;
        return Err(RuntimeError::Sha256Mismatch {
            expected: asset.sha256.clone(),
            computed,
        });
    }
    let _ = tokio::fs::remove_file(&archive).await;
    tokio::fs::rename(&part, &archive).await?;

    let bytes = tokio::fs::read(&archive).await?;
    let entries = if asset.package_type == "zip" {
        zip_entries(&bytes)?
    } else {
        tar_entries(&bytes)?
    };
    let _ = tokio::fs::remove_file(&archive).await;

    let unpack_destination = destination.clone();
    let found = tokio::task::spawn_blocking(move || {
        write_entries(&entries, &unpack_destination)?;
        let java = find_java(&unpack_destination, 0)?;
        #[cfg(unix)]
        if let Some(ref path) = java {
            use std::os::unix::fs::PermissionsExt as _;
            let mode = std::fs::metadata(path)?.permissions().mode();
            std::fs::set_permissions(path, std::fs::Permissions::from_mode(mode | 0o111))?;
        }
        Ok::<Option<PathBuf>, RuntimeError>(java)
    })
    .await
    .map_err(|error| RuntimeError::BadArchive(format!("extraction task failed: {error}")))??;

    let executable = found.ok_or_else(|| RuntimeError::MissingExecutable {
        path: destination.join(if cfg!(windows) {
            "bin/java.exe"
        } else {
            "bin/java"
        }),
    })?;
    let jvm_home = executable
        .parent()
        .and_then(Path::parent)
        .map(Path::to_path_buf)
        .unwrap_or_else(|| destination.clone());

    match crate::probe_java_installation(&executable).await {
        Ok(installation) => Ok(installation),
        // Cross-architecture archives and slim test fixtures may not be
        // runnable here; the `release` marker is the next best version source.
        Err(probe_error) => {
            let version = crate::release_file_version(&jvm_home).ok_or(probe_error)?;
            Ok(JavaInstallation {
                executable,
                jvm_home,
                version,
            })
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use flate2::Compression;
    use flate2::write::GzEncoder;
    use std::collections::HashMap;
    use std::io::Write as _;
    use std::sync::atomic::{AtomicU64, Ordering};

    const SHA: &str = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
    static NEXT_ID: AtomicU64 = AtomicU64::new(0);

    fn temp_root() -> PathBuf {
        let id = NEXT_ID.fetch_add(1, Ordering::Relaxed);
        std::env::temp_dir().join(format!("twilight-adoptium-{}-{id}", std::process::id()))
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
        !crc
    }

    /// Minimal stored-entry ZIP with a valid central directory.
    fn tiny_zip(entries: &[(&str, &[u8])]) -> Vec<u8> {
        let mut local = Vec::new();
        let mut central = Vec::new();
        for (name, data) in entries {
            let offset = local.len() as u32;
            let checksum = crc32(data);
            local.extend_from_slice(b"PK\x03\x04");
            local.extend_from_slice(&20u16.to_le_bytes());
            local.extend_from_slice(&0u16.to_le_bytes());
            local.extend_from_slice(&0u16.to_le_bytes());
            local.extend_from_slice(&0u16.to_le_bytes());
            local.extend_from_slice(&0u16.to_le_bytes());
            local.extend_from_slice(&checksum.to_le_bytes());
            local.extend_from_slice(&(data.len() as u32).to_le_bytes());
            local.extend_from_slice(&(data.len() as u32).to_le_bytes());
            local.extend_from_slice(&(name.len() as u16).to_le_bytes());
            local.extend_from_slice(&0u16.to_le_bytes());
            local.extend_from_slice(name.as_bytes());
            local.extend_from_slice(data);

            central.extend_from_slice(b"PK\x01\x02");
            central.extend_from_slice(&20u16.to_le_bytes());
            central.extend_from_slice(&20u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&checksum.to_le_bytes());
            central.extend_from_slice(&(data.len() as u32).to_le_bytes());
            central.extend_from_slice(&(data.len() as u32).to_le_bytes());
            central.extend_from_slice(&(name.len() as u16).to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u32.to_le_bytes());
            central.extend_from_slice(&offset.to_le_bytes());
            central.extend_from_slice(name.as_bytes());
        }
        let cd_offset = local.len() as u32;
        let cd_len = central.len() as u32;
        let mut out = local;
        out.extend_from_slice(&central);
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&cd_len.to_le_bytes());
        out.extend_from_slice(&cd_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out
    }

    fn octal(value: usize, width: usize) -> Vec<u8> {
        let text = format!("{value:o}");
        let mut field = vec![b'0'; width.saturating_sub(text.len())];
        field.extend_from_slice(text.as_bytes());
        field.push(0);
        field
    }

    fn write_field(header: &mut [u8; 512], offset: usize, value: &[u8]) {
        let len = value.len().min(header.len() - offset);
        header[offset..offset + len].copy_from_slice(&value[..len]);
    }

    fn tar_entry(name: &str, data: &[u8], kind: u8) -> Vec<u8> {
        let mut header = [0u8; 512];
        write_field(&mut header, 0, name.as_bytes());
        write_field(&mut header, 100, &octal(0o644, 7));
        write_field(&mut header, 108, &octal(0, 7));
        write_field(&mut header, 116, &octal(0, 7));
        write_field(&mut header, 124, &octal(data.len(), 11));
        write_field(&mut header, 136, &octal(0, 11));
        for byte in &mut header[148..156] {
            *byte = b' ';
        }
        header[156] = kind;
        write_field(&mut header, 257, b"ustar\0");
        write_field(&mut header, 263, b"00");
        let sum: u32 = header.iter().map(|&byte| u32::from(byte)).sum();
        write_field(&mut header, 148, format!("{sum:06o}\0 ").as_bytes());

        let mut out = header.to_vec();
        out.extend_from_slice(data);
        let padding = (512 - data.len() % 512) % 512;
        out.resize(out.len() + padding, 0);
        out
    }

    fn tiny_tar(entries: &[(&str, &[u8], u8)]) -> Vec<u8> {
        let mut out = Vec::new();
        for (name, data, kind) in entries {
            out.extend_from_slice(&tar_entry(name, data, *kind));
        }
        out.extend_from_slice(&[0u8; 1024]);
        out
    }

    fn gzip(data: &[u8]) -> Vec<u8> {
        let mut encoder = GzEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(data).expect("gzip fixture");
        encoder.finish().expect("gzip footer")
    }

    fn fake_java() -> &'static [u8] {
        if cfg!(windows) {
            b"not-a-runnable-exe"
        } else {
            b"#!/bin/sh\nprintf 'openjdk version \"21.0.6\"\\n' >&2\n"
        }
    }

    fn java_entry() -> &'static str {
        if cfg!(windows) {
            "jdk-21.0.6+7/bin/java.exe"
        } else {
            "jdk-21.0.6+7/bin/java"
        }
    }

    fn fixture_archive(entries: &[(&str, &[u8], u8)]) -> Vec<u8> {
        if cfg!(windows) {
            let stored: Vec<(&str, &[u8])> = entries
                .iter()
                .map(|(name, data, _)| (*name, *data))
                .collect();
            tiny_zip(&stored)
        } else {
            gzip(&tiny_tar(entries))
        }
    }

    fn metadata(base: &str, link_path: &str, sha: &str, package: &str, image: &str) -> Vec<u8> {
        let (os, arch) = map_os_arch();
        serde_json::json!({
            "binaries": [{
                "os": os,
                "architecture": arch,
                "image_type": image,
                "package_type": package,
                "project": "jdk",
                "jvm_impl": "hotspot",
                "package": {
                    "release_name": "jdk-21.0.6+7",
                    "link": format!("{base}{link_path}"),
                    "sha256sum": sha
                },
                "version": { "major": 21, "minor": 0, "security": 6, "build": 7 }
            }]
        })
        .to_string()
        .into_bytes()
    }

    fn endpoint_path(image_type: &str) -> String {
        let origin = "http://placeholder";
        let url = asset_url(&format!("{origin}/v3"), 21, image_type).expect("endpoint URL");
        url.strip_prefix(origin).expect("prefix").to_owned()
    }

    fn part_count(dir: &Path) -> usize {
        std::fs::read_dir(dir)
            .expect("readable install root")
            .filter_map(Result::ok)
            .filter(|entry| entry.file_name().to_string_lossy().contains(".part"))
            .count()
    }

    fn sha256_hex(data: &[u8]) -> String {
        let mut hasher = Sha256::new();
        hasher.update(data);
        hex_encode(&hasher.finalize())
    }

    #[test]
    fn parses_v3_asset_metadata() {
        let raw = serde_json::json!({
            "binaries": [
                {
                    "os": "windows",
                    "architecture": "x64",
                    "image_type": "jre",
                    "package_type": "zip",
                    "package": {
                        "release_name": "jdk-21.0.6+7",
                        "link": "https://example.test/OpenJDK21U-jre.zip",
                        "sha256sum": SHA
                    }
                },
                {
                    "os": "linux",
                    "architecture": "x64",
                    "image_type": "jdk",
                    "package_type": "tar.gz",
                    "package": {
                        "link": "https://example.test/jdk-21.0.6+7.tar.gz",
                        "checksum": format!("{SHA}  jdk-21.0.6+7.tar.gz")
                    },
                    "version": { "major": 21, "minor": 0, "security": 6, "build": 7 }
                }
            ]
        });
        let assets = parse_assets(&raw).expect("parse");
        assert_eq!(assets.len(), 2);
        assert_eq!(assets[0].release_name, "jdk-21.0.6+7");
        assert_eq!(assets[0].sha256, SHA);
        assert_eq!(assets[0].image_type, "jre");
        assert_eq!(assets[0].package_type, "zip");
        assert_eq!(assets[1].release_name, "jdk-21.0.6+7");
        assert_eq!(assets[1].sha256, SHA);
        assert_eq!(assets[1].image_type, "jdk");
        assert_eq!(assets[1].package_type, "tar.gz");

        assert!(parse_assets(&serde_json::json!({"unexpected": 1})).is_err());
    }

    #[test]
    fn maps_current_target_to_adoptium_values() {
        let (os, arch) = map_os_arch();
        if cfg!(target_os = "windows") {
            assert_eq!(os, "windows");
        } else if cfg!(target_os = "macos") {
            assert_eq!(os, "mac");
        } else if cfg!(target_os = "linux") {
            assert_eq!(os, "linux");
        }
        if cfg!(target_arch = "x86_64") {
            assert_eq!(arch, "x64");
        } else if cfg!(target_arch = "aarch64") {
            assert_eq!(arch, "aarch64");
        }
        assert!(!arch.is_empty());
        assert_eq!(
            adoptium_asset_url("https://api.adoptium.net/v3/", 21).unwrap(),
            format!(
                "https://api.adoptium.net/v3/assets/latest/21/hotspot?os={os}&architecture={arch}&image_type=jre"
            )
        );
        assert!(matches!(
            adoptium_asset_url("https://api.adoptium.net/v3", 0),
            Err(RuntimeError::InvalidMajor(0))
        ));
    }

    #[tokio::test]
    async fn jre_metadata_falls_back_to_jdk() {
        let routes = HashMap::from([
            (endpoint_path("jre"), (200, br#"{"binaries":[]}"#.to_vec())),
            (
                endpoint_path("jdk"),
                (
                    200,
                    metadata(
                        "{{BASE}}",
                        "/pkg/jdk",
                        SHA,
                        if cfg!(windows) { "zip" } else { "tar.gz" },
                        "jdk",
                    ),
                ),
            ),
        ]);
        let addr = spawn(routes).await;
        let api_base = format!("http://{addr}/v3");
        let asset = fetch_adoptium_asset(&reqwest::Client::new(), &api_base, 21)
            .await
            .expect("jdk fallback");
        assert_eq!(asset.image_type, "jdk");
        assert_eq!(asset.sha256, SHA);
        assert!(asset.url.ends_with("/pkg/jdk"));
    }

    #[tokio::test]
    async fn streams_verifies_and_installs_runtime() {
        let package = if cfg!(windows) { "zip" } else { "tar.gz" };
        let entries = [
            (
                "jdk-21.0.6+7/release",
                b"JAVA_VERSION=\"21.0.6\"\n".as_slice(),
                b'0',
            ),
            (java_entry(), fake_java(), b'0'),
        ];
        let archive = fixture_archive(&entries);
        let sha = sha256_hex(&archive);
        let routes = HashMap::from([
            (
                endpoint_path("jre"),
                (200, metadata("{{BASE}}", "/pkg/jre", &sha, package, "jre")),
            ),
            ("/pkg/jre".to_owned(), (200, archive)),
        ]);
        let addr = spawn(routes).await;
        let base = temp_root();
        let root = base.join("java");

        let installation = install_adoptium_java(
            &reqwest::Client::new(),
            &format!("http://{addr}/v3"),
            &root,
            21,
        )
        .await
        .expect("installation");
        assert_eq!(installation.version.major, 21);
        assert!(installation.executable.is_file());
        assert!(root.join("temurin-21").is_dir());
        assert!(!root.join(format!("temurin-21.{package}")).exists());
        assert_eq!(part_count(&root), 0);
        std::fs::remove_dir_all(&base).expect("cleanup");
    }

    #[tokio::test]
    async fn sha256_mismatch_leaves_no_final_file() {
        let package = if cfg!(windows) { "zip" } else { "tar.gz" };
        let archive = fixture_archive(&[("jdk-21.0.6+7/bin/java", fake_java(), b'0')]);
        let routes = HashMap::from([
            (
                endpoint_path("jre"),
                (
                    200,
                    metadata("{{BASE}}", "/pkg/jre", &"0".repeat(64), package, "jre"),
                ),
            ),
            ("/pkg/jre".to_owned(), (200, archive)),
        ]);
        let addr = spawn(routes).await;
        let base = temp_root();
        let root = base.join("java");

        let error = install_adoptium_java(
            &reqwest::Client::new(),
            &format!("http://{addr}/v3"),
            &root,
            21,
        )
        .await
        .expect_err("checksum must fail");
        assert!(matches!(error, RuntimeError::Sha256Mismatch { .. }));
        assert!(!root.join(format!("temurin-21.{package}")).exists());
        assert_eq!(part_count(&root), 0);
        std::fs::remove_dir_all(&base).expect("cleanup");
    }

    #[tokio::test]
    async fn unsafe_archive_entry_is_rejected() {
        let package = if cfg!(windows) { "zip" } else { "tar.gz" };
        let entries = [
            ("../evil", b"pwned".as_slice(), b'0'),
            (
                "jdk-21.0.6+7/release",
                b"JAVA_VERSION=\"21.0.6\"\n".as_slice(),
                b'0',
            ),
            (java_entry(), fake_java(), b'0'),
        ];
        let archive = fixture_archive(&entries);
        let sha = sha256_hex(&archive);
        let routes = HashMap::from([
            (
                endpoint_path("jre"),
                (200, metadata("{{BASE}}", "/pkg/jre", &sha, package, "jre")),
            ),
            ("/pkg/jre".to_owned(), (200, archive)),
        ]);
        let addr = spawn(routes).await;
        let base = temp_root();
        let root = base.join("java");

        let error = install_adoptium_java(
            &reqwest::Client::new(),
            &format!("http://{addr}/v3"),
            &root,
            21,
        )
        .await
        .expect_err("traversal must fail");
        assert!(matches!(error, RuntimeError::UnsafePath { .. }));
        assert!(!base.join("evil").exists());
        std::fs::remove_dir_all(&base).expect("cleanup");
    }
}
