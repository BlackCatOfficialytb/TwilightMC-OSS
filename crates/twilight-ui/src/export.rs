// Instance export: a plain `.zip` of the whole instance directory, written
// with a hand-rolled STORE-method writer (method 0 — no compression crate is
// authorized in this workspace, matching the `.mrpack` reader's constraint).
// Round-trip verified in tests against a local central-directory reader.

use std::io::Write;
use std::path::{Path, PathBuf};
use std::sync::OnceLock;

use tauri::AppHandle;

use crate::instances::{instances_root, validate_instance_id};

/// Depth guard for pathological directory cycles (symlinked trees).
const MAX_DEPTH: usize = 32;

/// Exports an instance directory into a user-chosen `.zip` path.
#[tauri::command]
pub async fn export_instance_zip(
    app: AppHandle,
    instance_id: String,
    dest_path: String,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let dir = root.join(&instance_id);
    if !dir.is_dir() {
        return Err(format!("unknown instance {instance_id}"));
    }
    let dest = normalize_dest(PathBuf::from(dest_path.trim()));
    if dest.as_os_str().is_empty() {
        return Err("destination path is required".into());
    }
    // zipping into the instance's own tree would grow the archive forever
    if dest.starts_with(&dir) {
        return Err("destination must be outside the instance directory".into());
    }
    if let Some(parent) = dest.parent()
        && !parent.is_dir()
    {
        return Err(format!(
            "destination directory missing: {}",
            parent.display()
        ));
    }
    let moved = dest.clone();
    tokio::task::spawn_blocking(move || write_zip(&dir, &moved))
        .await
        .map_err(|e| e.to_string())??;
    Ok(dest.display().to_string())
}

/// Ensures the destination carries a `.zip` suffix.
fn normalize_dest(dest: PathBuf) -> PathBuf {
    let is_zip = dest
        .extension()
        .and_then(|e| e.to_str())
        .is_some_and(|e| e.eq_ignore_ascii_case("zip"));
    if is_zip {
        dest
    } else {
        dest.with_extension("zip")
    }
}

/// One staged archive entry (name uses `/` separators; dirs end in `/`).
struct EntryMeta {
    name: String,
    size: u64,
    crc: u32,
    offset: u64,
}

