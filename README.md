# PKL Di Saka - Astro + Bootstrap 5

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di /dist
npm run preview
```

## Yang WAJIB diganti sebelum online (cari "TODO")
1. Domain: `astro.config.mjs` (SITE_URL), `src/data/site.ts` (SITE.url), `public/robots.txt`, `public/llms.txt`
2. `src/data/site.ts`: email, tahun berdiri, jam operasional, link sosial media, koordinat (cek di Google Maps)
3. Portofolio (`PROJECTS`), blog (`POSTS`), daftar jurusan (`MAJORS`), kepanjangan CRO
4. Ganti `public/og-default.png` (1200x630) dan `logo.png` dengan logo asli

## WhatsApp
- `/wa` dan `/daftar` otomatis redirect ke wa.me/6282131087971 (lihat `redirects` di astro.config.mjs)

## Setelah deploy
- Daftarkan ke Google Search Console & Bing Webmaster, submit `/sitemap-index.xml`
- Klaim & lengkapi Google Business Profile (NAP harus sama persis dengan website)
- Uji schema: https://validator.schema.org dan Rich Results Test
