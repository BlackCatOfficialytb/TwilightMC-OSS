// IPC bridge to the twilight-auth account store, persisted under app_data_dir:
// `accounts.json` holds profiles, `settings.json` holds the active-account pointer.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};
use twilight_auth::{
    Account, AccountStore, DEFAULT_CLIENT_ID, DEFAULT_ELYBY_CLIENT_ID, DeviceCode, ElybyDeviceCode,
    ElybyDevicePoll, ElybyToken, MicrosoftAuth, generate_offline_uuid,
};

#[derive(Serialize, Deserialize)]
pub(crate) struct Settings {
    #[serde(default)]
    pub(crate) active_account: Option<String>,
    #[serde(default)]
    pub(crate) shared_dir: Option<String>,
    /// Custom instances root override (e.g. `D:\ins\instances`); empty =
    /// `%APPDATA%\PrismLauncher\instances` on Windows when present, else the
    /// shared library's `instances` dir.
    #[serde(default)]
    pub(crate) instances_dir: Option<String>,
    /// Explicit java executable; empty = auto-discovery.
    #[serde(default)]
    pub(crate) java_path: Option<String>,
    /// Custom Java executables the user added through the picker (Prism-style
    /// "Browse" list). Probed on demand, never auto-scanned.
    #[serde(default)]
    pub(crate) custom_java_paths: Vec<String>,
    /// The java runtime explicitly applied to launches. `None` = follow
    /// `java_path` / auto-discovery.
    #[serde(default)]
    pub(crate) selected_java_path: Option<String>,
    /// `-Xms` in MiB; 0 = none.
    #[serde(default)]
    pub(crate) min_memory_mb: u32,
    /// `-Xmx` in MiB; 0 = none.
    #[serde(default)]
    pub(crate) max_memory_mb: u32,
    /// `light` / `dark`; falls back to the OS preference.
    #[serde(default)]
    pub(crate) theme: Option<String>,
    /// UI language: `en-US` / `vi-VN`; `None` = detect on startup.
    #[serde(default)]
    pub(crate) locale: Option<String>,
    /// Update stream: `bolide` / `star` / `stable` / `snapshot`.
    #[serde(default = "default_update_channel")]
    pub(crate) update_channel: Option<String>,
    /// Overridable Microsoft OAuth application id (device flow); empty =
    /// the default public client id.
    #[serde(default)]
    pub(crate) msa_client_id: Option<String>,
    /// Overridable Ely.by OAuth application id (browser/device flows); empty
    /// = TwilightMC's registered public client id.
    #[serde(default)]
    pub(crate) elyby_client_id: Option<String>,
    /// UI mode: `launcher` (full library) or `client` (minimal dashboard).
    #[serde(default)]
    pub(crate) mode: Option<String>,
    /// Folder overrides from the Folders settings page; `None`/empty =
    /// the default subdirectory under the app data dir
    /// (`io.github.blackcatofficialytb.twilightmc`).
    #[serde(default)]
    pub(crate) versions_dir: Option<String>,
    #[serde(default)]
    pub(crate) mods_dir: Option<String>,
    #[serde(default)]
    pub(crate) icons_dir: Option<String>,
    #[serde(default)]
    pub(crate) java_dir: Option<String>,
    #[serde(default)]
    pub(crate) skins_dir: Option<String>,
    /// Accessibility: screen-reader & audio navigation profile (Blind Mode).
    #[serde(default)]
    pub(crate) blind_mode: bool,
    /// Accessibility: closed-captions & visual sound-cues profile (Deaf Mode).
    #[serde(default)]
    pub(crate) deaf_mode: bool,
    /// Overrides the staging/temp root: staging becomes
    /// `<downloads_dir>\twilightmc_staging` instead of `%TEMP%\…`.
    #[serde(default)]
    pub(crate) downloads_dir: Option<String>,
    /// Custom servers root for the server manager (`<app_data>/servers` by
    /// default).
    #[serde(default)]
    pub(crate) servers_dir: Option<String>,
    /// Optional CurseForge API key for modpack imports; empty = the zero-key
    /// FOSS flow (Modrinth core mods + manual zip import, no key needed).
    #[serde(default)]
    pub(crate) curseforge_api_key: Option<String>,
    /// Whether CurseForge integration is enabled; defaults to **true** so
    /// existing settings files keep the previous behavior.
    #[serde(default = "default_true")]
    pub(crate) curseforge_enabled: bool,
    /// Opt-in anonymized crash reporter. Strictly off: nothing is ever sent
    /// silently, the user must review and click Send in the preview dialog.
    #[serde(default)]
    pub(crate) crash_reporter_enabled: bool,
    /// Optional endpoint for anonymized reports; blank = copy/GitHub only.
    #[serde(default)]
    pub(crate) crash_endpoint: Option<String>,
    /// Whether a non-zero game exit opens the review dialog.
    #[serde(default = "default_true")]
    pub(crate) crash_prompt_enabled: bool,
    /// Horizon (native Rust engine) binary; empty = Horizon instances refuse
    /// to launch with a "set it in Settings" message. Never bundled.
    #[serde(default)]
    pub(crate) horizon_path: Option<String>,
    /// Garbage collector preset name (`Default`, `Auto`, ...). `None` = Default.
    #[serde(default)]
    pub(crate) gc_preset: Option<String>,
    /// Toggleable GC flags persisted when the preset is `Custom` (and applied
    /// on top of a preset when present).
    #[serde(default)]
    pub(crate) custom_gc_flags: Vec<String>,
    /// Raw extra JVM arguments (space-separated) appended after the resolved
    /// GC flags.
    #[serde(default)]
    pub(crate) extra_jvm_args: Option<String>,
    /// Zero-copy linking: installed mods are hardlinks into the global CAS
    /// (with symlink/junction/copy fallback) instead of duplicated jars.
    /// Defaults to **true** for both existing and new settings files.
    #[serde(default = "default_true")]
    pub(crate) use_cas_links: bool,
    /// App Developer Mode: unlocks diagnostics and debugging tools.
    #[serde(default)]
    pub(crate) dev_mode: bool,
    /// Horizon developer install: sets
    /// `HORIZON_LAUNCHER_DEVELOPER_OFFLINE=1` (Dev Mode only).
    #[serde(default)]
    pub(crate) horizon_dev_offline: bool,
    /// Horizon developer install: passes `--developer-single-player`
    /// (Dev Mode only).
    #[serde(default)]
    pub(crate) horizon_dev_single_player: bool,
    /// Allows a Horizon binary outside the launcher-managed release store
    /// (local build / unsigned artifact) while Dev Mode is active.
    #[serde(default)]
    pub(crate) horizon_allow_unsigned_local: bool,
    /// Add a JDWP socket to every JVM game launch (Dev Mode only).
    #[serde(default)]
    pub(crate) jdwp_enabled: bool,
    /// Port for the JDWP socket; 0 lets the JVM choose a free port.
    #[serde(default = "default_jdwp_port")]
    pub(crate) jdwp_port: u16,
    /// Export and verbose Sphinx Mixin debug dumps (Dev Mode only).
    #[serde(default)]
    pub(crate) mixin_debug: bool,
}

