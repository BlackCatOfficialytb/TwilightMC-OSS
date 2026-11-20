<script>
  // Freesm-style three-pane Modrinth browser: category/sort filters (left),
  // search + result list (center), inspector with the queue toggle (right),
  // and a bottom staging bar. Selection stages mods for the batch review
  // (ModDownloadReviewModal) without interrupting browsing.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import LauncherIcon from './LauncherIcon.svelte';
  import { toast } from './alerts.svelte.js';
  import ModDownloadReviewModal from './ModDownloadReviewModal.svelte';
  import { t } from './i18n.svelte.ts';

  let { instance, onclose, oninstalled, projectType = 'mod' } = $props();

  // Pack mode (projectType: resourcepack | shader): searches run without
  // loader facets, the queue/staging flow is skipped (packs have no
  // dependencies) and the inspector installs the pack zip directly.
  const isPack = $derived(projectType === 'resourcepack' || projectType === 'shader');

  // ---- source: Modrinth (default) or CurseForge ----
  // CurseForge search needs the personal API key from Settings; blocked
  // files (no distribution URL) fall back to "Open in Browser" + manual
  // import into the instance mods dir.
  let source = $state('modrinth');
  let hasCfKey = $state(false);
  let cfInstalling = $state(false);
  let fallbackTarget = $state(null);

  // Modrinth search categories only know real loaders; vanilla (and any
  // unknown tag) searches across every loader facet instead.
  const KNOWN_LOADERS = ['fabric', 'quilt', 'forge', 'neoforge', 'legacy-fabric'];
  const loaderTag = $derived.by(() => {
    const tag = instance.loader_type.toLowerCase();
    if (tag === 'legacy fabric' || tag === 'legacyfabric') return 'legacy-fabric';
    if (tag === 'cleanroom') return 'forge';
    return KNOWN_LOADERS.includes(tag) ? tag : '';
  });

  const CATEGORIES = [
    'optimization',
    'utility',
    'library',
    'worldgen',
    'accessibility',
    'technology',
    'adventure',
    'decoration',
    'mobs',
    'equipment',
    'food',
    'storage',
    'transportation',
    'game-mechanics',
  ];
  const SORTS = ['relevance', 'downloads', 'updated', 'newest'];

  // ---- search (center) ----
  let query = $state('');
  let sort = $state('relevance');
  let categories = $state(new Set());
  let results = $state(null);
  let searching = $state(false);
  let searchError = $state('');
  let seq = 0;

  // ---- installed badges ----
  let installedNames = $state([]);
  // heuristic: project title → its jar name ("Minecraft Access" →
  // "minecraft-access-…jar"); exact file names need a version fetch, the
  // review table does that properly
  function looksInstalled(row) {
    const slug = row.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return installedNames.some((n) => n.includes(slug));
  }

  // ---- inspector (right) ----
  let selected = $state(null);
  let details = $state(null);
  let detailsLoading = $state(false);
  let detailsError = $state('');
  let detailsSeq = 0;
  let versionPicked = $state('');

  // ---- staging queue ----
  let queue = $state([]);
  let reviewOpen = $state(false);

  function toggleCategory(tag) {
    const next = new Set(categories);
    if (next.has(tag)) next.delete(tag);
    else next.add(tag);
    categories = next;
  }

  function fmtDownloads(n) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
    return String(n);
  }

  function iconSrc(row) {
    return row.icon_url || '/logo.png';
  }

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error(t('backend-unavailable')));
    return core.invoke(cmd, args);
  }

  function switchSource(next) {
    if (source === next) return;
    source = next;
    results = null;
    searchError = '';
  }

  // Debounced live search: each keystroke cancels the pending timer, the
  // sequence id drops stale responses after the query moved on.
  $effect(() => {
    const q = query.trim();
    const cats = [...categories];
    const index = sort;
    const src = source;
    const keyed = hasCfKey;
    const id = ++seq;
    const timer = setTimeout(() => {
      if (src === 'curseforge') {
        if (!keyed) return; // the key-required notice renders instead
        searching = true;
        searchError = '';
        invoke('search_curseforge_mods', {
          query: q,
          gameVersion: instance.minecraft_version,
          loader: loaderTag,
        })
          .then((rows) => {
            if (id === seq) {
              results = rows;
              searching = false;
            }
          })
          .catch((e) => {
            if (id === seq) {
              searchError = String(e);
              searching = false;
            }
          });
        return;
      }
      searching = true;
      searchError = '';
      invoke('search_modrinth_mods', {
        query: q,
        gameVersion: instance.minecraft_version,
        // packs are loader-agnostic zips: no loaders facet, no loader pin
        loader: isPack ? '' : loaderTag,
        categories: cats,
        index,
        project_type: isPack ? projectType : undefined,
      })
        .then((rows) => {
          if (id === seq) {
            results = rows;
            searching = false;
          }
        })
        .catch((e) => {
          if (id === seq) {
            searchError = String(e);
            searching = false;
          }
        });
    }, 350);
    return () => clearTimeout(timer);
  });

  async function select(row) {
    if (selected?.project_id === row.project_id) return;
    selected = row;
    details = null;
    detailsError = '';
    versionPicked = '';
    if (source === 'curseforge') return; // the search hit carries its own download info
    const token = ++detailsSeq;
    detailsLoading = true;
    try {
      const info = await invoke('get_modrinth_project_details', {
        projectId: row.project_id,
        gameVersion: instance.minecraft_version,
        loader: isPack ? '' : loaderTag,
      });
      if (token === detailsSeq) details = info;
    } catch (e) {
      if (token === detailsSeq) detailsError = String(e);
    } finally {
      if (token === detailsSeq) detailsLoading = false;
    }
  }

  // ---- CurseForge install + blocked-distribution fallback ----
  async function installCurse(row) {
    if (!row.download_url) {
      fallbackTarget = row; // blocked for distribution → manual fallback dialog
      return;
    }
    cfInstalling = true;
    try {
      const name = await invoke('install_curseforge_mod', {
        instanceId: instance.id,
        downloadUrl: row.download_url,
        fileName: row.file_name,
        sha1: row.sha1 || null,
      });
      installedNames = [...installedNames, name.toLowerCase()];
      toast(t('curseforge-installed', { name }), 'success');
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      cfInstalling = false;
    }
  }

  function openFallbackBrowser() {
    const url = fallbackTarget?.website_url;
    if (url) invoke('open_external_url', { url }).catch(() => {});
  }

  async function importFallbackJar() {
    try {
      const dialog = window.__TAURI__?.dialog;
      if (!dialog) {
        toast(t('status-file-picker-unavailable'), 'warning');
        return;
      }
      const path = await dialog.open({
        multiple: false,
        filters: [{ name: 'Minecraft mod', extensions: ['jar'] }],
      });
      if (!path) return;
      await invoke('import_mod', { instanceId: instance.id, jarPath: path });
      const name = String(path).split(/[\\/]/).pop();
      installedNames = [...installedNames, name.toLowerCase()];
      toast(t('curseforge-imported', { name }), 'success');
      fallbackTarget = null;
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  // ---- pack install (resourcepack / shader zip, no deps) ----
  let packInstalling = $state(false);

  async function installPack(row) {
    packInstalling = true;
    try {
      const name = await invoke('download_modrinth_pack', {
        instanceId: instance.id,
        projectId: row.project_id,
        gameVersion: instance.minecraft_version,
        projectType,
      });
      installedNames = [...installedNames, name.toLowerCase()];
      toast(t('packs-downloaded', { name }), 'success');
      oninstalled?.(name);
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      packInstalling = false;
    }
  }

  function inQueue(projectId) {
    return queue.some((q) => q.project_id === projectId);
  }

  // stages the selected mod (with its pinned version) without leaving the view
  function toggleQueue() {
    if (!selected) return;
    if (inQueue(selected.project_id)) {
      queue = queue.filter((q) => q.project_id !== selected.project_id);
    } else {
      queue = [
        ...queue,
        {
          project_id: selected.project_id,
          title: selected.title,
          version: versionPicked || null,
        },
      ];
    }
  }

  function openReview() {
    if (queue.length) reviewOpen = true;
  }

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    // installed badges: mods list for mods, pack list for packs
    if (isPack) {
      invoke('list_instance_packs', { instanceId: instance.id, projectType })
        .then((files) => (installedNames = files.map((f) => f.name.toLowerCase())))
        .catch(() => {});
    } else {
      invoke('list_instance_mods', { instanceId: instance.id })
        .then((mods) => (installedNames = mods.map((m) => m.filename.toLowerCase())))
        .catch(() => {});
    }
    invoke('get_curseforge_api_key')
      .then((key) => (hasCfKey = !!String(key ?? '').trim()))
      .catch(() => {});
    return () => popOverlay(closer);
  });
