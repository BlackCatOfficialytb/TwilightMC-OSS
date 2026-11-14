// IPC bridge to the twilight-auth account store, persisted under app_data_dir:
// `accounts.json` holds profiles, `settings.json` holds the active-account pointer.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};
use twilight_auth::{
    Account, AccountStore, DEFAULT_CLIENT_ID, DeviceCode, MicrosoftAuth, generate_offline_uuid,
};

#[derive(Default, Serialize, Deserialize)]
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
    /// `-Xms` in MiB; 0 = none.
    #[serde(default)]
    pub(crate) min_memory_mb: u32,
    /// `-Xmx` in MiB; 0 = none.
    #[serde(default)]
    pub(crate) max_memory_mb: u32,
    /// `light` / `dark`; falls back to the OS preference.
    #[serde(default)]
    pub(crate) theme: Option<String>,
    /// Overridable Microsoft OAuth application id (device flow); empty =
    /// the default public client id.
    #[serde(default)]
    pub(crate) msa_client_id: Option<String>,
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
    let before = store.accounts.len();
    store.accounts.retain(|a| a.id != id);
    if store.accounts.len() == before {
        return Err(format!("unknown account {id}"));
    }
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

/// Inserts or replaces an account by id and persists the store.
async fn upsert(path: &Path, account: Account) -> Result<Account, String> {
    let mut store = load_accounts(path).await;
    if let Some(existing) = store.accounts.iter_mut().find(|a| a.id == account.id) {
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

/// The active skin/cape texture URLs of a Microsoft profile.
fn textures_from_profile(
    profile: &twilight_auth::MinecraftProfile,
) -> (Option<String>, Option<String>) {
    let skin = profile
        .skins
        .iter()
        .find(|s| s.state.eq_ignore_ascii_case("ACTIVE"))
        .or_else(|| profile.skins.first())
        .and_then(|s| s.url.clone());
    let cape = profile.capes.first().and_then(|c| c.url.clone());
    (skin, cape)
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
    let (skin, cape) = textures_from_profile(&profile);
    let account = Account::microsoft(
        profile.name.clone(),
        profile.uuid().unwrap_or_default(),
        Some(session.mc.access_token),
        Some(session.msa.refresh_token).filter(|t| !t.is_empty()),
    )
    .with_textures(skin, cape);
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
    let (skin, cape) = session
        .profile
        .as_ref()
        .map(textures_from_profile)
        .unwrap_or((account.skin.clone(), account.cape.clone()));
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
    .with_textures(skin.or(account.skin.clone()), cape.or(account.cape.clone()));
    // keep the persisted id stable so the active pointer survives the refresh
    let mut refreshed = refreshed;
    refreshed.id = account.id.clone();
    upsert(&accounts, refreshed).await
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

#[cfg(test)]
mod tests {
    use super::*;

    async fn test_dir() -> (PathBuf, PathBuf) {
        let dir = std::env::temp_dir().join(format!(
            "twi-ui-test-{}-{}",
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

    #[test]
    fn profile_textures_pick_the_active_skin() {
        use twilight_auth::{MinecraftProfile, ProfileTexture};
        let profile = MinecraftProfile {
            id: "abc".into(),
            name: "Notch".into(),
            skins: vec![
                ProfileTexture {
                    id: "s1".into(),
                    state: "ACTIVE".into(),
                    url: Some("https://textures/active".into()),
                },
                ProfileTexture {
                    id: "s2".into(),
                    state: "".into(),
                    url: Some("https://textures/other".into()),
                },
            ],
            capes: vec![ProfileTexture {
                id: "c1".into(),
                state: "".into(),
                url: Some("https://textures/cape".into()),
            }],
        };
        let (skin, cape) = textures_from_profile(&profile);
        assert_eq!(skin.as_deref(), Some("https://textures/active"));
        assert_eq!(cape.as_deref(), Some("https://textures/cape"));
    }
}
