# TODO

- [x] Setup Cargo Workspace root (`crates/` layout)
- [x] `twilight-manifest`: Parse Mojang `version.json` schema (`VersionFile.cpp`)
- [x] `twilight-manifest`: Implement OS and feature `Rule` evaluation (`Rule.cpp`)
- [x] `twilight-manifest`: Implement `Library` artifact resolving and natives filtering
- [x] `twilight-downloader`: Async asset index parser (`indexes/<version>.json`)
- [x] `twilight-downloader`: Multi-threaded parallel file downloader with SHA-1 check
- [x] Meta failover chain: Mojang `piston-meta` primary, `meta.prismlauncher.org` and `meta.freesmlauncher.org` mirrors
- [x] `twilight-horizon`: Clean-room vanilla 26.3 asset extractor for Horizon native engine (`horizon-assets-v1` manifest, content-addressed store, `map_to_resources` export)
- [x] `twilight-launch`: JVM arguments template resolver (`${auth_player_name}`, etc.)
- [x] `twilight-launch`: Classpath builder and asynchronous process spawner
- [x] `twilight-auth`: Offline profile generator and Microsoft token structures — extended for Freesm-style offline bypass and authlib-injector custom Yggdrasil servers (`upstream/freesm/launcher/minecraft/auth/`)
