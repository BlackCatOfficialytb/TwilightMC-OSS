//! Server config files: `eula.txt`, `server.properties` (comment/order
//! preserving) and the minimal `Pumpkin.toml` for native Pumpkin servers.

use std::collections::HashMap;

/// Writes (or overwrites) `eula.txt` with `eula=true`.
pub fn eula_txt() -> String {
    "# Accepted via TwilightMC (Minecraft EULA: https://aka.ms/MinecraftEULA)\neula=true\n".into()
}

/// One raw line of `server.properties`: a comment/blank or a `key=value` entry.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum PropertyLine {
    Comment(String),
    Entry { key: String, value: String },
}

/// Parses `server.properties` into ordered lines; unknown lines stay comments.
pub fn parse_properties(raw: &str) -> Vec<PropertyLine> {
    raw.lines()
        .filter(|l| !l.trim().is_empty())
        .map(|l| {
            if l.trim_start().starts_with('#') {
                PropertyLine::Comment(l.to_owned())
            } else {
                match l.split_once('=') {
                    Some((k, v)) => PropertyLine::Entry {
                        key: k.trim().to_owned(),
                        value: v.trim().to_owned(),
                    },
                    None => PropertyLine::Comment(l.to_owned()),
                }
            }
        })
        .collect()
}

/// Flat key/value map of the entries.
pub fn properties_map(raw: &str) -> HashMap<String, String> {
    parse_properties(raw)
        .into_iter()
        .filter_map(|l| match l {
            PropertyLine::Entry { key, value } => Some((key, value)),
            PropertyLine::Comment(_) => None,
        })
        .collect()
}

/// Serialises ordered lines back to the file format.
pub fn serialize_properties(lines: &[PropertyLine]) -> String {
    let mut out = String::new();
    for line in lines {
        match line {
            PropertyLine::Comment(c) => {
                out.push_str(c);
            }
            PropertyLine::Entry { key, value } => {
                out.push_str(key);
                out.push('=');
                out.push_str(value);
            }
        }
        out.push('\n');
    }
    out
}

/// Sets `key=value` for every matching entry (in place, preserving position)
/// and appends unknown keys at the end.
pub fn update_properties(lines: &mut Vec<PropertyLine>, updates: &HashMap<String, String>) {
    for line in lines.iter_mut() {
        if let PropertyLine::Entry { key, value } = line
            && let Some(new) = updates.get(key)
        {
            *value = new.clone();
        }
    }
    let known: Vec<String> = lines
        .iter()
        .filter_map(|l| match l {
            PropertyLine::Entry { key, .. } => Some(key.clone()),
            PropertyLine::Comment(_) => None,
        })
        .collect();
    for (k, v) in updates {
        if !known.contains(k) {
            lines.push(PropertyLine::Entry {
                key: k.clone(),
                value: v.clone(),
            });
        }
    }
}

/// Minimal sane defaults for a fresh `server.properties`.
pub fn default_server_properties(port: u16) -> String {
    let defaults = [
        ("server-port", port.to_string()),
        ("online-mode", "true".into()),
        ("gamemode", "survival".into()),
        ("difficulty", "normal".into()),
        ("max-players", "20".into()),
        ("motd", "A TwilightMC Server".into()),
        ("view-distance", "10".into()),
        ("spawn-protection", "16".into()),
        ("enable-command-block", "false".into()),
    ];
    defaults.iter().map(|(k, v)| format!("{k}={v}\n")).collect()
}

/// Minimal `Pumpkin.toml` for native Pumpkin servers (line-based, no toml dep).
pub fn pumpkin_toml(port: u16) -> String {
    format!("[server]\nport = {port}\n")
}

/// `user_jvm_args.txt` for installer-based loaders (Forge/NeoForge): the
/// installer-generated run scripts feed it to java as an @argfile.
pub fn user_jvm_args_txt(min_memory_mb: u32, max_memory_mb: u32) -> String {
    let mut out = String::from("# Managed by TwilightMC\n");
    if min_memory_mb > 0 {
        out.push_str(&format!("-Xms{min_memory_mb}M\n"));
    }
    if max_memory_mb > 0 {
        out.push_str(&format!("-Xmx{max_memory_mb}M\n"));
    }
    out
}

