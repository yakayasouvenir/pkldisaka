
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://www.pkldisaka.id';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !pathname.startsWith('/404');
      },
    }),
  ],

  redirects: {
    '/cara-daftar-magang': '/cara-daftar/',
    '/program': '/program-pkl/',
    '/wa': 'https://wa.me/6281334321383?text=Halo%20PKL%20Di%20Saka%2C%20saya%20ingin%20bertanya%20tentang%20magang.',
    '/daftar': '/cara-daftar/',
    '/program-pkl/galeri': '/galeri/',
  },
});
