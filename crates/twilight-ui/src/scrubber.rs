//! Strict, dependency-free scrubber for the opt-in crash reporter.
//!
//! Every value that reaches a report is passed through [`scrub_text`]. The
//! scrubber is intentionally conservative: when a string looks like it might
//! carry a home path, an account name, a token, an address or an opaque local
//! identifier, it is replaced with a fixed placeholder.

use std::collections::HashMap;
use std::fmt::Write as _;

/// Everything a crash report is allowed to describe. No account, endpoint,
/// executable path or arbitrary filesystem data is part of this struct.
pub struct CrashReportInput {
    pub launcher_version: String,
    pub channel: String,
    pub os: String,
    pub arch: String,
    pub minecraft_version: String,
    pub loader: String,
    pub loader_version: String,
    pub java_major: Option<i32>,
    pub gc_preset: String,
    pub tail_log: String,
    pub mod_filenames: Vec<String>,
    pub public_mods: HashMap<String, String>,
}

const MAX_FIELD_CHARS: usize = 200;
const MAX_TAIL_BYTES: usize = 16 * 1024;
const MAX_VALUE_LEN: usize = 128;

// Longest first: `Setting user:` must win over `USER:` and `x-api-key:` over
// `API-KEY:`.
const PLAYER_LABELS: &[&str] = &[
    "Setting user:",
    "PLAYER NAME:",
    "PLAYERNAME:",
    "PLAYER_NAME:",
    "--USERNAME",
    "-USERNAME",
    "USERNAME=",
    "USERNAME:",
    "USER:",
];
const TOKEN_LABELS: &[&str] = &[
    "--ACCESSTOKEN",
    "-ACCESSTOKEN",
    "ACCESSTOKEN=",
    "ACCESSTOKEN:",
    "--CLIENTTOKEN",
    "-CLIENTTOKEN",
    "CLIENTTOKEN=",
    "CLIENTTOKEN:",
    "SESSIONTOKEN=",
    "SESSIONTOKEN:",
    "X-API-KEY:",
    "X-API-KEY=",
    "X-API-KEY-",
    "AUTHORIZATION:",
    "BEARER",
    "API-KEY:",
    "API-KEY=",
    "API-KEY-",
    "API_KEY:",
    "API_KEY=",
    "API_KEY-",
    "APIKEY:",
    "APIKEY=",
    "APIKEY-",
    "TOKEN=",
];

const TLDS: &[&str] = &[
    "com", "net", "org", "edu", "gov", "io", "dev", "gg", "me", "co", "uk", "ru", "cn", "de", "fr",
    "info", "biz", "xyz", "top", "cc", "tv", "us", "ca", "au", "nl", "se", "no", "fi", "pl", "br",
    "jp", "kr", "sg", "eu", "app", "cloud", "tech", "online", "site", "club", "space", "world",
    "art", "shop",
];

/// Case-insensitive ASCII prefix check that never slices at a non-boundary.
fn starts_with_ascii_ci(bytes: &[u8], at: usize, needle: &str) -> bool {
    let needle = needle.as_bytes();
    at + needle.len() <= bytes.len()
        && bytes[at..at + needle.len()]
            .iter()
            .zip(needle)
            .all(|(actual, expected)| actual.eq_ignore_ascii_case(expected))
}

/// Applies one rewrite rule over a string. A rule returns the exclusive end of
/// the match plus its replacement, or `None` to copy the current character.
fn rewrite(text: &str, mut find: impl FnMut(&[u8], usize) -> Option<(usize, String)>) -> String {
    let bytes = text.as_bytes();
    let mut out = String::with_capacity(text.len());
    let mut i = 0;
    while i < bytes.len() {
        if let Some((end, replacement)) = find(bytes, i) {
            out.push_str(&replacement);
            i = end;
        } else {
            let ch = text[i..].chars().next().unwrap_or('\u{fffd}');
            out.push(ch);
            i += ch.len_utf8();
        }
    }
    out
}

