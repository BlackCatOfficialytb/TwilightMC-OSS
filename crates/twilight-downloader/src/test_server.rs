//! Test-only in-process HTTP server on loopback. Production code must never
//! depend on this module.
#![cfg(test)]

use std::collections::HashMap;

use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::net::{TcpListener, TcpStream};

type Routes = HashMap<String, (u16, Vec<u8>)>;

/// Spawns a one-connection-per-request HTTP server on loopback so tests can
/// exercise failover/parallel logic entirely offline.
pub async fn spawn(routes: Routes) -> std::net::SocketAddr {
    let listener = TcpListener::bind("127.0.0.1:0").await.expect("bind loopback");
    let addr = listener.local_addr().expect("bound address");
    tokio::spawn(async move {
        while let Ok((sock, _)) = listener.accept().await {
            let routes = routes.clone();
            tokio::spawn(async move {
                let _ = serve(sock, routes).await;
            });
        }
    });
    addr
}

async fn serve(sock: TcpStream, routes: Routes) -> std::io::Result<()> {
    let mut reader = BufReader::new(sock);
    let mut request_line = Vec::new();
    reader.read_until(b'\n', &mut request_line).await?;
    // drain remaining headers (the blank line ends them)
    let mut header = Vec::new();
    loop {
        header.clear();
        reader.read_until(b'\n', &mut header).await?;
        if header == b"\r\n" || header == b"\n" || header.is_empty() {
            break;
        }
    }
    let path: String = String::from_utf8_lossy(&request_line)
        .split_whitespace()
        .nth(1)
        .unwrap_or_default()
        .trim()
        .trim_start_matches('/')
        .to_owned();
    let (status, body) = match routes.get(&path) {
        Some((code, body)) => (*code, body.clone()),
        None => (404, b"no route".to_vec()),
    };
    let head = format!("HTTP/1.1 {status} t\r\nContent-Length: {}\r\nConnection: close\r\n\r\n", body.len());
    let mut full = head.into_bytes();
    full.extend_from_slice(&body);
    let mut sock = reader.into_inner();
    sock.write_all(&full).await?;
    sock.flush().await?;
    Ok(())
}
