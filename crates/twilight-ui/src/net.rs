//! Bounded retries for transient HTTP failures. Only the statuses the
//! CurseForge API uses to signal "try again" (429 and 503) are retried;
//! everything else — including transport errors — goes straight back to the
//! caller, which decides how to present it.

use std::time::Duration;

/// Default attempt budget for API calls that use [`retry_request`].
pub(crate) const MAX_ATTEMPTS: u32 = 3;

const MAX_DELAY: Duration = Duration::from_millis(2000);
const BASE_DELAY_MS: u64 = 250;

fn is_retryable(status: reqwest::StatusCode) -> bool {
    matches!(status.as_u16(), 429 | 503)
}

/// Delay before the next attempt. A parseable numeric `Retry-After` (seconds)
/// wins; otherwise use 250 ms, 500 ms, 1 s, … capped at 2 s. `attempt` is the
/// number of attempts already made (1-based).
fn retry_delay(headers: &reqwest::header::HeaderMap, attempt: u32) -> Duration {
    if let Some(seconds) = headers
        .get(reqwest::header::RETRY_AFTER)
        .and_then(|value| value.to_str().ok())
        .and_then(|text| text.trim().parse::<u64>().ok())
    {
        return Duration::from_secs(seconds).min(MAX_DELAY);
    }
    let shift = attempt.saturating_sub(1).min(10);
    Duration::from_millis(BASE_DELAY_MS.saturating_mul(1u64 << shift)).min(MAX_DELAY)
}

/// Runs `op` up to `max_attempts` times (clamped to 1…[`MAX_ATTEMPTS`]).
/// Successful and non-retryable responses are returned immediately; when
/// retries are exhausted the last retryable status becomes a clear error.
pub(crate) async fn retry_request<F, Fut>(
    max_attempts: u32,
    mut op: F,
) -> Result<reqwest::Response, String>
where
    F: FnMut() -> Fut,
    Fut: std::future::Future<Output = Result<reqwest::Response, String>>,
{
    let attempts = max_attempts.clamp(1, MAX_ATTEMPTS);
    let mut attempt = 1;
    loop {
        let response = match op().await {
            Ok(response) => response,
            Err(error) => return Err(error),
        };
        let status = response.status();
        if !is_retryable(status) {
            return Ok(response);
        }
        if attempt == attempts {
            return Err(format!(
                "request failed after {attempts} attempts with HTTP {}",
                status.as_u16()
            ));
        }
        let delay = retry_delay(response.headers(), attempt);
        if !delay.is_zero() {
            tokio::time::sleep(delay).await;
        }
        attempt += 1;
    }
}

#[cfg(test)]
mod tests {
    use std::io::{Read, Write};
    use std::net::TcpListener;
    use std::sync::Arc;
    use std::sync::atomic::{AtomicUsize, Ordering};

    use super::*;

    /// Loopback server answering each connection with the next status in the
    /// sequence (the last one repeats), counting requests so tests can assert
    /// exactly how many attempts were made. `Retry-After: 0` keeps the tests
    /// fast while still exercising the header-parsing path.
    fn loopback_sequence(statuses: Vec<u16>) -> (String, Arc<AtomicUsize>) {
        let listener = TcpListener::bind("127.0.0.1:0").unwrap();
        let base = format!("http://{}", listener.local_addr().unwrap());
        let count = Arc::new(AtomicUsize::new(0));
        let served = Arc::clone(&count);
        std::thread::spawn(move || {
            for (index, stream) in listener.incoming().enumerate() {
                let Ok(mut stream) = stream else {
                    break;
                };
                let mut buf = [0u8; 2048];
                let _ = stream.read(&mut buf);
                served.fetch_add(1, Ordering::SeqCst);
                let status = statuses
                    .get(index)
                    .copied()
                    .unwrap_or_else(|| *statuses.last().unwrap_or(&200));
                let body = "{}";
                let retry_after = if is_retryable(
                    reqwest::StatusCode::from_u16(status).unwrap_or(reqwest::StatusCode::OK),
                ) {
                    "Retry-After: 0\r\n"
                } else {
                    ""
                };
                let response = format!(
                    "HTTP/1.1 {status} TW\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n{retry_after}\r\n{body}",
                    body.len()
                );
                let _ = stream.write_all(response.as_bytes());
            }
        });
        (base, count)
    }

    #[tokio::test]
    async fn retry_succeeds_after_a_429() {
        let (base, count) = loopback_sequence(vec![429, 200]);
        let client = reqwest::Client::new();
        let client = &client;
        let base = &base;
        let response = retry_request(MAX_ATTEMPTS, || async move {
            client
                .get(format!("{base}/search"))
                .send()
                .await
                .map_err(|e| e.to_string())
        })
        .await
        .unwrap();
        assert_eq!(response.status(), reqwest::StatusCode::OK);
        assert_eq!(count.load(Ordering::SeqCst), 2);
    }

    #[tokio::test]
    async fn repeated_503_exhausts_the_attempt_budget() {
        let (base, count) = loopback_sequence(vec![503]);
        let client = reqwest::Client::new();
        let client = &client;
        let base = &base;
        let error = retry_request(MAX_ATTEMPTS, || async move {
            client
                .get(format!("{base}/search"))
                .send()
                .await
                .map_err(|e| e.to_string())
        })
        .await
        .unwrap_err();
        assert_eq!(count.load(Ordering::SeqCst), 3, "bounded to three attempts");
        assert!(error.contains("3 attempts"), "{error}");
        assert!(error.contains("503"), "{error}");
    }

    #[tokio::test]
    async fn a_400_is_never_retried() {
        let (base, count) = loopback_sequence(vec![400, 200]);
        let client = reqwest::Client::new();
        let client = &client;
        let base = &base;
        let response = retry_request(MAX_ATTEMPTS, || async move {
            client
                .get(format!("{base}/search"))
                .send()
                .await
                .map_err(|e| e.to_string())
        })
        .await
        .unwrap();
        assert_eq!(response.status(), reqwest::StatusCode::BAD_REQUEST);
        assert_eq!(count.load(Ordering::SeqCst), 1);
    }

    #[test]
    fn retry_after_seconds_are_honoured_and_capped() {
        let mut headers = reqwest::header::HeaderMap::new();
        headers.insert(
            reqwest::header::RETRY_AFTER,
            reqwest::header::HeaderValue::from_static("7"),
        );
        assert_eq!(retry_delay(&headers, 1), Duration::from_secs(2));
        headers.insert(
            reqwest::header::RETRY_AFTER,
            reqwest::header::HeaderValue::from_static("1"),
        );
        assert_eq!(retry_delay(&headers, 2), Duration::from_secs(1));
    }

    #[test]
    fn exponential_backoff_is_capped_at_two_seconds() {
        let headers = reqwest::header::HeaderMap::new();
        assert_eq!(retry_delay(&headers, 1), Duration::from_millis(250));
        assert_eq!(retry_delay(&headers, 2), Duration::from_millis(500));
        assert_eq!(retry_delay(&headers, 3), Duration::from_millis(1000));
        assert_eq!(retry_delay(&headers, 12), MAX_DELAY);
    }
}
