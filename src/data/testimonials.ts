// src/data/testimonials.ts
// Data Testimoni Siswa PKL & Mahasiswa Magang di Saka Malang (Gen Z & Social Aesthetic)

export interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  school: string;
  city: string;
  division: string;
  avatar: string;
  quote: string;
  highlight: string;
  rating: number;
  batch: string;
  badge: string;
  vibeTag: string;
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
    handle: '@dian.permata',
    school: 'SMK Negeri 4 Malang (Grafika)',
    city: 'Kota Malang',
    division: 'Desain Komunikasi Visual (DKV)',
    avatar: '/images/pkl/12.webp',
    highlight: 'Beneran gak ada senioritas, mentornya super humble!',
    quote:
      'Magang di Saka bener-bener tempat paling asik! Gak ada senioritas sama sekali, mentornya humble dan ngebimbing dari nol. Aku belajar desain kemasan nyata klien dan portofolioku jadi tebal banget pas balik ke sekolah.',
    rating: 5,
    batch: 'Batch Genap 2025/2026',
    badge: 'Alumni DKV',
    vibeTag: '🔥 Vibes: 10/10',
    hasVideo: true,
    videoDuration: '0:48',
    videoTitle: 'Kesan Dian tentang Budaya Kerja Tanpa Senioritas di Saka',
    videoThumbnail: '/images/pkl/12.webp',
    tags: ['#NoSenioritas', '#DesainKemasan', '#SMKN4Malang', '#PortfolioKeren'],
  },
  {
    id: 'testi-02',
    name: 'Ahmad Faiz Fauzan',
    handle: '@faiz.ampel',
    school: 'SMK NU Sunan Ampel Poncokusumo',
    city: 'Kabupaten Malang',
    division: 'Multimedia & Video Creator',
    avatar: '/images/pkl/15.webp',
    highlight: 'Jam kerja 5 hari & istirahat 1,5 jam paling manusiawi!',
    quote:
      'Paling suka jam kerjanya yang manusiawi banget: 08:00 sampai 16:00, Sabtu-Minggu libur! Istirahat Dzuhur 1,5 jam cukup banget buat sholat dan makan santai bareng teman-teman. Suasananya family friendly banget!',
    rating: 5,
    batch: 'Batch Ganjil 2024/2025',
    badge: 'Alumni Multimedia',
    vibeTag: '✨ Work-Life Balance',
    hasVideo: true,
    videoDuration: '1:02',
    videoTitle: 'Ahmad Faiz: Jam Kerja 5 Hari & Istirahat Santai di Saka',
    videoThumbnail: '/images/pkl/15.webp',
    tags: ['#5HariKerja', '#IshomaSantai', '#FamilyFriendly', '#VideoCreator'],
  },
  {
    id: 'testi-03',
    name: 'Rizky Pratama Alamsyah',
    handle: '@rizky.dev',
    school: 'SMK Negeri 1 Pasuruan',
    city: 'Kota Pasuruan',
    division: 'Rekayasa Perangkat Lunak (RPL)',
    avatar: '/images/pkl/21.webp',
    highlight: 'Dikasih pegang proyek live, ilmunya daging semua!',
    quote:
      'Di sini kami beneran ngerjain website dan SEO proyek live, bukan disuruh fotokopi atau bikin kopi. Mentor teknisnya asik banget diajak diskusi arsitektur web modern. Pengalaman paling berharga selama masa SMK!',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni RPL & Web',
    vibeTag: '💻 Real Project',
    hasVideo: false,
    tags: ['#WebDevelopment', '#MentorRamah', '#ProyekNyata', '#SMKN1Pasuruan'],
  },
  {
    id: 'testi-04',
    name: 'Nabila Azzahra',
    handle: '@nabila.mkt',
    school: 'SMK Negeri 1 Malang',
    city: 'Kota Malang',
    division: 'Digital Marketing & Pemasaran',
    avatar: '/images/pkl/13.webp',
    highlight: 'Briefing pagi seru, semua ide kita selalu didengerin!',
    quote:
      'Briefing pagi jam 8 seru banget, mentor selalu dengerin ide-ide kita. Gak ada rasa takut salah karena semua diajarin bareng-bareng. Teman-teman magang dari berbagai sekolah juga kompak banget kayak keluarga sendiri.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni Marketing',
    vibeTag: '🌱 Grow Bersama',
    hasVideo: true,
    videoDuration: '0:55',
    videoTitle: 'Nabila: Briefing Pagi Santai & Lingkungan Saling Support',
    videoThumbnail: '/images/pkl/13.webp',
    tags: ['#BriefingPagi', '#DigitalMarketing', '#SMKN1Malang', '#GrowBersama'],
  },
  {
    id: 'testi-05',
    name: 'Bagus Wicaksono',
    handle: '@bagus.gresik',
    school: 'SMK Mamba\'ul Ihsan Gresik',
    city: 'Kabupaten Gresik',
    division: 'Produksi Merchandise & Kemasan',
    avatar: '/images/pkl/1.webp',
    highlight: 'Anak perantau dari Gresik ngerasa kayak rumah kedua!',
    quote:
      'Datang jauh-jauh dari Gresik buat PKL di Malang, Saka bikin ngerasa seperti rumah kedua. Fasilitas studio lengkap, alat kerja memadai, dan pelepasan magangnya berkesan banget dapet sertifikat resmi.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni Produksi',
    vibeTag: '🏡 Rumah Kedua',
    hasVideo: false,
    tags: ['#AnakPerantau', '#SertifikatResmi', '#Merchandise', '#Gresik'],
  },
  {
    id: 'testi-06',
    name: 'Clara Anindya',
    handle: '@clara.umm',
    school: 'Universitas Muhammadiyah Malang (UMM)',
    city: 'Kota Malang',
    division: 'Content Creator & Sosial Media',
    avatar: '/images/pkl/22.webp',
    highlight: 'Tempat eksplorasi konten viral & branding agensi!',
    quote:
      'Sebagai mahasiswa magang, Saka memberikan ruang eksplorasi kreatif yang luas. Mentor memberi kebebasan berinovasi dengan panduan profesional. Tempat grow bersama terbaik buat siapa saja yang mau maju!',
    rating: 5,
    batch: 'Mahasiswa Magang MBKM 2026',
    badge: 'Alumni Vokasi UMM',
    vibeTag: '🚀 Eksplorasi Bebas',
    hasVideo: true,
    videoDuration: '1:15',
    videoTitle: 'Clara (UMM): Magang MBKM Seru & Portofolio Konten Kreatif',
    videoThumbnail: '/images/pkl/22.webp',
    tags: ['#MahasiswaMagang', '#UMM', '#ContentCreator', '#PortoKeren'],
  },
];
