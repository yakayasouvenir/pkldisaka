// src/data/testimonials.ts
// Data Testimoni Siswa PKL & Mahasiswa Magang di Saka Malang

export interface TestimonialItem {
  id: string;
  name: string;
  school: string;
  city: string;
  division: string;
  avatar: string;
  quote: string;
  rating: number;
  batch: string;
  badge: string;
  hasVideo: boolean;
  videoDuration?: string;
  videoTitle?: string;
  videoThumbnail?: string;
  tags: string[];
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-01',
    name: 'Dian Permata Sari',
    school: 'SMK Negeri 4 Malang (Grafika)',
    city: 'Kota Malang',
    division: 'Desain Komunikasi Visual (DKV)',
    avatar: '/images/pkl/12.webp',
    quote:
      'Magang di Saka bener-bener tempat paling asik! Gak ada senioritas sama sekali, mentornya humble dan ngebimbing dari nol. Aku belajar desain kemasan nyata klien dan portofolioku jadi tebal banget pas balik ke sekolah.',
    rating: 5,
    batch: 'Batch Genap 2025/2026',
    badge: 'Alumni DKV',
    hasVideo: true,
    videoDuration: '0:48',
    videoTitle: 'Kesan Dian tentang Budaya Kerja Tanpa Senioritas di Saka',
    videoThumbnail: '/images/pkl/12.webp',
    tags: ['No Senioritas', 'Desain Kemasan', 'SMKN 4 Malang', 'Portfolio'],
  },
  {
    id: 'testi-02',
    name: 'Ahmad Faiz Fauzan',
    school: 'SMK NU Sunan Ampel Poncokusumo',
    city: 'Kabupaten Malang',
    division: 'Multimedia & Video Creator',
    avatar: '/images/pkl/15.webp',
    quote:
      'Paling suka jam kerjanya yang manusiawi banget: 08:00 sampai 16:00, Sabtu-Minggu libur! Istirahat Dzuhur 1,5 jam cukup banget buat sholat dan makan santai bareng teman-teman. Suasananya family friendly!',
    rating: 5,
    batch: 'Batch Ganjil 2024/2025',
    badge: 'Alumni Multimedia',
    hasVideo: true,
    videoDuration: '1:02',
    videoTitle: 'Ahmad Faiz: Jam Kerja 5 Hari & Istirahat Santai di Saka',
    videoThumbnail: '/images/pkl/15.webp',
    tags: ['5 Hari Kerja', 'Istirahat 1.5 Jam', 'Family Friendly', 'Video Creator'],
  },
  {
    id: 'testi-03',
    name: 'Rizky Pratama Alamsyah',
    school: 'SMK Negeri 1 Pasuruan',
    city: 'Kota Pasuruan',
    division: 'Rekayasa Perangkat Lunak (RPL)',
    avatar: '/images/pkl/21.webp',
    quote:
      'Di sini kami beneran ngerjain website dan SEO proyek live, bukan disuruh fotokopi atau bikin kopi. Mentor teknisnya asik banget diajak diskusi arsitektur web modern. Pengalaman paling berharga selama masa SMK!',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni RPL & Web',
    hasVideo: false,
    tags: ['Web Development', 'Mentor Ramah', 'Proyek Nyata', 'SMKN 1 Pasuruan'],
  },
  {
    id: 'testi-04',
    name: 'Nabila Azzahra',
    school: 'SMK Negeri 1 Malang',
    city: 'Kota Malang',
    division: 'Digital Marketing & Pemasaran',
    avatar: '/images/pkl/13.webp',
    quote:
      'Briefing pagi jam 8 seru banget, mentor selalu dengerin ide-ide kita. Gak ada rasa takut salah karena semua diajarin bareng-bareng. Teman-teman magang dari berbagai sekolah juga kompak banget kayak keluarga sendiri.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni Marketing',
    hasVideo: true,
    videoDuration: '0:55',
    videoTitle: 'Nabila: Briefing Pagi Santai & Lingkungan Saling Support',
    videoThumbnail: '/images/pkl/13.webp',
    tags: ['Briefing Pagi', 'Digital Marketing', 'SMKN 1 Malang', 'Grow Bersama'],
  },
  {
    id: 'testi-05',
    name: 'Bagus Wicaksono',
    school: 'SMK Mamba\'ul Ihsan Gresik',
    city: 'Kabupaten Gresik',
    division: 'Produksi Merchandise & Kemasan',
    avatar: '/images/pkl/1.webp',
    quote:
      'Datang jauh-jauh dari Gresik buat PKL di Malang, Saka bikin ngerasa seperti rumah kedua. Fasilitas studio lengkap, alat kerja memadai, dan pelepasan magangnya berkesan banget dapet sertifikat resmi.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni Produksi',
    hasVideo: false,
    tags: ['Anak Luar Kota', 'Sertifikat Resmi', 'Merchandise', 'Gresik'],
  },
  {
    id: 'testi-06',
    name: 'Clara Anindya',
    school: 'Universitas Muhammadiyah Malang (UMM)',
    city: 'Kota Malang',
    division: 'Content Creator & Sosial Media',
    avatar: '/images/pkl/22.webp',
    quote:
      'Sebagai mahasiswa magang, Saka memberikan ruang eksplorasi kreatif yang luas. Mentor memberi kebebasan berinovasi dengan panduan profesional. Tempat grow bersama terbaik buat siapa saja yang mau maju!',
    rating: 5,
    batch: 'Mahasiswa Magang MBKM 2026',
    badge: 'Alumni Vokasi UMM',
    hasVideo: true,
    videoDuration: '1:15',
    videoTitle: 'Clara (UMM): Magang MBKM Seru & Portofolio Konten Kreatif',
    videoThumbnail: '/images/pkl/22.webp',
    tags: ['Mahasiswa Magang', 'UMM', 'Content Creator', 'Eksplorasi Kreatif'],
  },
];

