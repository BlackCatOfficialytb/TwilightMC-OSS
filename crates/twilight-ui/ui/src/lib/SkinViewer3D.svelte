<script>
  // Interactive 3D Minecraft character (skinview3d WebGL): drag to rotate,
  // wheel to zoom, smooth idle/walk animation. Textures resolve from https
  // URLs (Microsoft profile skins), data URLs or local PNG paths via the
  // Tauri asset protocol; a missing/broken texture falls back to the default
  // Steve model.
  import { onMount } from 'svelte';
  import { SkinViewer, IdleAnimation, WalkingAnimation } from 'skinview3d';

  let {
    skin = null,
    cape = null,
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

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
    return core.invoke(cmd, args);
  }

  /// https/data URLs pass through; local absolute paths go through the
  /// asset protocol (enabled with scope "**" in tauri.conf.json).
  function resolveTexture(value) {
    if (!value) return null;
    const v = String(value).trim();
    if (!v) return null;
    if (/^(https?:|data:)/i.test(v)) return v;
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return convert ? convert(v) : v;
  }

  function applyTextures() {
    if (!viewer) return;
    const s = resolveTexture(skin);
    const c = resolveTexture(cape);
    if (s !== loadedSkin) {
      loadedSkin = s;
      if (s) viewer.loadSkin(s, { model: 'auto-detect' }).catch(() => {});
      else viewer.resetSkin();
    }
    if (c !== loadedCape) {
      loadedCape = c;
      if (c) viewer.loadCape(c).catch(() => {});
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
    // texture props are read inside applyTextures — re-apply on change
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
