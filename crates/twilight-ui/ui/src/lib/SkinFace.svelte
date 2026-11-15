<script>
  // Shared 2D skin avatar: the 8×8 base face crop PLUS the hat/outer layer
  // stacked on top (both layers every time — the outer layer is what a flat
  // single-crop avatar loses). Sizing adapts to 64×64 and legacy 64×32
  // skins by reading the PNG header, so nothing distorts.
  //
  // Minecraft skin geometry (square element, skin always 64px wide):
  //   background-size  = 800% × (800·H/W)%   (8× element, aspect-true)
  //   base face  (8,8)  → position 14.2857% p_y%   (p_x = 1/7)
  //   hat layer (40,8)  → position 71.4286% p_y%   (p_x = 5/7)
  //   p_y = 100/(8·H/W − 1): 14.2857% for 64×64, 33.3333% for 64×32
  import { onDestroy } from 'svelte';
  import { skinDataUri, parsePngSize } from './accounts.svelte.js';

  let {
    source = null,
    size = 32,
    letter = null,
    class: klass = '',
  } = $props();

  let uri = $state(null);
  let ratio = $state(1); // H/W of the resolved PNG (1 = square, .5 = legacy)
  let seq = 0;

  $effect(() => {
    const src = source;
    const mine = ++seq;
    (async () => {
      const next = await skinDataUri(src);
      if (mine !== seq) return;
      uri = next;
      const dims = next ? parsePngSize(next) : null;
      ratio = dims && dims.height && dims.width ? dims.height / dims.width : 1;
    })();
  });

  onDestroy(() => {
    seq += 1; // invalidate in-flight resolutions after unmount
  });

  const sizeY = $derived((800 * ratio).toFixed(4));
  const posY = $derived((100 / (8 * ratio - 1)).toFixed(4));
  const faceStyle = $derived.by(() => {
    if (!uri) return '';
    return (
      `background-image:url(${uri});` +
      `background-size:800% ${sizeY}%;` +
      `image-rendering:pixelated;`
    );
  });
</script>

<span
  class="relative inline-block shrink-0 overflow-hidden {klass}"
  style="width:{size}px;height:{size}px"
>
  {#if uri}
    <!-- base layer: the face at skin (8, 8) -->
    <span
      class="absolute inset-0"
      style={`${faceStyle}background-position:14.2857% ${posY}%`}
    ></span>
    <!-- outer/hat layer: the overlay at skin (40, 8), stacked on top -->
    <span
      class="absolute inset-0"
      style={`${faceStyle}background-position:71.4286% ${posY}%`}
    ></span>
  {:else if letter}
    <span
      class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"
      style="font-size:{size * 0.45}px"
    >
      {letter}
    </span>
  {/if}
</span>
