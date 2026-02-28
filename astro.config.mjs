import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// Reuse existing /assets directory as Astro's publicDir to avoid moving files.
export default defineConfig({
  publicDir: './assets',
  outDir: './dist',
  server: { host: true },
  integrations: [tailwind()],
});