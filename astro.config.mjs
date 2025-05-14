import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // build: {
  //   esbuild: {
  //     logLevel: 'silent'
  //   }
  // },
  build: {
    assets: 'static'
  },
  output: 'server',
  adapter: vercel(),
  integrations: [clerk(), preact()],
});