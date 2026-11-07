//! Minimal ZIP reader for `.mrpack` archives: end-of-central-directory +
//! central directory parsing, stored and deflated entry payloads with CRC-32
//! verification, path-safety guards — and a pure-Rust DEFLATE (RFC 1951)
//! inflate engine because no compression crate is authorized.

use crate::error::ModrinthError;

pub(crate) const METHOD_STORED: u16 = 0;
pub(crate) const METHOD_DEFLATE: u16 = 8;

/// One central-directory entry of the archive.
pub(crate) struct ZipEntry {
    pub name: String,
    pub method: u16,
    pub crc: u32,
    pub compressed_size: usize,
    pub local_offset: usize,
}

/// Parses the central directory via the end-of-central-directory record.
pub(crate) fn central_directory_entries(bytes: &[u8]) -> Result<Vec<ZipEntry>, String> {
    let eocd_pos = find_last_signature(bytes, b"PK\x05\x06")
        .ok_or("no end-of-central-directory record found")?;
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
        if cursor + 46 > bytes.len() || &bytes[cursor..cursor + 4] != b"PK\x01\x02" {
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

/// Reads the payload of an entry by walking its local file header, then
/// decodes it according to the compression method and verifies the CRC.
pub(crate) fn entry_content(bytes: &[u8], entry: &ZipEntry) -> Result<Vec<u8>, ModrinthError> {
    let raw = local_entry_bytes(bytes, entry).map_err(ModrinthError::Zip)?;
    let content = match entry.method {
        METHOD_STORED => raw,
        METHOD_DEFLATE => inflate(&raw)?,
        other => {
            return Err(ModrinthError::Zip(format!(
                "unsupported compression method {other} for entry {}",
                entry.name
            )));
        }
    };
    let computed = crc32_ieee(&content);
    if computed != entry.crc {
        return Err(ModrinthError::CrcMismatch {
            entry: entry.name.clone(),
            expected: entry.crc,
            computed,
        });
    }
    Ok(content)
}

/// Rejects zip-slip targets: empty strings, backslashes, absolute roots,
/// Windows drive letters and `..` segments.
pub(crate) fn safe_relative_path(raw: &str) -> Result<(), ModrinthError> {
    let report = || ModrinthError::UnsafePath {
        path: raw.to_owned(),
    };
    if raw.is_empty() || raw.contains(['\\', '\0', ':']) {
        return Err(report());
    }
    if raw.starts_with('/') {
        return Err(report());
    }
    // Windows drive letters and NTFS alternate data streams are unsafe anywhere
    if raw.split('/').any(|segment| segment == "..") {
        return Err(report());
    }
    Ok(())
}

/// IEEE CRC-32 (reflected, polynomial 0xEDB88320) against the central
/// directory checksums.
pub(crate) fn crc32_ieee(data: &[u8]) -> u32 {
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

fn local_entry_bytes(bytes: &[u8], entry: &ZipEntry) -> Result<Vec<u8>, String> {
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

/// Locates the last occurrence of a signature, scanning backwards.
fn find_last_signature(bytes: &[u8], signature: &[u8]) -> Option<usize> {
    if signature.len() > bytes.len() {
        return None;
    }
    (0..=bytes.len() - signature.len())
        .rev()
        .find(|&i| &bytes[i..i + signature.len()] == signature)
}

// ---------------------------------------------------------------------------
// DEFLATE (RFC 1951) inflate engine
// ---------------------------------------------------------------------------

const EOF: &str = "unexpected end of deflate data";

/// LSB-first bit reader with a `u64` window and refill-ahead.
struct BitReader<'a> {
    data: &'a [u8],
    /// First byte not yet read into the bit window.
    pos: usize,
    buffer: u64,
    cnt: u32,
}

impl<'a> BitReader<'a> {
    fn new(data: &'a [u8]) -> Self {
        Self {
            data,
            pos: 0,
            buffer: 0,
            cnt: 0,
        }
    }

    /// Reads `n` bits LSB-first (`n <= 32`).
    fn bits(&mut self, n: u32) -> Option<u32> {
        while self.cnt < n {
            let byte = *self.data.get(self.pos)?;
            self.pos += 1;
            self.buffer |= (byte as u64) << self.cnt;
            self.cnt += 8;
        }
        let out = (self.buffer & ((1u64 << n) - 1)) as u32;
        self.buffer >>= n;
        self.cnt -= n;
        Some(out)
    }
}

/// Decoding policy for `Huffman::build`.
enum TreePolicy {
    /// Complete trees only (code-length tree).
    Complete,
    /// Legal incomplete forms tolerated: unused tree or one length-1 symbol
    /// (dynamic literal/length + distance trees).
    TolerateSkew,
    /// No completeness checks (literal/length + built-in fixed tables).
    Unchecked,
}

/// Canonical Huffman decoder (puff-style counts/symbols tables).
struct Huffman {
    counts: [u16; 16],
    symbols: Vec<u16>,
}

impl Huffman {
    /// Builds a canonical decoder from per-symbol code lengths.
    fn build(lengths: &[u8], policy: TreePolicy) -> Result<Self, String> {
        let mut counts = [0u16; 16];
        let mut used = 0usize;
        for &len in lengths {
            if len > 15 {
                return Err("huffman code length out of range".into());
            }
            counts[len as usize] += 1;
            if len != 0 {
                used += 1;
            }
        }
        // oversubscription is never legal
        let mut left: i32 = 1;
        for &count in counts.iter().skip(1) {
            left <<= 1;
            left -= i32::from(count);
            if left < 0 {
                return Err("oversubscribed huffman code".into());
            }
        }
        match policy {
            TreePolicy::Complete if left != 0 => {
                return Err("incomplete code-length tree".into());
            }
            TreePolicy::Unchecked => {}
            TreePolicy::Complete => {}
            // only the degenerate forms may stay incomplete: every symbol of
            // length 0, or a single length-1 symbol (otherwise this is a stream
            // the encoder did not build canonically)
            TreePolicy::TolerateSkew
                if left != 0 && lengths.len() != counts[0] as usize + counts[1] as usize =>
            {
                return Err("incomplete huffman code".into());
            }
            TreePolicy::TolerateSkew => {}
        }

        let mut offsets = [0usize; 16];
        for len in 1..15 {
            offsets[len + 1] = offsets[len] + counts[len] as usize;
        }
        let mut symbols = vec![0u16; used];
        for (symbol, &len) in lengths.iter().enumerate() {
            if len != 0 {
                symbols[offsets[len as usize]] = symbol as u16;
                offsets[len as usize] += 1;
            }
        }
        Ok(Self { counts, symbols })
    }

    /// Decodes one symbol, bit by bit, per puff's canonical walkthrough.
    fn decode(&self, reader: &mut BitReader<'_>) -> Result<u16, String> {
        let mut code: i32 = 0;
        let mut first: i32 = 0;
        let mut index: usize = 0;
        for len in 1..16 {
            let bit = reader.bits(1).ok_or(EOF)?;
            code = (code << 1) | bit as i32;
            let count = self.counts[len] as i32;
            if code - count < first {
                let slot = index + (code - first) as usize;
                return self
                    .symbols
                    .get(slot)
                    .copied()
                    .ok_or_else(|| "invalid huffman code".to_owned());
            }
            index += count as usize;
            first = (first + count) << 1;
        }
        Err("invalid huffman code".into())
    }
}

/// Built-in fixed literal/length table (RFC 1951 §3.2.6).
fn fixed_lit_tree() -> Huffman {
    let mut lengths = [0u8; 288];
    for (symbol, len) in lengths.iter_mut().enumerate() {
        *len = match symbol {
            144..=255 => 9,
            256..=279 => 7,
            _ => 8,
        };
    }
    Huffman::build(&lengths, TreePolicy::Unchecked).expect("RFC fixed lit/len table")
}

/// Built-in fixed distance table (30 symbols of 5 bits — legally incomplete).
fn fixed_dist_tree() -> Huffman {
    Huffman::build(&[5u8; 30], TreePolicy::Unchecked).expect("RFC fixed distance table")
}

/// One inflate call: all blocks, until the final-flagged block ends.
pub(crate) fn inflate(data: &[u8]) -> Result<Vec<u8>, ModrinthError> {
    inflate_raw(data).map_err(ModrinthError::Inflate)
}

fn inflate_raw(data: &[u8]) -> Result<Vec<u8>, String> {
    let mut reader = BitReader::new(data);
    let mut out: Vec<u8> = Vec::new();
    loop {
        let bfinal = reader.bits(1).ok_or(EOF)?;
        match reader.bits(2).ok_or(EOF)? {
            0 => stored_block(&mut reader, &mut out)?,
            1 => {
                let lit = fixed_lit_tree();
                let dist = fixed_dist_tree();
                codes(&mut reader, &mut out, &lit, &dist)?;
            }
            2 => {
                let (lit, dist) = dynamic_tables(&mut reader)?;
                codes(&mut reader, &mut out, &lit, &dist)?;
            }
            _ => return Err("invalid deflate block type 11".into()),
        }
        if bfinal == 1 {
            break;
        }
    }
    Ok(out)
}

/// Stored block: byte-aligned, LEN + !LEN, then the raw bytes.
fn stored_block(reader: &mut BitReader<'_>, out: &mut Vec<u8>) -> Result<(), String> {
    // discard the remaining bits of the current byte
    let consumed = reader.pos * 8 - reader.cnt as usize;
    let pad = (8 - consumed % 8) % 8;
    if pad > 0 {
        reader.bits(pad as u32).ok_or(EOF)?;
    }
    let len = reader.bits(16).ok_or(EOF)? as u16;
    let nlen = reader.bits(16).ok_or(EOF)? as u16;
    if len != !nlen {
        return Err("stored-block length complement mismatch".into());
    }
    let len = len as usize;
    // after byte alignment `cnt` is a multiple of 8: the raw bytes run from
    // the first byte not yet consumed by the bit window
    let raw_start = reader.pos - reader.cnt as usize / 8;
    if raw_start + len > reader.data.len() {
        return Err("stored block out of bounds".into());
    }
    out.extend_from_slice(&reader.data[raw_start..raw_start + len]);
    // the buffered bits are stale now — rebase the window
    reader.pos = raw_start + len;
    reader.cnt = 0;
    reader.buffer = 0;
    Ok(())
}

/// Literal/length + distance decoding loop with LZ77 back-references.
fn codes(
    reader: &mut BitReader<'_>,
    out: &mut Vec<u8>,
    lit: &Huffman,
    dist: &Huffman,
) -> Result<(), String> {
    loop {
        let symbol = lit.decode(reader)?;
        match symbol {
            0..=255 => out.push(symbol as u8),
            256 => return Ok(()),
            257..=285 => {
                let index = symbol as usize - 257;
                let len = LBASE[index] as usize + extra(reader, LEXT[index])?;
                let dsym = dist.decode(reader)? as usize;
                if dsym > 29 {
                    return Err(format!("invalid distance symbol {dsym}"));
                }
                let distance = DBASE[dsym] as usize + extra(reader, DEXT[dsym])?;
                if distance > out.len() {
                    return Err("deflate distance reaches before stream start".into());
                }
                // overlapping copies repeat the last `distance` bytes
                for _ in 0..len {
                    out.push(out[out.len() - distance]);
                }
            }
            other => return Err(format!("invalid literal/length symbol {other}")),
        }
    }
}

/// Extra-bits read helper (`0` extra bits reads nothing), returned as usize.
fn extra(reader: &mut BitReader<'_>, bits: u8) -> Result<usize, String> {
    reader
        .bits(u32::from(bits))
        .ok_or_else(|| EOF.to_owned())
        .map(|value| value as usize)
}

/// HLIT/HDIST/HCLEN dynamic-table construction.
fn dynamic_tables(reader: &mut BitReader<'_>) -> Result<(Huffman, Huffman), String> {
    const ORDER: [usize; 19] = [
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ];
    let hlit = reader.bits(5).ok_or(EOF)? as usize + 257;
    let hdist = reader.bits(5).ok_or(EOF)? as usize + 1;
    let hclen = reader.bits(4).ok_or(EOF)? as usize + 4;
    if hlit > 286 || hdist > 30 {
        return Err("dynamic table size out of range".into());
    }
    let mut lengths = [0u8; 19];
    for slot in ORDER.iter().take(hclen) {
        lengths[*slot] = reader.bits(3).ok_or(EOF)? as u8;
    }
    let head = Huffman::build(&lengths, TreePolicy::Complete)?;

    let mut lens = vec![0u8; hlit + hdist];
    let mut written = 0usize;
    while written < lens.len() {
        let symbol = head.decode(reader)?;
        match symbol {
            0..=15 => {
                lens[written] = symbol as u8;
                written += 1;
            }
            16 => {
                if written == 0 {
                    return Err("repeat op with no previous code length".into());
                }
                let rep = 3 + reader.bits(2).ok_or(EOF)? as usize;
                if written + rep > lens.len() {
                    return Err("code length repeat out of bounds".into());
                }
                let last = lens[written - 1];
                for _ in 0..rep {
                    lens[written] = last;
                    written += 1;
                }
            }
            17 => {
                let rep = 3 + reader.bits(3).ok_or(EOF)? as usize;
                if written + rep > lens.len() {
                    return Err("code length repeat out of bounds".into());
                }
                written += rep; // zeros
            }
            18 => {
                let rep = 11 + reader.bits(7).ok_or(EOF)? as usize;
                if written + rep > lens.len() {
                    return Err("code length repeat out of bounds".into());
                }
                written += rep; // zeros
            }
            other => return Err(format!("invalid code length symbol {other}")),
        }
    }
    let lit = Huffman::build(&lens[..hlit], TreePolicy::TolerateSkew)?;
    let dist = Huffman::build(&lens[hlit..], TreePolicy::TolerateSkew)?;
    Ok((lit, dist))
}

/// RFC 1951 §3.2.5 length base lengths (symbols 257..=285).
const LBASE: [u16; 29] = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
    163, 195, 227, 258,
];
/// Length extra bits (symbols 257..=285).
const LEXT: [u8; 29] = [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
];
/// RFC 1951 §3.2.5 distance base lengths (symbols 0..=29).
const DBASE: [u16; 30] = [
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
    2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
];
/// Distance extra bits (symbols 0..=29).
const DEXT: [u8; 30] = [
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
    13,
];

#[cfg(test)]
mod tests {
    use super::*;

    fn decode_hex(hex: &str) -> Vec<u8> {
        (0..hex.len())
            .step_by(2)
            .map(|i| u8::from_str_radix(&hex[i..i + 2], 16).expect("valid fixture hex"))
            .collect()
    }

    fn hex(data: &[u8]) -> String {
        data.iter().fold(String::new(), |mut out, byte| {
            use std::fmt::Write as _;
            let _ = write!(out, "{byte:02X}");
            out
        })
    }

    const FIXED_PAYLOAD: &str = "TwilightMC inflate engine - twilight twilight twilight TwilightMC TwilightMC pack payload for hermetic test.";
    const FIXED_DEFLATE_HEX: &str = include_str!("../../fixtures/inflate_fixed.hex");

    /// Dynamic-Huffman fixture produced ahead of time by .NET DeflateStream
    /// (optimal level) over the payload `dynamic_payload()` reproduces.
    fn dynamic_payload() -> Vec<u8> {
        const LANGS: [&str; 13] = [
            "TwilightMC",
            "rust",
            "components",
            "twilight",
            "modpack",
            "inflate",
            "engine",
            "loader",
            "fabric",
            "quilt",
            "twilight-modrinth",
            "shadow",
            "/polish",
        ];
        let mut out = String::new();
        for line in 0..70u32 {
            let row = format!(
                "line {line:x}: {} {} {} over-a-way through the twilight engine with tail {line:x}.",
                LANGS[line as usize % LANGS.len()],
                LANGS[(line * 3) as usize % LANGS.len()],
                LANGS[(line * 7) as usize % LANGS.len()],
            );
            out.push_str(&row);
            out.push('\n');
        }
        out.into_bytes()
    }

    const DYNAMIC_DEFLATE_HEX: &str = include_str!("../../fixtures/inflate_dynamic.hex");

    #[test]
    fn inflates_the_fixed_huffman_fixture() {
        let stream = decode_hex(FIXED_DEFLATE_HEX);
        // first byte: BFINAL=1, BTYPE=01 (fixed Huffman)
        assert_eq!(stream[0] & 0b111, 0b011);
        let out = inflate(&stream).map_err(|e| e.to_string()).unwrap();
        assert_eq!(out, FIXED_PAYLOAD.as_bytes());
    }

    #[test]
    fn inflates_the_dynamic_huffman_fixture() {
        let stream = decode_hex(DYNAMIC_DEFLATE_HEX);
        // first byte: BFINAL=1, BTYPE=10 (dynamic Huffman)
        assert_eq!(stream[0] & 0b111, 0b101);
        let expected = dynamic_payload();
        assert_eq!(expected.len(), 6114);
        let out = inflate(&stream).map_err(|e| e.to_string()).unwrap();
        assert_eq!(out, expected);
    }

    #[test]
    fn inflates_hand_built_stored_blocks() {
        // BFINAL=1, BTYPE=00, realign pad, LEN=3, NLEN=!LEN, "abc"
        let mut stream = vec![0x01, 0x03, 0x00, 0xFC, 0xFF];
        stream.extend_from_slice(b"abc");
        let out = inflate(&stream).map_err(|e| e.to_string()).unwrap();
        assert_eq!(out, b"abc");
    }

    #[test]
    fn invalid_block_type_fails_loudly() {
        // 0x07 → BFINAL=1, BTYPE=11 (reserved)
        let err = inflate(&[0x07]).unwrap_err().to_string();
        assert_eq!(err, "deflate stream error: invalid deflate block type 11");
    }

    #[test]
    fn truncated_streams_fail_loudly() {
        // declares a final fixed block but ends immediately
        assert!(matches!(inflate(&[0x03]), Err(ModrinthError::Inflate(_))));
    }

    #[test]
    fn crc32_matches_ieee_reference_values() {
        assert_eq!(crc32_ieee(b"123456789"), 0xCBF4_3926);
        assert_eq!(crc32_ieee(b""), 0);
        assert_eq!(
            crc32_ieee(b"The quick brown fox jumps over the lazy dog"),
            0x414F_A339
        );
    }

    #[test]
    fn path_guards_reject_zip_slip_targets() {
        assert!(safe_relative_path("mods/alpha.jar").is_ok());
        assert!(safe_relative_path("config/opts.toml").is_ok());
        assert!(safe_relative_path("./pack.mcmeta").is_ok());

        for bad in [
            "",
            "..",
            "../evil.jar",
            "overrides/../evil.cfg",
            "/absolute.jar",
            r"back\slash.jar",
            "drive/C:/etc/passwd.jar",
            "C:/etc/passwd.jar",
            "a/../b/c.jar",
        ] {
            assert!(safe_relative_path(bad).is_err(), "{bad:?} must be unsafe");
        }
    }

    #[test]
    fn central_directory_walker_round_trips_stored_entries() {
        // hand-built stored zip (mirrors the natives-test builder)
        let body = b"stored-payload";
        let mut out = Vec::new();
        let mut central = Vec::new();
        let crc = crc32_ieee(body);
        out.extend_from_slice(b"PK\x03\x04");
        out.extend_from_slice(&20u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes()); // flags
        out.extend_from_slice(&METHOD_STORED.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes()); // mtime
        out.extend_from_slice(&0u16.to_le_bytes()); // mdate
        out.extend_from_slice(&crc.to_le_bytes());
        out.extend_from_slice(&(body.len() as u32).to_le_bytes());
        out.extend_from_slice(&(body.len() as u32).to_le_bytes());
        out.extend_from_slice(&5u16.to_le_bytes()); // name len
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(b"a.bin");
        out.extend_from_slice(body);

        central.extend_from_slice(b"PK\x01\x02");
        central.extend_from_slice(&20u16.to_le_bytes());
        central.extend_from_slice(&20u16.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes()); // flags
        central.extend_from_slice(&METHOD_STORED.to_le_bytes());
        central.extend_from_slice(&0u16.to_le_bytes()); // time, date
        central.extend_from_slice(&0u16.to_le_bytes());
        central.extend_from_slice(&crc.to_le_bytes());
        central.extend_from_slice(&(body.len() as u32).to_le_bytes());
        central.extend_from_slice(&(body.len() as u32).to_le_bytes());
        central.extend_from_slice(&5u16.to_le_bytes()); // name len
        central.extend_from_slice(&0u16.to_le_bytes()); // extra
        central.extend_from_slice(&0u16.to_le_bytes()); // comment
        central.extend_from_slice(&0u16.to_le_bytes()); // disk start
        central.extend_from_slice(&0u16.to_le_bytes()); // internal attrs
        central.extend_from_slice(&0u32.to_le_bytes()); // external attrs
        central.extend_from_slice(&0u32.to_le_bytes()); // local offset
        central.extend_from_slice(b"a.bin");

        let cd_offset = out.len() as u32;
        out.extend_from_slice(&central);
        let central_len = central.len() as u32;
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&1u16.to_le_bytes());
        out.extend_from_slice(&1u16.to_le_bytes());
        out.extend_from_slice(&central_len.to_le_bytes());
        out.extend_from_slice(&cd_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());

        let entries = central_directory_entries(&out).unwrap();
        assert_eq!(entries.len(), 1);
        assert_eq!(entries[0].name, "a.bin");
        assert_eq!(entries[0].method, METHOD_STORED);
        let content = entry_content(&out, &entries[0]).unwrap();
        assert_eq!(content, body);
        assert_eq!(hex(entries[0].name.as_bytes()), "612E62696E");
    }
}
