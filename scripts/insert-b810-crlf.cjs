const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

// Normalize CRLF to LF temporarily for search
const isCRLF = pklData.includes('\r\n');
if (isCRLF) {
  pklData = pklData.replace(/\r\n/g, '\n');
}

const targetSnippet = `    relatedUrls: ['/dokumen-pkl/surat-pengantar/', '/cara-daftar/', '/program-pkl/alur-seleksi/'],
  },`;

const newSnippet = `    relatedUrls: ['/dokumen-pkl/surat-pengantar/', '/cara-daftar/', '/program-pkl/alur-seleksi/'],
  },
  {
    id: 'B8-10',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/contoh-laporan-pkl-smk/',
    slug: 'contoh-laporan-pkl-smk',
    categorySlug: 'dokumen-pkl',
    title: 'Contoh Laporan PKL SMK Lengkap Doc & PDF Sesuai Standar Industri | pkldisaka.id',
    h1: 'Contoh Laporan PKL SMK Lengkap Beserta Struktur Format Doc',
    metaDescription: 'Contoh laporan PKL SMK lengkap dan benar: susunan cover, motto, lembar persembahan, Bab I Pendahuluan, Bab II Tinjauan DUDI, Bab III Hasil Belajar & Dokumentasi Kerja, Bab IV Penutup.',
    summary: 'Format baku contoh laporan Praktik Kerja Lapangan (PKL) SMK dan portofolio magang industri yang terstruktur rapi, siap pakai sebagai panduan penyusunan laporan penilaian sekolah.',
    targetDate: '10/01/2026',
    status: 'Panduan & Template Faktual',
    sections: [
      {
        heading: 'Format Halaman Judul, Motto & Lembar Persembahan',
        content: 'Dokumentasi portofolio PKL diawali dengan halaman judul resmi sekolah/perusahaan, motto hidup penyemangat, kata persembahan penuh rasa syukur untuk kedua orang tua tercinta, bapak/ibu guru pembimbing, serta pimpinan dan rekan industri tempat magang.',
      },
      {
        heading: 'Sistematika Bab I: Pendahuluan PKL',
        content: 'Memuat latar belakang link and match pendidikan kejuruan SMK dengan dunia usaha, pengertian PKL, maksud dan tujuan pengembangan etos kerja dan profesionalisme, manfaat bagi siswa dan sekolah, serta manfaat penulisan portofolio resmi.',
      },
      {
        heading: 'Sistematika Bab II: Tinjauan Umum DUDI (CV Saudagar Kaya Abadi)',
        content: 'Uraian tempat dan waktu pelaksanaan sistem 5 hari kerja (Senin - Jumat pukul 08.00-16.00 WIB), sejarah singkat perusahaan, visi misi, bagan struktur organisasi DUDIKA, tata tertib K3, etika perilaku, prosedur kerja, serta aturan disiplin.',
      },
      {
        heading: 'Sistematika Bab III: Proses & Hasil Belajar Nyata di Tempat PKL',
        content: 'Rincian 13 aktivitas nyata: briefing pagi, piket kerja, pembuatan website Blogger, perancangan desain visual AI, monitoring performa Google Search Console, riset keyword SEO, penulisan artikel web, promosi Google Local Guide/Maps, packing safety box, hingga perakitan totebag souvenir.',
      },
      {
        heading: 'Sistematika Bab IV: Penutup & Solusi Hambatan Kerja',
        content: 'Pemecahan masalah adaptasi lingkungan dan keterbatasan pengetahuan awal melalui komunikasi aktif, peningkatan kedisiplinan dan rasa percaya diri, serta kesimpulan capaian kompetensi industri nyata sebagai bekal masa depan.',
      },
    ],
    faqs: [
      {
        q: 'Apakah contoh laporan PKL SMK ini bisa diadaptasi untuk semua jurusan kejuruan?',
        a: 'Tentu bisa. Kerangka bab pendahuluan, profil industri DUDI, dan bab penutup berlaku standar untuk semua sekolah SMK, sedangkan Bab III disesuaikan dengan jenis pekerjaan divisi masing-masing (RPL, TKJ, DKV, Multimedia, Pemasaran).',
      },
      {
        q: 'Bagaimana cara mengisi Bab III agar dinilai memuaskan oleh guru penguji?',
        a: 'Sertakan foto dokumentasi nyata setiap aktivitas harian, jelaskan alat/software yang digunakan, uraikan langkah kerja secara urut, dan cantumkan hasil output portofolio yang telah diselesaikan.',
      },
      {
        q: 'Kapan laporan PKL SMK harus disahkan oleh pihak industri?',
        a: 'Laporan disahkan pada minggu terakhir pelaksanaan magang setelah seluruh target pekerjaan dan draft laporan direview serta ditandatangani oleh mentor industri CV Saudagar Kaya Abadi.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/laporan-pkl/', '/dokumen-pkl/jurnal-harian/', '/dokumen-pkl/presentasi/'],
  },`;

if (!pklData.includes(targetSnippet)) {
  console.error('Target snippet still not found in normalized pklData.ts!');
  process.exit(1);
}

pklData = pklData.replace(targetSnippet, newSnippet);
if (isCRLF) {
  pklData = pklData.replace(/\n/g, '\r\n');
}
fs.writeFileSync(pklDataPath, pklData, 'utf8');
console.log('Successfully inserted B8-10 with matching line endings!');
