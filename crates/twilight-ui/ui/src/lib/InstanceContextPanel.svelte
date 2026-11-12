<script>
  // Yardarm direction's right context panel: the selection surface. Shows
  // the selected instance's identity, path and actions in Prism's order,
  // plus a playtime/version footer. The parent owns selection; actions
  // bubble up as callbacks.
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
    oncopy,
    ondelete,
    onshortcut,
  } = $props();

  let groupOpen = $state(false);
  let newGroup = $state('');

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

  // dd/mm/yyyy hh:mm:ss in the user's local zone.
  function fmtStamp(unix) {
    const date = new Date(unix * 1000);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }

  // Top two non-zero units: "2 days 3 hours", "5 minutes 12 seconds".
  function fmtDuration(total) {
    const seconds = Math.max(0, Math.floor(total));
    const units = [
      [86400, 'day'],
      [3600, 'hour'],
      [60, 'minute'],
      [1, 'second'],
    ];
    const parts = [];
    let rest = seconds;
    for (const [size, label] of units) {
      const value = Math.floor(rest / size);
      if (value) {
        parts.push(`${value} ${label}${value === 1 ? '' : 's'}`);
        rest -= value * size;
        if (parts.length === 2) break;
      }
    }
    return parts.length ? parts.join(' ') : '0 seconds';
  }

  // i18n-ready: this whole sentence becomes one translation template later.
  const metaLine = $derived.by(() => {
    const base = `Minecraft ${instance.minecraft_version}`;
    if (!instance.last_played) return base;
    return `${base}, last played on ${fmtStamp(instance.last_played)}, total played for ${fmtDuration(instance.total_time_played)}`;
  });

  function pickGroup(value) {
    groupOpen = false;
    newGroup = '';
    onchangegroup?.(value.trim() ? value.trim() : null);
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
    {#if instance.group}
      <span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group">▤ {instance.group}</span>
    {/if}
  </div>
  <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)" title={instancePath()}>{instancePath()}</div>

  <div class="mt-3 flex flex-col gap-1.5">
    <button
      class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
      disabled={gameRunning}
      title={gameRunning ? 'A game is already running' : `Launch ${instance.name}`}
      onclick={onlaunch}
    >
      ▶ Launch
    </button>

    {#if gameRunning}
      <button
        class="w-full rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10"
        title="Stop the running game"
        onclick={onkill}
      >
        ■ Kill
      </button>
    {/if}

    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      onclick={onedit}
    >
      ⚙ Edit
    </button>

    <button
      class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title="Move this instance to another group"
      onclick={() => (groupOpen = !groupOpen)}
    >
      <span>▤ Change Group</span>
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
          No group
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
            placeholder="New group…"
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
            Add
          </button>
        </div>
      </div>
    {/if}

    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
      disabled={!storage}
      title={storage ? 'Opens the instance folder' : 'Storage unknown'}
      onclick={onopenfolder}
    >
      📂 Folder
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title="Export this instance as a .zip"
      onclick={onexport}
    >
      ⤓ Export
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title="Clone this instance"
      onclick={oncopy}
    >
      ⧉ Copy
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"
      onclick={ondelete}
    >
      ✕ Delete
    </button>
    <button
      class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
      title="Create a desktop shortcut that launches this instance"
      onclick={onshortcut}
    >
      ⇱ Create Shortcut
    </button>
  </div>

  <div class="mt-auto border-t border-(--border) pt-2.5">
    <p class="text-[10.5px] leading-relaxed text-(--text-muted)">{metaLine}</p>
    <p class="mt-1 text-[10.5px] text-(--text-muted)">{modsCount ?? '…'} mods installed</p>
  </div>
</aside>
