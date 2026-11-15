//! Ely.by first-class accounts.
//!
//! Two sign-in paths, both following Freesm's `ElyStep`/`ElyDeviceCodeStep`:
//!
//! * **OAuth2 (primary)** — the direct browser flow (authorization-code +
//!   PKCE S256 against a one-shot loopback redirect, like
//!   `QOAuthHttpServerReplyHandler`) and the RFC 8628 device-code flow
//!   (`user_code` + polling). Tokens are refreshed with the stored
//!   refresh token; the player profile comes from the Mojang-simulation
//!   endpoint on `account.ely.by`.
//! * **Classic Yggdrasil (fallback)** — the `/auth/authenticate` credentials
//!   exchange, whose response omits texture URLs; those are fetched from the
//!   `skinsystem.ely.by` textures API instead.
//!
//! Ely.by is a dedicated [`crate::AccountType::ElyBy`] — users never type a
//! server URL — and every launch injects `authlib-injector` pointed at
//! [`ELYBY_AUTH_SERVER`]. Every endpoint base is retargetable so the whole
//! flow is testable against a loopback server.

use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use uuid::Uuid;

use crate::account::Account;
use crate::error::AuthError;
use crate::microsoft::MinecraftProfile;

/// Root of the real Ely.by Yggdrasil API (the `authenticate`/`refresh`
/// requests live here; [`ELYBY_AUTH_SERVER`] is the authlib-injector view).
pub const ELYBY_API_BASE: &str = "https://authserver.ely.by";

/// Root of the Ely.by accounts web service: OAuth2 authorize/devicecode/
/// token endpoints, the Mojang-simulation profile and the user-code page.
pub const ELYBY_ACCOUNT_BASE: &str = "https://account.ely.by";

/// OAuth2 scopes Freesm requests; `offline_access` yields a refresh token.
pub const ELYBY_OAUTH2_SCOPE: &str = "account_info offline_access minecraft_server_session";

/// Freesm's registered public client id (`Launcher_ELYBY_CLIENT_ID`); pure
/// public-client OAuth2 — replaceable via settings or
/// `TWILIGHT_ELYBY_CLIENT_ID`.
pub const DEFAULT_ELYBY_CLIENT_ID: &str = "freesmlauncher";

/// Ely.by skinsystem root — the texture fallback for classic accounts.
pub const ELYBY_SKINSYSTEM_BASE: &str = "https://skinsystem.ely.by";

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

/// Ely.by client (classic Yggdrasil + OAuth2 + skinsystem). Cloneable; every
/// base URL and the client id are retargetable (tests use loopback addresses,
/// deployments can override the registered application id).
#[derive(Debug, Clone)]
pub struct ElybyAuth {
    client: reqwest::Client,
    /// Yggdrasil API root ending without a slash ([`ELYBY_API_BASE`]).
    pub base: String,
    /// Accounts web service root ([`ELYBY_ACCOUNT_BASE`]).
    pub account_base: String,
    /// Skinsystem root ([`ELYBY_SKINSYSTEM_BASE`]).
    pub skinsystem_base: String,
    /// Registered OAuth2 application id ([`DEFAULT_ELYBY_CLIENT_ID`]).
    pub client_id: String,
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

    /// Like [`new`] with a different OAuth2 application id.
    pub fn with_client_id(client_id: impl Into<String>) -> Self {
        Self::with_client_and_id(reqwest::Client::new(), client_id)
    }

    pub fn with_client(client: reqwest::Client) -> Self {
        Self::with_client_and_id(client, DEFAULT_ELYBY_CLIENT_ID)
    }

