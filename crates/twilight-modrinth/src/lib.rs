//! Modrinth `.mrpack` engine: strict index schema, client-environment
//! filtering, overrides extraction (pure-Rust ZIP + DEFLATE reader) and
//! staged SHA-1 verified mod downloads.

mod error;
mod mrpack;
#[cfg(test)]
mod test_server;

pub use error::ModrinthError;
pub use mrpack::{Env, EnvSupport, InstallSummary, ModpackFile, ModpackIndex, Mrpack};

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
