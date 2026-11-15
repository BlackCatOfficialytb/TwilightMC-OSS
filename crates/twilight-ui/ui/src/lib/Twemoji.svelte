<script>
  // Renders a Twitter Twemoji SVG from the local `public/twemoji/` assets so
  // iconography stays pixel-identical across every OS and distro (and works
  // fully offline). Unknown glyphs fall back to the raw character.
  //
  // Usage: <Twemoji emoji="⚙" /> or <Twemoji emoji="📂" size={16} />
  // Sizing is em-relative by default (`1em`) so icons align with surrounding
  // text of any size; `size` pins an exact pixel box.
  import { emojiAsset } from './twemoji.js';

  let { emoji = '', size = null, alt = '', class: klass = '' } = $props();

  const src = $derived(emojiAsset(emoji));
  const label = $derived(alt || emoji);
  const box = $derived(size ? `${size}px` : '1em');
</script>

{#if src}
  <img
    {src}
    alt={label}
    title={alt || undefined}
    class="inline-block shrink-0 select-none align-[-0.125em] {klass}"
    style="width: {box}; height: {box};"
    draggable="false"
    aria-hidden={alt ? undefined : 'true'}
  />
{:else}
  <span class="inline-block {klass}" aria-hidden={alt ? undefined : 'true'} title={alt || undefined}>
    {emoji}
  </span>
{/if}