fn default_jdwp_port() -> u16 {
    5005
}

fn default_true() -> bool {
    true
}

fn default_update_channel() -> Option<String> {
    Some("bolide".to_owned())
}

impl Default for Settings {
    fn default() -> Self {
        Self {
            active_account: None,
            shared_dir: None,
            instances_dir: None,
            java_path: None,
            custom_java_paths: Vec::new(),
            selected_java_path: None,
            min_memory_mb: 0,
            max_memory_mb: 0,
            theme: None,
            locale: None,
            update_channel: default_update_channel(),
            msa_client_id: None,
            elyby_client_id: None,
            mode: None,
            versions_dir: None,
            mods_dir: None,
            icons_dir: None,
            java_dir: None,
            skins_dir: None,
            blind_mode: false,
            deaf_mode: false,
            downloads_dir: None,
            servers_dir: None,
            curseforge_api_key: None,
            curseforge_enabled: true,
            crash_reporter_enabled: false,
            crash_endpoint: None,
            crash_prompt_enabled: true,
            horizon_path: None,
            gc_preset: None,
            custom_gc_flags: Vec::new(),
            extra_jvm_args: None,
            use_cas_links: true,
            dev_mode: false,
            horizon_dev_offline: false,
            horizon_dev_single_player: false,
            horizon_allow_unsigned_local: false,
            jdwp_enabled: false,
            jdwp_port: default_jdwp_port(),
            mixin_debug: false,
        }
    }
}

async fn app_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    tokio::fs::create_dir_all(&dir)
        .await
        .map_err(|e| e.to_string())?;
    Ok(dir)
}

async fn accounts_path(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_dir(app).await?.join("accounts.json"))
}

pub(crate) async fn settings_path(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_dir(app).await?.join("settings.json"))
}

pub(crate) async fn load_settings(path: &Path) -> Settings {
    if let Ok(data) = tokio::fs::read_to_string(path).await
        && let Ok(settings) = serde_json::from_str::<Settings>(&data)
    {
        return settings;
    }
    Settings::default()
}

pub(crate) async fn save_settings(path: &Path, settings: &Settings) -> Result<(), String> {
    let json = serde_json::to_string_pretty(settings).map_err(|e| e.to_string())?;
    tokio::fs::write(path, json)
        .await
        .map_err(|e| e.to_string())
}

async fn load_accounts(path: &Path) -> AccountStore {
    if let Ok(store) = AccountStore::load(path).await {
        return store;
    }
    AccountStore::default()
}

// ---- core operations (isolated from tauri so they can be tested) ----

/// Minecraft username shape: 3-16 chars of `A-Za-z0-9_`.
fn valid_username(name: &str) -> bool {
    let bytes = name.as_bytes();
    (3..=16).contains(&bytes.len())
        && bytes
            .iter()
            .all(|b| b.is_ascii_alphanumeric() || *b == b'_')
}

async fn add_offline(path: &Path, username: &str) -> Result<Account, String> {
    if !valid_username(username) {
        return Err("username must be 3-16 letters, digits or underscores".into());
    }
    let mut store = load_accounts(path).await;
    if store.find(username).is_some() {
        return Err(format!("account {username} already exists"));
    }
    let account = Account::offline(username);
    store.add(account.clone());
    store.save(path).await.map_err(|e| e.to_string())?;
    Ok(account)
}

async fn remove(path: &Path, settings_path: &Path, id: &str) -> Result<(), String> {
    let mut store = load_accounts(path).await;
    let Some(existing) = store.find(id).cloned() else {
        return Err(format!("unknown account {id}"));
    };
    store.accounts.retain(|a| a.id != existing.id);
    store.save(path).await.map_err(|e| e.to_string())?;
    let mut settings = load_settings(settings_path).await;
    if settings.active_account.as_deref() == Some(id) {
        settings.active_account = None;
        save_settings(settings_path, &settings).await?;
    }
    Ok(())
}

