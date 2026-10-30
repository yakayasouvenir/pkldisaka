// Data visual terstruktur untuk seluruh halaman PKL di Saka
// Menjamin setiap halaman memiliki 4 foto unik yang relevan dengan aktivitas nyatanya

export interface GalleryPhoto {
  src: string;
  alt: string;
  badge: string;
  caption: string;
}

export interface ArticleVisualData {
  src: string; // Hero image (juga kompatibel untuk index.astro)
  alt: string;
  caption: string;
  feature: {
    src: string;
    alt: string;
    badge: string;
    caption: string;
  };
  gallery: [GalleryPhoto, GalleryPhoto];
}

export const articleVisuals: Record<string, ArticleVisualData> = {
  "/jurusan/dkv/": {
    src: "/images/12.webp",
    alt: "Siswa jurusan DKV merancang identitas visual dan materi branding di laptop",
    caption: "Penerapan kurikulum kejuruan DKV ke dalam proyek riil branding dan komunikasi visual komersial.",
    feature: {
      src: "/images/15.webp",
      alt: "Sesi pemotretan produk komersial di mini studio dengan softbox lighting",
      badge: "Praktik Studio",
      caption: "Peserta DKV mengeksplorasi komposisi visual, sudut kamera, dan tata cahaya untuk katalog produk UMKM.",
    },
    gallery: [
      {
        src: "/images/23.webp",
        alt: "Persiapan tata cahaya dan setting studio foto produk komersial",
        badge: "Setting Studio",
        caption: "Pengaturan posisi tripod, softbox lighting, dan sudut pencahayaan untuk sesi foto produk katalog UMKM.",
      },
      {
        src: "/images/13.webp",
        alt: "Sesi review estetika dan diskusi masukan desain bersama tim kreatif",
        badge: "Review Desain",
        caption: "Setiap konsep visual dipresentasikan untuk mendapatkan arahan konstruktif sebelum diajukan ke klien.",
      },
    ],
  },
  "/jurusan/tkj/": {
    src: "/images/21.webp",
    alt: "Siswa jurusan TKJ mengelola infrastruktur jaringan dan komputer kerja agensi",
    caption: "Praktik langsung administrasi workstation, konfigurasi server, dan pengujian koneksi internet agensi.",
    feature: {
      src: "/images/10.webp",
      alt: "Pengujian koneksi server lokal dan konfigurasi sistem operasi jaringan",
      badge: "Jaringan & Server",
      caption: "Siswa TKJ mempelajari manajemen bandwidth, setup DNS, dan pengamanan hak akses data workstation agensi.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Kolaborasi tim IT dalam pemeliharaan perangkat kerja dan troubleshooting sistem",
        badge: "Troubleshooting IT",
        caption: "Pendampingan langsung menyelesaikan kendala teknis perangkat laptop peserta dari berbagai divisi.",
      },
      {
        src: "/images/13.webp",
        alt: "Briefing prosedur keamanan jaringan dan tata kelola backup data industri",
        badge: "SOP Jaringan",
        caption: "Pengenalan standarisasi backup cloud terpusat dan protokol keamanan koneksi studio Saka.",
      },
    ],
  },
  "/jurusan/rpl/": {
    src: "/images/10.webp",
    alt: "Fasilitas ruang kerja dan workstation komputer jurusan RPL di Saka Malang",
    caption: "Lingkungan kerja kondusif dengan fasilitas komputer dan internet cepat penunjang praktik koding.",
    feature: {
      src: "/images/21.webp",
      alt: "Siswa jurusan RPL mempraktikkan koding aplikasi web modern dan pengujian modul frontend",
      badge: "Workstation Coding",
      caption: "Peserta difasilitasi perangkat komputer cepat untuk menjalankan server lokal dan kompilasi modul frontend.",
    },
    gallery: [
      {
        src: "/images/27.webp",
        alt: "Audit performa kecepatan website dan pengujian Core Web Vitals",
        badge: "Optimasi Kode",
        caption: "Pengujian skor performa Core Web Vitals Google, optimasi load time, dan kompresi modul kode web.",
      },
      {
        src: "/images/5.webp",
        alt: "Sesi code review mingguan bersama mentor software engineering",
        badge: "Code Review",
        caption: "Evaluasi clean code, refactoring komponen UI, dan integrasi API dipandu mentor berpengalaman.",
      },
    ],
  },
  "/jurusan/bisnis-digital/": {
    src: "/images/24.webp",
    alt: "Siswa Bisnis Digital menganalisis performa kampanye dan etalase marketplace UMKM",
    caption: "Penguasaan analitik data bisnis, riset konversi penjualan, dan funnel promosi online.",
    feature: {
      src: "/images/5.webp",
      alt: "Praktik riset kata kunci pencarian konsumen dan tren belanja marketplace",
      badge: "Riset Pasar",
      caption: "Peserta memetakan search intent calon pembeli untuk menyusun deskripsi produk yang berdaya saing tinggi.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Diskusi evaluasi conversion rate dan performa toko digital bersama mentor",
        badge: "Evaluasi Bisnis",
        caption: "Analisis berkala mengenai traffic pengunjung toko, rasio klik ke keranjang, dan optimalisasi voucher diskon.",
      },
      {
        src: "/images/22.webp",
        alt: "Kolaborasi strategi promosi digital terpadu lintas divisi pemasaran",
        badge: "Kolaborasi Tim",
        caption: "Siswa bisnis digital bekerja sama dengan tim konten untuk menyelaraskan jadwal promo dan peluncuran produk.",
      },
    ],
  },
  "/jurusan/pemasaran/": {
    src: "/images/19.webp",
    alt: "Aktivitas siswa jurusan Pemasaran dalam menyusun strategi komunikasi penawaran",
    caption: "Pelatihan komunikasi penawaran produk, customer service, dan negosiasi komersial.",
    feature: {
      src: "/images/24.webp",
      alt: "Penerapan strategi merchandising etalase toko digital Shopee dan Tokopedia",
      badge: "Merchandising Digital",
      caption: "Mengatur tata letak etalase kategori, banner promo, dan variasi bundling produk UMKM.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Briefing target pemasaran mingguan dan teknik customer handling",
        badge: "Briefing Penjualan",
        caption: "Mempelajari cara merespons pertanyaan calon pembeli dengan cepat, sopan, dan mengonversi menjadi transaksi.",
      },
      {
        src: "/images/10.webp",
        alt: "Ruang kerja operasional pemasaran dengan koneksi internet berkecepatan tinggi",
        badge: "Operasional Pemasaran",
        caption: "Didukung sarana komputer modern untuk memantau chat pelanggan dan dashboard marketplace secara real-time.",
      },
    ],
  },
  "/jurusan/teknik-grafika/": {
    src: "/images/12.webp",
    alt: "Siswa Teknik Grafika merancang layout cetak dan separasi warna di workstation",
    caption: "Praktik standarisasi cetak, proofing warna, dan teknik pracetak grafika komersial.",
    feature: {
      src: "/images/1.webp",
      alt: "Pemeriksaan hasil cetak dummy dan perakitan packaging souvenir industri",
      badge: "Pracetak Digital",
      caption: "Penyusunan bleed, margin potong, dan kalibrasi warna CMYK agar hasil cetak presisi sesuai standar pabrik.",
    },
    gallery: [
      {
        src: "/images/25.webp",
        alt: "Praktik pengoperasian mesin heat press dan produksi cinderamata promosi",
        badge: "Mesin Produksi",
        caption: "Pengoperasian mesin cetak sublim dan transfer media untuk produksi souvenir cinderamata instansi.",
      },
      {
        src: "/images/26.webp",
        alt: "Area quality control dan perakitan packaging eksklusif pesanan klien",
        badge: "Quality Control",
        caption: "Pemeriksaan ketelitian lembaran karton kemasan, laminasi doff, dan ketahanan sudut boks souvenir.",
      },
    ],
  },
  "/jurusan/teknik-informatika/": {
    src: "/images/21.webp",
    alt: "Mahasiswa Teknik Informatika merancang arsitektur sistem web dan database",
    caption: "Pengembangan arsitektur backend, manajemen basis data, dan optimalisasi query.",
    feature: {
      src: "/images/22.webp",
      alt: "Diskusi kolaboratif pemodelan data dan pengujian endpoint API",
      badge: "Arsitektur Sistem",
      caption: "Mahasiswa mendalami struktur database relasional dan pengujian performa respon server agensi.",
    },
    gallery: [
      {
        src: "/images/10.webp",
        alt: "Fasilitas workstation pengembangan software dengan monitor kerja optimal",
        badge: "Fasilitas Dev",
        caption: "Lingkungan komputasi terintegrasi dengan akses repositori Git dan deployment pipeline otomatis.",
      },
      {
        src: "/images/13.webp",
        alt: "Review berkala bersama senior engineer seputar skalabilitas sistem web",
        badge: "Review Engineering",
        caption: "Bimbingan mendalam seputar asynchronous processing, caching data, dan keamanan otentikasi aplikasi.",
      },
    ],
  },
  "/jurusan/manajemen/": {
    src: "/images/24.webp",
    alt: "Pengelolaan arsip digital dan administrasi data perkantoran terpadu",
    caption: "Tata kelola persuratan, inventarisasi data, dan penjadwalan aktivitas proyek.",
    feature: {
      src: "/images/28.webp",
      alt: "Verifikasi berkas administrasi masuk dan pencatatan surat permohonan PKL",
      badge: "Tata Kelola Berkas",
      caption: "Pencatatan registrasi dokumen legalitas, surat pengantar sekolah, dan pengarsipan database peserta.",
    },
    gallery: [
      {
        src: "/images/10.webp",
        alt: "Workstation pengelolaan spreadsheet laporan kerja dan timeline proyek",
        badge: "Sistem Administrasi",
        caption: "Pemanfaatan Google Workspace dan spreadsheet untuk rekapitulasi presensi serta inventaris aset kantor.",
      },
      {
        src: "/images/13.webp",
        alt: "Koordinasi penjadwalan briefing dan koordinasi logistik kegiatan kantor",
        badge: "Manajemen Operasional",
        caption: "Membantu pengelolaan timeline rapat mingguan dan penyiapan agenda kerja seluruh tim divisi.",
      },
    ],
  },
  "/jurusan/multimedia/": {
    src: "/images/15.webp",
    alt: "Produksi konten visual dan tata cahaya studio multimedia di Saka",
    caption: "Pengambilan video produk, pengaturan 3-point lighting, dan editing visual promosi.",
    feature: {
      src: "/images/16.webp",
      alt: "Proses pasca-produksi editing video komersial dan color grading",
      badge: "Editing Video",
      caption: "Peserta multimedia melatih keahlian transisi dinamis, sinkronisasi audio, dan teks animasi promosi.",
    },
    gallery: [
      {
        src: "/images/28.webp",
        alt: "Penyusunan storyboard dan skrip video pendek untuk media sosial",
        badge: "Storyboard Kreatif",
        caption: "Merancang urutan adegan visual dari hook awal, isi informasi produk, hingga call-to-action penutup.",
      },
      {
        src: "/images/10.webp",
        alt: "Suasana ruang editing multimedia dengan perangkat komputasi grafis",
        badge: "Studio Multimedia",
        caption: "Fasilitas rendering video beresolusi tinggi dengan koneksi cepat untuk upload aset media promosi.",
      },
    ],
  },
  "/divisi/digital-marketing/": {
    src: "/images/22.webp",
    alt: "Praktik dan kolaborasi strategi pemasaran digital terpadu tim marketing Saka",
    caption: "Perancangan rencana kampanye, riset search intent, optimasi etalase toko online, dan iklan digital.",
    feature: {
      src: "/images/12.webp",
      alt: "Praktik perancangan materi visual promosi digital marketing dan optimasi marketplace",
      badge: "Strategi Kampanye",
      caption: "Kolaborasi peserta magang dalam riset kata kunci, perancangan banner promosi produk UMKM, dan manajemen campaign e-commerce.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Sesi briefing penetapan target promosi mingguan bersama mentor marketing",
        badge: "Briefing Marketing",
        caption: "Mentor memandu identifikasi segmen audiens, alokasi jadwal posting artikel, dan strategi penawaran promo.",
      },
      {
        src: "/images/24.webp",
        alt: "Aktivitas pemasaran digital, copywriting promosi, dan interaksi konsumen",
        badge: "Pemasaran Digital",
        caption: "Peserta mempraktikkan penyusunan pesan komunikasi pemasaran dan penawaran produk UMKM secara online.",
      },
    ],
  },
  "/divisi/seo-website/": {
    src: "/images/21.webp",
    alt: "Praktik teknis pengembangan website dan optimasi SEO bersama mentor",
    caption: "Penerapan teknis arsitektur website modern, optimasi kecepatan, dan integrasi analitik.",
    feature: {
      src: "/images/27.webp",
      alt: "Audit performa kecepatan website dan pengujian Core Web Vitals",
      badge: "Optimasi Kode",
      caption: "Pengujian Core Web Vitals, kompresi aset gambar, dan penataan struktur heading semantik Google.",
    },
    gallery: [
      {
        src: "/images/5.webp",
        alt: "Sesi code review mingguan bersama mentor software engineering",
        badge: "Code Review",
        caption: "Evaluasi clean code, refactoring komponen UI, dan integrasi API dipandu mentor berpengalaman.",
      },
      {
        src: "/images/13.webp",
        alt: "Diskusi rencana struktur konten pilar dan strategi internal linking website",
        badge: "Strategi SEO",
        caption: "Penyusunan arsitektur topik artikel untuk mendongkrak otoritas domain web di hasil pencarian Google.",
      },
    ],
  },
  "/divisi/social-media/": {
    src: "/images/17.webp",
    alt: "Perencanaan konten media sosial dan manajemen jadwal postingan berkala",
    caption: "Penyusunan content pillar, riset tren audio, dan analitik interaksi akun brand.",
    feature: {
      src: "/images/28.webp",
      alt: "Analisis performa reach dan interaksi konten akun Instagram & TikTok",
      badge: "Analitik Medsos",
      caption: "Peserta mengevaluasi data jam tayang paling aktif dan rasio penyimpanan (saves) pada setiap konten.",
    },
    gallery: [
      {
        src: "/images/12.webp",
        alt: "Kolaborasi pembuatan materi visual feed dan infografis promosi media sosial",
        badge: "Aset Visual Feed",
        caption: "Kerja sama erat antara tim media sosial dan tim grafis untuk menjaga konsistensi identitas warna brand.",
      },
      {
        src: "/images/13.webp",
        alt: "Sesi brainstorming ide kampanye konten viral dan tren terkini bersama mentor",
        badge: "Brainstorming Ide",
        caption: "Diskusi santai menggali topik relatable yang memicu interaksi hangat dari komunitas pengikut akun.",
      },
    ],
  },
  "/divisi/foto-video-produk/": {
    src: "/images/15.webp",
    alt: "Sesi foto produk dengan pencahayaan softbox studio profesional",
    caption: "Praktik kurasi katalog produk, pengaturan angle kamera, dan color grading.",
    feature: {
      src: "/images/16.webp",
      alt: "Proses pasca-produksi video promosi produk komersial dan transisi visual",
      badge: "Pasca Produksi",
      caption: "Editing video katalog produk, penambahan efek sound, dan pembuatan format vertikal 9:16 untuk Reels/Shorts.",
    },
    gallery: [
      {
        src: "/images/23.webp",
        alt: "Persiapan tata cahaya softbox lighting dan setup tripod mini studio foto",
        badge: "Setting Studio",
        caption: "Penyetelan arah lampu studio dan sudut kamera untuk menghasilkan pencahayaan dramatis pada produk komersial.",
      },
      {
        src: "/images/10.webp",
        alt: "Fasilitas workstation rendering grafis dan pasca-produksi video di Saka",
        badge: "Sarana Studio",
        caption: "Workstation penunjang editing video dan kurasi foto katalog produk komersial resolusi tinggi.",
      },
    ],
  },
  "/divisi/content-creator/": {
    src: "/images/28.webp",
    alt: "Penyusunan storyboard dan penulisan skrip video pendek kreatif untuk media sosial",
    caption: "Merancang urutan adegan visual dari hook awal, isi informasi produk, hingga call-to-action penutup.",
    feature: {
      src: "/images/15.webp",
      alt: "Produksi rekaman video konten pendek di mini studio kreatif Saka",
      badge: "Produksi Konten",
      caption: "Peserta mempraktikkan public speaking, teknik penataan tripod, dan pengambilan angle video dinamis.",
    },
    gallery: [
      {
        src: "/images/16.webp",
        alt: "Editing video konten kreator dengan teks animasi dan efek suara menarik",
        badge: "Editing Kreatif",
        caption: "Penerapan prinsip pacing video cepat dan hook 3 detik pertama agar retensi penonton tetap tinggi.",
      },
      {
        src: "/images/13.webp",
        alt: "Review mingguan performa views dan engagement rate konten yang telah terbit",
        badge: "Evaluasi Konten",
        caption: "Menganalisis faktor pemicu ramainya interaksi serta merumuskan perbaikan formula konten berikutnya.",
      },
    ],
  },
  "/divisi/desain-grafis/": {
    src: "/images/12.webp",
    alt: "Suasana kerja peserta divisi desain grafis dan perancangan branding produk",
    caption: "Praktik desain grafis komersial, perancangan identitas visual, dan kemasan produk.",
    feature: {
      src: "/images/1.webp",
      alt: "Pemeriksaan sampel cetak kemasan hardbox dummy hasil karya desain grafis",
      badge: "Packaging Kemasan",
      caption: "Melihat wujud fisik hasil perancangan desain kemasan mulai dari kerapian lipatan hingga ketajaman warna.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Sesi review estetika dan diskusi masukan desain bersama tim kreatif",
        badge: "Review Desain",
        caption: "Setiap konsep visual dipresentasikan untuk mendapatkan arahan konstruktif sebelum diajukan ke klien.",
      },
      {
        src: "/images/10.webp",
        alt: "Workstation desain grafis dengan perangkat software standar industri",
        badge: "Studio Desain",
        caption: "Didukung software grafis profesional (Adobe Illustrator, Photoshop, Figma) untuk pengerjaan aset komersial.",
      },
    ],
  },
  "/divisi/produksi-souvenir/": {
    src: "/images/2.webp",
    alt: "Praktik pengoperasian mesin cetak sublim dan transfer media untuk produksi souvenir cinderamata",
    caption: "Pembuatan cinderamata pesanan instansi dan perakitan packaging eksklusif.",
    feature: {
      src: "/images/25.webp",
      alt: "Praktik perakitan boks cinderamata dan merchandise souvenir pesanan instansi",
      badge: "Produksi Souvenir",
      caption: "Siswa mempraktikkan proses perakitan massal boks cinderamata, penataan pita, dan pengepakan produk rapi.",
    },
    gallery: [
      {
        src: "/images/26.webp",
        alt: "Area quality control dan perakitan packaging eksklusif pesanan klien",
        badge: "Quality Control",
        caption: "Pemeriksaan ketelitian lembaran karton kemasan, laminasi doff, dan ketahanan sudut boks souvenir.",
      },
      {
        src: "/images/6.webp",
        alt: "Etalase showroom display produk cinderamata hasil produksi workshop Saka",
        badge: "Showroom Display",
        caption: "Peserta mempelajari standar display etalase produk dan kurasi sampel cinderamata untuk klien.",
      },
    ],
  },
  "/divisi/packaging/": {
    src: "/images/1.webp",
    alt: "Pemeriksaan sampel prototipe packaging hardbox cinderamata eksklusif",
    caption: "Quality control cetak kemasan, teknik laminasi doff/glossy, dan embossing.",
    feature: {
      src: "/images/12.webp",
      alt: "Perancangan pola jaring-jaring pisau pond kemasan di workstation komputer",
      badge: "Pola Kemasan",
      caption: "Membuat kalkulasi dimensi kemasan presisi agar produk terlindungi dengan aman dan pas di dalam boks.",
    },
    gallery: [
      {
        src: "/images/25.webp",
        alt: "Pemeriksaan sampel dummy packaging hardbox hasil perancangan desain siswa",
        badge: "Perakitan Kemasan",
        caption: "Evaluasi tata letak garis potong, kalibrasi warna cetak, dan kesesuaian tipografi pada kemasan boks riil.",
      },
      {
        src: "/images/26.webp",
        alt: "Area quality control dan perakitan packaging eksklusif pesanan klien",
        badge: "Quality Control",
        caption: "Pemeriksaan ketelitian lembaran karton kemasan, laminasi doff, dan ketahanan sudut boks souvenir.",
      },
    ],
  },
  "/pengalaman/cerita-alumni/": {
    src: "/images/7.webp",
    alt: "Kilas balik kebersamaan dan refleksi alumni selepas masa PKL di Saka",
    caption: "Inspirasi dan kisah nyata perjalanan alumni magang hingga sukses menembus industri.",
    feature: {
      src: "/images/4.webp",
      alt: "Momen penuh kebanggaan menerima sertifikat kompetensi resmi kelulusan magang",
      badge: "Sertifikat Resmi",
      caption: "Sertifikat kompetensi Saka diakui industri dan menjadi modal utama alumni menembus dunia kerja.",
    },
    gallery: [
      {
        src: "/images/21.webp",
        alt: "Pengalaman menangani penugasan proyek website nyata yang menjadi portofolio kuat",
        badge: "Portofolio Nyata",
        caption: "Alumni berbagi cerita betapa berharganya pengalaman mengerjakan web klien dibanding sekadar tugas sekolah.",
      },
      {
        src: "/images/22.webp",
        alt: "Lingkungan pertemanan akrab dan bimbingan mentor yang terus berlanjut pasca magang",
        badge: "Jejaring Alumni",
        caption: "Hubungan kekeluargaan dan kesempatan proyek freelance terbuka lebar bagi alumni berdedikasi tinggi.",
      },
    ],
  },
  "/pengalaman/studi-kasus/": {
    src: "/images/16.webp",
    alt: "Evaluasi mingguan pemecahan studi kasus proyek nyata di meja kerja agensi",
    caption: "Pendekatan problem-solving dalam menangani kendala teknis dan revisi klien komersial.",
    feature: {
      src: "/images/13.webp",
      alt: "Sesi diskusi analisis kendala proyek dan perumusan solusi terarah bersama mentor",
      badge: "Sesi Pemecahan Masalah",
      caption: "Peserta dilatih berpikir kritis, membedah akar permasalahan, dan menyusun alternatif perbaikan.",
    },
    gallery: [
      {
        src: "/images/21.webp",
        alt: "Implementasi perbaikan teknis sistem web berdasarkan hasil audit studi kasus",
        badge: "Perbaikan Teknis",
        caption: "Menguji ulang modul kode yang diperbaiki hingga seluruh fungsi berjalan mulus tanpa error.",
      },
      {
        src: "/images/12.webp",
        alt: "Penyelarasan kembali desain visual sesuai masukan spesifik pada brief studi kasus",
        badge: "Revisi Desain",
        caption: "Memperbaiki tata letak tipografi dan penyesuaian komposisi warna agar memenuhi ekspektasi komersial.",
      },
    ],
  },
  "/pengalaman/sehari-di-saka/": {
    src: "/images/13.webp",
    alt: "Suasana dinamis stand-up briefing pagi pukul 08:00 WIB di studio Saka Malang",
    caption: "Ritme kerja menyenangkan, sesi stand-up meeting pagi, dan bimbingan aktif tanpa senioritas.",
    feature: {
      src: "/images/10.webp",
      alt: "Fokus pengerjaan tugas proyek industri di workstation ber-AC yang kondusif",
      badge: "Fokus Kerja",
      caption: "Sesi pagi hingga siang digunakan peserta untuk menyelesaikan tugas divisi dengan pendampingan mentor.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Suasana istirahat Dzuhur 1 jam penuh untuk sholat, makan bersama, dan rehat santai",
        badge: "Ishoma Santai",
        caption: "Waktu istirahat yang manusiawi membuat energi peserta pulih kembali untuk melanjutkan aktivitas sore.",
      },
      {
        src: "/images/15.webp",
        alt: "Persiapan pulang jam 15:50, evaluasi singkat harian, doa bersama, dan pulang tepat jam 16:00",
        badge: "Pulang Tepat Waktu",
        caption: "Budaya kerja bebas lembur: begitu jam 16:00 tiba setelah piket kilat, seluruh peserta langsung pulang.",
      },
    ],
  },
  "/pengalaman/proyek-dkv/": {
    src: "/images/12.webp",
    alt: "Showcase portofolio karya nyata peserta magang DKV pada display komputer",
    caption: "Hasil perancangan kemasan, logo UMKM, dan feed media sosial yang telah tayang.",
    feature: {
      src: "/images/15.webp",
      alt: "Dokumentasi katalog produk UMKM hasil perancangan visual di mini studio",
      badge: "Photoshoot Katalog",
      caption: "Memadukan keahlian desain kemasan dengan teknik fotografi produk komersial untuk etalase online.",
    },
    gallery: [
      {
        src: "/images/1.webp",
        alt: "Pemeriksaan dummy fisik kotak kemasan hardbox hasil perancangan anak magang",
        badge: "Desain Kemasan",
        caption: "Kebanggaan tersendiri saat melihat desain di layar monitor terwujud menjadi produk kemasan nyata.",
      },
      {
        src: "/images/13.webp",
        alt: "Sesi presentasi portofolio desain visual di hadapan mentor dan rekan kerja",
        badge: "Presentasi Karya",
        caption: "Melatih kemampuan pitching desain dan menjelaskan filosofi pemilihan warna serta tipografi produk.",
      },
    ],
  },
  "/pengalaman/pembelajaran-rpl/": {
    src: "/images/21.webp",
    alt: "Catatan pembelajaran proyek siswa RPL dan web development bersama mentor industri",
    caption: "Eksplorasi siswa RPL dalam mengelola kode web responsif dan standar industri.",
    feature: {
      src: "/images/10.webp",
      alt: "Workstation koding modern penunjang eksplorasi framework web terkini",
      badge: "Lab Koding Industri",
      caption: "Siswa RPL dibiasakan menggunakan terminal Linux, Git branch workflow, dan tool audit web Google.",
    },
    gallery: [
      {
        src: "/images/23.webp",
        alt: "Pengujian implementasi SEO teknis dan optimasi responsivitas mobile website",
        badge: "Audit Teknis Web",
        caption: "Pembelajaran nyata bagaimana struktur markup HTML semantik mempengaruhi peringkat web di Google.",
      },
      {
        src: "/images/22.webp",
        alt: "Kolaborasi pemecahan logika algoritma koding bersama rekan satu tim magang",
        badge: "Pair Programming",
        caption: "Saling bertukar ide dan membantu memeriksa celah error kode dalam suasana belajar yang menyenangkan.",
      },
    ],
  },
  "/pengalaman/testimoni-mentor/": {
    src: "/images/5.webp",
    alt: "Sesi review dan umpan balik personal dari mentor industri kepada siswa magang",
    caption: "Pandangan mentor mengenai etos kerja, kedisiplinan, dan potensi besar generasi vokasi.",
    feature: {
      src: "/images/13.webp",
      alt: "Diskusi mentoring kelompok yang ramah, santai, dan membuka ruang tanya jawab bebas",
      badge: "Pendampingan Akrab",
      caption: "Mentor memposisikan diri sebagai kakak pembimbing yang siap mendengarkan kendala belajar siswa.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Pengamatan perkembangan kemandirian dan rasa percaya diri peserta magang",
        badge: "Pertumbuhan Siswa",
        caption: "Dari yang awalnya ragu membuka software, siswa bertransformasi menjadi mandiri menangani tugas.",
      },
      {
        src: "/images/4.webp",
        alt: "Kebanggaan mentor industri saat menyerahkan sertifikat kompetensi kepada siswa",
        badge: "Apresiasi Mentor",
        caption: "Apresiasi tulus atas dedikasi, inisiatif, dan etos kerja positif yang ditunjukkan peserta selama PKL.",
      },
    ],
  },
  "/pengalaman/galeri/": {
    src: "/images/4.webp",
    alt: "Momen serah terima sertifikat dan penghargaan kelulusan magang di Saka Malang",
    caption: "Dokumentasi visual kenang-kenangan dan apresiasi dedikasi peserta magang.",
    feature: {
      src: "/images/7.webp",
      alt: "Kenangan kebersamaan hangat seluruh angkatan murid magang dan staf pembimbing",
      badge: "Keluarga Saka",
      caption: "Persahabatan lintas sekolah yang terjalin erat selama masa praktik kerja di lingkungan agensi.",
    },
    gallery: [
      {
        src: "/images/15.webp",
        alt: "Dokumentasi proses kreatif peserta di mini studio foto dan pembuatan video",
        badge: "Aktivitas Studio",
        caption: "Kumpulan momen seru saat praktik pemotretan produk dan eksplorasi pencahayaan studio.",
      },
      {
        src: "/images/21.webp",
        alt: "Dokumentasi sesi mentoring teknis dan diskusi intensif di meja kerja komputer",
        badge: "Sesi Mentoring",
        caption: "Momen penuh konsentrasi saat mendalami koding web dan riset analitik digital bersama mentor.",
      },
    ],
  },
  "/dokumen-pkl/surat-lamaran/": {
    src: "/images/28.webp",
    alt: "Format resmi surat lamaran magang dan penyerahan berkas standar BKK dan industri",
    caption: "Penyerahan berkas surat permohonan PKL resmi yang sopan, terstruktur, dan cepat disetujui HRD.",
    feature: {
      src: "/images/3.webp",
      alt: "Verifikasi berkas surat lamaran saat sesi konsultasi pendaftaran magang",
      badge: "Konsultasi Berkas",
      caption: "Mentor memeriksa kejelasan biodata, pilihan divisi, dan periode pelaksanaan magang yang diajukan.",
    },
    gallery: [
      {
        src: "/images/24.webp",
        alt: "Penyusunan format surat lamaran resmi 1 halaman dengan template standar industri",
        badge: "Format Surat Standar",
        caption: "Tata letak rapi mencakup salam pembuka, profil keahlian sekolah, dan kontak narahubung aktif.",
      },
      {
        src: "/images/10.webp",
        alt: "Fasilitas workstation terintegrasi penunjang administrasi pendaftaran siswa",
        badge: "Administrasi Rapi",
        caption: "Workstation kantor Saka yang mendukung verifikasi digital dan arsip fisik berkas permohonan PKL.",
      },
    ],
  },
  "/dokumen-pkl/surat-pengantar/": {
    src: "/images/24.webp",
    alt: "Verifikasi berkas dan penyerahan surat pengantar resmi dari pihak sekolah/kampus",
    caption: "Pentingnya kelengkapan administrasi legalitas dan surat rekomendasi dari institusi pendidikan asal siswa.",
    feature: {
      src: "/images/3.webp",
      alt: "Sesi penerimaan resmi dan konfirmasi kuota berdasarkan surat pengantar sekolah",
      badge: "Konfirmasi Kuota",
      caption: "Surat pengantar fisik diverifikasi langsung untuk mencocokkan ketersediaan kuota divisi yang dituju.",
    },
    gallery: [
      {
        src: "/images/28.webp",
        alt: "Pencatatan registrasi surat masuk dan pembukuan data siswa magang baru",
        badge: "Registrasi Legalitas",
        caption: "Seluruh surat pengantar dicatat dalam buku registrasi resmi sebagai dasar penerbitan surat balasan.",
      },
      {
        src: "/images/10.webp",
        alt: "Lingkungan kantor Saka yang siap menyambut penempatan peserta magang terdaftar",
        badge: "Kesiapan Tempat",
        caption: "Meja kerja dan perlengkapan disiapkan rapi sesuai jumlah peserta yang tercantum di surat pengantar.",
      },
    ],
  },
  "/dokumen-pkl/cv-magang/": {
    src: "/images/24.webp",
    alt: "Penyusunan Curriculum Vitae magang ringkas 1 halaman yang ramah ATS",
    caption: "Panduan merancang CV profesional ramah ATS yang menonjolkan keterampilan utama.",
    feature: {
      src: "/images/3.webp",
      alt: "Review portofolio dan pembahasan riwayat keahlian CV saat interview magang",
      badge: "Review CV",
      caption: "Calon peserta mempresentasikan ringkasan keahlian software dan pengalaman proyek kelas di hadapan mentor.",
    },
    gallery: [
      {
        src: "/images/28.webp",
        alt: "Lampiran CV diserahkan bersama berkas surat rekomendasi sekolah ke kantor Saka",
        badge: "Penyerahan CV",
        caption: "CV fisik dilampirkan dalam map rapi untuk memudahkan pencocokan minat divisi kerja yang diminati.",
      },
      {
        src: "/images/10.webp",
        alt: "Workstation komputer untuk menyusun CV digital dan portofolio berbasis PDF/link",
        badge: "Penyusunan Digital",
        caption: "Pemanfaatan tools seperti Canva dan Google Docs untuk mendesain CV yang bersih, rapi, dan terbaca jelas.",
      },
    ],
  },
  "/dokumen-pkl/portofolio-dkv/": {
    src: "/images/12.webp",
    alt: "Kurasi karya terbaik untuk portofolio desain visual DKV di ruang kerja agensi",
    caption: "Menyusun sampel karya terbaik ke dalam format PDF ringkas atau tautan Behance/Drive.",
    feature: {
      src: "/images/15.webp",
      alt: "Sesi foto mockup kemasan untuk memperkaya aset visual portofolio desain siswa",
      badge: "Mockup Visual",
      caption: "Mengambil gambar prototipe produk dengan tata cahaya studio agar portofolio tampak profesional dan bernilai jual.",
    },
    gallery: [
      {
        src: "/images/1.webp",
        alt: "Sampel fisik kemasan cinderamata UMKM yang menjadi portofolio nyata siswa",
        badge: "Desain Kemasan",
        caption: "Bukti autentik hasil cetak kemasan riil yang dapat dilampirkan dalam lembar pertanggungjawaban karya.",
      },
      {
        src: "/images/13.webp",
        alt: "Bimbingan seleksi karya desain terbaik bersama mentor sebelum pengajuan ke industri",
        badge: "Kurasi Karya",
        caption: "Mentor memberikan masukan seputar karya mana yang paling relevan untuk ditonjolkan ke calon klien/kampus.",
      },
    ],
  },
  "/dokumen-pkl/laporan-pkl/": {
    src: "/images/28.webp",
    alt: "Penyusunan bab laporan akhir PKL dan verifikasi pengesahan oleh mentor industri",
    caption: "Struktur baku laporan pertanggungjawaban kegiatan magang sesuai pedoman akademik yang disahkan mentor.",
    feature: {
      src: "/images/10.webp",
      alt: "Fasilitas workstation komputer pengetikan dan rekap data laporan magang siswa",
      badge: "Penyusunan Laporan",
      caption: "Peserta leluasa memanfaatkan komputer dan internet kantor untuk menyelesaikan naskah laporan akhir.",
    },
    gallery: [
      {
        src: "/images/24.webp",
        alt: "Penyerahan draf final laporan magang untuk ditandatangani dan distempel resmi",
        badge: "Pengesahan Naskah",
        caption: "Pemberian tanda tangan pembimbing industri dan stempel basah perusahaan pada lembar pengesahan laporan.",
      },
      {
        src: "/images/4.webp",
        alt: "Penerbitan nilai evaluasi kompetensi magang resmi terlampir pada laporan akhir",
        badge: "Nilai Akhir Resmi",
        caption: "Transkrip penilaian objektif mencakup aspek teknis, kedisiplinan, dan tanggung jawab kerja industri.",
      },
    ],
  },
  "/dokumen-pkl/jurnal-harian/": {
    src: "/images/24.webp",
    alt: "Pemeriksaan dan penandatanganan logbook jurnal harian aktivitas PKL oleh mentor industri",
    caption: "Teknik mendokumentasikan tugas harian agar mudah divalidasi dan ditandatangani pembimbing lapangan.",
    feature: {
      src: "/images/22.webp",
      alt: "Peserta mendokumentasikan rincian tugas proyek yang telah diselesaikan hari ini",
      badge: "Pencatatan Harian",
      caption: "Mencatat deskripsi pekerjaan, tools yang digunakan, dan kendala yang dihadapi secara runut dan jujur.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Sesi evaluasi mingguan catatan logbook aktivitas bersama mentor pembimbing",
        badge: "Evaluasi Mingguan",
        caption: "Mentor memeriksa kesesuaian tugas yang dikerjakan dengan target kompetensi kejuruan siswa.",
      },
      {
        src: "/images/28.webp",
        alt: "Pengesahan paraf berkala pada buku jurnal fisik siswa setiap akhir pekan",
        badge: "Paraf Verifikasi",
        caption: "Paraf pembimbing memastikan seluruh catatan kegiatan diakui secara sah oleh pihak sekolah/kampus.",
      },
    ],
  },
  "/dokumen-pkl/presentasi/": {
    src: "/images/13.webp",
    alt: "Sesi presentasi akhir hasil karya magang di depan penguji dan mentor industri",
    caption: "Kiat menyajikan slide presentasi menarik dan melatih kepercayaan diri public speaking.",
    feature: {
      src: "/images/21.webp",
      alt: "Demonstrasi langsung website atau portofolio digital di hadapan forum evaluasi",
      badge: "Demo Proyek",
      caption: "Peserta menampilkan hasil akhir produk digital yang telah dikerjakan dan menjawab pertanyaan teknis penguji.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Suasana tanya jawab interaktif dan diskusi apresiasi karya bersama rekan tim",
        badge: "Tanya Jawab Karya",
        caption: "Rekan satu tim memberikan tanggapan positif dan masukan membangun untuk pengembangan karya selanjutnya.",
      },
      {
        src: "/images/4.webp",
        alt: "Penyerahan sertifikat kelulusan presentasi evaluasi akhir program PKL di Saka",
        badge: "Kelulusan Presentasi",
        caption: "Apresiasi formal atas keberhasilan memaparkan hasil kerja magang dengan profesional dan percaya diri.",
      },
    ],
  },
  "/dokumen-pkl/surat-balasan/": {
    src: "/images/24.webp",
    alt: "Penerbitan surat keterangan persetujuan kuota magang resmi berkop industri",
    caption: "Alur konfirmasi penerimaan kuota bagi peserta yang telah lolos verifikasi berkas.",
    feature: {
      src: "/images/28.webp",
      alt: "Penyerahan fisik surat balasan penerimaan magang untuk diserahkan ke pihak sekolah",
      badge: "Surat Balasan Fisik",
      caption: "Surat resmi bertanda tangan pimpinan dan stempel basah Saka diserahkan kepada perwakilan siswa/guru.",
    },
    gallery: [
      {
        src: "/images/3.webp",
        alt: "Briefing orientasi jadwal masuk pertama setelah surat balasan resmi diterbitkan",
        badge: "Briefing Masuk",
        caption: "Pemberitahuan tata tertib hari pertama, seragam kerja, dan jam kedatangan sebelum pukul 08:00 WIB.",
      },
      {
        src: "/images/6.webp",
        alt: "Pengenalan lingkungan kerja dan penempatan divisi bagi siswa yang telah resmi diterima",
        badge: "Penempatan Divisi",
        caption: "Siswa disambut hangat dan diperkenalkan dengan fasilitas kantor serta mentor divisi masing-masing.",
      },
    ],
  },
  "/info-pkl/cara-mencari/": {
    src: "/images/24.webp",
    alt: "Mengajukan surat permohonan magang ke agensi dengan ekosistem bimbingan nyata",
    caption: "Langkah strategis menemukan agensi yang memberikan bimbingan nyata dan proyek riil.",
    feature: {
      src: "/images/6.webp",
      alt: "Kunjungan langsung melihat lingkungan kantor dan showroom display produk agensi",
      badge: "Kunjungan Langsung",
      caption: "Memastikan kredibilitas agensi dengan melihat sarana operasional dan interaksi nyata anak magang.",
    },
    gallery: [
      {
        src: "/images/3.webp",
        alt: "Sesi konsultasi keselarasan kurikulum sekolah dengan bidang pekerjaan di industri",
        badge: "Konsultasi Kurikulum",
        caption: "Menghindari tempat magang yang menugaskan pekerjaan tidak relevan seperti fotokopi atau membuat kopi.",
      },
      {
        src: "/images/10.webp",
        alt: "Fasilitas meja kerja terpadu dan koneksi internet yang menjamin efektivitas belajar",
        badge: "Fasilitas Memadai",
        caption: "Tempat PKL berkualitas menyediakan lingkungan kerja yang kondusif untuk mendukung kemandirian siswa.",
      },
    ],
  },
  "/info-pkl/pkl-vs-magang/": {
    src: "/images/3.webp",
    alt: "Diskusi pemahaman perbedaan esensi magang kuliah vs PKL SMK di ruang bimbingan",
    caption: "Menyelaraskan ekspektasi durasi, sistem penilaian, dan target kompetensi kerja.",
    feature: {
      src: "/images/22.webp",
      alt: "Kolaborasi harmonis antara siswa SMK dan mahasiswa magang dalam proyek terpadu",
      badge: "Sinergi Lintas Jenjang",
      caption: "Menyatukan keahlian praktis siswa kejuruan dengan wawasan teoritis mahasiswa dalam satu ekosistem.",
    },
    gallery: [
      {
        src: "/images/28.webp",
        alt: "Penyelarasan target penilaian akademik BKK sekolah dengan rubrik industri",
        badge: "Penilaian Akademik",
        caption: "Setiap jenjang memiliki instrumen evaluasi yang disesuaikan dengan kebutuhan pedoman kampusnya.",
      },
      {
        src: "/images/13.webp",
        alt: "Pendampingan mentor memastikan seluruh peserta mencapai kompetensi kerja optimal",
        badge: "Mentoring Inklusif",
        caption: "Semua peserta mendapatkan bimbingan intensif yang setara tanpa memandang asal institusi.",
      },
    ],
  },
  "/info-pkl/durasi-pkl/": {
    src: "/images/11.webp",
    alt: "Manajemen timeline pelaksanaan program magang 3 hingga 6 bulan di industri",
    caption: "Roadmap pengembangan kompetensi bertahap dari masa orientasi hingga rilis proyek.",
    feature: {
      src: "/images/13.webp",
      alt: "Evaluasi progres mingguan untuk memastikan tahapan pembelajaran tercapai tepat waktu",
      badge: "Timeline Proyek",
      caption: "Monitoring milestone mingguan membantu peserta menuntaskan target kompetensi sebelum periode PKL berakhir.",
    },
    gallery: [
      {
        src: "/images/21.webp",
        alt: "Peningkatan keterampilan bertahap dari pemahaman dasar hingga penanganan proyek mandiri",
        badge: "Progres Kompetensi",
        caption: "Bulan pertama adaptasi tools, bulan kedua hingga keenam pengerjaan karya riil yang bernilai portofolio.",
      },
      {
        src: "/images/4.webp",
        alt: "Pencapaian akhir penuntasan seluruh durasi magang dan penerimaan sertifikat resmi",
        badge: "Kelulusan Periode",
        caption: "Siswa menuntaskan jam praktik kerja sesuai ketentuan dinas pendidikan dengan sertifikat kompetensi.",
      },
    ],
  },
  "/info-pkl/pkl-berbayar/": {
    src: "/images/16.webp",
    alt: "Kebijakan pelaksanaan program magang bebas biaya 100% di Saka Malang",
    caption: "Transparansi program tanpa pungutan biaya pendaftaran dan tanpa biaya bimbingan.",
    feature: {
      src: "/images/10.webp",
      alt: "Pemanfaatan seluruh fasilitas kerja, listrik, dan WiFi agensi tanpa biaya apapun",
      badge: "Gratis 100%",
      caption: "Saka tidak pernah membebankan biaya operasional atau fasilitas kepada peserta magang maupun sekolah.",
    },
    gallery: [
      {
        src: "/images/21.webp",
        alt: "Bimbingan intensif berkualitas dari staf industri berpengalaman secara cuma-cuma",
        badge: "Bimbingan Gratis",
        caption: "Komitmen pembinaan vokasi profesional: ilmu praktis industri dibagikan penuh dedikasi tanpa pungutan.",
      },
      {
        src: "/images/4.webp",
        alt: "Penerbitan sertifikat resmi kelulusan industri tanpa biaya administrasi sertifikasi",
        badge: "Sertifikasi Bebas Biaya",
        caption: "Seluruh lembar penilaian resmi dan sertifikat kompetensi diberikan gratis kepada setiap lulusan PKL.",
      },
    ],
  },
  "/info-pkl/online-vs-offline/": {
    src: "/images/10.webp",
    alt: "Suasana kerja langsung on-site di studio kreatif Saka yang nyaman dan kondusif",
    caption: "Keunggulan interaksi tatap muka, transfer ilmu langsung, dan fasilitas kerja studio.",
    feature: {
      src: "/images/13.webp",
      alt: "Interaksi tatap muka langsung saat briefing memudahkan transfer pemahaman materi kerja",
      badge: "Tatap Muka Langsung",
      caption: "Kendala teknis dapat langsung ditanyakan dan dipraktikkan seketika tanpa jeda komunikasi online.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Membangun keakraban sosial dan kerja tim nyata yang tidak bisa didapatkan saat magang online",
        badge: "Sosialisasi Kerja",
        caption: "Mengalami dinamika komunikasi kantor sungguhan, makan siang bareng, dan kerja sama tim secara riil.",
      },
      {
        src: "/images/15.webp",
        alt: "Akses langsung ke fasilitas fisik seperti studio foto produk dan mesin produksi souvenir",
        badge: "Peralatan Fisik",
        caption: "Praktik langsung mengoperasikan kamera studio, softbox, dan mesin heat press secara nyata.",
      },
    ],
  },
  "/info-pkl/pkl-di-umkm/": {
    src: "/images/1.webp",
    alt: "Keterlibatan langsung memajukan branding kemasan produk UMKM lokal",
    caption: "Merasakan dampak nyata karya desain dan optimasi web bagi perkembangan bisnis lokal.",
    feature: {
      src: "/images/24.webp",
      alt: "Membantu digitalisasi toko online dan memperluas jangkauan pasar mitra UMKM binaan",
      badge: "Dampak Langsung",
      caption: "Setiap postingan artikel dan optimasi toko yang dibuat siswa memberikan efek riil pada omzet usaha mitra.",
    },
    gallery: [
      {
        src: "/images/12.webp",
        alt: "Perancangan materi identitas visual kemasan produk yang langsung digunakan di pasaran",
        badge: "Desain Komersial",
        caption: "Karya desain siswa dicetak ribuan pcs dan dipajang di etalase toko ritel sebagai kemasan resmi.",
      },
      {
        src: "/images/13.webp",
        alt: "Mendiskusikan solusi kebutuhan bisnis langsung bersama pelaku usaha dan mentor",
        badge: "Konsultasi UMKM",
        caption: "Melatih kepekaan memahami ekspektasi pemilik usaha dan merumuskan strategi penawaran yang efektif.",
      },
    ],
  },
  "/info-pkl/startup-vs-perusahaan/": {
    src: "/images/22.webp",
    alt: "Kultur agensi digital modern yang kolaboratif, terbuka, dan adaptif",
    caption: "Menikmati kebebasan berekspresi, komunikasi terbuka, dan fleksibilitas kerja tim.",
    feature: {
      src: "/images/13.webp",
      alt: "Komunikasi dua arah yang santai tanpa sekat birokrasi hierarki yang kaku",
      badge: "Komunikasi Terbuka",
      caption: "Anak magang bebas menyampaikan ide segar dan berdiskusi langsung dengan pimpinan proyek.",
    },
    gallery: [
      {
        src: "/images/10.webp",
        alt: "Ruang kerja fleksibel yang memacu kreativitas dan kemandirian berkarya",
        badge: "Ekosistem Adaptif",
        caption: "Ritme kerja cepat membiasakan peserta adaptif terhadap perkembangan tren digital terbaru.",
      },
      {
        src: "/images/21.webp",
        alt: "Keterlibatan menyeluruh dalam seluruh tahapan pengembangan proyek dari hulu ke hilir",
        badge: "Peran Menyeluruh",
        caption: "Di agensi kreatif, siswa memegang peran penting dalam siklus proyek, bukan sekadar penonton.",
      },
    ],
  },
  "/info-pkl/mbkm-vs-pkl-smk/": {
    src: "/images/22.webp",
    alt: "Kolaborasi lintas jenjang antara mahasiswa magang MBKM dan siswa vokasi SMK",
    caption: "Saling bertukar wawasan teoritis kampus dengan keterampilan praktis kejuruan.",
    feature: {
      src: "/images/21.webp",
      alt: "Pertukaran ilmu koding pemrograman dan arsitektur web modern antarmahasiswa dan siswa",
      badge: "Tukar Wawasan",
      caption: "Mahasiswa membagikan wawasan struktur data sementara siswa SMK mempraktikkan implementasi kode cepat.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Presentasi hasil analisis proyek terpadu di hadapan seluruh mentor industri",
        badge: "Kolaborasi Riset",
        caption: "Memadukan analisis pasar digital mendalam dengan eksekusi kampanye kreatif secara terpadu.",
      },
      {
        src: "/images/4.webp",
        alt: "Konversi nilai akademik resmi baik untuk SKS perguruan tinggi maupun rapor BKK SMK",
        badge: "Pengakuan Resmi",
        caption: "Dokumen penilaian disesuaikan dengan format kementerian untuk mempermudah administrasi kampus/sekolah.",
      },
    ],
  },
  "/info-pkl/kesalahan-mencari/": {
    src: "/images/24.webp",
    alt: "Evaluasi persiapan dan kesalahan umum saat melamar magang di agensi digital",
    caption: "Hal-hal krusial yang perlu dihindari agar berkas Anda diprioritaskan oleh perusahaan.",
    feature: {
      src: "/images/28.webp",
      alt: "Menyiapkan berkas surat resmi jauh-jauh hari sebelum kuota periode penuh",
      badge: "Antisipasi Kuota",
      caption: "Kesalahan terbesar adalah mendaftar mepet; pastikan surat pengantar diajukan 1-2 bulan sebelum jadwal masuk.",
    },
    gallery: [
      {
        src: "/images/3.webp",
        alt: "Menghindari rasa minder saat wawancara dengan memahami keahlian dasar kejuruan",
        badge: "Kesiapan Wawancara",
        caption: "Mentor tidak menuntut keahlian sempurna, melainkan mencari sikap disiplin dan kemauan belajar tinggi.",
      },
      {
        src: "/images/10.webp",
        alt: "Memastikan tempat magang yang dipilih memiliki sarana kerja nyata, bukan tempat menganggur",
        badge: "Pilihan Tepat",
        caption: "Riset lingkungan kantor terlebih dahulu agar waktu 3-6 bulan magang benar-benar membuahkan ilmu berharga.",
      },
    ],
  },
  "/persiapan-pkl/checklist/": {
    src: "/images/28.webp",
    alt: "Pemeriksaan checklist perlengkapan administrasi sebelum hari pertama masuk PKL",
    caption: "Daftar periksa dokumen fisik, kesiapan laptop, dan pakaian kerja sopan rapi.",
    feature: {
      src: "/images/10.webp",
      alt: "Kesiapan perangkat laptop kerja pribadi dan charger dalam kondisi prima",
      badge: "Kesiapan Perangkat",
      caption: "Memastikan sistem operasi laptop telah terinstall software dasar penunjang tugas divisi masing-masing.",
    },
    gallery: [
      {
        src: "/images/3.webp",
        alt: "Konfirmasi jam kedatangan hari pertama sebelum pukul 08:00 WIB bersama narahubung",
        badge: "Kedisiplinan Waktu",
        caption: "Hadir 15 menit lebih awal untuk persiapan piket pagi dan mengikuti doa bersama tepat waktu.",
      },
      {
        src: "/images/6.webp",
        alt: "Memahami tata tertib lingkungan kantor dan etika berpakaian sopan berkerah",
        badge: "Etika Kerja",
        caption: "Mengenakan seragam sekolah/baju rapi berkerah dan sepatu untuk menjaga profesionalitas lingkungan kerja.",
      },
    ],
  },
  "/persiapan-pkl/interview/": {
    src: "/images/3.webp",
    alt: "Simulasi dan pelaksanaan wawancara perkenalan kompetensi dan orientasi PKL di Saka",
    caption: "Cara menjawab pertanyaan wawancara dengan lugas, percaya diri, santai, dan jujur di hadapan mentor.",
    feature: {
      src: "/images/24.webp",
      alt: "Membawa berkas surat rekomendasi sekolah dan portofolio karya saat sesi wawancara",
      badge: "Berkas Pendukung",
      caption: "Menunjukkan bukti keseriusan dan legalitas administratif resmi dari pihak sekolah/kampus asal.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Sesi briefing santai memaparkan alur kegiatan magang dan budaya ramah tanpa senioritas",
        badge: "Briefing Seleksi",
        caption: "Wawancara di Saka berlangsung hangat: mentor ingin mengenal minat siswa dan menentukan divisi paling pas.",
      },
      {
        src: "/images/6.webp",
        alt: "Tur singkat pengenalan fasilitas kantor dan display produk setelah sesi wawancara usai",
        badge: "Orientasi Kantor",
        caption: "Calon peserta diajak melihat langsung meja kerja dan suasana studio agar merasa nyaman sejak awal.",
      },
    ],
  },
  "/persiapan-pkl/chat-hrd/": {
    src: "/images/19.webp",
    alt: "Panduan tata krama komunikasi chat WhatsApp ke narahubung resmi agensi",
    caption: "Template kalimat sapaan, waktu menghubungi yang tepat, dan etika berkirim pesan.",
    feature: {
      src: "/images/3.webp",
      alt: "Tindak lanjut positif berupa konfirmasi jadwal interview setelah chat permohonan disetujui",
      badge: "Konfirmasi Ramah",
      caption: "Komunikasi yang sopan dan jelas mempermudah narahubung memproses ketersediaan kuota secara cepat.",
    },
    gallery: [
      {
        src: "/images/28.webp",
        alt: "Pengiriman dokumen PDF surat izin sekolah melalui kontak resmi sesuai arahan admin",
        badge: "Format Lampiran",
        caption: "Menyertakan file surat pengantar dengan nama file yang jelas dan rapi saat berkomunikasi via WhatsApp.",
      },
      {
        src: "/images/13.webp",
        alt: "Suasana komunikasi hangat dan responsif saat menyambut pertanyaan dari calon peserta",
        badge: "Pelayanan Terbuka",
        caption: "Tim Saka selalu melayani pertanyaan siswa dan guru pembimbing dengan ramah selama jam kerja.",
      },
    ],
  },
  "/persiapan-pkl/skill-anak-magang/": {
    src: "/images/20.webp",
    alt: "Penguasaan keahlian digital marketing dan operasional marketplace online",
    caption: "Fokus pada penguasaan fundamental software, pemecahan masalah, dan kecepatan adaptasi.",
    feature: {
      src: "/images/12.webp",
      alt: "Keterampilan dasar penggunaan software perancangan grafis Photoshop dan Illustrator",
      badge: "Skill Desain",
      caption: "Memahami dasar layouting, pemilihan warna komersial, dan format ekspor aset visual untuk digital.",
    },
    gallery: [
      {
        src: "/images/21.webp",
        alt: "Dasar logika pemrograman web dan pemahaman struktur HTML/CSS responsif",
        badge: "Skill Koding",
        caption: "Kemampuan mengedit kode website sederhana dan menelusuri pesan error di console browser.",
      },
      {
        src: "/images/15.webp",
        alt: "Keahlian pengoperasian kamera, sudut pandang visual, dan pencahayaan foto produk",
        badge: "Skill Multimedia",
        caption: "Mengatur fokus kamera, komposisi rule of thirds, serta kerapian penataan objek foto katalog.",
      },
    ],
  },
  "/persiapan-pkl/soft-skill/": {
    src: "/images/13.webp",
    alt: "Praktik kemampuan komunikasi tim, empati, dan manajemen waktu kerja di studio",
    caption: "Soft skill menjadi pembeda utama yang menentukan keberhasilan karier di masa depan.",
    feature: {
      src: "/images/22.webp",
      alt: "Kerja sama tim yang hangat dan saling menghargai tanpa memandang perbedaan jurusan",
      badge: "Kerja Sama Tim",
      caption: "Membiasakan budaya saling tolong menolong, mendengarkan masukan, dan berdiskusi secara sehat.",
    },
    gallery: [
      {
        src: "/images/3.webp",
        alt: "Latihan etika berbicara santun, kontak mata yang baik, dan keterbukaan menerima kritik",
        badge: "Etika Komunikasi",
        caption: "Berkomunikasi secara jujur mengenai kendala kerja sehingga mentor dapat memberikan arahan tepat.",
      },
      {
        src: "/images/10.webp",
        alt: "Manajemen fokus kerja mandiri dan kedisiplinan menuntaskan target harian tepat waktu",
        badge: "Manajemen Waktu",
        caption: "Memanfaatkan jam kerja 08:00 - 16:00 dengan produktif agar tidak ada tugas yang tertunda.",
      },
    ],
  },
  "/persiapan-pkl/tools-gratis/": {
    src: "/images/5.webp",
    alt: "Pemanfaatan software dan platform gratis standar industri untuk mendukung kerja PKL",
    caption: "Memaksimalkan alat kerja open-source tanpa perlu membeli lisensi berbayar mahal.",
    feature: {
      src: "/images/21.webp",
      alt: "Eksplorasi code editor gratis VS Code dan tools ekstensi produktivitas web modern",
      badge: "Editor Gratis",
      caption: "Mengoptimalkan shortcut editor, linter kode, dan live server gratis untuk mempercepat koding.",
    },
    gallery: [
      {
        src: "/images/12.webp",
        alt: "Pemanfaatan tools desain gratis seperti Canva dan Figma untuk perancangan visual",
        badge: "Platform Desain",
        caption: "Menghasilkan materi promosi yang estetis dengan memanfaatkan ribuan template dan elemen desain gratis.",
      },
      {
        src: "/images/10.webp",
        alt: "Penggunaan Google Workspace dan Trello gratis untuk kolaborasi manajemen proyek",
        badge: "Tools Kolaborasi",
        caption: "Sinkronisasi file dokumen di Google Drive dan memantau status tugas di papan Kanban digital.",
      },
    ],
  },
  "/persiapan-pkl/belajar-seo/": {
    src: "/images/27.webp",
    alt: "Pengenalan strategi dasar visibilitas di mesin pencari Google dan riset kata kunci",
    caption: "Konsep kata kunci, search volume, heading struktur, dan kecepatan web.",
    feature: {
      src: "/images/21.webp",
      alt: "Penerapan teknis heading tag H1-H3, meta deskripsi, dan struktur URL ramah SEO",
      badge: "SEO On-Page",
      caption: "Menata kode HTML artikel agar mudah dibaca robot perayap Google dan nyaman dibaca pengunjung.",
    },
    gallery: [
      {
        src: "/images/24.webp",
        alt: "Praktik integrasi artikel SEO ke dalam strategi pemasaran toko digital dan marketplace",
        badge: "SEO Konten Bisnis",
        caption: "Menghubungkan artikel informatif ke etalase produk untuk mendatangkan traffic calon pembeli organik.",
      },
      {
        src: "/images/10.webp",
        alt: "Fasilitas koneksi stabil untuk memantau pergerakan peringkat keyword di Google Search",
        badge: "Monitoring Peringkat",
        caption: "Menganalisis fluktuasi posisi kata kunci menggunakan Google Search Console secara berkala.",
      },
    ],
  },
  "/persiapan-pkl/pkl-jadi-karyawan/": {
    src: "/images/4.webp",
    alt: "Apresiasi dan peluang karier bagi peserta berprestasi tinggi di lingkungan agensi",
    caption: "Langkah membangun reputasi positif agar direkrut atau mendapat proyek freelance.",
    feature: {
      src: "/images/21.webp",
      alt: "Membangun portofolio karya nyata yang membuktikan kapabilitas teknis di mata industri",
      badge: "Bukti Portofolio",
      caption: "Kualitas karya riil yang tersimpan di repositori online menjadi pembeda utama saat melamar kerja.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Membina hubungan kerja yang harmonis dan menunjukkan inisiatif tinggi selama magang",
        badge: "Inisiatif Positif",
        caption: "Peserta yang proaktif membantu tim dan menjaga kedisiplinan selalu diprioritaskan saat ada lowongan.",
      },
      {
        src: "/images/7.webp",
        alt: "Jalinan komunikasi yang terus terjaga membuka peluang proyek freelance pasca lulus",
        badge: "Peluang Proyek",
        caption: "Banyak alumni Saka yang dipercaya menjadi mitra kerja lepas mengerjakan proyek komersial klien.",
      },
    ],
  },
  "/pkl-malang/daftar-per-jurusan/": {
    src: "/images/9.webp",
    alt: "Peta peluang magang industri digital di kawasan Kota Malang berdasarkan jurusan",
    caption: "Malang sebagai kota pendidikan yang memiliki ratusan peluang agensi kreatif aktif.",
    feature: {
      src: "/images/12.webp",
      alt: "Kesesuaian divisi desain grafis dan DKV dengan proyek kemasan komersial di Malang",
      badge: "Peluang DKV",
      caption: "Kebutuhan tinggi sektor UMKM Malang akan kemasan modern membuka ruang praktik luas bagi anak DKV.",
    },
    gallery: [
      {
        src: "/images/21.webp",
        alt: "Peluang praktik web engineering dan coding bagi siswa jurusan RPL di Malang",
        badge: "Peluang RPL & IT",
        caption: "Pertumbuhan pesat agensi digital di Malang membutuhkan talenta muda yang menguasai web modern.",
      },
      {
        src: "/images/24.webp",
        alt: "Praktik pemasaran online bagi siswa Bisnis Digital dan Manajemen di sentra bisnis Malang",
        badge: "Peluang Pemasaran",
        caption: "Ekosistem e-commerce lokal yang dinamis menjadi tempat belajar ideal bagi jurusan pemasaran.",
      },
    ],
  },
  "/pkl-malang/it-jaringan/": {
    src: "/images/21.webp",
    alt: "Ekosistem teknologi dan infrastruktur digital di Kota Malang Jawa Timur",
    caption: "Pertumbuhan startup dan studio software engineering yang pesat di Jawa Timur.",
    feature: {
      src: "/images/10.webp",
      alt: "Fasilitas workstation komputer dan infrastruktur jaringan agensi di Malang",
      badge: "Workstation IT",
      caption: "Setup perangkat kerja modern dengan koneksi fiber optic berkecepatan tinggi penunjang produktivitas.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Kolaborasi tim IT mengelola sistem informasi agensi dan pemecahan kendala server",
        badge: "Kolaborasi IT",
        caption: "Siswa TKJ dan RPL berkolaborasi menjaga stabilitas akses internet dan server database studio.",
      },
      {
        src: "/images/13.webp",
        alt: "Diskusi tren teknologi web terbaru bersama praktisi software house terkemuka di Malang",
        badge: "Diskusi Tren IT",
        caption: "Mengenal standar kebutuhan industri software di Malang Raya dan prospek karier masa depan.",
      },
    ],
  },
  "/pkl-malang/marketing/": {
    src: "/images/24.webp",
    alt: "Peluang karier divisi pemasaran dan promosi digital di kawasan Kota Malang",
    caption: "Membantu ekspansi pasar brand lokal menjangkau konsumen nasional.",
    feature: {
      src: "/images/19.webp",
      alt: "Pelatihan negosiasi komersial dan strategi komunikasi pelanggan produk lokal Malang",
      badge: "Komunikasi Bisnis",
      caption: "Mempelajari psikologi konsumen lokal dalam memilih produk oleh-oleh dan souvenir khas Malang.",
    },
    gallery: [
      {
        src: "/images/5.webp",
        alt: "Riset tren belanja konsumen online di marketplace untuk produk cinderamata Malang",
        badge: "Riset Tren Lokal",
        caption: "Memetakan kata kunci musiman seperti souvenir wisuda dan cinderamata dinas di wilayah Malang Raya.",
      },
      {
        src: "/images/13.webp",
        alt: "Presentasi strategi kampanye promosi digital di ruang rapat agensi Saka Malang",
        badge: "Presentasi Strategi",
        caption: "Memaparkan rencana anggaran promosi, jadwal postingan artikel, dan proyeksi omzet penjualan.",
      },
    ],
  },
  "/pkl-malang/kota-vs-kabupaten/": {
    src: "/images/20.webp",
    alt: "Kemudahan aksesibilitas transportasi dan fasilitas di kawasan Kota Malang",
    caption: "Lokasi kantor strategis yang dekat dengan sarana publik dan kawasan kuliner hemat.",
    feature: {
      src: "/images/6.webp",
      alt: "Lingkungan kantor Saka di perbatasan strategis yang mudah dijangkau dari berbagai arah",
      badge: "Akses Mudah",
      caption: "Dekat dengan jalur angkutan umum, terminal, stasiun, serta kawasan hunian mahasiswa yang aman.",
    },
    gallery: [
      {
        src: "/images/10.webp",
        alt: "Suasana studio kerja yang tenang dan kondusif terbebas dari kebisingan jalan protokol",
        badge: "Suasana Kondusif",
        caption: "Memberikan kenyamanan optimal bagi peserta untuk berkonsentrasi mengerjakan penugasan proyek.",
      },
      {
        src: "/images/22.webp",
        alt: "Peserta dari Kota maupun Kabupaten Malang berbaur hangat dalam satu ruang kolaborasi",
        badge: "Keberagaman Asal",
        caption: "Siswa dari pelosok kabupaten hingga pusat kota saling berteman dan bertukar cerita pengalaman.",
      },
    ],
  },
  "/pkl-malang/mahasiswa-luar-kota/": {
    src: "/images/25.webp",
    alt: "Penyambutan ramah bagi peserta magang dari luar daerah di studio Saka Malang",
    caption: "Panduan adaptasi cepat dan lingkungan pertemanan yang suportif bagi anak rantau.",
    feature: {
      src: "/images/13.webp",
      alt: "Sesi briefing perkenalan hangat membantu peserta perantau cepat merasa di rumah sendiri",
      badge: "Adaptasi Ramah",
      caption: "Mentor dan rekan tim lokal siap membantu mengarahkan rute angkutan, rekomendasi kos, dan kuliner terjangkau.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Suasana kekeluargaan antar sesama peserta magang meruntuhkan rasa canggung anak rantau",
        badge: "Keluarga Rantau",
        caption: "Kebersamaan saat jam istirahat membuat siswa dari luar provinsi merasa nyaman dan betah.",
      },
      {
        src: "/images/10.webp",
        alt: "Fasilitas studio yang nyaman dan lengkap menjadi sarana belajar menyenangkan selama di Malang",
        badge: "Sarana Nyaman",
        caption: "Ruang kerja ber-AC dengan koneksi internet cepat menjadi tempat berkembang optimal bagi siswa luar kota.",
      },
    ],
  },
  "/pkl-malang/biaya-hidup-kos/": {
    src: "/images/6.webp",
    alt: "Estimasi rincian biaya kos dan kebutuhan harian di sekitar lokasi studio Saka Malang",
    caption: "Kisaran tarif kamar kos terjangkau dengan fasilitas internet dan lingkungan aman.",
    feature: {
      src: "/images/10.webp",
      alt: "Fasilitas kantor lengkap air minum dan internet menekan pengeluaran harian siswa",
      badge: "Hemat Biaya",
      caption: "Tersedia dispenser air minum gratis dan koneksi WiFi cepat sehingga peserta menghemat kuota internet.",
    },
    gallery: [
      {
        src: "/images/22.webp",
        alt: "Makan siang bersama teman magang di sentra kuliner murah sekitar kantor",
        badge: "Kuliner Murah",
        caption: "Kawasan sekitar kantor menyediakan banyak pilihan warung makan hemat ramah kantong pelajar.",
      },
      {
        src: "/images/20.webp",
        alt: "Akses jalan yang nyaman dan dekat dengan toko kebutuhan harian serta minimarket",
        badge: "Lokasi Strategis",
        caption: "Kebutuhan sehari-hari mudah dipenuhi dengan jarak tempuh yang dapat dijangkau dengan berjalan kaki.",
      },
    ],
  },
  "/pkl-malang/magang-mahasiswa/": {
    src: "/images/22.webp",
    alt: "Program konversi SKS dan penyusunan tugas akhir skripsi/PKL di studio Saka Malang",
    caption: "Penugasan berbasis portfolio nyata yang diakui universitas dan dosen pembimbing.",
    feature: {
      src: "/images/21.webp",
      alt: "Pengerjaan studi kasus sistem web nyata yang dapat dijadikan data riset tugas akhir",
      badge: "Riset Akademik",
      caption: "Mahasiswa mendapatkan data performa riil dan arsitektur kode komersial untuk bahan penyusunan skripsi.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Sesi konsultasi teknis dan penandatanganan logbook magang bersama pembimbing lapangan",
        badge: "Validasi Mentor",
        caption: "Mentor mendampingi pemenuhan capaian kompetensi magang sesuai format standar fakultas/universitas.",
      },
      {
        src: "/images/4.webp",
        alt: "Penyerahan sertifikat magang resmi industri sebagai syarat kelulusan sidang magang kampus",
        badge: "Sertifikat Kampus",
        caption: "Dokumen kelulusan resmi berkop industri yang memenuhi seluruh kriteria verifikasi dosen penguji.",
      },
    ],
  },
  "/program-pkl/fasilitas/": {
    src: "/images/10.webp",
    alt: "Fasilitas ruang kerja dan studio PKL di Saka Malang",
    caption: "Fasilitas ruang kerja kolaboratif dengan koneksi internet cepat dan area diskusi tim.",
    feature: {
      src: "/images/15.webp",
      alt: "Mini studio fotografi produk komersial dilengkapi softbox lighting",
      badge: "Mini Studio Foto",
      caption: "Fasilitas tata cahaya profesional dan background foto untuk menunjang praktik katalog produk UMKM.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Area ruang rapat dan diskusi tim untuk briefing harian dan evaluasi mingguan",
        badge: "Ruang Rapat Tim",
        caption: "Dilengkapi meja meeting panjang dan layar presentasi interaktif penunjang sharing session proyek.",
      },
      {
        src: "/images/6.webp",
        alt: "Showroom etalase produk dan display cinderamata souvenir hasil karya industri",
        badge: "Showroom Display",
        caption: "Area etalase sampel produk nyata yang memudahkan peserta mempelajari standar kualitas fisik karya.",
      },
    ],
  },
  "/program-pkl/alur-seleksi/": {
    src: "/images/3.webp",
    alt: "Tahap orientasi, wawancara pengenalan dan konsultasi alur seleksi peserta PKL di Saka",
    caption: "Proses seleksi dan konsultasi minat bakat kompetensi dilakukan secara santai, terarah, dan profesional.",
    feature: {
      src: "/images/24.webp",
      alt: "Pemeriksaan dan verifikasi kelengkapan berkas administrasi surat pengantar sekolah",
      badge: "Verifikasi Berkas",
      caption: "Pemeriksaan kelengkapan berkas surat pengantar sekolah, CV, dan pencocokan jurusan dengan kuota divisi.",
    },
    gallery: [
      {
        src: "/images/13.webp",
        alt: "Briefing orientasi budaya kerja agensi, jam operasional, dan pengenalan mentor",
        badge: "Briefing Onboarding",
        caption: "Peserta yang dinyatakan lolos seleksi berkas mengikuti briefing tata tertib dan pengenalan tim kerja.",
      },
      {
        src: "/images/8.webp",
        alt: "Penyambutan siswa magang angkatan baru dan orientasi lingkungan kerja Saka",
        badge: "Hari Pertama Masuk",
        caption: "Pengenalan fasilitas kerja dan adaptasi lingkungan kantor sebelum resmi memulai penugasan proyek industri.",
      },
    ],
  },
};

