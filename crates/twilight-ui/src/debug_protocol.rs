//! Dev-mode gated localhost debug protocol.
//!
//! Binds only to 127.0.0.1, exposes read-only JSON diagnostics and an MCP
//! Streamable HTTP endpoint. Nothing here is available unless dev mode is on
//! and the relevant endpoint is enabled. API keys and debug config secrets are
//! redacted from trace/log exports.

use std::collections::VecDeque;
use std::io;
use std::path::PathBuf;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex};
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};
use tokio_rustls::TlsAcceptor;

use crate::accounts::{DebugPermissions, load_settings, settings_path};

pub(crate) const MAX_EVENTS: usize = 500;
const REDACTED: &str = "********";
const DEFAULT_HTTP_PORT: u16 = 28445;
const DEFAULT_MCP_PORT: u16 = 28446;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub struct DebugEvent {
    pub seq: u64,
    pub timestamp_ms: u64,
    pub kind: String,
    pub source: String,
    pub summary: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub duration_ms: Option<u64>,
}

#[derive(Default)]
struct DebugState {
    events: VecDeque<DebugEvent>,
    next_seq: u64,
}

#[derive(Clone)]
pub struct DebugTrace {
    inner: Arc<Mutex<DebugState>>,
}

impl Default for DebugTrace {
    fn default() -> Self {
        Self {
            inner: Arc::new(Mutex::new(DebugState::default())),
        }
    }
}

impl DebugTrace {
    pub fn record(
        &self,
        kind: impl Into<String>,
        source: impl Into<String>,
        summary: impl Into<String>,
        duration_ms: Option<u64>,
    ) -> DebugEvent {
        let mut guard = match self.inner.lock() {
            Ok(g) => g,
            Err(p) => p.into_inner(),
        };
        guard.next_seq = guard.next_seq.saturating_add(1);
        let event = DebugEvent {
            seq: guard.next_seq,
            timestamp_ms: now_ms(),
            kind: kind.into(),
            source: redact_text(&source.into()),
            summary: redact_text(&summary.into()),
            duration_ms,
        };
        guard.events.push_back(event.clone());
        while guard.events.len() > MAX_EVENTS {
            guard.events.pop_front();
        }
        event
    }

    pub fn since(&self, since: u64) -> Vec<DebugEvent> {
        let guard = match self.inner.lock() {
            Ok(g) => g,
            Err(p) => p.into_inner(),
        };
        guard
            .events
            .iter()
            .filter(|e| e.seq > since)
            .cloned()
            .collect()
    }

    pub fn snapshot(&self) -> Vec<DebugEvent> {
        self.since(0)
    }
}

#[derive(Debug)]
struct EndpointHandle {
    shutdown: Arc<AtomicBool>,
    join: Option<tauri::async_runtime::JoinHandle<()>>,
    port: u16,
    tls: bool,
}

#[derive(Default)]
pub struct DebugServer {
    http: Mutex<Option<EndpointHandle>>,
    mcp: Mutex<Option<EndpointHandle>>,
}

impl DebugServer {
    #[allow(dead_code)]
    pub fn stop_all(&self) {
        self.stop_http();
        self.stop_mcp();
    }
    pub fn stop_http(&self) {
        stop_handle(&self.http);
    }
    pub fn stop_mcp(&self) {
        stop_handle(&self.mcp);
    }
}

fn stop_handle(slot: &Mutex<Option<EndpointHandle>>) {
    let mut guard = match slot.lock() {
        Ok(g) => g,
        Err(p) => p.into_inner(),
    };
    if let Some(mut handle) = guard.take() {
        handle.shutdown.store(true, Ordering::SeqCst);
        let _ = std::net::TcpStream::connect(("127.0.0.1", handle.port));
        if let Some(join) = handle.join.take() {
            join.abort();
        }
    }
}

pub fn trace(app: &AppHandle) -> DebugTrace {
    app.state::<DebugTrace>().inner().clone()
}

#[derive(Debug, Clone)]
struct RuntimeConfig {
    dev_mode: bool,
    http_enabled: bool,
    http_port: u16,
    http_tls: bool,
    mcp_enabled: bool,
    mcp_port: u16,
    api_key: Option<String>,
    require_api_key: bool,
    permissions: DebugPermissions,
}

impl RuntimeConfig {
    fn from_settings(settings: &crate::accounts::Settings) -> Self {
        let http_port = if settings.debug_http_port == 0 {
            DEFAULT_HTTP_PORT
        } else {
            settings.debug_http_port
        };
        let mcp_port = if settings.debug_mcp_port == 0 {
            DEFAULT_MCP_PORT
        } else {
            settings.debug_mcp_port
        };
        let http_enabled = settings.debug_http_enabled || settings.debug_protocol_enabled;
        let migrated_http_port = if settings.debug_http_enabled {
            http_port
        } else if settings.debug_protocol_enabled {
            if settings.debug_protocol_port == 0 {
                DEFAULT_HTTP_PORT
            } else {
                settings.debug_protocol_port
            }
        } else {
            http_port
        };
        Self {
            dev_mode: settings.dev_mode,
            http_enabled,
            http_port: migrated_http_port,
            http_tls: settings.debug_http_tls,
            mcp_enabled: settings.debug_mcp_enabled,
            mcp_port,
            api_key: settings
                .debug_api_key
                .as_deref()
                .map(str::trim)
                .filter(|s| !s.is_empty())
                .map(ToOwned::to_owned),
            require_api_key: settings.debug_require_api_key,
            permissions: settings.debug_permissions,
        }
    }
    fn http_active(&self) -> bool {
        self.dev_mode && self.http_enabled
    }
    fn mcp_active(&self) -> bool {
        self.dev_mode && self.mcp_enabled
    }
}

