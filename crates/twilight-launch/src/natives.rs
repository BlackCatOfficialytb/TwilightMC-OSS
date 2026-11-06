//! Natives extraction for the launch pipeline.
//!
//! Primary extractor is the 7-Zip CLI (`7z` then `7za`), mirroring the
//! deduplication-free `-xr!` extra-filter invocation Prism uses. When no
//! 7-Zip binary exists, a lightweight pure-Rust fallback extracts
//! *stored* (uncompressed) jar entries and clearly refuses deflated ones
//! with `LaunchError::UnsupportedCompression` — so failure is loud, never
//! a silent half-extraction.

use std::path::{Path, PathBuf};

use tokio::process::Command;

use crate::error::LaunchError;

/// Common exclusion for every natives jar: the JAR metadata tree that must
/// not leak into `natives_directory`.
const DEFAULT_EXCLUDE: &str = "META-INF*";

/// Builds the exact argv for one 7-Zip extraction run:
/// `x -y -o<natives_dir> <jar> -xr!META-INF* [-xr!<exclude>..]`.
pub fn sevenzip_arguments(
    jar_path: &Path,
    natives_dir: &Path,
    extract_excludes: &[String],
) -> Vec<String> {
    let mut args = vec![
        "x".to_owned(),
        "-y".to_owned(),
        format!("-o{}", natives_dir.display()),
        jar_path.display().to_string(),
        format!("-xr!{DEFAULT_EXCLUDE}"),
    ];
    for exclude in extract_excludes {
        args.push(format!("-xr!{exclude}"));
    }
    args
}

/// Locates a 7-Zip CLI (`7z` first, then `7za`) by running `<tool> -version`;
/// returns the command name that answered, or `None`.
pub async fn find_seven_zip() -> Option<String> {
    for tool in ["7z", "7za"] {
        let probe = Command::new(tool).arg("-version").output().await;
        if matches!(probe, Ok(output) if output.status.success()) {
            return Some(tool.to_owned());
        }
    }
    None
}

/// Runs 7-Zip over each native jar. Requires a pre-existing `natives_dir`.
pub async fn extract_natives_with_7z(
    tool: &str,
    natives_dir: &Path,
    native_jars: &[PathBuf],
    extract_excludes: &[String],
) -> Result<(), LaunchError> {
    for jar in native_jars {
        let args = sevenzip_arguments(jar, natives_dir, extract_excludes);
        let output = Command::new(tool)
            .args(&args)
            .current_dir(natives_dir)
            .output()
            .await
            .map_err(|e| LaunchError::Spawn {
                executable: tool.to_owned(),
                source: e,
            })?;
        if !output.status.success() {
            return Err(LaunchError::ExtractFailed {
                jar: jar.display().to_string(),
                code: output.status.code(),
                stderr: String::from_utf8_lossy(&output.stderr).trim().to_owned(),
            });
        }
    }
    Ok(())
}

/// Combined resolution used by the CLI pipeline: 7-Zip when available,
/// otherwise the pure-Rust stored-entry fallback.
pub async fn extract_natives(
    natives_dir: &Path,
    native_jars: &[PathBuf],
    extract_excludes: &[String],
) -> Result<(), LaunchError> {
    if let Some(tool) = find_seven_zip().await {
        return extract_natives_with_7z(&tool, natives_dir, native_jars, extract_excludes).await;
    }
    extract_natives_with_fallback(natives_dir, native_jars, extract_excludes).await
}