async fn set_active(path: &Path, settings_path: &Path, id: &str) -> Result<(), String> {
    let store = load_accounts(path).await;
    if store.find(id).is_none() {
        return Err(format!("unknown account {id}"));
    }
    let mut settings = load_settings(settings_path).await;
    settings.active_account = Some(id.to_owned());
    save_settings(settings_path, &settings).await
}

async fn get_active(accounts: &Path, settings: &Path) -> Option<Account> {
    let active_id = load_settings(settings).await.active_account?;
    let store = load_accounts(accounts).await;
    store.find(&active_id).cloned()
}

/// Inserts or replaces an account by id and persists the store. An existing
/// entry with the same identity (id, or same type + same non-nil UUID —
/// Ely.by profile renames) is replaced in place instead of duplicated.
async fn upsert(path: &Path, account: Account) -> Result<Account, String> {
    let mut store = load_accounts(path).await;
    let same_identity = |a: &Account| {
        a.id == account.id
            || (a.uuid == account.uuid
                && a.account_type == account.account_type
                && !account.uuid.is_nil())
    };
    if let Some(existing) = store.accounts.iter_mut().find(|a| same_identity(a)) {
        *existing = account.clone();
    } else {
        store.add(account.clone());
    }
    store.save(path).await.map_err(|e| e.to_string())?;
    Ok(account)
}

/// Configured Microsoft OAuth application id (settings override or default).
fn msa_client_id(settings: &Settings) -> String {
    settings
        .msa_client_id
        .clone()
        .filter(|id| !id.trim().is_empty())
        .unwrap_or_else(|| DEFAULT_CLIENT_ID.to_owned())
}

/// Microsoft device-flow client for this app's settings.
fn microsoft_auth(settings: &Settings) -> MicrosoftAuth {
    MicrosoftAuth::new(msa_client_id(settings))
}

/// Configured Ely.by OAuth application id: the `TWILIGHT_ELYBY_CLIENT_ID`
/// environment variable wins, then the settings value, then TwilightMC's
/// registered public client id. (Split from the env read so tests stay
/// hermetic.)
fn elyby_client_id(settings: &Settings) -> String {
    elyby_client_id_from_env(std::env::var("TWILIGHT_ELYBY_CLIENT_ID").ok(), settings)
}

fn elyby_client_id_from_env(env: Option<String>, settings: &Settings) -> String {
    let trimmed_nonempty = |id: Option<String>| {
        id.map(|id| id.trim().to_owned())
            .filter(|id| !id.is_empty())
    };
    trimmed_nonempty(env)
        .or_else(|| trimmed_nonempty(settings.elyby_client_id.clone()))
        .unwrap_or_else(|| DEFAULT_ELYBY_CLIENT_ID.to_owned())
}

/// Ely.by OAuth client for this app's settings.
fn elyby_auth(settings: &Settings) -> twilight_auth::ElybyAuth {
    twilight_auth::ElybyAuth::with_client_id(elyby_client_id(settings))
}

/// Custom Yggdrasil (Ely.by et al.) account.
async fn add_custom(path: &Path, username: &str, server_url: &str) -> Result<Account, String> {
    if !valid_username(username) {
        return Err("username must be 3-16 letters, digits or underscores".into());
    }
    let url = server_url.trim().trim_end_matches('/').to_owned();
    if !url.starts_with("https://") && !url.starts_with("http://") {
        return Err("server URL must start with https:// or http://".into());
    }
    let account = Account::custom_yggdrasil(username, url, None);
    if load_accounts(path).await.find(&account.id).is_some() {
        return Err(format!("account {} already exists", account.id));
    }
    upsert(path, account).await
}

/// Ely.by first-class sign-in: exchanges the username/email + password for a
/// Yggdrasil session token, persists the account (server-assigned name and
/// UUID), and activates it. Users never type a server URL — the canonical
/// endpoint lives in `twilight-auth`.
async fn add_elyby(
    accounts: &Path,
    settings: &Path,
    auth: &twilight_auth::ElybyAuth,
    username: &str,
    password: &str,
) -> Result<Account, String> {
    let username = username.trim();
    if username.is_empty() {
        return Err("enter your Ely.by username or email".into());
    }
    if password.is_empty() {
        return Err("enter your Ely.by password".into());
    }
    let session = auth
        .authenticate(username, password)
        .await
        .map_err(|e| e.to_string())?;
    let account = session.into_account(username);
    if account.uuid.is_nil() {
        return Err("signed in, but Ely.by returned no profile for this account".into());
    }
    // Classic authenticate responses carry no texture URLs; fill them from
    // the skinsystem. Best-effort: an skinsystem outage must never block the
    // sign-in itself, so a failure just leaves the textures unset.
    let textures = auth
        .skinsystem_textures(&account.username)
        .await
        .ok()
        .unwrap_or_default();
    let account = account
        .with_textures(textures.skin_url, textures.cape_url)
        .with_model(textures.model);
    let account = upsert(accounts, account).await?;
    set_active(accounts, settings, &account.id).await?;
    Ok(account)
}