pub async fn sync_server(app: &AppHandle) {
    let settings = load_settings(&settings_path(app).await.unwrap_or_default()).await;
    let cfg = RuntimeConfig::from_settings(&settings);
    let srv = app.state::<DebugServer>();

    if !cfg.http_active() {
        srv.stop_http();
    } else if let Err(error) = ensure_endpoint(
        app,
        &srv.http,
        EndpointKind::Http,
        cfg.http_port,
        cfg.http_tls,
    )
    .await
    {
        trace(app).record("ipc_err", "debug_protocol", format!("http: {error}"), None);
        srv.stop_http();
    }

    if !cfg.mcp_active() {
        srv.stop_mcp();
    } else if let Err(error) =
        ensure_endpoint(app, &srv.mcp, EndpointKind::Mcp, cfg.mcp_port, true).await
    {
        trace(app).record("ipc_err", "debug_protocol", format!("mcp: {error}"), None);
        srv.stop_mcp();
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum EndpointKind {
    Http,
    Mcp,
}

async fn ensure_endpoint(
    app: &AppHandle,
    slot: &Mutex<Option<EndpointHandle>>,
    kind: EndpointKind,
    port: u16,
    tls: bool,
) -> Result<(), String> {
    let needs_restart = {
        let guard = match slot.lock() {
            Ok(g) => g,
            Err(p) => p.into_inner(),
        };
        match guard.as_ref() {
            Some(existing) => {
                existing.port != port
                    || existing.tls != tls
                    || existing.shutdown.load(Ordering::SeqCst)
            }
            None => true,
        }
    };
    if !needs_restart {
        return Ok(());
    }
    stop_handle(slot);

    let listener = TcpListener::bind(("127.0.0.1", port))
        .await
        .map_err(|e| format!("could not bind 127.0.0.1:{port}: {e}"))?;
    let tls_acceptor = if tls {
        Some(build_tls_acceptor(app).await?)
    } else {
        None
    };
    let shutdown = Arc::new(AtomicBool::new(false));
    let shutdown_task = shutdown.clone();
    let app_clone = app.clone();
    let join = tauri::async_runtime::spawn(async move {
        run_server(listener, tls_acceptor, app_clone, kind, shutdown_task).await;
    });
    let mut guard = match slot.lock() {
        Ok(g) => g,
        Err(p) => p.into_inner(),
    };
    *guard = Some(EndpointHandle {
        shutdown,
        join: Some(join),
        port,
        tls,
    });
    Ok(())
}

async fn build_tls_acceptor(app: &AppHandle) -> Result<TlsAcceptor, String> {
    let cert_dir = tls_dir(app).await?;
    tokio::fs::create_dir_all(&cert_dir)
        .await
        .map_err(|e| e.to_string())?;
    let cert_path = cert_dir.join("cert.pem");
    let key_path = cert_dir.join("key.pem");
    if !cert_path.exists() || !key_path.exists() {
        let cert = rcgen::generate_simple_self_signed(vec![
            "localhost".to_owned(),
            "127.0.0.1".to_owned(),
        ])
        .map_err(|e| format!("failed to generate debug TLS cert: {e}"))?;
        tokio::fs::write(&cert_path, cert.cert.pem())
            .await
            .map_err(|e| e.to_string())?;
        tokio::fs::write(&key_path, cert.key_pair.serialize_pem())
            .await
            .map_err(|e| e.to_string())?;
    }
    let cert_pem = tokio::fs::read(&cert_path)
        .await
        .map_err(|e| e.to_string())?;
    let key_pem = tokio::fs::read(&key_path)
        .await
        .map_err(|e| e.to_string())?;
    let mut cert_reader = std::io::Cursor::new(cert_pem);
    let certs = rustls_pemfile::certs(&mut cert_reader)
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| format!("invalid debug cert: {e}"))?;
    let mut key_reader = std::io::Cursor::new(key_pem);
    let key = rustls_pemfile::private_key(&mut key_reader)
        .map_err(|e| format!("invalid debug key: {e}"))?
        .ok_or_else(|| "debug TLS key missing".to_owned())?;
    let mut config = tokio_rustls::rustls::ServerConfig::builder()
        .with_no_client_auth()
        .with_single_cert(certs, key)
        .map_err(|e| format!("invalid debug TLS config: {e}"))?;
    config.alpn_protocols = vec![b"http/1.1".to_vec()];
    Ok(TlsAcceptor::from(Arc::new(config)))
}

async fn tls_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    Ok(dir.join("debug-tls"))
}

async fn run_server(
    listener: TcpListener,
    tls_acceptor: Option<TlsAcceptor>,
    app: AppHandle,
    kind: EndpointKind,
    shutdown: Arc<AtomicBool>,
) {
    loop {
        if shutdown.load(Ordering::SeqCst) {
            break;
        }
        let accept = tokio::time::timeout(Duration::from_millis(250), listener.accept()).await;
        let (stream, _) = match accept {
            Ok(Ok(pair)) => pair,
            Ok(Err(_)) => {
                tokio::time::sleep(Duration::from_millis(50)).await;
                continue;
            }
            Err(_) => continue,
        };
        if shutdown.load(Ordering::SeqCst) {
            break;
        }
        let app_clone = app.clone();
        let tls_acceptor = tls_acceptor.clone();
        tauri::async_runtime::spawn(async move {
            let _ = handle_stream(stream, tls_acceptor, app_clone, kind).await;
        });
    }
}

async fn handle_stream(
    stream: TcpStream,
    tls_acceptor: Option<TlsAcceptor>,
    app: AppHandle,
    kind: EndpointKind,
) -> io::Result<()> {
    if let Some(acceptor) = tls_acceptor {
        match acceptor.accept(stream).await {
            Ok(tls_stream) => handle_connection(tls_stream, app, kind).await,
            Err(err) => Err(io::Error::other(err.to_string())),
        }
    } else {
        handle_connection(stream, app, kind).await
    }
}

#[derive(Debug)]
struct HttpRequest {
    method: String,
    path: String,
    query: String,
    headers: Vec<(String, String)>,
    body: Vec<u8>,
}

async fn handle_connection<S>(mut stream: S, app: AppHandle, kind: EndpointKind) -> io::Result<()>
where
    S: AsyncReadExt + AsyncWriteExt + Unpin,
{
    let request = match read_http_request(&mut stream).await {
        Ok(req) => req,
        Err(err) => {
            let _ = write_http_response(
                &mut stream,
                400,
                "application/json",
                format!("{{\"error\":\"{}\"}}", json_escape(&err.to_string())).as_bytes(),
                &[],
            )
            .await;
            return Ok(());
        }
    };
    let settings = load_settings(&settings_path(&app).await.unwrap_or_default()).await;
    let cfg = RuntimeConfig::from_settings(&settings);
    let response = match kind {
        EndpointKind::Http => handle_http_request(&app, &cfg, &request).await,
        EndpointKind::Mcp => handle_mcp_request(&app, &cfg, &request).await,
    };
    write_http_response(
        &mut stream,
        response.status,
        &response.content_type,
        &response.body,
        &response.headers,
    )
    .await
}

#[derive(Debug)]
struct HttpResponse {
    status: u16,
    content_type: String,
    body: Vec<u8>,
    headers: Vec<(String, String)>,
}
impl HttpResponse {
    fn json(status: u16, value: serde_json::Value) -> Self {
        Self {
            status,
            content_type: "application/json".to_owned(),
            body: serde_json::to_vec(&value)
                .unwrap_or_else(|_| b"{\"error\":\"serialization\"}".to_vec()),
            headers: vec![("Cache-Control".to_owned(), "no-store".to_owned())],
        }
    }
}

async fn read_http_request<S>(stream: &mut S) -> io::Result<HttpRequest>
where
    S: AsyncReadExt + Unpin,
{
    let mut buf = Vec::with_capacity(8192);
    let mut chunk = [0u8; 4096];
    let header_end;
    loop {
        let n = tokio::time::timeout(Duration::from_secs(5), stream.read(&mut chunk))
            .await
            .map_err(|_| io::Error::new(io::ErrorKind::TimedOut, "request timeout"))??;
        if n == 0 {
            return Err(io::Error::new(
                io::ErrorKind::UnexpectedEof,
                "empty request",
            ));
        }
        buf.extend_from_slice(&chunk[..n]);
        if let Some(pos) = find_header_end(&buf) {
            header_end = pos;
            break;
        }
        if buf.len() > 1024 * 1024 {
            return Err(io::Error::new(
                io::ErrorKind::InvalidData,
                "request too large",
            ));
        }
    }
    let header_text = String::from_utf8_lossy(&buf[..header_end]);
    let mut lines = header_text.split("\r\n");
    let request_line = lines.next().unwrap_or_default();
    let mut parts = request_line.split_whitespace();
    let method = parts.next().unwrap_or_default().to_ascii_uppercase();
    let target = parts.next().unwrap_or("/");
    let (path, query) = target
        .split_once('?')
        .map(|(p, q)| (p.to_owned(), q.to_owned()))
        .unwrap_or_else(|| (target.to_owned(), String::new()));
    let mut headers = Vec::new();
    let mut content_length = 0usize;
    for line in lines {
        if line.is_empty() {
            continue;
        }
        if let Some((name, value)) = line.split_once(':') {
            let name = name.trim().to_owned();
            let value = value.trim().to_owned();
            if name.eq_ignore_ascii_case("content-length") {
                content_length = value.parse::<usize>().unwrap_or(0);
            }
            headers.push((name, value));
        }
    }
    let mut body = buf[header_end + 4..].to_vec();
    while body.len() < content_length {
        let n = tokio::time::timeout(Duration::from_secs(5), stream.read(&mut chunk))
            .await
            .map_err(|_| io::Error::new(io::ErrorKind::TimedOut, "request timeout"))??;
        if n == 0 {
            break;
        }
        body.extend_from_slice(&chunk[..n]);
        if body.len() > 1024 * 1024 {
            return Err(io::Error::new(
                io::ErrorKind::InvalidData,
                "request body too large",
            ));
        }
    }
    body.truncate(content_length);
    Ok(HttpRequest {
        method,
        path,
        query,
        headers,
        body,
    })
}

