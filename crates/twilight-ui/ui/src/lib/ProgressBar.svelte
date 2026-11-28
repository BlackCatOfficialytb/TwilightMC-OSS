<script>
  let {
    label = '',
    percent = null,
    indeterminate = false,
    detail = '',
    stage = '',
  } = $props();

  const pct = $derived(
    typeof percent === 'number' && Number.isFinite(percent)
      ? Math.max(0, Math.min(100, percent))
      : null,
  );
</script>

<div class="w-full">
  {#if label || stage || detail}
    <div class="mb-1 flex items-center justify-between gap-2 text-[11px] text-(--text-muted)">
      <div class="min-w-0 truncate">
        {#if label}<span class="text-(--text-main)">{label}</span>{/if}
        {#if stage}<span class={label ? 'ml-2' : ''}>{stage}</span>{/if}
      </div>
      <div class="shrink-0 font-mono">
        {#if pct !== null}{pct.toFixed(0)}%{:else if indeterminate}…{/if}
      </div>
    </div>
  {/if}
  <div class="h-2 overflow-hidden rounded bg-(--bg-subtle) border border-(--border)" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={pct ?? undefined}>
    {#if indeterminate && pct === null}
      <div class="h-full w-1/3 animate-pulse rounded bg-(--accent)"></div>
    {:else}
      <div class="h-full rounded bg-(--accent) transition-[width] duration-150" style={`width:${pct ?? 0}%`}></div>
    {/if}
  </div>
  {#if detail}
    <div class="mt-1 truncate text-[10px] text-(--text-muted)">{detail}</div>
  {/if}
</div>
