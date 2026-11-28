use twilight_oneclient_modpack_compatible_layer::{
    ONECLIENT_ATTRIBUTION, ONECLIENT_MODRINTH_API, OneClientLoader, parse_versions, profile_id,
};

const FIXTURE: &str = r#"[
  {
    "id":"v1",
    "version_number":"1.0.0",
    "name":"OneClient 1.21.1 Fabric",
    "loaders":["fabric"],
    "game_versions":["1.21.1"],
    "files":[{"url":"https://cdn.modrinth.com/oneclient-1.21.1-fabric.mrpack","filename":"oneclient-1.21.1-fabric.mrpack","primary":true,"hashes":{"sha1":"abc"},"size":123}]
  },
  {
    "id":"v2",
    "version_number":"1.0.0",
    "name":"OneClient 1.8.9 Ornithe",
    "loaders":["ornithe"],
    "game_versions":["1.8.9"],
    "files":[{"url":"https://cdn.modrinth.com/oneclient-1.8.9-ornithe.mrpack","filename":"oneclient-1.8.9-ornithe.mrpack","primary":true,"hashes":{"sha1":"def"},"size":456}]
  },
  {
    "id":"v3",
    "version_number":"1.0.0",
    "name":"Ignored",
    "loaders":["forge"],
    "game_versions":["1.20.1"],
    "files":[{"url":"https://cdn.modrinth.com/ignored.mrpack","filename":"ignored.mrpack","primary":true,"hashes":{"sha1":"zzz"},"size":1}]
  }
]"#;

#[test]
fn parses_supported_pairs_and_metadata() {
    let versions = parse_versions(FIXTURE).expect("parse");
    assert_eq!(versions.len(), 2);
    assert_eq!(versions[0].loader, OneClientLoader::Fabric);
    assert_eq!(versions[0].java_major, Some(21));
    assert_eq!(versions[1].loader, OneClientLoader::Ornithe);
    assert_eq!(versions[1].java_major, Some(8));
    assert!(versions[0].mrpack_url.ends_with(".mrpack"));
}

#[test]
fn profile_ids_are_isolated() {
    assert_eq!(
        profile_id(OneClientLoader::Fabric, "1.21.1"),
        "oneclient-1.21.1-fabric"
    );
    assert_eq!(
        profile_id(OneClientLoader::Ornithe, "1.8.9"),
        "oneclient-1.8.9-ornithe"
    );
}

#[test]
fn attribution_is_present() {
    assert!(ONECLIENT_ATTRIBUTION.contains("Polyfrost"));
    assert!(ONECLIENT_MODRINTH_API.contains("oneclient-modpack"));
}

#[tokio::test]
async fn resolve_latest_uses_loopback() {
    use std::io::{Read, Write};
    use std::net::TcpListener;
    use std::thread;

    let listener = TcpListener::bind("127.0.0.1:0").unwrap();
    let addr = listener.local_addr().unwrap();
    let body = FIXTURE.as_bytes().to_vec();
    thread::spawn(move || {
        let (mut stream, _) = listener.accept().unwrap();
        let mut buf = [0u8; 1024];
        let _ = stream.read(&mut buf);
        let resp = format!(
            "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n",
            body.len()
        );
        stream.write_all(resp.as_bytes()).unwrap();
        stream.write_all(&body).unwrap();
    });

    let client = reqwest::Client::new();
    let url = format!("http://{addr}/v2/project/oneclient-modpack/version");
    let raw = client.get(url).send().await.unwrap().text().await.unwrap();
    let versions = parse_versions(&raw).unwrap();
    assert!(versions.iter().any(|v| v.mc_version == "1.21.1"));
}
