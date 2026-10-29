export interface GaleriItem {
  id: string;
  title: string;
  category: 'pelepasan' | 'studio' | 'mentor' | 'produksi';
  categoryLabel: string;
  batch: string;
  school: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
}

export const GALERI_ITEMS: GaleriItem[] = [
  {
    id: 'galeri-01',
    title: 'Penyerahan Sertifikat Resmi & Pelepasan Siswa PKL',
    category: 'pelepasan',
    categoryLabel: 'Pelepasan & Sertifikat',
    batch: 'Batch Genap 2025/2026',
    school: 'SMK Mambaul Ihsan Gresik',
    date: 'Maret 2026',
    image: '/images/4.webp',
    description: 'Momen penuh kebanggaan saat peserta magang dari SMK Mambaul Ihsan Gresik menerima sertifikat kompetensi resmi setelah sukses menuntaskan program PKL terstruktur selama 6 bulan di Saka.',
    tags: ['Sertifikasi', 'SMK Mambaul Ihsan Gresik', 'Kelulusan PKL', 'Vokasi'],
  },
  {
    id: 'galeri-02',
    title: 'Pelepasan Murid Magang SMK NU Sunan Ampel',
    category: 'pelepasan',
    categoryLabel: 'Pelepasan & Sertifikat',
    batch: 'Batch Ganjil 2024/2025',
    school: 'SMK NU Sunan Ampel',
    date: 'Desember 2024',
    image: '/images/7.webp',
    description: 'Sesi perpisahan hangat pelepasan murid magang SMK NU Sunan Ampel bersama para mentor industri, berbagi kesan pesan, makan bersama, dan kenang-kenangan kebersamaan selama masa praktik kerja.',
    tags: ['Pelepasan Magang', 'SMK NU Sunan Ampel', 'Kenang-Kenangan', 'Budaya Kerja'],
  },
  {
    id: 'galeri-03',
    title: 'Aktivitas Studio Desain Visual & Layout Kampanye',
    category: 'studio',
    categoryLabel: 'Studio & Kerja',
    batch: 'Divisi DKV & Multimedia',
    school: 'SMKN 1 Pasuruan',
    date: 'Februari 2026',
    image: '/images/12.webp',
    description: 'Peserta divisi Desain Komunikasi Visual dari SMKN 1 Pasuruan sedang menyusun panduan visual identitas brand, aset banner promosi, dan feed media sosial klien UMKM.',
    tags: ['Studio DKV', 'SMKN 1 Pasuruan', 'Graphic Design', 'Branding'],
  },
  {
    id: 'galeri-04',
    title: 'Sesi Mentoring Teknis & Code Review Terstruktur',
    category: 'mentor',
    categoryLabel: 'Bimbingan Mentor',
    batch: 'Divisi RPL & Website',
    school: 'SMKN 11 Malang & SMKN 1 Trenggalek',
    date: 'Januari 2026',
    image: '/images/21.webp',
    description: 'Bimbingan intensif satu-lawan-satu untuk siswa RPL dari SMKN 11 dan SMKN 1 Trenggalek dengan mentor industri seputar best practice struktur web modern, optimasi kecepatan, dan integrasi API.',
    tags: ['Mentoring', 'SMKN 11 Malang', 'SMKN 1 Trenggalek', 'Web Development'],
  },
  {
    id: 'galeri-05',
    title: 'Produksi Souvenir Promosi & Merchandise Industri',
    category: 'produksi',
    categoryLabel: 'Produksi & Merchandise',
    batch: 'Divisi Produksi Merchandise',
    school: 'SMKN 1 Kepanjen & SMKN 2 Singosari',
    date: 'Januari 2026',
    image: '/images/1.webp',
    description: 'Praktik langsung pengoperasian mesin heat press, perakitan hardbox kemasan souvenir, dan quality control produk cinderamata pesanan instansi.',
    tags: ['Cetak Merchandise', 'Packaging', 'Quality Control', 'Karya Siswa'],
  },
  {
    id: 'galeri-06',
    title: 'Sesi Foto & Rekaman Video Produk di Mini Studio',
    category: 'studio',
    categoryLabel: 'Studio & Kerja',
    batch: 'Divisi Foto & Video',
    school: 'SMKN 4 Malang',
    date: 'Februari 2026',
    image: '/images/15.webp',
    description: 'Eksplorasi penataan lighting softbox studio, angle kamera tripod, dan proses pengambilan katalog foto produk komersial.',
    tags: ['Studio Foto', 'Softbox Lighting', 'Video Produk', 'Videografi'],
  },
  {
    id: 'galeri-07',
    title: 'Diskusi Kolaboratif & Presentasi Mingguan Proyek',
    category: 'mentor',
    categoryLabel: 'Bimbingan Mentor',
    batch: 'Divisi Digital Marketing & Bisnis',
    school: 'SMK PGRI 3 Malang',
    date: 'Januari 2026',
    image: '/images/13.webp',
    description: 'Sesi presentasi riset kata kunci dan evaluasi performa pemasaran digital di hadapan rekan tim lintas divisi dalam forum bimbingan mingguan.',
    tags: ['Presentasi', 'Riset Kata Kunci', 'Evaluasi Proyek', 'Public Speaking'],
  },
  {
    id: 'galeri-08',
    title: 'Pengenalan Budaya Kerja & Orientasi Perdana Siswa',
    category: 'studio',
    categoryLabel: 'Studio & Kerja',
    batch: 'Orientasi Angkatan Baru',
    school: 'SMKN 8 Malang & SMKN 1 Turen',
    date: 'November 2025',
    image: '/images/6.webp',
    description: 'Hari pertama pengenalan lingkungan kantor, etalase produk industri, fasilitas kerja, pembagian mentor, dan penetapan target pembelajaran selama periode magang.',
    tags: ['Orientasi', 'Showroom Produk', 'Pengenalan Kantor', 'Saka Malang'],
  },
];

export const GALERI_CATEGORIES = [
  { id: 'all', label: 'Semua Momen' },
  { id: 'pelepasan', label: 'Pelepasan & Kenangan' },
  { id: 'studio', label: 'Studio & Suasana Kerja' },
  { id: 'mentor', label: 'Bimbingan Mentor' },
  { id: 'produksi', label: 'Produksi & Merchandise' },
] as const;
