<script>
  // The Servers & P2P dashboard: server cards with status pills, the full
  // control surface (start/stop/kill/folder/properties), Minekube Connect
  // status with the share-address copy button and the live stdin/stdout
  // console for the selected server.
  import { onMount } from 'svelte';
  import NewServerModal from './NewServerModal.svelte';
  import { toast, confirmAlert } from './alerts.svelte.js';

  let servers = $state([]);
  let error = $state('');
  let loading = $state(true);
  let selectedId = $state(null);
  let showNew = $state(false);
  let busy = $state('');
  let logs = $state({}); // id -> [line]
  let connectMap = $state({}); // id -> { connect, endpoint }
  let propsText = $state('');
  let propsOpen = $state(false);
  let consoleInput = $state('');
  let consoleBox = $state(null);

  const MAX_LOGS = 2000;

  function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  async function refresh() {
    error = '';
    try {
      servers = await api('list_servers');
      if (selectedId && !servers.some((s) => s.id === selectedId)) selectedId = null;
      // refresh cached connect statuses
      for (const s of servers) {
        try {
          const [connect, endpoint] = await api('get_connect_status', { id: s.id });
          connectMap = { ...connectMap, [s.id]: { connect, endpoint } };
        } catch {}
      }
    } catch (e) {
      error = String(e);
    } finally {
      loading = false;
    }
  }

  function pushLog(id, line) {
    const next = { ...logs };
    const list = [...(next[id] ?? []), line];
    if (list.length > MAX_LOGS) list.splice(0, list.length - MAX_LOGS);
    next[id] = list;
    logs = next;
    queueMicrotask(() => consoleBox?.scrollTo({ top: consoleBox.scrollHeight }));
  }

  const selected = $derived(servers.find((s) => s.id === selectedId) ?? null);
  const selectedLogs = $derived(logs[selectedId] ?? []);

  async function selectServer(id) {
    selectedId = id;
    propsOpen = false;
    try {
      const [connect, endpoint] = await api('get_connect_status', { id });
      connectMap = { ...connectMap, [id]: { connect, endpoint } };
    } catch {}
  }

  async function act(name, id) {
    if (busy) return;
    busy = name;
    try {
      await api(name, { id });
      await refresh();
    } catch (e) {
      toast(String(e), 'error', { title: 'Server action failed' });
    } finally {
      busy = '';
    }
  }

  async function openFolder(id) {
    try {
      await api('open_server_folder', { id });
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function editProperties() {
    if (!selected) return;
    try {
      const lines = await api('get_server_properties', { id: selected.id });
      propsText = lines.join('\n');
      propsOpen = true;
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function saveProperties() {
    if (!selected) return;
    // only key=value lines reach the backend; comments stay untouched
    const properties = {};
    for (const line of propsText.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq > 0) properties[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
    }
    busy = 'props';
    try {
      await api('update_server_properties', { id: selected.id, properties });
      toast('Properties saved — restart the server to apply.', 'success');
      propsOpen = false;
    } catch (e) {
      toast(String(e), 'error', { title: 'Save failed' });
    } finally {
      busy = '';
    }
  }

  async function installAuthme() {
    if (!selected) return;
    busy = 'authme';
    try {
      await api('install_authme', { id: selected.id });
      toast('AuthMeReloaded installed into plugins/.', 'success');
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      busy = '';
    }
  }

  async function installConnect() {
    if (!selected) return;
    busy = 'connect';
    try {
      await api('install_connect', { id: selected.id });
      toast('Minekube Connect plugin installed into plugins/.', 'success');
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      busy = '';
    }
  }

  async function copyShare() {
    const endpoint = connectMap[selectedId]?.endpoint;
    if (!endpoint) return;
    try {
      await navigator.clipboard.writeText(endpoint);
      toast('Share address copied — send it to your friends!', 'success');
    } catch {
      toast('Copy failed — select the address manually.', 'warning');
    }
  }

  async function sendCommand(e) {
    e?.preventDefault();
    if (!selected || !consoleInput.trim()) return;
    const cmd = consoleInput;
    consoleInput = '';
    try {
      await api('send_server_command', { id: selected.id, command: cmd });
    } catch (err) {
      toast(String(err), 'error');
    }
  }

  async function deleteServer(id) {
    const ok = await confirmAlert({
      title: 'Delete server?',
      message: 'This removes the server directory and every file inside it.',
    });
    if (!ok) return;
    busy = 'delete';
    try {
      await api('delete_server', { id });
      if (selectedId === id) selectedId = null;
      await refresh();
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      busy = '';
    }
  }

  const STATE_STYLES = {
    Running: 'bg-green-500/15 text-green-500',
    Starting: 'bg-amber-500/15 text-amber-500',
    Stopping: 'bg-amber-500/15 text-amber-500',
    Stopped: 'bg-(--bg-3) text-(--text-muted)',
  };

  function pill(state) {
    return `rounded-full px-2 py-0.5 text-[10px] font-medium ${STATE_STYLES[state] ?? STATE_STYLES.Stopped}`;
  }

  onMount(() => {
    const unlisteners = [];
    (async () => {
      try {
        unlisteners.push(await window.__TAURI__.event.listen('server-log', (e) => pushLog(e.payload.id, e.payload.line)));
        unlisteners.push(await window.__TAURI__.event.listen('server-state', (e) => refresh()));
        unlisteners.push(await window.__TAURI__.event.listen('server-connect', (e) => refresh()));
      } catch {}
      await refresh();
    })();
    return () => unlisteners.forEach((off) => off());
  });
</script>

<div class="flex min-h-0 flex-1 flex-col">
  <div class="flex items-center justify-between">
    <h2 class="text-lg font-semibold">Servers &amp; P2P</h2>
    <button
      class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
      onclick={() => (showNew = true)}
    >
      + New Server
    </button>
  </div>

  {#if loading}
    <p class="mt-6 text-[13px] text-(--text-muted)">Scanning servers…</p>
  {:else if error}
    <p class="mt-6 text-[13px] text-rose-400">{error}</p>
  {:else if servers.length === 0}
    <div class="mt-8 rounded-lg border border-(--border) bg-(--bg-subtle) p-6 text-center">
      <p class="text-[13px] font-medium">No local servers yet</p>
      <p class="mt-1 text-[12px] text-(--text-muted)">
        Create one with the wizard — Vanilla, Paper, Purpur, Fabric or the Rust-native PumpkinMC.
      </p>
    </div>
  {:else}
    <!-- server cards -->
    <div class="mt-4 grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
      {#each servers as s (s.id)}
        <div
          class="rounded-lg border p-3 transition-colors {selectedId === s.id
            ? 'border-(--accent) bg-(--brand-tint)'
            : 'border-(--border) bg-(--bg-subtle) hover:border-(--accent)'}"
        >
          <button class="block w-full text-left" onclick={() => selectServer(s.id)}>
            <div class="flex items-center justify-between gap-2">
              <span class="truncate text-[13px] font-medium">{s.id}</span>
              <span class={pill(s.state)}>{s.state}</span>
            </div>
            <div class="mt-1.5 flex items-center gap-2 text-[11px] text-(--text-muted)">
              <span class="rounded bg-(--bg-3) px-1.5 py-0.5 font-medium text-(--text-main)">
                {s.software === 'pumpkin' ? 'PumpkinMC Rust' : s.software === 'steel' ? 'SteelMC Rust' : s.software} {s.version}
              </span>
              <span>:{s.port}</span>
              {#if s.min_memory_mb || s.max_memory_mb}
                <span>{s.min_memory_mb || 0}-{s.max_memory_mb || 0}M</span>
              {/if}
            </div>
          </button>

          {#if selectedId === s.id}
            <!-- connect status box -->
            {#if s.connect}
              <div class="mt-3 rounded border border-(--border) bg-(--bg-2) p-2.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[11px] font-medium">Minekube Connect</span>
                  <span class="text-[10px] {connectMap[s.id]?.endpoint ? 'text-green-500' : 'text-(--text-muted)'}">
                    {connectMap[s.id]?.endpoint ? 'Tunnel active' : s.state === 'Running' ? 'Waiting for endpoint…' : 'Offline'}
                  </span>
                </div>
                {#if connectMap[s.id]?.endpoint}
                  <div class="mt-2 flex items-center gap-2">
                    <code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11px]">
                      {connectMap[s.id].endpoint}
                    </code>
                    <button
                      class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
                      onclick={copyShare}
                    >
                      Copy Share Link
                    </button>
                  </div>
                {:else}
                  <button
                    class="mt-2 w-full rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40"
                    disabled={busy !== '' || s.state !== 'Stopped'}
                    onclick={() => act('start_server', s.id)}
                  >
                    Start to activate the tunnel
                  </button>
                {/if}
                {#if s.state === 'Stopped'}
                  <button
                    class="mt-1.5 w-full rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40"
                    disabled={busy !== ''}
                    onclick={installConnect}
                  >
                    (Re)install Connect plugin
                  </button>
                {/if}
              </div>
            {/if}

            <!-- offline-mode guard -->
            {#if s.offline_mode}
              <div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5">
                <p class="text-[11px] text-amber-500">
                  Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.
                </p>
                {#if s.software === 'paper' || s.software === 'purpur' || s.software === 'vanilla'}
                  <button
                    class="mt-2 w-full rounded border border-amber-500/50 px-2 py-1 text-[11px] font-medium text-amber-500 hover:bg-amber-500/10 disabled:opacity-40"
                    disabled={busy !== ''}
                    onclick={installAuthme}
                  >
                    Install AuthMeReloaded (Recommended for Offline Servers)
                  </button>
                {/if}
              </div>
            {/if}

            <!-- controls -->
            <div class="mt-3 grid grid-cols-3 gap-1.5">
              {#if s.state === 'Running' || s.state === 'Starting'}
                <button
                  class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40"
                  disabled={busy !== ''}
                  onclick={() => act('stop_server', s.id)}
                >
                  Graceful Stop
                </button>
                <button
                  class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                  disabled={busy !== ''}
                  onclick={() => act('kill_server', s.id)}
                >
                  Kill
                </button>
              {:else}
                <button
                  class="rounded border border-(--accent) px-2 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"
                  disabled={busy !== ''}
                  onclick={() => act('start_server', s.id)}
                >
                  Start
                </button>
                <button
                  class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40"
                  disabled={busy !== ''}
                  onclick={() => act('restart_server', s.id)}
                >
                  Restart
                </button>
              {/if}
              <button
                class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
                onclick={() => openFolder(s.id)}
              >
                Open Folder
              </button>
              <button
                class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
                onclick={editProperties}
              >
                Edit Properties
              </button>
              <button
                class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                disabled={busy !== ''}
                onclick={() => deleteServer(s.id)}
              >
                Delete
              </button>
            </div>

            <!-- interactive console -->
            <div class="mt-3 flex h-44 flex-col overflow-hidden rounded border border-(--border) bg-(--bg-2)">
              <div bind:this={consoleBox} class="min-h-0 flex-1 overflow-y-auto p-2 font-mono text-[10.5px] leading-relaxed">
                {#if selectedLogs.length === 0}
                  <span class="text-(--text-muted)">No output yet — start the server.</span>
                {:else}
                  {#each selectedLogs as line, i (i)}
                    <div class="whitespace-pre-wrap break-all">{line}</div>
                  {/each}
                {/if}
              </div>
              <form class="flex items-center gap-1.5 border-t border-(--border) px-2 py-1.5" onsubmit={sendCommand}>
                <span class="text-[11px] text-(--accent)">&gt;</span>
                <input
                  class="h-6 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-3) px-2 font-mono text-[11px] outline-none focus:border-(--accent)"
                  placeholder={s.state === 'Running' ? 'console command…' : 'start the server first'}
                  bind:value={consoleInput}
                  disabled={s.state !== 'Running'}
                />
              </form>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<!-- properties editor -->
{#if propsOpen && selected}
  <div
    class="fixed inset-0 z-[70] flex items-center justify-center"
    style="background: var(--scrim)"
    onclick={(e) => {
      if (e.target === e.currentTarget) propsOpen = false;
    }}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Edit server properties"
      class="flex h-[520px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) p-4 shadow-2xl animate-[fade-in_120ms_ease-out]"
    >
      <h3 class="text-[14px] font-semibold">server.properties — {selected.id}</h3>
      <textarea
        class="mt-3 min-h-0 flex-1 resize-none rounded border border-(--border) bg-(--bg-3) p-2.5 font-mono text-[11.5px] leading-relaxed outline-none focus:border-(--accent)"
        bind:value={propsText}
        spellcheck="false"
      ></textarea>
      <div class="mt-3 flex justify-end gap-2">
        <button
          class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
          onclick={() => (propsOpen = false)}
        >
          Cancel
        </button>
        <button
          class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={busy !== ''}
          onclick={saveProperties}
        >
          Save
        </button>
      </div>
    </div>
  </div>
{/if}

{#if showNew}
  <NewServerModal onclose={() => (showNew = false)} oncreated={refresh} />
{/if}