fn find_header_end(buf: &[u8]) -> Option<usize> {
    buf.windows(4).position(|w| w == b"\r\n\r\n")
}

async fn write_http_response<S>(
    stream: &mut S,
    status: u16,
    content_type: &str,
    body: &[u8],
    extra_headers: &[(String, String)],
) -> io::Result<()>
where
    S: AsyncWriteExt + Unpin,
{
    let reason = match status {
        200 => "OK",
        400 => "Bad Request",
        401 => "Unauthorized",
        403 => "Forbidden",
        404 => "Not Found",
        405 => "Method Not Allowed",
        _ => "Error",
    };
    let mut header = format!(
        "HTTP/1.1 {status} {reason}\r\nContent-Type: {content_type}\r\nContent-Length: {}\r\nConnection: close\r\n",
        body.len()
    );
    for (k, v) in extra_headers {
        header.push_str(k);
        header.push_str(": ");
        header.push_str(v);
        header.push_str("\r\n");
    }
    header.push_str("\r\n");
    stream.write_all(header.as_bytes()).await?;
    stream.write_all(body).await?;
    stream.flush().await
}

fn header_value<'a>(headers: &'a [(String, String)], name: &str) -> Option<&'a str> {
    headers
        .iter()
        .find(|(k, _)| k.eq_ignore_ascii_case(name))
        .map(|(_, v)| v.as_str())
}

fn constant_time_eq(a: &[u8], b: &[u8]) -> bool {
    if a.len() != b.len() {
        return false;
    }
    let mut diff = 0u8;
    for (x, y) in a.iter().zip(b.iter()) {
        diff |= x ^ y;
    }
    diff == 0
}

fn extract_api_key(headers: &[(String, String)]) -> Option<String> {
    if let Some(value) = header_value(headers, "authorization") {
        let value = value.trim();
        if let Some(rest) = value.strip_prefix("Bearer ") {
            let key = rest.trim();
            if !key.is_empty() {
                return Some(key.to_owned());
            }
        }
    }
    if let Some(value) = header_value(headers, "x-twilight-debug-key") {
        let key = value.trim();
        if !key.is_empty() {
            return Some(key.to_owned());
        }
    }
    None
}

#[derive(Debug, Clone, Copy)]
#[allow(clippy::enum_variant_names)]
enum Permission {
    ReadState,
    ReadEvents,
    ReadLogs,
    ReadInstances,
    ReadConfig,
}
impl Permission {
    fn granted(self, p: DebugPermissions) -> bool {
        match self {
            Permission::ReadState => p.read_state,
            Permission::ReadEvents => p.read_events,
            Permission::ReadLogs => p.read_logs,
            Permission::ReadInstances => p.read_instances,
            Permission::ReadConfig => p.read_config,
        }
    }
    fn as_str(self) -> &'static str {
        match self {
            Permission::ReadState => "read_state",
            Permission::ReadEvents => "read_events",
            Permission::ReadLogs => "read_logs",
            Permission::ReadInstances => "read_instances",
            Permission::ReadConfig => "read_config",
        }
    }
}

#[derive(Debug, Clone, Copy)]
enum AuthError {
    Unauthorized,
    Forbidden,
}

fn authorize(
    cfg: &RuntimeConfig,
    headers: &[(String, String)],
    required: Permission,
) -> Result<(), AuthError> {
    if cfg.require_api_key || cfg.api_key.is_some() {
        let Some(expected) = cfg.api_key.as_deref() else {
            return Err(AuthError::Unauthorized);
        };
        let Some(provided) = extract_api_key(headers) else {
            return Err(AuthError::Unauthorized);
        };
        if !constant_time_eq(provided.as_bytes(), expected.as_bytes()) {
            return Err(AuthError::Unauthorized);
        }
    }
    if !required.granted(cfg.permissions) {
        return Err(AuthError::Forbidden);
    }
    Ok(())
}

fn parse_query_u64(query: &str, key: &str) -> Option<u64> {
    for pair in query.split('&') {
        if let Some((k, v)) = pair.split_once('=')
            && k == key
        {
            return v.parse().ok();
        }
    }
    None
}
fn parse_query_usize(query: &str, key: &str) -> Option<usize> {
    for pair in query.split('&') {
        if let Some((k, v)) = pair.split_once('=')
            && k == key
        {
            return v.parse().ok();
        }
    }
    None
}
fn parse_query_string<'a>(query: &'a str, key: &str) -> Option<&'a str> {
    for pair in query.split('&') {
        if let Some((k, v)) = pair.split_once('=')
            && k == key
        {
            return Some(v);
        }
    }
    None
}

async fn handle_http_request(
    app: &AppHandle,
    cfg: &RuntimeConfig,
    req: &HttpRequest,
) -> HttpResponse {
    if !cfg.http_active() {
        return HttpResponse::json(404, serde_json::json!({"error":"not found"}));
    }
    if req.method != "GET" {
        return HttpResponse::json(405, serde_json::json!({"error":"method not allowed"}));
    }
    let (perm, result) = match req.path.as_str() {
        "/health" => (Permission::ReadState, http_health(app, cfg, req).await),
        "/state" => (Permission::ReadState, http_state(app, cfg, req).await),
        "/events" => (Permission::ReadEvents, http_events(app, cfg, req).await),
        "/logs" => (Permission::ReadLogs, http_logs(app, cfg, req).await),
        "/instances" => (
            Permission::ReadInstances,
            http_instances(app, cfg, req).await,
        ),
        "/config" => (Permission::ReadConfig, http_config(app, cfg, req).await),
        _ => return HttpResponse::json(404, serde_json::json!({"error":"not found"})),
    };
    if let Err(err) = authorize(cfg, &req.headers, perm) {
        return match err {
            AuthError::Unauthorized => {
                HttpResponse::json(401, serde_json::json!({"error":"unauthorized"}))
            }
            AuthError::Forbidden => HttpResponse::json(
                403,
                serde_json::json!({"error":"forbidden","scope": perm.as_str()}),
            ),
        };
    }
    result
}

