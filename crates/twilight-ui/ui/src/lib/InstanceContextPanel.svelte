<script>
  // Yardarm direction's right context panel: the selection surface. Shows
  // the selected instance's identity, path and actions in Prism's order,
  // plus a playtime/version footer. The parent owns selection; actions
  // bubble up as callbacks.
  import LauncherIcon from './LauncherIcon.svelte';
  import { iconKeyAsset } from './twemoji.js';
  import { t, formatDate, formatDuration } from './i18n.svelte.ts';

  let {
    instance,
    storage = null,
    gameRunning = false,
    modsCount = null,
    groups = [],
    onlaunch,
    onkill,
    onedit,
    onchangegroup,
    onopenfolder,
    onexport,
    ontwpack,
    oncopy,
    ondelete,
    onshortcut,
    onrename,
    onclose,
  } = $props();

  let groupOpen = $state(false);
  let newGroup = $state('');
  let renaming = $state(false);
  let draftName = $state('');

  function startRename() {
    draftName = instance.name;
    renaming = true;
  }

  function commitRename() {
    if (!renaming) return;
    const value = draftName.trim();
    renaming = false;
    if (value && value !== instance.name) onrename?.(value);
  }

  function cancelRename() {
    renaming = false;
  }

  // Loader pill treatment: cyan for the light modloaders, amber for the
  // native/heavy ones, slate for vanilla (mirrors InstanceCard).
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

  // Absolute icon through the asset protocol, else the brand mark. Bundled
  // icon keys render directly from the public asset folders.
  function iconSrc() {
    const bundled = iconKeyAsset(instance.icon_key);
    if (bundled) return bundled;
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return instance.icon_path && convert ? convert(instance.icon_path) : '/logo.png';
  }

  function instancePath() {
    if (!storage) return instance.id;
    return [storage.instances_dir.replace(/\\/g, '/'), instance.id].join('/');
  }

  // i18n-ready: the whole sentence is one Fluent template with Intl-formatted
  // date and plural-selected duration pieces.
  const metaLine = $derived.by(() => {
    if (!instance.last_played) {
      return t('instance-meta-never', { version: instance.minecraft_version });
    }
    return t('instance-meta-played', {
      version: instance.minecraft_version,
      date: formatDate(instance.last_played * 1000),
      duration: formatDuration(instance.total_time_played),
    });
  });

  function pickGroup(value) {
    groupOpen = false;
    newGroup = '';
    onchangegroup?.(value.trim() ? value.trim() : null);
  }
</script>

<aside
  class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5"
  aria-label={t('ctx-aria')}
