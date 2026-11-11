<script>
  import { onMount } from 'svelte';
  import InstanceGrid from './lib/InstanceGrid.svelte';
  import EditInstanceModal from './lib/EditInstanceModal.svelte';
  import AccentPicker from './lib/AccentPicker.svelte';
  import InstanceContextPanel from './lib/InstanceContextPanel.svelte';
  import { topOverlay } from './lib/overlays.js';
  import { loadSavedAccent } from './lib/theme';

  let version = $state('…');
  let active = $state('instances');

  // Twilight Light/Dark: persisted locally (fast first paint) and mirrored
  // into settings.json so the backend knows the shell theme too.
  let theme = $state(
    localStorage.getItem('twilight-theme') ??
      (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );

  $effect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('twilight-theme', theme);
    window.__TAURI__?.core.invoke('set_theme_config', { theme }).catch(() => {});
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

  // ---- vanilla version picker state (wizard tab 1) ----
  let catalog = $state(null);
  let fetchingVersions = $state(false);
  let versionsError = $state('');
  let versionQuery = $state('');
  let typeFilter = $state('all');

  // ---- new instance wizard ----
  let wizardOpen = $state(false);
  let wizardTab = $state(1);
  let wizardVersion = $state('');
  let wizardName = $state('');
  let wizardLoader = $state('');
  let wizardLoaderVersion = $state('');
  let wizardError = $state('');
  // loader build dropdown (fabric/quilt meta); error falls back to free text
  let loaderBuilds = $state([]);
  let loaderBuildsState = $state('idle'); // idle | loading | error

  // ---- modpack dropzone (wizard tab 3) ----
  let modpackTarget = $state('');
  let modpackBusy = $state(false);

  // ---- edit instance modal ----
  let editFor = $state(null);

  // ---- settings modal ----
  let settingsOpen = $state(false);
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

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
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

  async function fetchVersions() {
    fetchingVersions = true;
    versionsError = '';
    try {
      catalog = await api('fetch_vanilla_versions');
    } catch (e) {
      versionsError = String(e);
    } finally {
      fetchingVersions = false;
    }
  }

  function filteredVersions() {
    if (!catalog) return [];
    const q = versionQuery.trim().toLowerCase();
    return catalog.versions.filter((v) => {
      const typeOk =
        typeFilter === 'all' ||
        (typeFilter === 'releases' ? v.version_type === 'release' : v.version_type !== 'release');
      return typeOk && (!q || v.id.toLowerCase().includes(q));
    });
  }

  // ---- wizard flow ----

  function openWizard() {
    wizardOpen = true;
    wizardTab = 1;
    wizardVersion = '';
    wizardName = '';
    wizardLoader = '';
    wizardLoaderVersion = '';
    wizardError = '';
    loaderBuilds = [];
    loaderBuildsState = 'idle';
    if (!catalog) fetchVersions();
  }

  // Loader pick: Vanilla clears the dropdown, fabric/quilt fetch their build
  // list for this Minecraft version (latest stable pre-selected).
  async function pickLoader(id) {
    wizardLoader = id;
    wizardLoaderVersion = '';
    if (!id) {
      loaderBuilds = [];
      loaderBuildsState = 'idle';
      return;
    }
    loaderBuildsState = 'loading';
    try {
      loaderBuilds = await api('fetch_loader_versions', {
        loader: id,
        gameVersion: wizardVersion,
      });
      // meta lists the latest stable first when it exists
      wizardLoaderVersion = loaderBuilds.find((b) => b.stable)?.version ?? '';
      loaderBuildsState = loaderBuilds.length ? 'idle' : 'error';
    } catch {
      loaderBuilds = [];
      loaderBuildsState = 'error';
    }
  }

  // Client mirror of the backend slugify for the live id preview.
  function slugifyLocal(name) {
    let slug = '';
    for (const ch of name) {
      const code = ch.codePointAt(0);
      if (code >= 65 && code <= 90) slug += String.fromCharCode(code + 32);
      else if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57) || ch === '-' || ch === '_')
        slug += ch;
      else if (ch === ' ' || ch === '.') slug += '-';
    }
    return slug.replace(/^-+|-+$/g, '');
  }

  async function createFromWizard() {
    const name = wizardName.trim() || wizardVersion;
    wizardError = '';
    try {
      await api('create_instance', {
        name,
        version: wizardVersion,
        loader: wizardLoader.trim() ? wizardLoader.trim() : null,
        loaderVersion: wizardLoaderVersion.trim() || null,
      });
      wizardOpen = false;
      await loadInstances();
      status = `Instance ${name} created.`;
    } catch (e) {
      wizardError = String(e);
    }
  }

  async function installFromWizard() {
    if (!modpackTarget.trim()) return;
    modpackBusy = true;
    wizardError = '';
    try {
      await api('install_modpack', { pathOrUrl: modpackTarget.trim() });
      wizardOpen = false;
      modpackTarget = '';
      await loadInstances();
      status = 'Modpack installed.';
    } catch (e) {
      wizardError = String(e);
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
    } catch (e) {
      logLine({ stream: 'stderr', line: String(e) });
    } finally {
      gameRunning = false;
      status = 'Ready';
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
        else if (wizardOpen) wizardOpen = false;
        else if (editFor) editFor = null;
        else if (settingsOpen) settingsOpen = false;
        else if (drawerOpen) drawerOpen = false;
        return;
      }
      // arrow-key grid navigation while the desktop is the active surface:
      // no modal/menu open and focus not inside a text field or a select.
      if (
        menuFor ||
        deleteFor ||
        modalOpen ||
        wizardOpen ||
        editFor ||
        settingsOpen ||
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
            if (path && (wizardOpen || path.endsWith('.mrpack'))) modpackTarget = path;
          }),
        );
      } catch {
        // plain web build: no event pane
      }
      await refreshAccounts();
      await loadInstances();
      await loadStorage();
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
          onclick={() => (active = item.id)}
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

      <button
        class="mt-3 border-t border-(--border) flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
        title="Settings"
        onclick={() => {
          settingsOpen = true;
          loadPrefs();
          loadStorage();
        }}
      >
        <span class="w-5 shrink-0 text-center text-[15px] leading-none">⚙</span>
        {#if sidebarExpanded}
          <span class="truncate text-[13px]">Settings</span>
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
      {#if active === 'instances'}
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
            onclick={() => {
              settingsOpen = true;
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
            title={theme === 'dark' ? 'Twilight Light' : 'Twilight Dark'}
            onclick={toggleTheme}
          >
            {theme === 'dark' ? '☀' : '☾'}
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
      onlaunch={() => launchInstance(selectedInst.id)}
      onedit={() => openEdit(selectedInst)}
      onopenfolder={() => openInstanceFolder(selectedInst.id)}
      onmoremods={() => openEdit(selectedInst)}
      ondelete={() => requestDelete(selectedInst.id)}
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
    <!-- New Instance wizard -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget) wizardOpen = false;
      }}
    >
      <div class="flex h-[480px] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
          <h3 class="text-sm font-semibold">New Instance</h3>
          <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => (wizardOpen = false)}>✕</button>
        </div>
        <div class="flex items-center gap-1 border-b border-(--border) px-3 py-2 text-[11px]">
          <span class="px-2 py-1 text-(--text-muted) {wizardTab === 1 ? 'bg-(--bg-subtle) rounded text-(--text-main) font-medium' : ''}">1 · Version</span>
          <span class="px-2 py-1 text-(--text-muted) {wizardTab === 2 ? 'bg-(--bg-subtle) rounded text-(--text-main) font-medium' : ''}">2 · Loader</span>
          <span class="px-2 py-1 text-(--text-muted) {wizardTab === 3 ? 'bg-(--bg-subtle) rounded text-(--text-main) font-medium' : ''}">3 · Modpack</span>
        </div>

        {#if wizardTab === 1}
          <div class="min-h-0 flex-1 overflow-y-auto p-4">
            <div class="flex items-center justify-between">
              <button
                class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                disabled={fetchingVersions}
                onclick={fetchVersions}
              >
                {fetchingVersions ? 'Fetching…' : catalog ? 'Refresh' : 'Load version list'}
              </button>
              <div class="flex gap-1">
                {#each [['all', 'All'], ['releases', 'Releases'], ['snapshots', 'Snapshots']] as [id, label] (id)}
                  <button
                    class="rounded px-2 py-1 text-[11px] {typeFilter === id
                      ? 'bg-(--accent) font-medium text-(--on-accent)'
                      : 'text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)'}"
                    onclick={() => (typeFilter = id)}
                  >
                    {label}
                  </button>
                {/each}
              </div>
            </div>
            <input
              class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder={catalog ? `Search ${catalog.total} versions…` : 'Load the version list first'}
              bind:value={versionQuery}
              disabled={!catalog}
            />
            <ul class="mt-3 h-full max-h-[280px] divide-y divide-(--border) overflow-y-auto rounded border border-(--border) bg-(--bg-subtle)">
              {#each filteredVersions() as v (v.id)}
                <li class="flex items-center gap-3 px-3 py-2 {wizardVersion === v.id ? 'bg-(--accent)/10' : ''}">
                  <button
                    class="h-8 min-w-0 flex-1 cursor-pointer text-left"
                    onclick={() => {
                      wizardVersion = v.id;
                      wizardName = wizardName || v.id;
                    }}
                  >
                    <span class="text-[13px]">{v.id}</span>
                    {#if v.is_latest_release}
                      <span class="ml-1 rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-(--accent-star)">LATEST</span>
                    {/if}
                    <span class="ml-2 text-[10px] uppercase tracking-wide {v.version_type === 'release' ? 'text-(--text-muted)' : 'text-(--accent-star)/80'}">{v.version_type}</span>
                  </button>
                </li>
              {:else}
                <li class="px-3 py-3 text-[12px] text-(--text-muted)">
                  {catalog ? 'No versions match this filter.' : versionsError ?? 'Choose a source…'}
                </li>
              {/each}
            </ul>
          </div>
        {:else if wizardTab === 2}
          <div class="flex-1 overflow-y-auto p-4">
            <label class="block text-[12px] font-medium text-(--text-muted)">Instance name</label>
            <input
              class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none focus:border-(--accent)"
              bind:value={wizardName}
              placeholder={wizardVersion || '1.21.4'}
            />
            {#if wizardName.trim() && slugifyLocal(wizardName.trim()) !== wizardName.trim()}
              <p class="mt-1 text-[10px] text-(--text-muted)">id: {slugifyLocal(wizardName.trim())}</p>
            {/if}
            <div class="mt-3 flex gap-2">
              {#each [['', 'Vanilla'], ['fabric', 'Fabric'], ['quilt', 'Quilt']] as [id, label] (id)}
                <button
                  class="flex-1 rounded border border-(--border) px-3 py-2 text-[13px] {wizardLoader === id
                    ? 'border-(--accent) bg-(--accent)/10 font-medium text-(--accent)'
                    : 'text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)'}"
                  onclick={() => pickLoader(id)}
                >
                  {label}
                </button>
              {/each}
            </div>
            {#if wizardLoader}
              <label class="mt-3 block text-[12px] font-medium text-(--text-muted)">{wizardLoader} version</label>
              {#if loaderBuildsState === 'loading'}
                <div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] text-(--text-muted)">
                  Loading {wizardLoader} builds for {wizardVersion}…
                </div>
              {:else if loaderBuildsState === 'error'}
                <input
                  class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none focus:border-(--accent)"
                  bind:value={wizardLoaderVersion}
                  placeholder="version (offline — type manually, empty = latest stable)"
                />
                <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — enter a version manually.</p>
              {:else}
                <select
                  class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
                  bind:value={wizardLoaderVersion}
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
          </div>
        {:else}
          <div class="flex-1 overflow-y-auto p-4">
            <div
              class="flex h-40 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"
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
            <p class="mt-2 text-[11px] text-(--text-muted)">Modrinth packs stage their own instance (name from the pack slug).</p>
          </div>
        {/if}

        <div class="flex items-center justify-between border-t border-(--border) px-4 py-3">
          {#if wizardTab === 1}
            <span class="text-[12px] text-(--text-muted)">{wizardVersion ? `Selected ${wizardVersion}` : 'Pick a version to continue'}</span>
            <button
              class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
              disabled={!wizardVersion}
              onclick={() => (wizardTab = 2)}
            >
              Next
            </button>
          {:else if wizardTab === 2}
            <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" onclick={() => (wizardTab = 1)}>Back</button>
            <div class="flex gap-2">
              <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" onclick={() => (wizardTab = 3)}>Modpack instead</button>
              <button
                class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
                onclick={createFromWizard}
              >
                Create Instance
              </button>
            </div>
          {:else}
            <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" onclick={() => (wizardTab = 2)}>Back</button>
            <button
              class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
              disabled={modpackBusy || !modpackTarget.trim()}
              onclick={installFromWizard}
            >
              {modpackBusy ? 'Installing…' : 'Install .mrpack'}
            </button>
          {/if}
        </div>
        {#if wizardError}
          <p class="border-t border-(--border) px-4 py-2 text-[12px] text-red-400">{wizardError}</p>
        {/if}
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

  {#if settingsOpen}
    <!-- Settings modal -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget) settingsOpen = false;
      }}
    >
      <div class="flex max-h-[560px] w-[520px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
          <h3 class="text-sm font-semibold">Settings</h3>
          <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => (settingsOpen = false)}>✕</button>
        </div>

        <div class="min-h-0 flex-1 overflow-y-auto p-4">
          <AccentPicker />

          <h4 class="mt-5 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java</h4>
          <select
            class="mt-2 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
            bind:value={javaPath}
          >
            <option value="">Auto-discovery (recommended)</option>
            {#each runtimes as r (r.executable)}
              <option value={r.executable}>Java {r.major} — {r.home}</option>
            {/each}
          </select>
          {#if !runtimes.length}
            <p class="mt-2 text-[11px] text-(--text-muted)">{scanning ? 'Probing system roots…' : 'No runtimes detected.'}</p>
          {/if}
          <button class="mt-2 text-[11px] text-(--text-muted) hover:text-(--text-main)" onclick={scanJava}>Rescan JREs</button>

          <h4 class="mt-5 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory</h4>
          <div class="mt-2 flex items-center gap-2">
            <span class="w-14 text-[12px] text-(--text-muted)">-Xms</span>
            <input type="range" min="0" max="16384" step="256" bind:value={minMem} class="flex-1 accent-[var(--accent)]" />
            <input type="number" min="0" max="65536" step="256" bind:value={minMem} class="h-7 w-20 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)" />
            <span class="text-[11px] text-(--text-muted)">MiB</span>
          </div>
          <div class="mt-1 flex items-center gap-2">
            <span class="w-14 text-[12px] text-(--text-muted)">-Xmx</span>
            <input type="range" min="0" max="16384" step="256" bind:value={maxMem} class="flex-1 accent-[var(--accent)]" />
            <input type="number" min="0" max="65536" step="256" bind:value={maxMem} class="h-7 w-20 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)" />
            <span class="text-[11px] text-(--text-muted)">MiB</span>
          </div>
          <p class="mt-1 text-[11px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p>

          <h4 class="mt-5 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Storage</h4>
          {#if storage}
            <div class="mt-2 rounded border border-(--border) bg-(--bg-subtle) p-3">
              <div class="text-[11px] text-(--text-muted)">Shared library {storage.is_default_shared ? '(default)' : '(custom)'}</div>
              <div class="mt-2 flex gap-2">
                <input
                  class="h-8 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
                  placeholder={storage.shared_dir}
                  bind:value={sharedInput}
                />
                <button
                  class="rounded bg-(--accent) px-3 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                  disabled={storageBusy}
                  onclick={saveShared}>Save</button
                >
                {#if !storage.is_default_shared}
                  <button
                    class="rounded px-3 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
                    disabled={storageBusy}
                    onclick={resetShared}>Reset</button
                  >
                {/if}
              </div>
              <div class="mt-3 flex items-center justify-between gap-2">
                <span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)">Staging: {storage.staging_root}</span>
                <button
                  class="shrink-0 rounded px-3 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
                  disabled={storageBusy || gameRunning}
                  onclick={cleanStaging}
                >
                  Clean staging
                </button>
              </div>
            </div>
          {/if}
          {#if javaMsg || storageMsg}
            <p class="mt-3 text-[12px] {javaMsg ? 'text-(--accent)' : 'text-(--text-muted)'}">{javaMsg || storageMsg}</p>
          {/if}
        </div>

        <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3">
          <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" onclick={() => (settingsOpen = false)}>Close</button>
          <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)" onclick={savePrefs}>Save Java</button>
        </div>
      </div>
    </div>
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
