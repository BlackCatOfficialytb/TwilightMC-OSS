//! Ely.by first-class accounts: the Yggdrasil `authenticate` credentials
//! exchange against the canonical `/auth/authenticate` endpoint, plus the
//! `refresh` grant for stored session tokens.
//!
//! Ely.by is a dedicated [`crate::AccountType::ElyBy`] — users never type a
//! server URL — and every launch injects `authlib-injector` pointed at
//! [`ELYBY_AUTH_SERVER`]. The endpoint base is retargetable so the whole flow
//! is testable against a loopback server.

use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::account::Account;
use crate::error::AuthError;

/// Root of the real Ely.by Yggdrasil API (the `authenticate`/`refresh`
/// requests live here; [`ELYBY_AUTH_SERVER`] is the authlib-injector view).
pub const ELYBY_API_BASE: &str = "https://authserver.ely.by";

/// `POST {base}/auth/authenticate` request body (Yggdrasil is camelCase).
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub struct AuthenticateRequest {
    pub username: String,
    pub password: String,
    /// Always `{"name": "Minecraft", "version": 1}`, like Prism/Freesm.
    pub agent: Agent,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub client_token: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub request_user: Option<bool>,
}

/// The Yggdrasil agent selector.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct Agent {
    pub name: String,
    pub version: u32,
}

impl Default for Agent {
    fn default() -> Self {
        Agent {
            name: "Minecraft".into(),
            version: 1,
        }
    }
}

/// The `selectedProfile` block of an authenticate response.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct SelectedProfile {
    /// Dashed or undashed hex UUID as the server sends it.
    pub id: String,
    pub name: String,
}

/// Successful `authenticate`/`refresh` response.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub struct ElybySession {
    #[serde(default)]
    pub access_token: String,
    #[serde(default)]
    pub client_token: String,
    #[serde(default)]
    pub selected_profile: Option<SelectedProfile>,
    /// Server-side display name (`name` on response.user); optional.
    #[serde(default)]
    pub user: Option<serde_json::Value>,
}

/// Ely.by Yggdrasil client. Cloneable; the base URL is retargetable for tests.
#[derive(Debug, Clone)]
pub struct ElybyAuth {
    client: reqwest::Client,
    /// API root ending without a slash ([`ELYBY_API_BASE`] by default).
    pub base: String,
}

impl Default for ElybyAuth {
    fn default() -> Self {
        Self::new()
    }
}

impl ElybyAuth {
    pub fn new() -> Self {
        Self::with_client(reqwest::Client::new())
    }

    pub fn with_client(client: reqwest::Client) -> Self {
        Self {
            client,
            base: ELYBY_API_BASE.to_owned(),
        }
    }

    /// Credentials exchange: swaps an Ely.by username/email + password for a
    /// Yggdrasil `accessToken` and the profile UUID.
    pub async fn authenticate(
        &self,
        username: &str,
        password: &str,
    ) -> Result<ElybySession, AuthError> {
        let url = format!("{}/auth/authenticate", self.base);
        let body = AuthenticateRequest {
            username: username.to_owned(),
            password: password.to_owned(),
            agent: Agent::default(),
            client_token: None,
            request_user: None,
        };
        let resp = self
            .client
            .post(&url)
            .header("Accept", "application/json")
            .json(&body)
            .send()
            .await?;
        let status = resp.status();
        let json: serde_json::Value = resp.json().await?;
        if !status.is_success() {
            return Err(self.error_from(url, status.as_u16(), &json));
        }
        let session: ElybySession = serde_json::from_value(json)?;
        if session.access_token.trim().is_empty() {
            return Err(AuthError::Elyby(
                "the server returned no access token".to_owned(),
            ));
        }
        Ok(session)
    }

    /// Re-issues an access token from a stored session token.
    pub async fn refresh(
        &self,
        access_token: &str,
        client_token: &str,
    ) -> Result<ElybySession, AuthError> {
        let url = format!("{}/auth/refresh", self.base);
        let body = serde_json::json!({
            "accessToken": access_token,
            "clientToken": client_token,
            "requestUser": false,
        });
        let resp = self
            .client
            .post(&url)
            .header("Accept", "application/json")
            .json(&body)
            .send()
            .await?;
        let status = resp.status();
        let json: serde_json::Value = resp.json().await?;
        if !status.is_success() {
            return Err(self.error_from(url, status.as_u16(), &json));
        }
        let session: ElybySession = serde_json::from_value(json)?;
        if session.access_token.trim().is_empty() {
            return Err(AuthError::Elyby(
                "the server returned no access token".to_owned(),
            ));
        }
        Ok(session)
    }

    /// Maps a Yggdrasil error body (`errorMessage`) to a readable error.
    fn error_from(&self, url: String, status: u16, json: &serde_json::Value) -> AuthError {
        match json.get("errorMessage").and_then(|m| m.as_str()) {
            Some(message) if !message.trim().is_empty() => AuthError::Elyby(message.to_owned()),
            _ => AuthError::Status { url, status },
        }
    }
}

impl ElybySession {
    /// Builds the persisted account from a session: server-assigned name and
    /// UUID when present, otherwise the requested username and a placeholder.
    pub fn into_account(&self, fallback_username: &str) -> Account {
        let (username, uuid) = match &self.selected_profile {
            Some(profile) => (
                profile.name.clone(),
                parse_profile_uuid(&profile.id).unwrap_or_default(),
            ),
            None => (fallback_username.to_owned(), Uuid::nil()),
        };
        Account::elyby(username, uuid, Some(self.access_token.clone()))
    }

