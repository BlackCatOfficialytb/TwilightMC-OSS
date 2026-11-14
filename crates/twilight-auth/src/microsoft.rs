//! Microsoft (MSA) OAuth2 **device code flow**: sign-in polling, the Xbox Live
//! → XSTS → Minecraft Services token chain, the player profile and the
//! refresh-token grant. Fully async (`reqwest` + `tokio`) and non-blocking:
//! the caller drives the poll loop, one request at a time, so a UI can render
//! the `user_code` while waiting.
//!
//! Every endpoint base and the application `client_id` are overridable —
//! nothing is hardcoded beyond stable, public defaults — which also makes the
//! whole flow testable against a loopback HTTP server.

use serde::{Deserialize, Serialize};

use crate::error::AuthError;

/// Prism/Freesm's public MSA application id (device-flow enabled on the
/// `consumers` tenant); override [`MicrosoftAuth::client_id`] to switch.
pub const DEFAULT_CLIENT_ID: &str = "c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb";

pub const MSA_DEFAULT_BASE: &str = "https://login.microsoftonline.com/consumers/oauth2/v2.0";
pub const XBL_DEFAULT_BASE: &str = "https://user.auth.xboxlive.com";
pub const XSTS_DEFAULT_BASE: &str = "https://xsts.auth.xboxlive.com";
pub const MC_DEFAULT_BASE: &str = "https://api.minecraftservices.com";

/// Scopes for the device-code grant: sign in to Xbox Live and keep a
/// refresh token (`offline_access`).
pub const DEVICE_SCOPE: &str = "XboxLive.SignIn XboxLive.offline_access";

/// `POST {msa}/devicecode` response: the code the user must type at
/// `verification_uri`.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct DeviceCode {
    pub device_code: String,
    pub user_code: String,
    pub verification_uri: String,
    /// Direct sign-in URL with the code pre-filled, when the tenant offers one.
    #[serde(default)]
    pub verification_uri_complete: Option<String>,
    #[serde(default)]
    pub expires_in: u64,
    /// Microsoft-advertised poll interval in seconds (usually 5).
    #[serde(default = "default_interval")]
    pub interval: u64,
}

fn default_interval() -> u64 {
    5
}

/// Successful MSA token response (device-code or refresh grant).
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct MsaToken {
    #[serde(default)]
    pub access_token: String,
    #[serde(default)]
    pub refresh_token: String,
    #[serde(default)]
    pub expires_in: u64,
    #[serde(default)]
    pub scope: String,
    #[serde(default)]
    pub token_type: String,
}

/// One step of the poll loop; `run_device_flow` turns these into the token.
#[derive(Debug, Clone, PartialEq)]
pub enum DeviceFlowState {
    /// The user has not signed in yet; keep polling after `interval` seconds.
    Pending,
    /// Microsoft asked for a slower cadence; add 5 seconds to the interval.
    SlowDown,
    /// Fatal: the code expired, the user declined, or the request was invalid.
    Failed(String),
    /// Signed in; MSA access + refresh tokens obtained.
    Completed(MsaToken),
}

/// Xbox Live / XSTS response: a token plus the user hash from the claims.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct XboxToken {
    pub token: String,
    pub uhs: String,
}

/// Minecraft Services `login_with_xbox` response.
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct McToken {
    #[serde(default)]
    pub access_token: String,
    #[serde(default)]
    pub refresh_token: Option<String>,
    #[serde(default)]
    pub expires_in: Option<u64>,
}

/// Player profile (`GET /minecraft/profile`); a valid account without a
/// purchased game returns 404, which maps to `Ok(None)`.
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct MinecraftProfile {
    pub id: String,
    pub name: String,
    #[serde(default)]
    pub skins: Vec<ProfileTexture>,
    #[serde(default)]
    pub capes: Vec<ProfileTexture>,
}

