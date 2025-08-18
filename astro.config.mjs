import { defineConfig } from 'astro/config';

// Configure for GitHub Pages deployment under /Researchforeveryone
export default defineConfig({
  site: 'https://omarzahi.github.io/Researchforeveryone',
  base: '/Researchforeveryone',
  publicDir: './assets',
  outDir: './dist',
  server: { host: true },
});
