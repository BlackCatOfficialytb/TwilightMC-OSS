//! Modrinth `.mrpack` engine: strict index schema, client-environment
//! filtering, overrides extraction (pure-Rust ZIP + DEFLATE reader) and
//! staged SHA-1 verified mod downloads.

mod error;
mod mrpack;
#[cfg(test)]
mod test_server;

pub use error::ModrinthError;
pub use mrpack::{Env, EnvSupport, InstallSummary, ModpackFile, ModpackIndex, Mrpack};
