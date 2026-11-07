//! The `.mrpack` subsystem — index schema, low-level zip reading and the
//! installer staging flow.

mod installer;
mod schema;
pub(crate) mod zip;

pub use installer::{InstallSummary, Mrpack};
pub use schema::{Env, EnvSupport, ModpackFile, ModpackIndex};
