<script>
  // Full-page settings: a left navigation rail over four sections and a
  // spacious content column. Input values are $bindable so App.svelte keeps
  // owning persistence; actions bubble up as callbacks.
  import AccentPicker from './AccentPicker.svelte';
  import Twemoji from './Twemoji.svelte';
  import LauncherIcon from './LauncherIcon.svelte';
  import { ICON_PACKS, getIconPack, setIconPack } from './icons';
  import {
    DEFAULT_THEME,
    THEME_PRESETS,
    TOKEN_FIELDS,
    currentTokens,
    deleteCustomTheme,
    listCustomThemes,
    saveCustomTheme,
  } from './theme';
  import { t, getLocale, setLocale, SUPPORTED_LOCALES } from './i18n.svelte.ts';
  import { toast } from './alerts.svelte.js';

  let {
    version = '',
    theme = $bindable('twilight-dark'),
    blindMode = $bindable(false),
    deafMode = $bindable(false),
    // App Developer Mode is owned by App.svelte so every screen can see it.
    devSettings = $bindable({
      devMode: false,
      jdwpEnabled: false,
      jdwpPort: 5005,
      mixinDebug: false,
    }),
    storage = null,
    runtimes = [],
    scanning = false,
    javaError = '',
    javaPath = $bindable(''),
    javaCustomPaths = $bindable([]),
    minMem = $bindable(0),
    maxMem = $bindable(0),
  gcPreset = $bindable('Default'),
  customGcFlags = $bindable([]),
  extraJvmArgs = $bindable(''),
    sharedInput = $bindable(''),
    instancesInput = $bindable(''),
    storageBusy = false,
    storageMsg = '',
    javaMsg = '',
    gameRunning = false,
    onback,
    onscanjava,
    onsaveprefs,
    onaddjava,
    onapplyjava,
    onsavefolder,
    onopenfolder,
    oncleanstaging,
    onopenaccounts,
    onopenurl,
  } = $props();

  // ---- custom java picker ----
  let addedJava = $state([]);
  let javaPickMsg = $state('');
  let javaPickError = $state('');
  let javaBusy = $state(false);
  let appliedPath = $state(javaPath);

  async function browseJava() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      javaPickError = t('status-file-picker-unavailable');
      return;
    }
    javaPickError = '';
    javaPickMsg = '';
    try {
      const picked = await open({
        multiple: false,
        title: t('settings-choose-java'),
        filters: [{ name: t('filter-java'), extensions: ['exe', ''] }],
      });
      if (!picked) return;
      javaBusy = true;
      // probe first: a wrong file must never enter the saved list
      const probed = await window.__TAURI__.core.invoke('probe_java_path', { path: String(picked) });
      const saved = await onaddjava?.(probed.executable);
      if (Array.isArray(saved)) addedJava = saved;
      javaPickMsg = t('settings-java-added', { major: probed.major, version: probed.version });
    } catch (e) {
      javaPickError = String(e);
    } finally {
      javaBusy = false;
    }
  }

  async function applyJava(path) {
    javaPickError = '';
    javaBusy = true;
    try {
      await onapplyjava?.(path || null);
      appliedPath = path || '';
      javaPath = path || '';
      javaPickMsg = path ? t('settings-java-applied') : t('settings-java-reverted');
    } catch (e) {
      javaPickError = String(e);
    } finally {
      javaBusy = false;
    }
  }

  // the saved list survives page switches; Show it beside the detected table
  $effect(() => {
    if (Array.isArray(javaCustomPaths)) addedJava = javaCustomPaths;
  });

  // ---- Horizon engine (native Rust binary; never bundled) ----
  let horizonPath = $state('');
  let horizonConfigured = $state(false);
  let horizonMsg = $state('');
  let horizonError = $state('');
  let horizonBusy = $state(false);
  let horizonDetected = $state([]);
  let horizonReleases = $state([]);
  let horizonTag = $state('latest');

  async function refreshHorizon() {
    try {
      const prefs = await window.__TAURI__.core.invoke('get_horizon_prefs');
      horizonPath = prefs.horizon_path ?? '';
      horizonConfigured = !!prefs.configured;
    } catch (e) {
      horizonError = String(e);
    }
  }
  refreshHorizon();

  async function browseHorizon() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      horizonError = t('status-file-picker-unavailable');
      return;
    }
    horizonError = '';
    horizonMsg = '';
    try {
      const picked = await open({
        multiple: false,
        title: t('settings-choose-horizon'),
        filters: [{ name: t('filter-executable'), extensions: ['exe', ''] }],
      });
      if (!picked) return;
      horizonPath = String(picked);
      await saveHorizon();
    } catch (e) {
      horizonError = String(e);
    }
  }

  async function saveHorizon() {
    horizonBusy = true;
    horizonError = '';
    horizonMsg = '';
    try {
      await window.__TAURI__.core.invoke('set_horizon_prefs', {
        horizonPath: horizonPath.trim() || null,
      });
      await refreshHorizon();
      horizonMsg = horizonConfigured
        ? t('settings-horizon-saved')
        : t('settings-horizon-cleared');
    } catch (e) {
      horizonError = String(e);
    } finally {
      horizonBusy = false;
    }
  }

  async function detectHorizonBuilds() {
    horizonBusy = true;
    horizonError = '';
    try {
      horizonDetected = await window.__TAURI__.core.invoke('detect_horizon');
      horizonMsg = horizonDetected.length
        ? t('settings-horizon-detected')
        : t('settings-horizon-none-detected');
    } catch (e) {
      horizonError = String(e);
    } finally {
      horizonBusy = false;
    }
  }

  async function loadHorizonReleases() {
    horizonBusy = true;
    horizonError = '';
    try {
      horizonReleases = await window.__TAURI__.core.invoke('list_horizon_releases');
      horizonMsg = t('settings-horizon-releases');
    } catch (e) {
      horizonError = String(e);
    } finally {
      horizonBusy = false;
    }
  }

  async function installHorizonRelease() {
    horizonBusy = true;
    horizonError = '';
    horizonMsg = '';
    try {
      const installed = await window.__TAURI__.core.invoke('install_horizon_release', {
        tag: horizonTag,
      });
      horizonPath = installed.client;
      await refreshHorizon();
      horizonMsg = t('settings-horizon-installed', { tag: installed.tag });
    } catch (e) {
      horizonError = String(e);
    } finally {
      horizonBusy = false;
    }
  }

  const sections = [
    { id: 'appearance', label: 'settings-appearance', icon: '🎨' },
    { id: 'language', label: 'settings-language', icon: '🌐' },
    { id: 'java', label: 'settings-java', icon: '☕' },
    { id: 'horizon', label: 'settings-horizon', icon: '⚙' },
    { id: 'storage', label: 'settings-storage', icon: '📁' },
    { id: 'apikeys', label: 'settings-api', icon: '🔑' },
    { id: 'accessibility', label: 'settings-accessibility', icon: '♿' },
    { id: 'about', label: 'settings-about', icon: 'ℹ' },
    ...(devSettings.devMode ? [{ id: 'developer', label: 'settings-dev-title', icon: '🛠️' }] : []),
  ];
  let section = $state('appearance');
  let iconPack = $state(getIconPack());

  // ---- App Developer Mode (About-tab easter egg) ----
  let versionClicks = $state(0);
  let devDiagnostics = $state(null);
  let devConfig = $state('');
  let devConfigOpen = $state(false);
  let devBusy = $state(false);

  async function onVersionClick() {
    if (devSettings.devMode) return;
    versionClicks += 1;
    if (versionClicks < 7) return;
    versionClicks = 0;
    devSettings.devMode = true;
    toast(t('dev-mode-unlocked'), 'success');
    section = 'developer';
    await loadDevDiagnostics();
  }

  async function loadDevDiagnostics() {
    devBusy = true;
    try {
      devDiagnostics = await window.__TAURI__.core.invoke('get_dev_diagnostics');
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      devBusy = false;
    }
  }

  async function openDevtools() {
    try {
      await window.__TAURI__.core.invoke('open_devtools');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function inspectConfig() {
    try {
      devConfig = await window.__TAURI__.core.invoke('get_raw_config_json');
      devConfigOpen = true;
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function setDevMode(enabled) {
    devSettings.devMode = enabled;
    if (enabled) await loadDevDiagnostics();
  }

  const GC_FLAGS = [
    { flag: '-XX:+UseZGC', badge: 'settings-gc-badge-15plus' },
    { flag: '-XX:+ZGenerational', badge: 'settings-gc-badge-21to23' },
    { flag: '-XX:+UseShenandoahGC', badge: 'settings-gc-badge-15plus' },
    { flag: '-XX:+UseG1GC', badge: 'settings-gc-badge-8to25' },
    { flag: '-XX:+ParallelRefProcEnabled', badge: 'settings-gc-badge-8to25' },
    { flag: '-XX:+AlwaysPreTouch', badge: 'settings-gc-badge-8to25' },
    { flag: '-XX:+UnlockExperimentalVMOptions', badge: 'settings-gc-badge-8to25' },
    { flag: '-XX:+UseStringDeduplication', badge: 'settings-gc-badge-8u20' },
    { flag: '-XX:+DisableExplicitGC', badge: 'settings-gc-badge-8to25' },
    { flag: '-XX:+PerfDisableSharedMem', badge: 'settings-gc-badge-8to25' },
  ];

  const previewFlags = $derived(
    [...customGcFlags, ...extraJvmArgs.split(/\s+/).filter(Boolean)].join(' ') ||
      (gcPreset === 'Default' ? '(none)' : gcPreset),
  );

  // ---- API keys (CurseForge, optional; the zero-key flow works without) ----
  let apiKey = $state('');
  let apiKeyConfigured = $state(false);
  let apiKeyMsg = $state('');
  let apiKeyError = $state('');

  async function refreshApiKey() {
    try {
      const key = await window.__TAURI__.core.invoke('get_curseforge_api_key');
      apiKeyConfigured = key.configured;
    } catch (e) {
      apiKeyError = String(e);
    }
  }
  refreshApiKey();

  async function saveApiKey() {
    apiKeyError = '';
    apiKeyMsg = '';
    try {
      await window.__TAURI__.core.invoke('set_curseforge_api_key', { apiKey });
      const key = await window.__TAURI__.core.invoke('get_curseforge_api_key');
      apiKeyConfigured = key.configured;
      apiKey = '';
      apiKeyMsg = key.configured
        ? t('settings-cf-saved')
        : t('settings-cf-cleared');
    } catch (e) {
      apiKeyError = String(e);
    }
  }

  // ---- custom themes (localStorage-backed) ----
  let customs = $state(listCustomThemes());
  let builderName = $state('');
  let builderDark = $state(true);
  let builderTokens = $state(currentTokens());
  let themeJson = $state('');
  let customMsg = $state('');

  function cloneCurrentTheme() {
    builderTokens = currentTokens();
    customMsg = t('settings-custom-loaded');
  }

  function saveTheme() {
    try {
      const saved = saveCustomTheme({
        name: builderName,
        dark: builderDark,
        tokens: builderTokens,
      });
      customs = listCustomThemes();
      theme = saved.id;
      customMsg = t('settings-theme-saved', { name: saved.name });
    } catch (e) {
      customMsg = String(e);
    }
  }

  function removeTheme(id) {
    deleteCustomTheme(id);
    customs = listCustomThemes();
    if (theme === id) theme = DEFAULT_THEME;
    customMsg = t('settings-theme-deleted');
  }

  function exportTheme() {
    themeJson = JSON.stringify(
      {
        name: builderName.trim() || t('settings-theme-name'),
        dark: builderDark,
        tokens: builderTokens,
      },
      null,
      2,
    );
    customMsg = t('settings-theme-exported');
  }

  function importTheme() {
    try {
      const raw = JSON.parse(themeJson);
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        throw new Error(t('settings-theme-expected'));
      }
      const saved = saveCustomTheme(raw);
      customs = listCustomThemes();
      theme = saved.id;
      customMsg = t('settings-theme-imported', { name: saved.name });
      themeJson = '';
    } catch (e) {
      customMsg = t('settings-theme-import-failed', { error: e });
    }
  }

  // Native directory picker; the chosen path lands in the bound input and
  // the Save button persists it.
  async function browseDir(current) {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) return null;
    try {
      const picked = await open({
        directory: true,
        multiple: false,
        defaultPath: current && current.trim() ? current.trim() : undefined,
      });
      return typeof picked === 'string' ? picked : null;
    } catch {
      return null;
    }
  }

  // ---- folders (the former Storage & Staging page) ----
  // Nine configurable roots; blank inputs keep the default subdirectory
  // under the app data folder (`io.github.blackcatofficialytb.twilightmc`).
  // Labels and hints come from the settings-folder-* messages.
  const FOLDERS = [
    { key: 'instances' },
    { key: 'shared' },
    { key: 'versions' },
    { key: 'mods' },
    { key: 'icons' },
    { key: 'java' },
    { key: 'skins' },
    { key: 'downloads' },
    { key: 'servers' },
  ];

  // Per-row editable text; blank = default. Re-seeded from the backend
  // whenever fresh storage paths arrive (open, save, reset).
  let folderInputs = $state({});

  $effect(() => {
    if (!storage) return;
    folderInputs = {
      instances: storage.is_default_instances ? '' : storage.instances_dir,
      shared: storage.is_default_shared ? '' : storage.shared_dir,
      versions: storage.is_default_versions ? '' : storage.versions_dir,
      mods: storage.is_default_mods ? '' : storage.mods_dir,
      icons: storage.is_default_icons ? '' : storage.icons_dir,
      java: storage.is_default_java ? '' : storage.java_dir,
      skins: storage.is_default_skins ? '' : storage.skins_dir,
      // the backend only reports the configured override here (empty = default)
      downloads: storage.downloads_dir || '',
      servers: storage.is_default_servers ? '' : storage.servers_dir,
    };
  });

  // ---- global CAS storage (uv-style) ----
  let casStats = $state(null);
  let casBusy = $state(false);
  let casMsg = $state('');

  function formatBytes(bytes) {
    const value = Number(bytes) || 0;
    if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;
    if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
    return `${value} B`;
  }

  async function refreshCasStats() {
    casBusy = true;
    casMsg = '';
    try {
      casStats = await window.__TAURI__.core.invoke('get_cas_stats');
    } catch (e) {
      casMsg = String(e);
    } finally {
      casBusy = false;
    }
  }

  async function runCasDeduplicate() {
    casBusy = true;
    casMsg = '';
    try {
      const report = await window.__TAURI__.core.invoke('run_cas_deduplicate');
      casMsg = t('cas-done-deduplicate', {
        files: report.deduplicated_files,
        size: formatBytes(report.bytes_reclaimed),
      });
      await refreshCasStats();
    } catch (e) {
      casMsg = String(e);
    } finally {
      casBusy = false;
    }
  }

  async function runCasGc() {
    casBusy = true;
    casMsg = '';
    try {
      const report = await window.__TAURI__.core.invoke('run_cas_gc');
      casMsg = t('cas-done-gc', {
        count: report.removed_blobs,
        size: formatBytes(report.reclaimed_bytes),
      });
      await refreshCasStats();
    } catch (e) {
      casMsg = String(e);
    } finally {
      casBusy = false;
    }
  }

  $effect(() => {
    if (section === 'storage' && casStats === null) void refreshCasStats();
  });

  // The path that actually runs for a row; downloads shows the effective
  // staging root rather than the raw override.
  function resolvedPath(key) {
    if (!storage) return '';
    return key === 'downloads' ? storage.staging_root : storage[`${key}_dir`];
  }

  function isDefault(key) {
    if (!storage) return true;
    return key === 'downloads' ? storage.is_default_staging : storage[`is_default_${key}`];
  }

  const REPO = 'https://github.com/BlackCatOfficialytb/TwilightMC-OSS';
  const CROWDIN = 'https://crowdin.com/';
</script>

<div class="flex h-full">
  <!-- left navigation rail -->
  <nav
    class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3"
    aria-label={t('settings-sections-aria')}
  >
    <button
      class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
      title={t('settings-back-title')}
      onclick={onback}
    >
      <span class="w-5 shrink-0 text-center text-[15px]">←</span>
      <span class="truncate">{t('header-back-instances')}</span>
    </button>
    <div class="flex flex-col gap-0.5">
      {#each sections as s (s.id)}
        <button
          class="flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] {section === s.id
            ? 'bg-(--brand-tint) font-medium text-(--accent)'
            : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
          aria-current={section === s.id ? 'true' : undefined}
          onclick={() => (section = s.id)}
        >
          <span class="flex w-5 shrink-0 items-center justify-center text-[15px]">
            <Twemoji emoji={s.icon} size={15} />
          </span>
          <span class="truncate">{t(s.label)}</span>
        </button>
      {/each}
    </div>
    <button
      class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
      title={t('settings-accounts-title')}
      onclick={onopenaccounts}
    >
      <span class="flex w-5 shrink-0 items-center justify-center">
        <LauncherIcon name="accounts" size={15} />
      </span>
      <span class="truncate">{t('nav-accounts')}</span>
    </button>
  </nav>

  <!-- content column -->
  <div class="min-w-0 flex-1 overflow-y-auto">
    <div class="mx-auto max-w-2xl p-8">
      {#if section === 'appearance'}
        <h2 class="text-[16px] font-semibold">{t('settings-appearance-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-appearance-desc')}
        </p>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-theme')}</h3>
        <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {#each THEME_PRESETS as p (p.id)}
            <button
              class="flex flex-col gap-1.5 rounded border p-2.5 text-left {theme === p.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--text-muted)'}"
              aria-pressed={theme === p.id}
              title={t('settings-theme-ground-title', {
                name: t(`theme-preset-${p.id}`),
                ground: p.dark ? t('settings-dark-ground') : t('settings-light-ground'),
              })}
              onclick={() => (theme = p.id)}
            >
              <span class="flex gap-1" aria-hidden="true">
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{p.swatch[0]}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{p.swatch[1]}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{p.swatch[2]}"></span>
              </span>
              <span class="text-[12px] font-medium">{t(`theme-preset-${p.id}`)}</span>
              <span class="text-[10px] text-(--text-muted)">{p.dark ? t('settings-dark-ground') : t('settings-light-ground')}</span>
            </button>
          {/each}
          {#each customs as c (c.id)}
            <!-- card is a div (a real button would nest the delete button) -->
            <div
              class="relative flex flex-col gap-1.5 rounded border p-2.5 text-left {theme === c.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--text-muted)'}"
              role="button"
              tabindex="0"
              title={t('settings-theme-ground-title', {
                name: c.name,
                ground: c.dark ? t('settings-dark-ground') : t('settings-light-ground'),
              })}
              onclick={() => (theme = c.id)}
              onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  theme = c.id;
                }
              }}
            >
              <span class="flex gap-1" aria-hidden="true">
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{c.tokens.bg1}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{c.tokens.bg3}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{c.tokens.accent1}"></span>
              </span>
              <span class="truncate pr-4 text-[12px] font-medium">{c.name}</span>
              <span class="text-[10px] text-(--text-muted)">{t('common-custom')} · {c.dark ? t('settings-dark-ground') : t('settings-light-ground')}</span>
              <button
                class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400"
                title={t('settings-delete-theme', { name: c.name })}
                aria-label={t('settings-delete-theme', { name: c.name })}
                onclick={(e) => {
                  e.stopPropagation();
                  removeTheme(c.id);
                }}
              >
                ✕
              </button>
            </div>
          {/each}
        </div>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-accent')}</h3>
        <div class="mt-3">
          <AccentPicker {theme} />
        </div>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-icon-pack')}</h3>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-icon-pack-desc')}
        </p>
        <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {#each ICON_PACKS as p (p.id)}
            <button
              class="flex flex-col items-start gap-2 rounded border p-2.5 text-left {iconPack === p.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--text-muted)'}"
              aria-pressed={iconPack === p.id}
              title="{t(`icon-pack-${p.id}`)}: {t(`pack-hint-${p.id}`)}"
              onclick={() => {
                setIconPack(p.id);
                iconPack = getIconPack();
              }}
            >
              <span class="flex items-center gap-2">
                <LauncherIcon name="instances" size={16} pack={p.id} />
                <LauncherIcon name="settings" size={16} pack={p.id} />
                <LauncherIcon name="accounts" size={16} pack={p.id} />
              </span>
              <span class="text-[12px] font-medium">{t(`icon-pack-${p.id}`)}</span>
              <span class="text-[10px] text-(--text-muted)">{t(`pack-hint-${p.id}`)}</span>
            </button>
          {/each}
        </div>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-custom-theme')}</h3>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-custom-theme-desc')}
        </p>
        <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="flex flex-wrap items-center gap-2">
            <input
              class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder={t('settings-theme-name')}
              bind:value={builderName}
              aria-label={t('settings-theme-name')}
            />
            <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label={t('settings-ground-type')}>
              <button
                type="button"
                class="px-3 py-1.5 text-[12px] {builderDark
                  ? 'bg-(--accent) font-medium text-(--on-accent)'
                  : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
                aria-pressed={builderDark}
                onclick={() => (builderDark = true)}
              >
                {t('settings-dark')}
              </button>
              <button
                type="button"
                class="px-3 py-1.5 text-[12px] {!builderDark
                  ? 'bg-(--accent) font-medium text-(--on-accent)'
                  : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
                aria-pressed={!builderDark}
                onclick={() => (builderDark = false)}
              >
                {t('settings-light')}
              </button>
            </div>
          </div>
          <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {#each TOKEN_FIELDS as f (f.key)}
              <label class="flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-wide text-(--text-muted)">{t(`settings-token-${f.key}`)}</span>
                <span class="flex items-center gap-1">
                  <input
                    type="color"
                    value={builderTokens[f.key]}
                    oninput={(e) => (builderTokens = { ...builderTokens, [f.key]: e.currentTarget.value })}
                    class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"
                    title={t('settings-token-color-label', { label: t(`settings-token-${f.key}`) })}
                    aria-label={t('settings-token-color-label', { label: t(`settings-token-${f.key}`) })}
                  />
                  <input
                    value={builderTokens[f.key]}
                    oninput={(e) => (builderTokens = { ...builderTokens, [f.key]: e.currentTarget.value })}
                    class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)"
                    spellcheck="false"
                    aria-label={t('settings-token-hex-label', { label: t(`settings-token-${f.key}`) })}
                  />
                </span>
              </label>
            {/each}
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <button
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
              title={t('settings-clone-title')}
              onclick={cloneCurrentTheme}
            >
              {t('settings-clone-theme')}
            </button>
            <button
              class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
              onclick={saveTheme}
            >
              {t('settings-save-theme')}
            </button>
          </div>
        </div>

        <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-import-export')}</h3>
        <div class="mt-2">
          <textarea
            bind:value={themeJson}
            rows="5"
            spellcheck="false"
            class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder={t('settings-theme-json')}
            aria-label={t('settings-theme-json')}
          ></textarea>
          <div class="mt-2 flex gap-2">
            <button
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
              title={t('settings-export-title')}
              onclick={exportTheme}
            >
              ⤒ {t('settings-export-draft')}
            </button>
            <button
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
              title={t('settings-import-title')}
              onclick={importTheme}
            >
              ⤓ {t('settings-import-json')}
            </button>
          </div>
        </div>
        {#if customMsg}
          <p class="mt-2 text-[12px] text-(--text-muted)">{customMsg}</p>
        {/if}
      {:else if section === 'language'}
        <h2 class="text-[16px] font-semibold">{t('settings-language')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-language-desc')}
        </p>
        <select
          class="mt-4 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
          value={getLocale()}
          onchange={(e) => setLocale(e.currentTarget.value)}
          aria-label={t('settings-language')}
        >
          {#each SUPPORTED_LOCALES as loc (loc.id)}
            <option value={loc.id}>{t(loc.label)}</option>
          {/each}
        </select>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="text-[12px] font-medium">{t('settings-language-translations-title')}</div>
          <p class="mt-1 text-[11px] text-(--text-muted)">
            {t('settings-language-fluent-desc')}
          </p>
          <button
            class="mt-2 text-[12px] text-(--accent) hover:underline"
            onclick={() => onopenurl?.(`${CROWDIN}`)}
          >
            ↗ {t('settings-crowdin')}
          </button>
        </div>

      {:else if section === 'java'}
        <h2 class="text-[16px] font-semibold">{t('settings-java-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-java-desc')}
        </p>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-java-runtime')}</h3>
        <select
          class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
          bind:value={javaPath}
        >
          <option value="">{t('settings-java-auto')}</option>
          {#each runtimes as r (r.executable)}
            <option value={r.executable}>{t('settings-java-option', { major: r.major, home: r.home })}</option>
          {/each}
          {#each addedJava.filter((p) => !runtimes.some((r) => r.executable === p)) as path (path)}
            <option value={path}>{t('settings-java-custom-option', { path })}</option>
          {/each}
        </select>
        {#if !runtimes.length}
          <p class="mt-2 text-[12px] text-(--text-muted)">
            {scanning ? t('settings-java-probing') : t('settings-java-none')}
          </p>
        {/if}
        {#if javaError}
          <p class="mt-2 text-[12px] text-rose-400">{javaError}</p>
        {/if}

        <div class="mt-3 flex flex-wrap items-center gap-2">
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
            disabled={scanning}
            onclick={onscanjava}
          >
            ↻ {t('settings-java-rescan')}
          </button>
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
            disabled={javaBusy}
            onclick={browseJava}
          >
            {javaBusy ? t('settings-java-checking') : t('settings-java-browse')}
          </button>
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50"
            disabled={javaBusy || javaPath === appliedPath}
            onclick={() => applyJava(javaPath)}
          >
            {t('settings-java-apply')}
          </button>
        </div>

        <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)">
          <span
            class="inline-block h-1.5 w-1.5 rounded-full {appliedPath ? 'bg-(--accent)' : 'bg-(--text-muted)'}"
          ></span>
          {t('settings-java-active')}
          <span class="font-mono">{appliedPath || t('settings-java-auto-lower')}</span>
          {#if javaPath !== appliedPath}
            <span class="text-amber-400">{t('settings-java-not-applied')}</span>
          {/if}
        </p>
        {#if javaPickMsg}
          <p class="mt-1 text-[12px] text-(--accent)">{javaPickMsg}</p>
        {/if}
        {#if javaPickError}
          <p role="alert" class="mt-1 text-[12px] text-rose-400">{javaPickError}</p>
        {/if}
        {#if addedJava.length}
          <ul class="mt-2 space-y-0.5">
            {#each addedJava as path (path)}
              <li class="flex items-center justify-between gap-2 text-[11px] text-(--text-muted)">
                <span class="truncate font-mono" title={path}>{path}</span>
                {#if appliedPath === path}
                  <span class="shrink-0 text-(--accent)">{t('settings-java-active-badge')}</span>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-memory-title')}</h3>
        <div class="mt-3 flex items-center gap-3">
          <span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span>
          <input type="range" min="0" max="16384" step="256" bind:value={minMem} class="flex-1 accent-[var(--accent)]" />
          <input
            type="number"
            min="0"
            max="65536"
            step="256"
            bind:value={minMem}
            class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"
          />
          <span class="w-8 text-[11px] text-(--text-muted)">MiB</span>
        </div>
        <div class="mt-3 flex items-center gap-3">
          <span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span>
          <input type="range" min="0" max="16384" step="256" bind:value={maxMem} class="flex-1 accent-[var(--accent)]" />
          <input
            type="number"
            min="0"
            max="65536"
            step="256"
            bind:value={maxMem}
            class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"
          />
          <span class="w-8 text-[11px] text-(--text-muted)">MiB</span>
        </div>
        <p class="mt-2 text-[12px] text-(--text-muted)">{t('settings-memory-hint')}</p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="text-[12px] font-medium">{t('settings-gc-preset')}</div>
          <select
            class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
            bind:value={gcPreset}
            aria-label={t('settings-gc-preset')}
          >
            <option value="Default">{t('settings-gc-default')}</option>
            <option value="Auto">{t('settings-gc-auto')}</option>
            <option value="GenerationalZgc">{t('settings-gc-zgc')}</option>
            <option value="Shenandoah">{t('settings-gc-shenandoah')}</option>
            <option value="AikarG1">{t('settings-gc-aikar')}</option>
            <option value="Custom">{t('settings-gc-custom')}</option>
          </select>

          {#if gcPreset === 'Custom'}
            <div class="mt-3 space-y-2">
              {#each GC_FLAGS as f (f.flag)}
                <label class="flex items-center justify-between gap-2 text-[12px]">
                  <span class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      class="h-3.5 w-3.5 accent-(--accent)"
                      checked={customGcFlags.includes(f.flag)}
                      onchange={(e) => {
                        if (e.currentTarget.checked) {
                          if (!customGcFlags.includes(f.flag)) customGcFlags = [...customGcFlags, f.flag];
                        } else {
                          customGcFlags = customGcFlags.filter((x) => x !== f.flag);
                        }
                      }}
                    />
                    <span class="font-mono text-[11px]">{f.flag}</span>
                  </span>
                  <span class="text-[10px] text-(--text-muted)">{t(f.badge)}</span>
                </label>
              {/each}
            </div>
          {/if}

          <div class="mt-3">
            <label
              for="gc-extra-jvm"
              class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-gc-extra')}</label
            >
            <input
              id="gc-extra-jvm"
              class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[11px] outline-none focus:border-(--accent)"
              bind:value={extraJvmArgs}
              placeholder="-Xlog:gc*"
            />
          </div>

          <div class="mt-3 rounded border border-(--border) bg-(--bg-canvas) p-2">
            <div class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('settings-gc-preview')}</div>
            <pre class="mt-1 whitespace-pre-wrap break-all font-mono text-[11px] text-(--text-main)">{previewFlags}</pre>
          </div>
        </div>

        <button
          class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
          onclick={onsaveprefs}
        >
          {t('settings-save-java')}
        </button>
      {:else if section === 'horizon'}
        <h2 class="text-[16px] font-semibold">{t('settings-horizon-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-horizon-desc')}
        </p>

        <label
          class="mt-5 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)"
          for="horizon-path">{t('settings-horizon-binary')}</label
        >
        <div class="mt-1 flex gap-2">
          <input
            id="horizon-path"
            class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder={t('settings-horizon-placeholder')}
            bind:value={horizonPath}
          />
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
            disabled={horizonBusy}
            onclick={browseHorizon}
          >
            {horizonBusy ? t('settings-java-checking') : t('settings-horizon-browse')}
          </button>
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50"
            disabled={horizonBusy}
            onclick={saveHorizon}
          >
            {t('settings-horizon-save')}
          </button>
        </div>

        <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)">
          <span
            class="inline-block h-1.5 w-1.5 rounded-full {horizonConfigured ? 'bg-emerald-400' : 'bg-rose-400'}"
          ></span>
          {horizonConfigured ? t('settings-horizon-configured') : t('settings-horizon-not-configured')}
          {#if horizonPath && !horizonConfigured}
            <span class="text-rose-400">{t('settings-horizon-missing')}</span>
          {/if}
        </p>
        {#if horizonMsg}
          <p class="mt-1 text-[12px] text-(--accent)">{horizonMsg}</p>
        {/if}
        {#if horizonError}
          <p role="alert" class="mt-1 text-[12px] text-rose-400">{horizonError}</p>
        {/if}

        <div class="mt-4 flex flex-wrap gap-2">
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
            disabled={horizonBusy}
            onclick={detectHorizonBuilds}
          >
            {t('settings-horizon-detect')}
          </button>
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
            disabled={horizonBusy}
            onclick={loadHorizonReleases}
          >
            {t('settings-horizon-releases')}
          </button>
        </div>
        {#if horizonDetected.length}
          <p class="mt-3 text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">
            {t('settings-horizon-detected')}
          </p>
          <div class="mt-1 space-y-1">
            {#each horizonDetected as build}
              <div class="flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-2.5 py-1.5 text-[11px]">
                <span class="min-w-0 flex-1 truncate font-mono" title={build.path}>{build.path}</span>
                {#if build.horizon}
                  <span class="text-(--text-muted)">{build.horizon}{build.minecraft ? ` · MC ${build.minecraft}` : ''}</span>
                {/if}
                <button
                  class="rounded border border-(--border) px-2 py-0.5 text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                  onclick={() => { horizonPath = build.path; saveHorizon(); }}
                >
                  {t('settings-horizon-use')}
                </button>
              </div>
            {/each}
          </div>
        {/if}
        {#if horizonReleases.length}
          <p class="mt-3 text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">
            {t('settings-horizon-releases')}
          </p>
          <div class="mt-1 flex gap-2">
            <select
              class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"
              bind:value={horizonTag}
            >
              <option value="latest">{t('settings-horizon-latest')}</option>
              {#each horizonReleases as release}
                <option value={release.tag}>{release.tag}{release.prerelease ? ' · pre' : ''}</option>
              {/each}
            </select>
            <button
              class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50"
              disabled={horizonBusy}
              onclick={installHorizonRelease}
            >
              {t('settings-horizon-install')}
            </button>
          </div>
        {/if}
        <p class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-3 text-[11px] leading-relaxed text-(--text-muted)">
          {t('settings-horizon-contract')} <span class="font-mono">{t('settings-horizon-contract-line')}</span>.
          {t('settings-horizon-contract-note')}
        </p>
      {:else if section === 'storage'}
        <h2 class="text-[16px] font-semibold">{t('settings-folders-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-folders-desc')}
        </p>

        {#if storage}
          <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
            <div class="flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="text-[12px] font-medium">{t('settings-app-data')}</div>
                <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)" title={storage.app_data}>
                  {storage.app_data}
                </div>
              </div>
              <button
                class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                title={t('settings-open-app-data')}
                onclick={() => onopenfolder?.(storage.app_data)}
              >
                {t('common-open')}
              </button>
            </div>
          </div>

          {#each FOLDERS as f (f.key)}
            <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4">
              <div class="flex items-center justify-between gap-3">
                <div class="text-[12px] font-medium">
                  {t(`settings-folder-${f.key}`)}
                  <span class="font-normal text-(--text-muted)">{isDefault(f.key) ? t('settings-folder-default') : t('settings-folder-custom')}</span>
                </div>
                {#if !isDefault(f.key)}
                  <button
                    class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40"
                    disabled={storageBusy}
                    title={t('settings-folder-reset-title')}
                    onclick={() => onsavefolder?.(f.key, '')}
                  >
                    {t('common-reset')}
                  </button>
                {/if}
              </div>
              <p class="mt-0.5 text-[11px] text-(--text-muted)">{t(`settings-folder-${f.key}-hint`)}</p>
              <div class="mt-3 flex gap-2">
                <input
                  class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
                  placeholder={resolvedPath(f.key)}
                  bind:value={folderInputs[f.key]}
                />
                <button
                  class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                  title={t('settings-folder-pick')}
                  onclick={async () => {
                    const picked = await browseDir(folderInputs[f.key]);
                    if (picked) folderInputs[f.key] = picked;
                  }}
                >
                  {t('settings-horizon-browse')}
                </button>
                <button
                  class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                  title={t('settings-folder-open')}
                  onclick={() => onopenfolder?.(resolvedPath(f.key))}
                >
                  {t('common-open')}
                </button>
                <button
                  class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                  disabled={storageBusy}
                  onclick={() => onsavefolder?.(f.key, folderInputs[f.key])}
                >
                  {t('common-save')}
                </button>
              </div>
              {#if f.key === 'downloads'}
                <div class="mt-2 flex items-center justify-between gap-3">
                  <div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)" title={storage.staging_root}>
                    {t('settings-staging', { path: storage.staging_root })}
                  </div>
                  <button
                    class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40"
                    disabled={storageBusy || gameRunning}
                    title={gameRunning ? t('settings-purge-running') : t('settings-purge-title')}
                    onclick={oncleanstaging}
                  >
                    {t('settings-purge')}
                  </button>
                </div>
              {/if}
            </div>
          {/each}

          <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="text-[12px] font-medium">{t('cas-title')}</div>
                <p class="mt-0.5 text-[11px] text-(--text-muted)">{t('cas-desc')}</p>
              </div>
              <label class="mt-0.5 flex shrink-0 items-center gap-2" for="cas-links-toggle">
                <input
                  id="cas-links-toggle"
                  type="checkbox"
                  class="h-4 w-4 accent-(--accent)"
                  checked={casStats?.use_cas_links ?? true}
                  disabled={casBusy}
                  onchange={async (e) => {
                    const enabled = e.currentTarget.checked;
                    try {
                      await window.__TAURI__.core.invoke('set_cas_links', { enabled });
                      if (casStats) casStats = { ...casStats, use_cas_links: enabled };
                    } catch (err) {
                      casMsg = String(err);
                    }
                  }}
                />
                <span class="text-[12px] text-(--text-main)">{t('cas-enable')}</span>
              </label>
            </div>
            {#if casStats}
              <div class="mt-3 flex flex-wrap gap-4 text-[11px] text-(--text-muted)">
                <span>{t('cas-stats-blobs', { count: casStats.blob_count })}</span>
                <span>{t('cas-stats-size', { size: formatBytes(casStats.total_size_bytes) })}</span>
              </div>
            {/if}
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40"
                disabled={casBusy}
                onclick={refreshCasStats}
              >
                {t('cas-refresh')}
              </button>
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40"
                disabled={casBusy}
                onclick={runCasDeduplicate}
              >
                {t('cas-optimize')}
              </button>
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40"
                disabled={casBusy}
                onclick={runCasGc}
              >
                {t('cas-gc')}
              </button>
            </div>
            {#if casMsg}
              <p role="status" class="mt-3 text-[11px] text-(--accent)">{casMsg}</p>
            {/if}
          </div>
        {/if}
      {:else if section === 'apikeys'}
        <h2 class="text-[16px] font-semibold">{t('settings-api-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-api-desc')}
        </p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="text-[12px] font-medium">
            {t('settings-cf-key')}
            <span class="font-normal text-(--text-muted)">{apiKeyConfigured ? t('settings-cf-configured') : t('settings-cf-not-set')}</span>
          </div>
          <p class="mt-0.5 text-[11px] text-(--text-muted)">
            {t('settings-cf-desc')}
          </p>
          <div class="mt-3 flex gap-2">
            <input
              type="password"
              class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder={apiKeyConfigured ? t('settings-cf-placeholder-saved') : t('settings-cf-placeholder')}
              bind:value={apiKey}
              aria-label={t('settings-cf-key')}
              spellcheck="false"
            />
            <button
              class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
              title={t('settings-cf-save-title')}
              onclick={saveApiKey}
            >
              {t('common-save')}
            </button>
          </div>
          {#if apiKeyMsg}
            <p class="mt-2 text-[11px] text-green-500">{apiKeyMsg}</p>
          {/if}
          {#if apiKeyError}
            <p class="mt-2 text-[11px] text-rose-400">{apiKeyError}</p>
          {/if}
          <button class="mt-2 text-[11px] text-(--accent) hover:underline" onclick={() => onopenurl?.('https://console.curseforge.com/#/api-keys')}>
            ↗ {t('settings-cf-get-key')}
          </button>
        </div>
      {:else if section === 'accessibility'}
        <h2 class="text-[16px] font-semibold">{t('settings-a11y-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('settings-a11y-desc')}
        </p>

        <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="min-w-0">
            <div class="text-[12px] font-medium">{t('settings-blind-title')}</div>
            <p class="mt-1 text-[11px] text-(--text-muted)">
              {t('settings-blind-desc')}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={blindMode}
            class="relative h-6 w-11 shrink-0 rounded-full border transition-colors {blindMode
              ? 'border-transparent bg-(--accent)'
              : 'border-(--border) bg-(--bg-surface)'}"
            aria-label={t('settings-blind-aria')}
            title={t('settings-blind-toggle')}
            onclick={() => (blindMode = !blindMode)}
          >
            <span
              class="absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform {blindMode
                ? 'translate-x-[20px]'
                : ''}"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="min-w-0">
            <div class="text-[12px] font-medium">{t('settings-deaf-title')}</div>
            <p class="mt-1 text-[11px] text-(--text-muted)">
              {t('settings-deaf-desc')}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={deafMode}
            class="relative h-6 w-11 shrink-0 rounded-full border transition-colors {deafMode
              ? 'border-transparent bg-(--accent)'
              : 'border-(--border) bg-(--bg-surface)'}"
            aria-label={t('settings-deaf-aria')}
            title={t('settings-deaf-toggle')}
            onclick={() => (deafMode = !deafMode)}
          >
            <span
              class="absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform {deafMode
                ? 'translate-x-[20px]'
                : ''}"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite">
          {t('settings-a11y-status', {
            blind: blindMode ? t('common-on') : t('common-off'),
            deaf: deafMode ? t('common-on') : t('common-off'),
          })}
        </p>
      {:else if section === 'about'}
        <h2 class="text-[16px] font-semibold">{t('settings-about-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">{t('settings-about-desc')}</p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="flex items-center gap-2">
            <img src="/logo.png" alt="" draggable="false" class="h-10 w-10" />
            <div>
              <button
                type="button"
                class="text-[13px] font-semibold text-left hover:text-(--accent)"
                title={devSettings.devMode ? t('settings-dev-title') : t('settings-dev-hint')}
                onclick={onVersionClick}
              >
                {t('settings-about-version', { version })}
              </button>
              <div class="mt-0.5 text-[12px] text-(--text-muted)">
                {t('settings-about-channel')}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-col items-start gap-2">
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.(`${REPO}`)}>
            ↗ {t('settings-github')}
          </button>
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.(`${REPO}/releases`)}>
            ↗ {t('settings-releases')}
          </button>
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.(`${REPO}/issues`)}>
            ↗ {t('settings-report')}
          </button>
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.('https://ko-fi.com/quanvm0501alt1')}>
            ↗ {t('settings-kofi')}
          </button>
        </div>
        <p class="mt-6 text-[12px] text-(--text-muted)">
          {t('settings-about-footer')}
        </p>
      {:else if section === 'developer'}
        <h2 class="text-[16px] font-semibold">{t('settings-dev-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">{t('settings-dev-desc')}</p>

        <div class="mt-5 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="flex items-center justify-between gap-3">
            <div>
              <div class="text-[12px] font-medium">{t('settings-dev-mode')}</div>
              <div class="mt-0.5 text-[11px] text-(--text-muted)">{t('settings-dev-mode-desc')}</div>
            </div>
            <button
              role="switch"
              aria-checked={devSettings.devMode}
              aria-label={t('settings-dev-mode')}
              class="relative h-6 w-11 shrink-0 rounded-full border transition-colors {devSettings.devMode
                ? 'border-(--accent) bg-(--accent)'
                : 'border-(--border) bg-(--bg-subtle)'}"
              onclick={() => setDevMode(!devSettings.devMode)}
            >
              <span
                class="absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white transition-transform {devSettings.devMode
                  ? 'translate-x-5'
                  : ''}"
              ></span>
            </button>
          </div>
          <button
            class="mt-3 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
            onclick={openDevtools}
          >
            {t('settings-dev-open-devtools')}
          </button>
        </div>

        <h3 class="mt-6 text-[12px] font-semibold uppercase tracking-wide text-(--text-muted)">
          {t('settings-dev-debugging')}
        </h3>
        <div class="mt-2 space-y-2 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <label class="flex items-center gap-2 text-[12px]">
            <input type="checkbox" bind:checked={devSettings.jdwpEnabled} />
            {t('settings-dev-jdwp')}
          </label>
          <label class="flex items-center gap-2 text-[12px]">
            <span class="text-(--text-muted)">{t('settings-dev-jdwp-port')}</span>
            <input
              type="number"
              min="0"
              max="65535"
              class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[12px] outline-none focus:border-(--accent)"
              bind:value={devSettings.jdwpPort}
            />
          </label>
          <label class="flex items-center gap-2 text-[12px]">
            <input type="checkbox" bind:checked={devSettings.mixinDebug} />
            {t('settings-dev-mixin')}
          </label>
        </div>

        <h3 class="mt-6 text-[12px] font-semibold uppercase tracking-wide text-(--text-muted)">
          {t('settings-dev-filesystem')}
        </h3>
        <div class="mt-2 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] leading-relaxed">
          <div class="flex justify-between gap-3">
            <span class="text-(--text-muted)">{t('settings-dev-symlinks')}</span>
            <span class="font-mono">
              {devDiagnostics?.unprivilegedSymlinks === null
                ? t('settings-dev-symlinks-na')
                : devDiagnostics?.unprivilegedSymlinks
                  ? t('common-on')
                  : t('common-off')}
            </span>
          </div>
          <div class="mt-1 flex justify-between gap-3">
            <span class="text-(--text-muted)">{t('settings-dev-cas-root')}</span>
            <span class="min-w-0 truncate font-mono" title={devDiagnostics?.casRoot}>
              {devDiagnostics?.casRoot ?? '—'}
            </span>
          </div>
          <div class="mt-1 flex justify-between gap-3">
            <span class="text-(--text-muted)">{t('settings-dev-link-strategy')}</span>
            <span class="font-mono">{devDiagnostics?.linkStrategy ?? '—'}</span>
          </div>
          <button
            class="mt-3 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
            disabled={devBusy}
            onclick={loadDevDiagnostics}
          >
            {t('settings-dev-refresh')}
          </button>
        </div>

        <h3 class="mt-6 text-[12px] font-semibold uppercase tracking-wide text-(--text-muted)">
          {t('settings-dev-storage')}
        </h3>
        <div class="mt-2 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
            onclick={inspectConfig}
          >
            {t('settings-dev-inspect-config')}
          </button>
        </div>

        {#if devConfigOpen}
          <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-3">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[12px] font-medium">{t('settings-dev-config-title')}</span>
              <button class="text-[12px] text-(--accent) hover:underline" onclick={() => (devConfigOpen = false)}>
                {t('settings-dev-close')}
              </button>
            </div>
            <pre class="mt-2 max-h-72 overflow-auto whitespace-pre-wrap break-all font-mono text-[11px] text-(--text-muted)">{devConfig}</pre>
          </div>
        {/if}
      {/if}

      {#if javaMsg || storageMsg}
        <p class="mt-5 text-[12px] {javaMsg ? 'text-(--accent)' : 'text-(--text-muted)'}">{javaMsg || storageMsg}</p>
      {/if}
    </div>
  </div>
</div>