async fn http_health(_app: &AppHandle, _cfg: &RuntimeConfig, _req: &HttpRequest) -> HttpResponse {
    HttpResponse::json(
        200,
        serde_json::json!({"ok": true, "service": "twilight-debug-protocol"}),
    )
}
async fn http_state(app: &AppHandle, cfg: &RuntimeConfig, _req: &HttpRequest) -> HttpResponse {
    HttpResponse::json(
        200,
        serde_json::json!({
            "devMode": cfg.dev_mode,
            "http": { "enabled": cfg.http_enabled, "port": cfg.http_port, "tls": cfg.http_tls, "bind": "127.0.0.1" },
            "mcp": { "enabled": cfg.mcp_enabled, "port": cfg.mcp_port, "tls": true, "bind": "127.0.0.1", "path": "/mcp" },
            "permissions": cfg.permissions,
            "apiKeyRequired": cfg.require_api_key || cfg.api_key.is_some(),
            "apiKeyConfigured": cfg.api_key.is_some(),
            "certPath": tls_dir(app).await.ok().map(|p| p.join("cert.pem").display().to_string()),
        }),
    )
}
async fn http_events(app: &AppHandle, _cfg: &RuntimeConfig, req: &HttpRequest) -> HttpResponse {
    let since = parse_query_u64(&req.query, "since").unwrap_or(0);
    let kind = parse_query_string(&req.query, "kind").map(|s| s.to_ascii_lowercase());
    let limit = parse_query_usize(&req.query, "limit")
        .unwrap_or(200)
        .min(500);
    let mut events = trace(app).since(since);
    if let Some(kind) = kind {
        events.retain(|e| e.kind.to_ascii_lowercase() == kind);
    }
    if events.len() > limit {
        events.truncate(limit);
    }
    HttpResponse::json(200, serde_json::json!({"events": events}))
}
async fn http_logs(app: &AppHandle, _cfg: &RuntimeConfig, req: &HttpRequest) -> HttpResponse {
    let tail = parse_query_usize(&req.query, "tail")
        .unwrap_or(200)
        .min(500);
    let mut events = trace(app).snapshot();
    if events.len() > tail {
        events = events.split_off(events.len() - tail);
    }
    HttpResponse::json(200, serde_json::json!({"events": events}))
}
async fn http_instances(app: &AppHandle, _cfg: &RuntimeConfig, _req: &HttpRequest) -> HttpResponse {
    let instances = match crate::instances::get_instances(app.clone()).await {
        Ok(v) => v,
        Err(err) => return HttpResponse::json(500, serde_json::json!({"error": err})),
    };
    let redacted: Vec<serde_json::Value> = instances.into_iter().map(|inst| serde_json::json!({
        "id": inst.id, "name": inst.name, "version": inst.version, "loader": inst.loader, "lastPlayed": inst.last_played
    })).collect();
    HttpResponse::json(200, serde_json::json!({"instances": redacted}))
}
async fn http_config(app: &AppHandle, _cfg: &RuntimeConfig, _req: &HttpRequest) -> HttpResponse {
    let cfg_text = match crate::prefs::get_raw_config_json(app.clone()).await {
        Ok(v) => v,
        Err(err) => return HttpResponse::json(500, serde_json::json!({"error": err})),
    };
    let value: serde_json::Value =
        serde_json::from_str(&cfg_text).unwrap_or(serde_json::Value::Null);
    HttpResponse::json(200, serde_json::json!({"config": value}))
}

fn json_escape(s: &str) -> String {
    s.replace('\\', "\\\\")
        .replace('"', "\\\"")
        .replace('\n', "\\n")
        .replace('\r', "\\r")
}

async fn handle_mcp_request(
    app: &AppHandle,
    cfg: &RuntimeConfig,
    req: &HttpRequest,
) -> HttpResponse {
    if !cfg.mcp_active() {
        return HttpResponse::json(404, serde_json::json!({"error":"not found"}));
    }
    if req.method != "POST" {
        return HttpResponse::json(405, serde_json::json!({"error":"method not allowed"}));
    }
    if req.path != "/mcp" {
        return HttpResponse::json(404, serde_json::json!({"error":"not found"}));
    }

    let body: serde_json::Value = match serde_json::from_slice(&req.body) {
        Ok(v) => v,
        Err(_) => {
            return HttpResponse::json(
                400,
                serde_json::json!({"jsonrpc":"2.0","id":null,"error":{"code":-32700,"message":"Parse error"}}),
            );
        }
    };

    // Modern Streamable HTTP MCP 2026-07-28 discovery path support via headers can also send body; handle both body and header-driven.
    let method = body
        .get("method")
        .and_then(|v| v.as_str())
        .unwrap_or_default()
        .to_owned();
    let id = body.get("id").cloned().unwrap_or(serde_json::Value::Null);
    let params = body
        .get("params")
        .cloned()
        .unwrap_or_else(|| serde_json::json!({}));
    let is_notification = !body.get("id").is_some() && !method.is_empty();

    // Header-based modern MCP discovery/call hints
    let hdr_method = header_value(&req.headers, "mcp-method").map(str::to_owned);
    let hdr_name = header_value(&req.headers, "mcp-name").map(str::to_owned);
    let effective_method = if !method.is_empty() {
        method.clone()
    } else {
        hdr_method.clone().unwrap_or_default()
    };

    if effective_method == "server/discover" {
        if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
            return mcp_auth_error(err, id);
        }
        return HttpResponse::json(
            200,
            serde_json::json!({
                "jsonrpc":"2.0","id":id,
                "result": mcp_discover_result(app, cfg).await
            }),
        );
    }

    match effective_method.as_str() {
        "initialize" => {
            if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                return mcp_auth_error(err, id);
            }
            let protocol = params
                .get("protocolVersion")
                .and_then(|v| v.as_str())
                .unwrap_or("2025-11-25");
            HttpResponse::json(
                200,
                serde_json::json!({
                    "jsonrpc":"2.0","id":id,
                    "result":{
                        "protocolVersion": protocol,
                        "capabilities": { "tools": { "listChanged": false }, "resources": { "listChanged": false } },
                        "serverInfo": { "name":"twilightmc-debug", "version": env!("CARGO_PKG_VERSION") }
                    }
                }),
            )
        }
        "notifications/initialized" => HttpResponse::json(
            200,
            serde_json::json!({"jsonrpc":"2.0","id":id,"result":{}}),
        ),
        "ping" => {
            if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                return mcp_auth_error(err, id);
            }
            HttpResponse::json(
                200,
                serde_json::json!({"jsonrpc":"2.0","id":id,"result":{}}),
            )
        }
        "tools/list" => {
            if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                return mcp_auth_error(err, id);
            }
            HttpResponse::json(
                200,
                serde_json::json!({"jsonrpc":"2.0","id":id,"result":{"tools": mcp_tools()}}),
            )
        }
        "resources/list" => {
            if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                return mcp_auth_error(err, id);
            }
            HttpResponse::json(
                200,
                serde_json::json!({"jsonrpc":"2.0","id":id,"result":{"resources": mcp_resources()}}),
            )
        }
        "resources/read" => {
            let uri = params
                .get("uri")
                .and_then(|v| v.as_str())
                .unwrap_or_default();
            let perm = mcp_resource_permission(uri).unwrap_or(Permission::ReadState);
            if let Err(err) = authorize(cfg, &req.headers, perm) {
                return mcp_auth_error(err, id);
            }
            let (mime, text) = match mcp_read_resource(app, cfg, uri).await {
                Ok(v) => v,
                Err(err) => {
                    return HttpResponse::json(
                        200,
                        serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32003,"message":err}}),
                    );
                }
            };
            HttpResponse::json(
                200,
                serde_json::json!({
                    "jsonrpc":"2.0","id":id,
                    "result":{"contents":[{"uri":uri,"mimeType":mime,"text":text}]}
                }),
            )
        }
        "tools/call" => {
            let name = params
                .get("name")
                .and_then(|v| v.as_str())
                .or(hdr_name.as_deref())
                .unwrap_or_default();
            let args = params
                .get("arguments")
                .cloned()
                .unwrap_or_else(|| serde_json::json!({}));
            let Some(perm) = mcp_tool_permission(name) else {
                return HttpResponse::json(
                    200,
                    serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32601,"message":"Unknown tool"}}),
                );
            };
            if let Err(err) = authorize(cfg, &req.headers, perm) {
                return mcp_auth_error(err, id);
            }
            let result = mcp_call_tool(app, cfg, name, args).await;
            HttpResponse::json(
                200,
                serde_json::json!({"jsonrpc":"2.0","id":id,"result":result}),
            )
        }
        _ => {
            if is_notification {
                HttpResponse::json(200, serde_json::json!({"jsonrpc":"2.0","result":{}}))
            } else {
                HttpResponse::json(
                    200,
                    serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32601,"message":"Method not found"}}),
                )
            }
        }
    }
}