    pub fn with_client_and_id(client: reqwest::Client, client_id: impl Into<String>) -> Self {
        Self {
            client,
            base: ELYBY_API_BASE.to_owned(),
            account_base: ELYBY_ACCOUNT_BASE.to_owned(),
            skinsystem_base: ELYBY_SKINSYSTEM_BASE.to_owned(),
            client_id: client_id.into(),
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

    // ---- OAuth2 (primary sign-in) ----

    /// RFC 8628 §3.1: `POST {account_base}/api/oauth2/v1/devicecode` with the
    /// form fields Freesm sends (`client_id` + `scope`).
    pub async fn request_device_code(&self) -> Result<ElybyDeviceCode, AuthError> {
        let url = format!(
            "{account_base}/api/oauth2/v1/devicecode",
            account_base = self.account_base
        );
        let body = form_encode(&[
            ("client_id", self.client_id.as_str()),
            ("scope", ELYBY_OAUTH2_SCOPE),
        ]);
        let resp = self
            .client
            .post(&url)
            .header("Accept", "application/json")
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(body)
            .send()
            .await?;
        let status = resp.status();
        let json = read_json(resp).await;
        if !status.is_success() {
            return Err(self.error_from(url, status.as_u16(), &json));
        }
        let code: ElybyDeviceCode = serde_json::from_value(json)?;
        if code.device_code.trim().is_empty() || code.user_code.trim().is_empty() {
            return Err(AuthError::Elyby(
                "the device-code response was incomplete".to_owned(),
            ));
        }
        Ok(code)
    }

    /// One RFC 8628 §3.4 poll tick: `POST {account_base}/api/oauth2/v1/token`
    /// with the device-code grant. Pending/slow-down states arrive as HTTP 400
    /// + an `error` field and never fail the request.
    pub async fn poll_device_token(
        &self,
        device: &ElybyDeviceCode,
    ) -> Result<ElybyDevicePoll, AuthError> {
        let url = format!(
            "{account_base}/api/oauth2/v1/token",
            account_base = self.account_base
        );
        let grant = "urn:ietf:params:oauth:grant-type:device_code";
        let body = form_encode(&[
            ("client_id", self.client_id.as_str()),
            ("grant_type", grant),
            ("device_code", device.device_code.as_str()),
        ]);
        let resp = self
            .client
            .post(&url)
            .header("Accept", "application/json")
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(body)
            .send()
            .await?;
        let status = resp.status();
        let json = read_json(resp).await;
        // OAuth2 errors ride along in the body (usually with HTTP 400)
        if let Some(err) = json.get("error").and_then(|e| e.as_str()) {
            let detail = json
                .get("error_description")
                .and_then(|d| d.as_str())
                .unwrap_or_default();
            return Ok(match err {
                "authorization_pending" => ElybyDevicePoll::Pending,
                "slow_down" => ElybyDevicePoll::SlowDown,
                _ => ElybyDevicePoll::Failed(if detail.is_empty() {
                    err.to_owned()
                } else {
                    format!("{err}: {detail}")
                }),
            });
        }
        if !status.is_success() {
            return Err(AuthError::Status {
                url,
                status: status.as_u16(),
            });
        }
        let token: ElybyToken = serde_json::from_value(json)?;
        if token.access_token.trim().is_empty() {
            return Err(AuthError::Elyby(
                "the token response carried no access token".to_owned(),
            ));
        }
        Ok(ElybyDevicePoll::Completed(token))
    }

    /// Authorization-code grant for the direct browser flow (PKCE S256): the
    /// verifier must come from the same [`pkce_pair`] whose challenge is
    /// embedded in [`Self::authorization_url`], and `redirect_uri` must equal
    /// the loopback URI the code was captured on.
    pub async fn exchange_authorization_code(
        &self,
        code: &str,
        verifier: &str,
        redirect_uri: &str,
    ) -> Result<ElybyToken, AuthError> {
        let url = format!(
            "{account_base}/api/oauth2/v1/token",
            account_base = self.account_base
        );
        let body = form_encode(&[
            ("client_id", self.client_id.as_str()),
            ("grant_type", "authorization_code"),
            ("code", code),
            ("redirect_uri", redirect_uri),
            ("code_verifier", verifier),
        ]);
        self.token_grant(url, body).await
    }

    /// Re-issues OAuth2 tokens from a stored refresh token (silent renewal).
    pub async fn refresh_access_token(&self, refresh_token: &str) -> Result<ElybyToken, AuthError> {
        let url = format!(
            "{account_base}/api/oauth2/v1/token",
            account_base = self.account_base
        );
        let body = form_encode(&[
            ("client_id", self.client_id.as_str()),
            ("grant_type", "refresh_token"),
            ("refresh_token", refresh_token),
        ]);
        self.token_grant(url, body).await
    }

    /// Shared token-endpoint POST: OAuth2 `error` bodies (any status) become
    /// readable `Elyby` errors; success parses an [`ElybyToken`].
    async fn token_grant(&self, url: String, body: String) -> Result<ElybyToken, AuthError> {
        let resp = self
            .client
            .post(&url)
            .header("Accept", "application/json")
            .header("Content-Type", "application/x-www-form-urlencoded")
            .body(body)
            .send()
            .await?;
        let status = resp.status();
        let json = read_json(resp).await;
        if let Some(err) = json.get("error").and_then(|e| e.as_str()) {
            let detail = json
                .get("error_description")
                .and_then(|d| d.as_str())
                .unwrap_or_default();
            return Err(AuthError::Elyby(if detail.is_empty() {
                err.to_owned()
            } else {
                format!("{err}: {detail}")
            }));
        }
        if !status.is_success() {
            return Err(AuthError::Status {
                url,
                status: status.as_u16(),
            });
        }
        let token: ElybyToken = serde_json::from_value(json)?;
        if token.access_token.trim().is_empty() {
            return Err(AuthError::Elyby(
                "the token response carried no access token".to_owned(),
            ));
        }
        Ok(token)
    }

    /// Mojang-simulation profile of the OAuth2 bearer owner
    /// (`GET {account_base}/api/mojang/services/minecraft/profile`); `None`
    /// when the account owns no Minecraft profile (404).
    pub async fn profile(&self, bearer: &str) -> Result<Option<MinecraftProfile>, AuthError> {
        let url = format!(
            "{account_base}/api/mojang/services/minecraft/profile",
            account_base = self.account_base
        );
        let resp = self
            .client
            .get(&url)
            .header("Accept", "application/json")
            .bearer_auth(bearer)
            .send()
            .await?;
        let status = resp.status();
        if status == reqwest::StatusCode::NOT_FOUND {
            return Ok(None);
        }
        let json = read_json(resp).await;
        if !status.is_success() {
            return Err(AuthError::Status {
                url,
                status: status.as_u16(),
            });
        }
        Ok(Some(serde_json::from_value(json)?))
    }

    /// The browser authorization URL for the direct flow: PKCE S256 challenge
    /// + `prompt=select_account`, exactly like Freesm's `ElyStep`.
    pub fn authorization_url(&self, challenge: &str, redirect_uri: &str) -> String {
        format!(
            "{base}/oauth2/v1?response_type=code&client_id={client}&redirect_uri={redirect}&scope={scope}&code_challenge={challenge}&code_challenge_method=S256&prompt=select_account",
            base = self.account_base,
            client = percent_encode(&self.client_id),
            redirect = percent_encode(redirect_uri),
            scope = percent_encode(ELYBY_OAUTH2_SCOPE),
            challenge = percent_encode(challenge),
        )
    }

    /// Resolves a nickname's textures from the Ely.by skinsystem
    /// (`GET {skinsystem_base}/textures/{username}`) — the fallback for
    /// classic accounts whose authenticate response omits texture URLs.
    /// Missing textures (204/404) yield an all-None set, not an error.
    pub async fn skinsystem_textures(&self, username: &str) -> Result<ElybyTextures, AuthError> {
        let url = format!(
            "{base}/textures/{name}",
            base = self.skinsystem_base,
            name = percent_encode(username)
        );
        let resp = self
            .client
            .get(&url)
            .header("Accept", "application/json")
            .send()
            .await?;
        let status = resp.status();
        if status == reqwest::StatusCode::NO_CONTENT || status == reqwest::StatusCode::NOT_FOUND {
            return Ok(ElybyTextures::default());
        }
        let json = read_json(resp).await;
        if !status.is_success() {
            return Err(AuthError::Status {
                url,
                status: status.as_u16(),
            });
        }
        Ok(skinsystem_textures_from_json(&json))
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

// ---- OAuth2 types ----

/// `POST {account_base}/api/oauth2/v1/devicecode` response (RFC 8628 §3.2).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ElybyDeviceCode {
    pub device_code: String,
    pub user_code: String,
    /// Page where the user enters `user_code`.
    #[serde(default)]
    pub verification_uri: Option<String>,
    /// Click-through URL that pre-fills the code (when advertised).
    #[serde(default)]
    pub verification_uri_complete: Option<String>,
    #[serde(default)]
    pub expires_in: u64,
    /// Seconds between poll ticks (RFC default 5).
    #[serde(default = "default_poll_interval")]
    pub interval: u64,
}

fn default_poll_interval() -> u64 {
    5
}

/// Successful OAuth2 token response (`device_code`, `authorization_code` or
/// `refresh_token` grant); literal snake_case per the OAuth2 spec.
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct ElybyToken {
    #[serde(default)]
    pub access_token: String,
    #[serde(default)]
    pub refresh_token: Option<String>,
    #[serde(default)]
    pub expires_in: u64,
    #[serde(default)]
    pub token_type: String,
    #[serde(default)]
    pub scope: String,
}

/// One step of the device-flow poll loop (RFC 8628 §3.5).
#[derive(Debug, Clone, PartialEq)]
pub enum ElybyDevicePoll {
    /// The user has not authorized yet; poll again after `interval` seconds.
    Pending,
    /// The server asked for a slower cadence; add 5 seconds to the interval.
    SlowDown,
    /// Fatal: the code expired, the user declined, or the request broke.
    Failed(String),
    /// Authorized; OAuth2 tokens obtained.
    Completed(ElybyToken),
}

/// A texture set resolved for an Ely.by account (OAuth2 profile or the
/// skinsystem fallback).
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct ElybyTextures {
    pub skin_url: Option<String>,
    pub cape_url: Option<String>,
    /// `"slim"` when the skinsystem/profile advertises it; `None` = classic.
    pub model: Option<String>,
}

/// PKCE pair (RFC 7636 S256): the plain verifier and its derived challenge.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct PkcePair {
    /// 43-char base64url digest, within the 43-128 char verifier bounds.
    pub verifier: String,
    /// `BASE64URL(SHA256(verifier))` — embedded in the authorization URL.
    pub challenge: String,
}

/// Builds a PKCE pair. No `rand` dependency: time + pid entropy plus several
/// `RandomState` draws (128 fresh random bits each) hashed through SHA-256,
/// then base64url-encoded — 43 chars of the RFC-allowed unreserved set.
pub fn pkce_pair() -> PkcePair {
    use std::hash::{BuildHasher, Hasher};
    let nanos = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_nanos() as u64)
        .unwrap_or(0);
    let mut seed = Sha256::new();
    seed.update(nanos.to_le_bytes());
    seed.update(std::process::id().to_le_bytes());
    for _ in 0..4 {
        let mut hasher = std::collections::hash_map::RandomState::new().build_hasher();
        hasher.write_u64(nanos);
        seed.update(hasher.finish().to_le_bytes());
    }
    let verifier = base64url_nopad(&seed.finalize());
    let challenge = base64url_nopad(&Sha256::digest(verifier.as_bytes()));
    PkcePair {
        verifier,
        challenge,
    }
}

/// Spawns a one-shot loopback HTTP listener that captures the OAuth2
/// authorization redirect (`http://localhost:{port}` — no path, mirroring
/// Freesm's `QOAuthHttpServerReplyHandler`). Returns the redirect URI to
/// register plus a receiver yielding the full redirect URL once the browser
/// lands on it (`None` when nothing arrived within 300 seconds). The listener
/// also answers with a small "sign-in complete" page.
pub fn spawn_loopback_redirect()
-> Result<(String, tokio::sync::oneshot::Receiver<Option<String>>), AuthError> {
    let listener = std::net::TcpListener::bind("127.0.0.1:0")?;
    let port = listener.local_addr()?.port();
    let (tx, rx) = tokio::sync::oneshot::channel();
    std::thread::spawn(move || {
        use std::io::{Read, Write};
        let _ = listener.set_nonblocking(true);
        let deadline = std::time::Instant::now() + std::time::Duration::from_secs(300);
        let mut captured = None;
        while captured.is_none() && std::time::Instant::now() < deadline {
            match listener.accept() {
                Ok((mut stream, _)) => {
                    // Windows sockets inherit the listener's non-blocking mode
                    let _ = stream.set_nonblocking(false);
                    let mut raw = Vec::new();
                    let mut buf = [0u8; 4096];
                    loop {
                        match stream.read(&mut buf) {
                            Ok(0) | Err(_) => break,
                            Ok(n) => {
                                raw.extend_from_slice(&buf[..n]);
                                if raw.windows(4).any(|w| w == b"\r\n\r\n") || raw.len() > 16 * 1024
                                {
                                    break;
                                }
                            }
                        }
                    }
                    let text = String::from_utf8_lossy(&raw);
                    if let Some(target) = text
                        .lines()
                        .next()
                        .and_then(|l| l.split_whitespace().nth(1))
                    {
                        // code= (success) and error= (denied) both end the wait
                        if target.contains("code=") || target.contains("error=") {
                            captured = Some(format!("http://localhost:{port}{target}"));
                        }
                    }
                    let body = "<!doctype html><html><head><meta charset=\"utf-8\">\
<title>TwilightMC</title></head><body style=\"font-family:sans-serif\">\
<p>Sign-in complete &mdash; you can close this tab and return to the launcher.</p>\
</body></html>";
                    let response = format!(
                        "HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{}",
                        body.len(),
                        body
                    );
                    let _ = stream.write_all(response.as_bytes());
                    let _ = stream.flush();
                }
                Err(_) => std::thread::sleep(std::time::Duration::from_millis(25)),
            }
        }
        let _ = tx.send(captured);
    });
    Ok((format!("http://localhost:{port}"), rx))
}

/// Pulls the percent-decoded `code` query parameter out of a captured
/// redirect URL (`http://localhost:{port}/?code=…&state=…`).
pub fn extract_authorization_code(redirect_url: &str) -> Option<String> {
    let query = redirect_url.split_once('?')?.1;
    query.split('&').find_map(|pair| {
        let (key, value) = pair.split_once('=').unwrap_or((pair, ""));
        (key == "code" && !value.is_empty()).then(|| percent_decode(value))
    })
}

/// Direct PNG fallback URL for a nickname (`/skins/{username}.png`, which
/// redirects to the real texture — useful when `/textures` found nothing).
pub fn skin_png_url(username: &str) -> String {
    format!(
        "{base}/skins/{name}.png",
        base = ELYBY_SKINSYSTEM_BASE,
        name = percent_encode(username)
    )
}

/// Extracts the skinsystem texture set from the documented
/// `{"SKIN": {"url", "metadata": {"model"}}, "CAPE": {"url"}}` shape.
fn skinsystem_textures_from_json(json: &serde_json::Value) -> ElybyTextures {
    let url_of = |entry: Option<&serde_json::Value>| {
        entry
            .and_then(|e| e.get("url"))
            .and_then(|u| u.as_str())
            .map(str::trim)
            .filter(|u| !u.is_empty())
            .map(str::to_owned)
    };
    let skin = json.get("SKIN");
    let model = skin
        .and_then(|s| s.get("metadata"))
        .and_then(|m| m.get("model"))
        .and_then(|m| m.as_str())
        .map(str::trim)
        .filter(|m| !m.is_empty())
        .map(str::to_owned);
    ElybyTextures {
        skin_url: url_of(skin),
        cape_url: url_of(json.get("CAPE")),
        model,
    }
}

/// Reads a response body tolerantly: empty or non-JSON bodies (Ely.by answers
/// 204/404 with empty payloads) parse as `Null` instead of failing the call.
async fn read_json(resp: reqwest::Response) -> serde_json::Value {
    let text = resp.text().await.unwrap_or_default();
    serde_json::from_str(&text).unwrap_or(serde_json::Value::Null)
}

/// `application/x-www-form-urlencoded` body from key/value pairs (OAuth2
/// form grants); values are percent-encoded.
fn form_encode(pairs: &[(&str, &str)]) -> String {
    let mut out = String::new();
    for (key, value) in pairs {
        if !out.is_empty() {
            out.push('&');
        }
        out.push_str(&percent_encode(key));
        out.push('=');
        out.push_str(&percent_encode(value));
    }
    out
}

/// RFC 3986 unreserved-set percent encoding (`A-Za-z0-9-_.~` stay literal).
fn percent_encode(value: &str) -> String {
    let mut out = String::with_capacity(value.len());
    for byte in value.as_bytes() {
        match byte {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' => {
                out.push(*byte as char)
            }
            other => out.push_str(&format!("%{other:02X}")),
        }
    }
    out
}

