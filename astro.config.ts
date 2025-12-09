// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
});
