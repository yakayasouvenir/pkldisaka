const fs = require('fs');

const guidePath = 'src/data/guideContent.ts';
let guideData = fs.readFileSync(guidePath, 'utf8');

const isCRLF = guideData.includes('\r\n');
if (isCRLF) guideData = guideData.replace(/\r\n/g, '\n');

const newGuideEntry = `  '/dokumen-pkl/contoh-laporan-pkl-smk/': {
    badge: 'Contoh Laporan PKL SMK (Doc & PDF)',
    boxTitle: 'Dokumentasi Portofolio Praktik Kerja Lapangan (PKL) SMK Lengkap',
    boxSubtitle: 'Panduan format baku laporan PKL SMK siap pakai sebagai acuan penyusunan penilaian kenaikan kelas dan sidang sekolah:',
    keyPointsTitle: 'Sistematika Lengkap Contoh Laporan PKL SMK',
    keyPoints: [
      {
        icon: 'bi-file-earmark-text-fill text-primary',
        title: 'HALAMAN AWAL: MOTTO, PERSEMBAHAN & KATA PENGANTAR',
        desc: 'Memuat halaman judul resmi, motto penyemangat ("Kesuksesan itu bukan ditunggu, tetapi diwujudkan"), lembar persembahan untuk orang tua & guru, serta kata pengantar ucapan terima kasih kepada pimpinan DUDI CV Saudagar Kaya Abadi.',
      },
      {
        icon: 'bi-1-circle-fill text-primary',
        title: 'BAB I: PENDAHULUAN',
        desc: 'Latar belakang keterkaitan Link and Match SMK dengan dunia industri, pengertian PKL, 6 tujuan strategis pengembangan mutu & karakter, manfaat bagi siswa & sekolah, serta 3 manfaat penulisan portofolio resmi.',
      },
      {
        icon: 'bi-2-circle-fill text-primary',
        title: 'BAB II: TINJAUAN UMUM DUDI (CV SAUDAGAR KAYA ABADI)',
        desc: 'Tempat dan waktu 5 hari kerja (08.00-16.00 WIB), sejarah pendirian perusahaan digital marketing & souvenir, visi misi, bagan struktur organisasi DUDIKA, tata tertib K3, etika perilaku, prosedur, serta sanksi.',
      },
      {
        icon: 'bi-3-circle-fill text-primary',
        title: 'BAB III: PROSES & HASIL BELAJAR NYATA DI TEMPAT PKL',
        desc: 'Uraian 13 penugasan nyata: pembuatan web Blogger (contoh: corporategiftindo.com), desain visual AI, monitoring Google Search Console, doa pagi, piket kerja, penulisan artikel SEO, safety box packing, video TikTok, promosi Google Local Guide/Maps, goal framework, content pillar cluster, perakitan totebag, hingga pemecahan hambatan adaptasi.',
      },
      {
        icon: 'bi-4-circle-fill text-primary',
        title: 'BAB IV: PENUTUP & KESIMPULAN',
        desc: 'Kesimpulan capaian selama 6 bulan praktik di industri: penguasaan keterampilan teknis digital dan pembentukan karakter mandiri, disiplin, serta siap kerja di era digital.',
      },
    ],
    checklistTitle: 'Daftar Gambar & Dokumentasi Kegiatan Wajib',
    checklists: [
      'Gambar 2.2 Logo Perusahaan & Gambar 2.3 Struktur Organisasi DUDIKA',
      'Gambar 3.2.1 Tampilan Pembuatan Web di Blogger & Google Search Console',
      'Gambar 3.2.2 Desain Visual Menggunakan AI & Artikel Website',
      'Gambar 3.2.7-3.2.13 Dokumentasi Perakitan Box Souvenir & Totebag Merchandise',
    ],
    tipsTitle: 'Asistensi Penyusunan Laporan di Saka',
    tipsContent: 'Mentor CV Saudagar Kaya Abadi mendampingi siswa dalam penyusunan bab demi bab laporan, pengecekan data analitik website, hingga penandatanganan lembar pengesahan resmi.',
  },
`;

const insertMarker = "export const GUIDE_SPECIAL_CONTENT: Record<string, GuideSpecialContent> = {\n";
if (!guideData.includes(insertMarker)) {
  console.error('Insert marker not found in guideContent.ts!');
  process.exit(1);
}

guideData = guideData.replace(insertMarker, insertMarker + newGuideEntry);
if (isCRLF) guideData = guideData.replace(/\n/g, '\r\n');

fs.writeFileSync(guidePath, guideData, 'utf8');
console.log('Successfully updated guideContent.ts!');
