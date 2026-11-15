<script>
  // Interactive 3D Minecraft character (skinview3d WebGL): drag to rotate,
  // wheel to zoom, smooth idle/walk animation. Textures resolve through the
  // shared account store's `proxy_skin_png` backend (data URI output — local
  // PNG paths, https URLs and Ely.by nicknames all work without CORS or
  // asset-protocol issues); a failed proxy falls back to direct loading and
  // a missing/broken texture falls back to the default Steve model.
  import { onMount } from 'svelte';
  import { SkinViewer, IdleAnimation, WalkingAnimation } from 'skinview3d';
  import { skinDataUri } from './accounts.svelte.js';

  let {
    skin = null,
    cape = null,
    model = null,
    width = 260,
    height = 340,
    walking = false,
    autorotate = false,
    zoom = 0.85,
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

  onMount(() => {
    viewer = new SkinViewer({
      canvas,
      width,
      height,
      zoom,
      fov: 55,
    });
    viewer.controls.enablePan = false;
    viewer.controls.enableZoom = true;
    viewer.autoRotate = autorotate;
    viewer.animation = walking ? new WalkingAnimation() : new IdleAnimation();
    applyTextures();
    return () => {
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
    // resolved sources + model feed the viewer; re-apply on change
    applyTextures();
  });

  $effect(() => {
    if (viewer) viewer.animation = walking ? new WalkingAnimation() : new IdleAnimation();
  });

  $effect(() => {
    if (viewer) viewer.autoRotate = autorotate;
  });

  $effect(() => {
    if (viewer) viewer.setSize(width, height);
  });
</script>

<canvas bind:this={canvas} style="width:{width}px;height:{height}px;display:block"></canvas>
