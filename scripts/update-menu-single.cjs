const fs = require('fs');

// 1. Update site.ts NAV
const sitePath = 'src/data/site.ts';
let site = fs.readFileSync(sitePath, 'utf8');

const isCRLF = site.includes('\r\n');
if (isCRLF) site = site.replace(/\r\n/g, '\n');

// Kembalikan satu entry laporan-pkl di Panduan & Edukasi tetapi dengan label yang mengandung "Contoh Laporan PKL SMK"
const targetBlock = `{ href: '/dokumen-pkl/contoh-laporan-pkl-smk/', label: 'Contoh Laporan PKL SMK', desc: 'Format doc & struktur laporan baku DUDI', icon: 'bi-file-earmark-word-fill' },
      { href: '/dokumen-pkl/laporan-pkl/', label: 'Laporan Akhir PKL', desc: 'Sistematika bab laporan sekolah', icon: 'bi-journal-bookmark' },`;

const replacementBlock = `{ href: '/dokumen-pkl/laporan-pkl/', label: 'Contoh Laporan PKL SMK', desc: 'Format doc & naskah laporan baku DUDI', icon: 'bi-file-earmark-word-fill' },`;

if (site.includes(targetBlock)) {
  site = site.replace(targetBlock, replacementBlock);
} else {
  // If not found in that exact form, replace the single one
  site = site.replace(
    `{ href: '/dokumen-pkl/laporan-pkl/', label: 'Laporan Akhir PKL', desc: 'Sistematika bab laporan sekolah', icon: 'bi-journal-bookmark' },`,
    replacementBlock
  );
}

if (isCRLF) site = site.replace(/\n/g, '\r\n');
fs.writeFileSync(sitePath, site, 'utf8');
console.log('site.ts NAV updated!');

// 2. Update Footer.astro
const footerPath = 'src/components/Footer.astro';
let footer = fs.readFileSync(footerPath, 'utf8');
footer = footer.replace(
  '          <li><a href="/dokumen-pkl/contoh-laporan-pkl-smk/">Contoh Laporan PKL</a></li>\n',
  ''
);
footer = footer.replace(
  '          <li><a href="/dokumen-pkl/contoh-laporan-pkl-smk/">Contoh Laporan PKL</a></li>\r\n',
  ''
);
footer = footer.replace(
  '<li><a href="/dokumen-pkl/laporan-pkl/">Laporan Akhir</a></li>',
  '<li><a href="/dokumen-pkl/laporan-pkl/">Contoh Laporan PKL SMK</a></li>'
);
fs.writeFileSync(footerPath, footer, 'utf8');
console.log('Footer.astro updated!');