export const allImagesPool = [
  '/images/1.webp', '/images/2.webp', '/images/3.webp', '/images/4.webp',
  '/images/5.webp', '/images/6.webp', '/images/7.webp', '/images/8.webp',
  '/images/9.webp', '/images/10.webp', '/images/11.webp', '/images/12.webp',
  '/images/13.webp', '/images/14.webp', '/images/15.webp', '/images/16.webp',
  '/images/17.webp', '/images/18.webp', '/images/19.webp', '/images/20.webp',
  '/images/21.webp', '/images/22.webp', '/images/23.webp', '/images/24.webp',
  '/images/25.webp', '/images/26.webp', '/images/27.webp', '/images/28.webp',
];

export function getArticleVisuals(path: string): ArticleVisualData {
  if (articleVisuals[path]) {
    return articleVisuals[path];
  }

  // Fallback cerdas jika ada route baru
  let hash = 0;
  for (let i = 0; i < path.length; i++) {
    hash = (hash << 5) - hash + path.charCodeAt(i);
    hash |= 0;
  }
  const idx = Math.abs(hash) % allImagesPool.length;
  const heroSrc = allImagesPool[idx];
  const poolRem1 = allImagesPool.filter((img) => img !== heroSrc);
  const featureSrc = poolRem1[(idx + 3) % poolRem1.length];
  const poolRem2 = poolRem1.filter((img) => img !== featureSrc);
  const g1Src = poolRem2[(idx + 7) % poolRem2.length];
  const poolRem3 = poolRem2.filter((img) => img !== g1Src);
  const g2Src = poolRem3[(idx + 11) % poolRem3.length];

  return {
    src: heroSrc,
    alt: 'Dokumentasi kegiatan dan bimbingan PKL di Saka Malang',
    caption: 'Praktik kerja industri dengan pendampingan intensif mentor profesional.',
    feature: {
      src: featureSrc,
      alt: 'Pelaksanaan praktik kerja industri nyata di lingkungan studio Saka',
      badge: 'Praktik Nyata',
      caption: 'Penugasan berbasis kebutuhan riil industri yang melatih kemandirian dan keterampilan siswa.',
    },
    gallery: [
      {
        src: g1Src,
        alt: 'Sesi pendampingan teknis dan bimbingan mentor industri',
        badge: 'Bimbingan Mentor',
        caption: 'Mentor profesional siap membimbing penyelesaian tugas tanpa rasa takut dan tanpa senioritas.',
      },
      {
        src: g2Src,
        alt: 'Fasilitas ruang kerja studio yang kondusif dan nyaman',
        badge: 'Fasilitas Studio',
        caption: 'Didukung koneksi internet cepat, ruang ber-AC, dan peralatan penunjang kerja yang memadai.',
      },
    ],
  };
}

export function getDeterministicImage(str: string): string {
  return getArticleVisuals(str).src;
}

export function getArticleGallery(path: string, _heroBg?: string, _featureSrc?: string): GalleryPhoto[] {
  return getArticleVisuals(path).gallery;
}

export function getFeaturePhoto(path: string, _heroBg?: string): string {
  return getArticleVisuals(path).feature.src;
}
