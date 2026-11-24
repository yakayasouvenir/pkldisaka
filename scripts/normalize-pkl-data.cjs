const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

const isCRLF = pklData.includes('\r\n');
if (isCRLF) pklData = pklData.replace(/\r\n/g, '\n');

// Hapus B8-10 jika ada
const b810Start = pklData.indexOf("id: 'B8-10',");
if (b810Start !== -1) {
  const blockStart = pklData.lastIndexOf('  {\n', b810Start);
  const blockEnd = pklData.indexOf('  },\n', b810Start) + 5;
  pklData = pklData.substring(0, blockStart) + pklData.substring(blockEnd);
  console.log('Removed redundant B8-10 from pklData.ts');
}

// Perbarui B8-06 agar title & H1-nya memuat "Contoh Laporan PKL SMK"
pklData = pklData.replace(
  "title: 'Struktur & Panduan Penulisan Laporan Akhir PKL | pkldisaka.id',",
  "title: 'Contoh Laporan PKL SMK Lengkap Doc & Panduan Penulisan Laporan Akhir | pkldisaka.id',"
);
pklData = pklData.replace(
  "h1: 'Panduan Menyusun Laporan Akhir PKL',",
  "h1: 'Contoh Laporan PKL SMK Lengkap Beserta Struktur Format Doc',"
);

if (isCRLF) pklData = pklData.replace(/\n/g, '\r\n');
fs.writeFileSync(pklDataPath, pklData, 'utf8');
console.log('pklData.ts normalized!');

// Perbarui blog artikel agar link internal langsung ke /dokumen-pkl/laporan-pkl/
const blogPath = 'src/content/blog/contoh-laporan-pkl-smk.md';
if (fs.existsSync(blogPath)) {
  let blog = fs.readFileSync(blogPath, 'utf8');
  blog = blog.replace(/\/dokumen-pkl\/contoh-laporan-pkl-smk\//g, '/dokumen-pkl/laporan-pkl/');
  fs.writeFileSync(blogPath, blog, 'utf8');
  console.log('Blog article links updated to /dokumen-pkl/laporan-pkl/');
}
