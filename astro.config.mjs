import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({

  env: {
    schema: {
      DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      DATABASE_TOKEN: envField.string({ context: 'server', access: 'secret' })
    }
  },
  
  output: 'server',
  adapter: vercel(),
  // server: {
  //   host: true,
  //   port: 4444
  // }

    // build: {
  //   esbuild: {
  //     logLevel: 'silent'
  //   }
  // },

  // build: {
  //   assets: 'static'
  // },
});