fn write_zip(dir: &Path, dest: &Path) -> Result<(), String> {
    let mut paths = Vec::new();
    collect(dir, dir, 0, &mut paths)?;
    paths.sort_by(|a, b| a.1.cmp(&b.1));
    if paths.len() > u16::MAX as usize {
        return Err(format!(
            "instance has {} entries; archives over 65535 need zip64 (unsupported)",
            paths.len()
        ));
    }

    let file = std::fs::File::create(dest)
        .map_err(|e| format!("cannot create {}: {e}", dest.display()))?;
    let mut out = std::io::BufWriter::new(file);
    let mut written: u64 = 0;
    let mut entries = Vec::with_capacity(paths.len());
    let (dos_date, dos_time) = dos_from_unix(now_secs());

    for (abs, rel) in &paths {
        let is_dir = abs.is_dir();
        let (crc, content) = if is_dir {
            (0u32, Vec::new())
        } else {
            let data =
                std::fs::read(abs).map_err(|e| format!("cannot read {}: {e}", abs.display()))?;
            (crc32(&data), data)
        };
        let size = content.len() as u64;
        let name_bytes = rel.as_bytes();
        if name_bytes.len() > u16::MAX as usize {
            return Err(format!("entry path too long: {rel}"));
        }

        // local file header (stored, UTF-8 names flagged)
        let header = [
            0x50,
            0x4b,
            0x03,
            0x04, // signature
            20,
            0, // version needed: 2.0
            0x00,
            0x08, // flags: bit 11 = UTF-8 names
            0,
            0, // method: stored
            (dos_time & 0xff) as u8,
            (dos_time >> 8) as u8,
            (dos_date & 0xff) as u8,
            (dos_date >> 8) as u8,
            crc.to_le_bytes()[0],
            crc.to_le_bytes()[1],
            crc.to_le_bytes()[2],
            crc.to_le_bytes()[3],
            size.to_le_bytes()[0],
            size.to_le_bytes()[1],
            size.to_le_bytes()[2],
            size.to_le_bytes()[3],
            size.to_le_bytes()[0],
            size.to_le_bytes()[1],
            size.to_le_bytes()[2],
            size.to_le_bytes()[3],
            (name_bytes.len() & 0xff) as u8,
            (name_bytes.len() >> 8) as u8,
            0,
            0, // extra field length
        ];
        out.write_all(&header).map_err(io_err)?;
        out.write_all(name_bytes).map_err(io_err)?;
        if !is_dir {
            out.write_all(&content).map_err(io_err)?;
        }
        entries.push(EntryMeta {
            name: rel.clone(),
            size,
            crc,
            offset: written,
        });
        written += (header.len() + name_bytes.len() + content.len()) as u64;
    }

    // central directory
    let cd_offset = written;
    let mut cd = Vec::new();
    for entry in &entries {
        let name_bytes = entry.name.as_bytes();
        let header = [
            0x50,
            0x4b,
            0x01,
            0x02, // signature
            20,
            0, // version made by
            20,
            0, // version needed
            0x00,
            0x08, // flags
            0,
            0, // method: stored
            (dos_time & 0xff) as u8,
            (dos_time >> 8) as u8,
            (dos_date & 0xff) as u8,
            (dos_date >> 8) as u8,
            entry.crc.to_le_bytes()[0],
            entry.crc.to_le_bytes()[1],
            entry.crc.to_le_bytes()[2],
            entry.crc.to_le_bytes()[3],
            entry.size.to_le_bytes()[0],
            entry.size.to_le_bytes()[1],
            entry.size.to_le_bytes()[2],
            entry.size.to_le_bytes()[3],
            entry.size.to_le_bytes()[0],
            entry.size.to_le_bytes()[1],
            entry.size.to_le_bytes()[2],
            entry.size.to_le_bytes()[3],
            (name_bytes.len() & 0xff) as u8,
            (name_bytes.len() >> 8) as u8,
            0,
            0, // extra field length
            0,
            0, // comment length
            0,
            0, // disk number
            0,
            0, // internal attributes
            0,
            0,
            0,
            0, // external attributes
            entry.offset.to_le_bytes()[0],
            entry.offset.to_le_bytes()[1],
            entry.offset.to_le_bytes()[2],
            entry.offset.to_le_bytes()[3],
        ];
        cd.extend_from_slice(&header);
        cd.extend_from_slice(name_bytes);
    }
    if written + cd.len() as u64 > u32::MAX as u64 {
        return Err("instance archive exceeds the 4 GiB zip limit (zip64 unsupported)".into());
    }
    out.write_all(&cd).map_err(io_err)?;

    // end of central directory
    let cd_size = cd.len() as u32;
    let count = entries.len() as u16;
    let eocd = [
        0x50,
        0x4b,
        0x05,
        0x06, // signature
        0,
        0, // disk number
        0,
        0, // cd disk
        (count & 0xff) as u8,
        (count >> 8) as u8,
        (count & 0xff) as u8,
        (count >> 8) as u8,
        cd_size.to_le_bytes()[0],
        cd_size.to_le_bytes()[1],
        cd_size.to_le_bytes()[2],
        cd_size.to_le_bytes()[3],
        cd_offset.to_le_bytes()[0],
        cd_offset.to_le_bytes()[1],
        cd_offset.to_le_bytes()[2],
        cd_offset.to_le_bytes()[3],
        0,
        0, // comment length
    ];
    out.write_all(&eocd).map_err(io_err)?;
    out.flush().map_err(io_err)?;
    Ok(())
}

fn io_err(e: std::io::Error) -> String {
    format!("cannot write the archive: {e}")
}

