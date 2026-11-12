<script>
  // In-app Modrinth browser: debounced search pinned to the instance's game
  // version + loader, and a 1-click install of the primary jar into
  // `<instance>/minecraft/mods`. The parent owns refresh + selection; this
  // surface only reports installation success through `oninstalled`.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';

  let { instance, onclose, oninstalled } = $props();

  let query = $state('');
  let results = $state(null);
  let searching = $state(false);
  let searchError = $state('');
  let installing = $state({});
  let installedNames = $state({});
  let seq = 0;

  // Modrinth search categories only know real loaders; vanilla (and any
  // unknown tag) searches across every loader facet instead.
  const KNOWN_LOADERS = ['fabric', 'quilt', 'forge', 'neoforge'];
  const loaderTag = $derived.by(() => {
    const tag = instance.loader_type.toLowerCase();
    return KNOWN_LOADERS.includes(tag) ? tag : '';
  });

  function fmtDownloads(n) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
    return String(n);
  }

  function iconSrc(row) {
    return row.icon_url || '/logo.png';
  }

  // Debounced live search: each keystroke cancels the pending timer, the
  // sequence id drops stale responses after the query moved on.
  $effect(() => {
    const q = query.trim();
    const id = ++seq;
    const timer = setTimeout(() => {
      searching = true;
      searchError = '';
      window.__TAURI__.core
        .invoke('search_modrinth_mods', {
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
    }, 350);
    return () => clearTimeout(timer);
  });

  async function install(row) {
    if (installing[row.project_id] || installedNames[row.project_id]) return;
    installing = { ...installing, [row.project_id]: true };
    try {
      const filename = await window.__TAURI__.core.invoke('install_modrinth_mod', {
        instanceId: instance.id,
        projectId: row.project_id,
        gameVersion: instance.minecraft_version,
        loader: loaderTag,
      });
      installedNames = { ...installedNames, [row.project_id]: filename };
      oninstalled?.(row);
    } catch (e) {
      searchError = `Install failed: ${e}`;
    } finally {
      installing = { ...installing, [row.project_id]: false };
    }
  }

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    return () => popOverlay(closer);
  });
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
>
  <div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
    <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
      <div class="min-w-0">
        <h3 class="text-sm font-semibold">Get more mods</h3>
        <p class="truncate text-[11px] text-(--text-muted)">
          Modrinth · {instance.name} · MC {instance.minecraft_version}
          {#if loaderTag}
            · {loaderTag[0].toUpperCase() + loaderTag.slice(1)}
          {/if}
        </p>
      </div>
      <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => onclose?.()}>✕</button>
    </div>

    <div class="border-b border-(--border) p-3">
      <input
        class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
        placeholder="Search Modrinth mods…"
        bind:value={query}
      />
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto p-3">
      {#if searchError}
        <div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400">{searchError}</div>
      {/if}
      {#if !results}
        <div class="p-6 text-center text-[12px] text-(--text-muted)">
          {searching ? 'Searching Modrinth…' : 'Type to search.'}
        </div>
      {:else if results.length === 0 && !searching}
        <div class="p-6 text-center text-[12px] text-(--text-muted)">
          No mods for MC {instance.minecraft_version}{loaderTag ? ` + ${loaderTag}` : ''} match “{query.trim()}”.
        </div>
      {:else}
        <div class="flex flex-col gap-1.5">
          {#each results as row (row.project_id)}
            <div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2">
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
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <span class="truncate text-[13px] font-medium" title={row.title}>{row.title}</span>
                  <span class="shrink-0 text-[10px] text-(--text-muted)" title="{fmtDownloads(row.downloads)} downloads">
                    ⤓ {fmtDownloads(row.downloads)}
                  </span>
                </div>
                <div class="truncate text-[11px] text-(--text-muted)" title={row.description}>{row.description}</div>
                <div class="truncate text-[10px] text-(--text-muted)">by {row.author || 'unknown'}</div>
              </div>
              {#if installedNames[row.project_id]}
                <span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)" title={installedNames[row.project_id]}>
                  ✓ Installed
                </span>
              {:else}
                <button
                  class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                  disabled={installing[row.project_id]}
                  title="Downloads the primary jar into this instance's mods folder"
                  onclick={() => install(row)}
                >
                  {installing[row.project_id] ? 'Installing…' : 'Install'}
                </button>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