/// Drops carriage returns and turns other control characters into spaces, so
/// a crafted null byte or escape sequence cannot hide a value from later
/// rules. Newlines and tabs are kept for log readability.
fn normalize_controls(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    for ch in text.chars() {
        if ch == '\r' {
            continue;
        }
        if ch == '\n' || ch == '\t' {
            out.push(ch);
        } else if ch.is_control() {
            out.push(' ');
        } else {
            out.push(ch);
        }
    }
    out
}

/// Replaces the value after a known label while preserving the label itself.
fn redact_labeled(text: &str, labels: &[&str], replacement: &str) -> String {
    rewrite(text, |bytes, i| {
        for label in labels {
            if starts_with_ascii_ci(bytes, i, label) {
                let mut end = i + label.len();
                while end < bytes.len() && bytes[end].is_ascii_whitespace() {
                    end += 1;
                }
                // Quoted values keep their quotes but lose their contents.
                if matches!(bytes.get(end).copied(), Some(b'"') | Some(b'\'')) {
                    end += 1;
                }
                let value_start = end;
                while end < bytes.len()
                    && !bytes[end].is_ascii_whitespace()
                    && !matches!(
                        bytes[end],
                        b',' | b';'
                            | b'"'
                            | b'\''
                            | b'<'
                            | b'>'
                            | b'='
                            | b'|'
                            | b'('
                            | b')'
                            | b'['
                            | b']'
                    )
                    && end - value_start < MAX_VALUE_LEN
                {
                    end += 1;
                }
                let prefix = &text[i..value_start];
                return Some((end, format!("{prefix}{replacement}")));
            }
        }
        None
    })
}

fn is_b64_char(byte: u8) -> bool {
    byte.is_ascii_alphanumeric() || matches!(byte, b'+' | b'/' | b'=')
}

/// Catches JWTs and long opaque hex/base64 strings that have no helpful label.
fn redact_opaque_tokens(text: &str) -> String {
    rewrite(text, |bytes, i| {
        if starts_with_ascii_ci(bytes, i, "eyj") {
            let mut end = i;
            while end < bytes.len()
                && (bytes[end].is_ascii_alphanumeric() || matches!(bytes[end], b'.' | b'_' | b'-'))
            {
                end += 1;
            }
            let run = &bytes[i..end];
            let dots = run.iter().filter(|byte| **byte == b'.').count();
            if dots >= 2 && end - i >= 20 {
                return Some((end, "<REDACTED_TOKEN>".to_owned()));
            }
        }
        if bytes[i].is_ascii_hexdigit() && (i == 0 || !bytes[i - 1].is_ascii_hexdigit()) {
            let mut end = i;
            while end < bytes.len() && bytes[end].is_ascii_hexdigit() {
                end += 1;
            }
            if end - i >= 32 {
                return Some((end, "<REDACTED_TOKEN>".to_owned()));
            }
        }
        if is_b64_char(bytes[i]) && (i == 0 || !is_b64_char(bytes[i - 1])) {
            let mut end = i;
            while end < bytes.len() && is_b64_char(bytes[end]) {
                end += 1;
            }
            let run = &bytes[i..end];
            if end - i >= 40
                && run.iter().any(u8::is_ascii_uppercase)
                && run.iter().any(u8::is_ascii_lowercase)
                && run.iter().any(u8::is_ascii_digit)
            {
                return Some((end, "<REDACTED_TOKEN>".to_owned()));
            }
        }
        None
    })
}

/// Length of a UUID at `start`, if the 8-4-4-4-12 hex layout is complete.
fn uuid_len(bytes: &[u8], start: usize) -> Option<usize> {
    if start > 0 && (bytes[start - 1].is_ascii_alphanumeric() || bytes[start - 1] == b'-') {
        return None;
    }
    let mut pos = start;
    for (index, &len) in [8usize, 4, 4, 4, 12].iter().enumerate() {
        if index > 0 {
            if bytes.get(pos) != Some(&b'-') {
                return None;
            }
            pos += 1;
        }
        let end = pos + len;
        if end > bytes.len() || !bytes[pos..end].iter().all(u8::is_ascii_hexdigit) {
            return None;
        }
        pos = end;
    }
    if bytes
        .get(pos)
        .is_some_and(|byte| byte.is_ascii_alphanumeric() || *byte == b'-')
    {
        return None;
    }
    Some(pos)
}