    /// The dashless-hex `clientToken` wanted by the refresh grant.
    pub fn client_token(&self) -> &str {
        &self.client_token
    }
}

/// Parses a Yggdrasil profile id into a `Uuid`: accepts dashed hex and the
/// dashless 32-char form Ely.by serves.
pub fn parse_profile_uuid(id: &str) -> Option<Uuid> {
    let id = id.trim();
    let compact: String = id.chars().filter(|c| *c != '-').collect();
    if compact.len() == 32 && compact.chars().all(|c| c.is_ascii_hexdigit()) {
        // insert the canonical dashes, then parse
        let dashed = format!(
            "{}-{}-{}-{}-{}",
            &compact[0..8],
            &compact[8..12],
            &compact[12..16],
            &compact[16..20],
            &compact[20..32]
        );
        return Uuid::parse_str(&dashed).ok();
    }
    Uuid::parse_str(id).ok()
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_http::{spawn, static_routes};

    #[test]
    fn profile_uuid_accepts_dashed_and_compact_forms() {
        let dashed = "5627dd98-e6be-3c21-b8a8-e92344183641";
        let compact = "5627dd98e6be3c21b8a8e92344183641";
        assert_eq!(parse_profile_uuid(dashed), Uuid::parse_str(dashed).ok());
        assert_eq!(parse_profile_uuid(compact), Uuid::parse_str(dashed).ok());
        assert_eq!(parse_profile_uuid("not-a-uuid"), None);
        assert_eq!(parse_profile_uuid(""), None);
    }

    async fn service(responses: Vec<(u16, serde_json::Value)>) -> crate::test_http::TestServer {
        let sequence: Vec<(u16, Vec<u8>)> = responses
            .into_iter()
            .map(|(status, body)| (status, body.to_string().into_bytes()))
            .collect();
        spawn(std::collections::HashMap::from([(
            "auth/authenticate".to_owned(),
            sequence,
        )]))
        .await
    }

    #[tokio::test]
    async fn authenticate_stores_token_and_uuid() {
        let server = service(vec![(
            200,
            serde_json::json!({
                "accessToken": "ely-token",
                "clientToken": "client-1",
                "selectedProfile": {
                    "id": "5627dd98e6be3c21b8a8e92344183641",
                    "name": "Steve"
                }
            }),
        )])
        .await;
        let mut auth = ElybyAuth::new();
        auth.base = format!("http://{}", server.addr);
        let session = auth
            .authenticate("steve@example.com", "hunter2")
            .await
            .unwrap();
        assert_eq!(session.access_token, "ely-token");
        assert_eq!(session.client_token(), "client-1");

        let account = session.into_account("fallback");
        assert_eq!(account.username, "Steve");
        assert_eq!(account.account_type, crate::AccountType::ElyBy);
        assert_eq!(account.access_token.as_deref(), Some("ely-token"));
        assert_eq!(
            account.uuid.to_string(),
            "5627dd98-e6be-3c21-b8a8-e92344183641"
        );
        assert_eq!(account.id, "Steve@ely.by");
        assert_eq!(server.hits("auth/authenticate").await, 1);
    }

    #[tokio::test]
    async fn invalid_credentials_surface_the_server_message() {
        let server = spawn(static_routes(&[(
            "auth/authenticate",
            403,
            r#"{ "error": "ForbiddenOperationException",
                 "errorMessage": "Invalid credentials. Invalid username or password." }"#,
        )]))
        .await;
        let mut auth = ElybyAuth::new();
        auth.base = format!("http://{}", server.addr);
        let err = auth.authenticate("steve", "wrong").await.unwrap_err();
        assert!(
            err.to_string().contains("Invalid credentials"),
            "got: {err}"
        );
        assert!(matches!(err, AuthError::Elyby(_)));
    }

    #[tokio::test]
    async fn missing_access_token_is_rejected() {
        let server = service(vec![(
            200,
            serde_json::json!({ "selectedProfile": { "id": "abc", "name": "Steve" } }),
        )])
        .await;
        let mut auth = ElybyAuth::new();
        auth.base = format!("http://{}", server.addr);
        let err = auth.authenticate("steve", "pw").await.unwrap_err();
        assert!(err.to_string().contains("no access token"), "got: {err}");
    }

    #[test]
    fn authenticate_request_shape_matches_yggdrasil() {
        let body = serde_json::to_value(AuthenticateRequest {
            username: "steve".into(),
            password: "pw".into(),
            agent: Agent::default(),
            client_token: None,
            request_user: None,
        })
        .unwrap();
        assert_eq!(body["agent"]["name"], "Minecraft");
        assert_eq!(body["agent"]["version"], 1);
        // absent optional fields never serialize as null
        assert!(body.get("clientToken").is_none());
        assert!(body.get("requestUser").is_none());
    }

    #[test]
    fn elyby_account_launches_as_mojang_through_the_canonical_server() {
        let account = Account::elyby(
            "Steve",
            Uuid::parse_str("5627dd98-e6be-3c21-b8a8-e92344183641").unwrap(),
            Some("ely-token".into()),
        );
        assert_eq!(account.user_type(), "mojang");
        assert!(account.requires_online_validation());
        assert_eq!(
            account.authlib_server(),
            Some(crate::account::ELYBY_AUTH_SERVER)
        );
        assert_eq!(
            account.authlib_server().unwrap(),
            "https://authserver.ely.by/api/authlib-injector"
        );
    }
}