/// The active skin URL, cape URL and arm model of a Mojang-shaped profile
/// (Microsoft and the Ely.by OAuth2 profile endpoint). The model is
/// normalized to `"slim"` (Alex arms) or `None` (classic/Steve auto-detect).
fn textures_from_profile(
    profile: &twilight_auth::MinecraftProfile,
) -> (Option<String>, Option<String>, Option<String>) {
    let active = profile
        .skins
        .iter()
        .find(|s| s.state.eq_ignore_ascii_case("ACTIVE"))
        .or_else(|| profile.skins.first());
    let skin = active.and_then(|s| s.url.clone());
    let model = active
        .and_then(|s| s.metadata.as_ref())
        .and_then(|m| m.model.as_deref())
        .filter(|m| m.trim().eq_ignore_ascii_case("slim"))
        .map(|_| "slim".to_owned());
    let cape = profile.capes.first().and_then(|c| c.url.clone());
    (skin, cape, model)
}

/// Turns a successful MSA sign-in into a persisted account (tokens, profile
/// textures, active pointer). Shared by the device-flow poll and refresh.
async fn save_microsoft_account(
    accounts: &Path,
    settings: &Path,
    auth: &MicrosoftAuth,
    msa: twilight_auth::MsaToken,
) -> Result<Account, String> {
    let session = auth.finish_login(msa).await.map_err(|e| e.to_string())?;
    let profile = session.profile.ok_or_else(|| {
        "signed in, but this Microsoft account owns no Minecraft profile".to_owned()
    })?;
    let (skin, cape, model) = textures_from_profile(&profile);
    let account = Account::microsoft(
        profile.name.clone(),
        profile.uuid().unwrap_or_default(),
        Some(session.mc.access_token),
        Some(session.msa.refresh_token).filter(|t| !t.is_empty()),
    )
    .with_textures(skin, cape)
    .with_model(model);
    let account = upsert(accounts, account).await?;
    set_active(accounts, settings, &account.id).await?;
    Ok(account)
}

/// Turns an Ely.by OAuth2 token set into a persisted account: resolves the
/// Mojang-simulation profile, stores the refresh token for silent renewal,
/// and activates the account. Shared by the device-code poll and the browser
/// redirect flow.
async fn save_elyby_oauth_account(
    accounts: &Path,
    settings: &Path,
    auth: &twilight_auth::ElybyAuth,
    token: ElybyToken,
) -> Result<Account, String> {
    let profile = auth
        .profile(&token.access_token)
        .await
        .map_err(|e| e.to_string())?
        .ok_or_else(|| "signed in, but this Ely.by account owns no Minecraft profile".to_owned())?;
    let (skin, cape, model) = textures_from_profile(&profile);
    let mut account = Account::elyby(
        profile.name.clone(),
        profile.uuid().unwrap_or_default(),
        Some(token.access_token),
    )
    .with_textures(skin, cape)
    .with_model(model);
    account.refresh_token = token.refresh_token.filter(|t| !t.trim().is_empty());
    let account = upsert(accounts, account).await?;
    set_active(accounts, settings, &account.id).await?;
    Ok(account)
}

/// Result of one device-flow poll tick, serialized for the webview.
#[derive(Debug, Serialize)]
#[serde(tag = "state", rename_all = "snake_case")]
pub enum DevicePollResult {
    /// Keep polling after the advertised interval.
    Pending,
    /// Microsoft asked for a slower cadence; +5 seconds.
    SlowDown,
    /// Fatal: declined, expired or broken request.
    Failed { reason: String },
    /// Signed in; the account is persisted and set active.
    Completed { account: Account },
}

/// The full active account profile, when one is selected.
pub(crate) async fn active_account(app: &AppHandle) -> Option<Account> {
    let Ok(dir) = app_dir(app).await else {
        return None;
    };
    get_active(&dir.join("accounts.json"), &dir.join("settings.json")).await
}

// ---- tauri commands ----

#[tauri::command]
pub async fn get_accounts(app: AppHandle) -> Result<Vec<Account>, String> {
    let path = accounts_path(&app).await?;
    Ok(load_accounts(&path).await.accounts)
}

#[tauri::command]
pub async fn add_offline_account(app: AppHandle, username: String) -> Result<Account, String> {
    let path = accounts_path(&app).await?;
    add_offline(&path, &username).await
}

#[tauri::command]
pub async fn remove_account(app: AppHandle, id: String) -> Result<(), String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    remove(&accounts, &settings, &id).await
}

#[tauri::command]
pub async fn set_active_account(app: AppHandle, id: String) -> Result<(), String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    set_active(&accounts, &settings, &id).await
}

#[tauri::command]
pub async fn get_active_account(app: AppHandle) -> Result<Option<Account>, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    Ok(get_active(&accounts, &settings).await)
}

#[tauri::command]
pub async fn offline_uuid(username: String) -> Result<String, String> {
    if !valid_username(&username) {
        return Err("username must be 3-16 letters, digits or underscores".into());
    }
    Ok(generate_offline_uuid(&username).to_string())
}

#[tauri::command]
pub async fn add_custom_yggdrasil_account(
    app: AppHandle,
    username: String,
    server_url: String,
) -> Result<Account, String> {
    let path = accounts_path(&app).await?;
    add_custom(&path, &username, &server_url).await
}

/// Ely.by sign-in (first-class account type; no URL to type).
#[tauri::command]
pub async fn add_elyby_account(
    app: AppHandle,
    username: String,
    password: String,
) -> Result<Account, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    add_elyby(
        &accounts,
        &settings,
        &twilight_auth::ElybyAuth::new(),
        &username,
        &password,
    )
    .await
}