fn redact_uuid(text: &str) -> String {
    rewrite(text, |bytes, i| {
        uuid_len(bytes, i).map(|end| (end, "<UUID>".to_owned()))
    })
}

/// Length of an IPv6-like address at `start`. Requires a compressed `::`, at
/// least four groups, or a group of four hex digits, so short timestamps such
/// as `12:34:56` are left alone.
fn ipv6_len(bytes: &[u8], start: usize) -> Option<usize> {
    if start > 0 && (bytes[start - 1].is_ascii_hexdigit() || bytes[start - 1] == b':') {
        return None;
    }
    let mut pos = start;
    let mut groups = 0usize;
    let mut longest_group = 0usize;
    let mut compressed = false;
    loop {
        let group_start = pos;
        while pos < bytes.len() && bytes[pos].is_ascii_hexdigit() {
            pos += 1;
        }
        let len = pos - group_start;
        if !(1..=4).contains(&len) {
            return None;
        }
        groups += 1;
        longest_group = longest_group.max(len);
        if pos >= bytes.len() || bytes[pos] != b':' {
            break;
        }
        if bytes.get(pos + 1) == Some(&b':') {
            compressed = true;
            pos += 2;
            if pos >= bytes.len() {
                break;
            }
        } else {
            pos += 1;
            if pos >= bytes.len() {
                return None;
            }
        }
    }
    if groups < 2 || !(compressed || groups >= 4 || (longest_group == 4 && groups >= 3)) {
        return None;
    }
    if bytes
        .get(pos)
        .is_some_and(|byte| byte.is_ascii_hexdigit() || *byte == b':')
    {
        return None;
    }
    Some(pos)
}

fn redact_connections(text: &str) -> String {
    rewrite(text, |bytes, i| {
        for pattern in ["connecting to host, ", "connecting to "] {
            if starts_with_ascii_ci(bytes, i, pattern) {
                let mut end = i + pattern.len();
                while end < bytes.len() && !matches!(bytes[end], b'\n' | b'\r') {
                    end += 1;
                }
                let prefix = &text[i..i + pattern.len()];
                return Some((end, format!("{prefix}<SERVER_ADDRESS>")));
            }
        }
        None
    })
}

/// Account e-mails are PII even when their domain is a public server name.
fn redact_emails(text: &str) -> String {
    rewrite(text, |bytes, i| {
        if !bytes[i].is_ascii_alphanumeric()
            || (i > 0
                && (bytes[i - 1].is_ascii_alphanumeric()
                    || matches!(bytes[i - 1], b'.' | b'_' | b'-' | b'@')))
        {
            return None;
        }
        let mut cursor = i;
        while cursor < bytes.len()
            && (bytes[cursor].is_ascii_alphanumeric()
                || matches!(bytes[cursor], b'.' | b'_' | b'-' | b'+' | b'%'))
        {
            cursor += 1;
        }
        if bytes.get(cursor) != Some(&b'@') {
            return None;
        }
        let mut domain_end = cursor + 1;
        while domain_end < bytes.len()
            && (bytes[domain_end].is_ascii_alphanumeric()
                || matches!(bytes[domain_end], b'.' | b'-'))
        {
            domain_end += 1;
        }
        let domain = &text[cursor + 1..domain_end];
        if domain.contains('.') && !domain.starts_with('.') && !domain.ends_with('.') {
            Some((domain_end, "<REDACTED_EMAIL>".to_owned()))
        } else {
            None
        }
    })
}

