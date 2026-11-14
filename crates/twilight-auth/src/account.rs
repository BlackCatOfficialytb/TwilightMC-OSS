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
    /// MSA refresh token for Microsoft accounts (`None` = re-run device flow).
    #[serde(default)]
    pub refresh_token: Option<String>,
    /// Optional skin texture: local PNG path or https URL (for the 3D viewer).
    #[serde(default)]
    pub skin: Option<String>,
    /// Optional cape texture: local PNG path or https URL.
    #[serde(default)]
    pub cape: Option<String>,
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
            refresh_token: None,
            skin: None,
            cape: None,
        }
    }

    /// Custom Yggdrasil (Ely.by et al.) account.
    pub fn custom_yggdrasil(
        username: impl Into<String>,
        server_url: impl Into<String>,
        access_token: Option<String>,
    ) -> Self {
        let username = username.into();
        let server_url = server_url.into();
        let uuid = generate_offline_uuid(&username);
        Account {
            id: format!("{username}@{}", host_of(&server_url)),
            username,
            uuid,
            account_type: AccountType::CustomYggdrasil {
                auth_server_url: server_url,
            },
            access_token,
            refresh_token: None,
            skin: None,
            cape: None,
        }
    }

    /// Signed-in Microsoft account (device-flow result); `refresh_token`
    /// keeps the account renewable without re-running the flow.
    pub fn microsoft(
        username: impl Into<String>,
        uuid: uuid::Uuid,
        access_token: Option<String>,
        refresh_token: Option<String>,
    ) -> Self {
        let username = username.into();
        Account {
            id: username.clone(),
            username,
            uuid,
            account_type: AccountType::Microsoft,
            access_token,
            refresh_token,
            skin: None,
            cape: None,
        }
    }

    /// Builder-style cosmetics attach: local PNG path or https URL each.
    pub fn with_textures(mut self, skin: Option<String>, cape: Option<String>) -> Self {
        self.skin = skin.filter(|s| !s.trim().is_empty());
        self.cape = cape.filter(|c| !c.trim().is_empty());
        self
    }

    /// Online validation required (Microsoft) = true; offline/custom = false.
    /// Freesm's launcher skips the Microsoft login steps for these account types.
    pub fn requires_online_validation(&self) -> bool {
        matches!(self.account_type, AccountType::Microsoft)
    }

    /// `--userType` for the game process (Mojang for real accounts, legacy otherwise).
    pub fn user_type(&self) -> &'static str {
        if self.requires_online_validation() {
            "mojang"
        } else {
            "legacy"
        }
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
        let ygg = Account::custom_yggdrasil(
            "Steve",
            "https://authserver.ely.by/api/authlib-injector",
            None,
        );
        assert!(!ygg.requires_online_validation());
        assert!(matches!(
            ygg.account_type,
            AccountType::CustomYggdrasil { ref auth_server_url } if auth_server_url.contains("ely.by")
        ));
        // Microsoft accounts keep the MSA refresh token for later renewal
        let ms = Account::microsoft(
            "Notch",
            uuid::Uuid::nil(),
            Some("mc-access".into()),
            Some("msa-refresh".into()),
        );
        assert!(ms.requires_online_validation());
        assert_eq!(ms.user_type(), "mojang");
        assert_eq!(ms.refresh_token.as_deref(), Some("msa-refresh"));
        // serialized form carries it, and older stores without it load fine
        let json = serde_json::to_string(&ms).unwrap();
        assert!(json.contains("msa-refresh"));
        let legacy: Account =
            serde_json::from_str(&json.replace(r#","refresh_token":"msa-refresh""#, "")).unwrap();
        assert_eq!(legacy.refresh_token, None);
    }

    #[tokio::test]
    async fn store_round_trip_and_atomic_write() {
        let mut store = AccountStore::default();
        store.add(Account::offline("Steve"));
        store.add(Account::custom_yggdrasil(
            "Ely",
            "https://authserver.ely.by/api/authlib-injector",
            Some("tok".into()),
        ));

        let dir = std::env::temp_dir().join(format!(
            "twi-auth-test-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .map(|d| d.subsec_nanos())
                .unwrap_or(0)
        ));
        tokio::fs::create_dir_all(&dir).await.unwrap();
        let path = dir.join("accounts.json");
        store.save(&path).await.unwrap();

        let loaded = AccountStore::load(&path).await.unwrap();
        assert_eq!(loaded, store);
        assert_eq!(
            loaded.find("Steve").unwrap().uuid.to_string(),
            "5627dd98-e6be-3c21-b8a8-e92344183641"
        );
        tokio::fs::remove_dir_all(&dir).await.unwrap();
    }

    #[tokio::test]
    async fn missing_store_is_an_io_error() {
        let err = AccountStore::load(Path::new("/definitely/not/a/real/path.json")).await;
        assert!(matches!(err, Err(AuthError::Io(_))));
    }
}