/// Ely.by device-flow step 1: request the code the user must enter on
/// account.ely.by.
#[tauri::command]
pub async fn start_elyby_device_code(app: AppHandle) -> Result<ElybyDeviceCode, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    elyby_auth(&settings)
        .request_device_code()
        .await
        .map_err(|e| e.to_string())
}

/// Ely.by device-flow step 2 (stateless): one poll tick per invocation; the
/// webview spaces the calls. A completed poll persists the account (with its
/// refresh token) and activates it.
#[tauri::command]
pub async fn poll_elyby_device_code(
    app: AppHandle,
    device: ElybyDeviceCode,
) -> Result<DevicePollResult, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    let auth = elyby_auth(&load_settings(&settings).await);
    match auth.poll_device_token(&device).await {
        Ok(ElybyDevicePoll::Pending) => Ok(DevicePollResult::Pending),
        Ok(ElybyDevicePoll::SlowDown) => Ok(DevicePollResult::SlowDown),
        Ok(ElybyDevicePoll::Failed(reason)) => Ok(DevicePollResult::Failed { reason }),
        Ok(ElybyDevicePoll::Completed(token)) => {
            match save_elyby_oauth_account(&accounts, &settings, &auth, token).await {
                Ok(account) => Ok(DevicePollResult::Completed { account }),
                Err(reason) => Ok(DevicePollResult::Failed { reason }),
            }
        }
        Err(e) => Ok(DevicePollResult::Failed {
            reason: e.to_string(),
        }),
    }
}

/// Direct Ely.by sign-in (primary): opens the system browser at the OAuth2
/// authorize URL, waits (up to 5 minutes) for the one-shot loopback redirect
/// to capture the authorization code, then exchanges it with PKCE and
/// persists the account. Long-running; the webview awaits it.
#[tauri::command]
pub async fn elyby_browser_login(app: AppHandle) -> Result<Account, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    let auth = elyby_auth(&load_settings(&settings).await);

    let (redirect_uri, rx) = twilight_auth::spawn_loopback_redirect().map_err(|e| e.to_string())?;
    let pair = twilight_auth::pkce_pair();
    let url = auth.authorization_url(&pair.challenge, &redirect_uri);
    // the OAuth2 URL carries `?`/`&` query parameters — it must open the web
    // browser, never the platform file opener
    crate::open_url(&url)?;
    // the listener itself gives up after 300 seconds (yielding None)
    let redirect = rx.await.map_err(|e| e.to_string())?;
    let redirect =
        redirect.ok_or_else(|| "no sign-in response arrived within 5 minutes".to_owned())?;
    let code = twilight_auth::extract_authorization_code(&redirect)
        .ok_or_else(|| "sign-in was cancelled or denied".to_owned())?;
    let token = auth
        .exchange_authorization_code(&code, &pair.verifier, &redirect_uri)
        .await
        .map_err(|e| e.to_string())?;
    save_elyby_oauth_account(&accounts, &settings, &auth, token).await
}

/// Device-flow step 1: request the code the user must enter.
#[tauri::command]
pub async fn start_microsoft_device_code(app: AppHandle) -> Result<DeviceCode, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    microsoft_auth(&settings)
        .request_device_code()
        .await
        .map_err(|e| e.to_string())
}

/// Device-flow step 2 (stateless): one poll tick per invocation; the webview
/// spaces the calls. A completed poll persists the account and activates it.
#[tauri::command]
pub async fn poll_microsoft_device_code(
    app: AppHandle,
    device: DeviceCode,
) -> Result<DevicePollResult, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    let settings_loaded = load_settings(&settings).await;
    let auth = microsoft_auth(&settings_loaded);
    match auth.poll_once(&device).await {
        Ok(twilight_auth::DeviceFlowState::Pending) => Ok(DevicePollResult::Pending),
        Ok(twilight_auth::DeviceFlowState::SlowDown) => Ok(DevicePollResult::SlowDown),
        Ok(twilight_auth::DeviceFlowState::Failed(reason)) => {
            Ok(DevicePollResult::Failed { reason })
        }
        Ok(twilight_auth::DeviceFlowState::Completed(msa)) => {
            match save_microsoft_account(&accounts, &settings, &auth, msa).await {
                Ok(account) => Ok(DevicePollResult::Completed { account }),
                Err(reason) => Ok(DevicePollResult::Failed { reason }),
            }
        }
        Err(e) => Ok(DevicePollResult::Failed {
            reason: e.to_string(),
        }),
    }
}

/// Replays the Xbox/Minecraft chain from a stored MSA refresh token.
#[tauri::command]
pub async fn refresh_microsoft_account(app: AppHandle, id: String) -> Result<Account, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    let store = load_accounts(&accounts).await;
    let account = store
        .find(&id)
        .filter(|a| a.refresh_token.is_some())
        .ok_or_else(|| "no refresh token stored for this account; sign in again".to_owned())?
        .clone();
    let settings_loaded = load_settings(&settings).await;
    let auth = microsoft_auth(&settings_loaded);
    let session = auth
        .refresh_session(account.refresh_token.as_deref().unwrap_or_default())
        .await
        .map_err(|e| e.to_string())?;
    let (skin, cape, model) = session
        .profile
        .as_ref()
        .map(textures_from_profile)
        .unwrap_or((
            account.skin.clone(),
            account.cape.clone(),
            account.model.clone(),
        ));
    let refreshed = Account::microsoft(
        session
            .profile
            .as_ref()
            .map(|p| p.name.clone())
            .unwrap_or_else(|| account.username.clone()),
        session
            .profile
            .as_ref()
            .and_then(|p| p.uuid())
            .unwrap_or(account.uuid),
        Some(session.mc.access_token),
        Some(session.msa.refresh_token)
            .filter(|t| !t.is_empty())
            .or(account.refresh_token.clone()),
    )
    .with_textures(skin.or(account.skin.clone()), cape.or(account.cape.clone()))
    .with_model(model.or(account.model.clone()));
    // keep the persisted id stable so the active pointer survives the refresh
    let mut refreshed = refreshed;
    refreshed.id = account.id.clone();
    upsert(&accounts, refreshed).await
}

