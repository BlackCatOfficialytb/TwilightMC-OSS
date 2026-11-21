<script>
  // Instance icon chooser: bundled Prism/MultiMC icons, bundled Twemoji
  // glyphs, or a custom image from disk. Emits the selected icon key:
  //   `prism:<name>` / `twemoji:<codepoints>` — bundled, no filesystem write
  //   `<absolute path>` — a custom file already copied into the instance
  //
  // The custom tab delegates to the host's file picker and to
  // `set_instance_icon`, then hands back the resulting path.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import { ICON_PICKER_TWEMOJI, PRISM_INSTANCE_ICONS, LEGACY_INSTANCE_ICONS } from './twemoji.js';
  import { t } from './i18n.svelte.ts';

  let {
    currentKey = '',
    currentPath = '',
    onpick,
    oncustom,
    onclose,
  } = $props();

  const TABS = [
    { id: 'prism', label: 'icons-tab-prism' },
    { id: 'legacy', label: 'icons-tab-legacy' },
    { id: 'twemoji', label: 'icons-tab-twemoji' },
    { id: 'custom', label: 'icons-tab-custom' },
  ];

  let tab = $state('prism');
  let busy = $state(false);
  let error = $state('');

  const BASE = import.meta.env.BASE_URL ?? '/';
  const asset = (path) => `${BASE}${path}`.replace(/\/{2,}/g, '/');

  const iconSrc = (name) => asset(`instance-icons/prism/${name}.svg`);
  const legacySrc = (name) => asset(`instance-icons/legacy/${name}.png`);
  const emojiSrc = (code) => asset(`twemoji/${code}.svg`);

  // friendly labels for the file names upstream ships
  const prismLabel = (name) =>
    name
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/, (m) =>
        ({ Fabricmc: 'Fabric', Quiltmc: 'Quilt', Neoforged: 'NeoForge', Ftb: 'FTB' })[m] ?? m,
      );

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    return () => popOverlay(closer);
  });

  function pick(key) {
    onpick?.(key);
    onclose?.();
  }

  async function pickCustom() {
    if (busy) return;
    busy = true;
    error = '';
    try {
      const result = await oncustom?.();
      if (result === null || result === undefined) return; // user cancelled
      onclose?.();
    } catch (e) {
      error = String(e);
    } finally {
      busy = false;
    }
  }
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-label={t('icons-choose-aria')}
>
  <div
    class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"
  >
    <header class="flex items-center justify-between border-b border-(--border) px-4 py-3">
      <h2 class="text-sm font-semibold">{t('icons-title')}</h2>
      <button
        type="button"
        class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)"
        onclick={onclose}
        aria-label={t('icons-close-aria')}
      >
        {t('icons-close')}
      </button>
    </header>

    <div
      class="flex gap-1 border-b border-(--border) px-3 py-2"
      role="tablist"
      aria-label={t('icons-sources-aria')}
    >
      {#each TABS as entry (entry.id)}
        <button
          type="button"
          role="tab"
          aria-selected={tab === entry.id}
          class="rounded px-2.5 py-1 text-xs font-medium transition-colors {tab === entry.id
            ? 'bg-(--accent)/15 text-(--accent)'
            : 'text-(--text-muted) hover:bg-(--bg-subtle)'}"
          onclick={() => (tab = entry.id)}
        >
          {t(entry.label)}
        </button>
      {/each}
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto p-4">
      {#if tab === 'prism'}
        <div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
          {#each PRISM_INSTANCE_ICONS as name (name)}
            <button
              type="button"
              class="group flex flex-col items-center gap-1 rounded border p-2 transition-colors {currentKey ===
              `prism:${name}`
                ? 'border-(--accent) bg-(--accent)/10'
                : 'border-(--border) hover:border-(--accent)'}"
              onclick={() => pick(`prism:${name}`)}
              title={prismLabel(name)}
            >
              <img
                src={iconSrc(name)}
                alt=""
                class="h-12 w-12 object-contain"
                draggable="false"
                loading="lazy"
              />
              <span class="w-full truncate text-center text-[10px] text-(--text-muted)">
                {prismLabel(name)}
              </span>
            </button>
          {/each}
        </div>
      {:else if tab === 'legacy'}
        <div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
          {#each LEGACY_INSTANCE_ICONS as name (name)}
            <button
              type="button"
              class="group flex flex-col items-center gap-1 rounded border p-2 transition-colors {currentKey ===
              `freesm:${name}`
                ? 'border-(--accent) bg-(--accent)/10'
                : 'border-(--border) hover:border-(--accent)'}"
              onclick={() => pick(`freesm:${name}`)}
              title={prismLabel(name)}
            >
              <img
                src={legacySrc(name)}
                alt=""
                class="h-12 w-12 object-contain image-rendering-pixelated"
                draggable="false"
                loading="lazy"
              />
              <span class="w-full truncate text-center text-[10px] text-(--text-muted)">
                {prismLabel(name)}
              </span>
            </button>
          {/each}
        </div>
      {:else if tab === 'twemoji'}
        <div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2">
          {#each ICON_PICKER_TWEMOJI as code (code)}
            <button
              type="button"
              class="flex items-center justify-center rounded border p-2 transition-colors {currentKey ===
              `twemoji:${code}`
                ? 'border-(--accent) bg-(--accent)/10'
                : 'border-(--border) hover:border-(--accent)'}"
              onclick={() => pick(`twemoji:${code}`)}
              title={code}
              aria-label={`Twemoji ${code}`}
            >
              <img src={emojiSrc(code)} alt="" class="h-8 w-8" draggable="false" loading="lazy" />
            </button>
          {/each}
        </div>
      {:else}
        <div class="flex flex-col items-start gap-3">
          <p class="text-[12px] text-(--text-muted)">
            {t('icons-custom-desc')}
          </p>
          {#if currentPath}
            <div class="flex items-center gap-2 rounded border border-(--border) p-2">
              <img
                src={currentPath}
                alt=""
                class="h-10 w-10 object-contain"
                draggable="false"
              />
              <span class="truncate text-[11px] text-(--text-muted)">{currentPath}</span>
            </div>
          {/if}
          <button
            type="button"
            class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"
            onclick={pickCustom}
            disabled={busy}
          >
            {busy ? t('icons-copying') : t('icons-choose-file')}
          </button>
          {#if error}
            <p role="alert" class="text-[11px] text-red-400">{error}</p>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>
