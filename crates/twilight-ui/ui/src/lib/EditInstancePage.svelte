<script>
  // Full-page edit-instance view (SettingsPage grammar): left navigation
  // rail over five sections and a spacious content column. The mods tab is
  // fully live (list/toggle/delete/add + Modrinth browser); screenshots and
  // logs browse the instance's game folders through the new listing
  // commands; components and settings keep their milestone placeholders.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import ModrinthBrowserModal from './ModrinthBrowserModal.svelte';

  let { instance, storage = null, onback, onopenconsole } = $props();

  const sections = [
    { id: 'components', label: 'Version Components', icon: '🧱' },
    { id: 'mods', label: 'Mods', icon: '🧩' },
    { id: 'screenshots', label: 'Screenshots', icon: '🖼' },
    { id: 'logs', label: 'Logs', icon: '📜' },
    { id: 'settings', label: 'Settings', icon: '⚙' },
  ];
  let section = $state('mods');

  // ---- mods state ----
  let mods = $state([]);
  let modsBusy = $state(false);
  let modsMsg = $state('');
  let modsQuery = $state('');
  let browserOpen = $state(false);

  // ---- screenshots / logs state ----
  let screenshots = $state([]);
  let logs = $state([]);
  let filesBusy = $state(false);
  let filesMsg = $state('');

  // forward-slash joined game paths (open_path + asset URLs both want them)
  function gamePath(...parts) {
    const root = storage ? storage.instances_dir.replace(/\\/g, '/') : '';
    return [root, instance.id, 'minecraft', ...parts].filter(Boolean).join('/');
  }

  // tauri asset-protocol URL for a full filesystem path (thumbnails)
  function assetSrc(path) {
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return convert ? convert(path) : path;
  }

  function fmtSize(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${bytes} B`;
  }

  function fmtTime(unixSeconds) {
    if (!unixSeconds) return '';
    return new Date(unixSeconds * 1000).toLocaleString();
  }

  function visibleMods() {
    const q = modsQuery.trim().toLowerCase();
    if (!q) return mods;
    return mods.filter(
      (m) => m.display_name.toLowerCase().includes(q) || m.filename.toLowerCase().includes(q),
    );
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

  async function listFiles(which) {
    filesBusy = true;
    try {
      const rows = await window.__TAURI__.core.invoke(which, { instanceId: instance.id });
      if (which === 'list_screenshots') screenshots = rows;
      else logs = rows;
      filesMsg = '';
    } catch (e) {
      filesMsg = String(e);
    } finally {
      filesBusy = false;
    }
  }

  function openFolder(path) {
    window.__TAURI__.core.invoke('open_path', { path }).catch((e) => (filesMsg = String(e)));
  }

  function openScreenshot(name) {
    openFolder(gamePath('screenshots', name));
  }

  onMount(() => {
    listMods();
    listFiles('list_screenshots');
    listFiles('list_logs');
  });
</script>

<div class="flex h-full">
  <!-- left navigation rail -->
  <nav
    class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3"
    aria-label="Instance sections"
  >
    <button
      class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
      title="Back to the instance library"
      onclick={onback}
    >
      <span class="w-5 shrink-0 text-center text-[15px]">←</span>
      <span class="truncate">Back to Instances</span>
    </button>
    <div class="mb-3 border-b border-(--border) px-2.5 pb-3">
      <div class="truncate text-[13px] font-semibold" title={instance.name}>{instance.name}</div>
      <div class="mt-0.5 truncate text-[11px] text-(--text-muted)">
        {instance.minecraft_version} · {instance.loader_type}
      </div>
    </div>
    <div class="flex flex-col gap-0.5">
      {#each sections as s (s.id)}
        <button
          class="flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] {section === s.id
            ? 'bg-(--brand-tint) font-medium text-(--accent)'
            : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
          aria-current={section === s.id ? 'true' : undefined}
          onclick={() => (section = s.id)}
        >
          <span class="w-5 shrink-0 text-center text-[15px]">{s.icon}</span>
          <span class="truncate">{s.label}</span>
        </button>
      {/each}
    </div>
  </nav>

  <!-- content column -->
  <div class="min-w-0 flex-1 overflow-y-auto">
    <div class="mx-auto max-w-2xl p-8">
      {#if section === 'components'}
        <h2 class="text-[16px] font-semibold">Version Components</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          The version stack this instance launches with.
        </p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]">
          <div class="font-medium">Minecraft {instance.minecraft_version}</div>
          <div class="mt-1 text-(--text-muted)">Loader: {instance.loader_type}</div>
          <div class="mt-1 text-(--text-muted)">
            Last played: {instance.last_played ? new Date(instance.last_played * 1000).toLocaleString() : 'never'}
          </div>
          <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p>
        </div>
      {:else if section === 'mods'}
        <h2 class="text-[16px] font-semibold">Mods</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.
        </p>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Installed ({mods.length})</span>
          <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40" disabled={modsBusy} onclick={listMods}>
            ↻ Refresh
          </button>
        </div>
        <input
          class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
          placeholder="Filter installed mods…"
          bind:value={modsQuery}
        />
        <button
          class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
          title="Browse and install mods straight from Modrinth"
          onclick={() => (browserOpen = true)}
        >
          ⤓ Get More Mods
        </button>
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
          <p class="mt-2 text-[12px] text-rose-400">{modsMsg}</p>
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
            onclick={() => openFolder(gamePath('mods'))}
          >
            📂 Open Mods Folder
          </button>
        </div>
      {:else if section === 'screenshots'}
        <h2 class="text-[16px] font-semibold">Screenshots</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.
        </p>

        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {#each screenshots as shot (shot.name)}
            <!-- card is a div: a real button would nest nothing here, keep it simple -->
            <div
              class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)"
              role="button"
              tabindex="0"
              title="{shot.name} · {fmtSize(shot.size)} · {fmtTime(shot.modified)}"
              onclick={() => openScreenshot(shot.name)}
              onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openScreenshot(shot.name);
                }
              }}
            >
              <img
                src={assetSrc(gamePath('screenshots', shot.name))}
                alt={shot.name}
                loading="lazy"
                class="aspect-video w-full object-cover"
              />
              <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)" title={shot.name}>
                {shot.name}
              </div>
            </div>
          {:else}
            <p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)">
              {#if filesBusy}
                Loading screenshots…
              {:else}
                No screenshots yet — press F2 in game to capture one.
              {/if}
            </p>
          {/each}
        </div>
        {#if filesMsg}
          <p class="mt-2 text-[12px] text-rose-400">{filesMsg}</p>
        {/if}
        <button
          class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
          title="Opens the screenshots folder"
          onclick={() => openFolder(gamePath('screenshots'))}
        >
          📂 Open Screenshots Folder
        </button>
      {:else if section === 'logs'}
        <h2 class="text-[16px] font-semibold">Logs</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.
        </p>

        <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each logs as log (log.name)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" title={log.name}>{log.name}</div>
                  <div class="text-[10px] text-(--text-muted)">{fmtSize(log.size)} · {fmtTime(log.modified)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
                    title="Opens this log file"
                    onclick={() => openFolder(gamePath('logs', log.name))}
                  >
                    Open
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if filesBusy}
                    Loading logs…
                  {:else}
                    No log files yet — logs appear after the first launch.
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if filesMsg}
          <p class="mt-2 text-[12px] text-rose-400">{filesMsg}</p>
        {/if}
        <div class="mt-3 flex items-center gap-2">
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
            onclick={() => onopenconsole?.()}
          >
            ▤ Open console
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title="Opens the logs folder"
            onclick={() => openFolder(gamePath('logs'))}
          >
            📂 Open Logs Folder
          </button>
        </div>
      {:else}
        <h2 class="text-[16px] font-semibold">Instance Settings</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]">
          <div class="font-medium">{instance.name}</div>
          <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)" title={gamePath()}>
            <div class="break-all">Game folder: {gamePath()}</div>
            <div class="break-all">Mods folder: {gamePath('mods')}</div>
          </div>
          <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>
        </div>
      {/if}
    </div>
  </div>

  {#if browserOpen}
    <!-- stacked above the page; Escape pops this one first -->
    <ModrinthBrowserModal
      {instance}
      onclose={() => (browserOpen = false)}
      oninstalled={() => listMods()}
    />
  {/if}
</div>
