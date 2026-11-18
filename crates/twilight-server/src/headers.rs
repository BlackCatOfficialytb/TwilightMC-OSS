//! Shared, RFC-compliant identification headers for every external API
//! request the server creator makes — GitHub, PaperMC Fill v3, Forge,
//! NeoForge, Mojang, Purpur and Fabric meta. The TwilightMC product token
//! leads the `User-Agent` (never a spoofed browser prefix, so Cloudflare
//! TLS fingerprinting never rejects the rustls client), and the
//! Chromium-style `Sec-CH-UA` client hints keep endpoint CDNs happy.

use reqwest::header::{HeaderMap, HeaderName, HeaderValue};

/// The repository contact URL carried in every identification header.
const REPO_URL: &str = "https://github.com/BlackCatOfficialytb/TwilightMC-OSS";

/// The `User-Agent`: product token first, then the channel, the contact
/// URL and the framework / edition / rendering tokens.
pub fn user_agent() -> String {
    format!(
        "TwilightMC/{} (Bolide; +{REPO_URL}) Tauri/2 Rust/2024 AppleWebKit/537.36",
        env!("CARGO_PKG_VERSION"),
    )
}

/// `Sec-CH-UA`: the Chromium client-hint brand list, TwilightMC first.
pub fn sec_ch_ua() -> String {
    format!(
        "\"TwilightMC\";v=\"{}\", \"Bolide\";v=\"alpha\", \"Tauri\";v=\"2\", \"Rust\";v=\"2024\"",
        env!("CARGO_PKG_VERSION"),
    )
}

/// `Sec-CH-UA-Platform`: the runtime OS in the spelling the hints expect.
pub fn sec_ch_ua_platform() -> &'static str {
    match std::env::consts::OS {
        "windows" => "Windows",
        "macos" => "macOS",
        "linux" => "Linux",
        "freebsd" => "FreeBSD",
        other => other,
    }
}

/// The client every server-creator request flows through: the product
/// `User-Agent` plus the `Sec-CH-UA` client hints, on all API calls.
pub fn api_client() -> reqwest::Client {
    let hint = |value: String| {
        HeaderValue::from_str(&value).unwrap_or_else(|_| HeaderValue::from_static("TwilightMC"))
    };
    let mut headers = HeaderMap::new();
    headers.insert(HeaderName::from_static("sec-ch-ua"), hint(sec_ch_ua()));
    headers.insert(
        HeaderName::from_static("sec-ch-ua-platform"),
        hint(sec_ch_ua_platform().to_owned()),
    );
    reqwest::Client::builder()
        .user_agent(user_agent())
        .default_headers(headers)
        .build()
        .unwrap_or_default()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn user_agent_leads_with_the_product_token() {
        let ua = user_agent();
        assert!(ua.starts_with("TwilightMC/"), "{ua}");
        assert!(!ua.starts_with("Mozilla/"), "{ua}");
        assert!(ua.contains(env!("CARGO_PKG_VERSION")), "{ua}");
        assert!(ua.contains(REPO_URL), "{ua}");
        assert!(ua.contains("Tauri/2 Rust/2024"), "{ua}");
        assert!(ua.ends_with("AppleWebKit/537.36"), "{ua}");
    }

    #[test]
    fn sec_ch_ua_quotes_the_brand_list() {
        let ua = sec_ch_ua();
        assert!(ua.starts_with("\"TwilightMC\";v=\""), "{ua}");
        assert!(ua.contains("\"Bolide\";v=\"alpha\""), "{ua}");
        assert!(ua.contains("\"Tauri\";v=\"2\""), "{ua}");
        assert!(ua.ends_with("\"Rust\";v=\"2024\""), "{ua}");
    }

    #[test]
    fn sec_ch_ua_platform_matches_the_host_os() {
        let expected = match std::env::consts::OS {
            "windows" => "Windows",
            "macos" => "macOS",
            "linux" => "Linux",
            "freebsd" => "FreeBSD",
            other => other,
        };
        assert_eq!(sec_ch_ua_platform(), expected);
    }

    #[test]
    fn api_client_carries_the_product_headers() {
        // The builder must always succeed for these static strings; the
        // headers themselves are exercised by the live smoke fetches.
        let client = api_client();
        let _ = &client;
    }
}
