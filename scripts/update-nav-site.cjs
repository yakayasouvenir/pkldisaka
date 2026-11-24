const fs = require('fs');

const sitePath = 'src/data/site.ts';
let siteData = fs.readFileSync(sitePath, 'utf8');

const isCRLF = siteData.includes('\r\n');
if (isCRLF) siteData = siteData.replace(/\r\n/g, '\n');

// 1. Tambahkan di menu NAV "Panduan & Edukasi"
const targetNav = `{ href: '/dokumen-pkl/laporan-pkl/', label: 'Laporan Akhir PKL', desc: 'Sistematika bab laporan sekolah', icon: 'bi-journal-bookmark' },`;

const replacementNav = `{ href: '/dokumen-pkl/contoh-laporan-pkl-smk/', label: 'Contoh Laporan PKL SMK', desc: 'Format doc & struktur laporan baku DUDI', icon: 'bi-file-earmark-word-fill' },
      { href: '/dokumen-pkl/laporan-pkl/', label: 'Laporan Akhir PKL', desc: 'Sistematika bab laporan sekolah', icon: 'bi-journal-bookmark' },`;

if (!siteData.includes(targetNav)) {
  console.error('Target NAV not found in site.ts!');
  process.exit(1);
}

siteData = siteData.replace(targetNav, replacementNav);
if (isCRLF) siteData = siteData.replace(/\n/g, '\r\n');

fs.writeFileSync(sitePath, siteData, 'utf8');
console.log('Successfully updated NAV in site.ts!');