/// Walks the tree gathering `(absolute path, archive-relative name)` pairs;
/// directories keep a trailing slash so empty dirs survive round-trips.
fn collect(
    base: &Path,
    dir: &Path,
    depth: usize,
    out: &mut Vec<(PathBuf, String)>,
) -> Result<(), String> {
    if depth > MAX_DEPTH {
        return Err("instance directory tree is nested too deeply".into());
    }
    let entries =
        std::fs::read_dir(dir).map_err(|e| format!("cannot read {}: {e}", dir.display()))?;
    for entry in entries {
        let entry = entry.map_err(|e| e.to_string())?;
        let path = entry.path();
        let rel = path
            .strip_prefix(base)
            .map_err(|e| e.to_string())?
            .to_string_lossy()
            .replace('\\', "/");
        if path.is_dir() {
            out.push((path.clone(), format!("{rel}/")));
            collect(base, &path, depth + 1, out)?;
        } else if path.is_file() {
            out.push((path, rel));
        }
    }
    Ok(())
}

/// CRC-32 (IEEE, reflected) over `data`; "123456789" → 0xCBF4392F.
fn crc32(data: &[u8]) -> u32 {
    static TABLE: OnceLock<[u32; 256]> = OnceLock::new();
    let table = TABLE.get_or_init(|| {
        let mut table = [0u32; 256];
        for (i, slot) in table.iter_mut().enumerate() {
            let mut c = i as u32;
            for _ in 0..8 {
                c = if c & 1 != 0 {
                    0xEDB8_8320 ^ (c >> 1)
                } else {
                    c >> 1
                };
            }
            *slot = c;
        }
        table
    });
    let mut crc = 0xFFFF_FFFFu32;
    for byte in data {
        crc = table[((crc ^ *byte as u32) & 0xFF) as usize] ^ (crc >> 8);
    }
    crc ^ 0xFFFF_FFFF
}

fn now_secs() -> i64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs() as i64
}

/// MS-DOS packed date/time for a unix timestamp (clamped to the 1980–2107
/// expressible range, 2-second time resolution).
fn dos_from_unix(secs: i64) -> (u16, u16) {
    let days = secs.div_euclid(86_400);
    let rem = secs.rem_euclid(86_400);
    let (year, month, day) = civil_from_days(days);
    let year = year.clamp(1980, 2107) as u16;
    let date = ((year - 1980) << 9) | ((month as u16) << 5) | day as u16;
    let time = (((rem / 3_600) as u16) << 11)
        | (((rem % 3_600) / 60) as u16) << 5
        | ((rem % 60) / 2) as u16;
    (date, time)
}