/// Redacts dotted hostnames with a public suffix, including a trailing port.
fn redact_domains(text: &str) -> String {
    rewrite(text, |bytes, i| {
        if !bytes[i].is_ascii_alphanumeric()
            || (i > 0
                && (bytes[i - 1].is_ascii_alphanumeric() || matches!(bytes[i - 1], b'.' | b'-')))
        {
            return None;
        }
        let mut end = i;
        while end < bytes.len()
            && (bytes[end].is_ascii_alphanumeric() || matches!(bytes[end], b'.' | b'-'))
        {
            end += 1;
        }
        let candidate = &text[i..end];
        let (_, suffix) = candidate.rsplit_once('.')?;
        if candidate.starts_with('.')
            || candidate.ends_with('.')
            || candidate.ends_with('-')
            || candidate.len() > 253
            || !TLDS.iter().any(|tld| suffix.eq_ignore_ascii_case(tld))
        {
            return None;
        }
        if bytes.get(end) == Some(&b':') {
            let mut port_end = end + 1;
            while port_end < bytes.len() && bytes[port_end].is_ascii_digit() {
                port_end += 1;
            }
            if port_end > end + 1 {
                end = port_end;
            }
        }
        Some((end, "<SERVER_ADDRESS>".to_owned()))
    })
}

fn redact_ipv4(text: &str) -> String {
    rewrite(text, |bytes, i| {
        if !bytes[i].is_ascii_digit()
            || (i > 0 && (bytes[i - 1].is_ascii_digit() || bytes[i - 1] == b'.'))
        {
            return None;
        }
        let mut end = i;
        let mut dots = 0usize;
        while end < bytes.len() && (bytes[end].is_ascii_digit() || bytes[end] == b'.') {
            if bytes[end] == b'.' {
                dots += 1;
            }
            end += 1;
        }
        if dots >= 3 && end - i <= 64 {
            Some((end, "<REDACTED_IP>".to_owned()))
        } else {
            None
        }
    })
}

fn redact_ipv6(text: &str) -> String {
    rewrite(text, |bytes, i| {
        ipv6_len(bytes, i).map(|end| (end, "<REDACTED_IP>".to_owned()))
    })
}

fn redact_username(text: &str) -> String {
    let name = std::env::var("USERNAME")
        .or_else(|_| std::env::var("USER"))
        .unwrap_or_default();
    let name = name.trim();
    if name.is_empty() {
        return text.to_owned();
    }
    rewrite(text, |bytes, i| {
        if !starts_with_ascii_ci(bytes, i, name) {
            return None;
        }
        let end = i + name.len();
        let before_ok = i == 0 || (!bytes[i - 1].is_ascii_alphanumeric() && bytes[i - 1] != b'_');
        let after_ok =
            end == bytes.len() || (!bytes[end].is_ascii_alphanumeric() && bytes[end] != b'_');
        if before_ok && after_ok {
            Some((end, "<USER>".to_owned()))
        } else {
            None
        }
    })
}

fn redact_user_home(text: &str) -> String {
    rewrite(text, |bytes, i| {
        if i + 4 <= bytes.len()
            && bytes[i].is_ascii_alphabetic()
            && bytes[i + 1] == b':'
            && bytes[i + 2] == b'\\'
            && starts_with_ascii_ci(bytes, i + 3, "users\\")
        {
            let mut end = i + 3 + "users\\".len();
            let start = end;
            while end < bytes.len()
                && !matches!(bytes[end], b'\\' | b'/' | b'\n' | b'\r')
                && end - start < 128
            {
                end += 1;
            }
            return Some((end, "<USER_HOME>".to_owned()));
        }
        for prefix in ["/home/", "/Users/"] {
            if !starts_with_ascii_ci(bytes, i, prefix) {
                continue;
            }
            if i > 0 && matches!(bytes[i - 1], b'/' | b':' | b'\\') {
                continue;
            }
            let mut end = i + prefix.len();
            let start = end;
            while end < bytes.len()
                && !matches!(bytes[end], b'/' | b'\\' | b'\n' | b'\r' | b' ' | b'\t')
                && end - start < 128
            {
                end += 1;
            }
            return Some((end, "<USER_HOME>".to_owned()));
        }
        None
    })
}

fn redact_appdata(text: &str) -> String {
    rewrite(text, |bytes, i| {
        for marker in [
            "%LOCALAPPDATA%",
            "$env:APPDATA",
            "${APPDATA}",
            "%APPDATA%",
            "$APPDATA",
            "AppData\\Roaming",
            "AppData\\Local",
            "AppData/Roaming",
            "AppData/Local",
        ] {
            if starts_with_ascii_ci(bytes, i, marker) {
                return Some((i + marker.len(), "<APPDATA>".to_owned()));
            }
        }
        None
    })
}

