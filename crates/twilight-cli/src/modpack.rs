//! `twilight modpack install <PATH_OR_URL>`: stages a Modrinth `.mrpack` into a
//! managed instance — client downloads, overrides extraction and the loader
//! libraries implied by the index dependencies (`fabric-loader` / `quilt-loader`).

use std::collections::BTreeMap;

use twilight_downloader::{DownloadError, ParallelDownloader};
use twilight_modloader::{LoaderProfile, ModLoader, resolve_loader_profile};
use twilight_modrinth::Mrpack;

use crate::cli::ModpackArgs;
use crate::error::CliError;

/// Runs the `modpack install` subcommand and returns the process exit code.
/// A `--dry-run` prints the plan (files, overrides, loader, destinations) and
/// stops before any write; a real run stages loader libraries first, then the
/// mod files, then the overrides, and prints a launch hint.
pub async fn run_install(args: ModpackArgs) -> Result<i32, CliError> {
    let client = reqwest::Client::new();

    // ---- load the pack: url fetch or local read, then strict index parse
    let bytes = fetch_archive(&args.path_or_url).await?;
    let mrpack = Mrpack::from_bytes(bytes)?;
    let index = mrpack.index();

    // ---- loader overlay implied by the dependencies table
    let loader_vote = detect_loader(&index.dependencies)?;
    let loader_profile: Option<LoaderProfile> = match loader_vote {
        Some((loader, pinned)) => {
            let game = non_empty(index.dependencies.get("minecraft").map(String::as_str))
                .unwrap_or_default();
            Some(resolve_loader_profile(&client, loader, &game, pinned.as_deref()).await?)
        }
        None => None,
    };

    // ---- locations: pack slug picks the instance below the shared root
    let shared_dir = match &args.shared_dir {
        Some(dir) => dir.clone(),
        None => crate::cli::shared_default()?,
    };
    let instance_dir = match &args.instance_dir {
        Some(dir) => dir.clone(),
        None => shared_dir
            .join("instances")
            .join(slug(pack_label(index.name.as_str(), &index.version_id))),
    };
    let game_dir = instance_dir.join("minecraft");
    let library_root = shared_dir.join("libraries");

    if args.dry_run {
        println!("twilight --dry-run: modpack install (no downloads, no files written)");
        println!("modpack:   {} ({})", index.name, index.version_id);
        println!(
            "archive:   {} ({} bytes)",
            args.path_or_url,
            mrpack.archive_len()
        );
        println!("instance:  {}", instance_dir.display());
        println!("game dir:  {}", game_dir.display());
        println!("loader:    {}", loader_line(loader_profile.as_ref()));
        println!(
            "downloads: {} client file(s) (+{} server-side skipped)",
            mrpack.download_requests(&game_dir)?.len(),
            mrpack.skipped_server_side()
        );
        println!("overrides: {} extractable", mrpack.override_paths()?.len());
        println!("dependencies: {}", deps_line(&index.dependencies));
        return Ok(0);
    }

    let downloader = ParallelDownloader::new(client.clone(), 8);
    // loader jars stage first so the classpath they lead is complete
    if let Some(profile) = &loader_profile {
        downloader
            .download_all(&profile.download_requests(&library_root))
            .await?;
    }
    let summary = mrpack.install(&game_dir, &downloader).await?;

    println!("twilight: modpack installed");
    println!("modpack:   {} ({})", index.name, index.version_id);
    println!("instance:  {}", instance_dir.display());
    println!("game dir:  {}", game_dir.display());
    println!("loader:    {}", loader_line(loader_profile.as_ref()));
    println!(
        "files:     {} downloaded | overrides copied: {}",
        summary.files_downloaded, summary.overrides_copied
    );
    println!("dependencies: {}", deps_line(&index.dependencies));
    if !game_dir.as_os_str().is_empty() {
        let mut hint = format!(
            "hint: twilight launch {} --shared-dir {} --instance-dir {}",
            non_empty(index.dependencies.get("minecraft").map(String::as_str))
                .unwrap_or_else(|| "<game-version>".to_owned()),
            shared_dir.display(),
            instance_dir.display()
        );
        if let Some(profile) = &loader_profile {
            hint += &format!(
                " --loader {} --loader-version {}",
                profile.loader, profile.loader_version
            );
        }
        println!("{hint}");
    }
    Ok(0)
}

