const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

const targetStr = "id: 'B8-09',";
const targetIdx = pklData.indexOf(targetStr);
const endOfB809Section = pklData.indexOf("relatedUrls: ['/cara-daftar/', '/dokumen-pkl/surat-pengantar/'],", targetIdx);
const closingBrace = pklData.indexOf("  },", endOfB809Section);

console.log('Closing brace of B8-09 found at:', closingBrace);
console.log(pklData.substring(closingBrace, closingBrace + 40));

const newEntry = `
  {
    id: 'B8-10',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/contoh-laporan-pkl-smk/',
    slug: 'contoh-laporan-pkl-smk',
    categorySlug: 'dokumen-pkl',
    title: 'Contoh Laporan PKL SMK Lengkap Doc & PDF Sesuai Standar Industri | pkldisaka.id',
    h1: 'Contoh Laporan PKL SMK Lengkap Beserta Struktur Format Doc',
    metaDescription: 'Contoh laporan PKL SMK lengkap dan benar: susunan cover, lembar pengesahan, Bab I Pendahuluan, Bab II Tinjauan DUDI, Bab III Hasil Belajar & Dokumentasi Kerja, Bab IV Penutup.',
    summary: 'Format baku contoh laporan Praktik Kerja Lapangan (PKL) SMK dan portofolio magang industri yang terstruktur rapi, siap pakai sebagai panduan penyusunan laporan penilaian sekolah.',
    targetDate: '10/01/2026',
    status: 'Panduan & Template Faktual',
    sections: [
      {
        heading: 'Format Halaman Judul & Lembar Persembahan',
        content: 'Dokumentasi portofolio PKL diawali dengan halaman judul resmi sekolah/perusahaan, motto hidup penyemangat, kata persembahan penuh rasa syukur untuk orang tua, guru pembimbing, serta pimpinan dan rekan industri.',
      },
      {
        heading: 'Sistematika Bab I: Pendahuluan PKL',
        content: 'Memuat latar belakang link and match pendidikan vokasi, pengertian PKL, maksud dan tujuan pengembangan karakter mutu kerja, serta manfaat penulisan portofolio bagi siswa.',
      },
      {
        heading: 'Sistematika Bab II: Tinjauan Umum DUDI (CV Saudagar Kaya Abadi)',
        content: 'Profil perusahaan, sejarah singkat pendirian, visi misi, struktur organisasi industri, tata tertib 5 hari kerja (08.00-16.00 WIB), penerapan K3, etika kerja, hingga prosedur magang.',
      },
      {
        heading: 'Sistematika Bab III: Proses & Hasil Belajar Nyata di Industri',
        content: 'Rincian tugas nyata: briefing pagi, piket kerja, pembuatan website Blogger, desain grafis AI, monitoring Google Search Console, riset keyword SEO, promosi Google Maps, packing produk, hingga perakitan totebag.',
      },
      {
        heading: 'Sistematika Bab IV: Penutup & Solusi Hambatan',
        content: 'Rangkuman pemecahan masalah adaptasi dunia kerja, peningkatan soft skill mandiri, serta kesimpulan kompetensi industri nyata sebagai bekal kelulusan vokasi.',
      },
    ],
    faqs: [
      {
        q: 'Apakah contoh laporan PKL SMK ini bisa diadaptasi untuk semua jurusan?',
        a: 'Bisa. Kerangka bab pendahuluan, profil industri, dan penutup berlaku universal, sedangkan bagian Bab III disesuaikan dengan jenis pekerjaan divisi masing-masing (RPL, TKJ, DKV, Multimedia, Pemasaran).',
      },
      {
        q: 'Bagaimana cara mengisi Bab III agar dinilai memuaskan oleh guru penguji?',
        a: 'Sertakan foto dokumentasi nyata setiap aktivitas harian, jelaskan alat/software yang digunakan, uraikan langkah kerja secara urut, dan cantumkan hasil output portofolio yang telah diselesaikan.',
      },
      {
        q: 'Kapan laporan PKL SMK harus disahkan oleh pihak industri?',
        a: 'Laporan disahkan pada minggu terakhir pelaksanaan magang setelah seluruh target pekerjaan dan draft laporan direview serta ditandatangani oleh mentor industri.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/laporan-pkl/', '/dokumen-pkl/jurnal-harian/', '/dokumen-pkl/presentasi/'],
  },`;

const updated = pklData.substring(0, closingBrace + 4) + newEntry + pklData.substring(closingBrace + 4);
fs.writeFileSync(pklDataPath, updated, 'utf8');
console.log('B8-10 inserted successfully!');