fn redact_absolute_paths(text: &str) -> String {
    rewrite(text, |bytes, i| {
        if i + 3 <= bytes.len()
            && bytes[i].is_ascii_alphabetic()
            && bytes[i + 1] == b':'
            && bytes[i + 2] == b'\\'
        {
            let mut end = i + 3;
            while end < bytes.len()
                && !bytes[end].is_ascii_whitespace()
                && !matches!(bytes[end], b'"' | b'\'' | b'<' | b'>')
            {
                end += 1;
            }
            if end > i + 3 {
                return Some((end, "<PATH>".to_owned()));
            }
        }
        if bytes[i] == b'/'
            && (i == 0
                || matches!(
                    bytes[i - 1],
                    b' ' | b'\t' | b'\n' | b'(' | b'[' | b'"' | b'\'' | b'='
                ))
        {
            let mut end = i + 1;
            while end < bytes.len()
                && !bytes[end].is_ascii_whitespace()
                && !matches!(bytes[end], b'"' | b'\'' | b'<' | b'>')
            {
                end += 1;
            }
            return Some((end, "<PATH>".to_owned()));
        }
        None
    })
}

/// Scrubs arbitrary log text. The order is deliberate: labelled values first,
/// then opaque tokens and addresses, then paths (so an already-inserted
/// placeholder is never mistaken for a path).
pub fn scrub_text(text: &str) -> String {
    let normalized = normalize_controls(text);
    let scrubbed = redact_labeled(&normalized, PLAYER_LABELS, "<PLAYER>");
    let scrubbed = redact_labeled(&scrubbed, TOKEN_LABELS, "<REDACTED_TOKEN>");
    let scrubbed = redact_opaque_tokens(&scrubbed);
    let scrubbed = redact_uuid(&scrubbed);
    let scrubbed = redact_connections(&scrubbed);
    let scrubbed = redact_emails(&scrubbed);
    let scrubbed = redact_domains(&scrubbed);
    let scrubbed = redact_ipv4(&scrubbed);
    let scrubbed = redact_ipv6(&scrubbed);
    let scrubbed = redact_username(&scrubbed);
    let scrubbed = redact_user_home(&scrubbed);
    let scrubbed = redact_appdata(&scrubbed);
    normalize_controls(&redact_absolute_paths(&scrubbed))
}

/// One-line, length-bounded version of a scalar field.
fn field(raw: &str) -> String {
    let flattened: String = scrub_text(raw)
        .chars()
        .map(|ch| if matches!(ch, '\n' | '\r') { ' ' } else { ch })
        .take(MAX_FIELD_CHARS)
        .collect();
    flattened.trim().to_owned()
}

fn tail_slice(text: &str, max_bytes: usize) -> &str {
    if text.len() <= max_bytes {
        return text;
    }
    let mut start = text.len() - max_bytes;
    while start < text.len() && !text.is_char_boundary(start) {
        start += 1;
    }
    &text[start..]
}

/// Case-insensitive literal replacement. Local jar names are stored lowercased
/// for matching, while the log preserves the original case, so a plain
/// `str::replace` could leak `My-Secret-Hack.jar` after `my-secret-hack.jar`
/// was recorded.
fn replace_case_insensitive(haystack: &str, needle: &str, replacement: &str) -> String {
    if needle.is_empty() {
        return haystack.to_owned();
    }
    let lower_haystack = haystack.to_ascii_lowercase();
    let lower_needle = needle.to_ascii_lowercase();
    let mut out = String::with_capacity(haystack.len());
    let mut cursor = 0;
    while let Some(offset) = lower_haystack[cursor..].find(&lower_needle) {
        let start = cursor + offset;
        out.push_str(&haystack[cursor..start]);
        out.push_str(replacement);
        cursor = start + needle.len();
    }
    out.push_str(&haystack[cursor..]);
    out
}

