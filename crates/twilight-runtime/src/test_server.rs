//! Test-only in-process HTTP server on loopback. Never compiled into the
//! launcher binary; used exclusively by the hermetic Adoptium tests.
#![cfg(test)]

use std::collections::HashMap;
use std::net::SocketAddr;

use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::net::{TcpListener, TcpStream};

/// Path (including query string) -> `(status, body)`.
pub type Routes = HashMap<String, (u16, Vec<u8>)>;

/// Starts a loopback server and returns its bound address. Metadata bodies may
/// contain `{{BASE}}`, which is replaced by `http://<addr>` at serve time so
/// fixtures can link to the archive without knowing the port in advance.
pub async fn spawn(routes: Routes) -> SocketAddr {
    let listener = TcpListener::bind("127.0.0.1:0")
        .await
        .expect("bind loopback");
    let addr = listener.local_addr().expect("bound address");
    tokio::spawn(async move {
        while let Ok((socket, _)) = listener.accept().await {
            let routes = routes.clone();
            let base = format!("http://{addr}");
            tokio::spawn(async move {
                let _ = serve(socket, routes, &base).await;
            });
        }
    });
    addr
}

fn expand_base(body: &[u8], base: &str) -> Vec<u8> {
    const TOKEN: &[u8] = b"{{BASE}}";
    if !body.windows(TOKEN.len()).any(|window| window == TOKEN) {
        return body.to_vec();
    }
    let mut out = Vec::with_capacity(body.len());
    let mut cursor = 0;
    while cursor < body.len() {
        if body[cursor..].starts_with(TOKEN) {
            out.extend_from_slice(base.as_bytes());
            cursor += TOKEN.len();
        } else {
            out.push(body[cursor]);
            cursor += 1;
        }
    }
    out
}

async fn serve(socket: TcpStream, routes: Routes, base: &str) -> std::io::Result<()> {
    let mut reader = BufReader::new(socket);
    let mut request_line = Vec::new();
    reader.read_until(b'\n', &mut request_line).await?;
    let mut header = Vec::new();
    loop {
        header.clear();
        reader.read_until(b'\n', &mut header).await?;
        if header == b"\r\n" || header == b"\n" || header.is_empty() {
            break;
        }
    }
    let path = String::from_utf8_lossy(&request_line)
        .split_whitespace()
        .nth(1)
        .unwrap_or_default()
        .to_owned();
    let (status, raw_body) = match routes.get(&path) {
        Some((status, body)) => (*status, body.clone()),
        None => (404, b"no route".to_vec()),
    };
    let body = expand_base(&raw_body, base);
    let head = format!(
        "HTTP/1.1 {status} test\r\nContent-Length: {}\r\nConnection: close\r\n\r\n",
        body.len()
    );
    let mut response = head.into_bytes();
    response.extend_from_slice(&body);
    let mut socket = reader.into_inner();
    socket.write_all(&response).await?;
    socket.flush().await?;
    Ok(())
}
