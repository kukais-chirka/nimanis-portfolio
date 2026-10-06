import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chii-agency.com',
  server: { port: 4340 },
  i18n: {
    defaultLocale: 'lv',
    locales: ['lv', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