/// Re-issues Ely.by OAuth2 tokens from a stored refresh token (silent
/// renewal): refreshes the bearer, re-resolves the Mojang-simulation profile
/// textures and persists the result under the original id without touching
/// the active pointer. [`refresh_elyby_account`] core, isolated from tauri
/// for reuse and tests.
async fn refresh_elyby(accounts: &Path, settings: &Path, id: &str) -> Result<Account, String> {
    let store = load_accounts(accounts).await;
    let account = store
        .find(id)
        .filter(|a| a.refresh_token.is_some())
        .ok_or_else(|| "no refresh token stored for this account; sign in again".to_owned())?
        .clone();
    let auth = elyby_auth(&load_settings(settings).await);
    let token = auth
        .refresh_access_token(account.refresh_token.as_deref().unwrap_or_default())
        .await
        .map_err(|e| e.to_string())?;
    // re-resolve profile textures; an outage falls back to the stored ones so
    // a token renewal never wipes a good skin
    let (skin, cape, model) = match auth.profile(&token.access_token).await {
        Ok(Some(profile)) => textures_from_profile(&profile),
        _ => (
            account.skin.clone(),
            account.cape.clone(),
            account.model.clone(),
        ),
    };
    let mut refreshed = Account::elyby(
        account.username.clone(),
        account.uuid,
        Some(token.access_token),
    )
    .with_textures(skin.or(account.skin.clone()), cape.or(account.cape.clone()))
    .with_model(model.or(account.model.clone()));
    refreshed.refresh_token = token
        .refresh_token
        .filter(|t| !t.trim().is_empty())
        .or(account.refresh_token.clone());
    // keep the persisted id stable so the active pointer survives the refresh
    refreshed.id = account.id.clone();
    upsert(accounts, refreshed).await
}

/// [`refresh_elyby`] command surface for the webview's Refresh button.
#[tauri::command]
pub async fn refresh_elyby_account(app: AppHandle, id: String) -> Result<Account, String> {
    let accounts = accounts_path(&app).await?;
    let settings = settings_path(&app).await?;
    refresh_elyby(&accounts, &settings, &id).await
}

/// Replaces an account's skin and cape (None clears); persists and returns it.
async fn set_textures(
    path: &Path,
    id: &str,
    skin: Option<String>,
    cape: Option<String>,
) -> Result<Account, String> {
    let store = load_accounts(path).await;
    let account = store
        .find(id)
        .cloned()
        .ok_or_else(|| format!("unknown account {id}"))?;
    upsert(path, account.with_textures(skin, cape)).await
}

/// Replaces an account's local/URL skin and cape (None clears).
#[tauri::command]
pub async fn set_account_textures(
    app: AppHandle,
    id: String,
    skin: Option<String>,
    cape: Option<String>,
) -> Result<Account, String> {
    let accounts = accounts_path(&app).await?;
    set_textures(&accounts, &id, skin, cape).await
}

/// Standard-alphabet base64 with padding (RFC 4648 §4) — hand-rolled because
/// the tree carries no base64 crate; used to inline proxied skin PNGs.
fn base64_standard(data: &[u8]) -> String {
    const TABLE: &[u8; 64] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let mut out = String::with_capacity(data.len().div_ceil(3) * 4);
    for chunk in data.chunks(3) {
        let b0 = chunk[0] as u32;
        let b1 = chunk.get(1).copied().unwrap_or(0) as u32;
        let b2 = chunk.get(2).copied().unwrap_or(0) as u32;
        let n = (b0 << 16) | (b1 << 8) | b2;
        out.push(TABLE[(n >> 18) as usize & 63] as char);
        out.push(TABLE[(n >> 12) as usize & 63] as char);
        out.push(if chunk.len() > 1 {
            TABLE[(n >> 6) as usize & 63] as char
        } else {
            '='
        });
        out.push(if chunk.len() > 2 {
            TABLE[n as usize & 63] as char
        } else {
            '='
        });
    }
    out
}

/// Wraps raw PNG bytes in a `data:image/png;base64` URI.
pub(crate) fn png_data_uri(bytes: &[u8]) -> String {
    format!("data:image/png;base64,{}", base64_standard(bytes))
}