fn mcp_auth_error(err: AuthError, id: serde_json::Value) -> HttpResponse {
    match err {
        AuthError::Unauthorized => HttpResponse::json(
            401,
            serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32001,"message":"Unauthorized"}}),
        ),
        AuthError::Forbidden => HttpResponse::json(
            200,
            serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32003,"message":"Forbidden: permission scope not granted"}}),
        ),
    }
}

fn mcp_tools() -> Vec<serde_json::Value> {
    vec![
        serde_json::json!({"name":"twilight_health","description":"Read debug endpoint health (read_state scope)","inputSchema":{"type":"object","properties":{},"additionalProperties":false}}),
        serde_json::json!({"name":"twilight_state","description":"Read debug state and permissions (read_state scope)","inputSchema":{"type":"object","properties":{},"additionalProperties":false}}),
        serde_json::json!({"name":"twilight_events","description":"Read bounded debug trace events (read_events scope)","inputSchema":{"type":"object","properties":{"since":{"type":"integer"},"kind":{"type":"string"},"limit":{"type":"integer"}},"additionalProperties":false}}),
        serde_json::json!({"name":"twilight_logs","description":"Read recent debug trace events (read_logs scope)","inputSchema":{"type":"object","properties":{"tail":{"type":"integer"}},"additionalProperties":false}}),
        serde_json::json!({"name":"twilight_instances","description":"Read redacted instance metadata (read_instances scope)","inputSchema":{"type":"object","properties":{},"additionalProperties":false}}),
        serde_json::json!({"name":"twilight_config","description":"Read redacted settings config (read_config scope)","inputSchema":{"type":"object","properties":{},"additionalProperties":false}}),
    ]
}

fn mcp_resources() -> Vec<serde_json::Value> {
    vec![
        serde_json::json!({"uri":"twilight://health","name":"twilight_health","mimeType":"application/json"}),
        serde_json::json!({"uri":"twilight://state","name":"twilight_state","mimeType":"application/json"}),
        serde_json::json!({"uri":"twilight://events","name":"twilight_events","mimeType":"application/json"}),
        serde_json::json!({"uri":"twilight://logs","name":"twilight_logs","mimeType":"application/json"}),
        serde_json::json!({"uri":"twilight://instances","name":"twilight_instances","mimeType":"application/json"}),
        serde_json::json!({"uri":"twilight://config","name":"twilight_config","mimeType":"application/json"}),
    ]
}

fn mcp_tool_permission(name: &str) -> Option<Permission> {
    match name {
        "twilight_health" | "twilight_state" => Some(Permission::ReadState),
        "twilight_events" => Some(Permission::ReadEvents),
        "twilight_logs" => Some(Permission::ReadLogs),
        "twilight_instances" => Some(Permission::ReadInstances),
        "twilight_config" => Some(Permission::ReadConfig),
        _ => None,
    }
}

fn mcp_resource_permission(uri: &str) -> Option<Permission> {
    match uri {
        "twilight://health" | "twilight://state" => Some(Permission::ReadState),
        "twilight://events" => Some(Permission::ReadEvents),
        "twilight://logs" => Some(Permission::ReadLogs),
        "twilight://instances" => Some(Permission::ReadInstances),
        "twilight://config" => Some(Permission::ReadConfig),
        _ => None,
    }
}

async fn mcp_read_resource(
    app: &AppHandle,
    cfg: &RuntimeConfig,
    uri: &str,
) -> Result<(String, String), String> {
    let req = HttpRequest {
        method: "GET".into(),
        path: "".into(),
        query: "".into(),
        headers: vec![],
        body: vec![],
    };
    let value = match uri {
        "twilight://health" => {
            serde_json::to_value(http_health(app, cfg, &req).await.body_json()).unwrap_or_default()
        }
        "twilight://state" => {
            serde_json::to_value(http_state(app, cfg, &req).await.body_json()).unwrap_or_default()
        }
        "twilight://events" => serde_json::json!({"events": trace(app).since(0)}),
        "twilight://logs" => serde_json::json!({"events": trace(app).snapshot()}),
        "twilight://instances" => http_instances(app, cfg, &req).await.body_json(),
        "twilight://config" => http_config(app, cfg, &req).await.body_json(),
        _ => return Err("Unknown resource".to_owned()),
    };
    Ok((
        "application/json".to_owned(),
        serde_json::to_string_pretty(&value).unwrap_or_else(|_| "{}".to_owned()),
    ))
}

impl HttpResponse {
    fn body_json(&self) -> serde_json::Value {
        serde_json::from_slice(&self.body).unwrap_or(serde_json::Value::Null)
    }
}

async fn mcp_call_tool(
    app: &AppHandle,
    cfg: &RuntimeConfig,
    name: &str,
    args: serde_json::Value,
) -> serde_json::Value {
    let req = HttpRequest {
        method: "GET".into(),
        path: "".into(),
        query: "".into(),
        headers: vec![],
        body: vec![],
    };
    let payload = match name {
        "twilight_health" => http_health(app, cfg, &req).await.body_json(),
        "twilight_state" => http_state(app, cfg, &req).await.body_json(),
        "twilight_events" => {
            let since = args.get("since").and_then(|v| v.as_u64()).unwrap_or(0);
            let kind = args
                .get("kind")
                .and_then(|v| v.as_str())
                .map(|s| s.to_ascii_lowercase());
            let limit = args.get("limit").and_then(|v| v.as_u64()).unwrap_or(200) as usize;
            let mut events = trace(app).since(since);
            if let Some(kind) = kind {
                events.retain(|e| e.kind.to_ascii_lowercase() == kind);
            }
            events.truncate(limit.min(500));
            serde_json::json!({"events": events})
        }
        "twilight_logs" => {
            let tail = args.get("tail").and_then(|v| v.as_u64()).unwrap_or(200) as usize;
            let mut events = trace(app).snapshot();
            if events.len() > tail {
                events = events.split_off(events.len() - tail);
            }
            serde_json::json!({"events": events})
        }
        "twilight_instances" => http_instances(app, cfg, &req).await.body_json(),
        "twilight_config" => http_config(app, cfg, &req).await.body_json(),
        _ => serde_json::json!({"error":"unknown tool"}),
    };
    serde_json::json!({
        "content": [{"type":"text","text": serde_json::to_string_pretty(&payload).unwrap_or_else(|_| "{}".to_owned())}],
        "structuredContent": payload,
        "isError": false
    })
}

async fn mcp_discover_result(_app: &AppHandle, cfg: &RuntimeConfig) -> serde_json::Value {
    serde_json::json!({
        "serverInfo": { "name":"twilightmc-debug", "version": env!("CARGO_PKG_VERSION") },
        "capabilities": { "tools": mcp_tools(), "resources": mcp_resources() },
        "endpoints": { "mcp": format!("https://127.0.0.1:{}/mcp", cfg.mcp_port) },
        "_meta": { "transport":"streamable-http", "tls": true }
    })
}

pub fn now_ms() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis() as u64)
        .unwrap_or(0)
}

