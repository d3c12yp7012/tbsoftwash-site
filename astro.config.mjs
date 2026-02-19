// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://d3c12yp7012.github.io/tbsoftwash-site/',
  output: 'static',
  compressHTML: true,
  vite: {
    build: {
      minify: 'esbuild',
    }
  }
});