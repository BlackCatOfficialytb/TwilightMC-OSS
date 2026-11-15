<script>
  // Freesm-style download review: the staging queue resolves into every
  // queued mod plus its recursive required dependencies (preview command),
  // rendered as a check table — only checked rows download on confirm.
  // Already-installed mods highlight and start unchecked.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import { toast } from './alerts.svelte.js';

  let { instance, items = [], onclose, ondownloaded } = $props();

  const KNOWN_LOADERS = ['fabric', 'quilt', 'forge', 'neoforge'];
  const loaderTag = $derived.by(() => {
    const tag = instance.loader_type.toLowerCase();
    return KNOWN_LOADERS.includes(tag) ? tag : '';
  });

  let rows = $state(null);
  let loading = $state(true);
  let error = $state('');
  let checked = $state({});
  let downloading = $state(false);
  let downloadError = $state('');

  function fmtSize(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${bytes} B`;
  }

  function note(row) {
    if (row.required_by.length) return `required by ${row.required_by.join(', ')}`;
    if (row.installed) return 'already installed';
    return 'your selection';
  }

  function checkedCount() {
    return rows?.filter((r) => checked[r.project_id]).length ?? 0;
  }

  function toggle(row) {
    checked = { ...checked, [row.project_id]: !checked[row.project_id] };
  }

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
    return core.invoke(cmd, args);
  }

  async function confirmDownload() {
    if (!rows || downloading) return;
    const files = rows
      .filter((r) => checked[r.project_id])
      .map((r) => ({ url: r.url, filename: r.filename, sha1: r.sha1 }));
    if (!files.length) return;
    downloading = true;
    downloadError = '';
    try {
      const names = await invoke('install_modrinth_batch', {
        instanceId: instance.id,
        files,
      });
      toast(`Downloaded ${names.length} mod file${names.length === 1 ? '' : 's'}.`, 'success');
      ondownloaded?.(names);
    } catch (e) {
      downloadError = String(e);
      toast(`Download failed: ${e}`, 'error');
    } finally {
      downloading = false;
    }
  }

  onMount(() => {
    const closer = pushOverlay(() => (downloading ? undefined : onclose?.()));
    invoke('preview_mod_download_queue', {
      instanceId: instance.id,
      projects: items,
      gameVersion: instance.minecraft_version,
      loader: loaderTag,
    })
      .then((resolved) => {
        rows = resolved;
        // checked by default; already-installed rows start unchecked
        checked = Object.fromEntries(
          resolved.map((r) => [r.project_id, !r.installed]),
        );
        loading = false;
      })
      .catch((e) => {
        error = String(e);
        loading = false;
      });
    return () => popOverlay(closer);
  });
</script>

<div
  role="presentation"
  class="fixed inset-0 z-[60] flex items-center justify-center"
  style="background: var(--scrim)"
  onclick={(e) => {
    if (e.target === e.currentTarget && !downloading) onclose?.();
  }}
>
  <div
    class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"
  >
    <!-- header -->
    <div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3">
      <div class="min-w-0">
        <h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3>
        <p class="text-(--step-meta) text-(--fg-2)">
          You're about to download the following mods — only rows with a check will be downloaded.
        </p>
      </div>
      <button
        class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40"
        disabled={downloading}
        onclick={() => onclose?.()}
      >
        ✕
      </button>
    </div>

    <!-- review table -->
    <div class="min-h-0 flex-1 overflow-y-auto">
      {#if loading}
        <div class="p-6 text-center text-(--step-body) text-(--fg-2)">
          Resolving mods and their dependencies…
        </div>
      {:else if error}
        <div class="p-4">
          <div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400">
            {error}
          </div>
        </div>
      {:else if rows}
        <table class="w-full text-left text-(--step-body)">
          <thead class="sticky top-0 z-10 bg-(--bg-3)">
            <tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)">
              <th class="w-[36px] px-3 py-2 font-medium"></th>
              <th class="px-3 py-2 font-medium">Mod</th>
              <th class="w-[130px] px-3 py-2 font-medium">Version</th>
              <th class="w-[220px] px-3 py-2 font-medium">File</th>
              <th class="w-[190px] px-3 py-2 font-medium">Source</th>
              <th class="w-[80px] px-3 py-2 text-right font-medium">Size</th>
            </tr>
          </thead>
          <tbody>
            {#each rows as row (row.project_id)}
              <tr
                class="border-b border-(--border-1)/50 {row.installed
                  ? 'bg-(--bg-3)/60'
                  : row.required_by.length
                    ? 'bg-(--brand-tint)/40'
                    : ''}"
              >
                <td class="px-3 py-2 align-top">
                  <input
                    type="checkbox"
                    class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"
                    checked={checked[row.project_id] ?? false}
                    onchange={() => toggle(row)}
                  />
                </td>
                <td class="px-3 py-2 align-top font-medium {row.installed ? 'opacity-60' : 'text-(--fg-1)'}">
                  {row.title}
                </td>
                <td class="px-3 py-2 align-top text-(--fg-2)">{row.version}</td>
                <td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)" title={row.filename}>
                  {row.filename}
                </td>
                <td class="px-3 py-2 align-top text-[11px] {row.required_by.length ? 'text-(--accent-1)' : 'text-(--fg-2)'}">
                  {note(row)}
                </td>
                <td class="px-3 py-2 text-right align-top text-(--fg-2)">{fmtSize(row.size)}</td>
              </tr>
            {:else}
              <tr>
                <td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>

    <!-- footer -->
    <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3">
      <span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)" title={downloadError}>
        {#if downloadError}
          <span class="text-rose-400">{downloadError}</span>
        {:else if downloading}
          Downloading {checkedCount()} file{checkedCount() === 1 ? '' : 's'}…
        {:else if rows}
          {checkedCount()} of {rows.length} rows will download
        {/if}
      </span>
      <div class="flex items-center gap-2">
        <button
          class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40"
          disabled={downloading}
          onclick={() => onclose?.()}
        >
          Back
        </button>
        <button
          class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
          disabled={downloading || !rows || checkedCount() === 0}
          title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"
          onclick={confirmDownload}
        >
          {downloading ? 'Downloading…' : 'Confirm & Download'}
        </button>
      </div>
    </div>
  </div>
</div>
