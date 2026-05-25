// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio principale di produzione (per sitemap + canonical SEO).
  // itmatch.app (apex) e it-match.it puntano qui via redirect 301.
  site: 'https://www.itmatch.app',
  trailingSlash: 'always',
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: { prefixDefaultLocale: false }
  },
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});
