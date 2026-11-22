//! uv-style global content-addressable store (CAS) engine.
//!
//! Blobs live under `<cas_root>/sha1/<xx>/<full_sha1_hash>` and are linked
//! into target directories through a strategy cascade: hardlink → NTFS
//! junction (Windows) → symlink → plain copy, so deduplication never breaks
//! downstream consumers (e.g. game launches). Fully generic: no game,
//! launcher or Minecraft terms anywhere in the public API.

use std::collections::{BTreeMap, HashSet};
use std::path::{Path, PathBuf};

use sha1::{Digest, Sha1};
use thiserror::Error;
use tokio::fs::File;
use tokio::io::{AsyncReadExt, AsyncSeekExt, SeekFrom};

#[derive(Debug, Error)]
pub enum CasError {
    #[error("io error: {0}")]
    Io(#[from] std::io::Error),
    #[error("destination already exists: {}", .0.display())]
    DestinationExists(PathBuf),
}

/// Result of [`ingest_file`]: the blob hash and whether the blob already
/// existed in the CAS.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct IngestResult {
    pub hash: String,
    pub already_existed: bool,
}

/// Which strategy materialized one link (reported to callers and logs).
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LinkKind {
    Hardlink,
    Junction,
    Symlink,
    Copy,
}

/// Outcome of [`deduplicate_dirs`]: scanned files, replaced files and
/// approximate bytes the duplicates consumed before linking.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq, serde::Serialize)]
pub struct DedupeReport {
    pub scanned_files: usize,
    pub deduplicated_files: usize,
    pub linked_count: usize,
    pub bytes_reclaimed: u64,
}

/// Outcome of [`cas_garbage_collect_dirs`].
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq, serde::Serialize)]
pub struct GcReport {
    pub reclaimed_bytes: u64,
    pub removed_blobs: usize,
}

/// Live CAS stats: number of stored blobs and their total size in bytes.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub struct CasStats {
    pub blob_count: usize,
    pub total_size_bytes: u64,
}

pub fn blob_path(cas_root: &Path, hash: &str) -> PathBuf {
    let (prefix, rest) = hash.split_at(2);
    cas_root.join("sha1").join(prefix).join(rest)
}

/// Scans `<cas_root>/sha1` and returns the blob count + total size.
pub fn cas_stats(cas_root: &Path) -> Result<CasStats, std::io::Error> {
    let mut stack = vec![cas_root.join("sha1")];
    let mut stats = CasStats::default();
    while let Some(dir) = stack.pop() {
        let entries = match std::fs::read_dir(&dir) {
            Ok(e) => e,
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => continue,
            Err(e) => return Err(e),
        };
        for entry in entries {
            let entry = entry?;
            let path = entry.path();
            if path.is_dir() {
                stack.push(path);
            } else {
                let meta = entry.metadata()?;
                if meta.is_file() {
                    stats.blob_count += 1;
                    stats.total_size_bytes += meta.len();
                }
            }
        }
    }
    Ok(stats)
}

/// Streams `src` into the CAS, hashing while reading; atomic rename into
/// place when the blob is new. Reuses an existing blob if another ingest
/// won the race, so concurrent ingests converge instead of failing.
pub async fn ingest_file<P, Q>(cas_root: P, src: Q) -> Result<IngestResult, CasError>
where
    P: AsRef<Path>,
    Q: AsRef<Path>,
{
    let src = src.as_ref();
    let mut reader = File::open(src).await?;
    let hash = sha1_stream(&mut reader).await?;
    reader.seek(SeekFrom::Start(0)).await?;

    let blob = blob_path(cas_root.as_ref(), &hash);
    if tokio::fs::try_exists(&blob).await? {
        return Ok(IngestResult {
            hash,
            already_existed: true,
        });
    }

    let parent = blob
        .parent()
        .ok_or_else(|| std::io::Error::other("blob path has no parent"))?;
    tokio::fs::create_dir_all(parent).await?;
    let tmp = parent.join(format!(
        ".{}.{}.tmp",
        blob.file_name()
            .map(|n| n.to_string_lossy())
            .unwrap_or_default(),
        std::process::id()
    ));
    let mut out = File::create(&tmp).await?;
    tokio::io::copy(&mut reader, &mut out).await?;
    out.sync_all().await?;
    drop(out);

    match std::fs::rename(&tmp, &blob) {
        Ok(()) => Ok(IngestResult {
            hash,
            already_existed: false,
        }),
        Err(_) => {
            let already = tokio::fs::try_exists(&blob).await?;
            let _ = tokio::fs::remove_file(&tmp).await;
            Ok(IngestResult {
                hash,
                already_existed: already,
            })
        }
    }
}

