<script>
  // One instance card: icon, custom title, version + loader pills, last
  // played and the context menu. Single click selects (drives the right
  // context panel), double click or Enter/Space launches; interactions
  // bubbles up as callbacks.
  import Twemoji from './Twemoji.svelte';
  import { iconKeyAsset } from './twemoji.js';
  import { t, formatDate } from './i18n.svelte.ts';

  let {
    instance,
    selected = false,
    gameRunning = false,
    menuOpen = false,
    onselect,
    onplay,
    ontogglemenu,
    onedit,
    onrename,
    onopenfolder,
    onviewlogs,
    ondelete,
    onclosemenu,
  } = $props();

  // Loader pill treatment: cyan for the light modloaders, amber for the
  // native/heavy ones, slate for vanilla.
  const loaderPill = $derived.by(() => {
    switch (instance.loader_type) {
      case 'Fabric':
      case 'Quilt':
        return 'bg-(--accent)/15 text-(--accent)';
      case 'Horizon':
      case 'Forge':
      case 'NeoForge':
        return 'bg-(--accent-star)/15 text-(--accent-star)';
      default:
        return 'bg-(--bg-subtle) text-(--text-muted)';
    }
  });

  // Absolute icon through the asset protocol, else the brand mark. A bundled
  // icon key (`prism:` / `twemoji:`) renders straight from public assets.
  function iconSrc() {
    const bundled = iconKeyAsset(instance.icon_key);
    if (bundled) return bundled;
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return instance.icon_path && convert ? convert(instance.icon_path) : '/logo.png';
  }
</script>

<div
  class="relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) {selected
    ? 'border-(--accent)'
    : 'border-(--border) hover:border-(--accent)'}"
  tabindex="0"
  role="option"
  aria-selected={selected}
  title={instance.name}
  onclick={onselect}
  ondblclick={onplay}
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onplay();
    }
  }}
  oncontextmenu={(e) => {
    e.preventDefault();
    onselect();
    ontogglemenu();
  }}
>
  <div class="flex items-center gap-2.5">
    <span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15">
      <img
        src={iconSrc()}
        alt=""
        draggable="false"
        class="h-8 w-8 object-cover"
        onerror={(e) => {
          if (!e.currentTarget.dataset.f) {
            e.currentTarget.dataset.f = '1';
            e.currentTarget.src = '/logo.png';
          }
        }}
      />
    </span>
    <div class="min-w-0 flex-1">
      <div class="truncate text-[13px] font-medium">{instance.name}</div>
      <div class="mt-0.5 flex items-center gap-1">
        <span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)">{instance.minecraft_version}</span>
        <span class="rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide {loaderPill}">{instance.loader_type}</span>
      </div>
    </div>
    <button
      class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title={t('instance-menu')}
      onclick={(e) => {
        e.stopPropagation();
        ontogglemenu();
      }}
    >
      ⋯
    </button>
  </div>
  <span class="text-[11px] text-(--text-muted)">
    {instance.last_played ? formatDate(instance.last_played * 1000) : t('instance-never-played')}
  </span>

  {#if menuOpen}
    <!-- backdrop click closes; menu entries stop the card's own handlers -->
    <div
      class="fixed inset-0 z-20"
      role="presentation"
      onclick={onclosemenu}
      onkeydown={(e) => e.key === 'Escape' && onclosemenu()}
    ></div>
    <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl">
      <button
        class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40"
        disabled={gameRunning}
        onclick={() => {
          onclosemenu();
          onplay();
        }}
      >
        ▶ {t('instance-play')}
      </button>
      <button
        class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"
        onclick={() => {
          onclosemenu();
          onedit();
        }}
      >
        ✎ {t('instance-edit')}
      </button>
      <button
        class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"
        onclick={() => {
          onclosemenu();
          onrename?.();
        }}
      >
        ✎ {t('action-rename')}
      </button>
      <button
        class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"
        onclick={() => {
          onclosemenu();
          onopenfolder();
        }}
      >
        <Twemoji emoji="📂" /> {t('instance-open-folder')}
      </button>
      <button
        class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"
        onclick={() => {
          onclosemenu();
          onviewlogs();
        }}
      >
        ▤ {t('instance-view-logs')}
      </button>
      <div class="my-1 border-t border-(--border)"></div>
      <button
        class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10"
        onclick={() => {
          onclosemenu();
          ondelete();
        }}
      >
        ✕ {t('instance-delete')}
      </button>
    </div>
  {/if}
</div>
