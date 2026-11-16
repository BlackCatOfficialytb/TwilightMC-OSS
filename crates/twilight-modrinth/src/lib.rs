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
