import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  // build: {
  //   esbuild: {
  //     logLevel: 'silent'
  //   }
  // },
  env: {
    schema: {
      DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      DATABASE_TOKEN: envField.string({ context: 'server', access: 'secret' }),
      IS_DATABASE_ACTIVE: envField.boolean({
        context: 'server',
        access: 'public'
      })
    }
  },
  build: {
    assets: 'static'
  },
  output: 'server',
  adapter: vercel(),
  integrations: [clerk()]
  // server: {
  //   host: true,
  //   port: 4444
  // }
});
