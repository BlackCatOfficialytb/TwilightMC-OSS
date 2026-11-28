<script>
  // Prism-style New Instance dialog: identity header (icon, name, group),
  // a searchable version table, and a filter/mod-loader sidebar. Creating is
  // one flow: the backend creates the instance, then the picked icon and
  // group are stamped onto it.
  import { onMount } from 'svelte';
  import { tauriListen } from './tauri';
  import { pushOverlay, popOverlay } from './overlays.js';
  import { iconKeyAsset } from './twemoji.js';
  import InstanceIconPicker from './InstanceIconPicker.svelte';
  import ProgressBar from './ProgressBar.svelte';
  import { t } from './i18n.svelte.ts';

  let {
    groups = [],
    blindMode = false,
    deafMode = false,
    importPath = '',
    onclose,
    oncreated,
  } = $props();

  // Freesm/Prism platform rail: Custom is the live builder; Import inspects a
  // local/remote archive and routes it through the matching backend pipeline.
  const PLATFORMS = [
    { id: 'custom', label: 'wizard-custom', enabled: true },
    { id: 'import', label: 'wizard-import', enabled: true },
    { id: 'atlauncher', label: 'ATLauncher', enabled: false },
    { id: 'curseforge', label: 'CurseForge', enabled: false },
    { id: 'ftb', label: 'FTB', enabled: false },
    { id: 'modrinth', label: 'Modrinth', enabled: false },
    { id: 'technic', label: 'Technic', enabled: false },
  ];
  let platform = $state('custom');

  const TYPE_FILTERS = [
    { id: 'release', label: 'wizard-type-releases' },
    { id: 'snapshot', label: 'wizard-type-snapshots' },
    { id: 'old_beta', label: 'wizard-type-betas' },
    { id: 'old_alpha', label: 'wizard-type-alphas' },
    { id: 'experiment', label: 'wizard-type-experiments' },
  ];

  const LOADERS = [
    { id: '', label: 'wizard-loader-none-label' },
    { id: 'neoforge', label: 'wizard-loader-neoforge' },
    { id: 'forge', label: 'Forge' },
    { id: 'fabric', label: 'Fabric' },
    { id: 'quilt', label: 'Quilt' },
    { id: 'liteloader', label: 'LiteLoader' },
    { id: 'cleanroom', label: 'Cleanroom' },
    { id: 'legacyfabric', label: 'Legacy Fabric' },
    { id: 'horizon', label: 'wizard-loader-horizon' },
  ];

  function loaderLabel(id) {
    const entry = LOADERS.find((option) => option.id === id);
    return entry ? t(entry.label) : id;
  }

  // The backend loader catalog covers fabric/quilt/forge/neoforge plus the
  // legacy fabric and cleanroom forks; LiteLoader still renders but cannot be
  // created yet.
  const SUPPORTED_LOADERS = [
    '',
    'horizon',
    'fabric',
    'quilt',
    'forge',
    'neoforge',
    'legacyfabric',
    'cleanroom',
  ];
  const BUILD_LOADERS = ['fabric', 'quilt', 'forge', 'neoforge', 'legacyfabric', 'cleanroom'];

  // Legacy Fabric targets the pre-1.14 era; auto-recommend it there.
  const LEGACY_MAX = '1.13.2';

  function versionAtMost(id, ceiling) {
    const parse = (value) => String(value ?? '').split('.').map((n) => parseInt(n, 10) || 0);
    const left = parse(id);
    const right = parse(ceiling);
    for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
      const a = left[i] ?? 0;
      const b = right[i] ?? 0;
      if (a !== b) return a < b;
    }
    return true;
  }

  const legacyFabricRecommended = $derived(!!selectedVersion && versionAtMost(selectedVersion, LEGACY_MAX));
  const cleanroomRequires1122 = $derived(loader === 'cleanroom' && selectedVersion !== '1.12.2');

  const HELP_URL = 'https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme';

  let catalog = $state(null);
  let fetching = $state(true);
  let versionsError = $state('');
  let query = $state('');
  let enabledTypes = $state(new Set(['release']));
  let selectedVersion = $state('');

  let name = $state('');
  let group = $state('');
  let iconPath = $state('');
  let iconKey = $state('');
  let iconPickerOpen = $state(false);

  let loader = $state('');
  let loaderVersion = $state('');
  let loaderBuilds = $state([]);
  let loaderBuildsState = $state('idle'); // idle | loading | error
  let buildsToken = 0;

  let creating = $state(false);
  let createError = $state('');

  // ---- universal archive import ----
  let importSource = $state('');
  let importInfo = $state(null);
  let importOutcome = $state(null);
  let importBusy = $state(false);
  let importError = $state('');
  let importProgress = $state(null);

  // ---- accessibility checklist (Blind/Deaf Mode assistive mods) ----
  const BLIND_ASSIST = [
    {
      id: 'minecraft-access',
      label: 'Minecraft Access',
      hint: 'assist-minecraft-access-hint',
    },
    {
      id: 'sound-physics-remastered',
      label: 'Sound Physics Remastered',
      hint: 'assist-sound-physics-hint',
    },
  ];
  const DEAF_ASSIST = [
    { id: 'echosight', label: 'EchoSight', hint: 'assist-echosight-hint' },
    {
      id: 'subtitles-visualizer',
      label: 'Subtitles Visualizer',
      hint: 'assist-subtitles-hint',
    },
    { id: 'visible-sound', label: 'Visible Sound', hint: 'assist-visible-sound-hint' },
    { id: 'soundsight', label: 'SoundSight', hint: 'assist-soundsight-hint' },
  ];
  let assistMods = $state(new Set(['minecraft-access']));

  const assistOptions = $derived([
    ...(blindMode ? BLIND_ASSIST : []),
    ...(deafMode ? DEAF_ASSIST : []),
  ]);

  // the checklist resets with the loader/profile: Blind Mode pre-checks its
  // core mod (Minecraft Access) on Fabric or Quilt
  $effect(() => {
    assistMods = new Set(
      blindMode && (loader === 'fabric' || loader === 'quilt') ? ['minecraft-access'] : [],
    );
  });

  function toggleAssist(id) {
    const next = new Set(assistMods);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    assistMods = next;
  }

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error(t('backend-unavailable')));
    return core.invoke(cmd, args);
  }

  const filteredVersions = $derived.by(() => {
    const list = catalog?.versions ?? [];
    const q = query.trim().toLowerCase();
    return list.filter(
      (v) => enabledTypes.has(v.version_type) && (!q || v.id.toLowerCase().includes(q))
    );
  });

  const unsupportedLoader = $derived(!SUPPORTED_LOADERS.includes(loader));
  const needsBuilds = $derived(BUILD_LOADERS.includes(loader));
  const canCreate = $derived(
    !!selectedVersion &&
      !unsupportedLoader &&
      !cleanroomRequires1122 &&
      !creating &&
      !(needsBuilds && loaderBuildsState === 'loading')
  );
  const canImport = $derived(
    platform === 'import' && !!importInfo && !!name.trim() && !importBusy && !importOutcome
  );

  function typeLabel(type) {
    return (
      {
        release: t('wizard-type-release'),
        snapshot: t('wizard-type-snapshot'),
        old_beta: t('wizard-type-beta'),
        old_alpha: t('wizard-type-alpha'),
        experiment: t('wizard-type-experiment'),
      }[type] ?? type
    );
  }

  function fmtDate(value) {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  function toggleType(id) {
    const next = new Set(enabledTypes);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    enabledTypes = next;
  }

  function iconSrc() {
    const bundled = iconKeyAsset(iconKey);
    if (bundled) return bundled;
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return iconPath && convert ? convert(iconPath) : null;
  }

  async function pickIcon() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      createError = t('status-file-picker-unavailable');
      return;
    }
    try {
      const picked = await open({
        multiple: false,
        title: t('wizard-choose-icon'),
        filters: [{ name: t('filter-images'), extensions: ['png', 'jpg', 'jpeg', 'webp', 'ico'] }],
      });
      if (picked) {
        iconKey = '';
        iconPath = String(picked);
        createError = '';
      }
      return picked ? String(picked) : null;
    } catch (e) {
      createError = String(e);
      return null;
    }
  }

  // ---- universal archive import -------------------------------------------
  async function inspectImport(source) {
    if (!source?.trim()) {
      importError = t('wizard-import-source-required');
      return;
    }
    importSource = source.trim();
    importBusy = true;
    importInfo = null;
    importOutcome = null;
    importError = '';
    platform = 'import';
    try {
      importInfo = await invoke('inspect_instance_import', { pathOrUrl: importSource });
      name = importInfo.name;
    } catch (e) {
      importError = String(e);
    } finally {
      importBusy = false;
    }
  }

  async function pickImportFile() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      importError = t('status-file-picker-unavailable');
      return;
    }
    try {
      const picked = await open({
        multiple: false,
        title: t('wizard-import-title'),
        filters: [{ name: t('wizard-import-filter'), extensions: ['mrpack', 'twpack', 'zip'] }],
      });
      if (picked) await inspectImport(String(picked));
    } catch (e) {
      importError = String(e);
    }
  }

  function openModPage(url) {
    invoke('open_external_url', { url }).catch((e) => (importError = String(e)));
  }

  function finishImport(outcome) {
    const parts = [...(outcome.warnings ?? [])];
    if (outcome.missing_mods?.length) {
      parts.push(
        t('wizard-import-missing-status', { count: outcome.missing_mods.length })
      );
    }
    oncreated?.({ id: outcome.id, name: name.trim() }, parts.join(' ') || '');
  }

  async function installImport() {
    if (!canImport) return;
    importBusy = true;
    importError = '';
    try {
      const outcome = await invoke('import_instance_archive', {
        pathOrUrl: importSource,
        instanceName: name.trim(),
        group: group.trim() || null,
      });
      importOutcome = outcome;
      // Some mods need manual downloading — keep the dialog open with their
      // browser links so the user is never left guessing.
      if (!outcome.missing_mods?.length && !outcome.warnings?.length) finishImport(outcome);
    } catch (e) {
      importError = String(e);
    } finally {
      importBusy = false;
    }
  }

  async function loadBuilds() {
    if (!needsBuilds || !selectedVersion) return;
    const token = ++buildsToken;
    loaderBuildsState = 'loading';
    try {
      const builds = await invoke('fetch_loader_versions', {
        loader,
        gameVersion: selectedVersion,
      });
      if (token !== buildsToken) return;
      loaderBuilds = builds;
      loaderVersion = builds.find((b) => b.stable)?.version ?? builds[0]?.version ?? '';
      loaderBuildsState = builds.length ? 'idle' : 'error';
    } catch {
      if (token !== buildsToken) return;
      loaderBuilds = [];
      loaderVersion = '';
      loaderBuildsState = 'error';
    }
  }

  async function chooseVersion(id) {
    selectedVersion = id;
    // Legacy Fabric is the only loader that supports the pre-1.14 era; when
    // nothing is chosen yet and the version needs it, preselect it. Cleanroom
    // is 1.12.2-only, so it is never auto-picked over Fabric.
    if (!loader && versionAtMost(id, LEGACY_MAX)) {
      loader = 'legacyfabric';
    }
    if (needsBuilds) await loadBuilds();
  }

  async function pickLoader(id) {
    loader = id;
    loaderVersion = '';
    loaderBuilds = [];
    loaderBuildsState = 'idle';
    if (needsBuilds) await loadBuilds();
  }

  async function fetchCatalog() {
    fetching = true;
    versionsError = '';
    try {
      catalog = await invoke('fetch_vanilla_versions');
    } catch (e) {
      versionsError = String(e);
    } finally {
      fetching = false;
    }
  }

  async function create() {
    if (!canCreate) return;
    creating = true;
    createError = '';
    const version = selectedVersion;
    const label = name.trim() || version;
    try {
      const row = await invoke('create_instance', {
        name: label,
        version,
        loader: loader || null,
        loaderVersion: loaderVersion.trim() || null,
      });
      let warning = '';
      if (iconKey) {
        try {
          await invoke('set_instance_icon_key', { instanceId: row.id, iconKey });
        } catch (e) {
          warning = t('wizard-warning-icon', { error: String(e) });
        }
      } else if (iconPath) {
        try {
          await invoke('set_instance_icon', { instanceId: row.id, imagePath: iconPath });
        } catch (e) {
          warning = t('wizard-warning-icon', { error: String(e) });
        }
      }
      if (group.trim()) {
        try {
          await invoke('set_instance_group', { instanceId: row.id, group: group.trim() });
        } catch (e) {
          warning = warning
            ? `${warning} ${t('wizard-warning-group-append', { error: String(e) })}`
            : t('wizard-warning-group', { error: String(e) });
        }
      }
      // accessibility checklist: install the picked assistive mods (+ their
      // required Modrinth dependencies) right after creation, with whatever
      // loader the user picked (Quilt resolves via QFAPI)
      for (const projectId of assistMods) {
        try {
          await invoke('install_mod_with_deps', {
            instanceId: row.id,
            projectId,
            gameVersion: version,
            loader,
          });
        } catch (e) {
          warning = warning
            ? `${warning} ${t('wizard-warning-mod-append', { mod: projectId, error: String(e) })}`
            : t('wizard-warning-mod', { mod: projectId, error: String(e) });
        }
      }
      oncreated?.(row, warning);
    } catch (e) {
      createError = String(e);
    } finally {
      creating = false;
    }
  }

  function openHelp() {
    window.__TAURI__?.core
      ?.invoke('open_path', { path: HELP_URL })
      .catch((e) => (createError = String(e)));
  }

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    fetchCatalog();
    if (importPath) inspectImport(importPath);
    return () => popOverlay(closer);
  });
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  role="presentation"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
  onkeydown={(e) => e.key === 'Escape' && onclose?.()}
