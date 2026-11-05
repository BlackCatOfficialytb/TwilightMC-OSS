# TODO

- [x] Setup Cargo Workspace root (`crates/` layout)
- [x] `twilight-manifest`: Parse Mojang `version.json` schema (`VersionFile.cpp`)
- [x] `twilight-manifest`: Implement OS and feature `Rule` evaluation (`Rule.cpp`)
- [x] `twilight-manifest`: Implement `Library` artifact resolving and natives filtering
- [ ] `twilight-downloader`: Async asset index parser (`indexes/<version>.json`)
- [ ] `twilight-downloader`: Multi-threaded parallel file downloader with SHA-1 check
- [ ] `twilight-horizon`: Clean-room vanilla 26.3 asset extractor for Horizon native engine
- [ ] `twilight-launch`: JVM arguments template resolver (`${auth_player_name}`, etc.)
- [ ] `twilight-launch`: Classpath builder and asynchronous process spawner
- [x] `twilight-auth`: Offline profile generator and Microsoft token structures — extended for Freesm-style offline bypass and authlib-injector custom Yggdrasil servers (`upstream/freesm/launcher/minecraft/auth/`)
