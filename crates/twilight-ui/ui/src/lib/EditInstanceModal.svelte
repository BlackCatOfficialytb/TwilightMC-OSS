<script>
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';

  // Prism-style edit-instance sheet: left tab rail, right content pane.
  // The mods tab is fully live (list/toggle/delete/add); the remaining tabs
  // keep their milestone placeholders.
  let { instance, storage = null, onclose, onopenconsole } = $props();

  const tabs = ['components', 'mods', 'screenshots', 'logs'];
  let tab = $state('mods');

  // ---- mods state ----
  let mods = $state([]);
  let modsBusy = $state(false);
  let modsMsg = $state('');
  let modsQuery = $state('');

  function visibleMods() {
    const q = modsQuery.trim().toLowerCase();
    if (!q) return mods;
    return mods.filter(
      (m) => m.display_name.toLowerCase().includes(q) || m.filename.toLowerCase().includes(q),
    );
  }

  function fmtSize(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${bytes} B`;
  }

  async function listMods() {
    modsBusy = true;
    try {
      mods = await window.__TAURI__.core.invoke('list_instance_mods', {
        instanceId: instance.id,
      });
      modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
  }

  async function toggleMod(mod) {
    modsBusy = true;
    try {
      await window.__TAURI__.core.invoke('toggle_mod', {
        instanceId: instance.id,
        filename: mod.filename,
        enable: !mod.is_enabled,
      });
      if (modsMsg) modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
    await listMods();
  }

  async function deleteMod(mod) {
    modsBusy = true;
    try {
      await window.__TAURI__.core.invoke('delete_mod', {
        instanceId: instance.id,
        filename: mod.filename,
      });
      modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
    await listMods();
  }

  // Native OS picker (tauri-plugin-dialog); choices go straight into the mods dir.
  async function addMod() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      modsMsg = 'File picker unavailable in this build.';
      return;
    }
    let picked;
    try {
      picked = await open({
        multiple: true,
        title: 'Add mods',
        filters: [{ name: 'Mods', extensions: ['jar'] }],
      });
    } catch (e) {
      modsMsg = String(e);
      return;
    }
    const paths = picked ? [].concat(picked) : [];
    if (!paths.length) return;
    modsBusy = true;
    try {
      for (const path of paths) {
        await window.__TAURI__.core.invoke('import_mod', { instanceId: instance.id, jarPath: path });
      }
      modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
    await listMods();
  }

  function openModsFolder() {
    if (!storage) return;
    window.__TAURI__.core
      .invoke('open_path', {
        path: [storage.instances_dir.replace(/\\/g, '/'), instance.id, 'minecraft', 'mods'].join(
          '/',
        ),
      })
      .catch((e) => (modsMsg = String(e)));
  }

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    listMods();
    return () => popOverlay(closer);
  });
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
>
  <div class="flex h-[480px] w-[640px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
    <div class="flex w-44 shrink-0 flex-col gap-0.5 border-r border-(--border) bg-(--bg-subtle) p-2">
      <h3 class="mt-1 px-2 text-[13px] font-semibold">{instance.name}</h3>
      <p class="px-2 text-[11px] text-(--text-muted)">{instance.minecraft_version} · {instance.loader_type}</p>
      <div class="mt-3 border-t border-(--border)"></div>
      {#each tabs as t (t)}
        <button
          class="rounded px-2 py-1.5 text-left text-[12px] {tab === t
            ? 'bg-(--accent)/15 font-medium text-(--accent)'
            : 'text-(--text-muted) hover:text-(--text-main)'}"
          onclick={() => (tab = t)}
        >
          {t === 'components'
            ? 'Version Components'
            : t === 'screenshots'
              ? 'Screenshots'
              : t[0].toUpperCase() + t.slice(1)}
        </button>
      {/each}
      <button class="mt-auto rounded px-2 py-1.5 text-left text-[12px] text-(--text-muted) hover:text-(--text-main)" onclick={() => onclose?.()}>
        Close
      </button>
    </div>

    <div class="min-w-0 flex-1 overflow-y-auto p-4">
      {#if tab === 'components'}
        <div class="rounded border border-(--border) bg-(--bg-subtle) p-3 text-[12px]">
          <div class="font-medium">Minecraft {instance.minecraft_version}</div>
          <div class="mt-1 text-(--text-muted)">Loader: {instance.loader_type}</div>
          <div class="mt-1 text-(--text-muted)">
            Last played: {instance.last_played ? new Date(instance.last_played * 1000).toLocaleDateString() : 'never'}
          </div>
          <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p>
        </div>
      {:else if tab === 'mods'}
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Mods ({mods.length})</span>
          <button class="text-[11px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40" disabled={modsBusy} onclick={listMods}>
            Refresh
          </button>
        </div>
        <input
          class="mt-2 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
          placeholder="Filter installed mods…"
          bind:value={modsQuery}
        />
        <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each visibleMods() as mod (mod.filename)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" class:opacity-50={!mod.is_enabled}>{mod.display_name}</div>
                  <div class="truncate text-[10px] text-(--text-muted)">{mod.filename} · {fmtSize(mod.file_size)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 {mod.is_enabled
                      ? 'justify-end bg-(--accent)'
                      : 'justify-start bg-(--bg-canvas)'}"
                    title={mod.is_enabled ? 'Disable' : 'Enable'}
                    disabled={modsBusy}
                    onclick={() => toggleMod(mod)}
                  >
                    <span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span>
                  </button>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                    title="Delete {mod.display_name}"
                    disabled={modsBusy}
                    onclick={() => deleteMod(mod)}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if modsBusy}
                    Loading mods…
                  {:else}
                    No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if modsMsg}
          <p class="mt-2 text-[12px] text-red-400">{modsMsg}</p>
        {/if}
        <div class="mt-3 flex items-center gap-2">
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={modsBusy}
            onclick={addMod}
          >
            ＋ Add Mod
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={!storage}
            title={storage ? 'Opens the instance mods folder' : 'Storage unknown'}
            onclick={openModsFolder}
          >
            📂 Open Mods Folder
          </button>
        </div>
      {:else if tab === 'screenshots'}
        <div class="rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)">
          Screenshot browser (thumbnail grid over <span class="text-(--text-main)">minecraft/screenshots</span>) lands in a later milestone.
        </div>
      {:else}
        <div class="flex h-full max-h-80 flex-col rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)">
          <p>Live game output renders in the console drawer with level coloring.</p>
          <button
            class="mt-3 w-fit rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
            onclick={() => onopenconsole?.()}
          >
            Open console
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
