//! Account subsystem: offline profiles (no forced Microsoft validation, like
//! Freesm's `text mixMinecraftAccount`), Microsoft token data structures, and
//! `authlib-injector` custom Yggdrasil server support.

mod account;
mod args;
mod error;
mod off_uuid;

pub use account::{Account, AccountStore, AccountType};
pub use args::{authlib_injector_jvm_args, offline_game_args};
pub use error::AuthError;
pub use off_uuid::generate_offline_uuid;
