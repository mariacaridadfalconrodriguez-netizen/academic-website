import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// GitHub Pages deployment configuration.
// The site is served from https://<user>.github.io/<repo>/
// Update `site` and `base` here if you rename the repository or use a custom domain.
const SITE = 'https://mariacaridadfalconrodriguez-netizen.github.io';
const BASE = '/academic-website';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    plugins: [yaml()],
  },
});