/// Howard Hinnant's `civil_from_days` (Gregorian, calendar-neutral).
fn civil_from_days(days: i64) -> (i64, u32, u32) {
    let z = days + 719_468;
    let era = z.div_euclid(146_097);
    let doe = z - era * 146_097; // [0, 146096]
    let yoe = (doe - doe / 1_460 + doe / 36_524 - doe / 146_096) / 365; // [0, 399]
    let y = yoe + era * 400;
    let doy = doe - (365 * yoe + yoe / 4 - yoe / 100); // [0, 365]
    let mp = (5 * doy + 2) / 153; // [0, 11]
    let d = (doy - (153 * mp + 2) / 5 + 1) as u32; // [1, 31]
    let m = if mp < 10 { mp + 3 } else { mp - 9 } as u32; // [1, 12]
    (if m <= 2 { y + 1 } else { y }, m, d)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn temp_dir(tag: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "twi-export-{tag}-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[test]
    fn crc32_matches_the_known_vector() {
        // CRC-32/ISO-HDLC catalogue check value
        assert_eq!(crc32(b"123456789"), 0xCBF4_3926);
        assert_eq!(crc32(b""), 0);
    }

    #[test]
    fn dos_timestamps_pack_the_civil_date() {
        // unix 0 clamps into the 1980 floor
        assert_eq!(dos_from_unix(0), ((1 << 5) | 1, 0));

        // 2026-01-02 03:04:05
        let days = days_from_civil(2026, 1, 2);
        let secs = days * 86_400 + 3 * 3_600 + 4 * 60 + 5;
        let (date, time) = dos_from_unix(secs);
        assert_eq!(date, ((2026 - 1980) << 9) | (1 << 5) | 2);
        assert_eq!(time, (3 << 11) | (4 << 5) | 2, "seconds halve to 2s units");
    }

    /// days_from_civil (Hinnant) — the test-side counterpart of the writer.
    fn days_from_civil(year: i64, month: i64, day: i64) -> i64 {
        let y = year - (month <= 2) as i64;
        let era = y.div_euclid(400);
        let yoe = y - era * 400;
        let doy = (153 * (if month > 2 { month - 3 } else { month + 9 }) + 2) / 5 + day - 1;
        let doe = yoe * 365 + yoe / 4 - yoe / 100 + doy;
        era * 146_097 + doe - 719_468
    }

    /// Minimal central-directory reader to verify the writer's output.
    fn read_back(bytes: &[u8]) -> Vec<(String, usize, u32)> {
        let eocd = bytes
            .windows(4)
            .rposition(|w| w == b"PK\x05\x06")
            .expect("EOCD present");
        let read_u16 = |off: usize| u16::from_le_bytes([bytes[off], bytes[off + 1]]);
        let read_u32 = |off: usize| {
            u32::from_le_bytes([bytes[off], bytes[off + 1], bytes[off + 2], bytes[off + 3]])
        };
        let count = read_u16(eocd + 10) as usize;
        let mut cursor = read_u32(eocd + 16) as usize;
        let mut entries = Vec::new();
        for _ in 0..count {
            assert_eq!(&bytes[cursor..cursor + 4], b"PK\x01\x02");
            let name_len = read_u16(cursor + 28) as usize;
            let extra_len = read_u16(cursor + 30) as usize;
            let comment_len = read_u16(cursor + 32) as usize;
            let crc = read_u32(cursor + 16);
            let local_offset = read_u32(cursor + 42) as usize;
            let name =
                String::from_utf8_lossy(&bytes[cursor + 46..cursor + 46 + name_len]).into_owned();
            // walk the local header for the payload
            let l_name_len = read_u16(local_offset + 26) as usize;
            let l_extra_len = read_u16(local_offset + 28) as usize;
            let data_at = local_offset + 30 + l_name_len + l_extra_len;
            let size = read_u32(cursor + 20) as usize;
            let payload = &bytes[data_at..data_at + size];
            assert_eq!(crc32(payload), crc, "stored crc of {name} must verify");
            entries.push((name, size, crc));
            cursor += 46 + name_len + extra_len + comment_len;
        }
        entries
    }

    #[test]
    fn exported_archive_round_trips() {
        let base = temp_dir("roundtrip");
        let instance = base.join("demo");
        let nested = instance.join("minecraft/mods");
        std::fs::create_dir_all(&nested).unwrap();
        let empty = instance.join("minecraft/empty-dir");
        std::fs::create_dir_all(&empty).unwrap();
        std::fs::write(instance.join("instance.json"), b"{\"version\":\"1.21.4\"}").unwrap();
        std::fs::write(nested.join("sodium.jar"), b"jar-bytes-here").unwrap();
        std::fs::write(instance.join("unicode-ünï.txt"), b"unicode name").unwrap();

        let dest = base.join("out.zip");
        write_zip(&instance, &dest).unwrap();
        let bytes = std::fs::read(&dest).unwrap();

        let entries = read_back(&bytes);
        let names: Vec<&str> = entries.iter().map(|(n, _, _)| n.as_str()).collect();
        assert_eq!(
            names,
            vec![
                "instance.json",
                "minecraft/",
                "minecraft/empty-dir/",
                "minecraft/mods/",
                "minecraft/mods/sodium.jar",
                "unicode-ünï.txt",
            ],
            "deterministic order, dir entries, unicode name"
        );
        assert_eq!(entries[0].1, b"{\"version\":\"1.21.4\"}".len());
        assert_eq!(entries[4].1, b"jar-bytes-here".len());
        // dir entries are zero-length
        assert_eq!(entries[1].1, 0);
    }

    #[test]
    fn destination_paths_get_normalized() {
        assert_eq!(
            normalize_dest(PathBuf::from("C:\\out\\pack")),
            PathBuf::from("C:\\out\\pack.zip")
        );
        assert_eq!(
            normalize_dest(PathBuf::from("pack.ZIP")),
            PathBuf::from("pack.ZIP"),
            "case-insensitive suffix kept"
        );
    }
}
