<script>
  import { onMount } from 'svelte';
  import InstanceGrid from './lib/InstanceGrid.svelte';
  import EditInstanceModal from './lib/EditInstanceModal.svelte';
  import MrpackInstallModal from './lib/MrpackInstallModal.svelte';
  import NewInstanceModal from './lib/NewInstanceModal.svelte';
  import InstanceContextPanel from './lib/InstanceContextPanel.svelte';
  import SettingsPage from './lib/SettingsPage.svelte';
  import { topOverlay } from './lib/overlays.js';
  import { builtinAccent, isDarkTheme, loadSavedAccent, normalizeThemeId, applyTheme } from './lib/theme';

  let version = $state('…');
  let active = $state('instances');

  // Theme preset: persisted locally (fast first paint) with legacy
  // "dark"/"light" values mapped; settings.json keeps recording just the
  // light/dark ground so the backend contract stays unchanged.
  let theme = $state(
    normalizeThemeId(localStorage.getItem('twilight-theme')) ??
      (matchMedia('(prefers-color-scheme: light)').matches
        ? 'twilight-light'
        : 'twilight-dark')
  );

  $effect(() => {
    applyTheme(theme); // dark/light ground + preset-* token classes
    localStorage.setItem('twilight-theme', theme);
    window.__TAURI__?.core
      .invoke('set_theme_config', { theme: isDarkTheme(theme) ? 'dark' : 'light' })
      .catch(() => {});
  });

  // Restore the user's accent color pick before first interactive paint.
  loadSavedAccent();

  // No crutch states or animations: a busy desktop reads one crisp status word.
  let status = $state('Ready');

  // ---- sidebar / navigation ----
  let sidebarExpanded = $state(false);

  const nav = [
    { id: 'instances', label: 'Instances', icon: '▦' },
    { id: 'worlds', label: 'Servers & P2P', icon: '⌗' },
    { id: 'downloads', label: 'Downloads', icon: '⤓' },
    { id: 'settings', label: 'Settings', icon: '⚙' },
  ];

  const sections = {
    instances: ['Instances', 'Your library — open the wizard or drop a pack.'],
    worlds: ['Servers & P2P', 'Server and P2P management lands in a later milestone.'],
    downloads: ['Downloads', 'Direct downloads land in a later milestone.'],
  };

  // ---- auth state ----

  let accounts = $state([]);
  let activeAccount = $state(null);
  let modalOpen = $state(false);
  let accountError = $state('');
  let newUsername = $state('');

  // ---- java discovery state ----
  let runtimes = $state([]);
  let scanning = $state(false);
  let javaError = $state('');

  // ---- new instance wizard (layout lives in NewInstanceModal) ----
  let wizardOpen = $state(false);

  // ---- install modpack modal (path/URL + drop target) ----
  let modpackOpen = $state(false);
  let modpackTarget = $state('');
  let modpackBusy = $state(false);
  let modpackError = $state('');

  // ---- edit instance modal ----
  let editFor = $state(null);

  // ---- global .mrpack drag-and-drop ----
  let mrpackFor = $state(null);

  // ---- settings page state (full-page view on the `settings` nav route) ----
  let storage = $state(null);
  let sharedInput = $state('');
  let storageBusy = $state(false);
  let storageMsg = $state('');
  let javaPrefs = $state(null);
  let javaPath = $state('');
  let minMem = $state(0);
  let maxMem = $state(0);
  let javaMsg = $state('');

  async function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  // ---- theme / chrome ----

  // The topbar quick-toggle is binary: it snaps to the Twilight pair,
  // leaving palette presets to the Settings grid.
  function toggleTheme() {
    theme = isDarkTheme(theme) ? 'twilight-light' : 'twilight-dark';
  }

  async function scanJava() {
    scanning = true;
    javaError = '';
    try {
      runtimes = await api('discover_java_installations');
    } catch (e) {
      javaError = String(e);
    } finally {
      scanning = false;
    }
  }

  // ---- wizard flow ----

  function openWizard() {
    wizardOpen = true;
  }

  async function installFromWizard() {
    if (!modpackTarget.trim()) return;
    modpackBusy = true;
    modpackError = '';
    try {
      const id = await api('install_modpack', { pathOrUrl: modpackTarget.trim() });
      modpackOpen = false;
      modpackTarget = '';
      await loadInstances();
      if (id) selectedId = id;
      status = 'Modpack installed.';
    } catch (e) {
      modpackError = String(e);
    } finally {
      modpackBusy = false;
    }
  }

  // ---- console drawer state ----
  let consoleLines = $state([]);
  let drawerOpen = $state(false);
  let gameRunning = $state(false);
  let consoleEl = $state(null);

  // Keep the newest line in view while the game streams output.
  $effect(() => {
    consoleLines.length;
    if (consoleEl) consoleEl.scrollTop = consoleEl.scrollHeight;
  });

  function logLine(entry) {
    consoleLines.push(entry);
    if (consoleLines.length > 5000) consoleLines.splice(0, consoleLines.length - 5000);
  }

  function clearLogs() {
    consoleLines = [];
  }

  // Minecraft log levels (`[time] [thread/LEVEL]:`) beat the raw stream.
  function lineClass(entry) {
    if (entry.stream === 'stderr' || entry.line.includes('/ERROR]')) return 'text-rose-400';
    if (entry.line.includes('/WARN]')) return 'text-(--accent-star)';
    if (entry.line.includes('/INFO]')) return 'text-(--accent)/80';
    return 'text-(--text-main)';
  }

  async function copyLogs() {
    const text = consoleLines.map((l) => l.line).join('\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  }

  async function killGame() {
    if (!gameRunning) return;
    try {
      await api('kill_instance');
      logLine({ stream: 'stdout', line: 'kill requested' });
    } catch (e) {
      logLine({ stream: 'stderr', line: String(e) });
    }
  }

  // ---- instance grid state ----
  let instances = $state([]);
  let instancesError = $state('');
  let menuFor = $state(null);
  let instanceQuery = $state('');
  let selectedId = $state(null);
  // delete confirmation modal (targets the id being removed)
  let deleteFor = $state(null);
  let deleteError = $state('');
  let deleteBusy = $state(false);

  function visibleInstances() {
    const q = instanceQuery.trim().toLowerCase();
    if (!q) return instances;
    return instances.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.minecraft_version.toLowerCase().includes(q) ||
        i.id.toLowerCase().includes(q),
    );
  }

  async function loadInstances() {
    try {
      instances = await api('scan_instances');
      instancesError = '';
    } catch (e) {
      instancesError = String(e);
    }
  }

  function selectInstance(id) {
    selectedId = id;
  }

  async function launchInstance(id) {
    if (gameRunning) return;
    const inst = instances.find((i) => i.id === id);
    const label = inst ? inst.name : id;
    gameRunning = true;
    status = `Running ${label}…`;
    drawerOpen = true;
    logLine({ stream: 'stdout', line: `launching ${label}…` });
    try {
      const code = await api('launch_instance', { instanceId: id });
      logLine({ stream: 'stdout', line: `launcher reports exit code ${code}` });
      await loadInstances();
      status = 'Ready';
    } catch (e) {
      // every backend failure surfaces here: bright red in the auto-opened
      // drawer, never a silent no-op
      console.error('Launch failed:', e);
      logLine({ stream: 'stderr', line: `[ERROR] Launch failed: ${e}` });
      status = 'Launch failed';
    } finally {
      gameRunning = false;
      if (status !== 'Launch failed') status = 'Ready';
    }
  }

  function openInstanceDir() {
    if (!storage) return;
    api('open_path', { path: storage.instances_dir }).catch((e) => (status = String(e)));
  }

  function openInstanceFolder(id) {
    if (!storage) return;
    api('open_path', { path: [storage.instances_dir.replace(/\\/g, '/'), id].join('/') }).catch(
      (e) => (status = String(e)),
    );
  }

  function requestDelete(id) {
    deleteError = '';
    deleteFor = id;
  }

  async function confirmDelete(toTrash) {
    if (!deleteFor || deleteBusy) return;
    deleteBusy = true;
    deleteError = '';
    try {
      await api('delete_instance', { instanceId: deleteFor, toTrash });
      if (selectedId === deleteFor) selectedId = null;
      deleteFor = null;
      await loadInstances();
      status = toTrash ? 'Instance moved to trash.' : 'Instance deleted.';
    } catch (e) {
      deleteError = String(e);
    } finally {
      deleteBusy = false;
    }
  }

  // ---- Prism-order context panel actions ----

  // Groups live in the root's shared `instgroups.json`; the wizard and panel
  // both read the labels straight off the scanned rows.
  const groupList = $derived(
    [...new Set(instances.map((i) => i.group).filter(Boolean))].sort((a, b) => a.localeCompare(b))
  );

  async function changeGroup(group) {
    if (!selectedInst) return;
    const label = selectedInst.name;
    try {
      await api('set_instance_group', { instanceId: selectedInst.id, group });
      await loadInstances();
      status = group ? `Moved ${label} to ${group}.` : `${label} is ungrouped.`;
    } catch (e) {
      status = String(e);
    }
  }

  async function copyInstance() {
    if (!selectedInst) return;
    const label = selectedInst.name;
    try {
      const row = await api('duplicate_instance', { instanceId: selectedInst.id });
      await loadInstances();
      selectedId = row.id;
      status = `Copied ${label}.`;
    } catch (e) {
      status = String(e);
    }
  }

  async function exportInstance() {
    if (!selectedInst) return;
    const save = window.__TAURI__?.dialog?.save;
    if (!save) {
      status = 'File picker unavailable in this build.';
      return;
    }
    try {
      const dest = await save({
        title: 'Export instance',
        defaultPath: `${selectedInst.name.replace(/[\\/:*?"<>|]/g, '_')}.zip`,
        filters: [{ name: 'Zip archive', extensions: ['zip'] }],
      });
      if (!dest) return;
      const path = await api('export_instance_zip', {
        instanceId: selectedInst.id,
        destPath: dest,
      });
      status = `Exported to ${path}.`;
    } catch (e) {
      status = String(e);
    }
  }

  async function shortcutInstance() {
    if (!selectedInst) return;
    try {
      const path = await api('create_desktop_shortcut', { instanceId: selectedInst.id });
      status = `Shortcut created: ${path}`;
    } catch (e) {
      status = String(e);
    }
  }

  async function onWizardCreated(row, warning) {
    wizardOpen = false;
    await loadInstances();
    if (row?.id) selectedId = row.id;
    status = warning || `Instance ${row?.name ?? ''} created.`;
  }

  // ---- edit instance (mods) ----

  function openEdit(inst) {
    editFor = inst;
  }

  // ---- right context panel (Yardarm grammar: selection drives it) ----

  const selectedInst = $derived(instances.find((i) => i.id === selectedId) ?? null);
  let ctxMods = $state(null);
  let ctxModsToken = 0;
  $effect(() => {
    const inst = selectedInst;
    editFor; // re-run when the edit modal closes to refresh the count
    const token = ++ctxModsToken;
    ctxMods = null;
    if (!inst) return;
    api('list_instance_mods', { instanceId: inst.id })
      .then((mods) => {
        if (token === ctxModsToken) ctxMods = mods.length;
      })
      .catch(() => {
        if (token === ctxModsToken) ctxMods = null;
      });
  });

  // ---- java / memory prefs ----

  async function loadPrefs() {
    try {
      javaPrefs = await api('get_java_prefs');
      javaPath = javaPrefs.java_path ?? '';
      minMem = javaPrefs.min_memory_mb;
      maxMem = javaPrefs.max_memory_mb;
      javaMsg = '';
      if (runtimes.length === 0) await scanJava();
    } catch {
      // plain web build: no backend
    }
  }

  async function savePrefs() {
    javaMsg = '';
    try {
      await api('set_java_prefs', {
        javaPath: javaPath.trim() || null,
        minMemoryMb: Number(minMem) || 0,
        maxMemoryMb: Number(maxMem) || 0,
      });
      javaMsg = 'Java settings saved.';
    } catch (e) {
      javaMsg = String(e);
    }
  }

  // ---- storage settings ----

  async function loadStorage() {
    storageBusy = true;
    try {
      storage = await api('get_storage');
      sharedInput = storage.is_default_shared ? '' : storage.shared_dir;
    } catch (e) {
      storageMsg = String(e);
    } finally {
      storageBusy = false;
    }
  }

  async function saveShared() {
    storageBusy = true;
    storageMsg = '';
    try {
      await api('set_shared_dir', { path: sharedInput.trim() || null });
      storage = await api('get_storage');
      sharedInput = storage.is_default_shared ? '' : storage.shared_dir;
      storageMsg = 'Storage updated.';
    } catch (e) {
      storageMsg = String(e);
    } finally {
      storageBusy = false;
    }
  }

  async function resetShared() {
    sharedInput = '';
    await saveShared();
  }

  async function cleanStaging() {
    storageBusy = true;
    storageMsg = '';
    try {
      await api('clean_staging');
      storageMsg = 'Staging cleaned.';
    } catch (e) {
      storageMsg = String(e);
    } finally {
      storageBusy = false;
    }
  }

  async function refreshAccounts() {
    try {
      accounts = await api('get_accounts');
      activeAccount = await api('get_active_account');
    } catch {
      // plain web build: no backend pane
    }
  }

  async function addAccount() {
    accountError = '';
    try {
      await api('add_offline_account', { username: newUsername });
      newUsername = '';
      await refreshAccounts();
    } catch (e) {
      accountError = String(e);
    }
  }

  async function setActive(id) {
    accountError = '';
    try {
      await api('set_active_account', { id });
      await refreshAccounts();
    } catch (e) {
      accountError = String(e);
    }
  }

  async function removeAccount(id) {
    accountError = '';
    try {
      await api('remove_account', { id });
      await refreshAccounts();
    } catch (e) {
      accountError = String(e);
    }
  }

  function typeLabel(account) {
    return { offline: 'Offline', microsoft: 'Microsoft' }[account.account_type.type] ?? 'Yggdrasil';
  }

  onMount(() => {
    const unlisteners = [];
    const onKey = (e) => {
      if (e.key === 'Escape') {
        // frontend modals own their closers; pop the frontmost one
        const top = topOverlay();
        if (top) {
          top();
          return;
        }
        if (menuFor) menuFor = null;
        else if (deleteFor) (deleteFor = null), (deleteError = '');
        else if (selectedId) selectedId = null;
        else if (modalOpen) modalOpen = false;
        else if (modpackOpen) modpackOpen = false;
        else if (editFor) editFor = null;
        else if (drawerOpen) drawerOpen = false;
        return;
      }
      // arrow-key grid navigation while the desktop is the active surface:
      // no modal/menu open and focus not inside a text field or a select.
      if (
        menuFor ||
        deleteFor ||
        modalOpen ||
        modpackOpen ||
        editFor ||
        drawerOpen ||
        topOverlay()
      )
        return;
      const field = e.target?.closest?.('input, textarea, select, [contenteditable]');
      if (field) return;
      const rows = visibleInstances();
      if (!rows.length) return;
      const cur = rows.findIndex((i) => i.id === selectedId);
      let next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = cur + 1;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = cur < 0 ? 0 : cur - 1;
      else if (e.key === 'Enter' && cur >= 0 && document.activeElement === document.body) {
        e.preventDefault();
        launchInstance(rows[cur].id);
        return;
      }
      if (next != null && rows[next]) {
        e.preventDefault();
        selectedId = rows[next].id;
      }
    };
    window.addEventListener('keydown', onKey);
    (async () => {
      try {
        version = await api('get_version');
      } catch {
        version = 'dev';
      }
      try {
        unlisteners.push(
          await window.__TAURI__.event.listen('launch-log', (e) => logLine(e.payload)),
        );
        unlisteners.push(
          await window.__TAURI__.event.listen('tauri://drag-drop', (e) => {
            const path = e.payload?.paths?.[0];
            if (!path) return;
            if (path.endsWith('.mrpack')) {
              // install modal open: it owns the path; anywhere else:
              // intercept into the dedicated install modal
              if (modpackOpen) modpackTarget = path;
              else mrpackFor = path;
            }
          }),
        );
      } catch {
        // plain web build: no event pane
      }
      await refreshAccounts();
      await loadInstances();
      await loadStorage();
      // desktop shortcut boot: auto-launch the instance the shortcut names
      try {
        const pending = await api('get_startup_launch');
        if (pending && instances.some((i) => i.id === pending)) launchInstance(pending);
      } catch {
        // plain web build: no startup flag
      }
    })();
    return () => unlisteners.forEach((off) => off());
  });
</script>

<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)">
  <!-- ==================== SIDEBAR ==================== -->
  <nav
    class="group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 {sidebarExpanded
      ? 'w-60'
      : 'w-16'}"
  >
    <div
      class="flex h-10 items-center gap-2 border-b border-(--border) px-1"
      ondblclick={() => (sidebarExpanded = !sidebarExpanded)}
    >
      <img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0" />
      {#if sidebarExpanded}
        <span class="flex min-w-0 items-center gap-1.5">
          <span class="truncate text-[13px] font-semibold">TwilightMC</span>
          <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span>
        </span>
      {/if}
    </div>

    <div class="mt-1 flex flex-1 flex-col gap-0.5">
      {#each nav as item (item.id)}
        <button
          class="flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} {active
          === item.id
            ? 'bg-(--accent) font-medium text-(--on-accent)'
            : 'text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)'}"
          title={item.label}
          onclick={() => {
            active = item.id;
            if (item.id === 'settings') {
              loadPrefs();
              if (!storage) loadStorage();
            }
          }}
        >
          <span class="w-5 shrink-0 text-center text-[15px] leading-none">{item.icon}</span>
          {#if sidebarExpanded}
            <span class="truncate text-[13px]">{item.label}</span>
          {/if}
        </button>
      {/each}

      <button
        class="flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
        title="Add Instance"
        onclick={openWizard}
      >
        <span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span>
        {#if sidebarExpanded}
          <span class="truncate text-[13px]">Add Instance</span>
        {/if}
      </button>
    </div>

    <!-- account card -->
    <button
      class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 {sidebarExpanded
        ? ''
        : 'justify-center'}"
      title={activeAccount ? activeAccount.username : 'Add account'}
      onclick={() => (modalOpen = true)}
    >
      <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-[11px] font-bold text-(--accent)">
        {#if activeAccount}{activeAccount.username[0]?.toUpperCase()}{:else}?{/if}
      </span>
      {#if sidebarExpanded}
        <span class="min-w-0 flex-1 text-left">
          <span class="block truncate text-[12px] font-medium">{activeAccount ? activeAccount.username : 'Add account'}</span>
          <span class="block text-[10px] text-(--text-muted)">
            {activeAccount ? typeLabel(activeAccount) : 'Offline'}
          </span>
        </span>
      {/if}
    </button>

    <!-- collapse (expanded) / expand-on-hover (compact) trigger at the logo edge -->
    <button
      class="absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) {sidebarExpanded
        ? ''
        : 'opacity-0 group-hover/nav:opacity-100'}"
      onclick={() => (sidebarExpanded = !sidebarExpanded)}
    >
      {sidebarExpanded ? '«' : '»'}
    </button>
  </nav>

  <!-- ==================== RIGHT COLUMN ==================== -->
  <div class="flex min-w-0 flex-1 flex-col">
    <header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4">
      <div class="flex items-center gap-2.5">
        <span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)">TwilightMC v{version}</span>
        <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span>
      </div>
      <span class="text-xs text-(--text-muted)">{status}</span>
    </header>

    <main class="min-w-0 flex-1 overflow-y-auto p-6">
      {#if active === 'settings'}
        <!-- full-page settings: the grid and context panel stay behind -->
        <SettingsPage
          {version}
          bind:theme
          {storage}
          {runtimes}
          {scanning}
          {javaError}
          bind:javaPath
          bind:minMem
          bind:maxMem
          bind:sharedInput
          {storageBusy}
          {storageMsg}
          {javaMsg}
          {gameRunning}
          onback={() => (active = 'instances')}
          onscanjava={scanJava}
          onsaveprefs={savePrefs}
          onsaveshared={saveShared}
          onresetshared={resetShared}
          oncleanstaging={cleanStaging}
          onopenurl={(url) => api('open_path', { path: url }).catch((e) => (status = String(e)))}
        />
      {:else if active === 'instances'}
        <!-- action toolbar -->
        <div class="mb-4 flex items-center gap-2">
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
            onclick={openWizard}
          >
            ＋ Add Instance
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={!storage}
            title={storage ? storage.instances_dir : ''}
            onclick={openInstanceDir}
          >
            📂 Instance Folder
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title="Install a Modrinth .mrpack into a new instance"
            onclick={() => (modpackOpen = true)}
          >
            ⤓ Install .mrpack
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            onclick={() => {
              active = 'settings';
              loadPrefs();
              if (!storage) loadStorage();
            }}
          >
            ⚙ Settings
          </button>
          <input
            class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Filter instances…"
            bind:value={instanceQuery}
          />
          <span class="flex-1"></span>
          <button
            class="rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title={isDarkTheme(theme) ? 'Twilight Light' : 'Twilight Dark'}
            onclick={toggleTheme}
          >
            {isDarkTheme(theme) ? '☀' : '☾'}
          </button>
        </div>

        <!-- instance grid -->
        <InstanceGrid
          instances={visibleInstances()}
          error={instancesError}
          query={instanceQuery}
          {selectedId}
          {gameRunning}
          {menuFor}
          onselect={selectInstance}
          onplay={launchInstance}
          ontogglemenu={(id) => (menuFor = menuFor === id ? null : id)}
          onedit={openEdit}
          onopenfolder={openInstanceFolder}
          onviewlogs={() => (drawerOpen = true)}
          ondelete={requestDelete}
          onclosemenu={() => (menuFor = null)}
          onadd={openWizard}
        />
      {:else}
        <h2 class="text-lg font-semibold">{sections[active][0]}</h2>
        <p class="mt-1 text-(--text-muted)">{sections[active][1]}</p>
      {/if}
    </main>

    <!-- always-present collapsible console drawer: h-10 bar ⇄ h-48 terminal -->
    <section
      class="flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 {drawerOpen
        ? 'h-48'
        : 'h-10'}"
    >
      <div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3">
        <button
          class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"
          title={drawerOpen ? 'Collapse console' : 'Expand console'}
          onclick={() => (drawerOpen = !drawerOpen)}
        >
          <span
            class="h-2 w-2 shrink-0 rounded-full {gameRunning ? 'animate-pulse bg-green-500' : 'bg-(--border)'}"
          ></span>
          <span class="truncate">Console Drawer (Real-time logs)</span>
          {#if gameRunning}
            <span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>
          {/if}
        </button>
        <div class="flex shrink-0 items-center gap-3 text-[11px]">
          <button
            class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40"
            disabled={!consoleLines.length}
            onclick={(e) => {
              e.stopPropagation();
              clearLogs();
            }}
          >
            Clear
          </button>
          <button
            class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40"
            disabled={!consoleLines.length}
            onclick={(e) => {
              e.stopPropagation();
              copyLogs();
            }}
          >
            Copy
          </button>
          <button
            class="text-rose-400 hover:text-rose-300 disabled:opacity-40"
            disabled={!gameRunning}
            title="Kill the game process"
            onclick={(e) => {
              e.stopPropagation();
              killGame();
            }}
          >
            Kill
          </button>
          {#if drawerOpen}
            <button
              class="text-(--text-muted) hover:text-(--text-main)"
              title="Collapse"
              onclick={() => (drawerOpen = false)}
            >
              Hide
            </button>
          {/if}
        </div>
      </div>
      <div bind:this={consoleEl} class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5">
        {#each consoleLines as entry, i (i)}
          <div class="whitespace-pre-wrap break-all {lineClass(entry)}">
            {entry.line}
          </div>
        {:else}
          <div class="text-(--text-muted)">Game output appears here once you launch.</div>
        {/each}
      </div>
    </section>
  </div>

  <!-- Yardarm-style right context panel: selection drives it, Escape clears -->
  {#if active === 'instances' && selectedInst}
    <InstanceContextPanel
      instance={selectedInst}
      {storage}
      {gameRunning}
      modsCount={ctxMods}
      groups={groupList}
      onlaunch={() => launchInstance(selectedInst.id)}
      onkill={killGame}
      onedit={() => openEdit(selectedInst)}
      onchangegroup={changeGroup}
      onopenfolder={() => openInstanceFolder(selectedInst.id)}
      onexport={exportInstance}
      oncopy={copyInstance}
      ondelete={() => requestDelete(selectedInst.id)}
      onshortcut={shortcutInstance}
    />
  {/if}

  {#if mrpackFor}
    <MrpackInstallModal
      path={mrpackFor}
      onclose={() => (mrpackFor = null)}
      oninstalled={async (id) => {
        mrpackFor = null;
        await loadInstances();
        selectedId = id;
        status = 'Modpack installed.';
      }}
    />
  {/if}

  {#if modalOpen}
    <!-- backdrop click closes; panel click does not -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget) modalOpen = false;
      }}
    >
      <div class="w-[440px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
          <h3 class="text-sm font-semibold">Accounts</h3>
          <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => (modalOpen = false)}>✕</button>
        </div>

        <div class="max-h-72 overflow-y-auto">
          {#each accounts as account (account.id)}
            <div
              class="flex items-center gap-3 border-b border-(--border) px-4 py-2.5 {activeAccount?.id === account.id
                ? 'bg-(--accent)/10'
                : ''}"
            >
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)">
                {account.username[0]?.toUpperCase()}
              </span>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <span class="truncate text-[13px] font-medium">{account.username}</span>
                  <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)">
                    {typeLabel(account)}
                  </span>
                  {#if activeAccount?.id === account.id}
                    <span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>
                  {/if}
                </div>
                <div class="truncate text-[11px] text-(--text-muted)">{account.uuid}</div>
              </div>
              <div class="flex shrink-0 gap-1">
                {#if activeAccount?.id !== account.id}
                  <button
                    class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
                    onclick={() => setActive(account.id)}>Set active</button
                  >
                {/if}
                <button
                  class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400"
                  onclick={() => removeAccount(account.id)}>Remove</button
                >
              </div>
            </div>
          {:else}
            <p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add an offline profile below.</p>
          {/each}
        </div>

        <form
          class="flex items-center gap-2 border-t border-(--border) p-3"
          onsubmit={(e) => {
            e.preventDefault();
            addAccount();
          }}
        >
          <input
            class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Offline username (3-16 letters, digits, _)"
            bind:value={newUsername}
          />
          <button
            type="submit"
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={!newUsername}>Add</button
          >
        </form>
        {#if accountError}
          <p class="border-t border-(--border) px-4 py-2 text-[12px] text-red-400">{accountError}</p>
        {/if}
      </div>
    </div>
  {/if}

  {#if wizardOpen}
    <NewInstanceModal
      groups={groupList}
      onclose={() => (wizardOpen = false)}
      oncreated={onWizardCreated}
    />
  {/if}

  {#if modpackOpen}
    <!-- Install Modpack: drop target + path/URL -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget && !modpackBusy) modpackOpen = false;
      }}
    >
      <div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
          <h3 class="text-sm font-semibold">Install Modpack</h3>
          <button
            class="text-(--text-muted) hover:text-(--text-main)"
            onclick={() => (modpackOpen = false)}>✕</button
          >
        </div>
        <div class="p-4">
          <div
            class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"
            ondragover={(e) => e.preventDefault()}
            ondrop={(e) => {
              e.preventDefault();
              const path = e.dataTransfer?.files?.[0]?.path;
              if (path) modpackTarget = path;
            }}
          >
            <span class="text-xl">⤓</span>
            <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span>
            <span class="text-[11px]">or paste its path / URL below</span>
          </div>
          <input
            class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="C:\downloads\pack.mrpack  |  https://modrinth.com/…"
            bind:value={modpackTarget}
          />
          {#if modpackError}
            <p class="mt-2 text-[12px] text-red-400">{modpackError}</p>
          {/if}
        </div>
        <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3">
          <button
            class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
            onclick={() => (modpackOpen = false)}
          >
            Cancel
          </button>
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={modpackBusy || !modpackTarget.trim()}
            onclick={installFromWizard}
          >
            {modpackBusy ? 'Installing…' : 'Install .mrpack'}
          </button>
        </div>
      </div>
    </div>
  {/if}

  {#if editFor}
    <!-- Edit Instance modal (custom + foreign instances) -->
    <EditInstanceModal
      instance={editFor}
      {storage}
      onclose={() => (editFor = null)}
      onopenconsole={() => (drawerOpen = true)}
    />
  {/if}

  {#if deleteFor}
    <!-- Delete instance confirmation -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget && !deleteBusy) deleteFor = null;
      }}
    >
      <div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl">
        <h3 class="text-[14px] font-semibold">Delete instance</h3>
        <p class="mt-2 text-[12px] text-(--text-muted)">
          Delete <span class="font-medium text-(--text-main)">{deleteFor}</span> and all of its game files?
        </p>
        {#if deleteError}
          <p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400">{deleteError}</p>
        {/if}
        <div class="mt-4 flex justify-end gap-2">
          <button
            class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={deleteBusy}
            onclick={() => (deleteFor = null)}
          >
            Cancel
          </button>
          <button
            class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40"
            disabled={deleteBusy}
            title="Moves the folder into .twilight-trash next to the instances root"
            onclick={() => confirmDelete(true)}
          >
            ♻ Move to Trash
          </button>
          <button
            class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40"
            disabled={deleteBusy}
            title="Removes this instance directory permanently"
            onclick={() => confirmDelete(false)}
          >
            ✕ Delete Permanently
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
