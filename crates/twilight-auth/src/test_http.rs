//! Test-only in-process HTTP servers on loopback. Production code must never
//! depend on this module (same pattern as `twilight-downloader`'s
//! `test_server`, private to this crate).
#![cfg(test)]

use std::collections::HashMap;
use std::sync::Arc;

use tokio::io::{AsyncBufReadExt, AsyncReadExt, AsyncWriteExt, BufReader};
use tokio::net::{TcpListener, TcpStream};
use tokio::sync::Mutex;

type Responses = Vec<(u16, Vec<u8>)>;
type Routes = HashMap<String, Responses>;

/// A loopback server plus the number of requests it served (per-path), so
/// tests can assert that a cached artifact was *not* re-downloaded.
pub struct TestServer {
    pub addr: std::net::SocketAddr,
    hits: Arc<Mutex<HashMap<String, usize>>>,
    bodies: Arc<Mutex<HashMap<String, String>>>,
}

impl TestServer {
    pub fn url(&self, path: &str) -> String {
        format!("http://{}/{}", self.addr, path.trim_start_matches('/'))
    }

    pub async fn hits(&self, path: &str) -> usize {
        self.hits
            .lock()
            .await
            .get(path.trim_start_matches('/'))
            .copied()
            .unwrap_or(0)
    }

    /// The last request body this route received (form/JSON payloads).
    pub async fn body(&self, path: &str) -> String {
        self.bodies
            .lock()
            .await
            .get(path.trim_start_matches('/'))
            .cloned()
            .unwrap_or_default()
    }
}

/// Spawns a one-connection-per-request HTTP server on loopback. Each route
/// holds a *sequence* of `(status, body)` responses: every hit pops the first
/// one, and the last response repeats when the sequence is exhausted — so a
/// one-element route behaves like a static route and multi-element routes can
/// serve token-poll state machines (`pending`, `slow_down`, `completed`…).
pub async fn spawn(routes: Routes) -> TestServer {
    let listener = TcpListener::bind("127.0.0.1:0")
        .await
        .expect("bind loopback");
    let addr = listener.local_addr().expect("bound address");
    let routes = Arc::new(Mutex::new(routes));
    let hits: Arc<Mutex<HashMap<String, usize>>> = Arc::default();
    let bodies: Arc<Mutex<HashMap<String, String>>> = Arc::default();
    let hit_tracker = hits.clone();
    let body_tracker = bodies.clone();
    tokio::spawn(async move {
        while let Ok((sock, _)) = listener.accept().await {
            let routes = routes.clone();
            let hits = hit_tracker.clone();
            let bodies = body_tracker.clone();
            tokio::spawn(async move {
                let _ = serve(sock, routes, hits, bodies).await;
            });
        }
    });
    TestServer { addr, hits, bodies }
}

async fn serve(
    sock: TcpStream,
    routes: Arc<Mutex<Routes>>,
    hits: Arc<Mutex<HashMap<String, usize>>>,
    bodies: Arc<Mutex<HashMap<String, String>>>,
) -> std::io::Result<()> {
    let mut reader = BufReader::new(sock);
    let mut request_line = Vec::new();
    reader.read_until(b'\n', &mut request_line).await?;
    // drain remaining headers (the blank line ends them)
    let mut content_length = 0usize;
    let mut header = Vec::new();
    loop {
        header.clear();
        reader.read_until(b'\n', &mut header).await?;
        if header == b"\r\n" || header == b"\n" || header.is_empty() {
            break;
        }
        if let Some(value) = lowercase_header(&header, "content-length") {
            content_length = value.parse().unwrap_or(0);
        }
    }
    let path: String = String::from_utf8_lossy(&request_line)
        .split_whitespace()
        .nth(1)
        .unwrap_or_default()
        .trim()
        .trim_start_matches('/')
        .to_owned();
    // capture the request body (OAuth2 form grants, JSON payloads)
    if content_length > 0 {
        let mut body = vec![0u8; content_length];
        reader.read_exact(&mut body).await.ok();
        bodies
            .lock()
            .await
            .insert(path.clone(), String::from_utf8_lossy(&body).into_owned());
    }
    let (status, body) = {
        *hits.lock().await.entry(path.clone()).or_insert(0) += 1;
        let mut routes = routes.lock().await;
        match routes.get_mut(&path) {
            Some(seq) if seq.len() > 1 => seq.remove(0),
            Some(seq) => seq
                .first()
                .cloned()
                .unwrap_or((500u16, b"empty route".to_vec())),
            None => (404u16, b"no route".to_vec()),
        }
    };
    let head = format!(
        "HTTP/1.1 {status} t\r\nContent-Length: {}\r\nConnection: close\r\n\r\n",
        body.len()
    );
    let mut full = head.into_bytes();
    full.extend_from_slice(&body);
    let mut sock = reader.into_inner();
    sock.write_all(&full).await?;
    sock.flush().await?;
    Ok(())
}

/// Extracts a `value: &str` for `header_name` from a raw `Name: value\r\n`
/// header line (case-insensitive name).
fn lowercase_header(raw: &[u8], header_name: &str) -> Option<String> {
    let line = String::from_utf8_lossy(raw);
    let mut parts = line.splitn(2, ':');
    let name = parts.next()?.trim();
    if name.eq_ignore_ascii_case(header_name) {
        Some(parts.next()?.trim().trim_end().to_owned())
    } else {
        None
    }
}

/// Convenience: routes from `(path, status, body-as-str)` triples.
pub fn static_routes(entries: &[(&str, u16, &str)]) -> HashMap<String, Vec<(u16, Vec<u8>)>> {
    entries
        .iter()
        .map(|(path, status, body)| {
            (
                (*path).to_owned(),
                vec![(*status, body.as_bytes().to_vec())],
            )
        })
        .collect()
}
