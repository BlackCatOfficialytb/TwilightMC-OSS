<script>
  // One icon everywhere: resolves a logical name through the icon pack
  // engine (SVG pack → Twemoji → raw character) and re-resolves live when
  // the pack or theme changes. `pack` forces a specific selector for
  // previews (Settings → Appearance pack cards).
  import { onDestroy } from 'svelte';
  import { onIconPackChange, resolveIcon } from './icons';
  import Twemoji from './Twemoji.svelte';

  let {
    name = '',
    pack = null,
    size = null,
    alt = '',
    class: klass = '',
  } = $props();

  // bumped by the engine's pub/sub so `$derived` re-runs on pack/theme flips
  let revision = $state(0);
  const stop = onIconPackChange(() => (revision += 1));
  onDestroy(stop);

  const resolved = $derived.by(() => {
    revision; // dependency: pack/theme changes re-resolve
    return resolveIcon(name, pack);
  });

  const box = $derived(size ? `${size}px` : '1em');
  const label = $derived(alt || name);

  // a missing pack SVG (never expected, always planned for) falls back to
  // the same Twemoji path the engine would have chosen
  let svgBroken = $state(false);
  $effect(() => {
    resolved?.kind;
    svgBroken = false;
  });
</script>

{#if resolved?.kind === 'svg' && !svgBroken}
  {#key resolved.src}
    <img
      src={resolved.src}
      alt={label}
      title={alt || undefined}
      class="shrink-0 select-none {klass}"
      style="width:{box};height:{box};object-fit:contain"
      draggable="false"
      aria-hidden={alt ? undefined : 'true'}
      onerror={() => (svgBroken = true)}
    />
  {/key}
{:else if resolved?.kind === 'emoji'}
  <Twemoji emoji={resolved.emoji} {size} alt={alt || undefined} class={klass} />
{:else}
  <!-- unknown name: invisible spacer keeps layouts intact -->
  <span class="inline-block shrink-0 {klass}" style="width:{box};height:{box}"></span>
{/if}
