<script>
  // Yardarm direction's right context panel: the selection surface. Shows
  // the selected instance's identity, path and meta, plus its action column.
  // The parent owns selection; actions bubble up as callbacks.
  let {
    instance,
    storage = null,
    gameRunning = false,
    modsCount = null,
    onlaunch,
    onedit,
    onopenfolder,
    onmoremods,
    ondelete,
  } = $props();

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

  // Absolute icon through the asset protocol, else the brand mark.
  function iconSrc() {
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return instance.icon_path && convert ? convert(instance.icon_path) : '/logo.png';
  }

  function instancePath() {
    if (!storage) return instance.id;
    return [storage.instances_dir.replace(/\\/g, '/'), instance.id].join('/');
  }
</script>

<aside
  class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5"
  aria-label="Selected instance details"
>
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
  <h3 class="mt-2.5 truncate text-[14px] font-semibold" title={instance.name}>{instance.name}</h3>
  <div class="mt-1.5 flex flex-wrap gap-1.5">
    <span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)">{instance.minecraft_version}</span>
    <span class="rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide {loaderPill}">{instance.loader_type}</span>
  </div>
  <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)" title={instancePath()}>{instancePath()}</div>

  <div class="mt-3 border-t border-(--border)">
    <div class="flex items-center justify-between border-b border-(--border) py-2 text-[11px] text-(--text-muted)">
      <span>Last played</span>
      <span class="font-medium text-(--text-main)">
        {instance.last_played ? new Date(instance.last_played * 1000).toLocaleDateString() : 'Never'}
      </span>
    </div>
    <div class="flex items-center justify-between border-b border-(--border) py-2 text-[11px] text-(--text-muted)">
      <span>Mods</span>
      <span class="font-medium text-(--text-main)">{modsCount ?? '…'}</span>
    </div>
  </div>

  <div class="mt-3 flex flex-col gap-1.5">
    <button
      class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
      disabled={gameRunning}
      title={gameRunning ? 'A game is already running' : `Launch ${instance.name}`}
      onclick={onlaunch}
    >
      ▶ Launch
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      onclick={onedit}
    >
      ⚙ Edit instance
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
      disabled={!storage}
      title={storage ? 'Opens the instance folder' : 'Storage unknown'}
      onclick={onopenfolder}
    >
      📂 Open folder
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title="Browse Modrinth inside the mods manager"
      onclick={onmoremods}
    >
      ⤓ Get more mods
    </button>
    <div class="my-1 border-t border-(--border)"></div>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"
      onclick={ondelete}
    >
      ✕ Delete instance
    </button>
  </div>
</aside>
