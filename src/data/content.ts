export const services = [
  {
    icon: "code", name: "Pengembangan Website & Aplikasi", short: "Website cepat, rapi, dan siap ditemukan di Google.",
    problem: "Banyak bisnis belum punya website, atau punya tetapi lambat, sulit dibuka di ponsel, dan tidak muncul saat dicari pelanggan.",
    solution: "Kami membangun website company profile, katalog, toko online, dan aplikasi web yang ringan, responsif, serta sudah dioptimasi untuk SEO sejak awal.",
    deliver: "Desain antarmuka, website responsif, pengaturan SEO dasar, integrasi WhatsApp dan analytics, serta panduan pengelolaan konten.", tech: "Astro, Laravel, React, Bootstrap"
  },
  {
    icon: "trend", name: "Digital Marketing", short: "Strategi SEO, iklan, dan media sosial yang bisa diukur.",
    problem: "Iklan dan unggahan media sosial sering berjalan tanpa tujuan jelas, sehingga biaya keluar tetapi hasilnya sulit dibaca.",
    solution: "Kami menyusun strategi berbasis data: riset kata kunci, optimasi halaman, pengelolaan iklan, dan kalender konten yang selaras dengan target bisnis.",
    deliver: "Audit awal, rencana kampanye, kalender konten, pengelolaan iklan, dan laporan performa berkala.", tech: "Google Analytics 4, Search Console, Google Ads, Meta Ads"
  },
  {
    icon: "pen", name: "Desain Grafis & Branding", short: "Identitas visual yang konsisten dan mudah diingat.",
    problem: "Logo, warna, dan materi promosi yang tidak seragam membuat bisnis terlihat kurang meyakinkan.",
    solution: "Kami merancang identitas visual lengkap, dari logo hingga template media sosial, supaya tampilan bisnis Anda konsisten di semua kanal.",
    deliver: "Logo, panduan merek, template media sosial, materi cetak seperti brosur dan kartu nama.", tech: "Figma, Adobe Illustrator, Photoshop"
  },
  {
    icon: "video", name: "Produksi Konten", short: "Foto dan video yang menjelaskan produk dengan jelas.",
    problem: "Foto produk yang kurang tajam dan video yang membosankan membuat calon pelanggan cepat berpaling.",
    solution: "Kami memproduksi foto produk, video pendek, dan konten edukasi dengan alur cerita yang jelas dan sesuai karakter merek.",
    deliver: "Foto produk, video promosi, video pendek untuk media sosial, dan penyuntingan akhir.", tech: "Adobe Premiere, Lightroom, CapCut"
  },
  {
    icon: "cap", name: "Pelatihan & Program Magang", short: "Magang terbimbing dengan proyek nyata dan mentor.",
    problem: "Siswa dan mahasiswa sering lulus tanpa pengalaman kerja yang relevan dengan kebutuhan industri digital.",
    solution: "Peserta magang mengerjakan proyek nyata bersama tim, dibimbing mentor, dan mendapat umpan balik rutin.",
    deliver: "Mentoring, penugasan proyek, sertifikat, dan surat keterangan magang.", tech: "Disesuaikan dengan bidang peserta"
  },
];
export const skillGroups = [
  { name: "Development", icon: "code", items: [["HTML, CSS, JavaScript", "Mahir"], ["Astro", "Mahir"], ["Laravel dan PHP", "Menengah"], ["React", "Menengah"]], learn: "Mengubah desain menjadi halaman yang berfungsi, menyusun komponen, dan menguji tampilan di berbagai perangkat." },
  { name: "Design", icon: "pen", items: [["UI/UX", "Mahir"], ["Figma", "Mahir"], ["Desain grafis", "Menengah"]], learn: "Membuat wireframe dan prototipe, lalu menyiapkan desain yang rapi untuk diserahkan ke developer." },
  { name: "Marketing", icon: "trend", items: [["SEO", "Mahir"], ["SEM dan iklan berbayar", "Menengah"], ["Analytics", "Menengah"]], learn: "Riset kata kunci, optimasi halaman, dan membaca laporan performa untuk mengambil keputusan." },
  { name: "Konten & Multimedia", icon: "video", items: [["Fotografi produk", "Menengah"], ["Penyuntingan video", "Menengah"], ["Copywriting", "Menengah"]], learn: "Merencanakan, memproduksi, dan menyunting konten untuk klien." },
  { name: "Soft skill", icon: "users", items: [["Kolaborasi tim", "Mahir"], ["Komunikasi klien", "Menengah"], ["Manajemen waktu", "Menengah"]], learn: "Bekerja dalam tim, menyampaikan progres, dan menerima masukan dengan terbuka." },
];
export const industries = [
  { icon: "store", name: "UMKM & Retail", challenge: "Pelanggan mencari produk lewat ponsel, sementara toko belum punya katalog online yang mudah dibuka.", solution: "Website katalog dengan tombol pesan WhatsApp, foto produk yang rapi, dan konten media sosial yang konsisten." },
  { icon: "food", name: "F&B", challenge: "Persaingan ketat dan promosi yang berubah cepat membuat usaha kuliner sulit tampil menonjol.", solution: "Menu digital, foto makanan, video pendek, dan optimasi profil lokal agar mudah ditemukan di sekitar lokasi." },
  { icon: "school", name: "Pendidikan", challenge: "Calon siswa dan orang tua membutuhkan informasi program yang jelas sebelum mendaftar.", solution: "Website institusi, halaman program, alur pendaftaran, dan konten edukatif." },
  { icon: "home", name: "Properti", challenge: "Calon pembeli membandingkan banyak listing dan menilai kredibilitas dari tampilan presentasi.", solution: "Halaman listing yang rapi, galeri foto dan video, serta formulir minat lewat WhatsApp." },
  { icon: "heart", name: "Kesehatan", challenge: "Pasien mencari informasi layanan, jadwal, dan lokasi yang akurat dan mudah dipercaya.", solution: "Website layanan dengan informasi jelas, jadwal praktik, peta lokasi, dan konten edukasi kesehatan." },
  { icon: "factory", name: "Manufaktur", challenge: "Produk dan kapabilitas pabrik sulit dijelaskan kepada calon mitra tanpa materi yang profesional.", solution: "Company profile digital, katalog produk, dan materi presentasi untuk calon pembeli." },
  { icon: "pin", name: "Pariwisata", challenge: "Wisatawan memutuskan tujuan berdasarkan foto, ulasan, dan kemudahan memesan.", solution: "Website destinasi dan paket wisata, konten visual, serta strategi SEO lokal." },
  { icon: "brief", name: "Jasa Profesional", challenge: "Konsultan, kantor hukum, dan penyedia jasa lain perlu tampil kredibel sebelum calon klien menghubungi.", solution: "Website yang menonjolkan keahlian, studi kasus, dan jalur konsultasi yang mudah." },
];
export const steps = [
  ["Daftar", "Hubungi kami lewat WhatsApp, lalu kirim nama, asal sekolah atau kampus, dan bidang yang kamu minati."],
  ["Seleksi", "Kami mengobrol singkat untuk mengenal minat dan kemampuanmu, lalu mencocokkannya dengan bidang yang tersedia."],
  ["Onboarding", "Kamu berkenalan dengan tim dan mentor, mendapat gambaran proyek, serta menyiapkan alat kerja."],
  ["Proyek nyata", "Kamu mengerjakan proyek klien bersama mentor dan menerima umpan balik secara rutin."],
];
export const benefits = [
  ["users", "Mentoring langsung", "Dibimbing mentor yang bekerja di bidangnya dan memberi umpan balik rutin."],
  ["brief", "Proyek nyata", "Mengerjakan tugas yang dipakai klien, bukan sekadar latihan."],
  ["award", "Sertifikat dan surat keterangan", "Bukti pengalaman untuk laporan PKL, CV, dan portofolio."],
  ["zap", "Peluang direkrut", "Peserta yang menunjukkan kinerja baik dapat dipertimbangkan bergabung dengan tim."],
];
export const values = [
  ["Jujur dan jelas", "Kami menyampaikan progres, kendala, dan estimasi apa adanya."],
  ["Belajar sambil mengerjakan", "Setiap proyek adalah kesempatan bertumbuh, baik bagi tim maupun peserta magang."],
  ["Hasil yang bisa diukur", "Kami mengutamakan pekerjaan yang dampaknya bisa dilihat dan dibaca dari data."],
  ["Kerja sama", "Klien, mentor, dan peserta magang bekerja sebagai satu tim."],
];
export const faqs = [
  { q: "Apa itu PKL Di Saka?", a: "PKL Di Saka adalah perusahaan solusi digital di Kota Malang yang menyediakan pengembangan website, digital marketing, desain, produksi konten, dan program magang untuk siswa SMK dan mahasiswa." },
  { q: "Siapa yang bisa mengikuti program magang?", a: "Siswa SMK dan mahasiswa D3 atau S1 dari jurusan yang berkaitan dengan teknologi informasi, desain, multimedia, pemasaran, atau bisnis digital." },
  { q: "Berapa lama durasi magang?", a: "Umumnya 3 sampai 6 bulan, dan dapat disesuaikan dengan kalender PKL sekolah atau ketentuan kampus. Hubungi kami untuk mencocokkan jadwal." },
  { q: "Apakah magang dilakukan di kantor atau daring?", a: "Magang berpusat di kantor kami di Malang, dengan sesi daring bila diperlukan. Detail sistem kerja dikonfirmasi saat seleksi." },
  { q: "Apakah peserta mendapat sertifikat?", a: "Ya. Peserta mendapat sertifikat dan surat keterangan magang, serta mentoring dari tim selama program berlangsung." },
  { q: "Bagaimana cara mendaftar?", a: "Klik tombol WhatsApp, lalu kirim nama, asal sekolah atau kampus, bidang yang diminati, dan perkiraan waktu magang. Tim kami akan membalas dengan langkah berikutnya." },
  { q: "Apakah sekolah atau kampus bisa bekerja sama secara resmi?", a: "Bisa. Kami menerima kerja sama PKL dan dapat menyediakan dokumen legalitas serta surat balasan sesuai kebutuhan institusi. Hubungi kami lewat WhatsApp untuk memulai." },
];
export const stats = [["5", "lini layanan digital"], ["8", "sektor industri dilayani"], ["5", "bidang keahlian tim"], ["4", "langkah mudah mendaftar magang"]];
