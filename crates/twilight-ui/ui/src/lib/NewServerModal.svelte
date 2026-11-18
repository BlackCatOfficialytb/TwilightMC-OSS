<script>
  // The New Server wizard: Step 1 software → Step 2 version (live fetch) →
  // Step 3 settings (name/port/RAM) → Step 4 networking (Local Only vs
  // Minekube Connect tunnel + offline mode with the AuthMe recommendation).
  // Option clicks ONLY select/highlight — advancing happens exclusively via
  // the footer Next button, and a full-size Back button sits right next to
  // it on every step after the first.
  import { toast } from './alerts.svelte.js';

  let { onclose, oncreated } = $props();

  const SOFTWARE = [
    { id: 'paper', label: 'Paper', note: 'High-performance Bukkit server' },
    { id: 'purpur', label: 'Purpur', note: 'Paper fork, maximum configurability' },
    { id: 'vanilla', label: 'Vanilla', note: 'Official Mojang server' },
    { id: 'fabric', label: 'Fabric', note: 'Lightweight mod loader' },
    { id: 'pumpkin', label: 'PumpkinMC (Rust)', note: 'Multithreaded native server' },
    { id: 'velocity', label: 'Velocity', note: 'Modern proxy (no world)' },
    { id: 'forge', label: 'Forge', note: 'Mod loader — manual installer' },
    { id: 'neoforge', label: 'NeoForge', note: 'Mod loader, auto-installer' },
    { id: 'steel', label: 'SteelMC (Rust)', note: 'Native server, auto-download' },
  ];

  const MANUAL_NOTES = {
    forge: 'TwilightMC cannot fetch Forge installers automatically — Next continues with a manual install; drop the launcher jar into the server folder before starting.',
  };

  let step = $state(1);
  let software = $state('');
  let versions = $state([]);
  let versionError = $state('');
  let loadingVersions = $state(false);
  let version = $state('');
  let name = $state('');
  let port = $state(25565);
  let minMem = $state(1024);
  let maxMem = $state(4096);
  let localOnly = $state(true);
  let offlineMode = $state(false);
  let busy = $state('');
  let error = $state('');
  let cpuTarget = $state('');
  let fetchToken = 0;

  // Detected host CPU microarch target (x86_64-v3 (AVX2) vs x86_64) —
  // native server builds are matched against it during download.
  window.__TAURI__
    ?.core.invoke('get_cpu_target')
    .then((t) => (cpuTarget = t))
    .catch(() => {});

  function labelOf(id) {
    return SOFTWARE.find((s) => s.id === id)?.label ?? id;
  }

  async function selectSoftware(id) {
    if (software === id) return;
    const token = ++fetchToken;
    software = id;
    version = '';
    versions = [];
    versionError = '';
    loadingVersions = true;
    try {
      const list = await window.__TAURI__.core.invoke('fetch_server_versions', { software: id });
      if (token !== fetchToken) return; // stale response for a changed pick
      versions = list ?? [];
      if (id === 'fabric') versions = versions.slice(0, 80);
      if (versions.length === 0 && MANUAL_NOTES[id]) {
        versionError = MANUAL_NOTES[id];
      }
    } catch (e) {
      if (token === fetchToken) versionError = String(e);
    } finally {
      if (token === fetchToken) loadingVersions = false;
    }
  }

  function selectVersion(v) {
    version = v;
  }

  // The only way forward: the explicit Next button in the footer.
  function next() {
    if (step === 1) {
      if (!software) return;
      step = 2;
    } else if (step === 2) {
      if (loadingVersions) return;
      if (!version && versions.length > 0) return;
      if (!version) version = 'manual';
      if (!name.trim()) name = `${labelOf(software)} ${version.split('+')[0]}`;
      step = 3;
    } else if (step === 3) {
      step = 4;
    }
  }

  function back() {
    if (busy || step <= 1) return;
    step -= 1;
  }

  const canNext = $derived(
    (step === 1 && !!software && !loadingVersions) ||
      (step === 2 && !loadingVersions && (version !== '' || versions.length === 0)) ||
      step === 3
  );

  const cpuLabel = $derived(cpuTarget.includes('v3') ? 'AVX2' : 'baseline');

  async function create() {
    error = '';
    busy = 'create';
    try {
      await window.__TAURI__.core.invoke('create_server', {
        config: {
          name: name.trim(),
          software,
          version: version.trim() || 'manual',
          loader_version: null,
          port: Number(port) || 25565,
          min_memory_mb: Number(minMem) || 0,
          max_memory_mb: Number(maxMem) || 0,
          offline_mode: offlineMode,
          connect: !localOnly,
        },
      });
      oncreated?.();
      onclose?.();
      toast(`Server ${name.trim()} created.`, 'success');
    } catch (e) {
      error = String(e);
    } finally {
      busy = '';
    }
  }
</script>

<div
  class="fixed inset-0 z-[70] flex items-center justify-center"
  style="background: var(--scrim)"
  onclick={(e) => {
    if (e.target === e.currentTarget && !busy) onclose?.();
  }}