/// Pure-Rust fallback: extracts every stored (method 0) entry of each jar,
/// skipping `extract_excludes` (lightweight `*`-suffix glob emulation).
pub async fn extract_natives_with_fallback(
    natives_dir: &Path,
    native_jars: &[PathBuf],
    extract_excludes: &[String],
) -> Result<(), LaunchError> {
    tokio::fs::create_dir_all(natives_dir)
        .await
        .map_err(LaunchError::ExtractIo)?;
    for jar in native_jars {
        let bytes = tokio::fs::read(jar).await.map_err(LaunchError::ExtractIo)?;
        let entries =
            central_directory_entries(&bytes).map_err(|reason| LaunchError::CorruptJar {
                jar: jar.display().to_string(),
                reason,
            })?;
        let jar_name = jar.display().to_string();
        for entry in entries {
            if is_excluded(&entry.name, extract_excludes) {
                continue;
            }
            if entry.method != METHOD_STORED {
                return Err(LaunchError::UnsupportedCompression {
                    jar: jar_name.clone(),
                    entry: entry.name.clone(),
                    method: entry.method,
                });
            }
            let data =
                local_entry_data(&bytes, &entry).map_err(|reason| LaunchError::CorruptJar {
                    jar: jar_name.clone(),
                    reason,
                })?;
            if crc32_ieee(&data) != entry.crc {
                return Err(LaunchError::CorruptJar {
                    jar: jar_name,
                    reason: format!("crc mismatch for entry {}", entry.name),
                });
            }
            let target = natives_dir.join(&entry.name);
            if let Some(parent) = target.parent() {
                tokio::fs::create_dir_all(parent)
                    .await
                    .map_err(LaunchError::ExtractIo)?;
            }
            tokio::fs::write(&target, &data)
                .await
                .map_err(LaunchError::ExtractIo)?;
        }
    }
    Ok(())
}

/// Purges and recreates the natives directory (safe before every launch).
pub async fn clean_natives_dir(natives_dir: &Path) -> std::io::Result<()> {
    match tokio::fs::remove_dir_all(natives_dir).await {
        Ok(()) => {}
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => {}
        Err(e) => return Err(e),
    }
    tokio::fs::create_dir_all(natives_dir).await
}

const METHOD_STORED: u16 = 0;

struct ZipEntry {
    name: String,
    method: u16,
    crc: u32,
    compressed_size: usize,
    local_offset: usize,
}

/// Parses the central directory of a jar (zip) file via its End-Of-Central-Directory record.
fn central_directory_entries(bytes: &[u8]) -> Result<Vec<ZipEntry>, String> {
    const EOCD: &[u8; 4] = b"PK\x05\x06";
    let eocd_pos =
        find_last_signature(bytes, EOCD).ok_or("no end-of-central-directory record found")?;
    if eocd_pos + 22 > bytes.len() {
        return Err("truncated end-of-central-directory".into());
    }
    let read_u16 = |off: usize| u16::from_le_bytes([bytes[off], bytes[off + 1]]);
    let read_u32 = |off: usize| {
        u32::from_le_bytes([bytes[off], bytes[off + 1], bytes[off + 2], bytes[off + 3]])
    };
    let _disk = read_u16(eocd_pos + 4);
    let entry_count = read_u16(eocd_pos + 10) as usize;
    let cd_offset = read_u32(eocd_pos + 16) as usize;
    if cd_offset + 4 > bytes.len() {
        return Err("central directory offset out of bounds".into());
    }

    let mut entries = Vec::with_capacity(entry_count);
    let mut cursor = cd_offset;
    for _ in 0..entry_count {
        if cursor + 46 + 4 > bytes.len() || &bytes[cursor..cursor + 4] != b"PK\x01\x02" {
            return Err(format!(
                "invalid central directory entry at offset {cursor}"
            ));
        }
        let method = read_u16(cursor + 10);
        let crc = read_u32(cursor + 16);
        let compressed_size = read_u32(cursor + 20) as usize;
        let name_len = read_u16(cursor + 28) as usize;
        let extra_len = read_u16(cursor + 30) as usize;
        let comment_len = read_u16(cursor + 32) as usize;
        let local_offset = read_u32(cursor + 42) as usize;
        if cursor + 46 + name_len > bytes.len() {
            return Err("central directory entry name truncated".into());
        }
        let name =
            String::from_utf8_lossy(&bytes[cursor + 46..cursor + 46 + name_len]).into_owned();
        entries.push(ZipEntry {
            name,
            method,
            crc,
            compressed_size,
            local_offset,
        });
        cursor += 46 + name_len + extra_len + comment_len;
    }
    Ok(entries)
}