/// Builds the deterministic plain-text report. Only the fields of
/// [`CrashReportInput`] are emitted, each already scrubbed; public mod ids are
/// sorted and local jars are reduced to a bare count marker.
pub fn scrub_crash_report(input: &CrashReportInput) -> String {
    let mut public: Vec<String> = Vec::new();
    let mut local: Vec<String> = Vec::new();
    for filename in &input.mod_filenames {
        let key = scrub_text(filename).to_lowercase();
        if key.is_empty() || key.len() > 256 {
            continue;
        }
        if let Some(summary) = input.public_mods.get(&key) {
            public.push(format!("public: {}", field(summary)));
        } else {
            local.push(key);
        }
    }
    public.sort();
    public.dedup();
    local.sort_by(|a, b| b.len().cmp(&a.len()).then_with(|| a.cmp(b)));

    let mut tail = scrub_text(tail_slice(&input.tail_log, MAX_TAIL_BYTES));
    for name in &local {
        tail = replace_case_insensitive(&tail, name, "<local-mod>");
    }

    let launcher_version = field(&input.launcher_version);
    let channel = field(&input.channel);
    let os = field(&input.os);
    let arch = field(&input.arch);
    let minecraft_version = field(&input.minecraft_version);
    let loader = field(&input.loader);
    let loader_version = field(&input.loader_version);
    let java_major = input
        .java_major
        .map(|major| major.to_string())
        .unwrap_or_else(|| "unknown".to_owned());
    let gc_preset = field(&input.gc_preset);

    let mut report = String::new();
    report.push_str("TwilightMC crash report\n");
    writeln!(&mut report, "version: {launcher_version}").expect("writing to a String cannot fail");
    writeln!(&mut report, "channel: {channel}").expect("writing to a String cannot fail");
    writeln!(&mut report, "os: {os}").expect("writing to a String cannot fail");
    writeln!(&mut report, "arch: {arch}").expect("writing to a String cannot fail");
    writeln!(&mut report, "minecraft: {minecraft_version}")
        .expect("writing to a String cannot fail");
    writeln!(&mut report, "loader: {loader}").expect("writing to a String cannot fail");
    writeln!(&mut report, "loader_version: {loader_version}")
        .expect("writing to a String cannot fail");
    writeln!(&mut report, "java_major: {java_major}").expect("writing to a String cannot fail");
    writeln!(&mut report, "gc_preset: {gc_preset}").expect("writing to a String cannot fail");
    report.push_str("mods:\n");
    for line in &public {
        writeln!(&mut report, "{line}").expect("writing to a String cannot fail");
    }
    for _ in &local {
        report.push_str("<local-mod>\n");
    }
    report.push_str("tail_log:\n");
    report.push_str(&tail);
    report
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample_input() -> CrashReportInput {
        let tail_log = [
            "Setting user: RealPlayer",
            "C:\\Users\\Alice\\AppData\\Roaming\\twilight\\logs\\latest.log",
            "/home/bob/.minecraft/saves/world1",
            "/Users/Alice/Library/Application Support/minecraft",
            "--username RealPlayer --version 1.21.4",
            "username=RealPlayer",
            "UUID 550e8400-e29b-41d4-a716-446655440000",
            "--accessToken eyJhbGciOi.signature.thirdpart --clientToken secret-client",
            "x-api-key: curseforge-api-key-abc123",
            "Connecting to secret.smp.net, 25565",
            "Resolved secret.smp.net/192.168.1.42",
            "Peer [2603:1047::1]:25565",
            "opaque 0123456789abcdef0123456789abcdef",
            "Running C:\\Program Files\\Java\\bin\\java.exe",
        ]
        .join("\n");
        let mut public_mods = HashMap::new();
        public_mods.insert("sodium.jar".to_owned(), "modrinth:sodium/0.6.13".to_owned());
        CrashReportInput {
            launcher_version: "0.7.1".to_owned(),
            channel: "bolide".to_owned(),
            os: "windows".to_owned(),
            arch: "x86_64".to_owned(),
            minecraft_version: "1.21.4".to_owned(),
            loader: "fabric".to_owned(),
            loader_version: "0.16.9".to_owned(),
            java_major: Some(21),
            gc_preset: "G1".to_owned(),
            tail_log,
            mod_filenames: vec!["sodium.jar".to_owned(), "my-secret-hack.jar".to_owned()],
            public_mods,
        }
    }

    #[test]
    fn scrub_text_redacts_sensitive_patterns() {
        let text = sample_input().tail_log;
        let scrubbed = scrub_text(&text);
        for needle in [
            "C:\\Users\\Alice",
            "/home/bob",
            "/Users/Alice",
            "AppData\\Roaming",
            "RealPlayer",
            "550e8400-e29b-41d4-a716-446655440000",
            "eyJhbGciOi.signature.thirdpart",
            "secret-client",
            "curseforge-api-key-abc123",
            "secret.smp.net",
            "192.168.1.42",
            "2603:1047::1",
            "0123456789abcdef0123456789abcdef",
            "C:\\Program Files",
        ] {
            assert!(!scrubbed.contains(needle), "leaked {needle:?}: {scrubbed}");
        }
        for placeholder in [
            "<USER_HOME>",
            "<APPDATA>",
            "<PLAYER>",
            "<UUID>",
            "<REDACTED_TOKEN>",
            "<SERVER_ADDRESS>",
            "<REDACTED_IP>",
            "<PATH>",
        ] {
            assert!(
                scrubbed.contains(placeholder),
                "missing {placeholder}: {scrubbed}"
            );
        }
    }

    #[test]
    fn scrub_text_preserves_player_labels() {
        assert_eq!(
            scrub_text("Setting user: RealPlayer"),
            "Setting user: <PLAYER>"
        );
        assert_eq!(scrub_text("username=Foo"), "username=<PLAYER>");
        assert_eq!(scrub_text("--username Foo"), "--username <PLAYER>");
        assert_eq!(scrub_text("Username: Foo"), "Username: <PLAYER>");
    }

    #[test]
    fn scrub_text_handles_ips_and_connections() {
        assert_eq!(scrub_text("host 192.168.1.42"), "host <REDACTED_IP>");
        assert_eq!(scrub_text("[2603:1047::1]:25565"), "[<REDACTED_IP>]:25565");
        assert_eq!(
            scrub_text("Connecting to secret.smp.net, 25565"),
            "Connecting to <SERVER_ADDRESS>"
        );
    }

    #[test]
    fn report_contains_only_scrubbed_data() {
        let report = scrub_crash_report(&sample_input());
        for needle in [
            "C:\\Users\\Alice",
            "/home/bob",
            "RealPlayer",
            "192.168.1.42",
            "2603:1047::1",
            "Connecting to secret.smp.net, 25565",
            "curseforge-api-key-abc123",
            "550e8400-e29b-41d4-a716-446655440000",
            "eyJhbGciOi.signature.thirdpart",
            "my-secret-hack.jar",
        ] {
            assert!(!report.contains(needle), "leaked {needle:?}: {report}");
        }
        assert!(
            report.contains("public: modrinth:sodium/0.6.13"),
            "public mod id must survive: {report}"
        );
        assert!(report.contains("<local-mod>"), "local mod marker missing");
        assert!(report.contains("version: 0.7.1"));
        assert!(report.contains("java_major: 21"));
    }

    #[test]
    fn local_mod_names_are_removed_case_insensitively() {
        let mut input = sample_input();
        input
            .tail_log
            .push_str("\nLoading My-Secret-Hack.jar then my-secret-hack.jar");
        let report = scrub_crash_report(&input);
        assert!(
            !report.to_ascii_lowercase().contains("my-secret-hack.jar"),
            "local jar name leaked with different case: {report}"
        );
        assert!(
            report.matches("<local-mod>").count() >= 3,
            "expected the list marker plus both log occurrences: {report}"
        );
    }

    #[test]
    fn report_is_deterministic() {
        let input = sample_input();
        assert_eq!(scrub_crash_report(&input), scrub_crash_report(&input));
    }
}