>
  <div
    role="dialog"
    aria-modal="true"
    aria-label="New server"
    class="flex max-h-[640px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"
  >
    <div class="flex items-center justify-between border-b border-(--border) p-4">
      <h3 class="text-[14px] font-semibold">New Server</h3>
      <div class="flex items-center gap-1.5">
        {#each [1, 2, 3, 4] as n (n)}
          <span class="h-1.5 w-6 rounded-full {step >= n ? 'bg-(--accent)' : 'bg-(--bg-3)'}"></span>
        {/each}
      </div>
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto p-4">
      {#if step === 1}
        <p class="text-[12px] text-(--text-muted)">Pick the server software.</p>
        <div class="mt-3 grid grid-cols-2 gap-2">
          {#each SOFTWARE as s (s.id)}
            <button
              class="rounded border px-3 py-2.5 text-left transition-colors {software === s.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--accent)'}"
              onclick={() => selectSoftware(s.id)}
            >
              <span class="block text-[12.5px] font-medium">{s.label}</span>
              <span class="mt-0.5 block text-[11px] text-(--text-muted)">{s.note}</span>
            </button>
          {/each}
        </div>
        {#if loadingVersions}
          <p class="mt-3 text-[11px] text-(--text-muted)">Checking available versions…</p>
        {/if}
        {#if cpuTarget}
          <p class="mt-3 text-[11px] text-(--text-muted)">
            Host CPU target: <span class="text-(--text-main)">{cpuTarget}</span> — native builds
            are matched to it ({cpuLabel}).
          </p>
        {/if}
      {:else if step === 2}
        <p class="text-[12px] text-(--text-muted)">Pick the version for {labelOf(software)}.</p>
        {#if loadingVersions}
          <p class="mt-4 text-[12px] text-(--text-muted)">Fetching versions…</p>
        {:else if versionError}
          <p class="mt-4 text-[12px] text-amber-500">{versionError}</p>
        {:else}
          <div class="mt-3 grid max-h-[380px] grid-cols-4 gap-1.5 overflow-y-auto">
            {#each versions as v (v)}
              <button
                class="rounded border px-2 py-1.5 text-[11.5px] transition-colors {version === v
                  ? 'border-(--accent) bg-(--brand-tint) font-medium text-(--accent)'
                  : 'border-(--border) hover:border-(--accent)'}"
                onclick={() => selectVersion(v)}
              >
                {v.split('+')[0]}
              </button>
            {/each}
          </div>
        {/if}
      {:else if step === 3}
        <p class="text-[12px] text-(--text-muted)">Name, port and memory.</p>
        <label for="ns-name" class="mt-4 block text-[11px] font-medium text-(--text-muted)">Server name</label>
        <input
          id="ns-name"
          class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)"
          placeholder="My Server"
          bind:value={name}
        />
        <label for="ns-port" class="mt-3 block text-[11px] font-medium text-(--text-muted)">Port</label>
        <input
          id="ns-port"
          type="number" min="1024" max="65535"
          class="mt-1 h-8 w-40 rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)"
          bind:value={port}
        />
        <p class="mt-3 block text-[11px] font-medium text-(--text-muted)">
          Memory: {minMem}-{maxMem} MiB
        </p>
        <input class="mt-1 w-full accent-(--accent)" type="range" min="512" max="8192" step="256" bind:value={minMem} />
        <input class="mt-1 w-full accent-(--accent)" type="range" min="1024" max="32768" step="512" bind:value={maxMem} />
        {#if maxMem < minMem}
          <p class="mt-1 text-[11px] text-amber-500">Max memory is below min — the flag is skipped.</p>
        {/if}
      {:else}
        <p class="text-[12px] text-(--text-muted)">Who can reach the server?</p>
        <div class="mt-3 grid gap-2">
          <button
            class="rounded border px-3 py-2.5 text-left transition-colors {localOnly
              ? 'border-(--accent) bg-(--brand-tint)'
              : 'border-(--border) hover:border-(--accent)'}"
            onclick={() => (localOnly = true)}
          >
            <span class="block text-[12.5px] font-medium">Local Only</span>
            <span class="mt-0.5 block text-[11px] text-(--text-muted)">LAN and localhost — no tunnel.</span>
          </button>
          <button
            class="rounded border px-3 py-2.5 text-left transition-colors {!localOnly
              ? 'border-(--accent) bg-(--brand-tint)'
              : 'border-(--border) hover:border-(--accent)'}"
            onclick={() => (localOnly = false)}
          >
            <span class="block text-[12.5px] font-medium">Enable Minekube Connect Tunnel</span>
            <span class="mt-0.5 block text-[11px] text-(--text-muted)">
              Friends join over the internet without port forwarding (connect.minekube.com).
            </span>
          </button>
        </div>
        <label class="mt-4 flex cursor-pointer items-start gap-2.5">
          <input type="checkbox" class="mt-0.5 accent-(--accent)" bind:checked={offlineMode} />
          <span class="min-w-0">
            <span class="block text-[12.5px] font-medium">Offline Mode (online-mode=false)</span>
            <span class="mt-0.5 block text-[11px] text-(--text-muted)">
              Allows cracked / third-party clients. TwilightMC recommends AuthMeReloaded for these servers.
            </span>
          </span>
        </label>
        {#if offlineMode}
          <div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5 text-[11px] text-amber-500">
            Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.
            You can 1-click install AuthMeReloaded from the server card afterwards.
          </div>
        {/if}
        {#if error}
          <p class="mt-3 text-[11px] text-rose-400">{error}</p>
        {/if}
      {/if}
    </div>

    <div class="flex items-center justify-between border-t border-(--border) p-4">
      <button
        class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40"
        disabled={busy !== ''}
        onclick={onclose}
      >
        Cancel
      </button>
      <div class="flex items-center gap-2">
        {#if step > 1}
          <button
            class="rounded border border-(--border) px-4 py-1.5 text-[12px] font-medium text-(--text-main) hover:border-(--accent) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={back}
          >
            ← Back
          </button>
        {/if}
        {#if step === 4}
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={busy !== '' || !name.trim()}
            onclick={create}
          >
            {busy === 'create' ? 'Creating…' : 'Create Server'}
          </button>
        {:else}
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={busy !== '' || !canNext}
            onclick={next}
          >
            {step === 3 ? 'Next: Networking' : 'Next →'}
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>