/// Fetches the archive: `http(s)://` URLs go through reqwest (failures map to
/// the CLI's download error type), anything else is a local file read.
async fn fetch_archive(path_or_url: &str) -> Result<Vec<u8>, CliError> {
    if path_or_url.starts_with("http://") || path_or_url.starts_with("https://") {
        fetch_http(path_or_url).await
    } else {
        tokio::fs::read(path_or_url).await.map_err(CliError::from)
    }
}

/// Downloads the raw archive bytes from an `http(s)` mirror.
async fn fetch_http(url: &str) -> Result<Vec<u8>, CliError> {
    let client = reqwest::Client::new();
    let response = client.get(url).send().await.map_err(|source| {
        CliError::Download(DownloadError::Http {
            url: url.to_owned(),
            source,
        })
    })?;
    if !response.status().is_success() {
        return Err(CliError::Download(DownloadError::HttpStatus {
            url: url.to_owned(),
            status: response.status().as_u16(),
        }));
    }
    let bytes = response.bytes().await.map_err(|source| {
        CliError::Download(DownloadError::Http {
            url: url.to_owned(),
            source,
        })
    })?;
    Ok(bytes.to_vec())
}

/// Reads the loader decision out of the index dependencies: `fabric-loader`
/// and `quilt-loader` map to their loader, an empty version means "latest".
/// A pack claiming both loaders is ambiguous and rejected.
fn detect_loader(
    dependencies: &BTreeMap<String, String>,
) -> Result<Option<(ModLoader, Option<String>)>, CliError> {
    match (
        dependencies.get("fabric-loader"),
        dependencies.get("quilt-loader"),
    ) {
        (Some(_), Some(_)) => Err(CliError::ModpackAmbiguousLoaders),
        (Some(version), None) => Ok(Some((ModLoader::Fabric, non_empty(Some(version.as_str()))))),
        (None, Some(version)) => Ok(Some((ModLoader::Quilt, non_empty(Some(version.as_str()))))),
        (None, None) => Ok(None),
    }
}

/// Drops empty/whitespace-only strings so "latest stable" kicks in.
fn non_empty(value: Option<&str>) -> Option<String> {
    let trimmed = value?.trim();
    if trimmed.is_empty() {
        None
    } else {
        Some(trimmed.to_owned())
    }
}

/// Name the instance after the pack name (falling back to the version id).
fn pack_label<'a>(name: &'a str, version_id: &'a str) -> &'a str {
    if name.trim().is_empty() {
        version_id
    } else {
        name
    }
}

/// Instance-directory label: lowercase, every non-alphanumeric run becomes one
/// dash, dash-trimmed, with a `modpack` fallback for all-empty names.
fn slug(name: &str) -> String {
    let mut out = String::new();
    let mut prev_dash = true; // also trims leading dashes
    for c in name.chars() {
        if c.is_ascii_alphanumeric() {
            out.push(c.to_ascii_lowercase());
            prev_dash = false;
        } else if !prev_dash {
            out.push('-');
            prev_dash = true;
        }
    }
    while out.ends_with('-') {
        out.pop();
    }
    if out.is_empty() {
        "modpack".to_owned()
    } else {
        out
    }
}

/// Human-readable loader summary line used by both dry-run and real runs.
fn loader_line(loader: Option<&LoaderProfile>) -> String {
    match loader {
        Some(profile) => format!(
            "{} {} ({} with {} loader libraries)",
            profile.loader,
            profile.loader_version,
            profile.main_class,
            profile.libraries.len()
        ),
        None => "none (vanilla launch only)".to_owned(),
    }
}

