<script>
  import { onMount } from 'svelte';

  let version = $state('…');
  let active = $state('instances');

  // Twilight Light/Dark: persisted locally (fast first paint) and mirrored
  // into settings.json so the backend knows the shell theme too.
  let theme = $state(
    localStorage.getItem('twilight-theme') ??
      (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );

  $effect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('twilight-theme', theme);
    window.__TAURI__?.core.invoke('set_theme_config', { theme }).catch(() => {});
  });

  // No crutch states or animations: a busy desktop reads one crisp status word.
  let status = $state('Ready');

  // ---- sidebar / navigation ----
  let sidebarExpanded = $state(false);

  const nav = [
    { id: 'instances', label: 'Instances', icon: '▦' },
    { id: 'worlds', label: 'Worlds & Servers', icon: '⌗' },
    { id: 'downloads', label: 'Downloads', icon: '⤓' },
  ];

  const sections = {
    instances: ['Instances', 'Your library — open the wizard or drop a pack.'],
    worlds: ['Worlds & Servers', 'World and server management lands in a later milestone.'],
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

  // ---- modpack dropzone (wizard tab 3) ----
  let modpackTarget = $state('');
  let modpackBusy = $state(false);

  // ---- edit instance modal ----
  let editFor = $state(null);
  let editTab = $state('mods');
  let mods = $state([]);
  let modsBusy = $state(false);
  let modsMsg = $state('');
  let importPath = $state('');

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
    if (!catalog) fetchVersions();
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
    if (entry.stream === 'stderr' || entry.line.includes('/ERROR]')) return 'text-red-400';
    if (entry.line.includes('/WARN]')) return 'text-(--tw-star)';
    return 'text-(--tw-text)';
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

  async function loadInstances() {
    try {
      instances = await api('get_instances');
    } catch (e) {
      instancesError = String(e);
    }
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

  function openInstanceFolder(id) {
    if (!storage) return;
    api('open_path', { path: [storage.shared_dir.replace(/\\/g, '/'), 'instances', id].join('/') }).catch(
      (e) => (status = String(e)),
    );
  }

  function openSharedFolder() {
    if (!storage) return;
    api('open_path', { path: storage.shared_dir }).catch((e) => (status = String(e)));
  }

  async function deleteInstance(id) {
    if (!window.confirm(`Delete instance ${id} and all of its game files?`)) return;
    try {
      await api('delete_instance', { instanceId: id });
      menuFor = null;
      await loadInstances();
    } catch (e) {
      status = String(e);
    }
  }

  // ---- edit instance (mods) ----

  function openEdit(inst) {
    editFor = inst;
    editTab = 'mods';
    modsMsg = '';
    importPath = '';
    refreshMods();
  }

  async function refreshMods() {
    if (!editFor) return;
    modsBusy = true;
    try {
      mods = await api('list_mods', { instanceId: editFor.id });
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
  }

  async function toggleMod(base, enable) {
    try {
      await api('toggle_mod', { instanceId: editFor.id, modBase: base, enable });
    } catch (e) {
      modsMsg = String(e);
    }
    await refreshMods();
  }

  async function importMod() {
    if (!importPath.trim()) return;
    modsBusy = true;
    modsMsg = '';
    try {
      await api('import_mod', { instanceId: editFor.id, jarPath: importPath.trim() });
      importPath = '';
      await refreshMods();
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
  }

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
        if (menuFor) menuFor = null;
        else if (modalOpen) modalOpen = false;
        else if (wizardOpen) wizardOpen = false;
        else if (editFor) editFor = null;
        else if (settingsOpen) settingsOpen = false;
        else if (drawerOpen) drawerOpen = false;
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

<div class="flex h-full bg-(--tw-canvas) text-sm text-(--tw-text)">
  <!-- ==================== SIDEBAR ==================== -->
  <nav
    class="group/nav relative flex w-16 shrink-0 flex-col border-r border-(--tw-border) bg-(--tw-subtle) p-2 transition-[width] duration-150 {sidebarExpanded
      ? 'w-60'
      : 'w-16'}"
  >
    <div
      class="flex h-10 items-center gap-2 border-b border-(--tw-border) px-1"
      ondblclick={() => (sidebarExpanded = !sidebarExpanded)}
    >
      <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--tw-accent) text-white">⛏</span>
      {#if sidebarExpanded}
        <span class="truncate text-[13px] font-semibold">TwilightMC</span>
      {/if}
    </div>

    <div class="mt-1 flex flex-1 flex-col gap-0.5">
      {#each nav as item (item.id)}
        <button
          class="flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} {active
          === item.id
            ? 'bg-(--tw-accent) font-medium text-white'
            : 'text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)'}"
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
        class="flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)"
        title="Add Instance"
        onclick={openWizard}
      >
        <span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span>
        {#if sidebarExpanded}
          <span class="truncate text-[13px]">Add Instance</span>
        {/if}
      </button>

      <button
        class="mt-3 border-t border-(--tw-border) flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)"
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
      class="mt-2 flex items-center gap-2 rounded border border-(--tw-border) bg-(--tw-surface) p-2 {sidebarExpanded
        ? ''
        : 'justify-center'}"
      title={activeAccount ? activeAccount.username : 'Add account'}
      onclick={() => (modalOpen = true)}
    >
      <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--tw-accent)/20 text-[11px] font-bold text-(--tw-accent)">
        {#if activeAccount}{activeAccount.username[0]?.toUpperCase()}{:else}?{/if}
      </span>
      {#if sidebarExpanded}
        <span class="min-w-0 flex-1 text-left">
          <span class="block truncate text-[12px] font-medium">{activeAccount ? activeAccount.username : 'Add account'}</span>
          <span class="block text-[10px] text-(--tw-muted)">
            {activeAccount ? typeLabel(activeAccount) : 'Offline'}
          </span>
        </span>
      {/if}
    </button>

    <!-- expand/collapse chevron: appears on hover in compact mode -->
    <button
      class="absolute top-12 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--tw-border) bg-(--tw-surface) text-[9px] text-(--tw-muted) transition-opacity duration-100 hover:text-(--tw-text) {sidebarExpanded
        ? ''
        : 'opacity-0 group-hover/nav:opacity-100'}"
      onclick={() => (sidebarExpanded = !sidebarExpanded)}
    >
      {sidebarExpanded ? '«' : '»'}
    </button>
  </nav>

  <!-- ==================== RIGHT COLUMN ==================== -->
  <div class="flex min-w-0 flex-1 flex-col">
    <header class="flex h-11 shrink-0 items-center justify-between border-b border-(--tw-border) bg-(--tw-subtle) px-4">
      <div class="flex items-center gap-2.5">
        <span class="rounded bg-(--tw-accent)/15 px-2 py-0.5 text-xs font-medium text-(--tw-accent)">Bolide v{version}</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xs text-(--tw-muted)">{status}</span>
        <button
          class="rounded px-2 py-1 text-xs {drawerOpen ? 'text-(--tw-accent)' : 'text-(--tw-muted) hover:text-(--tw-text)'}"
          onclick={() => (drawerOpen = !drawerOpen)}
        >
          Console
        </button>
      </div>
    </header>

    <main class="min-w-0 flex-1 overflow-y-auto p-6">
      {#if active === 'instances'}
        <!-- action toolbar -->
        <div class="mb-4 flex items-center gap-2">
          <button
            class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover)"
            onclick={openWizard}
          >
            ＋ Add Instance
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text) disabled:opacity-40"
            disabled={!storage}
            title={storage ? storage.shared_dir : ''}
            onclick={openSharedFolder}
          >
            📂 Folders
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)"
            onclick={() => {
              settingsOpen = true;
              loadPrefs();
              if (!storage) loadStorage();
            }}
          >
            ⚙ Settings
          </button>
          <span class="flex-1"></span>
          <button
            class="rounded px-2 py-1 text-sm text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)"
            title={theme === 'dark' ? 'Twilight Light' : 'Twilight Dark'}
            onclick={toggleTheme}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>

        <!-- instance grid -->
        <div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3">
          {#each instances as inst (inst.id)}
            <div class="relative flex flex-col gap-2 rounded border border-(--tw-border) bg-(--tw-surface) p-3">
              <div class="flex items-center gap-2.5">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-(--tw-accent)/15 text-base">⛏</span>
                <div class="min-w-0 flex-1">
                  <div class="truncate text-[13px] font-medium">{inst.name}</div>
                  <div class="mt-0.5 flex items-center gap-1">
                    <span class="rounded bg-(--tw-accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--tw-accent)">{inst.version}</span>
                    <span class="rounded bg-(--tw-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--tw-muted)">{inst.loader}</span>
                  </div>
                </div>
                <button
                  class="shrink-0 rounded px-1.5 text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)"
                  title="Menu"
                  onclick={() => (menuFor = menuFor === inst.id ? null : inst.id)}
                >
                  ⋯
                </button>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[11px] text-(--tw-muted)">
                  {inst.last_played ? new Date(inst.last_played * 1000).toLocaleDateString() : 'Never played'}
                </span>
                <button
                  class="ondblclick={() => launchInstance(inst.id)} rounded bg-(--tw-accent) px-3 py-1 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                  disabled={gameRunning}
                  title="Play (double-click the card also launches)"
                  onclick={() => launchInstance(inst.id)}
                >
                  ▶ Play
                </button>
              </div>

              {#if menuFor === inst.id}
                <div class="fixed inset-0 z-20" onclick={() => (menuFor = null)}></div>
                <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--tw-border) bg-(--tw-surface) py-1 shadow-xl">
                  <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--tw-subtle) disabled:opacity-40" disabled={gameRunning} onclick={() => (menuFor = null, launchInstance(inst.id))}>
                    ▶ Play
                  </button>
                  <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--tw-subtle)" onclick={() => (menuFor = null, openEdit(inst))}>
                    ✎ Edit Instance
                  </button>
                  <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--tw-subtle)" onclick={() => (menuFor = null, openInstanceFolder(inst.id))}>
                    📂 Open Folder
                  </button>
                  <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--tw-subtle)" onclick={() => (menuFor = null, drawerOpen = true)}>
                    ▤ View Logs
                  </button>
                  <div class="my-1 border-t border-(--tw-border)"></div>
                  <button class="block w-full px-3 py-1.5 text-left text-[12px] text-red-400 hover:bg-red-500/10" onclick={() => (menuFor = null, deleteInstance(inst.id))}>
                    ✕ Delete
                  </button>
                </div>
              {/if}
            </div>
          {:else}
            <div class="col-span-full rounded border border-(--tw-border) bg-(--tw-surface) p-6 text-center text-(--tw-muted)">
              {instancesError ? instancesError : 'No instances yet — open the wizard or install a modpack.'}
            </div>
          {/each}
        </div>
      {:else}
        <h2 class="text-lg font-semibold">{sections[active][0]}</h2>
        <p class="mt-1 text-(--tw-muted)">{sections[active][1]}</p>
      {/if}
    </main>

    {#if drawerOpen}
      <section class="flex h-56 shrink-0 flex-col border-t border-(--tw-border) bg-(--tw-subtle)">
        <div class="flex items-center justify-between border-b border-(--tw-border) px-3 py-1.5">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--tw-muted)">
            Game console{gameRunning ? ' · running' : ''}
          </span>
          <div class="flex gap-3">
            <button class="text-[11px] text-(--tw-muted) hover:text-(--tw-text)" onclick={clearLogs}>Clear</button>
            <button class="text-[11px] text-(--tw-muted) hover:text-(--tw-text)" onclick={copyLogs}>Copy</button>
            <button class="text-[11px] text-red-400 hover:text-red-300 disabled:opacity-40" disabled={!gameRunning} onclick={killGame}>Kill</button>
            <button class="text-[11px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (drawerOpen = false)}>Hide</button>
          </div>
        </div>
        <div bind:this={consoleEl} class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5">
          {#each consoleLines as entry, i (i)}
            <div class="whitespace-pre-wrap break-all {lineClass(entry)}">
              {entry.line}
            </div>
          {:else}
            <div class="text-(--tw-muted)">Game output appears here once you launch.</div>
          {/each}
        </div>
      </section>
    {/if}
  </div>

  {#if modalOpen}
    <!-- backdrop click closes; panel click does not -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget) modalOpen = false;
      }}
    >
      <div class="w-[440px] rounded-lg border border-(--tw-border) bg-(--tw-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--tw-border) px-4 py-3">
          <h3 class="text-sm font-semibold">Accounts</h3>
          <button class="text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (modalOpen = false)}>✕</button>
        </div>

        <div class="max-h-72 overflow-y-auto">
          {#each accounts as account (account.id)}
            <div
              class="flex items-center gap-3 border-b border-(--tw-border) px-4 py-2.5 {activeAccount?.id === account.id
                ? 'bg-(--tw-accent)/10'
                : ''}"
            >
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--tw-accent)/20 text-sm font-bold text-(--tw-accent)">
                {account.username[0]?.toUpperCase()}
              </span>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <span class="truncate text-[13px] font-medium">{account.username}</span>
                  <span class="rounded bg-(--tw-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--tw-muted)">
                    {typeLabel(account)}
                  </span>
                  {#if activeAccount?.id === account.id}
                    <span class="text-[10px] font-semibold tracking-wide text-(--tw-accent)">ACTIVE</span>
                  {/if}
                </div>
                <div class="truncate text-[11px] text-(--tw-muted)">{account.uuid}</div>
              </div>
              <div class="flex shrink-0 gap-1">
                {#if activeAccount?.id !== account.id}
                  <button
                    class="rounded px-2 py-1 text-[11px] text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)"
                    onclick={() => setActive(account.id)}>Set active</button
                  >
                {/if}
                <button
                  class="rounded px-2 py-1 text-[11px] text-(--tw-muted) hover:bg-red-500/10 hover:text-red-400"
                  onclick={() => removeAccount(account.id)}>Remove</button
                >
              </div>
            </div>
          {:else}
            <p class="px-4 py-3 text-[12px] text-(--tw-muted)">No accounts yet — add an offline profile below.</p>
          {/each}
        </div>

        <form
          class="flex items-center gap-2 border-t border-(--tw-border) p-3"
          onsubmit={(e) => {
            e.preventDefault();
            addAccount();
          }}
        >
          <input
            class="h-8 flex-1 rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
            placeholder="Offline username (3-16 letters, digits, _)"
            bind:value={newUsername}
          />
          <button
            type="submit"
            class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
            disabled={!newUsername}>Add</button
          >
        </form>
        {#if accountError}
          <p class="border-t border-(--tw-border) px-4 py-2 text-[12px] text-red-400">{accountError}</p>
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
      <div class="flex h-[480px] w-[560px] flex-col rounded-lg border border-(--tw-border) bg-(--tw-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--tw-border) px-4 py-3">
          <h3 class="text-sm font-semibold">New Instance</h3>
          <button class="text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (wizardOpen = false)}>✕</button>
        </div>
        <div class="flex items-center gap-1 border-b border-(--tw-border) px-3 py-2 text-[11px]">
          <span class="px-2 py-1 text-(--tw-muted) {wizardTab === 1 ? 'bg-(--tw-subtle) rounded text-(--tw-text) font-medium' : ''}">1 · Version</span>
          <span class="px-2 py-1 text-(--tw-muted) {wizardTab === 2 ? 'bg-(--tw-subtle) rounded text-(--tw-text) font-medium' : ''}">2 · Loader</span>
          <span class="px-2 py-1 text-(--tw-muted) {wizardTab === 3 ? 'bg-(--tw-subtle) rounded text-(--tw-text) font-medium' : ''}">3 · Modpack</span>
        </div>

        {#if wizardTab === 1}
          <div class="min-h-0 flex-1 overflow-y-auto p-4">
            <div class="flex items-center justify-between">
              <button
                class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                disabled={fetchingVersions}
                onclick={fetchVersions}
              >
                {fetchingVersions ? 'Fetching…' : catalog ? 'Refresh' : 'Load version list'}
              </button>
              <div class="flex gap-1">
                {#each [['all', 'All'], ['releases', 'Releases'], ['snapshots', 'Snapshots']] as [id, label] (id)}
                  <button
                    class="rounded px-2 py-1 text-[11px] {typeFilter === id
                      ? 'bg-(--tw-accent) font-medium text-white'
                      : 'text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text)'}"
                    onclick={() => (typeFilter = id)}
                  >
                    {label}
                  </button>
                {/each}
              </div>
            </div>
            <input
              class="mt-3 h-8 w-full rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
              placeholder={catalog ? `Search ${catalog.total} versions…` : 'Load the version list first'}
              bind:value={versionQuery}
              disabled={!catalog}
            />
            <ul class="mt-3 h-full max-h-[280px] divide-y divide-(--tw-border) overflow-y-auto rounded border border-(--tw-border) bg-(--tw-subtle)">
              {#each filteredVersions() as v (v.id)}
                <li class="flex items-center gap-3 px-3 py-2 {wizardVersion === v.id ? 'bg-(--tw-accent)/10' : ''}">
                  <button
                    class="h-8 min-w-0 flex-1 cursor-pointer text-left"
                    onclick={() => {
                      wizardVersion = v.id;
                      wizardName = wizardName || v.id;
                    }}
                  >
                    <span class="text-[13px]">{v.id}</span>
                    {#if v.is_latest_release}
                      <span class="ml-1 rounded bg-(--tw-star)/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-(--tw-star)">LATEST</span>
                    {/if}
                    <span class="ml-2 text-[10px] uppercase tracking-wide {v.version_type === 'release' ? 'text-(--tw-muted)' : 'text-(--tw-star)/80'}">{v.version_type}</span>
                  </button>
                </li>
              {:else}
                <li class="px-3 py-3 text-[12px] text-(--tw-muted)">
                  {catalog ? 'No versions match this filter.' : versionsError ?? 'Choose a source…'}
                </li>
              {/each}
            </ul>
          </div>
        {:else if wizardTab === 2}
          <div class="flex-1 overflow-y-auto p-4">
            <label class="block text-[12px] font-medium text-(--tw-muted)">Instance name</label>
            <input
              class="mt-1 h-8 w-full rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] outline-none focus:border-(--tw-accent)"
              bind:value={wizardName}
              placeholder={wizardVersion || '1.21.4'}
            />
            <div class="mt-3 flex gap-2">
              {#each [['', 'Vanilla'], ['fabric', 'Fabric'], ['quilt', 'Quilt']] as [id, label] (id)}
                <button
                  class="flex-1 rounded border border-(--tw-border) px-3 py-2 text-[13px] {wizardLoader === id
                    ? 'border-(--tw-accent) bg-(--tw-accent)/10 font-medium text-(--tw-accent)'
                    : 'text-(--tw-muted) hover:border-(--tw-accent) hover:text-(--tw-text)'}"
                  onclick={() => (wizardLoader = id)}
                >
                  {label}
                </button>
              {/each}
            </div>
            {#if wizardLoader}
              <label class="mt-3 block text-[12px] font-medium text-(--tw-muted)">{wizardLoader} version (empty = latest stable)</label>
              <input
                class="mt-1 h-8 w-full rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] outline-none focus:border-(--tw-accent)"
                bind:value={wizardLoaderVersion}
                placeholder="latest"
              />
            {/if}
          </div>
        {:else}
          <div class="flex-1 overflow-y-auto p-4">
            <div
              class="flex h-40 flex-col items-center justify-center rounded border border-dashed border-(--tw-border) text-center text-(--tw-muted) hover:border-(--tw-accent)"
              ondragover={(e) => e.preventDefault()}
              ondrop={(e) => {
                e.preventDefault();
                const path = e.dataTransfer?.files?.[0]?.path;
                if (path) modpackTarget = path;
              }}
            >
              <span class="text-xl">⤓</span>
              <span class="mt-2 text-[12px]">Drop an <span class="text-(--tw-text)">.mrpack</span> here</span>
              <span class="text-[11px]">or paste its path / URL below</span>
            </div>
            <input
              class="mt-3 h-8 w-full rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
              placeholder="C:\downloads\pack.mrpack  |  https://modrinth.com/…"
              bind:value={modpackTarget}
            />
            <p class="mt-2 text-[11px] text-(--tw-muted)">Modrinth packs stage their own instance (name from the pack slug).</p>
          </div>
        {/if}

        <div class="flex items-center justify-between border-t border-(--tw-border) px-4 py-3">
          {#if wizardTab === 1}
            <span class="text-[12px] text-(--tw-muted)">{wizardVersion ? `Selected ${wizardVersion}` : 'Pick a version to continue'}</span>
            <button
              class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
              disabled={!wizardVersion}
              onclick={() => (wizardTab = 2)}
            >
              Next
            </button>
          {:else if wizardTab === 2}
            <button class="rounded px-3 py-1.5 text-[12px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (wizardTab = 1)}>Back</button>
            <div class="flex gap-2">
              <button class="rounded px-3 py-1.5 text-[12px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (wizardTab = 3)}>Modpack instead</button>
              <button
                class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover)"
                onclick={createFromWizard}
              >
                Create Instance
              </button>
            </div>
          {:else}
            <button class="rounded px-3 py-1.5 text-[12px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (wizardTab = 2)}>Back</button>
            <button
              class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
              disabled={modpackBusy || !modpackTarget.trim()}
              onclick={installFromWizard}
            >
              {modpackBusy ? 'Installing…' : 'Install .mrpack'}
            </button>
          {/if}
        </div>
        {#if wizardError}
          <p class="border-t border-(--tw-border) px-4 py-2 text-[12px] text-red-400">{wizardError}</p>
        {/if}
      </div>
    </div>
  {/if}

  {#if editFor}
    <!-- Edit Instance modal -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget) editFor = null;
      }}
    >
      <div class="flex h-[480px] w-[640px] overflow-hidden rounded-lg border border-(--tw-border) bg-(--tw-surface) shadow-2xl">
        <div class="flex w-44 shrink-0 flex-col gap-0.5 border-r border-(--tw-border) bg-(--tw-subtle) p-2">
          <h3 class="mt-1 px-2 text-[13px] font-semibold">{editFor.name}</h3>
          <p class="px-2 text-[11px] text-(--tw-muted)">{editFor.version} · {editFor.loader}</p>
          <div class="mt-3 border-t border-(--tw-border)"></div>
          {#each ['components', 'mods', 'screenshots', 'logs'] as tab (tab)}
            <button
              class="rounded px-2 py-1.5 text-left text-[12px] {editTab === tab
                ? 'bg-(--tw-accent)/15 font-medium text-(--tw-accent)'
                : 'text-(--tw-muted) hover:text-(--tw-text)'}"
              onclick={() => (editTab = tab)}
            >
              {tab === 'components'
                ? 'Version Components'
                : tab === 'screenshots'
                  ? 'Screenshots'
                  : tab[0].toUpperCase() + tab.slice(1)}
            </button>
          {/each}
          <button class="mt-auto rounded px-2 py-1.5 text-left text-[12px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (editFor = null)}>
            Close
          </button>
        </div>

        <div class="min-w-0 flex-1 overflow-y-auto p-4">
          {#if editTab === 'components'}
            <div class="rounded border border-(--tw-border) bg-(--tw-subtle) p-3 text-[12px]">
              <div class="font-medium">Minecraft {editFor.version}</div>
              <div class="mt-1 text-(--tw-muted)">Loader: {editFor.loader}</div>
              <div class="mt-1 text-(--tw-muted)">
                Last played: {editFor.last_played ? new Date(editFor.last_played * 1000).toLocaleDateString() : 'never'}
              </div>
              <p class="mt-3 text-[11px] text-(--tw-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p>
            </div>
          {:else if editTab === 'mods'}
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-semibold uppercase tracking-wide text-(--tw-muted)">Mods ({mods.length})</span>
              <button class="text-[11px] text-(--tw-muted) hover:text-(--tw-text)" onclick={refreshMods}>Refresh</button>
            </div>
            <div class="mt-2 flex items-center gap-2">
              <input
                class="h-8 flex-1 rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
                placeholder="Path to a .jar file…"
                bind:value={importPath}
              />
              <button
                class="rounded bg-(--tw-accent) px-3 py-1 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                disabled={modsBusy || !importPath.trim()}
                onclick={importMod}
              >
                Add Mod
              </button>
            </div>
            <ul class="mt-3 max-h-72 divide-y divide-(--tw-border) overflow-y-auto rounded border border-(--tw-border) bg-(--tw-subtle)">
                {#each mods as mod (mod.base)}
                  <li class="flex items-center gap-3 px-3 py-2">
                    <button
                      class="flex h-5 w-9 shrink-0 items-center rounded-full border border-(--tw-border) px-0.5 {mod.enabled
                        ? 'justify-end bg-(--tw-accent)'
                        : 'justify-start bg-(--tw-canvas)'}"
                      title={mod.enabled ? 'Disable' : 'Enable'}
                      onclick={() => toggleMod(mod.base, !mod.enabled)}
                    >
                      <span class="h-3.5 w-3.5 rounded-full bg-(--tw-surface)"></span>
                    </button>
                    <span class="min-w-0 flex-1 truncate text-[13px]" class:opacity-50={!mod.enabled}>{mod.base}</span>
                    <span class="text-[10px] uppercase tracking-wide {mod.enabled ? 'text-(--tw-muted)' : 'text-(--tw-star)'}">
                      {mod.enabled ? 'enabled' : 'disabled'}
                    </span>
                  </li>
                {:else}
                  <li class="px-3 py-3 text-[12px] text-(--tw-muted)">No mods — drop .jar files into the instance mods dir or paste a path above.</li>
                {/each}
              </ul>
              {#if modsMsg}
              <p class="mt-2 text-[12px] text-red-400">{modsMsg}</p>
            {/if}
          {:else if editTab === 'screenshots'}
            <div class="rounded border border-(--tw-border) bg-(--tw-subtle) p-4 text-[12px] text-(--tw-muted)">
              Screenshot browser (thumbnail grid over <span class="text-(--tw-text)">minecraft/screenshots</span>) lands in a later milestone.
            </div>
          {:else}
            <div class="flex h-full max-h-80 flex-col rounded border border-(--tw-border) bg-(--tw-subtle) p-4 text-[12px] text-(--tw-muted)">
              <p>Live game output renders in the console drawer with level coloring.</p>
              <button class="mt-3 w-fit rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover)" onclick={() => (drawerOpen = true)}>
                Open console
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  {#if settingsOpen}
    <!-- Settings modal -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onclick={(e) => {
        if (e.target === e.currentTarget) settingsOpen = false;
      }}
    >
      <div class="flex max-h-[560px] w-[520px] flex-col overflow-hidden rounded-lg border border-(--tw-border) bg-(--tw-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--tw-border) px-4 py-3">
          <h3 class="text-sm font-semibold">Settings</h3>
          <button class="text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (settingsOpen = false)}>✕</button>
        </div>

        <div class="min-h-0 flex-1 overflow-y-auto p-4">
          <h4 class="text-[11px] font-semibold uppercase tracking-wide text-(--tw-muted)">Java</h4>
          <select
            class="mt-2 h-8 w-full rounded border border-(--tw-border) bg-(--tw-subtle) px-2 text-[13px] outline-none focus:border-(--tw-accent)"
            bind:value={javaPath}
          >
            <option value="">Auto-discovery (recommended)</option>
            {#each runtimes as r (r.executable)}
              <option value={r.executable}>Java {r.major} — {r.home}</option>
            {/each}
          </select>
          {#if !runtimes.length}
            <p class="mt-2 text-[11px] text-(--tw-muted)">{scanning ? 'Probing system roots…' : 'No runtimes detected.'}</p>
          {/if}
          <button class="mt-2 text-[11px] text-(--tw-muted) hover:text-(--tw-text)" onclick={scanJava}>Rescan JREs</button>

          <h4 class="mt-5 text-[11px] font-semibold uppercase tracking-wide text-(--tw-muted)">Memory</h4>
          <div class="mt-2 flex items-center gap-2">
            <span class="w-14 text-[12px] text-(--tw-muted)">-Xms</span>
            <input type="range" min="0" max="16384" step="256" bind:value={minMem} class="flex-1 accent-[var(--tw-accent)]" />
            <input type="number" min="0" max="65536" step="256" bind:value={minMem} class="h-7 w-20 rounded border border-(--tw-border) bg-(--tw-subtle) px-2 text-right text-[12px] outline-none focus:border-(--tw-accent)" />
            <span class="text-[11px] text-(--tw-muted)">MiB</span>
          </div>
          <div class="mt-1 flex items-center gap-2">
            <span class="w-14 text-[12px] text-(--tw-muted)">-Xmx</span>
            <input type="range" min="0" max="16384" step="256" bind:value={maxMem} class="flex-1 accent-[var(--tw-accent)]" />
            <input type="number" min="0" max="65536" step="256" bind:value={maxMem} class="h-7 w-20 rounded border border-(--tw-border) bg-(--tw-subtle) px-2 text-right text-[12px] outline-none focus:border-(--tw-accent)" />
            <span class="text-[11px] text-(--tw-muted)">MiB</span>
          </div>
          <p class="mt-1 text-[11px] text-(--tw-muted)">0 = launcher default. Recommended: 2048–4096.</p>

          <h4 class="mt-5 text-[11px] font-semibold uppercase tracking-wide text-(--tw-muted)">Storage</h4>
          {#if storage}
            <div class="mt-2 rounded border border-(--tw-border) bg-(--tw-subtle) p-3">
              <div class="text-[11px] text-(--tw-muted)">Shared library {storage.is_default_shared ? '(default)' : '(custom)'}</div>
              <div class="mt-2 flex gap-2">
                <input
                  class="h-8 flex-1 rounded border border-(--tw-border) bg-(--tw-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
                  placeholder={storage.shared_dir}
                  bind:value={sharedInput}
                />
                <button
                  class="rounded bg-(--tw-accent) px-3 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                  disabled={storageBusy}
                  onclick={saveShared}>Save</button
                >
                {#if !storage.is_default_shared}
                  <button
                    class="rounded px-3 text-[12px] text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text) disabled:opacity-40"
                    disabled={storageBusy}
                    onclick={resetShared}>Reset</button
                  >
                {/if}
              </div>
              <div class="mt-3 flex items-center justify-between gap-2">
                <span class="min-w-0 flex-1 truncate text-[11px] text-(--tw-muted)">Staging: {storage.staging_root}</span>
                <button
                  class="shrink-0 rounded px-3 py-1 text-[11px] text-(--tw-muted) hover:bg-(--tw-subtle) hover:text-(--tw-text) disabled:opacity-40"
                  disabled={storageBusy || gameRunning}
                  onclick={cleanStaging}
                >
                  Clean staging
                </button>
              </div>
            </div>
          {/if}
          {#if javaMsg || storageMsg}
            <p class="mt-3 text-[12px] {javaMsg ? 'text-(--tw-accent)' : 'text-(--tw-muted)'}">{javaMsg || storageMsg}</p>
          {/if}
        </div>

        <div class="flex items-center justify-end gap-2 border-t border-(--tw-border) px-4 py-3">
          <button class="rounded px-3 py-1.5 text-[12px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (settingsOpen = false)}>Close</button>
          <button class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover)" onclick={savePrefs}>Save Java</button>
        </div>
      </div>
    </div>
  {/if}
</div>
