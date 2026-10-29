// =====================================================================
// DATA UTAMA SITUS pkldisaka.com SESUAI PRD & PANDUAN DESAIN
// =====================================================================

export const SITE = {
  name: 'pkldisaka.com',
  brandName: 'PKL Di Saka',
  legalName: 'PKL Di Saka Malang',
  url: 'https://pkldisaka.com',
  locale: 'id-ID',
  tagline: 'Pusat Informasi & Praktik Kerja Lapangan di Kota Malang',
  description:
    'pkldisaka.com adalah portal panduan Praktik Kerja Lapangan (PKL) terstruktur di Kota Malang: informasi program, kesesuaian jurusan, divisi kerja, dokumen magang, dan persiapan vokasi.',
  phoneDisplay: '0821-3108-7971',
  phone: '+6282131087971',
  wa: '6282131087971',
  email: 'info@pkldisaka.com',
  address: {
    street: 'Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kec. Kedungkandang',
    city: 'Kota Malang',
    region: 'Jawa Timur',
    postalCode: '65138',
    country: 'ID',
    full: 'Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138',
  },
  geo: { lat: -7.9835, lng: 112.6602 },
  hours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '16:00' },
  social: {
    instagram: 'https://www.instagram.com/pkldisaka',
    tiktok: 'https://www.tiktok.com/@pkldisaka',
    youtube: 'https://www.youtube.com/@pkldisaka',
    linkedin: 'https://www.linkedin.com/company/pkldisaka',
  },
  ogImage: '/images/og-default.webp',
};

export const waLink = (text = 'Halo Admin PKL di Saka, saya ingin menanyakan informasi seputar pendaftaran PKL.') =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string; desc?: string; icon?: string }[];
};

