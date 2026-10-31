import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://pkldisaka.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'id', locales: { id: 'id-ID' } },
    }),
  ],
  redirects: {
    '/cara-daftar-magang': '/cara-daftar/',
    '/program': '/program-pkl/',
    '/wa': 'https://wa.me/6282131087971?text=Halo%20PKL%20Di%20Saka%2C%20saya%20ingin%20bertanya%20tentang%20magang.',
    '/daftar': '/cara-daftar/',
    '/program-pkl/galeri': '/galeri/',
  },
});