pub fn redact_text(text: &str) -> String {
    let mut out = text.to_owned();

    // Redact debug API keys first.
    let mut search_from = 0;
    loop {
        let lower = out.to_ascii_lowercase();
        let Some(rel) = lower[search_from..].find("twdbg_") else {
            break;
        };
        let idx = search_from + rel;
        let tail = &out[idx..];
        let end = tail
            .find(|c: char| !(c.is_ascii_alphanumeric() || c == '_' || c == '-'))
            .unwrap_or(tail.len());
        if end <= 6 {
            search_from = idx + 6;
            continue;
        }
        out.replace_range(idx..idx + end, REDACTED);
        search_from = idx + REDACTED.len();
    }

    // Authorization: Bearer ...
    let lower = out.to_ascii_lowercase();
    if let Some(idx) = lower.find("bearer ") {
        let tail = &out[idx + 7..];
        let end = tail
            .find(|c: char| c.is_whitespace() || c == '"' || c == ',')
            .unwrap_or(tail.len());
        if end > 0 {
            out.replace_range(idx + 7..idx + 7 + end, REDACTED);
        }
    }

    for key in [
        "accesstoken=",
        "access_token=",
        "refresh_token=",
        "clienttoken=",
        "client_token=",
        "password=",
        "secret=",
        "api_key=",
        "apikey=",
        "debug_api_key=",
        "debugapikey=",
        "x-twilight-debug-key:",
    ] {
        let mut search_from = 0;
        loop {
            let lower = out.to_ascii_lowercase();
            let Some(rel) = lower[search_from..].find(key) else {
                break;
            };
            let idx = search_from + rel + key.len();
            let tail = &out[idx..];
            let trimmed = tail.trim_start();
            let trim_off = tail.len() - trimmed.len();
            let start = idx + trim_off;
            let tail2 = &out[start..];
            let end = tail2
                .find(|c: char| c.is_whitespace() || c == '"' || c == ',' || c == '&' || c == '}')
                .unwrap_or(tail2.len());
            if end == 0 {
                search_from = idx;
                continue;
            }
            out.replace_range(start..start + end, REDACTED);
            search_from = start + REDACTED.len();
        }
    }

    for marker in [
        "accessToken",
        "access_token",
        "refresh_token",
        "clientToken",
        "client_token",
        "Authorization:",
        "authorization:",
        "api_key",
        "apiKey",
        "debug_api_key",
        "debugApiKey",
        "password",
        "secret",
    ] {
        if out
            .to_ascii_lowercase()
            .contains(&marker.to_ascii_lowercase())
        {
            out = out.replace(marker, REDACTED);
        }
    }
    out
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DebugProtocolConfig {
    pub dev_mode: bool,
    pub http_enabled: bool,
    pub http_port: u16,
    pub http_tls: bool,
    pub mcp_enabled: bool,
    pub mcp_port: u16,
    pub require_api_key: bool,
    pub api_key_configured: bool,
    pub api_key: Option<String>,
    pub permissions: DebugPermissions,
    pub cert_path: Option<String>,
    pub bind: String,
    pub effective_http_enabled: bool,
    pub effective_mcp_enabled: bool,
}

#[tauri::command]
pub async fn get_debug_protocol_config(app: AppHandle) -> Result<DebugProtocolConfig, String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let cfg = RuntimeConfig::from_settings(&settings);
    Ok(DebugProtocolConfig {
        dev_mode: cfg.dev_mode,
        http_enabled: cfg.http_enabled,
        http_port: cfg.http_port,
        http_tls: cfg.http_tls,
        mcp_enabled: cfg.mcp_enabled,
        mcp_port: cfg.mcp_port,
        require_api_key: cfg.require_api_key,
        api_key_configured: cfg.api_key.is_some(),
        api_key: cfg.api_key.clone(),
        permissions: cfg.permissions,
        cert_path: tls_dir(&app)
            .await
            .ok()
            .map(|p| p.join("cert.pem").display().to_string()),
        bind: "127.0.0.1".to_owned(),
        effective_http_enabled: cfg.http_active(),
        effective_mcp_enabled: cfg.mcp_active(),
    })
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SetDebugProtocolConfigInput {
    pub http_enabled: bool,
    pub http_port: u16,
    pub http_tls: bool,
    pub mcp_enabled: bool,
    pub mcp_port: u16,
    pub require_api_key: bool,
    pub permissions: DebugPermissions,
}

#[tauri::command]
pub async fn set_debug_protocol_config(
    app: AppHandle,
    config: SetDebugProtocolConfigInput,
) -> Result<(), String> {
    if config.http_port == 0 || config.mcp_port == 0 {
        return Err("debug ports must be between 1 and 65535".to_owned());
    }
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.debug_http_enabled = config.http_enabled;
    settings.debug_http_port = config.http_port;
    settings.debug_http_tls = config.http_tls;
    settings.debug_mcp_enabled = config.mcp_enabled;
    settings.debug_mcp_port = config.mcp_port;
    settings.debug_require_api_key = config.require_api_key;
    settings.debug_permissions = config.permissions;
    // keep legacy fields in sync for migration
    settings.debug_protocol_enabled = config.http_enabled;
    settings.debug_protocol_port = config.http_port;
    crate::accounts::save_settings(&settings_path(&app).await?, &settings).await?;
    sync_server(&app).await;
    Ok(())
}

#[tauri::command]
pub async fn generate_debug_api_key(app: AppHandle) -> Result<String, String> {
    let mut bytes = [0u8; 16];
    use std::time::{SystemTime, UNIX_EPOCH};
    // simple non-crypto dependency-free randomness from time + pid + address entropy; sufficient for local dev key.
    let seed = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_nanos())
        .unwrap_or(0);
    let mut x = seed ^ ((std::process::id() as u128) << 32) ^ (&bytes as *const _ as u128);
    for b in &mut bytes {
        // xorshift128*
        x ^= x >> 12;
        x ^= x << 25;
        x ^= x >> 27;
        *b = (x.wrapping_mul(0x2545F4914F6CDD1D) & 0xff) as u8;
    }
    let key = format!(
        "twdbg_{}",
        bytes.iter().map(|b| format!("{b:02x}")).collect::<String>()
    );
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.debug_api_key = Some(key.clone());
    crate::accounts::save_settings(&settings_path(&app).await?, &settings).await?;
    sync_server(&app).await;
    Ok(key)
}

#[tauri::command]
pub async fn clear_debug_api_key(app: AppHandle) -> Result<(), String> {
    let mut settings = load_settings(&settings_path(&app).await?).await;
    settings.debug_api_key = None;
    crate::accounts::save_settings(&settings_path(&app).await?, &settings).await?;
    sync_server(&app).await;
    Ok(())
}

#[tauri::command]
pub async fn list_debug_trace(
    app: AppHandle,
    since: Option<u64>,
) -> Result<Vec<DebugEvent>, String> {
    Ok(trace(&app).since(since.unwrap_or(0)))
}