/// Reads the (stored) payload of an entry by walking its local file header.
fn local_entry_data(bytes: &[u8], entry: &ZipEntry) -> Result<Vec<u8>, String> {
    let off = entry.local_offset;
    if off + 30 > bytes.len() || &bytes[off..off + 4] != b"PK\x03\x04" {
        return Err(format!("invalid local header for {}", entry.name));
    }
    let read_u16 = |p: usize| u16::from_le_bytes([bytes[p], bytes[p + 1]]);
    let name_len = read_u16(off + 26) as usize;
    let extra_len = read_u16(off + 28) as usize;
    let data_start = off + 30 + name_len + extra_len;
    if data_start + entry.compressed_size > bytes.len() {
        return Err(format!("payload of {} out of bounds", entry.name));
    }
    Ok(bytes[data_start..data_start + entry.compressed_size].to_vec())
}

/// Locates the *last* occurrence of a signature (zip records are little variants
/// of the same magic), scanning backwards.
fn find_last_signature(bytes: &[u8], signature: &[u8]) -> Option<usize> {
    if signature.len() > bytes.len() {
        return None;
    }
    (0..=bytes.len() - signature.len())
        .rev()
        .find(|&i| &bytes[i..i + signature.len()] == signature)
}

/// Lightweight glob emulation for `extract_excludes`, mirroring 7-Zip's
/// `-xr!` semantics closely enough for Mojang shapes (`META-INF/`,
/// `.signature`, ...): prefix on the whole path *or* on any path component,
/// case-insensitive like the Windows filesystem 7-Zip was built for.
fn is_excluded(entry_name: &str, excludes: &[String]) -> bool {
    let name = entry_name.replace('\\', "/").to_ascii_lowercase();
    excludes.iter().any(|raw| {
        let pattern = raw.trim_end_matches('*');
        let base = pattern.strip_prefix("xr!").unwrap_or(pattern);
        let prefix = base.to_ascii_lowercase();
        name.starts_with(&prefix) || name.split('/').any(|part| part.starts_with(&prefix))
    })
}

