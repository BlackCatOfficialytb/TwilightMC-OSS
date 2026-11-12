<script>
  // Prism-style New Instance dialog: identity header (icon, name, group),
  // a searchable version table, and a filter/mod-loader sidebar. Creating is
  // one flow: the backend creates the instance, then the picked icon and
  // group are stamped onto it.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';

  let { groups = [], onclose, oncreated } = $props();

  const TYPE_FILTERS = [
    { id: 'release', label: 'Releases' },
    { id: 'snapshot', label: 'Snapshots' },
    { id: 'old_beta', label: 'Betas' },
    { id: 'old_alpha', label: 'Alphas' },
    { id: 'experiment', label: 'Experiments' },
  ];

  const LOADERS = [
    { id: '', label: 'None' },
    { id: 'neoforge', label: 'NeoForge' },
    { id: 'forge', label: 'Forge' },
    { id: 'fabric', label: 'Fabric' },
    { id: 'quilt', label: 'Quilt' },
    { id: 'liteloader', label: 'LiteLoader' },
  ];

  // The backend's loader catalog covers fabric/quilt; the rest render but
  // cannot be created yet.
  const SUPPORTED_LOADERS = ['', 'fabric', 'quilt'];
  const BUILD_LOADERS = ['fabric', 'quilt'];

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

  let loader = $state('');
  let loaderVersion = $state('');
  let loaderBuilds = $state([]);
  let loaderBuildsState = $state('idle'); // idle | loading | error
  let buildsToken = 0;

  let creating = $state(false);
  let createError = $state('');

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
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
    !!selectedVersion && !unsupportedLoader && !creating && !(needsBuilds && loaderBuildsState === 'loading')
  );

  function typeLabel(type) {
    return (
      { release: 'Release', snapshot: 'Snapshot', old_beta: 'Beta', old_alpha: 'Alpha', experiment: 'Experiment' }[
        type
      ] ?? type
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
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return iconPath && convert ? convert(iconPath) : null;
  }

  async function pickIcon() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      createError = 'Image picker unavailable in this build.';
      return;
    }
    try {
      const picked = await open({
        multiple: false,
        title: 'Choose an instance icon',
        filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp', 'ico'] }],
      });
      if (picked) {
        iconPath = String(picked);
        createError = '';
      }
    } catch (e) {
      createError = String(e);
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
      if (iconPath) {
        try {
          await invoke('set_instance_icon', { instanceId: row.id, imagePath: iconPath });
        } catch (e) {
          warning = `Instance created, but the icon could not be applied: ${e}`;
        }
      }
      if (group.trim()) {
        try {
          await invoke('set_instance_group', { instanceId: row.id, group: group.trim() });
        } catch (e) {
          warning = warning
            ? `${warning} The group could not be set: ${e}`
            : `Instance created, but the group could not be set: ${e}`;
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
    return () => popOverlay(closer);
  });
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
>
  <div
    class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"
  >
    <!-- identity header: icon picker + name + group -->
    <div class="flex items-start gap-3 border-b border-(--border) p-4">
      <button
        class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)"
        title="Choose an instance icon"
        onclick={pickIcon}
      >
        {#if iconSrc()}
          <img src={iconSrc()} alt="" draggable="false" class="h-full w-full object-cover" />
          <span
            class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
            >Change</span
          >
        {:else}
          <span class="text-[22px] leading-none">＋</span>
          <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>
        {/if}
      </button>

      <div class="min-w-0 flex-1">
        <input
          class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
          placeholder={selectedVersion ? `Instance name (${selectedVersion})` : 'Instance name'}
          bind:value={name}
        />
        <div class="mt-2 flex items-center gap-2">
          <label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label>
          <select
            id="wizard-group"
            class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"
            bind:value={group}
          >
            <option value="">No group</option>
            {#each groups as g (g)}
              <option value={g}>{g}</option>
            {/each}
          </select>
        </div>
      </div>

      <button
        class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)"
        title="Close"
        onclick={() => onclose?.()}>✕</button
      >
    </div>

    <!-- body: version table (left) + filters/loaders (right) -->
    <div class="flex min-h-0 flex-1">
      <div class="flex min-w-0 flex-1 flex-col border-r border-(--border)">
        <div class="min-h-0 flex-1 overflow-y-auto">
          {#if fetching}
            <div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">
              Loading version list…
            </div>
          {:else if versionsError}
            <div class="p-4">
              <div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400">
                {versionsError}
              </div>
              <button
                class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                onclick={fetchCatalog}>Retry</button
              >
            </div>
          {:else}
            <table class="w-full text-left text-[12px]">
              <thead class="sticky top-0 z-10 bg-(--bg-surface)">
                <tr
                  class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"
                >
                  <th class="px-3 py-2 font-medium">Version</th>
                  <th class="w-[110px] px-3 py-2 font-medium">Released</th>
                  <th class="w-[90px] px-3 py-2 font-medium">Type</th>
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
                      {#if v.is_latest_release}
                        <span
                          class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)"
                          >latest</span
                        >
                      {/if}
                    </td>
                    <td class="px-3 py-1.5 text-(--text-muted)">{fmtDate(v.release_time)}</td>
                    <td class="px-3 py-1.5 text-(--text-muted)">{typeLabel(v.version_type)}</td>
                  </tr>
                {:else}
                  <tr>
                    <td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">
                      No versions match this filter.
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
        </div>

        <!-- search bar at the bottom, Prism-style -->
        <div class="flex items-center gap-2 border-t border-(--border) p-2">
          <input
            class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Search versions…"
            bind:value={query}
            disabled={!catalog}
          />
          <span class="shrink-0 text-[10px] text-(--text-muted)">{filteredVersions.length} shown</span>
        </div>
      </div>

      <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3">
        <section>
          <h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4>
          <div class="mt-1.5 flex flex-col gap-1">
            {#each TYPE_FILTERS as filter (filter.id)}
              <label class="flex cursor-pointer items-center gap-2 text-[12px]">
                <input
                  type="checkbox"
                  class="h-3.5 w-3.5 accent-(--accent)"
                  checked={enabledTypes.has(filter.id)}
                  onchange={() => toggleType(filter.id)}
                />
                <span>{filter.label}</span>
              </label>
            {/each}
          </div>
        </section>

        <section class="border-t border-(--border) pt-3">
          <h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4>
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
                <span>{option.label}</span>
              </label>
            {/each}
          </div>

          {#if unsupportedLoader}
            <p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">
              This mod loader is not supported yet.
            </p>
          {:else if !loader}
            <p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>
          {/if}

          {#if needsBuilds}
            <label
              class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)"
              for="loader-build">Loader version</label
            >
            {#if loaderBuildsState === 'loading'}
              <div
                class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)"
              >
                Loading builds…
              </div>
            {:else if loaderBuildsState === 'error'}
              <input
                id="loader-build"
                class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)"
                bind:value={loaderVersion}
                placeholder="version (empty = latest stable)"
              />
              <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>
            {:else}
              <select
                id="loader-build"
                class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"
                bind:value={loaderVersion}
              >
                <option value="">Latest stable</option>
                {#each loaderBuilds as build (build.version)}
                  <option value={build.version}>
                    {build.version}{build.stable ? '' : ' (unstable)'}
                  </option>
                {/each}
              </select>
            {/if}
          {/if}
        </section>
      </aside>
    </div>

    <!-- footer: Help / Cancel / OK -->
    <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3">
      <button
        class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
        title="Opens the project README"
        onclick={openHelp}>Help</button
      >
      {#if createError}
        <span class="min-w-0 flex-1 truncate text-[11px] text-red-400" title={createError}>{createError}</span>
      {:else}
        <span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)">
          {selectedVersion ? `Selected Minecraft ${selectedVersion}` : 'Pick a version to continue'}
        </span>
      {/if}
      <button
        class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
        onclick={() => onclose?.()}>Cancel</button
      >
      <button
        class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
        disabled={!canCreate}
        title={unsupportedLoader ? 'This mod loader is not supported yet.' : 'Create the instance'}
        onclick={create}
      >
        {creating ? 'Creating…' : 'OK'}
      </button>
    </div>
  </div>
</div>