impl MinecraftProfile {
    /// Dashless profile ids parse straight as UUIDs.
    pub fn uuid(&self) -> Option<uuid::Uuid> {
        uuid::Uuid::parse_str(&self.id).ok()
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct ProfileTexture {
    pub id: String,
    #[serde(default)]
    pub state: String,
    #[serde(default)]
    pub url: Option<String>,
}

/// Everything one successful sign-in yields.
#[derive(Debug, Clone)]
pub struct MicrosoftSession {
    pub msa: MsaToken,
    pub xbl: XboxToken,
    pub mc: McToken,
    pub profile: Option<MinecraftProfile>,
}

// ---- private response shapes ----

#[derive(Deserialize)]
struct XblAuthResponse {
    #[serde(rename = "Token")]
    token: String,
    #[serde(rename = "DisplayClaims")]
    claims: XblClaims,
}

#[derive(Deserialize)]
struct XblClaims {
    #[serde(rename = "xui")]
    xui: Vec<XuiClaim>,
}

#[derive(Deserialize)]
struct XuiClaim {
    uhs: String,
}

/// Device-flow client. Cloneable; every base URL can be retargeted (tests use
/// loopback addresses, deployments can point at proxies).
#[derive(Debug, Clone)]
pub struct MicrosoftAuth {
    client: reqwest::Client,
    /// Public OAuth application id; never a secret, but always replaceable.
    pub client_id: String,
    /// `.../oauth2/v2.0` base of the tenant (ends without a slash).
    pub msa_base: String,
    pub xbl_base: String,
    pub xsts_base: String,
    pub mc_base: String,
}

impl MicrosoftAuth {
    pub fn new(client_id: impl Into<String>) -> Self {
        Self::with_client(reqwest::Client::new(), client_id)
    }

    pub fn with_client(client: reqwest::Client, client_id: impl Into<String>) -> Self {
        Self {
            client,
            client_id: client_id.into(),
            msa_base: MSA_DEFAULT_BASE.to_owned(),
            xbl_base: XBL_DEFAULT_BASE.to_owned(),
            xsts_base: XSTS_DEFAULT_BASE.to_owned(),
            mc_base: MC_DEFAULT_BASE.to_owned(),
        }
    }

    /// Asks Microsoft for a device code the user enters at
    /// `https://www.microsoft.com/link`.
    pub async fn request_device_code(&self) -> Result<DeviceCode, AuthError> {
        let url = format!("{}/devicecode", self.msa_base);
        let resp = self
            .client
            .post(&url)
            .form(&[
                ("client_id", self.client_id.as_str()),
                ("scope", DEVICE_SCOPE),
            ])
            .send()
            .await?;
        let status = resp.status();
        if !status.is_success() {
            return Err(AuthError::Status {
                url,
                status: status.as_u16(),
            });
        }
        Ok(resp.json::<DeviceCode>().await?)
    }

    /// One poll of the MSA token endpoint. Does **not** sleep — the caller
    /// spaces the calls (UI ticks, `run_device_flow`, …).
    pub async fn poll_once(&self, device: &DeviceCode) -> Result<DeviceFlowState, AuthError> {
        let url = format!("{}/token", self.msa_base);
        let resp = self
            .client
            .post(&url)
            .form(&[
                ("grant_type", "urn:ietf:params:oauth:grant-type:device_code"),
                ("device_code", device.device_code.as_str()),
                ("client_id", self.client_id.as_str()),
            ])
            .send()
            .await?;
        // AAD answers "still waiting" with HTTP 400; the body carries the error
        let json: serde_json::Value = resp.json().await?;
        match json.get("error").and_then(|e| e.as_str()) {
            None => Ok(DeviceFlowState::Completed(serde_json::from_value(json)?)),
            Some("authorization_pending") => Ok(DeviceFlowState::Pending),
            Some("slow_down") => Ok(DeviceFlowState::SlowDown),
            Some(other) => {
                let description = json
                    .get("error_description")
                    .and_then(|d| d.as_str())
                    .unwrap_or_default();
                Ok(DeviceFlowState::Failed(if description.is_empty() {
                    other.to_owned()
                } else {
                    format!("{other}: {description}")
                }))
            }
        }
    }

    /// Runs the poll loop to completion: waits `interval` seconds between
    /// polls, +5 on `slow_down`, bails on fatal errors, and honors
    /// `expires_in` when the code advertises one.
    pub async fn run_device_flow(&self, device: &DeviceCode) -> Result<MsaToken, AuthError> {
        let mut interval = std::time::Duration::from_secs(device.interval.max(1));
        let deadline = if device.expires_in > 0 {
            Some(tokio::time::Instant::now() + std::time::Duration::from_secs(device.expires_in))
        } else {
            None
        };
        loop {
            tokio::time::sleep(interval).await;
            if let Some(deadline) = deadline
                && tokio::time::Instant::now() >= deadline
            {
                return Err(AuthError::DeviceFlow("device code expired".into()));
            }
            match self.poll_once(device).await? {
                DeviceFlowState::Completed(token) => return Ok(token),
                DeviceFlowState::Pending => {}
                DeviceFlowState::SlowDown => interval += std::time::Duration::from_secs(5),
                DeviceFlowState::Failed(reason) => return Err(AuthError::DeviceFlow(reason)),
            }
        }
    }

    /// MSA refresh-token grant → fresh access (+ rotated refresh) token.
    pub async fn refresh_msa_token(&self, refresh_token: &str) -> Result<MsaToken, AuthError> {
        let url = format!("{}/token", self.msa_base);
        let resp = self
            .client
            .post(&url)
            .form(&[
                ("grant_type", "refresh_token"),
                ("refresh_token", refresh_token),
                ("client_id", self.client_id.as_str()),
            ])
            .send()
            .await?;
        let status = resp.status();
        let json: serde_json::Value = resp.json().await?;
        if !status.is_success() {
            let error = json
                .get("error")
                .and_then(|e| e.as_str())
                .unwrap_or("unknown_error");
            let description = json
                .get("error_description")
                .and_then(|d| d.as_str())
                .unwrap_or_default();
            return Err(AuthError::DeviceFlow(format!("{error}: {description}")));
        }
        Ok(serde_json::from_value(json)?)
    }

    /// Xbox Live user token: `RPS` ticket from the MSA access token.
    pub async fn xbl_authenticate(&self, msa_access_token: &str) -> Result<XboxToken, AuthError> {
        let url = format!("{}/user/authenticate", self.xbl_base);
        let body = serde_json::json!({
            "Properties": {
                "AuthMethod": "RPS",
                "SiteName": "user.auth.xboxlive.com",
                "RpsTicket": format!("d={msa_access_token}"),
            },
            "RelyingParty": "http://auth.xboxlive.com",
            "TokenType": "JWT",
        });
        self.xbox_post(&url, &body).await
    }

    /// XSTS authorization for the Minecraft relying party; `XErr` rejections
    /// (no profile, child account, country, ban…) surface as friendly errors.
    pub async fn xsts_authorize(&self, xbl_token: &str) -> Result<XboxToken, AuthError> {
        let url = format!("{}/xsts/authorize", self.xsts_base);
        let body = serde_json::json!({
            "Properties": {
                "SandboxId": "RETAIL",
                "UserTokens": [xbl_token],
            },
            "RelyingParty": "rp://api.minecraftservices.com/",
            "TokenType": "JWT",
        });
        self.xbox_post(&url, &body).await
    }

    async fn xbox_post(&self, url: &str, body: &serde_json::Value) -> Result<XboxToken, AuthError> {
        let resp = self
            .client
            .post(url)
            .header("x-xbl-contract-version", "1")
            .json(body)
            .send()
            .await?;
        let status = resp.status();
        let json: serde_json::Value = resp.json().await?;
        if !status.is_success() {
            if let Some(xerr) = json.get("XErr").and_then(|x| x.as_u64()) {
                return Err(AuthError::Xerr {
                    code: xerr,
                    message: xerr_message(xerr).to_owned(),
                });
            }
            return Err(AuthError::Status {
                url: url.to_owned(),
                status: status.as_u16(),
            });
        }
        let parsed: XblAuthResponse = serde_json::from_value(json)?;
        let uhs = parsed
            .claims
            .xui
            .first()
            .map(|c| c.uhs.clone())
            .ok_or_else(|| AuthError::DeviceFlow("Xbox response carries no user hash".into()))?;
        Ok(XboxToken {
            token: parsed.token,
            uhs,
        })
    }

    /// Minecraft Services login with the `XBL3.0 x=<uhs>;<xsts>` identity.
    pub async fn login_with_minecraft(
        &self,
        xbl: &XboxToken,
        xsts_token: &str,
    ) -> Result<McToken, AuthError> {
        let url = format!("{}/authentication/login_with_xbox", self.mc_base);
        let body = serde_json::json!({
            "identityToken": format!("XBL3.0 x={};{}", xbl.uhs, xsts_token),
        });
        let resp = self.client.post(&url).json(&body).send().await?;
        let status = resp.status();
        if !status.is_success() {
            return Err(AuthError::Status {
                url,
                status: status.as_u16(),
            });
        }
        Ok(resp.json::<McToken>().await?)
    }

    /// The player profile; 404 means the account is valid but owns no game.
    pub async fn profile(
        &self,
        mc_access_token: &str,
    ) -> Result<Option<MinecraftProfile>, AuthError> {
        let url = format!("{}/minecraft/profile", self.mc_base);
        let resp = self
            .client
            .get(&url)
            .bearer_auth(mc_access_token)
            .send()
            .await?;
        match resp.status() {
            reqwest::StatusCode::NOT_FOUND => Ok(None),
            status if !status.is_success() => Err(AuthError::Status {
                url,
                status: status.as_u16(),
            }),
            _ => Ok(Some(resp.json::<MinecraftProfile>().await?)),
        }
    }

    /// Completes the whole chain after a successful device-flow poll.
    pub async fn complete_device_flow(
        &self,
        device: &DeviceCode,
    ) -> Result<MicrosoftSession, AuthError> {
        let msa = self.run_device_flow(device).await?;
        self.finish_login(msa).await
    }

    /// Refreshes the MSA token and replays the Xbox/Minecraft chain.
    pub async fn refresh_session(
        &self,
        refresh_token: &str,
    ) -> Result<MicrosoftSession, AuthError> {
        let msa = self.refresh_msa_token(refresh_token).await?;
        self.finish_login(msa).await
    }

    async fn finish_login(&self, msa: MsaToken) -> Result<MicrosoftSession, AuthError> {
        let xbl = self.xbl_authenticate(&msa.access_token).await?;
        let xsts = self.xsts_authorize(&xbl.token).await?;
        let mc = self.login_with_minecraft(&xbl, &xsts.token).await?;
        let profile = self.profile(&mc.access_token).await?;
        Ok(MicrosoftSession {
            msa,
            xbl,
            mc,
            profile,
        })
    }
}

/// Human-friendly text for the documented XSTS `XErr` codes.
pub fn xerr_message(xerr: u64) -> &'static str {
    match xerr {
        2148916227 => "the Xbox account is banned",
        2148916229 => "guardian consent is required for this account",
        2148916233 => "this account has no Xbox profile (create one at xbox.com first)",
        2148916234 => "the Xbox Terms of Service were not accepted",
        2148916235 => "Minecraft is not available in this country or region",
        2148916236 => "proof of age is required for this account",
        2148916237 => "the account reached its playtime limit",
        2148916238 => "this is a child account; add it to a family group first",
        _ => "unknown Xbox authorization error",
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_http::{spawn, static_routes};
    use std::collections::HashMap;

    const DEVICE_JSON: &str = r#"{
        "device_code": "DEV123", "user_code": "ABCD-1234",
        "verification_uri": "https://www.microsoft.com/link",
        "expires_in": 900, "interval": 0
    }"#;
    const MSA_JSON: &str = r#"{
        "token_type": "Bearer", "scope": "XboxLive.SignIn XboxLive.offline_access",
        "expires_in": 3600, "access_token": "msa-access", "refresh_token": "msa-refresh"
    }"#;
    const XBL_JSON: &str = r#"{
        "Token": "xbl-token",
        "DisplayClaims": { "xui": [ { "uhs": "uhs-42" } ] }
    }"#;
    const XSTS_JSON: &str = r#"{
        "Token": "xsts-token",
        "DisplayClaims": { "xui": [ { "uhs": "uhs-42" } ] }
    }"#;
    const MC_JSON: &str = r#"{ "access_token": "mc-access", "expires_in": 86400 }"#;
    const PROFILE_JSON: &str = r#"{
        "id": "d8d5a92339b138b0f0aaa176b3fdb918", "name": "Notch",
        "skins": [ { "id": "s1", "state": "ACTIVE",
                     "url": "https://textures.minecraft.net/texture/skin" } ],
        "capes": []
    }"#;

    fn auth(addr: &std::net::SocketAddr) -> MicrosoftAuth {
        let base = format!("http://{addr}");
        let mut auth = MicrosoftAuth::with_client(reqwest::Client::new(), "test-client-id");
        auth.msa_base = base.clone();
        auth.xbl_base = base.clone();
        auth.xsts_base = base.clone();
        auth.mc_base = base;
        auth
    }

    #[tokio::test]
    async fn device_code_request_parses() {
        let addr = spawn(static_routes(&[("devicecode", 200, DEVICE_JSON)]))
            .await
            .addr;
        let device = auth(&addr).request_device_code().await.unwrap();
        assert_eq!(device.device_code, "DEV123");
        assert_eq!(device.user_code, "ABCD-1234");
        assert_eq!(device.verification_uri, "https://www.microsoft.com/link");
        assert_eq!(device.interval, 0);
    }

    #[tokio::test]
    async fn poll_state_machine_pending_slow_down_completed() {
        let routes = HashMap::from([
            (
                "token".to_owned(),
                vec![
                    (400u16, br#"{"error": "authorization_pending"}"#.to_vec()),
                    (
                        400u16,
                        br#"{"error": "slow_down", "error_description": "slow it down"}"#.to_vec(),
                    ),
                    (200u16, MSA_JSON.as_bytes().to_vec()),
                ],
            ),
            (
                "devicecode".to_owned(),
                vec![(200u16, DEVICE_JSON.as_bytes().to_vec())],
            ),
        ]);
        let addr = spawn(routes).await.addr;
        let auth = auth(&addr);
        let device = auth.request_device_code().await.unwrap();
        assert_eq!(
            auth.poll_once(&device).await.unwrap(),
            DeviceFlowState::Pending
        );
        assert_eq!(
            auth.poll_once(&device).await.unwrap(),
            DeviceFlowState::SlowDown
        );
        assert_eq!(
            auth.poll_once(&device).await.unwrap(),
            DeviceFlowState::Completed(serde_json::from_str(MSA_JSON).unwrap())
        );
        // the full loop finishes too: the success response now repeats and the
        // interval-0 code makes the loop sleep only the 1s safety minimum
        let msa = auth.run_device_flow(&device).await.unwrap();
        assert_eq!(msa.access_token, "msa-access");
        assert_eq!(msa.refresh_token, "msa-refresh");
    }

    #[tokio::test]
    async fn failed_poll_surfaces_the_reason() {
        let routes = HashMap::from([(
            "token".to_owned(),
            vec![(
                400u16,
                br#"{"error": "authorization_declined", "error_description": "nope"}"#.to_vec(),
            )],
        )]);
        let addr = spawn(routes).await.addr;
        let device = DeviceCode {
            device_code: "DEV123".into(),
            user_code: "X".into(),
            verification_uri: "https://x".into(),
            verification_uri_complete: None,
            expires_in: 0,
            interval: 0,
        };
        match auth(&addr).poll_once(&device).await.unwrap() {
            DeviceFlowState::Failed(reason) => {
                assert_eq!(reason, "authorization_declined: nope");
            }
            other => panic!("wrong state: {other:?}"),
        }
    }

    #[tokio::test]
    async fn full_chain_reaches_the_profile() {
        let addr = spawn(static_routes(&[
            ("user/authenticate", 200, XBL_JSON),
            ("xsts/authorize", 200, XSTS_JSON),
            ("authentication/login_with_xbox", 200, MC_JSON),
            ("minecraft/profile", 200, PROFILE_JSON),
        ]))
        .await
        .addr;
        let auth = auth(&addr);
        let xbl = auth.xbl_authenticate("msa-access").await.unwrap();
        assert_eq!(xbl.token, "xbl-token");
        assert_eq!(xbl.uhs, "uhs-42");
        let xsts = auth.xsts_authorize(&xbl.token).await.unwrap();
        let mc = auth.login_with_minecraft(&xbl, &xsts.token).await.unwrap();
        assert_eq!(mc.access_token, "mc-access");
        let profile = auth.profile(&mc.access_token).await.unwrap().unwrap();
        assert_eq!(profile.name, "Notch");
        assert_eq!(
            profile.uuid().unwrap().to_string(),
            "d8d5a923-39b1-38b0-f0aa-a176b3fdb918"
        );
        assert_eq!(
            profile.skins[0].url.as_deref(),
            Some("https://textures.minecraft.net/texture/skin")
        );
    }

    #[tokio::test]
    async fn xerr_maps_to_a_friendly_message() {
        let addr = spawn(static_routes(&[(
            "xsts/authorize",
            401,
            r#"{ "Identity": 0, "XErr": 2148916233 }"#,
        )]))
        .await
        .addr;
        let err = auth(&addr).xsts_authorize("xbl-token").await.unwrap_err();
        match err {
            AuthError::Xerr { code, message } => {
                assert_eq!(code, 2148916233);
                assert!(message.contains("no Xbox profile"), "got: {message}");
            }
            other => panic!("wrong error: {other:?}"),
        }
    }

    #[tokio::test]
    async fn profile_404_means_valid_account_without_game() {
        let addr = spawn(static_routes(&[("minecraft/profile", 404, "{}")]))
            .await
            .addr;
        assert!(auth(&addr).profile("mc-access").await.unwrap().is_none());
    }

    #[tokio::test]
    async fn refresh_grant_returns_a_fresh_token() {
        let addr = spawn(static_routes(&[("token", 200, MSA_JSON)])).await.addr;
        let msa = auth(&addr).refresh_msa_token("old-refresh").await.unwrap();
        assert_eq!(msa.access_token, "msa-access");
        assert_eq!(msa.refresh_token, "msa-refresh");
    }

    #[tokio::test]
    async fn complete_device_flow_walks_every_step() {
        // token: pending ×2 then success; every following step static
        let routes = HashMap::from([
            (
                "devicecode".to_owned(),
                vec![(200u16, DEVICE_JSON.as_bytes().to_vec())],
            ),
            (
                "token".to_owned(),
                vec![
                    (400u16, br#"{"error": "authorization_pending"}"#.to_vec()),
                    (400u16, br#"{"error": "authorization_pending"}"#.to_vec()),
                    (200u16, MSA_JSON.as_bytes().to_vec()),
                ],
            ),
            (
                "user/authenticate".to_owned(),
                vec![(200u16, XBL_JSON.as_bytes().to_vec())],
            ),
            (
                "xsts/authorize".to_owned(),
                vec![(200u16, XSTS_JSON.as_bytes().to_vec())],
            ),
            (
                "authentication/login_with_xbox".to_owned(),
                vec![(200u16, MC_JSON.as_bytes().to_vec())],
            ),
            (
                "minecraft/profile".to_owned(),
                vec![(200u16, PROFILE_JSON.as_bytes().to_vec())],
            ),
        ]);
        let addr = spawn(routes).await.addr;
        let auth = auth(&addr);
        let device = auth.request_device_code().await.unwrap();
        let session = auth.complete_device_flow(&device).await.unwrap();
        assert_eq!(session.msa.access_token, "msa-access");
        assert_eq!(session.xbl.uhs, "uhs-42");
        assert_eq!(session.mc.access_token, "mc-access");
        assert_eq!(session.profile.as_ref().unwrap().name, "Notch");
    }

    #[test]
    fn xerr_message_covers_documented_codes() {
        for code in [
            2148916227, 2148916229, 2148916233, 2148916234, 2148916235, 2148916236, 2148916237,
            2148916238,
        ] {
            assert!(!xerr_message(code).is_empty());
        }
        assert_eq!(xerr_message(1), "unknown Xbox authorization error");
    }
}
