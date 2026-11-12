<script>
  // Global .mrpack drop target: shows the pack's identity (name, summary,
  // target version, loader, file counts) and installs it into a new managed
  // instance named by the input. The parent owns grid refresh + selection.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';

  let { path, onclose, oninstalled } = $props();

  let info = $state(null);
  let inspectError = $state('');
  let name = $state('');
  let busy = $state(false);
  let error = $state('');

  function fmtSize(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${bytes} B`;
  }

  function loaderLabel() {
    if (!info || !info.loader) return 'Vanilla';
    return info.loader[0].toUpperCase() + info.loader.slice(1) + (info.loader_version ? ` ${info.loader_version}` : ' (latest stable)');
  }

  onMount(async () => {
    const closer = pushOverlay(() => onclose?.());
    try {
      info = await window.__TAURI__.core.invoke('inspect_modpack', { pathOrUrl: path });
      name = info.name;
    } catch (e) {
      inspectError = String(e);
    }
    return () => popOverlay(closer);
  });

  async function install() {
    if (busy) return;
    busy = true;
    error = '';
    try {
      const id = await window.__TAURI__.core.invoke('install_mrpack', {
        pathOrUrl: path,
        instanceName: name.trim(),
      });
      oninstalled?.(id);
    } catch (e) {
      error = String(e);
    } finally {
      busy = false;
    }
  }
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
>
  <div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
    <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
      <h3 class="text-sm font-semibold">Install Modpack</h3>
      <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => onclose?.()}>✕</button>
    </div>

    {#if inspectError}
      <div class="p-4">
        <div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400">
          {inspectError}
        </div>
        <p class="mt-2 break-all text-[11px] text-(--text-muted)" title={path}>{path}</p>
      </div>
    {:else if !info}
      <div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>
    {:else}
      <div class="p-4">
        <div class="rounded border border-(--border) bg-(--bg-subtle) p-3">
          <div class="text-[13px] font-semibold" title={info.name}>{info.name}</div>
          {#if info.summary}
            <p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)">{info.summary}</p>
          {/if}
          <div class="mt-2 flex flex-wrap gap-1.5">
            <span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)">
              MC {info.game_version || '?'}
            </span>
            <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)">
              {loaderLabel()}
            </span>
            <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="{info.download_count} downloaded, {info.override_count} overrides extracted">
              {info.file_count} files
            </span>
            <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)">
              {fmtSize(info.archive_size)}
            </span>
          </div>
        </div>

        <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label>
        <input
          id="mrpack-name"
          class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
          placeholder="Instance name"
          bind:value={name}
        />

        {#if error}
          <p class="mt-3 text-[12px] text-red-400">{error}</p>
        {/if}
      </div>

      <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3">
        <button
          class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
          onclick={() => onclose?.()}
        >
          Cancel
        </button>
        <button
          class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={busy || !name.trim()}
          title="Stages the pack's downloads and overrides into a new instance"
          onclick={install}
        >
          {busy ? 'Installing…' : 'Install Modpack'}
        </button>
      </div>
    {/if}
  </div>
</div>
