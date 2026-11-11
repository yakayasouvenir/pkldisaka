// src/data/testimonials.ts
// Data Testimoni Siswa PKL & Mahasiswa Magang di Saka Malang (Gen Z & Social Aesthetic)

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
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
  videoUrl?: string;
  tags: string[];
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-01',
    name: 'Muhammad Sahrul Ramdhani & Kevin Pramudya',
    initials: 'SK',
    avatarBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    handle: '@sahrul.kevin',
    school: 'SMKN 11 Malang',
    city: 'Kota Malang',
    division: 'Desain Komunikasi Visual (DKV)',
    avatar: '/images/pkl/12.webp',
    highlight: 'Beneran gak ada senioritas, mentornya super humble!',
    quote:
      'Magang di Saka bener-bener tempat paling asik! Gak ada senioritas sama sekali, mentornya humble dan ngebimbing dari nol. Kami belajar desain kemasan nyata klien dan portofolio kami jadi tebal banget pas balik ke sekolah.',
    rating: 5,
    batch: 'Batch Genap 2025/2026',
    badge: 'Alumni DKV',
    vibeTag: '🔥 Vibes: 10/10',
    hasVideo: true,
    videoDuration: '1:04',
    videoTitle: 'A Day in My Life: Cerita Sahrul & Kevin Magang Asik di Saka',
    videoThumbnail: '/images/pkl/day-on-my-life-thumb.webp',
    videoUrl: '/vidio/day-on-my-life.mp4',
    tags: ['#NoSenioritas', '#DesainKemasan', '#SMKN11Malang', '#PortfolioKeren'],
  },
  {
    id: 'testi-02',
    name: 'Naila Sayidatul Khusnia',
    initials: 'NS',
    avatarBg: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
    handle: '@naila.khusnia',
    school: 'SMK NU Sunan Ampel',
    city: 'Kabupaten Malang',
    division: 'Multimedia & Desain Grafis',
    avatar: '/images/pkl/15.webp',
    highlight: 'Jam kerja 5 hari teratur & suasananya family friendly!',
    quote:
      'Paling suka jam kerjanya yang teratur: 08:00 sampai 16:00, Sabtu-Minggu libur! Istirahat Dzuhur 1 jam cukup banget buat sholat dan makan bareng. Suasananya ramah, kekeluargaan, dan saling mendukung.',
    rating: 5,
    batch: 'Batch Ganjil 2024/2025',
    badge: 'Alumni Multimedia',
    vibeTag: '✨ Work-Life Balance',
    hasVideo: true,
    videoDuration: '1:02',
    videoTitle: 'Naila: Jam Kerja 5 Hari & Istirahat Santai di Saka',
    videoThumbnail: '/images/pkl/15.webp',
    tags: ['#5HariKerja', '#IshomaSantai', '#FamilyFriendly', '#SMKNUSunanAmpel'],
  },
  {
    id: 'testi-03',
    name: 'Muhammad Maulana Ishaq',
    initials: 'MI',
    avatarBg: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
    handle: '@maulana.ishaq',
    school: 'SMKN 1 Pasuruan',
    city: 'Kota Pasuruan',
    division: 'Rekayasa Perangkat Lunak (RPL)',
    avatar: '/images/pkl/21.webp',
    highlight: 'Dikasih pegang proyek live, ilmunya daging semua!',
    quote:
      'Di sini kami beneran ngerjain website dan optimasi SEO proyek live, bukan disuruh fotokopi atau bikin kopi. Mentor teknisnya asik banget diajak diskusi arsitektur web modern. Pengalaman paling berharga selama masa SMK!',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni RPL & Web',
    vibeTag: '💻 Real Project',
    hasVideo: false,
    tags: ['#WebDevelopment', '#MentorRamah', '#ProyekNyata', '#SMKN1Pasuruan'],
  },
  {
    id: 'testi-04',
    name: 'Mochammad Evan Pratama',
    initials: 'EP',
    avatarBg: 'linear-gradient(135deg, #0891b2 0%, #0284c7 100%)',
    handle: '@evan.pratama',
    school: 'SMKN 11 Malang',
    city: 'Kota Malang',
    division: 'Desain & Multimedia',
    avatar: '/images/pkl/13.webp',
    highlight: 'Briefing pagi seru, semua ide kita selalu didengerin!',
    quote:
      'Briefing pagi jam 8 seru banget, mentor selalu dengerin ide-ide kita. Gak ada rasa takut salah karena semua diajarin bareng-bareng. Teman-teman magang juga kompak banget kayak keluarga sendiri.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni DKV',
    vibeTag: '🌱 Grow Bersama',
    hasVideo: true,
    videoDuration: '0:55',
    videoTitle: 'Evan Pratama: Briefing Pagi Santai & Lingkungan Saling Support',
    videoThumbnail: '/images/pkl/13.webp',
    tags: ['#BriefingPagi', '#DKV', '#SMKN11Malang', '#GrowBersama'],
  },
  {
    id: 'testi-05',
    name: 'Ahmad Ziyan Achwari',
    initials: 'ZA',
    avatarBg: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
    handle: '@ziyan.achwari',
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
    name: 'Kirani Wahyu Kusuma',
    initials: 'KW',
    avatarBg: 'linear-gradient(135deg, #e11d48 0%, #db2777 100%)',
    handle: '@kirani.wahyu',
    school: 'SMK NU Sunan Ampel',
    city: 'Kabupaten Malang',
    division: 'Content Creator & Media Kreatif',
    avatar: '/images/pkl/22.webp',
    highlight: 'Tempat eksplorasi konten viral & portofolio karya!',
    quote:
      'Di Saka kita diberi kebebasan bereksplorasi bikin konten visual dan video kreatif dengan arahan mentor profesional. Tempat grow bersama terbaik buat siapa saja yang mau maju!',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni Multimedia',
    vibeTag: '🚀 Eksplorasi Bebas',
    hasVideo: true,
    videoDuration: '1:15',
    videoTitle: 'Kirani: Magang Kreatif & Portofolio Konten di Saka',
    videoThumbnail: '/images/pkl/22.webp',
    tags: ['#Multimedia', '#SMKNUSunanAmpel', '#ContentCreator', '#PortoKeren'],
  },
  {
    id: 'testi-07',
    name: 'Arbil Sepdwiasa R',
    initials: 'AS',
    avatarBg: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    handle: '@arbil.sepdwiasa',
    school: 'SMKN 11 Malang',
    city: 'Kota Malang',
    division: 'Desain Komunikasi Visual (DKV)',
    avatar: '/images/pkl/12.webp',
    highlight: 'Bimbingan mentor teliti, karya desain jadi standar industri!',
    quote:
      'Mentor di Saka sabar banget ngarahin komposisi layout, pemilihan warna, dan kerapian file desain master. Standar kerja yang diajarkan beneran standar agensi profesional.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni DKV',
    vibeTag: '🎨 Standar Industri',
    hasVideo: false,
    tags: ['#DesainGrafis', '#SMKN11Malang', '#PortfolioAgensi', '#DKV'],
  },
  {
    id: 'testi-08',
    name: 'Umar Khotob',
    initials: 'UK',
    avatarBg: 'linear-gradient(135deg, #0d9488 0%, #059669 100%)',
    handle: '@umar.khotob',
    school: 'SMKN 1 Pasuruan',
    city: 'Kota Pasuruan',
    division: 'Teknik Komputer & Web Dev',
    avatar: '/images/pkl/21.webp',
    highlight: 'Fasilitas kerja kondusif & internet kencang tanpa kendala!',
    quote:
      'Ruang kerjanya nyaman, internetnya stabil dan cepat buat riset maupun pengerjaan proyek digital harian. Suasana kerjanya bikin betah belajar seharian.',
    rating: 5,
    batch: 'Batch 2025/2026',
    badge: 'Alumni IT & Web',
    vibeTag: '⚡ Fasilitas Mantap',
    hasVideo: false,
    tags: ['#SMKN1Pasuruan', '#WebDevelopment', '#FasilitasLengkap'],
  },
  {
    id: 'testi-09',
    name: 'Amilatus Sholiha',
    initials: 'AS',
    avatarBg: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    handle: '@amilatus.sholiha',
    school: 'SMK NU Sunan Ampel',
    city: 'Kabupaten Malang',
    division: 'Fotografi & Sosial Media',
    avatar: '/images/pkl/15.webp',
    highlight: 'Praktik langsung tata cahaya studio & kurasi foto produk!',
    quote:
      'Belajar setting lighting softbox dan teknik foto katalog produk beneran diasah dari nol sampai bisa. Portofolio fotografi kami jadi bernilai komersial tinggi.',
    rating: 5,
    batch: 'Batch Ganjil 2024/2025',
    badge: 'Alumni Foto & Video',
    vibeTag: '📸 Studio Nyata',
    hasVideo: false,
    tags: ['#FotografiProduk', '#LightingStudio', '#SMKNUSunanAmpel'],
  },
];