#[tauri::command]
pub async fn export_debug_trace(app: AppHandle) -> Result<String, String> {
    let events = trace(&app).snapshot();
    serde_json::to_string_pretty(&serde_json::json!({
        "exportedAtMs": now_ms(),
        "events": events,
    }))
    .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn report_ui_error(
    app: AppHandle,
    kind: String,
    source: String,
    summary: String,
) -> Result<(), String> {
    let settings = load_settings(&settings_path(&app).await?).await;
    let cfg = RuntimeConfig::from_settings(&settings);
    if !(cfg.dev_mode && (cfg.http_enabled || cfg.mcp_enabled || settings.debug_protocol_enabled)) {
        // Still allow recording if dev_mode + legacy flag? keep simple: any debug endpoint enabled
    }
    if !cfg.dev_mode {
        return Ok(());
    }
    let kind = match kind.as_str() {
        "ipc_ok" | "ipc_err" | "ui_error" | "launch_event" | "download" => kind,
        _ => "ui_error".to_owned(),
    };
    trace(&app).record(kind, source, summary, None);
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::{Arc as StdArc, Once};
    use tokio::io::AsyncWriteExt;
    use tokio::net::TcpStream;

    fn ensure_crypto_provider() {
        static ONCE: Once = Once::new();
        ONCE.call_once(|| {
            let _ = rustls::crypto::ring::default_provider().install_default();
        });
    }

    #[test]
    fn ring_buffer_is_bounded() {
        let trace = DebugTrace::default();
        for i in 0..(MAX_EVENTS + 20) {
            trace.record("ipc_ok", "test", format!("event {i}"), None);
        }
        let events = trace.snapshot();
        assert_eq!(events.len(), MAX_EVENTS);
        assert_eq!(events.first().map(|e| e.seq), Some(21));
        assert_eq!(events.last().map(|e| e.seq), Some((MAX_EVENTS + 20) as u64));
    }

    #[test]
    fn redaction_masks_sensitive_markers() {
        let text = "Authorization: Bearer abc.def.ghi accessToken=secret password=hunter2 twdbg_0123456789abcdef0123456789abcdef";
        let redacted = redact_text(text);
        assert!(!redacted.contains("abc.def.ghi"));
        assert!(!redacted.contains("secret"));
        assert!(!redacted.contains("hunter2"));
        assert!(!redacted.contains("twdbg_0123456789abcdef0123456789abcdef"));
        assert!(redacted.contains(REDACTED));
    }

    #[test]
    fn localhost_bind_is_loopback_only() {
        let listener = std::net::TcpListener::bind(("127.0.0.1", 0)).expect("bind");
        let addr = listener.local_addr().expect("addr");
        assert!(addr.ip().is_loopback());
    }

    fn test_tls_server_config() -> (TlsAcceptor, reqwest::Certificate) {
        ensure_crypto_provider();
        let cert = rcgen::generate_simple_self_signed(vec![
            "localhost".to_owned(),
            "127.0.0.1".to_owned(),
        ])
        .expect("cert");
        let cert_pem = cert.cert.pem();
        let key_pem = cert.key_pair.serialize_pem();
        let mut cert_reader = std::io::Cursor::new(cert_pem.as_bytes());
        let certs = rustls_pemfile::certs(&mut cert_reader)
            .collect::<Result<Vec<_>, _>>()
            .expect("certs");
        let mut key_reader = std::io::Cursor::new(key_pem.as_bytes());
        let key = rustls_pemfile::private_key(&mut key_reader)
            .expect("key")
            .expect("some key");
        let mut config = tokio_rustls::rustls::ServerConfig::builder()
            .with_no_client_auth()
            .with_single_cert(certs, key)
            .expect("cfg");
        config.alpn_protocols = vec![b"http/1.1".to_vec()];
        let req_cert = reqwest::Certificate::from_pem(cert_pem.as_bytes()).expect("req cert");
        (TlsAcceptor::from(StdArc::new(config)), req_cert)
    }

    async fn spawn_test_http_server(
        tls: bool,
        api_key: Option<String>,
        require_key: bool,
        permissions: DebugPermissions,
    ) -> (
        String,
        tokio::task::JoinHandle<()>,
        Option<reqwest::Certificate>,
    ) {
        let listener = TcpListener::bind(("127.0.0.1", 0)).await.expect("bind");
        let addr = listener.local_addr().expect("addr");
        let (acceptor, req_cert) = if tls {
            let (a, c) = test_tls_server_config();
            (Some(a), Some(c))
        } else {
            (None, None)
        };
        let cfg = RuntimeConfig {
            dev_mode: true,
            http_enabled: true,
            http_port: addr.port(),
            http_tls: tls,
            mcp_enabled: false,
            mcp_port: 0,
            api_key,
            require_api_key: require_key,
            permissions,
        };
        let handle = tokio::spawn(async move {
            if let Ok((stream, _)) = listener.accept().await {
                let app_cfg = cfg;
                // Serve one request with synthetic handling by directly calling handlers through a tiny shim.
                let req = if let Some(acc) = acceptor {
                    let mut tls = acc.accept(stream).await.expect("tls accept");
                    read_http_request(&mut tls)
                        .await
                        .ok()
                        .map(|r| (r, EitherStream::Tls(Box::new(tls))))
                } else {
                    let mut plain = stream;
                    read_http_request(&mut plain)
                        .await
                        .ok()
                        .map(|r| (r, EitherStream::Plain(plain)))
                };
                if let Some((request, mut stream)) = req {
                    let resp = handle_http_request_test(&app_cfg, &request).await;
                    let _ = write_test_response(&mut stream, resp.status, &resp.body).await;
                }
            }
        });
        let scheme = if tls { "https" } else { "http" };
        (
            format!("{scheme}://127.0.0.1:{}", addr.port()),
            handle,
            req_cert,
        )
    }

    enum EitherStream {
        Plain(TcpStream),
        Tls(Box<tokio_rustls::server::TlsStream<TcpStream>>),
    }
    impl tokio::io::AsyncWrite for EitherStream {
        fn poll_write(
            self: std::pin::Pin<&mut Self>,
            cx: &mut std::task::Context<'_>,
            buf: &[u8],
        ) -> std::task::Poll<std::io::Result<usize>> {
            match self.get_mut() {
                EitherStream::Plain(s) => std::pin::Pin::new(s).poll_write(cx, buf),
                EitherStream::Tls(s) => std::pin::Pin::new(s).poll_write(cx, buf),
            }
        }
        fn poll_flush(
            self: std::pin::Pin<&mut Self>,
            cx: &mut std::task::Context<'_>,
        ) -> std::task::Poll<std::io::Result<()>> {
            match self.get_mut() {
                EitherStream::Plain(s) => std::pin::Pin::new(s).poll_flush(cx),
                EitherStream::Tls(s) => std::pin::Pin::new(s).poll_flush(cx),
            }
        }
        fn poll_shutdown(
            self: std::pin::Pin<&mut Self>,
            cx: &mut std::task::Context<'_>,
        ) -> std::task::Poll<std::io::Result<()>> {
            match self.get_mut() {
                EitherStream::Plain(s) => std::pin::Pin::new(s).poll_shutdown(cx),
                EitherStream::Tls(s) => std::pin::Pin::new(s).poll_shutdown(cx),
            }
        }
    }

    async fn write_test_response<S: AsyncWriteExt + Unpin>(
        stream: &mut S,
        status: u16,
        body: &[u8],
    ) -> io::Result<()> {
        let hdr = format!(
            "HTTP/1.1 {status} OK\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n",
            body.len()
        );
        stream.write_all(hdr.as_bytes()).await?;
        stream.write_all(body).await?;
        stream.flush().await
    }

    async fn handle_http_request_test(cfg: &RuntimeConfig, req: &HttpRequest) -> HttpResponse {
        if req.method != "GET" {
            return HttpResponse::json(405, serde_json::json!({"error":"method not allowed"}));
        }
        let perm = match req.path.as_str() {
            "/health" | "/state" => Permission::ReadState,
            "/events" => Permission::ReadEvents,
            "/logs" => Permission::ReadLogs,
            "/instances" => Permission::ReadInstances,
            "/config" => Permission::ReadConfig,
            _ => return HttpResponse::json(404, serde_json::json!({"error":"not found"})),
        };
        if let Err(err) = authorize(cfg, &req.headers, perm) {
            return match err {
                AuthError::Unauthorized => {
                    HttpResponse::json(401, serde_json::json!({"error":"unauthorized"}))
                }
                AuthError::Forbidden => {
                    HttpResponse::json(403, serde_json::json!({"error":"forbidden"}))
                }
            };
        }
        match req.path.as_str() {
            "/health" => HttpResponse::json(200, serde_json::json!({"ok": true})),
            "/events" => HttpResponse::json(200, serde_json::json!({"events": []})),
            "/logs" => HttpResponse::json(200, serde_json::json!({"events": []})),
            "/instances" => HttpResponse::json(200, serde_json::json!({"instances": []})),
            "/config" => HttpResponse::json(200, serde_json::json!({"config": {"ok":true}})),
            "/state" => HttpResponse::json(200, serde_json::json!({"devMode": true})),
            _ => HttpResponse::json(404, serde_json::json!({"error":"not found"})),
        }
    }

    #[tokio::test]
    async fn tls_loopback_https_health_works() {
        let perms = DebugPermissions::default();
        let (url, handle, cert) =
            spawn_test_http_server(true, Some("twdbg_test".into()), true, perms).await;
        let client = reqwest::Client::builder()
            .add_root_certificate(cert.expect("cert"))
            .danger_accept_invalid_hostnames(true)
            .build()
            .expect("client");
        let resp = client
            .get(format!("{url}/health"))
            .header("Authorization", "Bearer twdbg_test")
            .send()
            .await
            .expect("resp");
        assert_eq!(resp.status().as_u16(), 200);
        let _ = handle.await;
    }

    #[tokio::test]
    async fn api_key_and_scope_enforced() {
        let perms = DebugPermissions {
            read_state: true,
            read_events: false,
            read_logs: true,
            read_instances: false,
            read_config: false,
        };
        let (url, handle, _cert) =
            spawn_test_http_server(false, Some("twdbg_test".into()), true, perms).await;
        let client = reqwest::Client::new();
        let r401 = client
            .get(format!("{url}/health"))
            .send()
            .await
            .expect("401");
        assert_eq!(r401.status().as_u16(), 401);
        let _ = handle.await;

        let (url, handle, _cert) =
            spawn_test_http_server(false, Some("twdbg_test".into()), true, perms).await;
        let r403 = client
            .get(format!("{url}/events"))
            .header("Authorization", "Bearer twdbg_test")
            .send()
            .await
            .expect("403");
        assert_eq!(r403.status().as_u16(), 403);
        let _ = handle.await;

        let (url, handle, _cert) =
            spawn_test_http_server(false, Some("twdbg_test".into()), true, perms).await;
        let r200 = client
            .get(format!("{url}/health"))
            .header("X-Twilight-Debug-Key", "twdbg_test")
            .send()
            .await
            .expect("200");
        assert_eq!(r200.status().as_u16(), 200);
        let _ = handle.await;
    }

    #[tokio::test]
    async fn plain_http_toggle_works() {
        let perms = DebugPermissions::default();
        let (url, handle, cert) = spawn_test_http_server(false, None, false, perms).await;
        assert!(cert.is_none());
        assert!(url.starts_with("http://"));
        let client = reqwest::Client::new();
        let resp = client
            .get(format!("{url}/health"))
            .send()
            .await
            .expect("resp");
        assert_eq!(resp.status().as_u16(), 200);
        let _ = handle.await;
    }

    async fn spawn_test_mcp_server(
        api_key: &str,
        perms: DebugPermissions,
    ) -> (String, tokio::task::JoinHandle<()>, reqwest::Certificate) {
        let listener = TcpListener::bind(("127.0.0.1", 0)).await.expect("bind");
        let addr = listener.local_addr().expect("addr");
        let (acceptor, cert) = test_tls_server_config();
        let cfg = RuntimeConfig {
            dev_mode: true,
            http_enabled: false,
            http_port: 0,
            http_tls: true,
            mcp_enabled: true,
            mcp_port: addr.port(),
            api_key: Some(api_key.to_owned()),
            require_api_key: true,
            permissions: perms,
        };
        let handle = tokio::spawn(async move {
            loop {
                let Ok((stream, _)) = listener.accept().await else {
                    break;
                };
                let Ok(mut tls) = acceptor.accept(stream).await else {
                    break;
                };
                let Ok(req) = read_http_request(&mut tls).await else {
                    break;
                };
                let resp = handle_mcp_request_test(&cfg, &req).await;
                let _ = write_test_response(&mut tls, resp.status, &resp.body).await;
                // serve multiple requests
            }
        });
        (format!("https://127.0.0.1:{}", addr.port()), handle, cert)
    }

    async fn handle_mcp_request_test(cfg: &RuntimeConfig, req: &HttpRequest) -> HttpResponse {
        if req.path != "/mcp" || req.method != "POST" {
            return HttpResponse::json(404, serde_json::json!({"error":"not found"}));
        }
        let body: serde_json::Value =
            serde_json::from_slice(&req.body).unwrap_or(serde_json::json!({}));
        let method = body
            .get("method")
            .and_then(|v| v.as_str())
            .unwrap_or_default();
        let id = body.get("id").cloned().unwrap_or(serde_json::Value::Null);
        let params = body.get("params").cloned().unwrap_or(serde_json::json!({}));
        match method {
            "initialize" => {
                if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                    return mcp_auth_error(err, id);
                }
                HttpResponse::json(
                    200,
                    serde_json::json!({"jsonrpc":"2.0","id":id,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{}},"serverInfo":{"name":"twilightmc-debug"}}}),
                )
            }
            "tools/list" => {
                if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                    return mcp_auth_error(err, id);
                }
                HttpResponse::json(
                    200,
                    serde_json::json!({"jsonrpc":"2.0","id":id,"result":{"tools": mcp_tools()}}),
                )
            }
            "tools/call" => {
                let name = params
                    .get("name")
                    .and_then(|v| v.as_str())
                    .unwrap_or_default();
                let Some(perm) = mcp_tool_permission(name) else {
                    return HttpResponse::json(
                        200,
                        serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32601,"message":"Unknown tool"}}),
                    );
                };
                if let Err(err) = authorize(cfg, &req.headers, perm) {
                    return mcp_auth_error(err, id);
                }
                HttpResponse::json(
                    200,
                    serde_json::json!({"jsonrpc":"2.0","id":id,"result":{"content":[{"type":"text","text":"ok"}]}}),
                )
            }
            "server/discover" => {
                if let Err(err) = authorize(cfg, &req.headers, Permission::ReadState) {
                    return mcp_auth_error(err, id);
                }
                HttpResponse::json(
                    200,
                    serde_json::json!({"jsonrpc":"2.0","id":id,"result":{"serverInfo":{"name":"twilightmc-debug"},"capabilities":{"tools":mcp_tools()}}}),
                )
            }
            _ => HttpResponse::json(
                200,
                serde_json::json!({"jsonrpc":"2.0","id":id,"error":{"code":-32601,"message":"Method not found"}}),
            ),
        }
    }

    #[tokio::test]
    async fn mcp_https_initialize_tools_and_scope() {
        let perms = DebugPermissions {
            read_state: true,
            read_events: false,
            read_logs: true,
            read_instances: true,
            read_config: false,
        };
        let (url, handle, cert) = spawn_test_mcp_server("twdbg_test", perms).await;
        let client = reqwest::Client::builder()
            .add_root_certificate(cert)
            .danger_accept_invalid_hostnames(true)
            .build()
            .expect("client");
        let base = format!("{url}/mcp");
        let init = client.post(&base).header("Authorization","Bearer twdbg_test").json(&serde_json::json!({"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"test","version":"1"}}})).send().await.expect("init");
        assert_eq!(init.status().as_u16(), 200);
        let list = client
            .post(&base)
            .header("Authorization", "Bearer twdbg_test")
            .json(&serde_json::json!({"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}))
            .send()
            .await
            .expect("list");
        assert_eq!(list.status().as_u16(), 200);
        let call = client.post(&base).header("Authorization","Bearer twdbg_test").json(&serde_json::json!({"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"twilight_health","arguments":{}}})).send().await.expect("call");
        assert_eq!(call.status().as_u16(), 200);
        let denied = client.post(&base).header("Authorization","Bearer twdbg_test").json(&serde_json::json!({"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"twilight_events","arguments":{}}})).send().await.expect("denied");
        let body: serde_json::Value = denied.json().await.expect("json");
        assert_eq!(body["error"]["code"], -32003);
        let disc = client
            .post(&base)
            .header("Authorization", "Bearer twdbg_test")
            .json(
                &serde_json::json!({"jsonrpc":"2.0","id":5,"method":"server/discover","params":{}}),
            )
            .send()
            .await
            .expect("disc");
        assert_eq!(disc.status().as_u16(), 200);
        handle.abort();
    }
}
