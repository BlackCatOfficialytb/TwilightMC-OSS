<script>
  // The New Server wizard: Step 1 software → Step 2 version (live fetch) →
  // Step 3 settings (name/port/RAM) → Step 4 networking (Local Only vs
  // Minekube Connect tunnel + offline mode with the AuthMe recommendation).
  // Option clicks ONLY select/highlight — advancing happens exclusively via
  // the footer Next button, and a full-size Back button sits right next to
  // it on every step after the first.
  import { toast } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';

  let { onclose, oncreated } = $props();

  const SOFTWARE = [
    // note holds a message id from locales/*/main.ftl, resolved at render time
    { id: 'paper', label: 'Paper', note: 'software-paper-note' },
    { id: 'purpur', label: 'Purpur', note: 'software-purpur-note' },
    { id: 'vanilla', label: 'Vanilla', note: 'software-vanilla-note' },
    { id: 'fabric', label: 'Fabric', note: 'software-fabric-note' },
    { id: 'pumpkin', label: 'PumpkinMC (Rust)', note: 'software-pumpkin-note' },
    { id: 'velocity', label: 'Velocity', note: 'software-velocity-note' },
    { id: 'forge', label: 'Forge', note: 'software-forge-note' },
    { id: 'neoforge', label: 'NeoForge', note: 'software-neoforge-note' },
    { id: 'steel', label: 'SteelMC (Rust)', note: 'software-steel-note' },
  ];

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
      toast(t('server-created', { name: name.trim() }), 'success');
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
  role="presentation"
  onclick={(e) => {
    if (e.target === e.currentTarget && !busy) onclose?.();
  }}
>
  <div
    role="dialog"
    aria-modal="true"
    aria-label={t('newserver-aria')}
    class="flex max-h-[640px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"
  >
    <div class="flex items-center justify-between border-b border-(--border) p-4">
      <h3 class="text-[14px] font-semibold">{t('newserver-title')}</h3>
      <div class="flex items-center gap-1.5">
        {#each [1, 2, 3, 4] as n (n)}
          <span class="h-1.5 w-6 rounded-full {step >= n ? 'bg-(--accent)' : 'bg-(--bg-3)'}"></span>
        {/each}
      </div>
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto p-4">
      {#if step === 1}
        <p class="text-[12px] text-(--text-muted)">{t('newserver-step1')}</p>
        <div class="mt-3 grid grid-cols-2 gap-2">
          {#each SOFTWARE as s (s.id)}
            <button
              class="rounded border px-3 py-2.5 text-left transition-colors {software === s.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--accent)'}"
              onclick={() => selectSoftware(s.id)}
            >
              <span class="block text-[12.5px] font-medium">{s.label}</span>
              <span class="mt-0.5 block text-[11px] text-(--text-muted)">{t(s.note)}</span>
            </button>
          {/each}
        </div>
        {#if loadingVersions}
          <p class="mt-3 text-[11px] text-(--text-muted)">{t('newserver-checking')}</p>
        {/if}
        {#if cpuTarget}
          <p class="mt-3 text-[11px] text-(--text-muted)">
            {t('newserver-cpu', { target: cpuTarget, label: cpuLabel })}
          </p>
        {/if}
      {:else if step === 2}
        <p class="text-[12px] text-(--text-muted)">{t('newserver-step2', { software: labelOf(software) })}</p>
        {#if loadingVersions}
          <p class="mt-4 text-[12px] text-(--text-muted)">{t('newserver-fetching')}</p>
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
        <p class="text-[12px] text-(--text-muted)">{t('newserver-step3')}</p>
        <label for="ns-name" class="mt-4 block text-[11px] font-medium text-(--text-muted)">{t('newserver-name')}</label>
        <input
          id="ns-name"
          class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)"
          placeholder={t('newserver-name-placeholder')}
          bind:value={name}
        />
        <label for="ns-port" class="mt-3 block text-[11px] font-medium text-(--text-muted)">{t('newserver-port')}</label>
        <input
          id="ns-port"
          type="number" min="1024" max="65535"
          class="mt-1 h-8 w-40 rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)"
          bind:value={port}
        />
        <p class="mt-3 block text-[11px] font-medium text-(--text-muted)">
          {t('newserver-memory', { min: minMem, max: maxMem })}
        </p>
        <input class="mt-1 w-full accent-(--accent)" type="range" min="512" max="8192" step="256" bind:value={minMem} />
        <input class="mt-1 w-full accent-(--accent)" type="range" min="1024" max="32768" step="512" bind:value={maxMem} />
        {#if maxMem < minMem}
          <p class="mt-1 text-[11px] text-amber-500">{t('newserver-max-below-min')}</p>
        {/if}
      {:else}
        <p class="text-[12px] text-(--text-muted)">{t('newserver-step4')}</p>
        <div class="mt-3 grid gap-2">
          <button
            class="rounded border px-3 py-2.5 text-left transition-colors {localOnly
              ? 'border-(--accent) bg-(--brand-tint)'
              : 'border-(--border) hover:border-(--accent)'}"
            onclick={() => (localOnly = true)}
          >
            <span class="block text-[12.5px] font-medium">{t('newserver-local')}</span>
            <span class="mt-0.5 block text-[11px] text-(--text-muted)">{t('newserver-local-desc')}</span>
          </button>
          <button
            class="rounded border px-3 py-2.5 text-left transition-colors {!localOnly
              ? 'border-(--accent) bg-(--brand-tint)'
              : 'border-(--border) hover:border-(--accent)'}"
            onclick={() => (localOnly = false)}
          >
            <span class="block text-[12.5px] font-medium">{t('newserver-connect')}</span>
            <span class="mt-0.5 block text-[11px] text-(--text-muted)">
              {t('newserver-connect-desc')}
            </span>
          </button>
        </div>
        <label class="mt-4 flex cursor-pointer items-start gap-2.5">
          <input type="checkbox" class="mt-0.5 accent-(--accent)" bind:checked={offlineMode} />
          <span class="min-w-0">
            <span class="block text-[12.5px] font-medium">{t('newserver-offline')}</span>
            <span class="mt-0.5 block text-[11px] text-(--text-muted)">
              {t('newserver-offline-desc')}
            </span>
          </span>
        </label>
        {#if offlineMode}
          <div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5 text-[11px] text-amber-500">
            {t('newserver-offline-warning')}
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
        {t('common-cancel')}
      </button>
      <div class="flex items-center gap-2">
        {#if step > 1}
          <button
            class="rounded border border-(--border) px-4 py-1.5 text-[12px] font-medium text-(--text-main) hover:border-(--accent) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={back}
          >
            ← {t('newserver-back')}
          </button>
        {/if}
        {#if step === 4}
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={busy !== '' || !name.trim()}
            onclick={create}
          >
            {busy === 'create' ? t('newserver-creating') : t('newserver-create')}
          </button>
        {:else}
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={busy !== '' || !canNext}
            onclick={next}
          >
            {step === 3 ? t('newserver-next-networking') : `${t('newserver-next')} →`}
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>