/// IEEE CRC-32 (reflected, poly 0xEDB88320) — used to verify fallback extraction.
fn crc32_ieee(data: &[u8]) -> u32 {
    static TABLE: std::sync::OnceLock<[u32; 256]> = std::sync::OnceLock::new();
    let table = TABLE.get_or_init(|| {
        let mut t = [0u32; 256];
        for (i, item) in t.iter_mut().enumerate() {
            let mut c = i as u32;
            for _ in 0..8 {
                c = if c & 1 != 0 {
                    0xEDB8_8320 ^ (c >> 1)
                } else {
                    c >> 1
                };
            }
            *item = c;
        }
        t
    });
    let mut crc = 0xFFFF_FFFFu32;
    for &b in data {
        crc = table[((crc ^ b as u32) & 0xFF) as usize] ^ (crc >> 8);
    }
    crc ^ 0xFFFF_FFFF
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sevenzip_args_cover_output_dir_overwrite_and_excludes() {
        let dir = Path::new(r"C:\staging\natives\26.3");
        let jar = Path::new(r"D:\ins\libraries\org\lwjgl\lwjgl\3.3.3\lwjgl-3.3.3-natives.jar");
        let args = sevenzip_arguments(jar, dir, &[".signature".to_owned()]);
        assert_eq!(
            args,
            vec![
                "x",
                "-y",
                "-oC:\\staging\\natives\\26.3",
                "D:\\ins\\libraries\\org\\lwjgl\\lwjgl\\3.3.3\\lwjgl-3.3.3-natives.jar",
                "-xr!META-INF*",
                "-xr!.signature",
            ]
        );
    }

    /// Writes a minimal but *fully valid* ZIP (stored entries + CRCs + central
    /// directory) so both the fallback reader and 7-Zip accept it offline.
    fn build_test_zip(entries: &[(&str, &[u8])]) -> Vec<u8> {
        let mut out = Vec::new();
        let mut central = Vec::new();
        for (name, body) in entries {
            let local_offset = out.len() as u32;
            let crc = crc32_ieee(body);
            out.extend_from_slice(b"PK\x03\x04");
            out.extend_from_slice(&20u16.to_le_bytes()); // version need
            out.extend_from_slice(&0u16.to_le_bytes()); // flags
            out.extend_from_slice(&0u16.to_le_bytes()); // method: stored
            out.extend_from_slice(&0u16.to_le_bytes()); // mtime
            out.extend_from_slice(&0u16.to_le_bytes()); // mdate
            out.extend_from_slice(&crc.to_le_bytes());
            out.extend_from_slice(&(body.len() as u32).to_le_bytes());
            out.extend_from_slice(&(body.len() as u32).to_le_bytes());
            out.extend_from_slice(&(name.len() as u16).to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes()); // extra len
            out.extend_from_slice(name.as_bytes());
            out.extend_from_slice(body);

            central.extend_from_slice(b"PK\x01\x02");
            central.extend_from_slice(&20u16.to_le_bytes()); // version made
            central.extend_from_slice(&20u16.to_le_bytes()); // version need
            central.extend_from_slice(&0u16.to_le_bytes()); // flags
            central.extend_from_slice(&0u16.to_le_bytes()); // method
            central.extend_from_slice(&0u16.to_le_bytes()); // time
            central.extend_from_slice(&0u16.to_le_bytes()); // date
            central.extend_from_slice(&crc.to_le_bytes());
            central.extend_from_slice(&(body.len() as u32).to_le_bytes());
            central.extend_from_slice(&(body.len() as u32).to_le_bytes());
            central.extend_from_slice(&(name.len() as u16).to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes()); // extra
            central.extend_from_slice(&0u16.to_le_bytes()); // comment
            central.extend_from_slice(&0u16.to_le_bytes()); // disk
            central.extend_from_slice(&0u16.to_le_bytes()); // internal attrs
            central.extend_from_slice(&0u32.to_le_bytes()); // external attrs
            central.extend_from_slice(&local_offset.to_le_bytes());
            central.extend_from_slice(name.as_bytes());
        }
        let central_offset = out.len() as u32;
        out.extend_from_slice(&central);
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&0u16.to_le_bytes()); // disk ids
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(central.len() as u32).to_le_bytes());
        out.extend_from_slice(&central_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes()); // comment len
        out
    }

    #[tokio::test]
    async fn fallback_extracts_stored_entries_and_respects_excludes() {
        let jar_bytes = build_test_zip(&[
            ("lwjgl.dll", b"native-payload"),
            ("META-INF/MANIFEST.MF", b"manifest!"),
        ]);
        let dir = fresh_dir("natives-fb");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let jar_path = dir.join("natives.jar");
        tokio::fs::write(&jar_path, &jar_bytes).await.unwrap();

        let natives = dir.join("out");
        extract_natives_with_fallback(&natives, &[jar_path], &["META-INF/".to_owned()])
            .await
            .unwrap();
        assert_eq!(
            tokio::fs::read(natives.join("lwjgl.dll")).await.unwrap(),
            b"native-payload"
        );
        assert!(
            !natives.join("META-INF").exists(),
            "excluded entries must not leak into natives_directory"
        );
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn fallback_rejects_deflated_entries_loudly() {
        // hand-craft one deflated central-directory entry (method 8)
        let mut zip = build_test_zip(&[("placeholder.bin", b"x")]);
        // corrupt the single stored entry's method field at local + 8 and CD offset
        // — the fallback must refuse rather than write garbage files
        let eocd = find_last_signature(&zip, b"PK\x05\x06").unwrap();
        let cd_offset = u32::from_le_bytes([
            zip[eocd + 16],
            zip[eocd + 17],
            zip[eocd + 18],
            zip[eocd + 19],
        ]) as usize;
        zip[cd_offset + 10] = 8; // central directory method := deflate
        let dir = fresh_dir("natives-flate");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let jar_path = dir.join("deflated.jar");
        tokio::fs::write(&jar_path, &zip).await.unwrap();
        let natives = dir.join("out");
        let err = extract_natives_with_fallback(&natives, &[jar_path], &[])
            .await
            .unwrap_err();
        assert!(
            matches!(err, LaunchError::UnsupportedCompression { .. }),
            "{err:?}"
        );
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn fallback_detects_corrupt_crc() {
        let mut zip = build_test_zip(&[("lib.so", b"payload")]);
        // flip a CRC byte inside the central directory
        let eocd = find_last_signature(&zip, b"PK\x05\x06").unwrap();
        let cd_offset = u32::from_le_bytes([
            zip[eocd + 16],
            zip[eocd + 17],
            zip[eocd + 18],
            zip[eocd + 19],
        ]) as usize;
        zip[cd_offset + 16] ^= 0xff;
        let dir = fresh_dir("natives-crc");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let jar_path = dir.join("bad.jar");
        tokio::fs::write(&jar_path, &zip).await.unwrap();
        let natives = dir.join("out");
        let err = extract_natives_with_fallback(&natives, &[jar_path], &[])
            .await
            .unwrap_err();
        assert!(matches!(err, LaunchError::CorruptJar { .. }), "{err:?}");
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn clean_natives_purges_then_recreates() {
        let dir = fresh_dir("natives-clean");
        let natives = dir.join("natives");
        tokio::fs::create_dir_all(natives.join("stale/older"))
            .await
            .unwrap();
        tokio::fs::write(natives.join("stale/older/lib.so"), b"old")
            .await
            .unwrap();
        clean_natives_dir(&natives).await.unwrap();
        assert!(natives.is_dir());
        let mut leftovers = tokio::fs::read_dir(&natives).await.unwrap();
        if let Some(entry) = leftovers.next_entry().await.unwrap() {
            panic!(
                "stale native {} was not purged",
                entry.file_name().to_string_lossy()
            );
        }
        // idempotent on missing directory
        clean_natives_dir(&dir.join("never-created")).await.unwrap();
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn sevenzip_extraction_matches_its_own_args_when_present() {
        // offline validation on machines that ship 7-Zip; skipped elsewhere
        let Some(tool) = find_seven_zip().await else {
            eprintln!("skipping: 7z/7za not on PATH");
            return;
        };
        let zip = build_test_zip(&[("jvm.dll", b"native-payload"), ("META-INF/ignore", b"x")]);
        let dir = fresh_dir("natives-7z");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let jar_path = dir.join("natives.jar");
        tokio::fs::write(&jar_path, &zip).await.unwrap();
        let natives = dir.join("out");
        tokio::fs::create_dir_all(&natives).await.unwrap();
        extract_natives_with_7z(&tool, &natives, &[jar_path], &["META-INF/".to_owned()])
            .await
            .unwrap();
        assert_eq!(
            tokio::fs::read(natives.join("jvm.dll")).await.unwrap(),
            b"native-payload"
        );
        assert!(!natives.join("META-INF").exists());
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[test]
    fn exclusion_globs_cover_plain_and_component_matches() {
        assert!(is_excluded("META-INF/MANIFEST.MF", &["META-INF/".into()]));
        assert!(
            is_excluded("meta-inf/sub/file", &["META-INF*".into()]),
            "case-insensitive head"
        );
        assert!(is_excluded(
            "com/sun/jna/signature/file",
            &["signature".into()]
        ));
        assert!(!is_excluded("com/sun/jna/file", &["META-INF".into()]));
    }

    fn fresh_dir(tag: &str) -> PathBuf {
        let nanos = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|d| d.subsec_nanos())
            .unwrap_or(0);
        std::env::temp_dir().join(format!("launch-{tag}-{}-{nanos}", std::process::id()))
    }
}
