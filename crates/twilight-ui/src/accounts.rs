// IPC bridge to the twilight-auth account store, persisted under app_data_dir:
// `accounts.json` holds profiles, `settings.json` holds the active-account pointer.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};
use twilight_auth::{Account, AccountStore};

#[derive(Default, Serialize, Deserialize)]
struct Settings {
    #[serde(default)]
    active_account: Option<String>,
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

async fn settings_path(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_dir(app).await?.join("settings.json"))
}

async fn load_settings(path: &Path) -> Settings {
    if let Ok(data) = tokio::fs::read_to_string(path).await
        && let Ok(settings) = serde_json::from_str::<Settings>(&data)
    {
        return settings;
    }
    Settings::default()
}

async fn save_settings(path: &Path, settings: &Settings) -> Result<(), String> {
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
}
