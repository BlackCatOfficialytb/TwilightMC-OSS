<script>
  import { tauriInvoke, tauriListen } from './tauri';
  // The Servers & P2P dashboard: an overview of server cards with status
  // pills, and a full-page control panel per server — live console with
  // sparklines, file manager, properties editor, startup config, backups and
  // the Minekube Connect network surface. Telemetry polls every 2s inside
  // the console tab.
  import { onMount } from 'svelte';
  import NewServerModal from './NewServerModal.svelte';
  import ServerConsoleTab from './ServerConsoleTab.svelte';
  import ServerFilesTab from './ServerFilesTab.svelte';
  import ServerPropertiesTab from './ServerPropertiesTab.svelte';
  import ServerStartupTab from './ServerStartupTab.svelte';
  import ServerBackupsTab from './ServerBackupsTab.svelte';
  import ServerNetworkTab from './ServerNetworkTab.svelte';
  import { toast, confirmAlert } from './alerts.svelte.js';
  import ProgressBar from './ProgressBar.svelte';
  import { t } from './i18n.svelte.ts';

  let servers = $state([]);
  let error = $state('');
  let loading = $state(true);
  let selectedId = $state(null);
  let managing = $state(false);
  let activeTab = $state('console');
  let showNew = $state(false);
  let downloadProgress = $state(null);
  let busy = $state('');
  let logs = $state({}); // id -> [line]
  let connectMap = $state({}); // id -> { connect, endpoint }

  const MAX_LOGS = 2000;

  const TABS = [
    { id: 'console', key: 'server-tab-console' },
    { id: 'files', key: 'server-tab-files' },
    { id: 'properties', key: 'server-tab-properties' },
    { id: 'startup', key: 'server-tab-startup' },
    { id: 'backups', key: 'server-tab-backups' },
    { id: 'network', key: 'server-tab-network' },
  ];

  function api(cmd, args) {
    return tauriInvoke(cmd, args);
  }

  async function refresh() {
    error = '';
    try {
      servers = await api('list_servers');
      if (selectedId && !servers.some((s) => s.id === selectedId)) {
        selectedId = null;
        managing = false;
      }
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
  }

  const selected = $derived(servers.find((s) => s.id === selectedId) ?? null);
  const selectedLogs = $derived(logs[selectedId] ?? []);
  const selectedConnect = $derived(connectMap[selectedId] ?? null);

  async function manage(s) {
    selectedId = s.id;
    activeTab = 'console';
    managing = true;
    try {
      const [connect, endpoint] = await api('get_connect_status', { id: s.id });
      connectMap = { ...connectMap, [s.id]: { connect, endpoint } };
    } catch {}
  }

  function closePanel() {
    managing = false;
    selectedId = null;
  }

  async function act(name, id) {
    if (busy) return;
    busy = name;
    try {
      await api(name, { id });
      await refresh();
    } catch (e) {
      toast(String(e), 'error', { title: t('server-action-failed') });
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

  async function deleteServer(id) {
    const ok = await confirmAlert({
      title: t('server-delete-title'),
      message: t('server-delete-message'),
    });
    if (!ok) return;
    busy = 'delete';
    try {
      await api('delete_server', { id });
      if (selectedId === id) closePanel();
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

  function softwareLabel(software) {
    if (software === 'pumpkin') return 'PumpkinMC Rust';
    if (software === 'steel') return 'SteelMC Rust';
    return software;
  }

  onMount(() => {
    const unlisteners = [];
    (async () => {
      try {
        unlisteners.push(await tauriListen('server-log', (e) => pushLog(e.payload.id, e.payload.line)));
        unlisteners.push(await tauriListen('server-state', () => refresh()));
        unlisteners.push(await tauriListen('server-connect', () => refresh()));
        unlisteners.push(await tauriListen('download-progress', (e) => {
          const p = e.payload;
          if (typeof p?.task_id === 'string' && (p.task_id.startsWith('server-') || p.task_id.startsWith('horizon-'))) {
            downloadProgress = p;
            if (p.stage === 'done' || p.percent === 100) setTimeout(() => { if (downloadProgress?.task_id === p.task_id) downloadProgress = null; }, 1200);
          }
        }));
      } catch {}
      await refresh();
    })();
    return () => unlisteners.forEach((off) => off());
  });
</script>

{#if managing && selected}
  <!-- ===== full-page control panel ===== -->
  <div class="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
    <!-- header bar -->
    <div class="flex shrink-0 items-center gap-2.5 border-b border-(--border) pb-3">
      <button
        class="rounded border border-(--border) px-2 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
        onclick={closePanel}
        title={t('common-back')}
      >
        ←
      </button>
      <div class="min-w-0">
        <h2 class="truncate text-[15px] font-semibold">{selected.id}</h2>
        <div class="mt-0.5 flex items-center gap-2 text-[11px] text-(--text-muted)">
          <span class={pill(selected.state)}>{t(`server-state-${selected.state.toLowerCase()}`)}</span>
          {#if selected.orphaned}
            <span class="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-medium text-rose-500">{t('server-orphaned-badge')}</span>
          {/if}
          <span>{softwareLabel(selected.software)} {selected.version}</span>
          <span>:{selected.port}</span>
        </div>
      </div>
      <div class="ml-auto flex items-center gap-1.5">
        {#if selected.orphaned}
          <button
            class="rounded border border-rose-500/40 px-2.5 py-1.5 text-[11.5px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
            disabled={busy !== ''}
            onclick={() => act('kill_orphaned_server', selected.id)}
          >
            {t('server-kill-orphaned')}
          </button>
        {/if}
        {#if selected.state === 'Running' || selected.state === 'Starting'}
          <button
            class="rounded border border-(--border) px-2.5 py-1.5 text-[11.5px] hover:border-(--accent) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={() => act('stop_server', selected.id)}
          >
            {t('server-graceful-stop')}
          </button>
          <button
            class="rounded border border-rose-500/40 px-2.5 py-1.5 text-[11.5px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
            disabled={busy !== ''}
            onclick={() => act('kill_server', selected.id)}
          >
            {t('action-kill')}
          </button>
        {:else}
          <button
            class="rounded border border-(--accent) px-2.5 py-1.5 text-[11.5px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={() => act('start_server', selected.id)}
          >
            {t('server-start')}
          </button>
          <button
            class="rounded border border-(--border) px-2.5 py-1.5 text-[11.5px] hover:border-(--accent) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={() => act('restart_server', selected.id)}
          >
            {t('server-restart')}
          </button>
        {/if}
        <button
          class="rounded border border-(--border) px-2.5 py-1.5 text-[11.5px] hover:border-(--accent)"
          onclick={() => openFolder(selected.id)}
        >
          {t('server-open-folder')}
        </button>
        <button
          class="rounded border border-rose-500/40 px-2.5 py-1.5 text-[11.5px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
          disabled={busy !== ''}
          onclick={() => deleteServer(selected.id)}
        >
          {t('server-delete')}
        </button>
      </div>
    </div>

    <!-- rail + tab content -->
    <div class="flex min-h-0 flex-1 overflow-hidden pt-3">
      <nav class="flex min-h-0 w-44 shrink-0 flex-col gap-0.5 overflow-y-auto pr-3" aria-label={t('servers-title')}>
        {#each TABS as tab (tab.id)}
          <button
            class="rounded px-2.5 py-2 text-left text-[12.5px] transition-colors {activeTab === tab.id
              ? 'bg-(--brand-tint) font-medium text-(--text-main)'
              : 'text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)'}"
            onclick={() => (activeTab = tab.id)}
          >
            {t(tab.key)}
          </button>
        {/each}
      </nav>

      <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto border-l border-(--border)">
        {#if activeTab === 'console'}
          <ServerConsoleTab server={selected} logs={selectedLogs} connect={selectedConnect} />
        {:else if activeTab === 'files'}
          <ServerFilesTab server={selected} />
        {:else if activeTab === 'properties'}
          <ServerPropertiesTab server={selected} />
        {:else if activeTab === 'startup'}
          <ServerStartupTab server={selected} />
        {:else if activeTab === 'backups'}
          <ServerBackupsTab server={selected} />
        {:else if activeTab === 'network'}
          <ServerNetworkTab server={selected} connect={selectedConnect} {busy} />
        {/if}
      </div>
    </div>
  </div>
{:else}
  <!-- ===== overview ===== -->
  <div class="flex h-full min-h-0 flex-1 flex-col overflow-y-auto">
    <div class="flex shrink-0 items-center justify-between">
      <h2 class="text-lg font-semibold">{t('servers-title')}</h2>
      <button
        class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
        onclick={() => (showNew = true)}
      >
        + {t('servers-new')}
      </button>
    </div>
    {#if downloadProgress}
      <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><ProgressBar label={downloadProgress.label} percent={downloadProgress.percent} indeterminate={downloadProgress.indeterminate} stage={downloadProgress.stage} detail={`${downloadProgress.completed_files ?? 0}/${downloadProgress.total_files ?? 0}`} /></div>
    {/if}

    {#if loading}
      <p class="mt-6 text-[13px] text-(--text-muted)">{t('servers-scanning')}</p>
    {:else if error}
      <p class="mt-6 text-[13px] text-rose-400">{error}</p>
    {:else if servers.length === 0}
      <div class="mt-8 rounded-lg border border-(--border) bg-(--bg-subtle) p-6 text-center">
        <p class="text-[13px] font-medium">{t('servers-empty-title')}</p>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('servers-empty-body')}
        </p>
      </div>
    {:else}
      <!-- server cards -->
      <div class="mt-4 grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
        {#each servers as s (s.id)}
          <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3 transition-colors hover:border-(--accent)">
            <div class="flex items-center justify-between gap-2">
              <span class="truncate text-[13px] font-medium">{s.id}</span>
              <span class={pill(s.state)}>{t(`server-state-${s.state.toLowerCase()}`)}</span>
            </div>
            <div class="mt-1.5 flex items-center gap-2 text-[11px] text-(--text-muted)">
              <span class="rounded bg-(--bg-3) px-1.5 py-0.5 font-medium text-(--text-main)">
                {softwareLabel(s.software)} {s.version}
              </span>
              <span>:{s.port}</span>
              {#if s.min_memory_mb || s.max_memory_mb}
                <span>{s.min_memory_mb || 0}-{s.max_memory_mb || 0}M</span>
              {/if}
            </div>

            {#if s.offline_mode}
              <div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 px-2 py-1.5">
                <p class="text-[10.5px] text-amber-500">{t('server-offline-notice')}</p>
              </div>
            {/if}

            {#if s.orphaned}
              <div class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1.5">
                <p class="text-[10.5px] text-rose-500">{t('server-orphaned-badge')}</p>
              </div>
            {/if}

            <div class="mt-3 grid gap-1.5">
              <button
                class="rounded bg-(--accent) px-2 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
                onclick={() => manage(s)}
              >
                {t('servers-manage')} →
              </button>
              {#if s.orphaned}
                <button
                  class="rounded border border-rose-500/40 px-2 py-1.5 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                  disabled={busy !== ''}
                  onclick={() => act('kill_orphaned_server', s.id)}
                >
                  {t('server-kill-orphaned')}
                </button>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
{/if}

{#if showNew}
  <NewServerModal onclose={() => (showNew = false)} oncreated={refresh} />
{/if}
