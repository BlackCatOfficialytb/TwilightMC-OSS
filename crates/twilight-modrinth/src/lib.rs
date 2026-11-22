//! Modrinth `.mrpack` engine: strict index schema, client-environment
//! filtering, overrides extraction (pure-Rust ZIP + DEFLATE reader) and
//! staged SHA-1 verified mod downloads.

mod error;
mod mrpack;
#[cfg(test)]
mod test_server;

pub use error::ModrinthError;
pub use mrpack::{Env, EnvSupport, InstallSummary, ModpackFile, ModpackIndex, Mrpack};

/// Decompresses a gzip stream (RFC 1952) with the same pure-Rust DEFLATE
/// engine the `.mrpack` installer uses. Skips the 10-byte fixed header and all
/// optional FEXTRA/FNAME/FCOMMENT/FHCRC fields; the trailing CRC/ISIZE footer
/// is left for the inflate engine to stop before. Used for rotated Minecraft
/// logs (`.log.gz`) so no compression crate is needed.
pub fn gzip_inflate(data: &[u8]) -> Result<Vec<u8>, ModrinthError> {
    const MAGIC: [u8; 2] = [0x1f, 0x8b];
    if data.len() < 18 || data[..2] != MAGIC || data[2] != 8 {
        return Err(ModrinthError::Inflate("invalid gzip header".into()));
    }
    let flags = data[3];
    let mut cursor = 10usize;
    if flags & 0x04 != 0 {
        if cursor + 2 > data.len() {
            return Err(ModrinthError::Inflate("truncated gzip FEXTRA".into()));
        }
        let extra = u16::from_le_bytes([data[cursor], data[cursor + 1]]) as usize;
        cursor += 2;
        if cursor + extra > data.len() {
            return Err(ModrinthError::Inflate("truncated gzip FEXTRA".into()));
        }
        cursor += extra;
    }
    for (flag, label) in [(0x08, "FNAME"), (0x10, "FCOMMENT")] {
        if flags & flag != 0 {
            while cursor < data.len() && data[cursor] != 0 {
                cursor += 1;
            }
            if cursor >= data.len() {
                return Err(ModrinthError::Inflate(format!("truncated gzip {label}")));
            }
            cursor += 1;
        }
    }
    if flags & 0x02 != 0 {
        cursor += 2;
        if cursor > data.len() {
            return Err(ModrinthError::Inflate("truncated gzip FHCRC".into()));
        }
    }
    mrpack::zip::inflate(&data[cursor..])
}

/// Reads one named entry out of an in-memory archive, CRC-verified. The same
/// pure-Rust ZIP/DEFLATE reader the `.mrpack` installer uses, exposed for
/// other launcher-pack shapes (CleanroomMC ships its component files this way).
pub fn zip_entry(bytes: &[u8], name: &str) -> Result<Vec<u8>, ModrinthError> {
    let entries = mrpack::zip::central_directory_entries(bytes).map_err(ModrinthError::Zip)?;
    let entry = entries
        .iter()
        .find(|entry| entry.name == name)
        .ok_or_else(|| ModrinthError::Zip(format!("archive entry {name} not present")))?;
    mrpack::zip::entry_content(bytes, entry)
}

/// Names of every entry in an in-memory archive, in central-directory order.
/// Callers walk this to discover `patches/*.json` files in an MMC component
/// pack without knowing the exact set up front.
pub fn zip_entry_names(bytes: &[u8]) -> Result<Vec<String>, ModrinthError> {
    let entries = mrpack::zip::central_directory_entries(bytes).map_err(ModrinthError::Zip)?;
    Ok(entries.into_iter().map(|entry| entry.name).collect())
}

/// One extracted archive entry: relative path plus its decoded payload.
pub type ArchiveEntry = (String, Vec<u8>);

/// Decodes every entry of an in-memory ZIP (stored *and* deflated), CRC-verified.
///
/// This is the pure-Rust path the natives extractor falls back to when no
/// 7-Zip binary is installed: real Mojang natives jars are deflated inside, so
/// a stored-only reader cannot unpack them.
pub fn extract_archive(bytes: &[u8]) -> Result<Vec<ArchiveEntry>, ModrinthError> {
    let entries = mrpack::zip::central_directory_entries(bytes).map_err(ModrinthError::Zip)?;
    entries
        .iter()
        .map(|entry| {
            mrpack::zip::entry_content(bytes, entry).map(|content| (entry.name.clone(), content))
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    /// gzip wrapper around a DEFLATE *stored* block (BTYPE=00), so the fixture
    /// exercises header skipping without needing a compressed payload.
    fn gzip_with_stored_block(payload: &[u8], flags: u8, optional: &[u8]) -> Vec<u8> {
        let mut out = vec![0x1f, 0x8b, 8, flags, 0, 0, 0, 0, 0, 3];
        out.extend_from_slice(optional);
        out.push(0x01); // BFINAL=1, BTYPE=00
        let len = payload.len() as u16;
        out.extend_from_slice(&len.to_le_bytes());
        out.extend_from_slice(&(!len).to_le_bytes());
        out.extend_from_slice(payload);
        out.extend_from_slice(&[0; 8]); // CRC32 + ISIZE footer
        out
    }

    #[test]
    fn gzip_inflate_decodes_stored_block() {
        let payload = b"[12:00:00] [main/INFO]: hello rotated log\n";
        let gz = gzip_with_stored_block(payload, 0, &[]);
        assert_eq!(gzip_inflate(&gz).unwrap(), payload);
    }

    #[test]
    fn gzip_inflate_skips_optional_header_fields() {
        let payload = b"optional headers\n";
        // FEXTRA (length 2 + data), FNAME ("a.log\0"), FCOMMENT ("note\0")
        let mut optional = vec![2, 0, 0xaa, 0xbb];
        optional.extend_from_slice(b"a.log\0note\0");
        let gz = gzip_with_stored_block(payload, 0x04 | 0x08 | 0x10, &optional);
        assert_eq!(gzip_inflate(&gz).unwrap(), payload);
    }

    #[test]
    fn gzip_inflate_rejects_bad_header() {
        assert!(gzip_inflate(b"not gzip data at all!!").is_err());
    }
}
