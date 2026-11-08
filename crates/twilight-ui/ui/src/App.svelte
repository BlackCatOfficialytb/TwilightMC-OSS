<script>
  import { onMount } from 'svelte';

  let version = $state('…');
  let active = $state('instances');

  // Twilight Light/Dark: persisted, defaults to the OS preference.
  let theme = $state(
    localStorage.getItem('twilight-theme') ??
      (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );

  $effect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('twilight-theme', theme);
  });

  // No crutch states or animations: a busy desktop reads one crisp status word.
  let status = $state('Ready');

  const nav = [
    { id: 'instances', label: 'Instances' },
    { id: 'accounts', label: 'Accounts' },
    { id: 'settings', label: 'Settings' },
    { id: 'logs', label: 'Logs' },
  ];

  const sections = {
    instances: ['Instances', 'Your library — add instances from the version browser and play them.'],
    accounts: ['Accounts', 'Profiles live in the account manager; launch uses the active profile.'],
    settings: ['Settings', 'Java discovery and storage configuration (shared library, staging cleanup).'],
    logs: ['Logs', 'Live game output; the Console button in the top bar toggles the bottom drawer.'],
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

  // ---- vanilla version picker state ----
  let catalog = $state(null);
  let fetchingVersions = $state(false);
  let versionsError = $state('');
  let versionQuery = $state('');
  let typeFilter = $state('all');

  async function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  async function scanJava() {
    scanning = true;
    javaError = '';
    try {
      runtimes = await api('list_java');
    } catch (e) {
      javaError = String(e);
    } finally {
      scanning = false;
    }
    if (runtimes.length === 0 && !javaError) {
      javaError = 'No Java installations found — install a JDK or set JAVA_HOME.';
    }
  }

  async function fetchVersions() {
    fetchingVersions = true;
    versionsError = '';
    try {
      catalog = await api('list_versions');
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

  // Minecraft log levels (`[time] [thread/LEVEL]:`) beat the raw stream.
  function lineClass(entry) {
    if (entry.stream === 'stderr' || entry.line.includes('/ERROR]')) return 'text-red-400';
    if (entry.line.includes('/WARN]')) return 'text-(--tw-star)';
    return 'text-(--tw-text)';
  }

  // ---- storage settings state ----
  let storage = $state(null);
  let sharedInput = $state('');
  let storageBusy = $state(false);
  let storageMsg = $state('');

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

  // ---- instance grid state ----
  let instances = $state([]);
  let instancesError = $state('');
  let showBrowser = $state(false);

  async function loadInstances() {
    try {
      instances = await api('get_instances');
      if (instances.length === 0) showBrowser = true;
    } catch (e) {
      instancesError = String(e);
    }
  }

  async function createInstance(v) {
    instancesError = '';
    try {
      await api('create_instance', { name: v.id, version: v.id, loader: null });
      await loadInstances();
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
        if (modalOpen) modalOpen = false;
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
          await window.__TAURI__.event.listen('launch-log', (e) => logLine(e.payload))
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

<div class="flex h-full flex-col bg-(--tw-canvas) text-sm text-(--tw-text)">
  <header class="flex h-11 shrink-0 items-center justify-between border-b border-(--tw-border) bg-(--tw-subtle) px-4">
    <div class="flex items-center gap-2.5">
      <h1 class="text-[15px] font-semibold tracking-wide text-(--tw-text)">TwilightMC</h1>
      <span class="rounded bg-(--tw-accent)/15 px-2 py-0.5 text-xs font-medium text-(--tw-accent)">Bolide v{version}</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xs text-(--tw-muted)">{status}</span>
      <button
        class="rounded px-1.5 py-0.5 text-sm hover:bg-(--tw-surface)"
        title={theme === 'dark' ? 'Twilight Light' : 'Twilight Dark'}
        onclick={() => (theme = theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
      <button
        class="rounded px-2 py-1 text-xs {drawerOpen ? 'text-(--tw-accent)' : 'text-(--tw-muted) hover:text-(--tw-text)'}"
        onclick={() => (drawerOpen = !drawerOpen)}
      >
        Console
      </button>
      <button
        class="flex items-center gap-2 rounded px-2 py-1 {activeAccount
          ? 'text-(--tw-text) hover:bg-(--tw-surface)'
          : 'text-(--tw-muted) hover:bg-(--tw-surface) hover:text-(--tw-text)'}"
        onclick={() => (modalOpen = true)}
      >
        <span class="flex h-5 w-5 items-center justify-center rounded bg-(--tw-accent)/20 text-[10px] font-bold text-(--tw-accent)">
          {#if activeAccount}{activeAccount.username[0]?.toUpperCase()}{:else}?{/if}
        </span>
        <span class="text-xs">{activeAccount ? activeAccount.username : 'Add account'}</span>
      </button>
    </div>
  </header>

  <div class="flex min-h-0 flex-1">
    <nav class="flex w-44 shrink-0 flex-col gap-0.5 border-r border-(--tw-border) bg-(--tw-subtle) p-2">
      {#each nav as item (item.id)}
        <button
          class="rounded px-3 py-1.5 text-left text-[13px] {active === item.id
            ? 'bg-(--tw-accent) font-medium text-white'
            : 'text-(--tw-muted) hover:bg-(--tw-surface) hover:text-(--tw-text)'}"
          onclick={() => (active = item.id)}
        >
          {item.label}
        </button>
      {/each}
    </nav>

    <main class="min-w-0 flex-1 overflow-y-auto p-6">
      <h2 class="text-lg font-semibold text-(--tw-text)">{sections[active][0]}</h2>
      <p class="mt-1 text-(--tw-muted)">{sections[active][1]}</p>

      {#if active === 'instances'}
        <section class="mt-6 max-w-4xl">
          <div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3">
            {#each instances as inst (inst.id)}
              <div class="flex flex-col gap-2 rounded border border-(--tw-border) bg-(--tw-surface) p-3">
                <div class="flex items-center gap-2.5">
                  <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-(--tw-accent)/15 text-base">⛏</span>
                  <div class="min-w-0 flex-1">
                    <div class="truncate text-[13px] font-medium text-(--tw-text)">{inst.name}</div>
                    <div class="mt-0.5 flex items-center gap-1">
                      <span class="rounded bg-(--tw-accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--tw-accent)">{inst.version}</span>
                      <span class="rounded bg-(--tw-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--tw-muted)">{inst.loader}</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[11px] text-(--tw-muted)">
                    {inst.last_played ? new Date(inst.last_played * 1000).toLocaleDateString() : 'Never played'}
                  </span>
                  <button
                    class="rounded bg-(--tw-accent) px-3 py-1 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                    disabled={gameRunning}
                    onclick={() => launchInstance(inst.id)}
                  >
                    Play
                  </button>
                </div>
              </div>
            {:else}
              {#if instancesError}
                <p class="col-span-full text-[12px] text-(--tw-star)">{instancesError}</p>
              {:else}
                <p class="col-span-full text-[12px] text-(--tw-muted)">No instances yet — create one below.</p>
              {/if}
            {/each}
            <button
              class="flex min-h-[100px] items-center justify-center rounded border border-dashed border-(--tw-border) text-[13px] text-(--tw-muted) hover:border-(--tw-accent) hover:text-(--tw-accent)"
              onclick={() => (showBrowser = !showBrowser)}
            >
              {showBrowser ? 'Close browser' : '＋ Add Instance'}
            </button>
          </div>

          {#if showBrowser}
            <div class="mt-6 border-t border-(--tw-border) pt-4">
              <div class="flex items-center justify-between">
                <h3 class="text-[13px] font-semibold uppercase tracking-wide text-(--tw-muted)">Version browser</h3>
                <button
                  class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                  disabled={fetchingVersions}
                  onclick={fetchVersions}
                >
                  {fetchingVersions ? 'Fetching…' : catalog ? 'Refresh' : 'Load version list'}
                </button>
              </div>

              {#if fetchingVersions}
                <p class="mt-3 text-[12px] text-(--tw-muted)">Trying piston-meta, then Prism and Freesm mirrors…</p>
              {:else if catalog}
                <div class="mt-3 flex items-center gap-2">
                  <input
                    class="h-8 flex-1 rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] text-(--tw-text) outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
                    placeholder="Search {catalog.total} versions…"
                    bind:value={versionQuery}
                  />
                  <div class="flex gap-1">
                    {#each [['all', 'All'], ['releases', 'Releases'], ['snapshots', 'Snapshots']] as [id, label] (id)}
                      <button
                        class="rounded px-2 py-1 text-[11px] {typeFilter === id
                          ? 'bg-(--tw-accent) font-medium text-white'
                          : 'text-(--tw-muted) hover:bg-(--tw-surface) hover:text-(--tw-text)'}"
                        onclick={() => (typeFilter = id)}
                      >
                        {label}
                      </button>
                    {/each}
                  </div>
                </div>

                <ul class="mt-2 max-h-96 divide-y divide-(--tw-border) overflow-y-auto rounded border border-(--tw-border) bg-(--tw-subtle)">
                  {#each filteredVersions() as v (v.id)}
                    <li class="flex items-center gap-3 px-3 py-2">
                      <button
                        class="shrink-0 rounded bg-(--tw-accent)/70 px-2 py-0.5 text-[11px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-30"
                        disabled={gameRunning}
                        onclick={() => createInstance(v)}
                      >
                        Create
                      </button>
                      <span class="min-w-0 flex-1 truncate text-[13px] text-(--tw-text)">
                        {v.id}
                        {#if v.is_latest_release}
                          <span class="ml-1 rounded bg-(--tw-star)/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-(--tw-star)">LATEST</span>
                        {/if}
                      </span>
                      <span class="w-20 shrink-0 text-right text-[10px] uppercase tracking-wide {v.version_type === 'release' ? 'text-(--tw-muted)' : 'text-(--tw-star)/80'}">
                        {v.version_type}
                      </span>
                      {#if v.release_time}
                        <span class="w-24 shrink-0 text-right text-[11px] text-(--tw-muted)">{v.release_time.slice(0, 10)}</span>
                      {/if}
                    </li>
                  {:else}
                    <li class="px-3 py-3 text-[12px] text-(--tw-muted)">No versions match this filter.</li>
                  {/each}
                </ul>
                {#if catalog.latest_release_id}
                  <p class="mt-2 text-[11px] text-(--tw-muted)">
                    Source has {catalog.total} versions; latest release {catalog.latest_release_id}.
                  </p>
                {/if}
              {/if}
              {#if versionsError && !fetchingVersions}
                <p class="mt-3 text-[12px] text-(--tw-star)">{versionsError}</p>
              {/if}
            </div>
          {/if}
        </section>
      {/if}

      {#if active === 'accounts'}
        <section class="mt-6">
          <button
            class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover)"
            onclick={() => (modalOpen = true)}
          >
            Open account manager
          </button>
          {#if activeAccount}
            <p class="mt-3 text-[12px] text-(--tw-muted)">
              Launching as <span class="text-(--tw-text)">{activeAccount.username}</span>.
            </p>
          {:else}
            <p class="mt-3 text-[12px] text-(--tw-muted)">No active profile — launches fall back to the default name.</p>
          {/if}
        </section>
      {/if}

      {#if active === 'settings'}
        <section class="mt-6 max-w-2xl">
          <div class="flex items-center justify-between">
            <h3 class="text-[13px] font-semibold uppercase tracking-wide text-(--tw-muted)">Java runtimes</h3>
            <button
              class="rounded bg-(--tw-accent) px-3 py-1.5 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
              disabled={scanning}
              onclick={scanJava}
            >
              {scanning ? 'Scanning…' : runtimes.length ? 'Rescan' : 'Scan system'}
            </button>
          </div>

          {#if scanning}
            <p class="mt-3 text-[12px] text-(--tw-muted)">Probing system roots, PATH and registry…</p>
          {:else if runtimes.length}
            <ul class="mt-3 divide-y divide-(--tw-border) rounded border border-(--tw-border) bg-(--tw-subtle)">
              {#each runtimes as r (r.executable)}
                <li class="flex items-center gap-3 px-3 py-2">
                  <span class="flex h-6 w-9 shrink-0 items-center justify-center rounded bg-(--tw-accent)/20 text-[11px] font-bold text-(--tw-accent)">
                    {r.major}
                  </span>
                  <div class="min-w-0 flex-1">
                    <div class="text-[13px] font-medium text-(--tw-text)">Java {r.version}</div>
                    <div class="truncate text-[11px] text-(--tw-muted)">{r.home}</div>
                  </div>
                </li>
              {/each}
            </ul>
          {/if}
          {#if javaError && !scanning}
            <p class="mt-3 text-[12px] text-(--tw-star)">{javaError}</p>
          {/if}
          {#if !runtimes.length && !javaError && !scanning}
            <p class="mt-3 text-[12px] text-(--tw-muted)">Press <em>Scan system</em> to detect installed JDKs.</p>
          {/if}

          <div class="mt-8 flex items-center justify-between">
            <h3 class="text-[13px] font-semibold uppercase tracking-wide text-(--tw-muted)">Storage</h3>
            <button
              class="rounded bg-(--tw-surface) px-3 py-1.5 text-[12px] font-medium text-(--tw-text) hover:bg-(--tw-border)/50 disabled:opacity-40"
              disabled={storageBusy || gameRunning}
              onclick={cleanStaging}
            >
              Clean staging
            </button>
          </div>

          {#if storage}
            <div class="mt-3 rounded border border-(--tw-border) bg-(--tw-subtle) p-3">
              <div class="text-[11px] text-(--tw-muted)">
                Shared library {storage.is_default_shared ? '(default)' : '(custom)'}
              </div>
              <div class="mt-2 flex gap-2">
                <input
                  class="h-8 flex-1 rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[12px] text-(--tw-text) outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
                  placeholder={storage.shared_dir}
                  bind:value={sharedInput}
                />
                <button
                  class="rounded bg-(--tw-accent) px-3 text-[12px] font-medium text-white hover:bg-(--tw-accent-hover) disabled:opacity-40"
                  disabled={storageBusy}
                  onclick={saveShared}
                >
                  Save
                </button>
                {#if !storage.is_default_shared}
                  <button
                    class="rounded bg-(--tw-surface) px-3 text-[12px] text-(--tw-text) hover:bg-(--tw-border)/50 disabled:opacity-40"
                    disabled={storageBusy}
                    onclick={resetShared}
                  >
                    Reset
                  </button>
                {/if}
              </div>
              <div class="mt-2 truncate text-[11px] text-(--tw-muted)">Staging: {storage.staging_root}</div>
            </div>
          {/if}
          {#if storageMsg}
            <p class="mt-2 text-[12px] text-(--tw-muted)">{storageMsg}</p>
          {/if}
        </section>
      {/if}
      {#if active === 'logs'}
        <section class="mt-6 flex max-w-3xl flex-col">
          <div class="flex items-center justify-between">
            <h3 class="text-[13px] font-semibold uppercase tracking-wide text-(--tw-muted)">Game output</h3>
            <button
              class="rounded bg-(--tw-surface) px-3 py-1.5 text-[12px] font-medium text-(--tw-text) hover:bg-(--tw-border)/50"
              onclick={() => (consoleLines = [])}
            >
              Clear
            </button>
          </div>
          <div class="mt-3 h-80 overflow-y-auto rounded border border-(--tw-border) bg-(--tw-subtle) px-3 py-2 font-mono text-[11px] leading-5">
            {#each consoleLines as entry, i (i)}
              <div class="whitespace-pre-wrap break-all {lineClass(entry)}">
                {entry.line}
              </div>
            {:else}
              <div class="font-sans text-[12px] text-(--tw-muted)">
                No game output yet — launch a version from the Instances page.
              </div>
            {/each}
          </div>
        </section>
      {/if}
    </main>
  </div>

  {#if drawerOpen}
    <section class="flex h-56 shrink-0 flex-col border-t border-(--tw-border) bg-(--tw-subtle)">
      <div class="flex items-center justify-between border-b border-(--tw-border) px-3 py-1.5">
        <span class="text-[11px] font-semibold uppercase tracking-wide text-(--tw-muted)">
          Game console{gameRunning ? ' · running' : ''}
        </span>
        <div class="flex gap-3">
          <button class="text-[11px] text-(--tw-muted) hover:text-(--tw-text)" onclick={() => (consoleLines = [])}>Clear</button>
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
          <h3 class="text-sm font-semibold text-(--tw-text)">Accounts</h3>
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
                  <span class="truncate text-[13px] font-medium text-(--tw-text)">{account.username}</span>
                  <span class="rounded bg-(--tw-surface) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--tw-muted)">
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
                    class="rounded px-2 py-1 text-[11px] text-(--tw-muted) hover:bg-(--tw-surface) hover:text-(--tw-text)"
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
            class="h-8 flex-1 rounded border border-(--tw-border) bg-(--tw-subtle) px-2.5 text-[13px] text-(--tw-text) outline-none placeholder:text-(--tw-muted) focus:border-(--tw-accent)"
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
</div>
