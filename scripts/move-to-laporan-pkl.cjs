const fs = require('fs');

const sourcePath = 'src/pages/dokumen-pkl/contoh-laporan-pkl-smk.astro';
const targetPath = 'src/pages/dokumen-pkl/laporan-pkl.astro';

let content = fs.readFileSync(sourcePath, 'utf8');

// Update breadcrumbs and path to /dokumen-pkl/laporan-pkl/
content = content.replace(/path="\/dokumen-pkl\/contoh-laporan-pkl-smk\/"/g, 'path="/dokumen-pkl/laporan-pkl/"');
content = content.replace(/path: '\/dokumen-pkl\/contoh-laporan-pkl-smk\/'/g, "path: '/dokumen-pkl/laporan-pkl/'");
content = content.replace(/title="Contoh Laporan PKL SMK Lengkap Doc & Naskah Format Word Baku \| pkldisaka\.id"/, 'title="Contoh Laporan PKL SMK Lengkap Doc & Panduan Penulisan Laporan Akhir | pkldisaka.id"');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Created src/pages/dokumen-pkl/laporan-pkl.astro with full doc content!');

// Hapus file contoh-laporan-pkl-smk.astro agar tidak duplikat rute
if (fs.existsSync(sourcePath)) {
  fs.unlinkSync(sourcePath);
  console.log('Removed temporary file contoh-laporan-pkl-smk.astro');
}
