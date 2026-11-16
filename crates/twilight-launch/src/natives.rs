//! Natives extraction for the launch pipeline.
//!
//! Primary extractor is the 7-Zip CLI (`7z` then `7za`), mirroring the
//! deduplication-free `-xr!` extra-filter invocation Prism uses. When no
//! 7-Zip binary exists, the pure-Rust ZIP/DEFLATE reader from
//! `twilight-modrinth` unpacks each jar instead — every Mojang and mod-loader
//! natives jar is deflated inside, so a stored-only reader would reject them
//! and fail the whole launch.

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

/// Pure-Rust fallback: decodes every entry of each jar (stored and deflated,
/// CRC-verified) through `twilight-modrinth`'s reader, skipping
/// `extract_excludes` (lightweight `*`-suffix glob emulation).
///
/// A missing or unreadable jar is reported with its path so the console shows
/// which download the pipeline could not unpack.
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
        let jar_name = jar.display().to_string();
        let entries = twilight_modrinth::extract_archive(&bytes).map_err(|reason| {
            LaunchError::CorruptJar {
                jar: jar_name.clone(),
                reason: reason.to_string(),
            }
        })?;
        for (name, data) in entries {
            if is_excluded(&name, extract_excludes) {
                continue;
            }
            // zip-slip guard: natives jars are third-party artifacts
            let relative = name.replace('\\', "/");
            if relative.starts_with('/')
                || relative.contains(':')
                || relative.split('/').any(|segment| segment == "..")
            {
                return Err(LaunchError::CorruptJar {
                    jar: jar_name.clone(),
                    reason: format!("unsafe entry path {name}"),
                });
            }
            let target = natives_dir.join(&relative);
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

#[cfg(test)]
mod tests {
    use super::*;

    /// IEEE CRC-32 (reflected, poly 0xEDB88320) — test-fixture builder only;
    /// production verification lives in `twilight-modrinth`'s reader.
    fn crc32_ieee(data: &[u8]) -> u32 {
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

    /// Builds a ZIP with one *deflated* (method 8) entry. The payload inside
    /// uses a DEFLATE stored block (BTYPE=00), which is valid DEFLATE and
    /// constructible by hand — enough to prove the fallback decodes method 8
    /// rather than rejecting it. (Real jars use Huffman blocks; the reader's
    /// inflate handles those, and `twilight-modrinth` covers them directly.)
    fn build_deflated_zip(name: &str, body: &[u8]) -> Vec<u8> {
        let mut compressed = vec![0x01]; // BFINAL=1, BTYPE=00 (stored)
        compressed.extend_from_slice(&(body.len() as u16).to_le_bytes());
        compressed.extend_from_slice(&(!(body.len() as u16)).to_le_bytes());
        compressed.extend_from_slice(body);

        let crc = crc32_ieee(body);
        let mut out = Vec::new();
        out.extend_from_slice(b"PK\x03\x04");
        out.extend_from_slice(&20u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&8u16.to_le_bytes()); // method: deflate
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&crc.to_le_bytes());
        out.extend_from_slice(&(compressed.len() as u32).to_le_bytes());
        out.extend_from_slice(&(body.len() as u32).to_le_bytes());
        out.extend_from_slice(&(name.len() as u16).to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(name.as_bytes());
        out.extend_from_slice(&compressed);

        let central_offset = out.len() as u32;
        out.extend_from_slice(b"PK\x01\x02");
        out.extend_from_slice(&20u16.to_le_bytes());
        out.extend_from_slice(&20u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&8u16.to_le_bytes()); // method
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&crc.to_le_bytes());
        out.extend_from_slice(&(compressed.len() as u32).to_le_bytes());
        out.extend_from_slice(&(body.len() as u32).to_le_bytes());
        out.extend_from_slice(&(name.len() as u16).to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u32.to_le_bytes());
        out.extend_from_slice(&0u32.to_le_bytes()); // local offset 0
        out.extend_from_slice(name.as_bytes());
        let central_len = out.len() as u32 - central_offset;
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&1u16.to_le_bytes());
        out.extend_from_slice(&1u16.to_le_bytes());
        out.extend_from_slice(&central_len.to_le_bytes());
        out.extend_from_slice(&central_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out
    }

    #[tokio::test]
    async fn fallback_extracts_deflated_entries() {
        // the fallback must decode real (deflated) natives jars, not just
        // stored ones: refusing them failed every launch without 7-Zip
        let payload = b"deflated-native-payload".repeat(20);
        let jar_bytes = build_deflated_zip("openal64.dll", &payload);
        let dir = fresh_dir("natives-flate-ok");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let jar_path = dir.join("natives.jar");
        tokio::fs::write(&jar_path, &jar_bytes).await.unwrap();

        let natives = dir.join("out");
        extract_natives_with_fallback(&natives, &[jar_path], &["META-INF/".to_owned()])
            .await
            .unwrap();
        assert_eq!(
            tokio::fs::read(natives.join("openal64.dll")).await.unwrap(),
            payload
        );
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn fallback_rejects_unsafe_entry_paths() {
        let jar_bytes = build_test_zip(&[("../escape.dll", b"nope")]);
        let dir = fresh_dir("natives-slip");
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let jar_path = dir.join("evil.jar");
        tokio::fs::write(&jar_path, &jar_bytes).await.unwrap();
        let err = extract_natives_with_fallback(&dir.join("out"), &[jar_path], &[])
            .await
            .unwrap_err();
        assert!(matches!(err, LaunchError::CorruptJar { .. }), "{err:?}");
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn fallback_detects_corrupt_crc() {
        let mut zip = build_test_zip(&[("lib.so", b"payload")]);
        // flip a CRC byte inside the central directory (offset 16 of the record)
        let eocd = zip
            .windows(4)
            .rposition(|window| window == b"PK\x05\x06")
            .unwrap();
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
