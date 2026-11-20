<script>
  // Interactive 3D Minecraft character (skinview3d WebGL): drag to rotate,
  // wheel to zoom, smooth idle/walk animation. Textures resolve through the
  // shared account store's `proxy_skin_png` backend (data URI output — local
  // PNG paths, https URLs and Ely.by nicknames all work without CORS or
  // asset-protocol issues); a failed proxy falls back to direct loading and
  // a missing/broken texture falls back to the default Steve model.
  import { onMount } from 'svelte';
  import { skinDataUri } from './accounts.svelte.js';

  // skinview3d pulls all of Three.js, so it is loaded on demand: the launcher
  // shell stays small until a 3D viewer actually mounts (Accounts page or the
  // Client dashboard). Vite splits it into a lazy vendor chunk.
  let classes = null;
  let loadFailed = $state(false);

  let {
    skin = null,
    cape = null,
    model = null,
    width = 260,
    height = 340,
    walking = false,
    autorotate = false,
    zoom = 0.85,
    // outer (hat/jacket) layer control: visible by default, with an optional
    // toggle button rendered under the canvas when `showToggle` is set
    outerLayer = $bindable(true),
    showToggle = false,
  } = $props();

  let canvas = $state(null); // bind:this
  let viewer = null;
  let loadedSkin;
  let loadedCape;
  let loadedModel;

  // resolved texture sources (data URIs after the async proxy round-trip)
  let resolvedSkin = $state(null);
  let resolvedCape = $state(null);
  let texSeq = 0;

  /// Fallback when the backend proxy is unavailable (plain web preview):
  /// https/data URLs pass through; local absolute paths go through the
  /// asset protocol (enabled with scope "**" in tauri.conf.json).
  function fallbackTexture(value) {
    if (!value) return null;
    const v = String(value).trim();
    if (!v) return null;
    if (/^(https?:|data:)/i.test(v)) return v;
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return convert ? convert(v) : v;
  }

  // Account.model stores "slim" (Alex arms) or "classic" (Steve);
  // skinview3d wants "slim" / "default" / "auto-detect".
  function modelType(value) {
    const v = String(value ?? '').trim().toLowerCase();
    if (v === 'slim') return 'slim';
    if (v === 'classic') return 'default';
    return 'auto-detect';
  }

  function applyTextures() {
    if (!viewer) return;
    if (resolvedSkin !== loadedSkin || modelType(model) !== loadedModel) {
      loadedSkin = resolvedSkin;
      loadedModel = modelType(model);
      if (resolvedSkin) {
        viewer.loadSkin(resolvedSkin, { model: loadedModel }).catch(() => {});
      } else {
        viewer.resetSkin();
      }
    }
    if (resolvedCape !== loadedCape) {
      loadedCape = resolvedCape;
      if (resolvedCape) viewer.loadCape(resolvedCape).catch(() => {});
      else viewer.resetCape();
    }
  }

  /// Explicitly drives the outer (hat/jacket/sleeve) layer visibility on
  /// every body part — skinview3d keeps `outerLayer` as a separate Object3D
  /// on each of the six parts, and a skin swap can silently rebuild them.
  function applyOuterLayer() {
    const parts = viewer?.playerObject?.skin;
    if (!parts) return;
    for (const part of [
      parts.head,
      parts.body,
      parts.rightArm,
      parts.leftArm,
      parts.rightLeg,
      parts.leftLeg,
    ]) {
      if (part?.outerLayer) part.outerLayer.visible = outerLayer;
    }
  }

  onMount(() => {
    let disposed = false;
    (async () => {
      try {
        classes = await import('skinview3d');
        if (disposed || !canvas) return;
        viewer = new classes.SkinViewer({
          canvas,
          width,
          height,
          zoom,
          fov: 55,
        });
        viewer.controls.enablePan = false;
        viewer.controls.enableZoom = true;
        viewer.autoRotate = autorotate;
        viewer.animation = walking
          ? new classes.WalkingAnimation()
          : new classes.IdleAnimation();
        applyTextures();
        applyOuterLayer();
      } catch {
        loadFailed = true;
      }
    })();
    return () => {
      disposed = true;
      viewer?.dispose();
      viewer = null;
    };
  });

  $effect(() => {
    // skin/cape props are read here; the async backend round-trip updates
    // the resolved sources, guarded so a fast prop switch never applies a
    // stale response.
    const rawSkin = skin;
    const rawCape = cape;
    const mine = ++texSeq;
    (async () => {
      const proxiedSkin = await skinDataUri(rawSkin);
      const proxiedCape = await skinDataUri(rawCape);
      if (mine !== texSeq) return;
      resolvedSkin = proxiedSkin ?? fallbackTexture(rawSkin);
      resolvedCape = proxiedCape ?? fallbackTexture(rawCape);
    })();
  });

  $effect(() => {
    // resolved sources + model feed the viewer; re-apply on change, then
    // re-assert the outer layer (a fresh skin load rebuilds the parts)
    applyTextures();
    applyOuterLayer();
  });

  $effect(() => {
    // the toggle prop alone also re-drives every part's outer layer
    outerLayer;
    if (viewer) applyOuterLayer();
  });

  $effect(() => {
    if (viewer && classes)
      viewer.animation = walking
        ? new classes.WalkingAnimation()
        : new classes.IdleAnimation();
  });

  $effect(() => {
    if (viewer) viewer.autoRotate = autorotate;
  });

  $effect(() => {
    if (viewer) viewer.setSize(width, height);
  });
</script>

<canvas bind:this={canvas} style="width:{width}px;height:{height}px;display:{loadFailed ? 'none' : 'block'}"></canvas>
{#if loadFailed}
  <p
    role="status"
    class="flex items-center justify-center rounded border border-(--border) bg-(--bg-subtle) text-center text-[11px] text-(--text-muted)"
    style="width:{width}px;height:{height}px"
  >
    3D preview unavailable
  </p>
{/if}
{#if showToggle}
  <button
    class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) {outerLayer
      ? 'text-(--accent)'
      : ''}"
    title="Toggle the hat/jacket outer layer"
    aria-pressed={outerLayer}
    onclick={() => (outerLayer = !outerLayer)}
  >
    Outer layer: {outerLayer ? 'on' : 'off'}
  </button>
{/if}
