use serde::Serialize;
use twilight_oneclient_modpack_compatible_layer::{
    ONECLIENT_ATTRIBUTION, OneClientLoader, OneClientVersion, fetch_versions, profile_id,
};

use crate::instances::{InstanceMeta, instances_root, write_meta};
use crate::modpack;

#[derive(Debug, Clone, Serialize)]
pub struct OneClientCatalogRow {
    pub id: String,
    pub name: String,
    pub loader: String,
    pub mc_version: String,
    pub java_major: Option<u8>,
    pub attribution: String,
    pub installed_instance_id: Option<String>,
}

fn row_from_version(
    version: &OneClientVersion,
    installed_instance_id: Option<String>,
) -> OneClientCatalogRow {
    OneClientCatalogRow {
        id: version.id.clone(),
        name: version.name.clone(),
        loader: version.loader.as_str().to_owned(),
        mc_version: version.mc_version.clone(),
        java_major: version.java_major,
        attribution: ONECLIENT_ATTRIBUTION.to_owned(),
        installed_instance_id,
    }
}

async fn installed_id(
    root: &std::path::Path,
    loader: OneClientLoader,
    mc_version: &str,
) -> Option<String> {
    let id = profile_id(loader, mc_version);
    let meta = root.join(&id).join("instance.json");
    if tokio::fs::try_exists(meta).await.ok()? {
        Some(id)
    } else {
        None
    }
}

#[tauri::command]
pub async fn list_oneclient_versions(
    app: tauri::AppHandle,
) -> Result<Vec<OneClientCatalogRow>, String> {
    let client = reqwest::Client::new();
    let versions = fetch_versions(&client).await.map_err(|e| e.to_string())?;
    let root = instances_root(&app).await?;
    let mut rows = Vec::new();
    for v in versions {
        let installed = installed_id(&root, v.loader, &v.mc_version).await;
        rows.push(row_from_version(&v, installed));
    }
    Ok(rows)
}

#[tauri::command]
pub async fn install_oneclient_instance(
    app: tauri::AppHandle,
    loader: String,
    mc_version: String,
) -> Result<String, String> {
    let Some(loader) = OneClientLoader::from_token(&loader) else {
        return Err(format!("unsupported OneClient loader: {loader}"));
    };
    let client = reqwest::Client::new();
    let versions = fetch_versions(&client).await.map_err(|e| e.to_string())?;
    let version = versions
        .into_iter()
        .find(|v| v.loader == loader && v.mc_version == mc_version)
        .ok_or_else(|| {
            format!(
                "no OneClient version for {} {}",
                loader.as_str(),
                mc_version
            )
        })?;

    let id = profile_id(loader, &mc_version);
    let root = instances_root(&app).await?;
    tokio::fs::create_dir_all(&root)
        .await
        .map_err(|e| format!("cannot create instances root: {e}"))?;
    let dir = root.join(&id);
    if dir.exists() {
        // Reinstall/update: keep directory id stable for the preset card.
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    let report = modpack::install_pack_into_dir(&app, &version.mrpack_url, &dir).await?;
    let meta = InstanceMeta {
        name: version.name,
        version: mc_version.clone(),
        loader: Some(loader.as_str().to_owned()),
        loader_version: None,
        icon_key: None,
        last_played: 0,
        total_time_played: 0,
        jvm_args: Vec::new(),
    };
    let _ = report;
    write_meta(&dir, &meta).await?;
    let _ = report;
    Ok(id)
}
