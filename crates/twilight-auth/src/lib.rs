//! Account subsystem: offline profiles (no forced Microsoft validation, like
//! Freesm's `text mixMinecraftAccount`), Microsoft token data structures, and
//! `authlib-injector` custom Yggdrasil server support.

mod account;
mod args;
mod authlib;
mod elyby;
mod error;
mod microsoft;
mod off_uuid;
#[cfg(test)]
mod test_http;

pub use account::{Account, AccountStore, AccountType, ELYBY_AUTH_SERVER};
pub use args::{authlib_injector_jvm_args, offline_game_args};
pub use authlib::{
    AUTHLIB_JAR_NAME, AUTHLIB_METADATA_URL, AuthlibArtifact, ensure_authlib_injector,
    ensure_authlib_injector_with, fetch_latest_artifact, jar_path,
};
pub use elyby::{
    Agent, AuthenticateRequest, DEFAULT_ELYBY_CLIENT_ID, ELYBY_ACCOUNT_BASE, ELYBY_API_BASE,
    ELYBY_OAUTH2_SCOPE, ELYBY_SKINSYSTEM_BASE, ElybyAuth, ElybyDeviceCode, ElybyDevicePoll,
    ElybySession, ElybyTextures, ElybyToken, PkcePair, SelectedProfile, extract_authorization_code,
    parse_profile_uuid, pkce_pair, skin_png_url, spawn_loopback_redirect,
};
pub use error::AuthError;
pub use microsoft::{
    DEFAULT_CLIENT_ID, DeviceCode, DeviceFlowState, McToken, MicrosoftAuth, MicrosoftSession,
    MinecraftProfile, MsaToken, ProfileTexture, ProfileTextureMetadata, XboxToken, xerr_message,
};
pub use off_uuid::generate_offline_uuid;
