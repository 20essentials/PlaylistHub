import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  build: {
    esbuild: {
      logLevel: 'silent'
    }
  },
  output: 'server',
  integrations: [clerk()],
  adapter: vercel()
});