</script>

<div
  role="presentation"
  class="fixed inset-0 z-50 flex items-center justify-center"
  style="background: var(--scrim)"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
>
  <div
    class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"
  >
    <!-- header -->
    <div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3">
      <div class="min-w-0">
        <h3 class="text-(--step-heading) font-semibold text-(--fg-1)">{t('modrinth-title')}</h3>
        <p class="truncate text-(--step-meta) text-(--fg-2)">
          {t('modrinth-subtitle', {
            instance: instance.name,
            version: instance.minecraft_version,
            loader: loaderTag ? ` · ${loaderTag[0].toUpperCase() + loaderTag.slice(1)}` : '',
          })}
        </p>
      </div>
      <div class="flex items-center gap-2">
        {#if !isPack}
          <div class="flex items-center gap-0.5 rounded border border-(--border-1) bg-(--bg-3) p-0.5">
            <button
              class="rounded px-2.5 py-1 text-(--step-meta) font-medium {source === 'modrinth'
                ? 'bg-(--accent-1) text-(--on-accent)'
                : 'text-(--fg-2) hover:text-(--fg-1)'}"
              onclick={() => switchSource('modrinth')}
            >
              Modrinth
            </button>
            <button
              class="rounded px-2.5 py-1 text-(--step-meta) font-medium {source === 'curseforge'
                ? 'bg-(--accent-1) text-(--on-accent)'
                : 'text-(--fg-2) hover:text-(--fg-1)'}"
              onclick={() => switchSource('curseforge')}
            >
              CurseForge
            </button>
          </div>
        {/if}
        <button class="text-(--fg-2) hover:text-(--fg-1)" onclick={() => onclose?.()}>✕</button>
      </div>
    </div>

    <!-- three panes -->
    <div class="flex min-h-0 flex-1">
      <!-- left: filters (Modrinth facets; CurseForge search has none; packs
           have no mod categories) -->
      {#if source === 'modrinth' && !isPack}
        <aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3">
          <section>
            <h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">
              {t('modrinth-categories')}
            </h4>
            <div class="mt-1.5 flex flex-col gap-1">
              {#each CATEGORIES as tag (tag)}
                <label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize">
                  <input
                    type="checkbox"
                    class="h-3.5 w-3.5 accent-(--accent-1)"
                    checked={categories.has(tag)}
                    onchange={() => toggleCategory(tag)}
                  />
                  <span>{t(`modrinth-category-${tag}`)}</span>
                </label>
              {/each}
            </div>
          </section>
          <section class="border-t border-(--border-1) pt-3">
            <label
              class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)"
              for="mods-sort">{t('modrinth-sort')}</label
            >
            <select
              id="mods-sort"
              class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"
              bind:value={sort}
            >
              {#each SORTS as s (s)}
                <option value={s}>{t(`modrinth-sort-${s}`)}</option>
              {/each}
            </select>
          </section>
        </aside>
      {/if}

      <!-- center: search + list -->
      <section class="flex min-w-0 flex-1 flex-col">
        <div class="border-b border-(--border-1) p-3">
          <input
            class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)"
            placeholder={t('modrinth-search')}
            bind:value={query}
          />
        </div>
        <div class="min-h-0 flex-1 overflow-y-auto p-3">
          {#if searchError}
            <div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400">
              {searchError}
            </div>
          {/if}
          {#if source === 'curseforge' && !hasCfKey}
            <div class="p-6 text-center text-(--step-body) text-(--fg-2)">
              <p class="mt-3">{t('curseforge-key-required')}</p>
              <p class="mt-1.5 text-(--step-meta)">{t('curseforge-key-hint')}</p>
            </div>
          {:else if !results}
            <div class="p-6 text-center text-(--step-body) text-(--fg-2)">
              {searching ? t('modrinth-searching') : t('modrinth-type-to-search')}
            </div>
          {:else if results.length === 0 && !searching}
            <div class="p-6 text-center text-(--step-body) text-(--fg-2)">
              {t('modrinth-no-results', {
                version: instance.minecraft_version,
                loader: loaderTag ? ` + ${loaderTag}` : '',
                query: query.trim(),
              })}
            </div>
          {:else}
            <div class="flex flex-col gap-1.5">
              {#each results as row (row.project_id)}
                <button
                  class="flex items-center gap-3 rounded border px-3 py-2 text-left {selected?.project_id ===
                  row.project_id
                    ? 'border-(--accent-1) bg-(--brand-tint)'
                    : 'border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60'}"
                  onclick={() => select(row)}
                >
                  <img
                    src={iconSrc(row)}
                    alt=""
                    draggable="false"
                    class="h-9 w-9 shrink-0 rounded object-cover"
                    onerror={(e) => {
                      if (!e.currentTarget.dataset.f) {
                        e.currentTarget.dataset.f = '1';
                        e.currentTarget.src = '/logo.png';
                      }
                    }}
                  />
                  <span class="min-w-0 flex-1">
                    <span class="flex items-center gap-2">
                      <span class="truncate text-(--step-card) font-medium text-(--fg-1)" title={row.title}>
                        {row.title}
                      </span>
                      {#if looksInstalled(row)}
                        <span
                          class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500"
                          >{t('modrinth-installed')}</span
                        >
                      {/if}
                      {#if source === 'curseforge' && !row.download_url}
                        <span
                          class="shrink-0 rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-amber-500"
                          >{t('curseforge-blocked')}</span
                        >
                      {/if}
                      {#if inQueue(row.project_id)}
                        <span
                          class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)"
                          >{t('modrinth-queued')}</span
                        >
                      {/if}
                    </span>
                    <span class="block truncate text-(--step-meta) text-(--fg-2)" title={row.description}>
                      {row.description}
                    </span>
                    <span class="block truncate text-[10px] text-(--fg-2)">
                      {t('modrinth-by', {
                        author: row.author || t('modrinth-unknown-author'),
                        downloads: fmtDownloads(row.downloads),
                      })}
                    </span>
                  </span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </section>

      <!-- right: inspector + queue toggle -->
      <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)">
        {#if !selected}
          <div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)">
            <LauncherIcon name="modrinth" size={28} />
            <p class="mt-3">{t('modrinth-select')}</p>
          </div>
        {:else}
          <div class="flex items-start gap-3 border-b border-(--border-1) p-3">
            <img
              src={iconSrc(selected)}
              alt=""
              draggable="false"
              class="h-12 w-12 shrink-0 rounded object-cover"
              onerror={(e) => {
                if (!e.currentTarget.dataset.f) {
                  e.currentTarget.dataset.f = '1';
                  e.currentTarget.src = '/logo.png';
                }
              }}
            />
            <div class="min-w-0 flex-1">
              <div class="truncate text-(--step-card) font-semibold text-(--fg-1)" title={selected.title}>
                {selected.title}
              </div>
              <div class="truncate text-[10px] text-(--fg-2)">
                {t('modrinth-by-author', { author: selected.author || t('modrinth-unknown-author') })}
              </div>
              <div class="text-[10px] text-(--fg-2)">
                {t('modrinth-download-count', { downloads: fmtDownloads(selected.downloads) })}
              </div>
            </div>
          </div>

          {#if source === 'curseforge'}
            <div class="border-b border-(--border-1) p-3">
              <button
                class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
                disabled={cfInstalling}
                title={t('curseforge-install')}
                onclick={() => installCurse(selected)}
              >
                <LauncherIcon name="download" size={13} /> {t('curseforge-install')}
              </button>
            </div>
          {:else}
            <div class="border-b border-(--border-1) p-3">
              <label
                class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)"
                for="mods-version">{t('modrinth-version')}</label
              >
              {#if detailsLoading}
                <div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">
                  {t('modrinth-loading-versions')}
                </div>
              {:else if details?.versions?.length}
                <select
                  id="mods-version"
                  class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"
                  bind:value={versionPicked}
                >
                  <option value="">{t('modrinth-latest', { version: details.versions[0]?.version })}</option>
                  {#each details.versions as v (v.id)}
                    <option value={v.id}>
                      {v.version}{v.version_type && v.version_type !== 'release' ? ` (${v.version_type})` : ''}
                    </option>
                  {/each}
                </select>
              {:else}
                <div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">
                  {t('modrinth-latest-compatible')}
                </div>
              {/if}
              {#if isPack}
                <button
                  class="mt-2 flex w-full items-center justify-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
                  disabled={packInstalling}
                  title={t('packs-download-title')}
                  onclick={() => installPack(selected)}
                >
                  <LauncherIcon name="download" size={13} /> {t('packs-download')}
                </button>
              {/if}
            </div>
          {/if}

          <div class="min-h-0 flex-1 p-3">
            <div class="text-(--step-body) text-(--fg-2)">{selected.description}</div>
            {#if detailsError}
              <p class="mt-2 text-[11px] text-rose-400">{detailsError}</p>
            {/if}
            {#if details?.body}
              <div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)">
                {details.body}
              </div>
            {/if}
          </div>
        {/if}
      </aside>
    </div>

    <!-- bottom staging bar (Modrinth queue flow; CurseForge installs directly,
         packs download the zip straight from the inspector) -->
    {#if source === 'modrinth' && !isPack}
      <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3">
        <span class="text-(--step-body) text-(--fg-2)">
          {queue.length === 0
            ? t('modrinth-no-mods')
            : t('modrinth-selected', { count: queue.length })}
          {#if queue.length}
            <span class="ml-1 text-[10px]">({queue.map((q) => q.title).join(', ')})</span>
          {/if}
        </span>
        <div class="flex items-center gap-2">
          <button
            class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40"
            disabled={!queue.length}
            onclick={() => (queue = [])}
          >
            {t('modrinth-clear')}
          </button>
          <button
            class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
            disabled={!queue.length}
            title={t('modrinth-review-title')}
            onclick={openReview}
          >
            <LauncherIcon name="download" size={13} /> {t('modrinth-review')}
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

{#if reviewOpen}
  <ModDownloadReviewModal
    {instance}
    items={queue}
    onclose={() => (reviewOpen = false)}
    ondownloaded={(names) => {
      reviewOpen = false;
      queue = [];
      oninstalled?.(names);
    }}
  />
{/if}

{#if fallbackTarget}
  <div
    role="presentation"
    class="fixed inset-0 z-[60] flex items-center justify-center"
    style="background: var(--scrim)"
    onclick={(e) => {
      if (e.target === e.currentTarget) fallbackTarget = null;
    }}
  >
    <div class="w-[460px] max-w-[90vw] rounded-lg border border-(--border-1) bg-(--bg-2) p-5 shadow-2xl">
      <h4 class="text-(--step-heading) font-semibold text-(--fg-1)">
        {t('curseforge-fallback-title')}
      </h4>
      <p class="mt-2 text-(--step-body) text-(--fg-2)">
        {t('curseforge-fallback-desc', { name: fallbackTarget.title })}
      </p>
      <div class="mt-4 flex justify-end gap-2">
        <button
          class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"
          onclick={() => (fallbackTarget = null)}
        >
          {t('common-cancel')}
        </button>
        <button
          class="rounded border border-(--border-1) px-3 py-1.5 text-(--step-body) text-(--fg-1) hover:bg-(--bg-3)"
          onclick={openFallbackBrowser}
        >
          {t('curseforge-open-browser')}
        </button>
        <button
          class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"
          onclick={importFallbackJar}
        >
          {t('curseforge-import-jar')}
        </button>
      </div>
    </div>
  </div>
{/if}
