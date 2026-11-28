# twilight-cas

uv-style **global content-addressable store (CAS)** engine — a small,
dependency-light library (`tokio`, `sha1`, `thiserror`, `serde`) built for
game launchers and AI model managers. It is **Apache-2.0 licensed** and
completely game- and launcher-agnostic.

## Layout

```
<cas_root>/sha1/<xx>/<full_sha1_hash>
```

## API overview

```rust
// Hash + atomic ingest (existing blobs are reused; renames are atomic).
let result = twilight_cas::ingest_file(&cas_root, "big.jar").await?;
let blob = twilight_cas::blob_path(&cas_root, &result.hash);

// Link an existing blob to any destination (hardlink → NTFS junction →
// symlink → copy). `dest` must not exist yet; failure modes still produce
// a valid file, just as a copy.
let kind = twilight_cas::link_or_copy(&blob, "dest.jar").await?;
// LinkKind::Hardlink | Junction | Symlink | Copy

// Generic deduplication: replace duplicate copies in `dirs` with links.
let report = twilight_cas::deduplicate_dirs(&dirs, &cas_root, Some(&["jar", "zip"])).await?;
// DedupeReport { scanned_files, deduplicated_files, linked_count, bytes_reclaimed }

// Generic GC: remove CAS blobs referenced by no active directory.
let report = twilight_cas::cas_garbage_collect_dirs(&cas_root, &active_dirs).await?;
// GcReport { reclaimed_bytes, removed_blobs }

// Live stats for dashboards.
let stats = twilight_cas::cas_stats(&cas_root)?; // CasStats { blob_count, total_size_bytes }
```

## Design notes

- **Strategy cascade, zero privilege required**: hardlinks on NTFS/ext4/APFS
  work without admin; Windows junctions work without developer mode; the
  final fallback is a plain file copy — links degrade gracefully instead of
  breaking consumers.
- **Atomic ingestion**: blobs are written to a temp file and renamed, so
  concurrent ingests converge and interrupted writes never leave corrupt
  blobs.
- **No IPC, no OS deps**: everything is filesystem + `tokio` — safe to embed
  in other tools.

## License

Apache-2.0 (like `twilight-manifest`, `twilight-downloader`,
`twilight-runtime`, `twilight-horizon`). The full license text ships with this
crate as [`LICENSE`](LICENSE); the launcher's multi-tier licensing policy —
including the AGPL-3.0-or-later application tier and commercial alternatives —
is documented at
<https://github.com/BlackCatOfficialytb/TwilightMC-OSS/blob/main/LICENSE.md>.
