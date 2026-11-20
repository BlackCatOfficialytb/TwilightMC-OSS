<script>
  // Tiny SVG sparkline for live telemetry; scales to the container width
  // with a soft area fill and a non-scaling stroke.
  let { values = [], color = 'var(--accent)', height = 36 } = $props();

  const W = 100; // viewBox width; preserveAspectRatio=none stretches it

  const points = $derived.by(() => {
    if (values.length < 2) return '';
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    const span = max - min || 1;
    return values
      .map((v, i) => {
        const x = (i / (values.length - 1)) * W;
        const y = height - 2 - ((v - min) / span) * (height - 4);
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(' ');
  });
</script>

<svg
  viewBox="0 0 {W} {height}"
  preserveAspectRatio="none"
  class="block w-full"
  style="height: {height}px"
  aria-hidden="true"
>
  {#if points}
    <polygon points="0,{height} {points} {W},{height}" fill={color} opacity="0.15" />
    <polyline
      {points}
      fill="none"
      stroke={color}
      stroke-width="1.5"
      vector-effect="non-scaling-stroke"
      stroke-linejoin="round"
    />
  {/if}
</svg>