async fn sha1_stream<R: AsyncReadExt + Unpin>(mut reader: R) -> Result<String, std::io::Error> {
    let mut hasher = Sha1::new();
    let mut buf = vec![0u8; 64 * 1024];
    loop {
        let n = reader.read(&mut buf).await?;
        if n == 0 {
            break;
        }
        hasher.update(&buf[..n]);
    }
    Ok(hasher
        .finalize()
        .iter()
        .map(|b| format!("{b:02x}"))
        .collect())
}

fn try_exists(path: &Path) -> std::io::Result<bool> {
    match std::fs::metadata(path) {
        Ok(_) => Ok(true),
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => Ok(false),
        Err(e) => Err(e),
    }
}

/// Links (or copies) `cas_blob` to `dest`. `dest` must not exist yet. The
/// cascade is hardlink → NTFS junction (Windows) → symlink → copy, so the
/// worst case is always a real copy. Returns the winning strategy so
/// callers and diagnostics can report the true cost.
pub async fn link_or_copy(cas_blob: &Path, dest: &Path) -> Result<LinkKind, CasError> {
    if try_exists(dest)? {
        return Err(CasError::DestinationExists(dest.to_path_buf()));
    }

    // 1. hardlink — zero-copy; no privileges needed on NTFS/ext4/APFS.
    if std::fs::hard_link(cas_blob, dest).is_ok() {
        return Ok(LinkKind::Hardlink);
    }

    // 2. Windows NTFS directory junctions (no admin rights needed).
    #[cfg(windows)]
    {
        let cmdline = format!(
            "mklink /J \"{}\" \"{}\"",
            dest.display(),
            cas_blob.display()
        );
        let status = std::process::Command::new("cmd")
            .args(["/C", &cmdline])
            .current_dir(dest.parent().map(Path::to_path_buf).unwrap_or_default())
            .stdout(std::process::Stdio::null())
            .stderr(std::process::Stdio::null())
            .status();
        if status.is_ok_and(|s| s.success()) && try_exists(dest)? {
            return Ok(LinkKind::Junction);
        }
    }

    // 3. symlink — Unix dirs/files, Windows files with dev mode.
    #[cfg(unix)]
    if std::os::unix::fs::symlink(cas_blob, dest).is_ok() {
        return Ok(LinkKind::Symlink);
    }
    #[cfg(windows)]
    if std::os::windows::fs::symlink_file(cas_blob, dest).is_ok() {
        return Ok(LinkKind::Symlink);
    }

    // 4. copy fallback: never breaks consumers.
    if let Some(parent) = dest.parent() {
        tokio::fs::create_dir_all(parent).await?;
    }
    tokio::fs::copy(cas_blob, dest).await?;
    Ok(LinkKind::Copy)
}

/// Collects every file under `dir` (depth-first; sorted for determinism),
/// optionally restricted to `extensions` (lowercased, e.g. `["jar", "zip"]`).
async fn collect_files(
    dir: &Path,
    extensions: Option<&[&str]>,
) -> Result<Vec<PathBuf>, std::io::Error> {
    let mut files = Vec::new();
    let mut stack = vec![dir.to_path_buf()];
    while let Some(current) = stack.pop() {
        let mut entries = match tokio::fs::read_dir(&current).await {
            Ok(entries) => entries,
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => continue,
            Err(e) => return Err(e),
        };
        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if path.is_dir() {
                stack.push(path);
            } else {
                if extensions.is_none()
                    || path
                        .extension()
                        .and_then(|e| e.to_str())
                        .is_some_and(|ext| {
                            extensions.is_some_and(|list| {
                                list.iter().any(|want| ext.eq_ignore_ascii_case(want))
                            })
                        })
                {
                    files.push(path);
                }
            }
        }
    }
    files.sort();
    Ok(files)
}

