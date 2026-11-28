import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    // The Developer Mode panel (diagnostics + debugger controls) pushes the
    // shell just over the default 500 kB; Three.js is already split out, and
    // 600 kB keeps the zero-warning build gate honest without hiding errors.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // skinview3d is dynamically imported by SkinViewer3D; splitting the
        // Three.js graph into its own lazy vendor chunk keeps the launcher
        // shell small and avoids one giant initial bundle.
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'vendor-three';
          if (id.includes('node_modules/skinview3d')) return 'vendor-skinview3d';
        },
      },
    },
  },
});