>
  <div
    class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"
  >
    <!-- identity header: icon picker + name + group -->
    <div class="flex items-start gap-3 border-b border-(--border) p-4">
      <button
        class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)"
        title={t('wizard-choose-icon')}
        onclick={() => (iconPickerOpen = true)}
      >
        {#if iconSrc()}
          <img src={iconSrc()} alt="" draggable="false" class="h-full w-full object-cover" />
          <span
            class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
            >{t('wizard-change')}</span
          >
        {:else}
          <span class="text-[22px] leading-none">＋</span>
          <span class="mt-0.5 text-[9px] uppercase tracking-wide">{t('wizard-icon')}</span>
        {/if}
      </button>

      <div class="min-w-0 flex-1">
        <input
          class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
          placeholder={selectedVersion
            ? t('wizard-instance-name-version', { version: selectedVersion })
            : t('wizard-instance-name')}
          bind:value={name}
        />
        <div class="mt-2 flex items-center gap-2">
          <label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">{t('wizard-group')}</label>
          <select
            id="wizard-group"
            class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"
            bind:value={group}
          >
            <option value="">{t('wizard-no-group')}</option>
            {#each groups as g (g)}
              <option value={g}>{g}</option>
            {/each}
          </select>
        </div>
      </div>

      <button
        class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)"
        title={t('common-close')}
        onclick={() => onclose?.()}>✕</button
      >
    </div>

    <!-- body: platform rail | versions + loader | filters -->
    <div class="flex min-h-0 flex-1">
      <!-- left: platform rail (Custom active; Import live; pack sources stubbed) -->
      <aside
        class="flex w-[150px] shrink-0 flex-col gap-1 border-r border-(--border) bg-(--bg-subtle) p-2"
        aria-label={t('wizard-platforms-aria')}
      >
        {#each PLATFORMS as entry (entry.id)}
          <button
            type="button"
            class="flex items-center justify-between gap-1 rounded px-2.5 py-2 text-left text-[12px] font-medium transition-colors {platform ===
            entry.id
              ? 'bg-(--accent) text-(--on-accent)'
              : entry.enabled
                ? 'text-(--text-main) hover:bg-(--bg-surface)'
                : 'cursor-not-allowed text-(--text-muted) opacity-60'}"
            aria-pressed={platform === entry.id}
            disabled={!entry.enabled}
            title={entry.enabled ? t(entry.label) : t('wizard-coming-soon')}
            onclick={() => {
              platform = entry.id;
            }}
          >
            <span class="truncate">{t(entry.label)}</span>
            {#if !entry.enabled}
              <span
                class="shrink-0 rounded bg-(--bg-surface) px-1 py-0.5 text-[8px] uppercase tracking-wide text-(--text-muted)"
                >{t('wizard-soon')}</span
              >
            {/if}
          </button>
        {/each}
      </aside>

      {#if platform === 'custom'}
        <!-- middle: source header, loader detail, versions table, search -->
        <div class="flex min-w-0 flex-1 flex-col border-r border-(--border)">
          <div class="flex items-center justify-between gap-2 border-b border-(--border) px-3 py-2">
            <h4 class="text-[12px] font-semibold">{t('wizard-custom')}</h4>
            <span class="truncate text-[10px] text-(--text-muted)">
              {selectedVersion ? t('wizard-selected', { version: selectedVersion }) : t('wizard-pick')}
            </span>
          </div>

          <!-- loader detail area / prominent banner when None is selected -->
          {#if !loader}
            <div
              role="status"
              class="mx-3 mt-3 rounded border border-amber-500/40 bg-amber-500/10 px-3 py-2.5 text-[11.5px] font-medium text-amber-300"
            >
              {t('wizard-no-loader')}
            </div>
          {:else}
            <div class="mx-3 mt-3 rounded border border-(--border) bg-(--bg-subtle) p-2.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)"
                  >{t('wizard-mod-loader')}</span
                >
                <span class="text-[12px] font-medium">{loaderLabel(loader)}</span>
                {#if needsBuilds}
                  {#if loaderBuildsState === 'loading'}
                    <span class="text-[11px] text-(--text-muted)">{t('wizard-loading-builds')}</span>
                  {:else if loaderBuildsState === 'error'}
                    <input
                      class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none focus:border-(--accent)"
                      bind:value={loaderVersion}
                      placeholder={t('wizard-build-placeholder')}
                      aria-label={t('wizard-loader-version')}
                    />
                    <span class="text-[10px] text-(--accent-star)">{t('wizard-build-unavailable')}</span>
                  {:else}
                    <select
                      class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none focus:border-(--accent)"
                      bind:value={loaderVersion}
                      aria-label={t('wizard-loader-version')}
                    >
                      <option value="">{t('wizard-latest-stable')}</option>
                      {#each loaderBuilds as build (build.version)}
                        <option value={build.version}>
                          {build.version}{build.stable ? '' : ` ${t('wizard-unstable')}`}
                        </option>
                      {/each}
                    </select>
                  {/if}
                {/if}
              </div>

              {#if unsupportedLoader}
                <p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">
                  {t('wizard-unsupported')}
                </p>
              {/if}

              {#if loader === 'horizon'}
                <p class="mt-2 text-[11px] leading-relaxed text-(--text-muted)">
                  {t('wizard-horizon-note')}
                </p>
              {/if}

              {#if loader === 'cleanroom'}
                <div
                  role="alert"
                  class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2 text-[11px] leading-relaxed text-red-300"
                >
                  <p class="font-semibold text-red-400">{t('wizard-cleanroom-title')}</p>
                  <p class="mt-1">{t('wizard-cleanroom-body')}</p>
                  {#if cleanroomRequires1122}
                    <p class="mt-1.5 font-medium">{t('wizard-cleanroom-version')}</p>
                  {/if}
                </div>
              {/if}

              {#if loader === 'legacyfabric' && !legacyFabricRecommended}
                <div
                  role="alert"
                  class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"
                >
                  {t('wizard-legacy-warning', { version: LEGACY_MAX })}
                </div>
              {:else if loader === '' && legacyFabricRecommended}
                <p class="mt-2 text-[11px] text-amber-400">
                  {t('wizard-legacy-recommended', { version: selectedVersion })}
                </p>
              {/if}

              {#if blindMode && loader === 'horizon'}
                <div
                  role="alert"
                  class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"
                >
                  {t('wizard-blind-notice')}
                </div>
              {/if}
            </div>
          {/if}

          <div class="mt-2 min-h-0 flex-1 overflow-y-auto">
            {#if fetching}
              <div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">
                {t('wizard-loading-versions')}
              </div>
            {:else if versionsError}
              <div class="p-4">
                <div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400">
                  {versionsError}
                </div>
                <button
                  class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                  onclick={fetchCatalog}>{t('common-retry')}</button
                >
              </div>
            {:else}
              <table class="w-full text-left text-[12px]">
                <thead class="sticky top-0 z-10 bg-(--bg-surface)">
                  <tr
                    class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"
                  >
                    <th class="px-3 py-2 font-medium">{t('wizard-version')}</th>
                    <th class="w-[110px] px-3 py-2 font-medium">{t('wizard-released')}</th>
                    <th class="w-[110px] px-3 py-2 font-medium">{t('wizard-type')}</th>
                  </tr>
                </thead>
                <tbody>
                  {#each filteredVersions as v (v.id)}
                    <tr
                      role="button"
                      tabindex="0"
                      class="cursor-pointer border-b border-(--border)/50 {selectedVersion === v.id
                        ? 'bg-(--accent)/10'
                        : 'hover:bg-(--accent)/5'}"
                      onclick={() => chooseVersion(v.id)}
                      onkeydown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          chooseVersion(v.id);
                        }
                      }}
                    >
                      <td class="px-3 py-1.5">
                        <span class="font-medium">{v.id}</span>
                      </td>
                      <td class="px-3 py-1.5 text-(--text-muted)">{fmtDate(v.release_time)}</td>
                      <td class="px-3 py-1.5 text-(--text-muted)">
                        {#if v.is_latest_release}<span class="text-(--accent-star)" title={t('wizard-latest')}>★</span>{/if}
                        {typeLabel(v.version_type)}
                      </td>
                    </tr>
                  {:else}
                    <tr>
                      <td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">
                        {t('wizard-no-versions')}
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            {/if}
          </div>

          <!-- search filter bar under the versions table, Prism-style -->
          <div class="flex items-center gap-2 border-t border-(--border) p-2">
            <input
              class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder={t('wizard-search')}
              bind:value={query}
              disabled={!catalog}
            />
            <span class="shrink-0 text-[10px] text-(--text-muted)"
              >{t('wizard-shown', { count: filteredVersions.length })}</span
            >
          </div>
        </div>
        {:else if platform === 'import'}
          <div class="flex min-w-0 flex-1 flex-col overflow-y-auto border-r border-(--border) p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h4 class="text-[13px] font-semibold">{t('wizard-import')}</h4>
                <p class="mt-1 text-[11px] text-(--text-muted)">{t('wizard-import-note')}</p>
              </div>
              <span class="shrink-0 text-[10px] text-(--text-muted)">.zip · .mrpack · .twpack</span>
            </div>

            <label class="mt-4 text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="wizard-import-source">
              {t('wizard-import-url')}
            </label>
            <div class="mt-1 flex gap-2">
              <input
                id="wizard-import-source"
                class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
                placeholder={t('wizard-import-url')}
                bind:value={importSource}
                onkeydown={(e) => e.key === 'Enter' && inspectImport(importSource)}
              />
              <button
                type="button"
                class="shrink-0 rounded border border-(--border) px-2.5 text-[11px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40"
                disabled={importBusy}
                onclick={() => inspectImport(importSource)}
              >
                {importBusy ? t('wizard-import-inspecting') : t('wizard-import-inspect')}
              </button>
            </div>
            <div class="mt-2 flex items-center gap-2">
              <button
                type="button"
                class="rounded bg-(--accent)/15 px-2.5 py-1.5 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25"
                onclick={pickImportFile}>{t('wizard-import-browse')}</button
              >
              <span class="text-[10px] text-(--text-muted)">{t('wizard-import-filter')}</span>
            </div>

            {#if importBusy && importProgress}
              <div class="mt-3"><ProgressBar label={importProgress.label} percent={importProgress.percent} indeterminate={importProgress.indeterminate} stage={importProgress.stage} detail={`${importProgress.completed_files ?? 0}/${importProgress.total_files ?? 0}`} /></div>
            {/if}
            {#if importError}
              <p role="alert" class="mt-3 rounded border border-rose-500/30 bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-400">{importError}</p>
            {/if}

            {#if importInfo}
              <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-3">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)">
                    {t(`wizard-import-format-${importInfo.format}`)}
                  </span>
                  <span class="truncate text-[13px] font-semibold" title={importInfo.name}>{importInfo.name}</span>
                  {#if importInfo.pack_version}
                    <span class="text-[10px] text-(--text-muted)">{importInfo.pack_version}</span>
                  {/if}
                </div>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] text-(--text-muted)">
                    MC {importInfo.game_version || '?'}
                  </span>
                  <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] text-(--text-muted)">
                    {t(`wizard-import-loader-${importInfo.loader || 'none'}`)}{importInfo.loader_version ? ` ${importInfo.loader_version}` : ''}
                  </span>
                  <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] text-(--text-muted)">
                    {t('wizard-import-entries', { count: importInfo.file_count })}
                  </span>
                  {#if importInfo.override_count}
                    <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] text-(--text-muted)">
                      {t('wizard-import-overrides', { count: importInfo.override_count })}
                    </span>
                  {/if}
                </div>

                {#if importInfo.missing_mods?.length}
                  <div class="mt-3 rounded border border-amber-500/40 bg-amber-500/10 p-2">
                    <p class="text-[11px] font-semibold text-amber-300">{t('wizard-import-missing-title')}</p>
                    <p class="mt-1 text-[10px] leading-relaxed text-(--text-muted)">{t('wizard-import-missing-hint')}</p>
                    <ul class="mt-1.5 flex flex-wrap gap-1.5">
                      {#each importInfo.missing_mods as mod (`${mod.project_id}-${mod.file_id}`)}
                        <li>
                          <button
                            type="button"
                            class="rounded border border-(--border) px-1.5 py-0.5 text-[10px] text-(--accent) hover:bg-(--bg-canvas)"
                            onclick={() => openModPage(mod.url)}
                          >
                            {t('wizard-import-open-mod', { id: mod.project_id })}{mod.required ? ` · ${t('wizard-import-required')}` : ''}
                          </button>
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {:else if !importBusy}
              <p class="mt-4 text-[11px] text-(--text-muted)">{t('wizard-import-preview-hint')}</p>
            {/if}

            {#if importOutcome}
              <div role="status" class="mt-4 rounded border border-emerald-500/40 bg-emerald-500/10 p-3">
                <p class="text-[12px] font-semibold text-emerald-300">
                  {t('wizard-import-success', { name: name.trim() })}
                </p>
                {#if importOutcome.missing_mods?.length}
                  <p class="mt-1 text-[11px] text-amber-300">
                    {t('wizard-import-missing-status', { count: importOutcome.missing_mods.length })}
                  </p>
                  <ul class="mt-1.5 flex flex-wrap gap-1.5">
                    {#each importOutcome.missing_mods as mod (`${mod.project_id}-${mod.file_id}`)}
                      <li>
                        <button
                          type="button"
                          class="rounded border border-(--border) px-1.5 py-0.5 text-[10px] text-(--accent) hover:bg-(--bg-canvas)"
                          onclick={() => openModPage(mod.url)}
                        >{t('wizard-import-open-mod', { id: mod.project_id })}</button
                        >
                      </li>
                    {/each}
                  </ul>
                {/if}
                {#each importOutcome.warnings as warning}
                  <p class="mt-1 text-[11px] text-amber-300">{warning}</p>
                {/each}
                <button
                  type="button"
                  class="mt-3 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
                  onclick={() => finishImport(importOutcome)}>{t('wizard-import-finish')}</button
                >
              </div>
            {/if}

            <div class="mt-4 grid gap-2">
              <label class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="wizard-import-name">{t('install-instance-name')}</label>
              <input
                id="wizard-import-name"
                class="h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
                placeholder={t('install-instance-name')}
                bind:value={name}
              />
              <label class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="wizard-import-group">{t('wizard-group')}</label>
              <select
                id="wizard-import-group"
                class="h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"
                bind:value={group}
              >
                <option value="">{t('wizard-no-group')}</option>
                {#each groups as g (g)}
                  <option value={g}>{g}</option>
                {/each}
              </select>
            </div>
          </div>
        {:else}
          <div class="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 border-r border-(--border) p-6 text-center">
            <p class="text-[13px] font-medium">{t('wizard-coming-soon')}</p>
          </div>
        {/if}

      <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3">
        <section>
          <div class="flex items-center justify-between gap-2">
            <h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('wizard-types')}</h4>
            <button
              type="button"
              class="rounded px-1.5 py-0.5 text-[10px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
              title={t('wizard-refresh-versions-title')}
              onclick={fetchCatalog}
            >
              ⟳ {t('wizard-refresh')}
            </button>
          </div>
          <div class="mt-1.5 flex flex-col gap-1">
            {#each TYPE_FILTERS as filter (filter.id)}
              <label class="flex cursor-pointer items-center gap-2 text-[12px]">
                <input
                  type="checkbox"
                  class="h-3.5 w-3.5 accent-(--accent)"
                  checked={enabledTypes.has(filter.id)}
                  onchange={() => toggleType(filter.id)}
                />
                <span>{t(filter.label)}</span>
              </label>
            {/each}
          </div>
        </section>

        <section class="border-t border-(--border) pt-3">
          <div class="flex items-center justify-between gap-2">
            <h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('wizard-mod-loader')}</h4>
            <button
              type="button"
              class="rounded px-1.5 py-0.5 text-[10px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
              disabled={!needsBuilds}
              title={t('wizard-refresh-loaders-title')}
              onclick={loadBuilds}
            >
              ⟳ {t('wizard-refresh')}
            </button>
          </div>
          <div class="mt-1.5 flex flex-col gap-1">
            {#each LOADERS as option (option.id)}
              <label class="flex cursor-pointer items-center gap-2 text-[12px]">
                <input
                  type="radio"
                  name="mod-loader"
                  class="h-3.5 w-3.5 accent-(--accent)"
                  value={option.id}
                  checked={loader === option.id}
                  onchange={() => pickLoader(option.id)}
                />
                <span>{t(option.label)}</span>
                {#if option.id === 'liteloader'}
                  <span class="text-[9px] uppercase tracking-wide text-(--accent-star)">{t('wizard-unsupported-short')}</span>
                {/if}
              </label>
            {/each}
          </div>

          {#if (loader === 'fabric' || loader === 'quilt') && assistOptions.length}
            <section class="mt-3 border-t border-(--border) pt-3">
              <h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">
                {t('wizard-a11y-mods')}
              </h4>
              <p class="mt-0.5 text-[10px] text-(--text-muted)">
                {t('wizard-a11y-installed')}
                {loader === 'quilt' ? t('wizard-a11y-qfapi') : ''}
              </p>
              <div class="mt-1.5 flex flex-col gap-1.5">
                {#each assistOptions as mod (mod.id)}
                  <label class="flex cursor-pointer items-start gap-2 text-[12px]">
                    <input
                      type="checkbox"
                      class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"
                      checked={assistMods.has(mod.id)}
                      onchange={() => toggleAssist(mod.id)}
                    />
                    <span>
                      <span>{mod.label}</span>
                      <span class="block text-[10px] text-(--text-muted)">{t(mod.hint)}</span>
                    </span>
                  </label>
                {/each}
              </div>
            </section>
          {/if}
        </section>
      </aside>
    </div>

    <!-- footer: Help / Cancel / OK -->
    <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3">
      <button
        class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
        title={t('wizard-help-title')}
        onclick={openHelp}>{t('wizard-help')}</button
      >
      {#if platform === 'import' ? importError : createError}
        <span class="min-w-0 flex-1 truncate text-[11px] text-red-400" title={platform === 'import' ? importError : createError}>
          {platform === 'import' ? importError : createError}
        </span>
      {:else}
        <span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)">
          {platform === 'import' ? t('wizard-import-note') : selectedVersion ? t('wizard-selected', { version: selectedVersion }) : t('wizard-pick')}
        </span>
      {/if}
      <button
        class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
        onclick={() => onclose?.()}>{t('common-cancel')}</button
      >
      {#if platform === 'import'}
        <button
          class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={!canImport}
          title={t('wizard-import-title')}
          onclick={installImport}
        >
          {importBusy ? t('wizard-import-installing') : t('wizard-import-install')}
        </button>
      {:else}
        <button
          class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={!canCreate}
          title={unsupportedLoader ? t('wizard-unsupported') : t('wizard-create-title')}
          onclick={create}
        >
          {creating ? t('wizard-creating') : t('common-ok')}
        </button>
      {/if}
    </div>
  </div>
</div>

{#if iconPickerOpen}
  <InstanceIconPicker
    currentKey={iconKey}
    currentPath={iconSrc() ?? ''}
    onpick={(key) => {
      iconKey = key;
      iconPath = '';
      iconPickerOpen = false;
    }}
    oncustom={async () => {
      const picked = await pickIcon();
      if (picked) iconKey = '';
      return picked;
    }}
    onclose={() => (iconPickerOpen = false)}
  />
{/if}
