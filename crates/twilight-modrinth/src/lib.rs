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

/// Fonts inside a resource pack that Minecraft's FreeType renderer can parse.
/// `.ttf` files are detected anywhere (the vulnerable TrueType hinting path);
/// `.ttc`/`.otf` count only inside `assets/<namespace>/font/`.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct ResourcePackFontScan {
    pub contains_truetype_fonts: bool,
    /// Matching archive entry names, in central-directory order.
    pub font_entries: Vec<String>,
}

/// True when `name` is a TrueType/OpenType font entry that Minecraft would
/// hand to its font renderer. Entry names are ZIP paths, so matching is
/// case-insensitive and treats a stray backslash as a separator.
pub fn is_resource_pack_font_entry(name: &str) -> bool {
    let lower = name.replace('\\', "/").to_ascii_lowercase();
    if lower.ends_with(".ttf") {
        return true;
    }
    if !(lower.ends_with(".ttc") || lower.ends_with(".otf")) {
        return false;
    }
    // assets/<namespace>/font/... for the OpenType containers
    let mut parts = lower.split('/');
    parts.next() == Some("assets")
        && parts.next().is_some_and(|namespace| !namespace.is_empty())
        && parts.next() == Some("font")
}

/// Scans a resource-pack `.zip` for FreeType font entries using the same
/// pure-Rust central-directory reader as every other archive path.
/// `Minecraft2Shell` (CVE-2026-10701) is triggered by such fonts.
pub fn scan_resource_pack_fonts(bytes: &[u8]) -> Result<ResourcePackFontScan, ModrinthError> {
    let names = zip_entry_names(bytes)?;
    let font_entries: Vec<String> = names
        .into_iter()
        .filter(|name| is_resource_pack_font_entry(name))
        .collect();
    Ok(ResourcePackFontScan {
        contains_truetype_fonts: !font_entries.is_empty(),
        font_entries,
    })
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

    #[test]
    fn resource_pack_font_entries_match_like_minecraft() {
        assert!(is_resource_pack_font_entry(
            "assets/minecraft/font/custom.ttf"
        ));
        assert!(is_resource_pack_font_entry(
            "assets/example/font/nested/display.TTF"
        ));
        assert!(is_resource_pack_font_entry(
            r"assets\minecraft\font\backslash.ttf"
        ));
        assert!(is_resource_pack_font_entry(
            "assets/minecraft/font/collection.otf"
        ));
        assert!(is_resource_pack_font_entry(
            "assets/minecraft/font/collection.ttc"
        ));

        // clean texture-only entries never trigger the warning
        assert!(!is_resource_pack_font_entry("pack.mcmeta"));
        assert!(!is_resource_pack_font_entry(
            "assets/minecraft/textures/block/stone.png"
        ));
        // OpenType containers outside assets/<ns>/font/ are ignored
        assert!(!is_resource_pack_font_entry("assets/minecraft/otf/x.otf"));
        assert!(!is_resource_pack_font_entry("font/x.otf"));
    }

    /// Minimal stored-entry ZIP: just enough structure for the central
    /// directory reader, with zero-length payloads.
    fn zip_with_names(names: &[&str]) -> Vec<u8> {
        let mut out = Vec::new();
        let mut offsets = Vec::with_capacity(names.len());
        for name in names {
            offsets.push(out.len() as u32);
            out.extend_from_slice(b"PK\x03\x04");
            out.extend_from_slice(&20u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&(name.len() as u16).to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(name.as_bytes());
        }
        let cd_offset = out.len() as u32;
        for (name, offset) in names.iter().zip(offsets) {
            out.extend_from_slice(b"PK\x01\x02");
            out.extend_from_slice(&20u16.to_le_bytes());
            out.extend_from_slice(&20u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&(name.len() as u16).to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u32.to_le_bytes());
            out.extend_from_slice(&offset.to_le_bytes());
            out.extend_from_slice(name.as_bytes());
        }
        let cd_size = out.len() as u32 - cd_offset;
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&(names.len() as u16).to_le_bytes());
        out.extend_from_slice(&(names.len() as u16).to_le_bytes());
        out.extend_from_slice(&cd_size.to_le_bytes());
        out.extend_from_slice(&cd_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out
    }

    #[test]
    fn resource_pack_scan_reports_font_entries() {
        let zip = zip_with_names(&[
            "pack.mcmeta",
            "assets/minecraft/textures/block/stone.png",
            "assets/minecraft/font/custom.ttf",
            "assets/minecraft/font/collection.otf",
            "assets/demo/font/legacy.TTC",
        ]);
        let scan = scan_resource_pack_fonts(&zip).unwrap();
        assert!(scan.contains_truetype_fonts);
        assert_eq!(
            scan.font_entries,
            [
                "assets/minecraft/font/custom.ttf",
                "assets/minecraft/font/collection.otf",
                "assets/demo/font/legacy.TTC",
            ]
        );
    }

    #[test]
    fn resource_pack_scan_accepts_clean_and_broken_archives() {
        let clean = zip_with_names(&[
            "pack.mcmeta",
            "assets/minecraft/textures/block/stone.png",
            "assets/minecraft/lang/en_us.json",
        ]);
        let scan = scan_resource_pack_fonts(&clean).unwrap();
        assert!(!scan.contains_truetype_fonts);
        assert!(scan.font_entries.is_empty());

        assert!(scan_resource_pack_fonts(b"definitely not a zip archive").is_err());
    }
}