/// `minecraft=1.21.4, fabric-loader=0.16.9` style one-liner.
fn deps_line(dependencies: &BTreeMap<String, String>) -> String {
    if dependencies.is_empty() {
        return "(none)".to_owned();
    }
    dependencies
        .iter()
        .map(|(key, value)| format!("{key}={value}"))
        .collect::<Vec<_>>()
        .join(", ")
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::PathBuf;

    #[test]
    fn slugs_are_lowercase_and_dash_condensed() {
        assert_eq!(slug("Twilight Archive Pack"), "twilight-archive-pack");
        assert_eq!(slug("tap-1.0.0"), "tap-1-0-0");
        assert_eq!(slug("a--b   c"), "a-b-c");
        assert_eq!(slug("!! My Pack "), "my-pack");
        assert_eq!(slug("  --__"), "modpack");
        assert_eq!(slug(""), "modpack");
    }

    #[test]
    fn loader_vote_comes_from_the_dependencies_table() {
        let deps: BTreeMap<String, String> = BTreeMap::from([
            ("minecraft".to_owned(), "1.21.4".to_owned()),
            ("fabric-loader".to_owned(), "0.16.9".to_owned()),
        ]);
        assert_eq!(
            detect_loader(&deps).unwrap(),
            Some((ModLoader::Fabric, Some("0.16.9".to_owned())))
        );

        // an empty pinned version defers to the latest stable release
        let deps: BTreeMap<String, String> = BTreeMap::from([
            ("minecraft".to_owned(), "1.21.4".to_owned()),
            ("quilt-loader".to_owned(), "   ".to_owned()),
        ]);
        assert_eq!(
            detect_loader(&deps).unwrap(),
            Some((ModLoader::Quilt, None))
        );

        assert_eq!(detect_loader(&BTreeMap::new()).unwrap(), None);

        let deps: BTreeMap<String, String> = BTreeMap::from([
            ("fabric-loader".to_owned(), "0.16.9".to_owned()),
            ("quilt-loader".to_owned(), "0.26.4".to_owned()),
        ]);
        let err = detect_loader(&deps).unwrap_err();
        assert!(matches!(err, CliError::ModpackAmbiguousLoaders), "{err:?}");
    }

    #[test]
    fn pack_labels_prefer_the_name() {
        assert_eq!(pack_label("MyPack", "id-1"), "MyPack");
        assert_eq!(pack_label("  ", "id-1"), "id-1");
    }

    // ------------------------------------------------------------------
    // end-to-end dry run + real install of a stored `.mrpack` on loopback
    // ------------------------------------------------------------------

    const INDEX_JSON: &str = r#"{"formatVersion":1,"game":"minecraft","name":"Loopback CLI Pack","versionId":"lcp-1.0.0","dependencies":{"minecraft":"1.21.4"},"files":[{"path":"mods/alpha.jar","hashes":{"sha1":"<SHA1>","sha512":"11111111111111111111111111111111111111111111111111111111111111111"},"downloads":["<URL>"],"env":{"client":"required","server":"required"},"fileSize":24},{"path":"mods/beta.jar","hashes":{"sha1":"2222222222222222222222222222222222222222","sha512":"5555555555555555555555555555555555555555555555555555555555555555"},"downloads":["https://cdn.modrinth.com/data/CCDD/versions/2.0.0/beta.jar"],"env":{"client":"unsupported","server":"required"},"fileSize":2048}]}"#;

    /// Minimal CRC-32 (IEEE) over stored payloads — test builder only.
    fn crc32(data: &[u8]) -> u32 {
        let mut crc = 0xFFFF_FFFFu32;
        for &b in data {
            crc ^= u32::from(b);
            for _ in 0..8 {
                crc = if crc & 1 != 0 {
                    0xEDB8_8320 ^ (crc >> 1)
                } else {
                    crc >> 1
                };
            }
        }
        crc ^ 0xFFFF_FFFF
    }

    /// Builds a valid stored-entry zip archive (local headers + CD + EOCD).
    fn stored_archive(entries: &[(&str, &[u8])]) -> Vec<u8> {
        let mut out = Vec::new();
        let mut central = Vec::new();
        let u16le = |value: u16| value.to_le_bytes();
        let u32le = |value: u32| value.to_le_bytes();
        let mut count: u16 = 0;
        for (name, content) in entries {
            let crc = crc32(content);
            let local_offset = out.len() as u32;
            out.extend_from_slice(b"PK\x03\x04");
            out.extend_from_slice(&u16le(20));
            out.extend_from_slice(&u16le(0)); // flags
            out.extend_from_slice(&u16le(0)); // stored
            out.extend_from_slice(&u16le(0)); // time, date
            out.extend_from_slice(&u16le(0));
            out.extend_from_slice(&u32le(crc));
            out.extend_from_slice(&u32le(content.len() as u32));
            out.extend_from_slice(&u32le(content.len() as u32));
            out.extend_from_slice(&u16le(name.len() as u16));
            out.extend_from_slice(&u16le(0)); // extra
            out.extend_from_slice(name.as_bytes());
            out.extend_from_slice(content);

            central.extend_from_slice(b"PK\x01\x02");
            central.extend_from_slice(&u16le(20));
            central.extend_from_slice(&u16le(20));
            central.extend_from_slice(&u16le(0)); // flags
            central.extend_from_slice(&u16le(0)); // stored
            central.extend_from_slice(&u16le(0)); // time, date
            central.extend_from_slice(&u16le(0));
            central.extend_from_slice(&u32le(crc));
            central.extend_from_slice(&u32le(content.len() as u32));
            central.extend_from_slice(&u32le(content.len() as u32));
            central.extend_from_slice(&u16le(name.len() as u16));
            central.extend_from_slice(&u16le(0)); // extra
            central.extend_from_slice(&u16le(0)); // comment
            central.extend_from_slice(&u16le(0)); // disk
            central.extend_from_slice(&u16le(0)); // internal attrs
            central.extend_from_slice(&u32le(0)); // external attrs
            central.extend_from_slice(&u32le(local_offset));
            central.extend_from_slice(name.as_bytes());
            count += 1;
        }
        let central_offset = out.len() as u32;
        out.extend_from_slice(&central);
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&u16le(0)); // disk ids
        out.extend_from_slice(&u16le(0));
        out.extend_from_slice(&u16le(count));
        out.extend_from_slice(&u16le(count));
        out.extend_from_slice(&u32le(central.len() as u32));
        out.extend_from_slice(&u32le(central_offset));
        out.extend_from_slice(&u16le(0)); // comment
        out
    }

    /// Scratch directory shared by one test run, namespaced by test + pid.
    fn scratch_dir(tag: &str) -> PathBuf {
        let nanos = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|duration| duration.subsec_nanos())
            .unwrap_or(0);
        std::env::temp_dir().join(format!("modpack-{tag}-{}-{nanos}", std::process::id()))
    }

    /// Same one-connection-per-request loopback server the other crates use.
    async fn spawn_loopback(routes: std::collections::HashMap<String, (u16, Vec<u8>)>) -> String {
        use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
        let listener = tokio::net::TcpListener::bind("127.0.0.1:0")
            .await
            .expect("bind loopback");
        let addr = listener.local_addr().expect("bound address");
        tokio::spawn(async move {
            while let Ok((sock, _)) = listener.accept().await {
                let routes = routes.clone();
                tokio::spawn(async move {
                    let mut reader = BufReader::new(sock);
                    let mut request_line = Vec::new();
                    let _ = reader.read_until(b'\n', &mut request_line).await;
                    loop {
                        let mut header = Vec::new();
                        if reader.read_until(b'\n', &mut header).await.is_err() {
                            break;
                        }
                        if header == b"\r\n" || header == b"\n" || header.is_empty() {
                            break;
                        }
                    }
                    let path = String::from_utf8_lossy(&request_line)
                        .split_whitespace()
                        .nth(1)
                        .unwrap_or_default()
                        .trim_start_matches('/')
                        .to_owned();
                    let (status, body) = match routes.get(&path) {
                        Some((code, body)) => (*code, body.clone()),
                        None => (404u16, b"no route".to_vec()),
                    };
                    let head = format!(
                        "HTTP/1.1 {status} t\r\nContent-Length: {}\r\nConnection: close\r\n\r\n",
                        body.len()
                    );
                    let mut full = head.into_bytes();
                    full.extend_from_slice(&body);
                    let mut sock = reader.into_inner();
                    let _ = sock.write_all(&full).await;
                });
            }
        });
        format!("{addr}")
    }

    fn args_for(
        pack_path: &str,
        shared_dir: &std::path::Path,
        instance_dir: &std::path::Path,
        dry_run: bool,
    ) -> ModpackArgs {
        ModpackArgs {
            path_or_url: pack_path.to_owned(),
            instance_dir: Some(instance_dir.to_path_buf()),
            shared_dir: Some(shared_dir.to_path_buf()),
            temp_dir: None,
            dry_run,
        }
    }

    #[tokio::test]
    async fn dry_run_reports_the_plan_without_writing_anything() {
        let shared = scratch_dir("dry-shared");
        let index = INDEX_JSON
            .replace(
                "<URL>",
                "https://cdn.modrinth.com/data/AABB/versions/1.0.0/alpha.jar",
            )
            .replace("<SHA1>", "0000000000000000000000000000000000000001");
        let pack_path = shared.join("pack.mrpack");

        tokio::fs::create_dir_all(&shared).await.unwrap();
        tokio::fs::write(
            &pack_path,
            stored_archive(&[
                ("modrinth.index.json", index.as_bytes()),
                ("overrides/options.txt", b"staged\n"),
            ]),
        )
        .await
        .unwrap();
        let instance = shared.join("instances").join("dry-run-explicit");

        let code = run_install(args_for(
            &pack_path.to_string_lossy(),
            &shared,
            &instance,
            true,
        ))
        .await
        .unwrap();
        assert_eq!(code, 0);

        // nothing was written besides the pack itself
        assert!(!instance.exists());
        assert!(!shared.join("instances/dry-run-explicit/minecraft").exists());
        let _ = tokio::fs::remove_dir_all(&shared).await;
    }

    #[tokio::test]
    async fn real_install_stages_mods_and_overrides_into_the_instance() {
        let body = b"loopback cli mod payload";
        let shared = scratch_dir("real-shared");
        tokio::fs::create_dir_all(&shared).await.unwrap();

        // staged source payload for the sha1 + loopback mirror
        let body_file = shared.join("alpha.jar");
        tokio::fs::write(&body_file, body).await.unwrap();
        let sha1 = twilight_downloader::sha1_of_file(&body_file).await.unwrap();
        let _ = tokio::fs::remove_file(&body_file).await;

        let addr = spawn_loopback(std::collections::HashMap::from([(
            "mods/alpha.jar".to_owned(),
            (200u16, body.to_vec()),
        )]))
        .await;
        let index = INDEX_JSON
            .replace("<URL>", &format!("http://{addr}/mods/alpha.jar"))
            .replace("<SHA1>", &sha1);
        let pack_path = shared.join("pack.mrpack");
        tokio::fs::write(
            &pack_path,
            stored_archive(&[
                ("modrinth.index.json", index.as_bytes()),
                ("overrides/options.txt", b"staged\n"),
            ]),
        )
        .await
        .unwrap();

        let instance = shared.join("instances").join("loop-pack");
        let code = run_install(args_for(
            &pack_path.to_string_lossy(),
            &shared,
            &instance,
            false,
        ))
        .await
        .unwrap();
        assert_eq!(code, 0);

        let game_dir = instance.join("minecraft");
        assert_eq!(
            tokio::fs::read(game_dir.join("mods/alpha.jar"))
                .await
                .unwrap(),
            body
        );
        assert_eq!(
            tokio::fs::read(game_dir.join("options.txt")).await.unwrap(),
            b"staged\n"
        );
        // the server-only beta never stages
        assert!(!game_dir.join("mods/beta.jar").exists());
        let _ = tokio::fs::remove_dir_all(&shared).await;
    }
}