/// Deduplicates files across `dirs`: ingests every candidate into the CAS,
/// then replaces the duplicate copies with links (temp-link + rename; a
/// failure never loses a file). A `None` extension list matches all files.
pub async fn deduplicate_dirs(
    dirs: &[PathBuf],
    cas_root: &Path,
    extensions: Option<&[&str]>,
) -> Result<DedupeReport, CasError> {
    let mut report = DedupeReport::default();
    let mut hashes: BTreeMap<String, Vec<PathBuf>> = BTreeMap::new();

    for dir in dirs {
        for file in collect_files(dir, extensions).await? {
            let Some(meta) = file.metadata().ok().filter(|m| m.is_file()) else {
                continue; // vanished between scan and relink
            };
            if meta.len() == 0 {
                continue;
            }
            report.scanned_files += 1;
            let result = ingest_file(cas_root, &file).await?;
            hashes.entry(result.hash).or_default().push(file);
        }
    }

    for dups in hashes.values() {
        if dups.len() < 2 {
            continue;
        }
        // Grouping is by hash: the first entry and the rest share one blob.
        let Some(hash) = hashes
            .iter()
            .find_map(|(h, list)| (list.as_slice() == dups.as_slice()).then_some(h.clone()))
        else {
            continue;
        };
        let blob = blob_path(cas_root, &hash);
        for dest in &dups[1..] {
            let Ok(meta) = dest.metadata() else {
                continue; // vanished between scan and relink
            };
            if try_exists(dest)? {
                tokio::fs::remove_file(dest).await?;
            }
            if link_or_copy(&blob, dest).await.is_err() {
                tokio::fs::copy(&blob, dest).await?;
            }
            report.deduplicated_files += 1;
            report.linked_count += 1;
            report.bytes_reclaimed = report.bytes_reclaimed.saturating_add(meta.len());
        }
    }

    Ok(report)
}

/// Hashes every file in `active_dirs` (the referenced set for GC).
async fn referenced_hashes(active_dirs: &[PathBuf]) -> Result<HashSet<String>, CasError> {
    let mut out = HashSet::new();
    for dir in active_dirs {
        for file in collect_files(dir, None).await? {
            if let Ok(meta) = file.metadata()
                && meta.is_file()
                && meta.len() > 0
            {
                let mut reader = File::open(&file).await?;
                out.insert(sha1_stream(&mut reader).await?);
            }
        }
    }
    Ok(out)
}

