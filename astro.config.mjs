import { defineConfig } from 'astro/config';

// Reuse existing /assets directory as Astro's publicDir to avoid moving files.
export default defineConfig({
  publicDir: './assets',
  outDir: './dist',
  server: { host: true },
});