// Navigasi global mengacu ke kelompok halaman utama PRD Section 5.1 & Section 6
export const NAV: NavItem[] = [
  { href: '/', label: 'Beranda' },
  {
    href: '/program-pkl/',
    label: 'Program',
    children: [
      {
        href: '/program-pkl/',
        label: 'Program PKL',
        desc: 'Kurikulum & pembinaan magang terstruktur',
        icon: 'bi-grid-fill',
      },
      {
        href: '/program-pkl/alur-seleksi/',
        label: 'Alur Seleksi',
        desc: 'Tahapan pendaftaran dan penilaian berkas',
        icon: 'bi-diagram-2',
      },
      {
        href: '/program-pkl/fasilitas/',
        label: 'Fasilitas',
        desc: 'Lingkungan kerja dan sarana penunjang',
        icon: 'bi-laptop',
      },
      {
        href: '/lowongan-pkl/',
        label: 'Lowongan PKL',
        desc: 'Status ketersediaan kuota per periode',
        icon: 'bi-briefcase-fill',
      },
      {
        href: '/cara-daftar/',
        label: 'Cara Daftar',
        desc: 'Syarat berkas & alur pengiriman dokumen',
        icon: 'bi-journal-check',
      },
      {
        href: '/mitra/',
        label: 'Sekolah Mitra',
        desc: 'Institusi sekolah & kampus vokasi mitra magang',
        icon: 'bi-bank2',
      },
      {
        href: '/galeri/',
        label: 'Galeri Kenangan',
        desc: 'Dokumentasi kegiatan, suasana kerja & momen alumni',
        icon: 'bi-camera-fill',
      },
    ],
  },
  {
    href: '/jurusan/',
    label: 'Jurusan',
    children: [
      { href: '/jurusan/', label: 'Semua Jurusan', desc: 'Daftar kompetensi yang diterima', icon: 'bi-mortarboard' },
      { href: '/jurusan/dkv/', label: 'DKV', desc: 'Desain Komunikasi Visual', icon: 'bi-palette' },
      { href: '/jurusan/tkj/', label: 'TKJ', desc: 'Teknik Komputer & Jaringan', icon: 'bi-hdd-network' },
      { href: '/jurusan/rpl/', label: 'RPL', desc: 'Rekayasa Perangkat Lunak', icon: 'bi-code-slash' },
      { href: '/jurusan/bisnis-digital/', label: 'Bisnis Digital', desc: 'Riset pasar & e-commerce', icon: 'bi-graph-up' },
      { href: '/jurusan/pemasaran/', label: 'Pemasaran', desc: 'Salesmanship & customer relation', icon: 'bi-megaphone' },
      { href: '/jurusan/teknik-grafika/', label: 'Teknik Grafika', desc: 'Pra-cetak & finishing kemasan', icon: 'bi-printer' },
      { href: '/jurusan/multimedia/', label: 'Multimedia', desc: 'Produksi siaran & audio visual', icon: 'bi-camera-video' },
    ],
  },
  {
    href: '/divisi/',
    label: 'Divisi',
    children: [
      { href: '/divisi/', label: 'Semua Divisi', desc: 'Struktur tim industri di Saka', icon: 'bi-diagram-3' },
      { href: '/divisi/digital-marketing/', label: 'Digital Marketing', desc: 'Strategi kampanye & conversion', icon: 'bi-bullseye' },
      { href: '/divisi/seo-website/', label: 'SEO & Website', desc: 'Search engine & performa web', icon: 'bi-search' },
      { href: '/divisi/social-media/', label: 'Social Media', desc: 'Manajemen konten & engagement', icon: 'bi-chat-dots' },
      { href: '/divisi/foto-video-produk/', label: 'Foto & Video Produk', desc: 'Studio foto & pascaproduksi', icon: 'bi-camera' },
      { href: '/divisi/content-creator/', label: 'Content Creator', desc: 'Naskah video & storytelling', icon: 'bi-play-circle' },
      { href: '/divisi/desain-grafis/', label: 'Desain Grafis', desc: 'Aset visual & identitas brand', icon: 'bi-vector-pen' },
      { href: '/divisi/produksi-souvenir/', label: 'Produksi Souvenir', desc: 'Cetak merchandise promosi', icon: 'bi-gift' },
      { href: '/divisi/packaging/', label: 'Packaging', desc: 'Pola lipatan & desain kemasan', icon: 'bi-box-seam' },
    ],
  },
  {
    href: '/dokumen-pkl/',
    label: 'Panduan & Edukasi',
    children: [
      { href: '/dokumen-pkl/', label: 'Pusat Dokumen PKL', desc: 'Surat lamaran, CV, jurnal, laporan', icon: 'bi-file-earmark-text' },
      { href: '/dokumen-pkl/surat-lamaran/', label: 'Surat Lamaran PKL', desc: 'Format & struktur baku lamaran', icon: 'bi-envelope' },
      { href: '/dokumen-pkl/cv-magang/', label: 'CV Magang Pemula', desc: 'Format 1 halaman untuk siswa/mahasiswa', icon: 'bi-person-badge' },
      { href: '/dokumen-pkl/jurnal-harian/', label: 'Jurnal Harian PKL', desc: 'Panduan pengisian aktivitas kerja', icon: 'bi-calendar-check' },
      { href: '/dokumen-pkl/laporan-pkl/', label: 'Laporan Akhir PKL', desc: 'Sistematika bab laporan sekolah', icon: 'bi-journal-bookmark' },
      { href: '/info-pkl/', label: 'Informasi Dasar PKL', desc: 'Aturan durasi, skema, & regulasi', icon: 'bi-info-circle' },
      { href: '/persiapan-pkl/', label: 'Persiapan Pra-PKL', desc: 'Checklist, interview, & soft skill', icon: 'bi-check2-circle' },
      { href: '/pkl-malang/', label: 'Panduan PKL di Malang', desc: 'Estimasi biaya hidup, kos & lokasi', icon: 'bi-geo-alt' },
      { href: '/pengalaman/', label: 'Pengalaman & Catatan', desc: 'Studi kasus & refleksi peserta', icon: 'bi-journal-richtext' },
      { href: '/faq/', label: 'Tanya Jawab (FAQ)', desc: 'Kumpulan pertanyaan & jawaban seputar PKL', icon: 'bi-question-circle' },
    ],
  },
  { href: '/tentang/', label: 'Tentang' },
  { href: '/blog/', label: 'Blog' },
  { href: '/kontak/', label: 'Kontak' },
];

export const INITIAL_DIVISIONS = [
  { id: 'digital-marketing', name: 'Digital Marketing', desc: 'Riset pasar, promosi online, dan evaluasi kampanye iklan digital.' },
  { id: 'seo-website', name: 'SEO & Website', desc: 'Audit kecepatan web, riset kata kunci, dan optimasi performa mesin pencari.' },
  { id: 'social-media', name: 'Social Media Management', desc: 'Pengelolaan kalender konten, copywriting, dan interaksi audiens.' },
  { id: 'foto-video-produk', name: 'Foto & Video Produk', desc: 'Pemotretan katalog e-commerce, lighting studio, dan pascaproduksi.' },
  { id: 'content-creator', name: 'Content Creator', desc: 'Storytelling naskah video pendek, hook kreatif, dan editing reels/tiktok.' },
  { id: 'desain-grafis', name: 'Desain Grafis', desc: 'Perancangan identitas visual, aset media sosial, dan materi promosi cetak.' },
  { id: 'produksi-souvenir', name: 'Produksi Souvenir', desc: 'Pengoperasian mesin cetak sublimasi, sablon, dan kontrol mutu merchandise.' },
  { id: 'packaging', name: 'Packaging & Kemasan', desc: 'Pembuatan jaring dieline kotak, mock-up prototipe 3D, dan efisiensi karton.' },
];
