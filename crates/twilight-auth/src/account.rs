use std::path::Path;

use serde::{Deserialize, Serialize};

use crate::error::AuthError;
use crate::off_uuid::generate_offline_uuid;

/// Which backend an account authenticates against.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "snake_case")]
pub enum AccountType {
    /// No network validation: play as `username` with an offline v3 UUID.
    Offline,
    /// Microsoft (MSA) account; token refresh is handled by the auth flow crate.
    Microsoft,
    /// authlib-injector backed custom Yggdrasil server (Ely.by and friends).
    CustomYggdrasil { auth_server_url: String },
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Account {
    pub id: String,
    pub username: String,
    pub uuid: uuid::Uuid,
    pub account_type: AccountType,
    pub access_token: Option<String>,
}

impl Account {
    /// Offline account: generated UUID, sentinel token. No online validation required.
    pub fn offline(username: impl Into<String>) -> Self {
        let username = username.into();
        Account {
            id: username.clone(),
            username: username.clone(),
            uuid: generate_offline_uuid(&username),
            account_type: AccountType::Offline,
            access_token: None,
        }
    }

    /// Custom Yggdrasil (Ely.by et al.) account.
    pub fn custom_yggdrasil(username: impl Into<String>, server_url: impl Into<String>, access_token: Option<String>) -> Self {
        let username = username.into();
        let server_url = server_url.into();
        let uuid = generate_offline_uuid(&username);
        Account {
            id: format!("{username}@{}", host_of(&server_url)),
            username,
            uuid,
            account_type: AccountType::CustomYggdrasil { auth_server_url: server_url },
            access_token,
        }
    }

    /// Online validation required (Microsoft) = true; offline/custom = false.
    /// Freesm's launcher skips the Microsoft login steps for these account types.
    pub fn requires_online_validation(&self) -> bool {
        matches!(self.account_type, AccountType::Microsoft)
    }
}

/// Hostname for id disambiguation; falls back to the raw URL when it cannot be parsed.
fn host_of(url: &str) -> String {
    let remainder = match url.split_once("://") {
        Some((_, rest)) => rest,
        None => url,
    };
    remainder.split('/').next().unwrap_or(remainder).to_owned()
}

/// Persisted account list (small `accounts.json`-style store).
#[derive(Debug, Clone, Default, PartialEq, Serialize, Deserialize)]
pub struct AccountStore {
    #[serde(default)]
    pub accounts: Vec<Account>,
}

impl AccountStore {
    pub fn add(&mut self, account: Account) {
        self.accounts.push(account);
    }

    pub fn find(&self, id: &str) -> Option<&Account> {
        self.accounts.iter().find(|a| a.id == id)
    }

    /// Loads the store from disk.
    pub async fn load(path: &Path) -> Result<AccountStore, AuthError> {
        let data = tokio::fs::read_to_string(path).await?;
        Ok(serde_json::from_str(&data)?)
    }

    /// Atomically writes the store to disk (temp file + rename).
    pub async fn save(&self, path: &Path) -> Result<(), AuthError> {
        let json = serde_json::to_string_pretty(self)?;
        let tmp = path.with_extension("json.tmp");
        tokio::fs::write(&tmp, json).await?;
        tokio::fs::rename(&tmp, path).await?;
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn offline_account_bypasses_online_validation() {
        let ms: Account = serde_json::from_str(
            r#"{ "id": "x", "username": "x", "uuid": "5627dd98-e6be-3c21-b8a8-e92344183641",
                 "account_type": { "type": "microsoft" }, "access_token": "t" }"#,
        )
        .unwrap();
        let off = Account::offline("Steve");
        assert!(off.account_type == AccountType::Offline);
        assert!(!off.requires_online_validation());
        assert!(ms.requires_online_validation());
        // custom server behaves like offline: no Microsoft step
        let ygg = Account::custom_yggdrasil("Steve", "https://authserver.ely.by/api/authlib-injector", None);
        assert!(!ygg.requires_online_validation());
        assert!(matches!(
            ygg.account_type,
            AccountType::CustomYggdrasil { ref auth_server_url } if auth_server_url.contains("ely.by")
        ));
    }

    #[tokio::test]
    async fn store_round_trip_and_atomic_write() {
        let mut store = AccountStore::default();
        store.add(Account::offline("Steve"));
        store.add(Account::custom_yggdrasil("Ely", "https://authserver.ely.by/api/authlib-injector", Some("tok".into())));

        let dir = std::env::temp_dir().join(format!(
            "twi-auth-test-{}-{}",
            std::process::id(),
            std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).map(|d| d.subsec_nanos()).unwrap_or(0)
        ));
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let path = dir.join("accounts.json");
        store.save(&path).await.unwrap();

        let loaded = AccountStore::load(&path).await.unwrap();
        assert_eq!(loaded, store);
        assert_eq!(loaded.find("Steve").unwrap().uuid.to_string(), "5627dd98-e6be-3c21-b8a8-e92344183641");
        tokio::fs::remove_dir_all(&dir).await.unwrap();
    }

    #[tokio::test]
    async fn missing_store_is_an_io_error() {
        let err = AccountStore::load(Path::new("/definitely/not/a/real/path.json")).await;
        assert!(matches!(err, Err(AuthError::Io(_))));
    }
}