/// Percent-decodes a URL component (`+` becomes a space, per form semantics).
fn percent_decode(value: &str) -> String {
    let mut out = Vec::with_capacity(value.len());
    let mut rest = value.as_bytes();
    while !rest.is_empty() {
        match rest[0] {
            b'+' => {
                out.push(b' ');
                rest = &rest[1..];
            }
            b'%' if rest.len() >= 3 => {
                match u8::from_str_radix(std::str::from_utf8(&rest[1..3]).unwrap_or(""), 16) {
                    Ok(byte) => {
                        out.push(byte);
                        rest = &rest[3..];
                    }
                    Err(_) => {
                        out.push(b'%');
                        rest = &rest[1..];
                    }
                }
            }
            byte => {
                out.push(byte);
                rest = &rest[1..];
            }
        }
    }
    String::from_utf8_lossy(&out).into_owned()
}

/// Base64url without padding (RFC 4648 §5) — hand-rolled because the tree
/// carries no base64 crate; used for the PKCE verifier/challenge.
fn base64url_nopad(data: &[u8]) -> String {
    const TABLE: &[u8; 64] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let mut out = String::with_capacity(data.len().div_ceil(3) * 4);
    for chunk in data.chunks(3) {
        let b0 = chunk[0] as u32;
        let b1 = chunk.get(1).copied().unwrap_or(0) as u32;
        let b2 = chunk.get(2).copied().unwrap_or(0) as u32;
        let n = (b0 << 16) | (b1 << 8) | b2;
        out.push(TABLE[(n >> 18) as usize & 63] as char);
        out.push(TABLE[(n >> 12) as usize & 63] as char);
        if chunk.len() > 1 {
            out.push(TABLE[(n >> 6) as usize & 63] as char);
        }
        if chunk.len() > 2 {
            out.push(TABLE[n as usize & 63] as char);
        }
    }
    out
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

    // ---- OAuth2 ----

    const OAUTH_TOKEN: &str = r#"{"access_token":"oa2-token","refresh_token":"oa2-refresh","token_type":"bearer","expires_in":7200,"scope":"account_info offline_access minecraft_server_session"}"#;

    #[tokio::test]
    async fn device_flow_posts_the_freesm_forms_and_walks_the_states() {
        let device_json = r#"{"device_code":"dev-1","user_code":"ABCD-EFGH","verification_uri":"https://account.ely.by/code","expires_in":300,"interval":5}"#;
        let server = spawn(std::collections::HashMap::from([
            (
                "api/oauth2/v1/devicecode".to_owned(),
                vec![(200u16, device_json.as_bytes().to_vec())],
            ),
            (
                "api/oauth2/v1/token".to_owned(),
                vec![
                    (400u16, br#"{"error":"authorization_pending"}"#.to_vec()),
                    (400u16, br#"{"error":"slow_down"}"#.to_vec()),
                    (
                        400u16,
                        br#"{"error":"expired_token","error_description":"too late"}"#.to_vec(),
                    ),
                    (200u16, OAUTH_TOKEN.as_bytes().to_vec()),
                ],
            ),
        ]))
        .await;
        let mut auth = ElybyAuth::new();
        auth.account_base = format!("http://{}", server.addr);

        let device = auth.request_device_code().await.unwrap();
        assert_eq!(device.user_code, "ABCD-EFGH");
        assert_eq!(
            device.verification_uri.as_deref(),
            Some("https://account.ely.by/code")
        );
        // the form fields mirror ElyDeviceCodeStep exactly
        assert_eq!(
            server.body("api/oauth2/v1/devicecode").await,
            "client_id=freesmlauncher&scope=account_info%20offline_access%20minecraft_server_session"
        );

        assert_eq!(
            auth.poll_device_token(&device).await.unwrap(),
            ElybyDevicePoll::Pending
        );
        assert_eq!(
            auth.poll_device_token(&device).await.unwrap(),
            ElybyDevicePoll::SlowDown
        );
        match auth.poll_device_token(&device).await.unwrap() {
            ElybyDevicePoll::Failed(reason) => {
                assert!(reason.contains("expired_token"), "{reason}")
            }
            other => panic!("expected Failed, got {other:?}"),
        }
        match auth.poll_device_token(&device).await.unwrap() {
            ElybyDevicePoll::Completed(token) => {
                assert_eq!(token.access_token, "oa2-token");
                assert_eq!(token.refresh_token.as_deref(), Some("oa2-refresh"));
            }
            other => panic!("expected Completed, got {other:?}"),
        }
        assert!(
            server
                .body("api/oauth2/v1/token")
                .await
                .contains("grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Adevice_code")
        );
        assert!(
            server
                .body("api/oauth2/v1/token")
                .await
                .contains("device_code=dev-1")
        );
    }

    #[tokio::test]
    async fn authorization_code_and_refresh_grants_post_their_fields() {
        let server = spawn(std::collections::HashMap::from([(
            "api/oauth2/v1/token".to_owned(),
            vec![
                (
                    200u16,
                    br#"{"access_token":"t1","refresh_token":"r1","expires_in":3600}"#.to_vec(),
                ),
                (
                    200u16,
                    br#"{"access_token":"t2","expires_in":3600}"#.to_vec(),
                ),
            ],
        )]))
        .await;
        let mut auth = ElybyAuth::new();
        auth.account_base = format!("http://{}", server.addr);

        let pair = pkce_pair();
        let token = auth
            .exchange_authorization_code("the-code", &pair.verifier, "http://localhost:5173")
            .await
            .unwrap();
        assert_eq!(token.access_token, "t1");
        let body = server.body("api/oauth2/v1/token").await;
        assert!(body.starts_with("client_id=freesmlauncher&"), "{body}");
        assert!(body.contains("grant_type=authorization_code"), "{body}");
        assert!(body.contains("code=the-code"), "{body}");
        assert!(
            body.contains("redirect_uri=http%3A%2F%2Flocalhost%3A5173"),
            "{body}"
        );
        assert!(
            body.contains(&format!("code_verifier={}", pair.verifier)),
            "{body}"
        );

        let refreshed = auth.refresh_access_token("stored-refresh").await.unwrap();
        assert_eq!(refreshed.access_token, "t2");
        let body = server.body("api/oauth2/v1/token").await; // last request body
        assert!(body.contains("grant_type=refresh_token"), "{body}");
        assert!(body.contains("refresh_token=stored-refresh"), "{body}");
    }

    #[tokio::test]
    async fn token_error_bodies_surface_a_readable_reason() {
        let server = spawn(static_routes(&[(
            "api/oauth2/v1/token",
            400,
            r#"{"error":"invalid_grant","error_description":"the code expired"}"#,
        )]))
        .await;
        let mut auth = ElybyAuth::new();
        auth.account_base = format!("http://{}", server.addr);
        let err = auth
            .exchange_authorization_code("c", "v", "http://localhost:0")
            .await
            .unwrap_err();
        assert!(
            matches!(err, AuthError::Elyby(ref msg) if msg.contains("the code expired")),
            "{err}"
        );
    }

    #[tokio::test]
    async fn profile_maps_404_to_none_and_parses_the_active_skin_model() {
        let profile_json = r#"{"id":"5627dd98e6be3c21b8a8e92344183641","name":"Steve","skins":[{"state":"ACTIVE","url":"https://textures/steve.png","metadata":{"model":"slim"}}],"capes":[]}"#;
        let server = spawn(std::collections::HashMap::from([(
            "api/mojang/services/minecraft/profile".to_owned(),
            vec![
                (404u16, b"{}".to_vec()),
                (200u16, profile_json.as_bytes().to_vec()),
            ],
        )]))
        .await;
        let mut auth = ElybyAuth::new();
        auth.account_base = format!("http://{}", server.addr);

        assert!(auth.profile("bearer").await.unwrap().is_none());
        let profile = auth.profile("bearer").await.unwrap().unwrap();
        assert_eq!(profile.name, "Steve");
        assert_eq!(
            profile.uuid(),
            Uuid::parse_str("5627dd98-e6be-3c21-b8a8-e92344183641").ok()
        );
        // Ely.by's skins omit the texture id — tolerated via #[serde(default)]
        assert!(profile.skins[0].id.is_empty());
        assert_eq!(profile.skins[0].state, "ACTIVE");
        assert_eq!(
            profile.skins[0].metadata.as_ref().unwrap().model.as_deref(),
            Some("slim")
        );
    }

    #[tokio::test]
    async fn skinsystem_extracts_skin_cape_and_model() {
        let server = spawn(std::collections::HashMap::from([(
            "textures/Steve".to_owned(),
            vec![
                (200u16, br#"{"id":"x","name":"Steve","SKIN":{"url":"https://s/steve.png","metadata":{"model":"slim"}},"CAPE":{"url":"https://s/cape.png"}}"#.to_vec()),
                (200u16, br#"{"id":"x","name":"Steve","CAPE":{"url":"https://s/cape.png"}}"#.to_vec()),
                (204u16, Vec::new()),
                (404u16, Vec::new()),
            ],
        )]))
        .await;
        let mut auth = ElybyAuth::new();
        auth.skinsystem_base = format!("http://{}", server.addr);

        let textures = auth.skinsystem_textures("Steve").await.unwrap();
        assert_eq!(textures.skin_url.as_deref(), Some("https://s/steve.png"));
        assert_eq!(textures.cape_url.as_deref(), Some("https://s/cape.png"));
        assert_eq!(textures.model.as_deref(), Some("slim"));

        // classic (wide) model: no metadata at all
        let textures = auth.skinsystem_textures("Steve").await.unwrap();
        assert_eq!(textures.skin_url, None);
        assert_eq!(textures.cape_url.as_deref(), Some("https://s/cape.png"));
        assert_eq!(textures.model, None);

        // 204 (the documented missing-textures answer) and 404 are all-None
        for _ in 0..2 {
            assert_eq!(
                auth.skinsystem_textures("Steve").await.unwrap(),
                ElybyTextures::default()
            );
        }
    }

    #[test]
    fn oauth2_json_shapes_are_tolerant() {
        let device: ElybyDeviceCode = serde_json::from_value(serde_json::json!({
            "device_code": "d1",
            "user_code": "ABCD-EFGH",
            "verification_uri": "https://account.ely.by/code",
            "expires_in": 300
        }))
        .unwrap();
        assert_eq!(device.interval, 5); // RFC default fills in
        assert!(device.verification_uri_complete.is_none());

        let token: ElybyToken = serde_json::from_value(serde_json::json!({
            "access_token": "t", "token_type": "bearer", "refresh_token": "r", "expires_in": 3600
        }))
        .unwrap();
        assert_eq!(token.refresh_token.as_deref(), Some("r"));
        assert_eq!(token.scope, ""); // missing scope tolerated

        let token: ElybyToken =
            serde_json::from_value(serde_json::json!({ "access_token": "t2" })).unwrap();
        assert_eq!(token.access_token, "t2");
    }

    #[test]
    fn pkce_pair_matches_the_s256_derivation() {
        let pair = pkce_pair();
        assert_eq!(pair.verifier.len(), 43);
        assert!(
            pair.verifier
                .chars()
                .all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_'),
            "{:?}",
            pair.verifier
        );
        let expected = base64url_nopad(&Sha256::digest(pair.verifier.as_bytes()));
        assert_eq!(pair.challenge, expected);
        // fresh entropy per call (RandomState draws differ)
        assert_ne!(pkce_pair().verifier, pkce_pair().verifier);
    }

    #[test]
    fn authorization_url_embeds_pkce_and_prompt() {
        let auth = ElybyAuth::with_client_id("my-client");
        assert_eq!(auth.client_id, "my-client");
        let url = auth.authorization_url("challenge-x", "http://localhost:1");
        assert!(
            url.starts_with("https://account.ely.by/oauth2/v1?"),
            "{url}"
        );
        assert!(url.contains("response_type=code"), "{url}");
        assert!(url.contains("client_id=my-client"), "{url}");
        assert!(
            url.contains("redirect_uri=http%3A%2F%2Flocalhost%3A1"),
            "{url}"
        );
        assert!(
            url.contains("scope=account_info%20offline_access%20minecraft_server_session"),
            "{url}"
        );
        assert!(url.contains("code_challenge=challenge-x"), "{url}");
        assert!(url.contains("code_challenge_method=S256"), "{url}");
        assert!(url.contains("prompt=select_account"), "{url}");
    }

    #[test]
    fn authorization_code_extraction_decodes_the_query() {
        assert_eq!(
            extract_authorization_code("http://localhost:1234/?code=abc%2B1&state=s").as_deref(),
            Some("abc+1")
        );
        assert!(
            extract_authorization_code("http://localhost:1234/?state=s").is_none(),
            "no code param"
        );
        assert!(extract_authorization_code("http://localhost:1234").is_none());
        // denied flows carry error= instead; extraction simply finds nothing
        assert!(extract_authorization_code("http://localhost:1/?error=access_denied").is_none());
    }

    #[tokio::test]
    async fn loopback_redirect_captures_the_authorization_code() {
        let (redirect_uri, rx) = spawn_loopback_redirect().unwrap();
        let port: u16 = redirect_uri.rsplit(':').next().unwrap().parse().unwrap();
        let url = format!("http://localhost:{port}/?code=abc123&state=xyz");
        let resp = reqwest::get(&url).await.unwrap();
        assert!(resp.status().is_success());
        assert!(resp.text().await.unwrap().contains("Sign-in complete"));
        let captured = rx.await.unwrap().expect("redirect captured");
        assert!(
            captured.starts_with(&format!("http://localhost:{port}")),
            "{captured}"
        );
        assert_eq!(
            extract_authorization_code(&captured).as_deref(),
            Some("abc123")
        );
    }

    #[test]
    fn skin_png_fallback_url_is_the_documented_shape() {
        assert_eq!(
            skin_png_url("Steve"),
            "https://skinsystem.ely.by/skins/Steve.png"
        );
    }
}