/// Inlines a skin texture as a data URI so the webview can render it without
/// CORS or asset-protocol restrictions. `data:` sources pass through; local
/// files are read; http(s) URLs are downloaded; anything else is treated as
/// an Ely.by nickname resolved through the skinsystem's direct
/// `/skins/{name}.png` fallback (which follows redirects to the texture).
async fn proxy_skin_png_bytes(source: &str) -> Result<String, String> {
    let source = source.trim();
    if source.is_empty() {
        return Err("empty skin source".into());
    }
    if source.starts_with("data:") {
        return Ok(source.to_owned()); // already webview-ready
    }
    let url = if source.starts_with("http://") || source.starts_with("https://") {
        source.to_owned()
    } else if Path::new(source).is_file() {
        let bytes = tokio::fs::read(source).await.map_err(|e| e.to_string())?;
        return Ok(png_data_uri(&bytes));
    } else {
        twilight_auth::skin_png_url(source)
    };
    let resp = reqwest::get(&url).await.map_err(|e| e.to_string())?;
    if !resp.status().is_success() {
        return Err(format!(
            "skin fetch failed with HTTP {}",
            resp.status().as_u16()
        ));
    }
    let bytes = resp.bytes().await.map_err(|e| e.to_string())?;
    Ok(png_data_uri(&bytes))
}

/// Proxy a skin texture (data URI, local path, https URL or Ely.by nickname)
/// into a `data:image/png;base64` URI the webview can always render.
#[tauri::command]
pub async fn proxy_skin_png(source: String) -> Result<String, String> {
    proxy_skin_png_bytes(&source).await
}

#[cfg(test)]
mod tests {
    use super::*;

