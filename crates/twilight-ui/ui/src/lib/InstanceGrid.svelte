<script>
  import InstanceCard from './InstanceCard.svelte';

  // The responsive instance grid: cards fed by `scan_instances`, plus the
  // Prism-inspired empty states (search no-match and first-run welcome).
  let {
    instances,
    error,
    query,
    selectedId,
    gameRunning,
    menuFor,
    onselect,
    onplay,
    ontogglemenu,
    onedit,
    onopenfolder,
    onviewlogs,
    ondelete,
    onclosemenu,
    onadd,
  } = $props();
</script>

<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances">
  {#each instances as inst (inst.id)}
    <InstanceCard
      instance={inst}
      selected={selectedId === inst.id}
      gameRunning={gameRunning}
      menuOpen={menuFor === inst.id}
      onselect={() => onselect?.(inst.id)}
      onplay={() => onplay?.(inst.id)}
      ontogglemenu={() => ontogglemenu?.(inst.id)}
      onedit={() => onedit?.(inst)}
      onopenfolder={() => onopenfolder?.(inst.id)}
      onviewlogs={onviewlogs}
      ondelete={() => ondelete?.(inst.id)}
      onclosemenu={onclosemenu}
    />
  {:else}
    {#if error}
      <div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)">
        {error}
      </div>
    {:else if query.trim()}
      <div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)">
        No instances match "{query.trim()}".
      </div>
    {:else}
      <div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center">
        <img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40" />
        <p class="text-[13px] font-medium">No instances yet</p>
        <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p>
        <button
          class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
          onclick={() => onadd?.()}
        >
          ＋ Add Instance
        </button>
      </div>
    {/if}
  {/each}
</div>