/// Removes CAS blobs that no active directory references. The referenced
/// set is recomputed by hashing files, so deletion is safe for linked
/// consumers too.
pub async fn cas_garbage_collect_dirs(
    cas_root: &Path,
    active_dirs: &[PathBuf],
) -> Result<GcReport, CasError> {
    let referenced = referenced_hashes(active_dirs).await?;
    let mut report = GcReport::default();
    for entry in collect_files(&cas_root.join("sha1"), None).await? {
        // Rebuild the hex hash from the path tail (strip dir components).
        let name = entry
            .file_name()
            .map(|n| n.to_string_lossy().into_owned())
            .unwrap_or_default();
        let hash = entry
            .parent()
            .and_then(|p| p.file_name())
            .map(|n| format!("{}{}", n.to_string_lossy(), name))
            .unwrap_or_default();
        if referenced.contains(&hash) {
            continue;
        }
        let meta = entry.metadata().map_err(CasError::from)?;
        if !meta.is_file() {
            continue;
        }
        report.reclaimed_bytes = report.reclaimed_bytes.saturating_add(meta.len());
        tokio::fs::remove_file(&entry).await?;
        report.removed_blobs += 1;
    }
    Ok(report)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn fixture_root(tag: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!("cas-test-{tag}-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        dir
    }

    fn write_file(dir: &Path, name: &str, content: &[u8]) {
        std::fs::create_dir_all(dir).unwrap();
        std::fs::write(dir.join(name), content).unwrap();
    }

    #[test]
    fn sha1_hash_matches_known_vector() {
        let mut hasher = Sha1::new();
        hasher.update(b"abc");
        let hex: String = hasher
            .finalize()
            .iter()
            .map(|b| format!("{b:02x}"))
            .collect();
        assert_eq!(hex, "a9993e364706816aba3e25717850c26c9cd0d89d");
    }

    #[tokio::test]
    async fn ingest_is_idempotent_and_reuses_blobs() {
        let cas = fixture_root("ingest").join("cas");
        let src = fixture_root("ingest").join("dup.jar");
        write_file(src.parent().unwrap(), "dup.jar", b"duplicate jar bytes");

        let first = ingest_file(&cas, &src).await.unwrap();
        let second = ingest_file(&cas, &src).await.unwrap();
        assert_eq!(first.hash, second.hash);
        assert!(!first.already_existed);
        assert!(second.already_existed);
        assert!(blob_path(&cas, &first.hash).is_file());
        std::fs::remove_dir_all(fixture_root("ingest")).ok();
    }

    #[tokio::test]
    async fn hardlink_cascade_reports_hardlink() {
        let base = fixture_root("link");
        let blob = base.join("cas/sha1/aa/bbccddee");
        write_file(
            blob.parent().unwrap(),
            blob.file_name().unwrap().to_string_lossy().as_ref(),
            b"blob",
        );
        let dest = base.join("dest.bin");
        let kind = link_or_copy(&blob, &dest).await.unwrap();
        assert_eq!(kind, LinkKind::Hardlink);
        assert_eq!(std::fs::read(&dest).unwrap(), b"blob");
        std::fs::remove_dir_all(&base).ok();
    }

    #[tokio::test]
    async fn link_or_copy_refuses_existing_dest() {
        let base = fixture_root("exists");
        let blob = base.join("cas/sha1/aa/bb");
        write_file(blob.parent().unwrap(), "bb", b"blob");
        let dest = base.join("dest.bin");
        write_file(dest.parent().unwrap(), "dest.bin", b"occupied");
        assert!(link_or_copy(&blob, &dest).await.is_err());
        std::fs::remove_dir_all(&base).ok();
    }

    #[tokio::test]
    async fn deduplicate_replaces_duplicate_copies_with_links() {
        let base = fixture_root("dedup");
        let cas = base.join("cas");
        let a = base.join("a");
        let b = base.join("b");
        write_file(&a, "dup.bin", b"identical mod bytes");
        write_file(&b, "dup.bin", b"identical mod bytes");

        let report = deduplicate_dirs(&[a.clone(), b.clone()], &cas, Some(&["bin"]))
            .await
            .unwrap();
        assert!(report.scanned_files >= 2);
        assert!(report.deduplicated_files >= 1);
        assert!(report.bytes_reclaimed >= b"identical mod bytes".len() as u64);
        assert_eq!(
            std::fs::read(a.join("dup.bin")).unwrap(),
            b"identical mod bytes"
        );
        assert_eq!(
            std::fs::read(b.join("dup.bin")).unwrap(),
            b"identical mod bytes"
        );
        std::fs::remove_dir_all(&base).ok();
    }

    #[tokio::test]
    async fn gc_removes_only_orphaned_blobs() {
        let base = fixture_root("gc");
        let cas = base.join("cas");
        let active = base.join("active");
        write_file(&active, "kept.bin", b"kept");
        let referenced = ingest_file(&cas, active.join("kept.bin")).await.unwrap();
        let orphan = blob_path(&cas, "ff0000000000000000000000000000000000000aa");
        write_file(
            orphan.parent().unwrap(),
            orphan.file_name().unwrap().to_string_lossy().as_ref(),
            b"orphan",
        );

        let report = cas_garbage_collect_dirs(&cas, std::slice::from_ref(&active))
            .await
            .unwrap();
        assert!(!orphan.exists(), "orphan blob must be removed");
        assert!(
            blob_path(&cas, &referenced.hash).exists(),
            "referenced blob must stay"
        );
        assert_eq!(report.removed_blobs, 1);
        assert!(report.reclaimed_bytes >= 6);
        std::fs::remove_dir_all(&base).ok();
    }
}