>
  <div class="flex items-start justify-between gap-2">
    <span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15">
      <img
        src={iconSrc()}
        alt=""
        draggable="false"
        class="h-14 w-14 object-cover"
        onerror={(e) => {
          if (!e.currentTarget.dataset.f) {
            e.currentTarget.dataset.f = '1';
            e.currentTarget.src = '/logo.png';
          }
        }}
      />
    </span>
    <button
      type="button"
      class="rounded p-1 text-[13px] leading-none text-(--text-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--text-main) focus-visible:ring-1 focus-visible:ring-(--accent) focus-visible:outline-none"
      title={t('ctx-close-title')}
      aria-label={t('ctx-close-aria')}
      onclick={() => onclose?.()}
    >
      ✕
    </button>
  </div>
  <h3 class="mt-2.5 truncate text-[14px] font-semibold" title={instance.name}>
    {#if renaming}
      <input
        class="h-7 w-full rounded border border-(--accent) bg-(--bg-surface) px-2 text-[13px] font-medium outline-none"
        bind:value={draftName}
        aria-label={t('instance-name')}
        onkeydown={(e) => {
          if (e.key === 'Enter') commitRename();
          else if (e.key === 'Escape') cancelRename();
        }}
        onblur={commitRename}
      />
    {:else}
      <span class="group/name flex items-center gap-1">
        <span class="truncate">{instance.name}</span>
        <button
          type="button"
          class="shrink-0 rounded p-0.5 text-[10px] text-(--text-muted) opacity-0 transition-opacity hover:text-(--accent) focus-visible:opacity-100 group-hover/name:opacity-100"
          title={t('ctx-rename-title')}
          aria-label={t('ctx-rename-aria')}
          onclick={startRename}
        >
          ✎
        </button>
      </span>
    {/if}
  </h3>
  <div class="mt-1.5 flex flex-wrap gap-1.5">
    <span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)">{instance.minecraft_version}</span>
    <span class="rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide {loaderPill}">{instance.loader_type}</span>
    {#if instance.group}
      <span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title={t('ctx-group')}>▤ {instance.group}</span>
    {/if}
  </div>
  <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)" title={instancePath()}>{instancePath()}</div>

  <div class="mt-3 flex flex-col gap-1.5">
    <button
      class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
      disabled={gameRunning}
      title={gameRunning ? t('ctx-launch-running') : t('ctx-launch-title', { name: instance.name })}
      onclick={onlaunch}
    >
      <LauncherIcon name="launch" size={13} /> {t('action-launch')}
    </button>

    {#if gameRunning}
      <button
        class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10"
        title={t('ctx-kill-title')}
        onclick={onkill}
      >
        <LauncherIcon name="kill" size={13} /> {t('action-kill')}
      </button>
    {/if}

    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      onclick={onedit}
    >
      <LauncherIcon name="edit" size={13} /> {t('action-edit')}
    </button>

    <button
      class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title={t('ctx-change-group-title')}
      onclick={() => (groupOpen = !groupOpen)}
    >
      <span>▤ {t('action-change-group')}</span>
      <span class="ml-auto text-[9px]">{groupOpen ? '▴' : '▾'}</span>
    </button>
    {#if groupOpen}
      <div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2">
        <button
          class="rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) {instance.group
            ? 'text-(--text-muted)'
            : 'font-medium text-(--accent)'}"
          onclick={() => pickGroup('')}
        >
          {t('ctx-group-none')}
        </button>
        {#each groups as g (g)}
          <button
            class="rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) {instance.group === g
              ? 'font-medium text-(--accent)'
              : 'text-(--text-muted)'}"
            onclick={() => pickGroup(g)}
          >
            {g}
          </button>
        {/each}
        <div class="mt-1 flex gap-1">
          <input
            class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder={t('ctx-new-group')}
            bind:value={newGroup}
            onkeydown={(e) => {
              if (e.key === 'Enter' && newGroup.trim()) pickGroup(newGroup);
            }}
          />
          <button
            class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40"
            disabled={!newGroup.trim()}
            onclick={() => pickGroup(newGroup)}
          >
            {t('ctx-add-group')}
          </button>
        </div>
      </div>
    {/if}

    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
      disabled={!storage}
      title={storage ? t('ctx-folder-title') : t('ctx-folder-unknown')}
      onclick={onopenfolder}
    >
      <LauncherIcon name="folder" size={13} /> {t('action-folder')}
    </button>
    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title={t('ctx-export-zip-title')}
      onclick={onexport}
    >
      <LauncherIcon name="export" size={13} /> {t('action-export')}
    </button>
    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title={t('ctx-export-twpack-title')}
      onclick={ontwpack}
    >
      <LauncherIcon name="package" size={13} /> {t('action-export-twpack')}
    </button>
    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title={t('ctx-copy-title')}
      onclick={oncopy}
    >
      <LauncherIcon name="copy" size={13} /> {t('action-copy')}
    </button>
    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"
      onclick={ondelete}
    >
      <LauncherIcon name="delete" size={13} /> {t('action-delete')}
    </button>
    <button
      class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title={t('ctx-shortcut-title')}
      onclick={onshortcut}
    >
      <LauncherIcon name="shortcut" size={13} /> {t('action-shortcut')}
    </button>
  </div>

  <div class="mt-auto border-t border-(--border) pt-2.5">
    <p class="text-[10.5px] leading-relaxed text-(--text-muted)">{metaLine}</p>
    <p class="mt-1 text-[10.5px] text-(--text-muted)">{modsCount == null ? '…' : t('instance-mods-count', { count: modsCount })}</p>
  </div>
</aside>