/// Sets one `key = value` inside a single `[section]` of a TOML file,
/// preserving everything else; appends the section when missing.
pub fn update_toml_value(raw: &str, section: &str, key: &str, value: &str) -> String {
    let mut out = String::new();
    let mut in_section = false;
    let mut replaced = false;
    let header = format!("[{section}]");
    for line in raw.lines() {
        if line.trim() == header {
            in_section = true;
        } else if line.trim_start().starts_with('[') {
            if in_section && !replaced {
                out.push_str(&format!("{key} = {value}\n"));
                replaced = true;
            }
            in_section = false;
        } else if in_section {
            let hit = line
                .split_once('=')
                .is_some_and(|(k, _)| k.trim().eq_ignore_ascii_case(key));
            if hit {
                out.push_str(&format!("{key} = {value}\n"));
                replaced = true;
                continue;
            }
        }
        out.push_str(line);
        out.push('\n');
    }
    if !replaced {
        if !out.is_empty() && !out.ends_with("\n\n") {
            out.push('\n');
        }
        out.push_str(&format!("{header}\n{key} = {value}\n"));
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn eula_generator() {
        assert!(eula_txt().contains("eula=true"));
    }

    #[test]
    fn properties_roundtrip_preserves_comments() {
        let raw = "# comment first\nserver-port=25565\nonline-mode=true\nmotd=hello\n";
        let lines = parse_properties(raw);
        assert_eq!(lines.len(), 4);
        assert_eq!(lines[0], PropertyLine::Comment("# comment first".into()));
        assert_eq!(
            lines[1],
            PropertyLine::Entry {
                key: "server-port".into(),
                value: "25565".into()
            }
        );
        let map = properties_map(raw);
        assert_eq!(map.get("server-port").map(String::as_str), Some("25565"));
        assert_eq!(serialize_properties(&lines), raw);
    }

    #[test]
    fn update_properties_in_place_and_append() {
        let raw = "# keep me\nserver-port=25565\nonline-mode=true\n";
        let mut lines = parse_properties(raw);
        let updates = HashMap::from([
            ("server-port".to_owned(), "25566".to_owned()),
            ("brand-new".to_owned(), "yes".to_owned()),
        ]);
        update_properties(&mut lines, &updates);
        let out = serialize_properties(&lines);
        assert!(out.contains("# keep me"));
        assert!(out.contains("server-port=25566"));
        assert!(out.contains("brand-new=yes"));
        assert!(out.starts_with("# keep me\n"));
    }

    #[test]
    fn defaults_and_pumpkin_toml() {
        assert!(default_server_properties(25565).contains("server-port=25565"));
        assert!(default_server_properties(25565).contains("online-mode=true"));
        assert_eq!(pumpkin_toml(25566), "[server]\nport = 25566\n");
    }

    #[test]
    fn user_jvm_args_txt_flags() {
        assert_eq!(
            user_jvm_args_txt(1024, 4096),
            "# Managed by TwilightMC\n-Xms1024M\n-Xmx4096M\n"
        );
        assert_eq!(user_jvm_args_txt(0, 0), "# Managed by TwilightMC\n");
    }

    #[test]
    fn toml_value_update_preserves_layout() {
        let raw = "[server]\nport = 25565\nmax-players = 20\n\n[other]\nflag = true\n";
        let out = update_toml_value(raw, "server", "port", "25570");
        assert!(out.contains("port = 25570"));
        assert!(out.contains("max-players = 20"));
        assert!(out.contains("[other]\nflag = true"));
        // appends a missing section
        let out = update_toml_value("[a]\nx = 1\n", "networking", "port", "1");
        assert!(out.contains("[networking]\nport = 1"));
    }
}
