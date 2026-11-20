import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
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