    async fn test_dir() -> (PathBuf, PathBuf) {
        // tests run in parallel: a per-process counter keeps the dirs distinct
        // even when two land in the same nanosecond
        static COUNTER: std::sync::atomic::AtomicU64 = std::sync::atomic::AtomicU64::new(0);
        let seq = COUNTER.fetch_add(1, std::sync::atomic::Ordering::Relaxed);
        let dir = std::env::temp_dir().join(format!(
            "twi-ui-test-{}-{}-{seq}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        tokio::fs::create_dir_all(&dir).await.unwrap();
        (dir.join("accounts.json"), dir.join("settings.json"))
    }

    #[tokio::test]
    async fn add_remove_and_activate_round_trip() {
        let (accounts, settings) = test_dir().await;

        assert!(add_offline(&accounts, "ab").await.is_err()); // too short
        assert!(add_offline(&accounts, "bad name!").await.is_err()); // wrong charset

        let account = add_offline(&accounts, "Steve").await.unwrap();
        assert_eq!(
            account.uuid.to_string(),
            "5627dd98-e6be-3c21-b8a8-e92344183641"
        );
        assert!(add_offline(&accounts, "Steve").await.is_err()); // duplicate id

        assert!(set_active(&accounts, &settings, "Ghost").await.is_err());
        set_active(&accounts, &settings, "Steve").await.unwrap();
        let active = get_active(&accounts, &settings).await;
        assert_eq!(active.map(|a| a.id), Some("Steve".to_owned()));

        remove(&accounts, &settings, "Steve").await.unwrap();
        assert!(load_accounts(&accounts).await.accounts.is_empty());
        // removing the active account clears the pointer
        assert_eq!(get_active(&accounts, &settings).await, None);
    }

    #[tokio::test]
    async fn elyby_refresh_without_refresh_token_is_rejected_before_network() {
        let (accounts, settings) = test_dir().await;
        // an Ely.by account persisted without a refresh token (legacy store)
        let stored = twilight_auth::Account::elyby("Steve", generate_offline_uuid("Steve"), None);
        upsert(&accounts, stored).await.unwrap();
        assert!(
            refresh_elyby(&accounts, &settings, "Steve@ely.by")
                .await
                .unwrap_err()
                .contains("no refresh token")
        );
        // and an unknown id fails identically without touching the network
        assert!(
            refresh_elyby(&accounts, &settings, "Ghost@ely.by")
                .await
                .is_err()
        );
    }

    #[tokio::test]
    async fn custom_account_validation_and_dedup() {
        let (accounts, _settings) = test_dir().await;
        assert!(
            add_custom(
                &accounts,
                "ab",
                "https://authserver.ely.by/api/authlib-injector"
            )
            .await
            .is_err()
        );
        assert!(add_custom(&accounts, "Steve", "ely.by").await.is_err()); // no scheme
        let a = add_custom(
            &accounts,
            "Steve",
            "https://authserver.ely.by/api/authlib-injector/",
        )
        .await
        .unwrap();
        assert!(matches!(
            a.account_type,
            twilight_auth::AccountType::CustomYggdrasil { ref auth_server_url }
                if auth_server_url == "https://authserver.ely.by/api/authlib-injector"
        ));
        assert!(a.id.ends_with("authserver.ely.by"));
        // the trimmed URL makes a duplicate id collide
        assert!(
            add_custom(
                &accounts,
                "Steve",
                "https://authserver.ely.by/api/authlib-injector"
            )
            .await
            .is_err()
        );
    }

    #[tokio::test]
    async fn textures_set_and_clear() {
        let (accounts, _settings) = test_dir().await;
        let a = add_offline(&accounts, "Steve").await.unwrap();
        let updated = set_textures(
            &accounts,
            &a.id,
            Some("C:/skins/steve.png".into()),
            Some("C:/skins/cape.png".into()),
        )
        .await
        .unwrap();
        assert_eq!(updated.skin.as_deref(), Some("C:/skins/steve.png"));
        assert_eq!(updated.cape.as_deref(), Some("C:/skins/cape.png"));
        // persisted, then cleared by passing None twice
        let cleared = set_textures(&accounts, &a.id, None, None).await.unwrap();
        assert_eq!(cleared.skin, None);
        assert_eq!(cleared.cape, None);
        assert!(set_textures(&accounts, "Ghost", None, None).await.is_err());
    }

    #[tokio::test]
    async fn elyby_sign_in_validates_inputs_before_touching_the_network() {
        let (accounts, settings) = test_dir().await;
        let auth = twilight_auth::ElybyAuth::new();
        // both fields are required; these fail before any HTTP request
        assert!(
            add_elyby(&accounts, &settings, &auth, "   ", "pw")
                .await
                .is_err()
        );
        assert!(
            add_elyby(&accounts, &settings, &auth, "steve@example.com", "")
                .await
                .is_err()
        );
        // nothing was persisted by the rejected attempts
        assert!(load_accounts(&accounts).await.accounts.is_empty());
    }

    #[test]
    fn elyby_account_type_is_serialized_first_class() {
        // the webview keys off `account_type.type === 'ely_by'`
        let account = Account::elyby(
            "Steve",
            twilight_auth::generate_offline_uuid("Steve"),
            Some("tok".into()),
        );
        let json = serde_json::to_value(&account).unwrap();
        assert_eq!(json["account_type"]["type"], "ely_by");
        assert_eq!(json["id"], "Steve@ely.by");
        // and round-trips back into the same variant (existing stores load)
        let back: Account = serde_json::from_value(json).unwrap();
        assert_eq!(back.account_type, twilight_auth::AccountType::ElyBy);
    }

    #[test]
    fn profile_textures_pick_the_active_skin() {
        use twilight_auth::{MinecraftProfile, ProfileTexture, ProfileTextureMetadata};
        let profile = MinecraftProfile {
            id: "abc".into(),
            name: "Notch".into(),
            skins: vec![
                ProfileTexture {
                    id: "s1".into(),
                    state: "ACTIVE".into(),
                    url: Some("https://textures/active".into()),
                    metadata: Some(ProfileTextureMetadata {
                        model: Some("slim".into()),
                    }),
                },
                ProfileTexture {
                    id: "s2".into(),
                    state: "".into(),
                    url: Some("https://textures/other".into()),
                    metadata: None,
                },
            ],
            capes: vec![ProfileTexture {
                id: "c1".into(),
                state: "".into(),
                url: Some("https://textures/cape".into()),
                metadata: None,
            }],
        };
        let (skin, cape, model) = textures_from_profile(&profile);
        assert_eq!(skin.as_deref(), Some("https://textures/active"));
        assert_eq!(cape.as_deref(), Some("https://textures/cape"));
        assert_eq!(model.as_deref(), Some("slim"));

        // a non-slim model claim (or none at all) stays auto-detect
        let wide = MinecraftProfile {
            skins: vec![ProfileTexture {
                id: "w".into(),
                state: "ACTIVE".into(),
                url: Some("https://textures/wide".into()),
                metadata: Some(ProfileTextureMetadata {
                    model: Some("default".into()),
                }),
            }],
            ..Default::default()
        };
        let (skin, cape, model) = textures_from_profile(&wide);
        assert_eq!(skin.as_deref(), Some("https://textures/wide"));
        assert_eq!(cape, None);
        assert_eq!(model, None);
    }

    #[test]
    fn elyby_client_id_resolves_env_settings_then_default() {
        // no env, no usable setting → TwilightMC's registered public client id
        assert_eq!(
            elyby_client_id_from_env(None, &Settings::default()),
            "twilightmc"
        );
        // blank settings are ignored like a missing one
        let settings = Settings {
            elyby_client_id: Some("   ".into()),
            ..Settings::default()
        };
        assert_eq!(elyby_client_id_from_env(None, &settings), "twilightmc");
        // settings override
        let settings = Settings {
            elyby_client_id: Some(" settings-client ".into()),
            ..Settings::default()
        };
        assert_eq!(elyby_client_id_from_env(None, &settings), "settings-client");
        // env wins over everything (and is trimmed)
        assert_eq!(
            elyby_client_id_from_env(Some("  env-client  ".into()), &settings),
            "env-client"
        );
        // a blank env value falls through to the settings
        assert_eq!(
            elyby_client_id_from_env(Some(String::new()), &settings),
            "settings-client"
        );
    }

    #[test]
    fn base64_standard_matches_the_rfc_4648_vectors() {
        let cases: &[(&[u8], &str)] = &[
            (b"", ""),
            (b"f", "Zg=="),
            (b"fo", "Zm8="),
            (b"foo", "Zm9v"),
            (b"foob", "Zm9vYg=="),
            (b"fooba", "Zm9vYmE="),
            (b"foobar", "Zm9vYmFy"),
        ];
        for (input, expected) in cases {
            assert_eq!(base64_standard(input), *expected, "{input:?}");
        }
    }

    #[tokio::test]
    async fn proxy_skin_png_passthrough_and_local_file() {
        // data URIs are already webview-ready
        let data_uri = "data:image/png;base64,Zm9vYmFy";
        assert_eq!(proxy_skin_png_bytes(data_uri).await.unwrap(), data_uri);
        assert!(proxy_skin_png_bytes("   ").await.is_err());

        // a local file is inlined as a data URI
        let dir = std::env::temp_dir().join(format!(
            "twi-ui-skin-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let file = dir.join("steve.png");
        tokio::fs::write(&file, b"foobar").await.unwrap();
        assert_eq!(
            proxy_skin_png_bytes(&file.to_string_lossy()).await.unwrap(),
            "data:image/png;base64,Zm9vYmFy"
        );
    }
}
