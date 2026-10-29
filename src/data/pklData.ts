export interface PklPage {
  id: string; // e.g. 'B5-02'
  group: 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9' | 'B10' | 'B11';
  groupName: string;
  path: string; // must have trailing slash
  slug: string;
  categorySlug?: string;
  title: string;
  h1: string;
  metaDescription: string;
  summary: string;
  targetDate: string;
  status: 'Panduan Faktual' | 'Edukasi Terbit' | 'Verifikasi Terjadwal';
  isHub?: boolean;
  icon?: string;
  badge?: string;
  scope?: string;
  keyPoints?: string[];
  sections: {
    heading: string;
    content: string;
    bullets?: string[];
    note?: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  relatedUrls: string[];
}

export const GROUPS_INFO: Record<string, { title: string; desc: string; icon: string; path: string }> = {
  B4: {
    title: 'Informasi Program',
    desc: 'Informasi resmi seputar pendaftaran, syarat, alur, fasilitas, dan ketentuan PKL.',
    icon: 'bi-grid-fill',
    path: '/program-pkl/',
  },
  B5: {
    title: 'Jurusan',
    desc: 'Pemetaan kompetensi dan jurusan SMK/perguruan tinggi yang relevan untuk praktik kerja.',
    icon: 'bi-mortarboard-fill',
    path: '/jurusan/',
  },
  B6: {
    title: 'Divisi',
    desc: 'Struktur tim kerja tempat peserta mendalami proyek digital, kreatif, dan operasional riil.',
    icon: 'bi-diagram-3-fill',
    path: '/divisi/',
  },
  B7: {
    title: 'Pengalaman',
    desc: 'Refleksi pembelajaran, studi kasus penanganan proyek, dan kultur kerja tim magang.',
    icon: 'bi-journal-richtext',
    path: '/pengalaman/',
  },
  B8: {
    title: 'Dokumen PKL',
    desc: 'Format, contoh struktur, dan panduan administrasi berkas magang dari awal hingga laporan akhir.',
    icon: 'bi-file-earmark-text-fill',
    path: '/dokumen-pkl/',
  },
  B9: {
    title: 'Informasi PKL',
    desc: 'Edukasi mendasar mengenai hakikat magang, perbedaan skema, durasi, dan pertimbangan memilih tempat.',
    icon: 'bi-info-circle-fill',
    path: '/info-pkl/',
  },
  B10: {
    title: 'Persiapan PKL',
    desc: 'Panduan taktis pra-magang: checklist, persiapan interview, etika komunikasi, dan bekal keahlian.',
    icon: 'bi-check2-all',
    path: '/persiapan-pkl/',
  },
  B11: {
    title: 'PKL Malang',
    desc: 'Panduan lokal mengenai ekosistem magang, perbandingan wilayah, hingga estimasi biaya hidup di Malang.',
    icon: 'bi-geo-alt-fill',
    path: '/pkl-malang/',
  },
};

export const PKL_PAGES: PklPage[] = [
  // =========================================================================
  // B4: HALAMAN UTAMA & INFORMASI PROGRAM (9 URLs)
  // =========================================================================
  {
    id: 'B4-01',
    group: 'B4',
    groupName: 'Halaman Utama',
    path: '/',
    slug: '',
    title: 'Pusat Informasi & Panduan PKL di Saka Malang | pkldisaka.com',
    h1: 'Pusat Informasi & Praktik Kerja Lapangan di Saka',
    metaDescription: 'Portal panduan resmi PKL di Saka: informasi jurusan, divisi praktik, alur pendaftaran, dokumen magang, serta panduan edukatif bagi siswa SMK dan mahasiswa.',
    summary: 'pkldisaka.com menyajikan panduan terstruktur bagi siswa SMK dan mahasiswa yang merencanakan Praktik Kerja Lapangan (PKL), mulai dari kesesuaian jurusan, pilihan divisi kerja, persiapan administrasi, hingga informasi ekosistem magang di Malang.',
    targetDate: '16/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Mengenal Program PKL di Saka',
        content: 'Program Praktik Kerja Lapangan (PKL) di Saka dirancang untuk mempertemukan materi teoritis dari bangku sekolah atau perkuliahan dengan standar kerja industri digital. Peserta dilatih beradaptasi dengan ritme tim kerja, tenggat waktu proyek, serta pemecahan masalah secara terstruktur.',
        bullets: [
          'Fokus pengembangan kompetensi digital dan operasional industri kreatif.',
          'Pemberian tugas berbasis kebutuhan proyek riil dengan pendampingan mentor.',
          'Penilaian objektif mencakup kedisiplinan, inisiatif, dan pencapaian target kerja.',
        ],
      },
      {
        heading: '7 Jalur Utama Navigasi Konten',
        content: 'Untuk memudahkan pencarian informasi sesuai kebutuhan calon peserta dan guru pembimbing, seluruh materi dikelompokkan ke dalam kategori tematik:',
        bullets: [
          'Jurusan: Informasi kesesuaian kurikulum sekolah dengan kebutuhan tim industri.',
          'Divisi: Penjelasan lingkup kerja spesifik, dari digital marketing hingga multimedia.',
          'Dokumen PKL: Panduan penyusunan surat lamaran, CV, jurnal harian, hingga laporan akhir.',
          'Informasi PKL: Artikel edukatif seputar hakikat magang, aturan durasi, dan etika dasar.',
          'Persiapan PKL: Checklist persiapan, simulasi wawancara, dan pengembangan soft skill.',
          'PKL Malang: Panduan praktis bagi peserta lokal maupun perantau luar kota Malang.',
          'Pengalaman: Dokumentasi pembelajaran dan catatan reflektif tim pembimbing.',
        ],
      },
      {
        heading: 'Standar Transparansi & Akurasi Informasi',
        content: 'Situs pkldisaka.com menjunjung tinggi etika penyajian informasi. Kami tidak menampilkan angka klaim yang belum tervalidasi, kuota buatan, testimoni rekaan, maupun logo mitra yang belum melalui tahap verifikasi berkas resmi.',
      },
    ],
    faqs: [
      {
        q: 'Siapa saja yang dapat mengikuti program PKL di Saka?',
        a: 'Program terbuka bagi siswa SMK dari jurusan terkait (seperti DKV, TKJ, RPL, Bisnis Digital, dll.) serta mahasiswa perguruan tinggi yang memiliki penugasan magang resmi dari institusi pendidikan masing-masing.',
      },
      {
        q: 'Kapan pendaftaran PKL dibuka?',
        a: 'Pengajuan berkas dapat dilakukan sepanjang tahun sesuai periode kalender akademik sekolah atau kampus, dengan memperhatikan ketersediaan tempat di divisi yang dituju.',
      },
      {
        q: 'Apakah informasi di website ini mewakili prosedur resmi?',
        a: 'Ya, seluruh prosedur administrasi dan panduan konten yang disajikan telah diselaraskan dengan tata kelola internal serta ketentuan baku pendidikan vokasi.',
      },
      {
        q: 'Bagaimana sistem penilaian PKL di akhir periode?',
        a: 'Mentor industri akan mengisi lembar penilaian resmi dari sekolah/kampus yang mencakup aspek kedisiplinan, kompetensi teknis, komunikasi, dan penyelesaian tugas proyek.',
      },
    ],
    relatedUrls: ['/program-pkl/', '/cara-daftar/', '/jurusan/', '/divisi/', '/kontak/'],
  },
  {
    id: 'B4-02',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/lowongan-pkl/',
    slug: 'lowongan-pkl',
    title: 'Informasi Status Lowongan PKL & Magang | pkldisaka.com',
    h1: 'Status & Informasi Lowongan PKL di Saka',
    metaDescription: 'Cek status penerimaan dan ketersediaan kuota PKL untuk siswa SMK dan mahasiswa di lingkungan Saka. Informasi transparan dan terverifikasi.',
    summary: 'Halaman ini menyajikan status resmi ketersediaan kuota tempat praktik kerja per divisi kerja. Calon peserta dianjurkan memeriksa status sebelum mengirimkan berkas lamaran.',
    targetDate: '17/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kebijakan Penerimaan Peserta',
        content: 'Penerimaan peserta PKL dilakukan melalui seleksi berkas dan kesesuaian periode magang. Hal ini bertujuan menjaga rasio mentor dengan peserta agar proses pendampingan kerja tetap intensif dan berkualitas.',
        bullets: [
          'Pendaftaran diproses secara bertahap berdasarkan tanggal masuk surat resmi.',
          'Kapasitas setiap divisi disesuaikan dengan kapasitas ruang dan beban kerja mentor.',
          'Konfirmasi penerimaan disampaikan melalui surat balasan resmi ke sekolah atau pemohon.',
        ],
      },
      {
        heading: 'Status Ketersediaan per Periode',
        content: 'Calon peserta disarankan mengajukan berkas 1 hingga 2 bulan sebelum tanggal mulai magang yang direncanakan sekolah/kampus untuk menghindari benturan kuota penuh.',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana mengetahui jika kuota divisi sedang penuh?',
        a: 'Tim administrasi akan mengabarkan status kuota divisi secara transparan saat calon peserta menghubungi kanal WhatsApp atau menyerahkan berkas permohonan.',
      },
      {
        q: 'Apakah bisa mendaftar secara berkelompok?',
        a: 'Pengajuan kelompok diperbolehkan, namun evaluasi kesesuaian profil dan tugas tetap dinilai secara individual per calon peserta.',
      },
      {
        q: 'Berapa kuota peserta PKL yang diterima setiap periodenya?',
        a: 'Kuota dibatasi rata-rata 2 hingga 4 orang per divisi guna menjamin rasio pendampingan mentor tetap intensif dan optimal bagi setiap siswa.',
      },
    ],
    relatedUrls: ['/cara-daftar/', '/program-pkl/alur-seleksi/', '/divisi/', '/kontak/'],
  },
  {
    id: 'B4-03',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/program-pkl/',
    slug: 'program-pkl',
    title: 'Panduan Lengkap Program PKL & Magang Industri | pkldisaka.com',
    h1: 'Program Praktik Kerja Lapangan (PKL) Terpadu',
    metaDescription: 'Pelajari kurikulum program PKL di Saka: sasaran kompetensi, pembinaan profesional, pembagian divisi kerja, dan mekanisme monitoring peserta.',
    summary: 'Program PKL di Saka memfasilitasi pembentukan etos kerja profesional melalui penugasan proyek digital terarah, pendampingan harian, dan evaluasi berkala.',
    targetDate: '18/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tujuan & Sasaran Pembelajaran',
        content: 'Melalui program ini, peserta tidak hanya mengasah keahlian teknis (hard skills) sesuai jurusan, tetapi juga dilatih dalam komunikasi kerja, manajemen waktu, dan adaptasi terhadap dinamika industri nyata.',
        bullets: [
          'Pengenalan workflow operasional di agensi digital dan industri kreatif.',
          'Penerapan standar kualitas pada setiap output tugas peserta.',
          'Pengisian jurnal kerja harian untuk memantau capaian target pembelajaran.',
        ],
      },
      {
        heading: 'Struktur Kegiatan Selama Periode PKL',
        content: 'Masa PKL umumnya dibagi ke dalam tiga tahapan utama: masa orientasi pengenalan budaya kerja, masa eksekusi proyek dengan asistensi mentor, dan masa penyusunan laporan pertanggungjawaban serta sidang evaluasi internal.',
      },
    ],
    faqs: [
      {
        q: 'Berapa durasi umum pelaksanaan PKL di Saka?',
        a: 'Durasi bervariasi antara 3 hingga 6 bulan, disesuaikan dengan instruksi resmi dan kalender akademik sekolah atau program magang perguruan tinggi.',
      },
      {
        q: 'Apakah peserta mendapatkan bimbingan berkala?',
        a: 'Ya, setiap peserta didampingi oleh mentor divisi yang bertanggung jawab memberikan arahan teknis dan meninjau hasil tugas setiap pekan.',
      },
      {
        q: 'Bagaimana sistem penilaian PKL di akhir periode?',
        a: 'Mentor industri akan mengisi lembar penilaian resmi dari sekolah/kampus yang mencakup aspek kedisiplinan, kompetensi teknis, komunikasi, dan penyelesaian tugas proyek.',
      },
    ],
    relatedUrls: ['/program-pkl/fasilitas/', '/program-pkl/alur-seleksi/', '/cara-daftar/', '/jurusan/'],
  },
  {
    id: 'B4-04',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/tentang/',
    slug: 'tentang',
    title: 'Tentang Program PKL di Saka & Nilai Pembelajaran | pkldisaka.com',
    h1: 'Tentang Program PKL di Saka',
    metaDescription: 'Mengenal visi, kultur kerja, dan komitmen edukasi program PKL di Saka dalam membina generasi muda berdaya saing di industri digital.',
    summary: 'Saka berkomitmen menjadi mitra strategis bagi institusi pendidikan vokasi dan universitas dengan menyediakan ruang praktik industri yang aman, disiplin, dan progresif.',
    targetDate: '19/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Filosofi Pembinaan Talenta Muda',
        content: 'Kami meyakini bahwa proses belajar terbaik adalah dengan terjun langsung menyelesaikan persoalan nyata. Lingkungan kerja di Saka menempatkan peserta magang sebagai rekan belajar aktif yang dihargai inisiatif dan ide-ide kreatifnya.',
      },
      {
        heading: 'Standar Hubungan Sekolah dan Industri',
        content: 'Kami mematuhi regulasi perundang-undangan ketenagakerjaan dan pendidikan vokasi dengan tidak membebankan jam kerja melebihi batas wajar serta memastikan lingkungan belajar kondusif bebas dari intimidasi.',
      },
    ],
    faqs: [
      {
        q: 'Di mana lokasi aktivitas PKL berlangsung?',
        a: 'Aktivitas kerja berpusat di workshop dan kantor Saka di Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138 dengan koordinasi administrasi terpusat.',
      },
      {
        q: 'Apa misi utama Saka dalam menerima peserta PKL?',
        a: 'Misi kami adalah menjembatani kesenjangan antara teori kurikulum sekolah dengan kebutuhan industri nyata melalui penugasan proyek yang terukur dan berstandar profesional.',
      },
      {
        q: 'Siapa yang mendampingi peserta magang selama di Saka?',
        a: 'Setiap peserta dibimbing langsung oleh staf dan praktisi profesional yang aktif menangani proyek digital, desain, dan pemasaran di Saka.',
      },
    ],
    relatedUrls: ['/mitra/', '/program-pkl/', '/cara-daftar/', '/kontak/'],
  },
  {
    id: 'B4-05',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/cara-daftar/',
    slug: 'cara-daftar',
    title: 'Panduan Lengkap Cara Daftar PKL & Syarat Berkas | pkldisaka.com',
    h1: 'Cara Daftar & Persyaratan Berkas PKL',
    metaDescription: 'Langkah mudah mendaftar PKL di Saka: cek kelengkapan syarat berkas, alur pengiriman dokumen permohonan, dan konfirmasi jadwal seleksi.',
    summary: 'Simak langkah demi langkah pengajuan izin PKL mulai dari pengurusan surat pengantar sekolah, penyusunan CV, hingga penyerahan berkas ke tim verifikasi.',
    targetDate: '20/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Persyaratan Berkas Administrasi',
        content: 'Sebelum mengajukan lamaran, pastikan berkas-berkas berikut telah disiapkan dalam format dokumen resmi (PDF):',
        bullets: [
          'Surat Pengantar resmi bertanda tangan Kepala Sekolah / Dekan / BKK.',
          'Curriculum Vitae (CV) ringkas memuat data kontak, riwayat pendidikan, dan minat keahlian.',
          'Portofolio karya atau contoh tugas sekolah (diutamakan bagi jurusan DKV, Multimedia, dan RPL).',
          'Salinan kartu pelajar atau kartu tanda mahasiswa yang masih berlaku.',
        ],
      },
      {
        heading: 'Alur Pengajuan Berkas',
        content: '1. Konsultasikan jadwal dan divisi yang diminati ke narahubung resmi.\n2. Kirimkan berkas digital melalui email atau formulir kontak yang disediakan.\n3. Tim akan memverifikasi ketersediaan kuota dalam kurun 3-5 hari kerja.\n4. Peserta yang lolos verifikasi akan menerima jadwal wawancara atau surat balasan resmi.',
      },
    ],
    faqs: [
      {
        q: 'Apakah ada biaya pendaftaran PKL di Saka?',
        a: 'Tidak ada pungutan biaya pendaftaran (gratis). Seluruh proses administrasi seleksi diselenggarakan secara terbuka dan profesional.',
      },
      {
        q: 'Berapa lama proses verifikasi berkas berlangsung?',
        a: 'Biasanya membutuhkan waktu 3 hingga 5 hari kerja tergantung kelengkapan berkas yang dikirimkan.',
      },
      {
        q: 'Kapan waktu terbaik untuk mengirimkan berkas pengajuan?',
        a: 'Disarankan mengajukan berkas minimal 1 hingga 2 bulan sebelum periode magang sekolah dimulai agar proses verifikasi kuota berjalan aman.',
      },
    ],
    relatedUrls: ['/program-pkl/alur-seleksi/', '/dokumen-pkl/surat-pengantar/', '/dokumen-pkl/cv-magang/', '/kontak/'],
  },
  {
    id: 'B4-06',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/program-pkl/fasilitas/',
    slug: 'fasilitas',
    categorySlug: 'program-pkl',
    title: 'Fasilitas & Lingkungan Kerja Peserta PKL | pkldisaka.com',
    h1: 'Fasilitas Pendukung Kegiatan PKL di Saka',
    metaDescription: 'Ketahui fasilitas pendukung kerja bagi peserta PKL di Saka: ruang kerja kolaboratif, koneksi internet stabil, akses perangkat, dan ruang diskusi.',
    summary: 'Saka menyediakan fasilitas ruang kerja yang memadai guna menunjang produktivitas dan kenyamanan peserta magang selama menjalankan tugas industri.',
    targetDate: '21/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Sarana Kerja yang Disediakan',
        content: 'Fasilitas yang disediakan ditujukan untuk mendukung alur kerja harian peserta secara efektif:',
        bullets: [
          'Meja kerja kelompok (collaborative workspace) dengan pencahayaan dan sirkulasi udara baik.',
          'Jaringan internet berkecepatan tinggi untuk riset, pengunduhan aset kerja, dan upload tugas.',
          'Ruang pertemuan internal untuk sesi koordinasi harian (daily stand-up) dan presentasi review.',
          'Area istirahat, fasilitas air minum, dan sarana ibadah di lingkungan kerja.',
        ],
      },
      {
        heading: 'Ketentuan Penggunaan Perangkat Pribadi',
        content: 'Peserta sangat dianjurkan membawa laptop pribadi yang telah terinstal perangkat lunak pendukung sesuai jurusan masing-masing untuk kelancaran pengerjaan tugas mandiri.',
      },
    ],
    faqs: [
      {
        q: 'Apakah komputer kerja disediakan untuk semua peserta?',
        a: 'Fasilitas perangkat kantor diutamakan untuk proyek tertentu. Peserta disarankan membawa laptop mandiri agar pekerjaan dan file pribadi dapat tersimpan aman.',
      },
      {
        q: 'Apakah peserta wajib membawa laptop sendiri?',
        a: 'Peserta sangat dianjurkan membawa laptop pribadi agar alur pengerjaan tugas dan instalasi tools kerja sesuai peminatan divisi berjalan lancar dan fleksibel.',
      },
      {
        q: 'Fasilitas apa saja yang disediakan di area kerja Saka?',
        a: 'Tersedia koneksi internet serat optik berkecepatan tinggi, meja kerja kolaboratif, area diskusi tim, musholla, serta akses ke perangkat uji/studio.',
      },
    ],
    relatedUrls: ['/program-pkl/', '/program-pkl/alur-seleksi/', '/cara-daftar/'],
  },
  {
    id: 'B4-07',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/program-pkl/alur-seleksi/',
    slug: 'alur-seleksi',
    categorySlug: 'program-pkl',
    title: 'Alur Seleksi & Tahapan Penerimaan Peserta PKL | pkldisaka.com',
    h1: 'Alur Seleksi & Penerimaan Peserta PKL',
    metaDescription: 'Pahami tahapan seleksi PKL di Saka dari pengajuan berkas, tes teknis ringan, wawancara motivasi, hingga penerbitan surat penerimaan.',
    summary: 'Proses seleksi dirancang secara adil untuk mengukur kesiapan sikap, komitmen kehadiran, dan kecocokan keahlian dasar dengan divisi yang dituju.',
    targetDate: '16/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tahapan Seleksi Bertahap',
        content: 'Alur seleksi penerimaan peserta PKL terdiri dari empat fase utama:',
        bullets: [
          'Tahap 1: Verifikasi Administratif (pemeriksaan surat pengantar dan kelayakan berkas CV).',
          'Tahap 2: Kurasi Portofolio (penilaian contoh karya untuk divisi desain, web, dan konten).',
          'Tahap 3: Wawancara Pengenalan (diskusi mengenai ekspektasi belajar, jadwal, dan komitmen).',
          'Tahap 4: Pengumuman & Penerbitan Surat Konfirmasi Resmi.',
        ],
      },
      {
        heading: 'Kriteria Penilaian Utama',
        content: 'Fokus penilaian tidak semata-mata pada penguasaan teknis tingkat lanjut, melainkan pada kemauan belajar tinggi, kejujuran, etika komunikasi, dan komitmen hadir tepat waktu.',
      },
    ],
    faqs: [
      {
        q: 'Apakah wawancara dilakukan secara daring atau tatap muka?',
        a: 'Sesi wawancara dapat dilakukan secara daring (online) bagi peserta luar kota, atau langsung di kantor Saka bagi pendaftar regional Malang.',
      },
      {
        q: 'Apa saja tahapan seleksi masuk PKL di Saka?',
        a: 'Tahapan meliputi seleksi kelengkapan administrasi (surat pengantar & CV), peninjauan portofolio (bagi DKV/RPL), serta wawancara perkenalan kompetensi.',
      },
      {
        q: 'Apakah wawancara seleksi dilakukan secara daring atau luring?',
        a: 'Sesi wawancara dapat dilaksanakan secara daring melalui Google Meet bagi pemohon luar kota, atau secara tatap muka langsung di kantor Saka Malang.',
      },
    ],
    relatedUrls: ['/cara-daftar/', '/persiapan-pkl/interview/', '/dokumen-pkl/surat-balasan/'],
  },
  {
    id: 'B4-08',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/faq/',
    slug: 'faq',
    title: 'Pertanyaan Umum Seputar PKL di Saka (FAQ) | pkldisaka.com',
    h1: 'Tanya Jawab Seputar Program PKL (FAQ)',
    metaDescription: 'Temukan jawaban atas pertanyaan umum mengenai syarat, jadwal masuk, jam kerja, sertifikat, dan aturan pelaksanaan magang di Saka.',
    summary: 'Rangkuman tanya jawab seputar pelaksanaan Praktik Kerja Lapangan di Saka untuk membantu calon peserta, orang tua, dan guru pembimbing.',
    targetDate: '17/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Informasi Dasar Pelaksanaan',
        content: 'Kumpulan pertanyaan yang paling sering diajukan terkait teknis pelaksanaan harian magang.',
      },
    ],
    faqs: [
      {
        q: 'Berapa jam kerja harian peserta PKL?',
        a: 'Jam kerja operasional umumnya berlangsung mulai pukul 08.00 hingga 16.00 WIB pada hari Senin sampai Jumat, mengacu pada ketentuan jam belajar vokasi.',
      },
      {
        q: 'Apakah peserta akan mendapatkan sertifikat setelah selesai?',
        a: 'Ya, peserta yang menyelesaikan seluruh periode PKL dengan nilai kehadiran dan tugas memadai akan menerima Sertifikat PKL Resmi beserta lembar evaluasi kompetensi.',
      },
      {
        q: 'Apakah ada seragam khusus selama magang?',
        a: 'Peserta dapat mengenakan seragam praktik sekolah masing-masing atau pakaian kemeja berkerah rapi dan bersepatu sesuai tata tertib lingkungan kerja.',
      },
      {
        q: 'Apakah disediakan penginapan bagi peserta dari luar kota Malang?',
        a: 'Penginapan/kos ditanggung secara mandiri oleh peserta. Namun tim Saka siap memberikan referensi area kos yang aman dan dekat dengan kantor.',
      },
      {
        q: 'Bagaimana bila ada mata pelajaran atau ujian di sekolah selama magang?',
        a: 'Peserta dapat mengajukan izin resmi dengan melampirkan surat pemberitahuan dari sekolah sebelumnya.',
      },
    ],
    relatedUrls: ['/cara-daftar/', '/program-pkl/', '/pkl-malang/biaya-hidup-kos/'],
  },
  {
    id: 'B4-09',
    group: 'B4',
    groupName: 'Informasi Program',
    path: '/kontak/',
    slug: 'kontak',
    title: 'Kontak Resmi & Kanal Informasi PKL di Saka | pkldisaka.com',
    h1: 'Kanal Kontak & Pelayanan Informasi PKL',
    metaDescription: 'Hubungi tim administrasi PKL di Saka untuk konfirmasi pendaftaran, verifikasi berkas sekolah, atau konsultasi kebutuhan magang.',
    summary: 'Gunakan kanal komunikasi terverifikasi di bawah ini untuk berkoordinasi langsung dengan bagian kepegawaian dan kemitraan PKL di Saka.',
    targetDate: '18/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kanal Komunikasi Terverifikasi',
        content: 'Untuk menghindari penipuan atau informasi yang tidak akurat, pastikan Anda hanya menghubungi narahubung resmi Saka melalui jalur berikut:',
        bullets: [
          'WhatsApp Resmi Pelayanan PKL: 0821-3108-7971 (Senin-Jumat, 08.00 - 17.00 WIB)',
          'Email Koordinasi Berkas: info@pkldisaka.com',
          'Alamat Operasional: Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138 (Layanan tatap muka dengan janji temu sebelumnya)',
        ],
      },
      {
        heading: 'Tata Cara Berkomunikasi',
        content: 'Saat mengirimkan pesan permohonan informasi, mohon sertakan nama lengkap, asal sekolah/kampus, jurusan, dan maksud pertanyaan secara santun demi kemudahan proses balasan.',
      },
    ],
    faqs: [
      {
        q: 'Apakah diperbolehkan datang langsung ke kantor tanpa konfirmasi?',
        a: 'Sangat disarankan melakukan konfirmasi terlebih dahulu melalui WhatsApp agar tim yang bertugas dapat menyambut dan melayani Anda dengan optimal.',
      },
      {
        q: 'Berapa nomor kontak resmi yang dapat dihubungi?',
        a: 'Layanan narahubung resmi dapat dihubungi via WhatsApp di nomor 0821-3108-7971 pada jam kerja Senin hingga Jumat pukul 08.00 - 16.00 WIB.',
      },
      {
        q: 'Apakah bisa datang langsung ke kantor untuk konsultasi?',
        a: 'Layanan konsultasi tatap muka dilayani dengan membuat janji temu terlebih dahulu melalui WhatsApp resmi agar tim kepegawaian dapat melayani dengan baik.',
      },
    ],
    relatedUrls: ['/cara-daftar/', '/faq/', '/persiapan-pkl/chat-hrd/'],
  },

  // =========================================================================
  // B5: JURUSAN (10 URLs)
  // =========================================================================
  {
    id: 'B5-01',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/',
    slug: 'jurusan',
    title: 'Daftar Jurusan SMK & Kampus untuk PKL di Saka | pkldisaka.com',
    h1: 'Daftar Jurusan yang Diterima untuk Program PKL',
    metaDescription: 'Jelajahi kesesuaian jurusan SMK dan program studi perguruan tinggi untuk magang di Saka: DKV, TKJ, RPL, Bisnis Digital, Manajemen, dan lainnya.',
    summary: 'Program PKL di Saka menerima siswa dan mahasiswa dari beragam latar belakang kompetensi. Setiap jurusan diarahkan ke divisi yang sesuai guna memastikan pembelajaran relevan dengan kurikulum.',
    targetDate: '23/11/2026',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Kesesuaian Jurusan dengan Dunia Usaha & Industri',
        content: 'Kami menyelaraskan silabus penugasan industri dengan Capaian Pembelajaran (CP) SMK Pusat Keunggulan maupun kurikulum Magang Mandiri / MBKM perguruan tinggi.',
      },
      {
        heading: 'Daftar 9 Jurusan Prioritas',
        content: 'Klik salah satu jurusan di bawah untuk mempelajari rincian materi praktik, contoh tugas, dan kualifikasi yang disyaratkan.',
      },
    ],
    faqs: [
      {
        q: 'Apakah jurusan di luar daftar ini tetap bisa mendaftar?',
        a: 'Bisa, sepanjang memiliki minat dan dasar keterampilan yang relevan dengan salah satu divisi kerja yang aktif di Saka.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/', '/cara-daftar/', '/dokumen-pkl/portofolio-dkv/'],
  },
  {
    id: 'B5-02',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/dkv/',
    slug: 'dkv',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan DKV (Desain Komunikasi Visual) di Malang | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan DKV',
    metaDescription: 'Panduan magang siswa SMK jurusan DKV di Saka: lingkup penugasan desain grafis, ilustrasi, branding, layout digital, dan software yang digunakan.',
    summary: 'Jurusan DKV difokuskan pada perancangan identitas visual brand, aset media sosial, materi promosi cetak, dan elemen grafis untuk kebutuhan kampanye digital.',
    targetDate: '24/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Ruang Lingkup Praktik DKV',
        content: 'Peserta DKV dilatih berpikir solutif dalam menerjemahkan pesan komunikasi visual ke dalam desain estetis yang berdaya jual.',
        bullets: [
          'Perancangan feed, story, dan banner promosi untuk multiplatform digital.',
          'Pembuatan aset visual kemasan (packaging) dan souvenir promosi.',
          'Penerapan prinsip tipografi, teori warna, dan komposisi layout profesional.',
          'Penggunaan standar software industri seperti Adobe Illustrator, Photoshop, dan Figma.',
        ],
      },
      {
        heading: 'Kompetensi yang Dibangun',
        content: 'Selain kecakapan teknis desain, peserta dilatih membaca design brief klien, mempresentasikan konsep karya, serta melakukan revisi secara konstruktif.',
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta DKV wajib membawa drawing tablet sendiri?',
        a: 'Tidak wajib. Drawing tablet bersifat opsional bagi peserta yang ingin mendalami ilustrasi digital mandiri.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/dkv/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/desain-grafis/', '/divisi/packaging/', '/dokumen-pkl/portofolio-dkv/'],
  },
  {
    id: 'B5-03',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/tkj/',
    slug: 'tkj',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan TKJ (Teknik Komputer & Jaringan) | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan TKJ',
    metaDescription: 'Informasi PKL jurusan TKJ di Saka: pemeliharaan jaringan lokal, administrasi server web, troubleshooting perangkat keras, dan cloud infrastructure.',
    summary: 'Peserta TKJ berfokus pada kestabilan infrastruktur jaringan kantor, konfigurasi router/switch, pemeliharaan hardware, dan pengenalan hosting server.',
    targetDate: '25/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Fokus Penugasan Siswa TKJ',
        content: 'Aktivitas praktik diarahkan pada pemahaman operasional infrastruktur IT pendukung agensi:',
        bullets: [
          'Pengaturan dan monitoring kestabilan LAN, Wi-Fi, dan manajemen bandwidth kantor.',
          'Perakitan, pengujian, dan troubleshooting perangkat PC kerja tim.',
          'Pengenalan dasar pengelolaan domain, DNS, cPanel, dan deployment website.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah ada materi simulasi routing mikrotik?',
        a: 'Ya, peserta diajak mempraktikkan konfigurasi dasar mikrotik untuk manajemen jaringan kantor.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/tkj/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/jurusan/rpl/', '/divisi/seo-website/', '/pkl-malang/it-jaringan/'],
  },
  {
    id: 'B5-04',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/rpl/',
    slug: 'rpl',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan RPL (Rekayasa Perangkat Lunak) | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan RPL',
    metaDescription: 'Program PKL jurusan RPL di Saka: pengembangan front-end web, implementasi CMS, integrasi UI responsif, dan pengujian kode sistem.',
    summary: 'Siswa RPL dilibatkan dalam pemeliharaan web agensi, kustomisasi tema, optimasi performa halaman, serta kolaborasi version control (Git).',
    targetDate: '26/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kurikulum Proyek RPL',
        content: 'Peserta mengasah kemampuan pemrograman berbasis proyek web praktis:',
        bullets: [
          'Pemotongan desain UI (slicing) ke dalam HTML, CSS, JavaScript, atau framework modern.',
          'Pemeliharaan struktur landing page dan penyesuaian tampilan responsif mobile-first.',
          'Pengenalan clean code, alur branching Git, serta validasi SEO teknis pada markup.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Bahasa pemrograman apa yang dominan digunakan?',
        a: 'HTML5, CSS3, JavaScript/TypeScript, dan lingkungan static site generator/CMS modern.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/rpl/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/seo-website/', '/persiapan-pkl/tools-gratis/', '/pengalaman/pembelajaran-rpl/'],
  },
  {
    id: 'B5-05',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/bisnis-digital/',
    slug: 'bisnis-digital',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan Bisnis Digital di Malang | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan Bisnis Digital',
    metaDescription: 'Peluang magang jurusan Bisnis Digital di Saka: analisa tren pasar, optimasi toko online, pengelolaan kampanye promosi, dan evaluasi data audiens.',
    summary: 'Jurusan Bisnis Digital mempelajari siklus pemasaran online, perancangan sales funnel, manajemen listing e-commerce, dan analisis performa metrik digital.',
    targetDate: '27/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Materi Pembelajaran Lapangan',
        content: 'Peserta mendalami interaksi langsung antara produk, platform marketplace, dan perilaku konsumen online:',
        bullets: [
          'Riset kata kunci dan analisis kompetitor di Google serta media sosial.',
          'Pengelolaan katalog produk, copywriting deskripsi, dan strategi visual penawaran.',
          'Pemantauan conversion rate dan penyusunan laporan analitik berkala.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah dipelajari juga strategi iklan berbayar (Ads)?',
        a: 'Peserta mempelajari konsep dasar perancangan materi iklan dan target audiens secara teoritis dan simulatif.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/bisnis-digital/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/digital-marketing/', '/divisi/social-media/', '/persiapan-pkl/belajar-seo/'],
  },
  {
    id: 'B5-06',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/pemasaran/',
    slug: 'pemasaran',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan Pemasaran (Bisnis Daring & Pemasaran) | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan Pemasaran',
    metaDescription: 'Pelajari praktik pemasaran era digital untuk siswa SMK Pemasaran: customer handling, promosi omni-channel, dan strategi promosi produk.',
    summary: 'Menghubungkan teori penjualan tradisional dengan pendekatan modern digital salesmanship, pelayanan pelanggan, dan perancangan penawaran produk.',
    targetDate: '28/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Aktivitas Utama Siswa Pemasaran',
        content: 'Fokus pada kemampuan membangun hubungan baik dengan calon pembeli dan mempresentasikan keunggulan solusi:',
        bullets: [
          'Penyusunan alur komunikasi chat WhatsApp bisnis yang profesional.',
          'Pencatatan data prospek dan tindak lanjut penawaran (follow-up).',
          'Riset tren musiman untuk merancang paket bundling promosi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta dibebani target penjualan pribadi?',
        a: 'Tidak. Pembelajaran difokuskan pada penguasaan proses dan pemahaman strategi, bukan target finansial komersial.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/pemasaran/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/digital-marketing/', '/persiapan-pkl/chat-hrd/', '/pkl-malang/marketing/'],
  },
  {
    id: 'B5-07',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/teknik-grafika/',
    slug: 'teknik-grafika',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan Teknik Grafika di Malang | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan Teknik Grafika',
    metaDescription: 'Ketahui ruang lingkup PKL Teknik Grafika: persiapan file cetak (pre-press), pemilihan bahan kertas/media, teknik finishing, dan kontrol kualitas.',
    summary: 'Siswa Teknik Grafika memperdalam keilmuan pra-cetak, separasi warna, setting layout pisau pond, serta produksi cetak merchandise dan packaging.',
    targetDate: '23/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Keahlian Industri Grafika yang Diasah',
        content: 'Praktik mencakup pemahaman teknis mesin dan standarisasi file:',
        bullets: [
          'Pemeriksaan bleed, margin, resolusi gambar (300 DPI), dan model warna CMYK.',
          'Teknik kalkulasi bahan kertas dan efisiensi bidang cetak.',
          'Operasional finishing cetak: laminasi, cetak sablon souvenir, dan pengeleman packaging.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah siswa dilatih mengoperasikan mesin cetak offset/digital?',
        a: 'Ya, peserta diperkenalkan dengan prosedur keselamatan kerja dan operasional mesin pendukung produksi.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/teknik-grafika/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/produksi-souvenir/', '/divisi/packaging/', '/jurusan/dkv/'],
  },
  {
    id: 'B5-08',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/teknik-informatika/',
    slug: 'teknik-informatika',
    categorySlug: 'jurusan',
    title: 'Magang Mahasiswa Teknik Informatika di Malang | pkldisaka.com',
    h1: 'Program Magang Jurusan Teknik Informatika',
    metaDescription: 'Magang riset dan terapan bagi mahasiswa Teknik Informatika: arsitektur web modern, optimasi database, algoritma search engine, dan data scraping.',
    summary: 'Ditujukan bagi mahasiswa yang ingin menerapkan konsep rekayasa sistem komputer pada infrastruktur digital, otomasi tugas, dan analitik web.',
    targetDate: '24/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Proyek Lapangan Mahasiswa IT',
        content: 'Mahasiswa diarahkan pada proyek yang menuntut pemecahan masalah teknis komprehensif:',
        bullets: [
          'Audit performa web: Core Web Vitals, time-to-first-byte, dan penataan caching.',
          'Otomasi pengumpulan data konten dan integrasi API pihak ketiga.',
          'Pembuatan dokumentasi teknis sistem dan pengujian fungsionalitas berkala.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah magang ini dapat dikonversikan sebagai SKS kuliah / MBKM?',
        a: 'Bisa, tim Saka siap menandatangani dokumen lembar persetujuan dan form evaluasi resmi dari universitas.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/teknik-informatika/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/jurusan/rpl/', '/pkl-malang/magang-mahasiswa/', '/divisi/seo-website/'],
  },
  {
    id: 'B5-09',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/manajemen/',
    slug: 'manajemen',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan Manajemen & Administrasi Perkantoran | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan Manajemen',
    metaDescription: 'Ruang lingkup PKL Manajemen di Saka: tata kelola administrasi dokumen, pencatatan inventaris, koordinasi jadwal tim, dan pelayanan kantor.',
    summary: 'Membekali peserta dengan keterampilan tata arsip digital, korespondensi resmi, penjadwalan aktivitas proyek, dan manajemen sumber daya operasional.',
    targetDate: '25/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Penugasan Tata Kelola Operasional',
        content: 'Peserta terlibat dalam menjaga keteraturan berkas dan alur logistik:',
        bullets: [
          'Pencatatan surat masuk, surat keluar, dan administrasi presensi harian.',
          'Pengelolaan spreadsheet data inventaris stok bahan produksi.',
          'Bantuan koordinasi jadwal pengiriman pesanan dan komunikasi ekspedisi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Software apa yang banyak digunakan?',
        a: 'Google Workspace (Sheets, Docs, Drive) serta sistem manajemen tugas digital.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/manajemen/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/surat-lamaran/', '/dokumen-pkl/laporan-pkl/', '/persiapan-pkl/soft-skill/'],
  },
  {
    id: 'B5-10',
    group: 'B5',
    groupName: 'Jurusan',
    path: '/jurusan/multimedia/',
    slug: 'multimedia',
    categorySlug: 'jurusan',
    title: 'PKL Jurusan Multimedia & Produksi Siaran | pkldisaka.com',
    h1: 'Praktik Kerja Lapangan Jurusan Multimedia',
    metaDescription: 'Program PKL multimedia di Saka: teknik pengambilan video, tata cahaya studio, editing reels/tiktok, dan pembuatan animasi grafis promosi.',
    summary: 'Memadukan keahlian visual bergerak, audio mixing, dan storytelling untuk menghasilkan konten video pendek serta aset kreatif multiplatform.',
    targetDate: '26/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kompetensi Produksi Audiovisual',
        content: 'Peserta mendalami alur produksi video dari konsep hingga ekspor:',
        bullets: [
          'Pengoperasian kamera mirorless, gimbal stabilizer, dan mikrofon nirkabel.',
          'Teknik pencahayaan 3-point lighting untuk video promosi dan wawancara.',
          'Proses editing di Adobe Premiere Pro atau CapCut PC: color correction, sound design, dan subtitle dinamis.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta wajib memiliki kamera sendiri?',
        a: 'Tidak wajib. Tim Saka menyediakan peralatan kamera dan perlengkapan studio untuk penugasan proyek kantor.',
      },
      {
        q: 'Apakah kurikulum industri untuk /jurusan/multimedia/ selaras dengan sekolah?',
        a: 'Ya, materi praktik kerja disesuaikan dengan Capaian Pembelajaran (CP) dan silabus resmi SMK agar nilai yang diperoleh diakui penuh oleh pihak sekolah.',
      },
      {
        q: 'Software dan peralatan apa yang digunakan selama PKL di bidang ini?',
        a: 'Peserta akan menggunakan software standar industri (seperti Adobe Creative Cloud, Figma, VS Code, Git, Google Workspace, dll.) sesuai kebutuhan divisi kerja.',
      },
    ],
    relatedUrls: ['/divisi/foto-video-produk/', '/divisi/content-creator/', '/pengalaman/proyek-dkv/'],
  },

  // =========================================================================
  // B6: DIVISI (9 URLs)
  // =========================================================================
  {
    id: 'B6-01',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/',
    slug: 'divisi',
    title: 'Struktur Divisi Kerja PKL di Saka Malang | pkldisaka.com',
    h1: 'Daftar Divisi Praktik Kerja di Saka',
    metaDescription: 'Ketahui divisi kerja tempat peserta PKL ditempatkan: Digital Marketing, SEO, Social Media, Foto/Video, Content Creator, Desain Grafis, Souvenir, dan Packaging.',
    summary: 'Setiap divisi di Saka memiliki fokus tugas dan mentor pembimbing tersendiri untuk menjamin peserta mendapatkan pendampingan terarah sesuai minat.',
    targetDate: '30/11/2026',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Kolaborasi Antar Divisi Industri',
        content: 'Dalam lingkungan kerja agensi digital modern, tidak ada divisi yang berdiri sendiri. Peserta diajarkan bagaimana alur kerja mengalir harmonis mulai dari perancangan ide di tim konten, eksekusi visual di tim desain, hingga publikasi oleh tim pemasaran.',
      },
    ],
    faqs: [
      {
        q: 'Bisakah peserta berpindah divisi di tengah masa PKL?',
        a: 'Perpindahan divisi hanya dimungkinkan dengan persetujuan mentor dan guru pembimbing jika ada kebutuhan proyek khusus atau rotasi kompetensi.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/jurusan/', '/program-pkl/alur-seleksi/', '/cara-daftar/'],
  },
  {
    id: 'B6-02',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/digital-marketing/',
    slug: 'digital-marketing',
    categorySlug: 'divisi',
    title: 'Divisi Digital Marketing - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Digital Marketing',
    metaDescription: 'Pelajari penugasan di Divisi Digital Marketing Saka: riset pasar online, copywriting promosi, evaluasi kampanye, dan strategi penjualan.',
    summary: 'Divisi ini bertanggung jawab merumuskan strategi penjangkauan audiens, optimasi conversion funnel, dan pengelolaan saluran pemasaran digital terpadu.',
    targetDate: '01/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tugas Pokok Peserta',
        content: 'Peserta mendalami keterampilan pemasaran terapan:',
        bullets: [
          'Menulis teks promosi (copywriting) dengan formula menarik seperti AIDA dan PAS.',
          'Melakukan riset tren pencarian dan memetakan preferensi calon konsumen.',
          'Membantu penyusunan kalender promosi mingguan dan mengevaluasi respon leads.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah jurusan selain Pemasaran bisa masuk divisi ini?',
        a: 'Bisa, siswa RPL, Bisnis Digital, maupun DKV yang berminat pada strategi komunikasi bisnis dapat bergabung.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/divisi/seo-website/', '/divisi/social-media/', '/persiapan-pkl/belajar-seo/'],
  },
  {
    id: 'B6-03',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/seo-website/',
    slug: 'seo-website',
    categorySlug: 'divisi',
    title: 'Divisi SEO & Website - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi SEO & Website',
    metaDescription: 'Tugas peserta PKL di Divisi SEO & Website: riset kata kunci, optimasi on-page/off-page, audit teknis Google Search Console, dan kecepatan web.',
    summary: 'Berfokus pada strategi meningkatkan visibilitas website di mesin pencari melalui optimasi konten berstruktur, audit kecepatan, dan kepatuhan standar SEO Google.',
    targetDate: '02/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Keahlian yang Dipelajari',
        content: 'Peserta menguasai metodologi SEO modern berbasis search intent:',
        bullets: [
          'Riset keyword dengan search volume nyata dan intent pencarian pengguna.',
          'Penerapan struktur heading (H1, H2, H3), meta title, deskripsi, dan internal linking.',
          'Pemeriksaan Google Search Console, indeks sitemap, dan skor PageSpeed Insights.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah dipelajari SEO teknis dan Schema Markup?',
        a: 'Ya, peserta dilatih menerapkan Schema JSON-LD berstandar schema.org yang valid.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/jurusan/rpl/', '/persiapan-pkl/belajar-seo/', '/divisi/digital-marketing/'],
  },
  {
    id: 'B6-04',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/social-media/',
    slug: 'social-media',
    categorySlug: 'divisi',
    title: 'Divisi Social Media Management - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Social Media',
    metaDescription: 'Pengalaman magang di Divisi Social Media Saka: riset tren Instagram & TikTok, penulisan caption interaktif, pengelolaan jadwal, dan analitik performa.',
    summary: 'Mengelola kanal komunikasi sosial dengan memproduksi konten konsisten, membangun interaksi dengan audiens, dan menganalisis insights metrik akun.',
    targetDate: '03/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Rutinitas Kerja di Tim Social Media',
        content: 'Peserta diajak berpikir kreatif dan disiplin waktu:',
        bullets: [
          'Membuat content planner bulanan mencakup pilar edukasi, hiburan, dan promosi.',
          'Menulis caption yang memancing interaksi komentar dan membagikan ulang.',
          'Memonitor tren audio serta topik hangat untuk diadaptasi ke dalam konten brand.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta bertugas membalas pesan masuk / DM?',
        a: 'Peserta dapat membantu interaksi dasar di bawah panduan standar komunikasi mentor.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/divisi/content-creator/', '/divisi/digital-marketing/', '/divisi/desain-grafis/'],
  },
  {
    id: 'B6-05',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/foto-video-produk/',
    slug: 'foto-video-produk',
    categorySlug: 'divisi',
    title: 'Divisi Foto & Video Produk - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Foto & Video Produk',
    metaDescription: 'Aktivitas magang divisi foto video di Saka: penataan lighting, fotografi produk e-commerce, pengambilan video b-roll, dan pascaproduksi.',
    summary: 'Mengeksekusi pemotretan produk komersial, penyusunan moodboard visual, pengoperasian kamera studio, dan editing video penunjang katalog.',
    targetDate: '04/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Materi Praktik Lapangan',
        content: 'Penguasaan alat dan penataan komposisi visual:',
        bullets: [
          'Teknik penataan background, reflektor, dan softbox untuk foto produk reflektif.',
          'Perekaman b-roll kreatif menonjolkan fitur dan detail tekstur produk.',
          'Color grading dan perbaikan kontras foto menggunakan software profesional.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah pemotretan dilakukan di dalam atau luar ruangan?',
        a: 'Sebagian besar berlangsung di studio indoor, dengan beberapa sesi outdoor sesuai kebutuhan konsep.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/jurusan/multimedia/', '/divisi/content-creator/', '/divisi/produksi-souvenir/'],
  },
  {
    id: 'B6-06',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/content-creator/',
    slug: 'content-creator',
    categorySlug: 'divisi',
    title: 'Divisi Content Creator - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Content Creator',
    metaDescription: 'Panduan PKL divisi Content Creator: penyusunan storyboard, pembuatan video pendek kreatif, teknik hook opening, dan storytelling digital.',
    summary: 'Peserta merancang ide video kreatif, menulis naskah singkat berdaya tarik tinggi, hingga tampil percaya diri di depan kamera untuk konten media sosial.',
    targetDate: '05/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Pengembangan Keterampilan Kreator',
        content: 'Mengasah kepekaan audiens dan kecepatan eksekusi materi:',
        bullets: [
          'Teknik perancangan hook 3 detik pertama untuk menahan retensi penonton.',
          'Storytelling yang menghubungkan problem audiens dengan solusi produk.',
          'Penyuntingan video cepat dengan efek teks dinamis, transisi rapi, dan audio bebas hak cipta.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta wajib tampil sebagai talent di video?',
        a: 'Tidak harus; peserta yang lebih nyaman di balik layar dapat fokus pada penulisan skrip, riset ide, dan editing.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/divisi/social-media/', '/divisi/foto-video-produk/', '/jurusan/multimedia/'],
  },
  {
    id: 'B6-07',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/desain-grafis/',
    slug: 'desain-grafis',
    categorySlug: 'divisi',
    title: 'Divisi Desain Grafis - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Desain Grafis',
    metaDescription: 'Ketahui aktivitas Divisi Desain Grafis: pembuatan aset media sosial, ilustrasi promosi, infografis informatif, dan layout materi cetak.',
    summary: 'Mengubah ide pemasaran menjadi materi grafis komunikatif dengan prinsip keselarasan brand, hierarki tipografi yang jelas, dan kebersihan file master.',
    targetDate: '30/11/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Standar Mutu Karya Grafis',
        content: 'Peserta dilatih menghasilkan desain yang tidak hanya indah, tetapi juga fungsional:',
        bullets: [
          'Memastikan keterbacaan teks di berbagai ukuran layar ponsel.',
          'Konsistensi penggunaan palet warna brand guideline.',
          'Penamaan layer, manajemen aset vektor, dan efisiensi ukuran file saat diekspor.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah materi desain dinilai secara berkala?',
        a: 'Ya, mentor divisi memberikan review mingguan untuk membahas aspek perbaikan dan kelebihan karya.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/jurusan/dkv/', '/dokumen-pkl/portofolio-dkv/', '/divisi/packaging/'],
  },
  {
    id: 'B6-08',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/produksi-souvenir/',
    slug: 'produksi-souvenir',
    categorySlug: 'divisi',
    title: 'Divisi Produksi Souvenir - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Produksi Souvenir',
    metaDescription: 'Lingkup kerja divisi produksi souvenir di Saka: cetak merchandise kustom, sablon, press mug, pin, totebag, dan kontrol kualitas barang jadi.',
    summary: 'Peserta mendalami alur pengerjaan cinderamata promosi fisik, mulai dari pengecekan layout cetak, pengaturan mesin transfer, hingga quality control.',
    targetDate: '01/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Keterampilan Operasional Produksi',
        content: 'Aktivitas fisik terukur dengan standar keselamatan kerja:',
        bullets: [
          'Pengaturan suhu dan tekanan pada mesin heat press untuk transfer sublimasi.',
          'Pemeriksaan presisi warna hasil cetak terhadap sampel digital.',
          'Pengepakan merchandise sesuai standar kirim agar terhindar dari kerusakan ekspedisi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta diajarkan aspek K3 (Keselamatan Kerja)?',
        a: 'Ya, pemakaian sarung tangan anti-panas dan standar prosedur keselamatan mesin wajib ditaati.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/divisi/packaging/', '/jurusan/teknik-grafika/', '/pengalaman/sehari-di-saka/'],
  },
  {
    id: 'B6-09',
    group: 'B6',
    groupName: 'Divisi',
    path: '/divisi/packaging/',
    slug: 'packaging',
    categorySlug: 'divisi',
    title: 'Divisi Packaging & Kemasan - PKL di Saka | pkldisaka.com',
    h1: 'Praktik Kerja di Divisi Packaging & Kemasan',
    metaDescription: 'Tugas magang divisi packaging: pembuatan jaring-jaring kemasan (dieline), mock-up prototipe kotak, pemilihan jenis karton, dan finishing kemasan.',
    summary: 'Mempelajari seni dan teknik kemasan pelindung produk: perancangan dieline pisau potong, pembuatan prototipe fisik 3D, dan pengujian kekuatan bahan.',
    targetDate: '02/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Eksplorasi Desain Kemasan Fungsional',
        content: 'Peserta memadukan daya tarik estetis dengan fungsionalitas kemasan:',
        bullets: [
          'Membuat pola jaring-jaring lipatan kotak yang kokoh tanpa mudah sobek.',
          'Pemilihan jenis kertas seperti ivory, kraft, duplex, atau corrugated box.',
          'Perakitan prototipe sampel kemasan untuk uji muat produk riil.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah dipelajari juga software kemasan 3D?',
        a: 'Peserta diperkenalkan dengan cara menyajikan mock-up kemasan 3D untuk presentasi visual.',
      },
      {
        q: 'Bagaimana pembagian tugas harian di divisi ini?',
        a: 'Tugas disusun melalui sistem perencanaan mingguan (*sprint*) dengan target harian yang jelas, didampingi oleh *supervisor* divisi terkait.',
      },
      {
        q: 'Apakah ada evaluasi performa kerja secara berkala?',
        a: 'Evaluasi dilakukan setiap akhir pekan (*weekly review*) untuk membahas capaian hasil kerja, kendala teknis, serta saran perbaikan dari mentor.',
      },
    ],
    relatedUrls: ['/jurusan/teknik-grafika/', '/jurusan/dkv/', '/divisi/produksi-souvenir/'],
  },

  // =========================================================================
  // B7: PENGALAMAN (8 URLs)
  // =========================================================================
  {
    id: 'B7-01',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/',
    slug: 'pengalaman',
    title: 'Pengalaman & Pembelajaran Magang di Saka | pkldisaka.com',
    h1: 'Catatan Pengalaman & Pembelajaran PKL',
    metaDescription: 'Kumpulan cerita pembelajaran, studi kasus proyek, catatan mentor, dan galeri suasana kerja nyata selama pelaksanaan PKL di Saka.',
    summary: 'Melihat lebih dekat bagaimana dinamika kerja sehari-hari, tantangan proyek, dan transformasi keahlian peserta selama mengikuti masa praktik kerja industri.',
    targetDate: '07/12/2026',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Refleksi Berbasis Fakta & Pembelajaran',
        content: 'Sesuai komitmen transparansi, catatan pada rubrik ini menyajikan refleksi objektif seputar tantangan riil yang dihadapi siswa, bukan sekadar pujian promosi yang berlebihan.',
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta magang wajib membuat tulisan refleksi akhir?',
        a: 'Peserta didorong merangkum pembelajaran terpenting sebagai bahan evaluasi diri dan penyusunan bab penutup laporan PKL.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/pengalaman/cerita-alumni/', '/pengalaman/sehari-di-saka/', '/pengalaman/galeri/'],
  },
  {
    id: 'B7-02',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/cerita-alumni/',
    slug: 'cerita-alumni',
    categorySlug: 'pengalaman',
    title: 'Cerita Alumni PKL: Perjalanan dari Siswa Menjadi Mandiri | pkldisaka.com',
    h1: 'Cerita Alumni & Refleksi Selepas PKL',
    metaDescription: 'Refleksi pengalaman peserta setelah menyelesaikan program PKL di Saka: bagaimana kebiasaan disiplin industri diterapkan saat kembali ke sekolah/kampus.',
    summary: 'Simak pengalaman nyata para alumni yang telah menyelesaikan masa magang: transisi awal yang canggung, proses adaptasi, hingga bekal mental yang didapat.',
    targetDate: '08/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Pelajaran Terpenting Menurut Alumni',
        content: 'Berdasarkan catatan evaluasi lulusan magang, keterampilan yang paling berdampak bukan hanya kecakapan teknis semata, melainkan mentalitas pantang menyerah:',
        bullets: [
          'Keberanian bertanya kepada mentor saat menemui kendala teknis.',
          'Kebiasaan mencatat poin instruksi rapat agar tidak terjadi salah tafsir tugas.',
          'Kemampuan membagi waktu antara tugas harian dan penyusunan berkas laporan sekolah.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah alumni magang memiliki jejaring komunitas?',
        a: 'Ya, komunikasi tetap terjalin baik melalui grup koordinasi untuk saling berbagi peluang kerja dan info seminar industri.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/pengalaman/studi-kasus/', '/persiapan-pkl/pkl-jadi-karyawan/'],
  },
  {
    id: 'B7-03',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/studi-kasus/',
    slug: 'studi-kasus',
    categorySlug: 'pengalaman',
    title: 'Studi Kasus Proyek Industri yang Dikerjakan Tim Magang | pkldisaka.com',
    h1: 'Studi Kasus Penanganan Proyek di Lingkungan Saka',
    metaDescription: 'Pelajari studi kasus bagaimana tim magang dilibatkan memecahkan tantangan riil: riset pasar, pembuatan konten visual, dan pencapaian target engagement.',
    summary: 'Bedah kasus langkah demi langkah bagaimana penugasan industri dikerjakan peserta magang dengan pendampingan mentor teknis.',
    targetDate: '09/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tahapan Eksekusi Studi Kasus',
        content: '1. Problem Statement: Memahami kebutuhan audiens terhadap informasi produk yang ringkas.\n2. Brainstorming Ide: Mengumpulkan 10 konsep visual bersama tim desain dan copywriting.\n3. Prototyping & Review: Menyeleksi 3 variasi terbaik untuk uji coba.\n4. Evaluasi Metrik: Mengukur respon pembaca dan merumuskan perbaikan di edisi berikutnya.',
      },
    ],
    faqs: [
      {
        q: 'Apakah tugas peserta magang benar-benar dipublikasikan?',
        a: 'Tugas yang memenuhi standar kualitas internal dan lolos kurasi mentor akan dipublikasikan sebagai bagian dari aset resmi.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/pengalaman/proyek-dkv/', '/pengalaman/pembelajaran-rpl/'],
  },
  {
    id: 'B7-04',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/sehari-di-saka/',
    slug: 'sehari-di-saka',
    categorySlug: 'pengalaman',
    title: 'Sehari di Saka: Rutinitas & Kultur Kerja Peserta PKL | pkldisaka.com',
    h1: 'Sehari di Saka: Gambaran Jam Kerja & Aktivitas Magang',
    metaDescription: 'Ketahui alur kegiatan harian peserta PKL di Saka dari morning briefing pukul 08.00, pengerjaan tugas mandiri, sesi mentoring, hingga evaluasi sore.',
    summary: 'Memberikan gambaran transparan mengenai ritme kerja harian agar calon peserta dapat membayangkan dan mempersiapkan fisik serta mental dengan matang.',
    targetDate: '10/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Jadwal Rutin Harian',
        content: 'Jadwal dirancang teratur untuk melatih manajemen waktu profesional:',
        bullets: [
          '08.00 - 08.30: Presensi kehadiran dan koordinasi pembagian tugas harian.',
          '08.30 - 12.00: Sesi fokus pengerjaan proyek divisi di bawah asistensi mentor.',
          '12.00 - 13.00: Istirahat, makan siang, dan ibadah.',
          '13.00 - 15.30: Melanjutkan revisi tugas dan konsultasi teknis lanjutan.',
          '15.30 - 16.00: Pengisian jurnal kerja harian dan persiapan pulang rapi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah ada kegiatan lembur bagi peserta PKL?',
        a: 'Tidak ada. Seluruh kegiatan peserta diakhiri tepat waktu sesuai jam operasional harian.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/jurnal-harian/', '/persiapan-pkl/checklist/'],
  },
  {
    id: 'B7-05',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/proyek-dkv/',
    slug: 'proyek-dkv',
    categorySlug: 'pengalaman',
    title: 'Pengalaman Mengerjakan Proyek Visual & DKV di Saka | pkldisaka.com',
    h1: 'Pengalaman Menangani Proyek Visual & Desain Komunikasi',
    metaDescription: 'Cerita peserta DKV dalam mengerjakan identitas brand, kemasan, dan aset promosi digital: proses revisi, eksplorasi palet warna, dan kepuasan hasil.',
    summary: 'Bagaimana siswa DKV mengasah kepekaan estetika dan efisiensi waktu saat mengubah brief ide abstrak menjadi karya visual yang rapi dan siap tayang.',
    targetDate: '11/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tantangan Riil yang Dihadapi',
        content: 'Banyak peserta awal merasa cemas terhadap proses revisi. Namun melalui bimbingan yang bersahabat, revisi dipahami bukan sebagai teguran melainkan proses alami pematangan desainer.',
      },
    ],
    faqs: [
      {
        q: 'Apakah karya yang dibuat boleh dimasukkan ke dalam portofolio pribadi?',
        a: 'Tentu boleh, peserta dipersilakan menyematkannya di portofolio dengan menyertakan keterangan peran pengerjaan.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/jurusan/dkv/', '/dokumen-pkl/portofolio-dkv/', '/divisi/desain-grafis/'],
  },
  {
    id: 'B7-06',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/pembelajaran-rpl/',
    slug: 'pembelajaran-rpl',
    categorySlug: 'pengalaman',
    title: 'Pembelajaran Proyek RPL & Web Developer di Saka | pkldisaka.com',
    h1: 'Catatan Pembelajaran Proyek RPL & Web Development',
    metaDescription: 'Eksplorasi siswa RPL dalam mengelola kode web: implementasi responsive design, optimasi kecepatan halaman, dan penyusunan komponen modular.',
    summary: 'Mendokumentasikan bagaimana siswa coding belajar menulis kode yang mudah dibaca tim lain, mengelola repositori Git, dan memahami konsep aksesibilitas web.',
    targetDate: '12/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Standar Kode yang Ditekankan',
        content: 'Peserta diarahkan menjauhi kebiasaan copy-paste tanpa pemahaman:',
        bullets: [
          'Memastikan struktur semantic HTML untuk mendukung SEO dan screen reader.',
          'Pemanfaatan variabel CSS untuk kemudahan pemeliharaan token desain.',
          'Pemeriksaan validitas tautan dan pengujian di berbagai ukuran layar ponsel.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta diajarkan cara deploy website ke server live?',
        a: 'Ya, peserta mempelajari alur deployment otomatis dan setting DNS domain.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/jurusan/rpl/', '/divisi/seo-website/', '/persiapan-pkl/tools-gratis/'],
  },
  {
    id: 'B7-07',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/testimoni-mentor/',
    slug: 'testimoni-mentor',
    categorySlug: 'pengalaman',
    title: 'Catatan Pembimbing & Mentor Magang Saka | pkldisaka.com',
    h1: 'Catatan & Harapan Mentor Pembimbing Magang',
    metaDescription: 'Pandangan mentor industri mengenai etos kerja yang perlu dimiliki siswa magang: inisiatif, keterbukaan menerima kritik, dan kemauan belajar.',
    summary: 'Pesan konstruktif dari tim mentor senior mengenai karakter apa yang membuat seorang anak magang berkesan positif dan cepat berkembang di tempat kerja.',
    targetDate: '07/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tiga Karakter Kunci Penentu Keberhasilan',
        content: 'Berdasarkan pengalaman mendampingi berbagai angkatan magang, mentor menyimpulkan tiga faktor utama:',
        bullets: [
          'Sikap responsif: menjawab koordinasi tepat waktu dan segera melapor bila menghadapi kebuntuan.',
          'Rasa ingin tahu yang sehat: mencari referensi mandiri sebelum meminta solusi instan.',
          'Kerapian kerja: menyimpan file dengan format nama teratur dan memperhatikan detail instruksi.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Bagaimana mentor memberikan penilaian akhir sekolah?',
        a: 'Penilaian diberikan secara objektif melalui formulir lembar nilai resmi dari sekolah berdasarkan rubrik sikap dan hasil kerja.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/persiapan-pkl/soft-skill/', '/program-pkl/alur-seleksi/'],
  },
  {
    id: 'B7-08',
    group: 'B7',
    groupName: 'Pengalaman',
    path: '/pengalaman/galeri/',
    slug: 'galeri',
    categorySlug: 'pengalaman',
    title: 'Galeri & Dokumentasi Kegiatan PKL di Saka | pkldisaka.com',
    h1: 'Dokumentasi & Galeri Suasana Kerja PKL',
    metaDescription: 'Potret aktivitas harian di Saka: sesi diskusi meja kerja, proses produksi merchandise, workshop materi, dan kebersamaan tim.',
    summary: 'Melihat suasana ruang kerja, fasilitas belajar, dan interaksi hangat antara peserta magang dengan para mentor di lingkungan Saka.',
    targetDate: '08/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Suasana Belajar yang Kondusif',
        content: 'Dokumentasi foto dan rekaman visual mencerminkan lingkungan kerja yang tertib, bersih, dan berorientasi pada produktivitas karya kolaboratif.',
      },
    ],
    faqs: [
      {
        q: 'Apakah seluruh foto di galeri diambil dari kegiatan resmi?',
        a: 'Ya, seluruh dokumentasi merupakan arsip kegiatan asli yang telah memperoleh persetujuan peserta terkait.',
      },
      {
        q: 'Bagaimana suasana kerja dan budaya di lingkungan Saka?',
        a: 'Budaya kerja mengedepankan komunikasi terbuka, saling menghargai, kedisiplinan waktu, serta bimbingan aktif tanpa senioritas yang kaku.',
      },
      {
        q: 'Apakah alumni PKL di Saka memiliki peluang kerja lanjutan?',
        a: 'Peserta dengan etos kerja dan kompetensi istimewa memiliki peluang untuk direkomendasikan pada proyek lepasan (*freelance*) atau direkrut saat posisi terbuka.',
      },
    ],
    relatedUrls: ['/pengalaman/sehari-di-saka/', '/program-pkl/fasilitas/'],
  },

  // =========================================================================
  // B8: DOKUMEN PKL (9 URLs)
  // =========================================================================
  {
    id: 'B8-01',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/',
    slug: 'dokumen-pkl',
    title: 'Panduan & Format Dokumen Lengkap PKL SMK & Mahasiswa | pkldisaka.com',
    h1: 'Pusat Panduan & Administrasi Dokumen PKL',
    metaDescription: 'Download dan pelajari format dokumen wajib PKL: surat lamaran, surat pengantar, format CV, portofolio, jurnal harian, hingga laporan akhir magang.',
    summary: 'Kelancaran pelaksanaan magang sangat ditentukan oleh ketertiban berkas administrasi. Temukan panduan struktur, tips penulisan, dan contoh kerangka dokumen baku.',
    targetDate: '14/12/2026',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Urgensi Tertib Administrasi Magang',
        content: 'Dokumen magang bukan sekadar formalitas kertas, melainkan bukti otentik legalitas kegiatan belajar di luar sekolah yang diakui oleh dinas pendidikan dan kementerian.',
      },
    ],
    faqs: [
      {
        q: 'Apakah format dokumen sekolah harus selalu sama dengan template di web ini?',
        a: 'Template di website ini adalah panduan umum standar industri. Jika sekolah Anda memiliki format baku khusus, selalu prioritaskan format resmi dari sekolah.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/surat-lamaran/', '/dokumen-pkl/cv-magang/', '/dokumen-pkl/laporan-pkl/'],
  },
  {
    id: 'B8-02',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/surat-lamaran/',
    slug: 'surat-lamaran',
    categorySlug: 'dokumen-pkl',
    title: 'Panduan Membuat Surat Lamaran PKL / Magang yang Benar | pkldisaka.com',
    h1: 'Panduan Menulis Surat Lamaran PKL',
    metaDescription: 'Struktur dan contoh surat lamaran magang yang sopan dan profesional: tujuan surat, perkenalan diri, alasan memilih instansi, dan lampiran berkas.',
    summary: 'Pelajari susunan paragraf surat lamaran magang yang efektif menarik perhatian HRD dan menjelaskan kompetensi yang ingin Anda kontribusikan.',
    targetDate: '15/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Struktur Surat Lamaran Standar',
        content: '1. Kepala Surat (Tempat & Tanggal Pembuatan).\n2. Pihak yang Dituju (Pimpinan / HRD Perusahaan).\n3. Salam Pembuka yang Resmi.\n4. Paragraf Pembuka (Menyebutkan asal sekolah, jurusan, dan periode magang).\n5. Paragraf Isi (Minat keahlian dan kesesuaian divisi yang dituju).\n6. Paragraf Penutup & Harapan Wawancara.\n7. Tanda Tangan dan Nama Terang Pemohon.',
      },
    ],
    faqs: [
      {
        q: 'Apakah surat lamaran sebaiknya diketik atau ditulis tangan?',
        a: 'Untuk industri digital dan kreatif, sangat dianjurkan diketik rapi dengan format PDF standar.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/cv-magang/', '/cara-daftar/', '/dokumen-pkl/surat-pengantar/'],
  },
  {
    id: 'B8-03',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/surat-pengantar/',
    slug: 'surat-pengantar',
    categorySlug: 'dokumen-pkl',
    title: 'Surat Pengantar PKL dari Sekolah / Kampus: Fungsi & Prosedur | pkldisaka.com',
    h1: 'Panduan Pengurusan Surat Pengantar PKL',
    metaDescription: 'Pahami fungsi surat pengantar magang dari BKK / pihak sekolah: bukti penugasan resmi, jaminan institusi, dan tata cara permohonan ke TU.',
    summary: 'Surat pengantar adalah dokumen wajib paling utama yang menandai bahwa permohonan PKL Anda didukung secara legal oleh pihak sekolah atau perguruan tinggi.',
    targetDate: '16/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Poin Kunci Surat Pengantar',
        content: 'Pastikan surat pengantar dari sekolah memuat informasi krusial berikut:',
        bullets: [
          'Kop surat resmi sekolah dengan nomor surat yang sah dan stempel basah / digital.',
          'Nama lengkap peserta beserta Nomor Induk Siswa Nasional (NISN) / NIM.',
          'Tanggal mulai dan tanggal berakhir pelaksanaan PKL yang diajukan.',
          'Kontak guru pembimbing atau koordinator BKK yang dapat dihubungi perusahaan.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Bolehkah satu surat pengantar memuat beberapa nama siswa?',
        a: 'Boleh, untuk pengajuan kelompok dalam periode dan jurusan yang sama.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/cara-daftar/', '/dokumen-pkl/surat-balasan/'],
  },
  {
    id: 'B8-04',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/cv-magang/',
    slug: 'cv-magang',
    categorySlug: 'dokumen-pkl',
    title: 'Format & Tips Membuat CV Magang Menarik untuk Siswa SMK | pkldisaka.com',
    h1: 'Panduan Membuat CV Magang untuk Siswa & Mahasiswa',
    metaDescription: 'Tips menyusun Curriculum Vitae (CV) magang yang memikat HRD walau belum punya pengalaman kerja: tonjolkan proyek sekolah, soft skill, dan organisasi.',
    summary: 'Panduan taktis membuat CV 1 halaman yang ringkas, bersih, mudah dibaca, dan menonjolkan potensi keahlian yang relevan dengan divisi pilihan Anda.',
    targetDate: '17/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Bagian yang Wajib Ada di CV Pemula',
        content: 'Walau belum memiliki pengalaman kerja formal, Anda dapat menonjolkan:',
        bullets: [
          'Tentang Saya: ringkasan singkat 2-3 kalimat mengenai minat dan komitmen belajar.',
          'Riwayat Pendidikan: nama sekolah, jurusan, dan nilai rata-rata yang baik.',
          'Keahlian Teknis & Tools: sebutkan software atau bahasa pemrograman yang dikuasai dasar-dasarnya.',
          'Pengalaman Proyek / Tugas Sekolah: tugas mandiri atau kelompok terbaik yang pernah dibuat.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Berapa halaman ideal untuk CV magang siswa SMK?',
        a: 'Cukup 1 halaman padat dan rapi. Hindari format bertele-tele yang memuat informasi tidak relevan.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/surat-lamaran/', '/dokumen-pkl/portofolio-dkv/', '/persiapan-pkl/skill-anak-magang/'],
  },
  {
    id: 'B8-05',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/portofolio-dkv/',
    slug: 'portofolio-dkv',
    categorySlug: 'dokumen-pkl',
    title: 'Panduan Portofolio Desain DKV & Multimedia untuk Magang | pkldisaka.com',
    h1: 'Panduan Menyusun Portofolio Karya DKV & Desain',
    metaDescription: 'Cara membuat portofolio magang desain yang menarik: pemilihan 5-10 karya terbaik, penjelasan konsep desain, mock-up presentasi, dan link Behance/Drive.',
    summary: 'Portofolio adalah cerminan langsung kemampuan desainer. Pelajari cara menyusun kurasi karya terbaik agar tim penilai dapat melihat potensi estetika Anda.',
    targetDate: '18/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kunci Portofolio yang Dinilai Baik',
        content: '1. Kualitas di atas kuantitas: tampilkan 5 hingga 8 karya terbaik daripada puluhan gambar rata-rata.\n2. Cantumkan konteks: berikan judul karya, software yang dipakai, dan maksud dari pembuatan desain tersebut.\n3. Gunakan mock-up yang proporsional untuk menunjukkan bagaimana desain tampak di dunia nyata.',
      },
    ],
    faqs: [
      {
        q: 'Format apa yang paling disarankan untuk mengirimkan portofolio?',
        a: 'File PDF berukuran di bawah 10 MB atau tautan portofolio online publik (seperti Behance, Dribbble, atau Google Drive yang tidak terkunci).',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/jurusan/dkv/', '/jurusan/multimedia/', '/divisi/desain-grafis/'],
  },
  {
    id: 'B8-06',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/laporan-pkl/',
    slug: 'laporan-pkl',
    categorySlug: 'dokumen-pkl',
    title: 'Struktur & Panduan Penulisan Laporan Akhir PKL | pkldisaka.com',
    h1: 'Panduan Menyusun Laporan Akhir PKL',
    metaDescription: 'Struktur baku penulisan laporan PKL SMK: Bab I Pendahuluan, Bab II Profil Industri, Bab III Pembahasan Proyek, Bab IV Penutup, dan Lampiran bukti.',
    summary: 'Laporan PKL merupakan syarat kelulusan magang di sekolah. Pahami tata cara menguraikan tugas yang telah dikerjakan secara sistematis dan ilmiah.',
    targetDate: '19/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Sistematika Bab Laporan Standar',
        content: 'Susunan bab yang lazim disyaratkan oleh sekolah vokasi:',
        bullets: [
          'Halaman Judul, Lembar Pengesahan Industri, dan Lembar Pengesahan Sekolah.',
          'Bab I: Latar belakang magang, maksud dan tujuan, serta batasan masalah.',
          'Bab II: Gambaran umum sejarah singkat, visi-misi, dan struktur organisasi tempat PKL.',
          'Bab III: Uraian kompetensi khusus dan dokumentasi proyek nyata yang diselesaikan.',
          'Bab IV: Kesimpulan capaian dan saran konstruktif untuk sekolah maupun industri.',
          'Lampiran: Salinan jurnal kegiatan, sertifikat, dan dokumentasi foto kegiatan.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kapan sebaiknya mulai mencicil penulisan laporan?',
        a: 'Mulai cicil pada bulan kedua magang dengan menyusun Bab I dan Bab II agar tidak menumpuk di minggu-minggu akhir.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/jurnal-harian/', '/dokumen-pkl/presentasi/'],
  },
  {
    id: 'B8-07',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/jurnal-harian/',
    slug: 'jurnal-harian',
    categorySlug: 'dokumen-pkl',
    title: 'Cara Mengisi Jurnal Kegiatan Harian PKL yang Benar | pkldisaka.com',
    h1: 'Cara Pengisian Jurnal Kegiatan Harian PKL',
    metaDescription: 'Tips mengisi jurnal harian magang secara deskriptif dan akurat: catat jenis pekerjaan, kendala teknis, solusi yang diambil, dan paraf pembimbing.',
    summary: 'Jurnal harian adalah instrumen bukti keaktifan Anda di tempat PKL. Hindari pengisian umum yang monoton dengan mengikuti panduan formulasi kalimat efektif.',
    targetDate: '14/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Contoh Kalimat Pengisian Jurnal yang Baik',
        content: 'Hindari menulis kalimat terlalu pendek seperti "Bikin desain" atau "Ngetik".\n\nContoh yang lebih deskriptif:\n"Merancang 3 variasi banner promosi media sosial untuk produk souvenir menggunakan Adobe Illustrator sesuai brief warna dari mentor divisi."',
      },
    ],
    faqs: [
      {
        q: 'Berapa kali jurnal harus ditandatangani oleh mentor industri?',
        a: 'Biasanya setiap akhir pekan (Jumat sore) atau sesuai kesepakatan buku panduan dari sekolah.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/laporan-pkl/', '/pengalaman/sehari-di-saka/'],
  },
  {
    id: 'B8-08',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/presentasi/',
    slug: 'presentasi',
    categorySlug: 'dokumen-pkl',
    title: 'Panduan Slide Presentasi Sidang & Evaluasi PKL | pkldisaka.com',
    h1: 'Panduan Menyiapkan Slide Presentasi Evaluasi PKL',
    metaDescription: 'Struktur slide presentasi sidang PKL di depan guru penguji: slide ringkas, perbandingan sebelum vs sesudah, visual karya, dan penguasaan materi.',
    summary: 'Kiat menyusun 10 slide presentasi yang memikat dewan penguji dan membuktikan bahwa masa praktik kerja Anda di Saka membuahkan kompetensi nyata.',
    targetDate: '15/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Urutan 10 Slide Presentasi Efektif',
        content: '1. Judul & Identitas Peserta.\n2. Profil Singkat Tempat PKL.\n3. Divisi dan Tanggung Jawab Utama.\n4. Proyek Unggulan 1 (Tantangan & Solusi).\n5. Proyek Unggulan 2 (Hasil Visual / Kode).\n6. Kendala yang Ditemui dan Cara Mengatasinya.\n7. Hard Skill Baru yang Dikuasai.\n8. Soft Skill yang Terbentuk.\n9. Kesimpulan & Manfaat bagi Pembelajaran.\n10. Penutup & Sesi Tanya Jawab.',
      },
    ],
    faqs: [
      {
        q: 'Berapa lama alokasi waktu presentasi sidang PKL biasanya?',
        a: 'Umumnya berkisar antara 10 hingga 15 menit pemaparan, dilanjutkan 10 menit sesi tanya jawab dewan penguji.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/laporan-pkl/', '/persiapan-pkl/soft-skill/'],
  },
  {
    id: 'B8-09',
    group: 'B8',
    groupName: 'Dokumen PKL',
    path: '/dokumen-pkl/surat-balasan/',
    slug: 'surat-balasan',
    categorySlug: 'dokumen-pkl',
    title: 'Informasi Surat Balasan Penerimaan PKL dari Perusahaan | pkldisaka.com',
    h1: 'Informasi Surat Balasan Penerimaan PKL',
    metaDescription: 'Pahami prosedur penerbitan surat balasan penerimaan magang: kapan diterbitkan, apa saja isinya, dan cara menyerahkannya kembali ke pihak sekolah.',
    summary: 'Surat balasan resmi menjadi bukti bahwa perusahaan menyetujui tanggal dan kuota pengajuan PKL siswa. Simak tata cara tindak lanjutnya.',
    targetDate: '16/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tindak Lanjut Setelah Menerima Surat Balasan',
        content: 'Segera serahkan lembar surat balasan asli atau digital kepada koordinator PKL di sekolah Anda agar data penempatan magang Anda segera terdaftar di sistem BKK.',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana jika surat permohonan belum dibalas setelah 1 minggu?',
        a: 'Anda diperkenankan mengirimkan pesan tindak lanjut secara santun melalui kanal WhatsApp narahubung resmi kami.',
      },
      {
        q: 'Format file apa yang dianjurkan saat mengirimkan dokumen administrasi?',
        a: 'Gunakan format PDF dengan penamaan file yang rapi (contoh: CV_NamaLengkap_Jurusan.pdf) agar mudah diarsipkan dan diverifikasi tim administrasi.',
      },
      {
        q: 'Siapa yang berwenang menandatangani surat pengantar dan laporan akhir?',
        a: 'Surat pengantar ditandatangani oleh Kepala Sekolah atau Koordinator BKK/Hubin, sedangkan laporan akhir disahkan oleh mentor industri dan guru pembimbing sekolah.',
      },
    ],
    relatedUrls: ['/dokumen-pkl/surat-pengantar/', '/cara-daftar/', '/program-pkl/alur-seleksi/'],
  },

  // =========================================================================
  // B9: INFORMASI PKL (10 URLs)
  // =========================================================================
  {
    id: 'B9-01',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/',
    slug: 'info-pkl',
    title: 'Pusat Informasi & Edukasi Praktik Kerja Lapangan | pkldisaka.com',
    h1: 'Pusat Edukasi & Informasi Dasar PKL',
    metaDescription: 'Kumpulan artikel edukatif seputar dunia magang: pemahaman hakikat PKL, aturan durasi, tips memilih tempat kerja, hingga perbandingan model magang.',
    summary: 'Dapatkan wawasan menyeluruh sebelum memutuskan tempat PKL: pelajari hak dan kewajiban peserta, regulasi pendidikan, dan tips menghindari salah pilih tempat.',
    targetDate: '21/12/2026',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Hakikat PKL dalam Kurikulum Vokasi',
        content: 'Praktik Kerja Lapangan merupakan jembatan emas yang menghubungkan teori kelas dengan realitas dunia usaha. Melalui rubrik edukasi ini, kami membagikan panduan objektif untuk membantu siswa dan orang tua memahami proses ini secara mendalam.',
      },
    ],
    faqs: [
      {
        q: 'Mengapa siswa SMK wajib melaksanakan PKL?',
        a: 'PKL adalah syarat kurikulum wajib untuk memastikan lulusan memiliki kompetensi kerja nyata dan kesiapan mental sebelum memasuki pasar tenaga kerja.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/cara-mencari/', '/info-pkl/pkl-vs-magang/', '/persiapan-pkl/'],
  },
  {
    id: 'B9-02',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/cara-mencari/',
    slug: 'cara-mencari',
    categorySlug: 'info-pkl',
    title: 'Cara Mencari Tempat PKL yang Tepat & Sesuai Jurusan | pkldisaka.com',
    h1: 'Cara Mencari Tempat PKL yang Tepat & Berkualitas',
    metaDescription: 'Langkah praktis menemukan tempat magang yang tepat: riset reputasi perusahaan, cek kesesuaian divisi dengan jurusan, dan manfaatkan koneksi alumni.',
    summary: 'Hindari salah pilih tempat magang yang hanya menugaskan hal-hal di luar jurusan. Simak tips memilih perusahaan yang memiliki komitmen membimbing anak magang.',
    targetDate: '22/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: '5 Kriteria Tempat PKL yang Baik',
        content: '1. Memiliki divisi kerja yang relevan langsung dengan jurusan sekolah Anda.\n2. Menugaskan mentor pembimbing yang jelas dan bersedia mengarahkan.\n3. Memiliki ruang kerja fisik yang aman dan kondusif.\n4. Jam kerja teratur dan tidak membebani peserta melebihi batas wajar.\n5. Memberikan penugasan berbasis proyek riil untuk mengasah portofolio.',
      },
    ],
    faqs: [
      {
        q: 'Kapan waktu terbaik mulai mencari tempat PKL?',
        a: 'Idealnya 2 hingga 3 bulan sebelum tanggal mulai magang yang ditetapkan kalender sekolah.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/kesalahan-mencari/', '/info-pkl/pkl-di-umkm/', '/cara-daftar/'],
  },
  {
    id: 'B9-03',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/pkl-vs-magang/',
    slug: 'pkl-vs-magang',
    categorySlug: 'info-pkl',
    title: 'Perbedaan PKL, Magang (Internship), dan Prakerin | pkldisaka.com',
    h1: 'Perbedaan Istilah PKL, Magang, dan Prakerin',
    metaDescription: 'Kenali perbedaan mendasar antara PKL (Praktik Kerja Lapangan), Prakerin (Praktik Kerja Industri), dan Magang Kuliah (Internship): sasaran dan regulasi.',
    summary: 'Meskipun sering dianggap sama, istilah PKL, Prakerin, dan Magang memiliki payung hukum, durasi, dan target kompetensi akademik yang berbeda.',
    targetDate: '23/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Tabel Perbandingan Konsep',
        content: 'PKL/Prakerin: umumnya ditujukan bagi siswa SMK tingkat menengah dengan fokus pemenuhan capaian kompetensi dasar kejuruan.\n\nMagang Mahasiswa (Internship): ditujukan bagi mahasiswa perguruan tinggi dengan bobot pemecahan masalah analitis, inovasi mandiri, dan konversi SKS mata kuliah.',
      },
    ],
    faqs: [
      {
        q: 'Apakah perbedaan istilah ini memengaruhi cara pendaftaran di Saka?',
        a: 'Alur pendaftaran serupa, namun penugasan proyek disesuaikan dengan tingkat jenjang pendidikan peserta.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/mbkm-vs-pkl-smk/', '/program-pkl/'],
  },
  {
    id: 'B9-04',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/durasi-pkl/',
    slug: 'durasi-pkl',
    categorySlug: 'info-pkl',
    title: 'Aturan & Standar Durasi PKL SMK: 3 Bulan vs 6 Bulan | pkldisaka.com',
    h1: 'Aturan Durasi PKL: Memahami Skema 3 Bulan & 6 Bulan',
    metaDescription: 'Pahami regulasi durasi PKL sesuai Kurikulum Merdeka SMK: alasan perpanjangan hingga 6 bulan, manfaat bagi siswa, dan penyesuaian industri.',
    summary: 'Mengapa durasi PKL SMK kini banyak diarahkan menjadi 6 bulan penuh? Simak pertimbangan pedagogis dan manfaat adaptasi industri yang didapatkan peserta.',
    targetDate: '24/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Manfaat Skema Magang 6 Bulan',
        content: 'Dalam durasi 3 bulan, seringkali 1 bulan pertama habis untuk fase adaptasi. Sedangkan pada skema 6 bulan, peserta memiliki waktu lebih panjang untuk menangani siklus proyek secara utuh dari awal hingga selesai.',
      },
    ],
    faqs: [
      {
        q: 'Apakah Saka menerima periode PKL selama 3 bulan?',
        a: 'Ya, kami tetap melayani periode 3 bulan maupun 6 bulan sesuai instruksi resmi sekolah pemohon.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/online-vs-offline/', '/program-pkl/'],
  },
  {
    id: 'B9-05',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/pkl-berbayar/',
    slug: 'pkl-berbayar',
    categorySlug: 'info-pkl',
    title: 'Memahami Kebijakan Uang Saku & Benefit PKL Siswa SMK | pkldisaka.com',
    h1: 'Mengenal Kebijakan Uang Saku & Benefit dalam PKL',
    metaDescription: 'Penjelasan faktual mengenai uang saku magang: aturan hukum ketenagakerjaan, hakikat pembelajaran vokasi, dan benefit non-finansial yang didapat.',
    summary: 'Ulasan transparan mengenai apakah peserta PKL SMK mendapatkan uang saku, bagaimana regulasi memandangnya, dan apa saja nilai tambah utama dari magang.',
    targetDate: '25/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Dasar Kebijakan & Benefit Utama',
        content: 'PKL SMK pada dasarnya adalah kegiatan belajar terstruktur, bukan hubungan ketenagakerjaan formal. Oleh karena itu, fokus utama adalah perolehan ilmu, fasilitas bimbingan gratis, dan portofolio profesional.\n\nPerusahaan dapat memberikan insentif atau apresiasi tertentu berdasarkan kebijakan internal dan performa istimewa peserta.',
      },
    ],
    faqs: [
      {
        q: 'Apakah tidak adanya uang saku mengurangi kualitas pengalaman PKL?',
        a: 'Sama sekali tidak. Pengalaman menangani proyek riil dan bimbingan langsung dari mentor praktisi adalah investasi keahlian yang sangat berharga untuk karier masa depan.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/pkl-di-umkm/', '/persiapan-pkl/pkl-jadi-karyawan/'],
  },
  {
    id: 'B9-06',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/online-vs-offline/',
    slug: 'online-vs-offline',
    categorySlug: 'info-pkl',
    title: 'Perbandingan PKL Online (WFH) vs PKL Offline (WFO) | pkldisaka.com',
    h1: 'Perbandingan PKL Online (Daring) vs Offline (Tatap Muka)',
    metaDescription: 'Kelebihan dan kelemahan magang daring vs luring: disiplin waktu, interaksi sosial, fasilitas perangkat, dan efektivitas bimbingan kerja.',
    summary: 'Memilih model pelaksanaan PKL yang paling sesuai dengan kondisi geografis dan kesiapan sarana kerja Anda. Ketahui perbandingan realistisnya.',
    targetDate: '26/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kelebihan Magang Offline (Tatap Muka)',
        content: 'Di Saka, sistem tatap muka sangat diprioritaskan karena memungkinkan transfer ilmu teknis berlangsung jauh lebih cepat, interaksi tim lebih akrab, dan pembentukan karakter disiplin industri teruji secara nyata.',
      },
    ],
    faqs: [
      {
        q: 'Apakah Saka membuka opsi magang hybrid (kombinasi online & offline)?',
        a: 'Kebijakan hybrid dapat dipertimbangkan khusus untuk kasus tertentu dengan izin tertulis dari pihak sekolah.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/pkl-malang/mahasiswa-luar-kota/', '/program-pkl/fasilitas/'],
  },
  {
    id: 'B9-07',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/pkl-di-umkm/',
    slug: 'pkl-di-umkm',
    categorySlug: 'info-pkl',
    title: 'Kelebihan & Tantangan PKL di Agensi Kreatif & UMKM | pkldisaka.com',
    h1: 'Kelebihan PKL di Lingkungan Agensi Kreatif & UMKM',
    metaDescription: 'Mengapa magang di agensi atau UMKM seringkali lebih aplikatif? Akses langsung ke proyek variatif, komunikasi cair dengan mentor, dan minim birokrasi.',
    summary: 'Berbeda dengan perusahaan korporasi kaku di mana anak magang sering hanya diberi tugas administratif fotokopi, di agensi Anda belajar langsung menangani ragam proyek kreatif.',
    targetDate: '21/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Ruang Tumbuh yang Luas',
        content: 'Di lingkungan agensi yang lincah (agile), setiap peserta dapat melihat langsung bagaimana dampak pekerjaannya terhadap kepuasan klien dan pertumbuhan bisnis secara menyeluruh.',
      },
    ],
    faqs: [
      {
        q: 'Apakah tugas di agensi terlalu berat untuk pemula?',
        a: 'Penugasan selalu disesuaikan dengan tingkat kemampuan awal dan didampingi secara bertahap oleh mentor divisi.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/startup-vs-perusahaan/', '/divisi/'],
  },
  {
    id: 'B9-08',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/startup-vs-perusahaan/',
    slug: 'startup-vs-perusahaan',
    categorySlug: 'info-pkl',
    title: 'Memilih Tempat PKL: Startup vs Perusahaan Korporasi | pkldisaka.com',
    h1: 'Memilih Tempat PKL: Startup Rintisan vs Korporasi Besar',
    metaDescription: 'Pertimbangan objektif memilih tempat magang: struktur organisasi, kecepatan adaptasi, budaya kerja santai tapi produktif, dan peluang eksplorasi ide.',
    summary: 'Analisis komparatif untuk membantu siswa dan mahasiswa menentukan lingkungan kerja mana yang paling cocok dengan karakter dan tujuan kariernya.',
    targetDate: '22/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Menentukan Pilihan yang Tepat',
        content: 'Bagi Anda yang menyukai eksplorasi ragam keterampilan (multitasking), komunikasi terbuka tanpa sekat hierarki, dan dinamika digital serba cepat, agensi dan tim rintisan adalah pilihan ideal.',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana membuktikan bahwa tempat PKL rintisan berkualitas?',
        a: 'Periksa kejelasan portofolio hasil karya mereka, transparansi komunikasi admin, dan kurikulum pembimbingan yang ditawarkan.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/info-pkl/pkl-di-umkm/', '/info-pkl/cara-mencari/'],
  },
  {
    id: 'B9-09',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/mbkm-vs-pkl-smk/',
    slug: 'mbkm-vs-pkl-smk',
    categorySlug: 'info-pkl',
    title: 'Perbedaan Magang MBKM Kampus Merdeka vs PKL SMK | pkldisaka.com',
    h1: 'Perbedaan Magang MBKM Kampus Merdeka vs PKL SMK',
    metaDescription: 'Komparasi skema Magang MBKM untuk mahasiswa vs PKL SMK: konversi 20 SKS, pembuatan laporan riset, evaluasi dosen pembimbing, dan durasi proyek.',
    summary: 'Memahami persyaratan teknis administrasi bagi mahasiswa yang ingin mengajukan konversi SKS perkuliahan melalui magang mandiri di Saka.',
    targetDate: '23/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kesiapan Administrasi MBKM di Saka',
        content: 'Tim Saka siap memfasilitasi logbook berkala, evaluasi berkala bersama Dosen Pembimbing Lapangan (DPL), serta lembar pengesahan konversi nilai akademik.',
      },
    ],
    faqs: [
      {
        q: 'Apakah bisa magang MBKM mandiri di Saka?',
        a: 'Bisa, melalui skema Magang Mandiri yang disetujui oleh program studi di universitas masing-masing.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/jurusan/teknik-informatika/', '/pkl-malang/magang-mahasiswa/'],
  },
  {
    id: 'B9-10',
    group: 'B9',
    groupName: 'Informasi PKL',
    path: '/info-pkl/kesalahan-mencari/',
    slug: 'kesalahan-mencari',
    categorySlug: 'info-pkl',
    title: '5 Kesalahan Fatal Saat Mencari Tempat Magang & Cara Menghindarinya | pkldisaka.com',
    h1: 'Kesalahan Fatal Saat Mencari Tempat PKL & Solusinya',
    metaDescription: 'Hindari kesalahan umum: mengajukan berkas mepet, salah format surat, chat HRD tidak sopan, dan asal pilih tempat tanpa tahu bidang industrinya.',
    summary: 'Evaluasi kesalahan yang kerap membuat surat lamaran magang ditolak perusahaan. Pelajari langkah antisipasinya agar peluang penerimaan Anda semakin tinggi.',
    targetDate: '24/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Daftar Kesalahan yang Sering Terjadi',
        content: '1. Mengirimkan surat lamaran 3 hari sebelum jadwal mulai.\n2. Salah menuliskan nama perusahaan atau divisi yang tidak tersedia.\n3. Mengirimkan pesan chat tanpa perkenalan diri dan asal sekolah.\n4. Tidak menyertakan portofolio padahal mendaftar di divisi desain atau video.\n5. Tidak membaca aturan berkas yang diminta secara teliti.',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana memperbaiki kesan pertama jika sempat salah kirim berkas?',
        a: 'Kirimkan permohonan maaf secara sopan dan sertakan berkas revisi yang telah dibenahi dengan rapi.',
      },
      {
        q: 'Apa dasar hukum pelaksanaan PKL bagi siswa SMK?',
        a: 'Pelaksanaan PKL berlandaskan Permendikbudristek tentang Standar Penyelenggaraan Praktik Kerja Lapangan pada Pendidikan Menengah Kejuruan.',
      },
      {
        q: 'Berapa durasi waktu standar pelaksanaan PKL industri?',
        a: 'Durasi berkisar antara 3 hingga 6 bulan sesuai kalender kurikulum yang ditetapkan oleh masing-masing institusi pendidikan pengirim.',
      },
    ],
    relatedUrls: ['/persiapan-pkl/chat-hrd/', '/dokumen-pkl/surat-lamaran/', '/cara-daftar/'],
  },

  // =========================================================================
  // B10: PERSIAPAN PKL (9 URLs)
  // =========================================================================
  {
    id: 'B10-01',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/',
    slug: 'persiapan-pkl',
    title: 'Panduan Persiapan Menjelang Hari Pertama PKL | pkldisaka.com',
    h1: 'Panduan Persiapan Menjelang Praktik Kerja Lapangan',
    metaDescription: 'Bekali diri Anda sebelum memasuki dunia kerja: checklist dokumen, latihan interview, etika komunikasi profesional, dan penguasaan tools digital.',
    summary: 'Masa transisi dari lingkungan kelas ke dunia kerja membutuhkan kesiapan mental dan sikap. Ikuti panduan praktis kami agar Anda percaya diri sejak hari pertama.',
    targetDate: '28/12/2026',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Membangun Mindset Profesional',
        content: 'Memasuki tempat magang berarti bersiap diperlakukan sebagai calon tenaga kerja dewasa. Disiplin, kerapian berpakaian, dan kesantunan bertutur kata menjadi tolok ukur utama penilaian.',
      },
    ],
    faqs: [
      {
        q: 'Apa yang harus dilakukan jika merasa gugup menjelang hari pertama?',
        a: 'Pelajari rute perjalanan ke kantor, siapkan pakaian rapi H-1, dan ingatlah bahwa mentor siap membantu Anda beradaptasi.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/persiapan-pkl/checklist/', '/persiapan-pkl/interview/', '/persiapan-pkl/soft-skill/'],
  },
  {
    id: 'B10-02',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/checklist/',
    slug: 'checklist',
    categorySlug: 'persiapan-pkl',
    title: 'Checklist Persiapan Sebelum Hari Pertama Masuk PKL | pkldisaka.com',
    h1: 'Checklist Wajib Sebelum Hari Pertama Masuk PKL',
    metaDescription: 'Daftar periksa H-7 sebelum mulai magang: kelengkapan berkas fisik, instalasi software laptop, pakaian sopan, dan jalur transportasi.',
    summary: 'Pastikan tidak ada hal penting yang terlewat dengan memeriksa daftar periksa praktis ini sebelum melangkahkan kaki di hari pertama magang.',
    targetDate: '29/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Daftar Periksa H-3 Masuk Kerja',
        content: 'Pastikan Anda telah mencentang seluruh poin berikut:',
        bullets: [
          'Berkas asli surat pengantar dan buku jurnal kegiatan dari sekolah.',
          'Laptop pribadi terisi penuh daya beserta charger dan mouse.',
          'Software pendukung jurusan sudah terinstal dan berjalan lancar.',
          'Buku catatan saku dan pulpen untuk mencatat instruksi harian.',
          'Pakaian rapi bersepatu sesuai tata tertib yang disepakati.',
          'Mengetahui jam tiba di lokasi minimal 15 menit sebelum bel masuk kerja.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Jam berapa sebaiknya tiba di kantor pada hari pertama?',
        a: 'Sangat disarankan hadir pukul 07.45 WIB untuk melakukan presensi awal dan bersiap menyambut sesi orientasi.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/persiapan-pkl/chat-hrd/', '/pengalaman/sehari-di-saka/'],
  },
  {
    id: 'B10-03',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/interview/',
    slug: 'interview',
    categorySlug: 'persiapan-pkl',
    title: 'Tips Sukses Menghadapi Wawancara (Interview) Magang | pkldisaka.com',
    h1: 'Tips Sukses Wawancara Magang bagi Siswa & Mahasiswa',
    metaDescription: 'Contoh pertanyaan wawancara magang yang sering ditanyakan HRD dan cara menjawabnya: perkenalan diri, alasan memilih divisi, dan kelebihan diri.',
    summary: 'Wawancara magang bertujuan mengenal kepribadian dan motivasi Anda. Simak teknik menjawab pertanyaan wawancara dengan jujur, lugas, dan percaya diri.',
    targetDate: '30/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Pertanyaan yang Kerap Muncul',
        content: '1. "Ceritakan tentang diri Anda dan apa yang Anda pelajari di sekolah."\n2. "Mengapa Anda tertarik magang di divisi ini?"\n3. "Software atau keahlian apa yang paling Anda sukai?"\n4. "Bagaimana cara Anda menyelesaikan tugas jika menghadapi kebuntuan?"\n5. "Apakah ada kendala terkait jadwal masuk atau transportasi?"',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana jika saya tidak tahu jawaban pertanyaan teknis?',
        a: 'Jawablah dengan jujur bahwa Anda belum menguasainya, namun sertakan antusiasme besar untuk mempelajarinya di bawah bimbingan mentor.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/program-pkl/alur-seleksi/', '/persiapan-pkl/soft-skill/'],
  },
  {
    id: 'B10-04',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/chat-hrd/',
    slug: 'chat-hrd',
    categorySlug: 'persiapan-pkl',
    title: 'Etika & Contoh Format Chat WhatsApp ke Pihak HRD / Kantor | pkldisaka.com',
    h1: 'Etika & Contoh Menghubungi Perusahaan via WhatsApp',
    metaDescription: 'Template chat sopan saat menanyakan lowongan magang atau konfirmasi berkas: salam, perkenalan diri, maksud pesan, dan ucapan terima kasih.',
    summary: 'Komunikasi pesan singkat adalah kesan pertama Anda. Hindari menyapa hanya dengan kata "P" atau pesan tanpa identitas yang berisiko diabaikan.',
    targetDate: '31/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Contoh Template Chat Resmi yang Benar',
        content: '"Selamat pagi/siang Bapak/Ibu Admin PKL di Saka,\n\nPerkenalkan saya [Nama Lengkap], siswa kelas XI Jurusan [Jurusan] dari [Nama Sekolah].\n\nBerdasarkan informasi di website pkldisaka.com, saya bermaksud menanyakan ketersediaan kuota PKL untuk periode [Bulan - Tahun] pada divisi [Nama Divisi].\n\nSebagai pertimbangan, bersama pesan ini saya lampirkan surat pengantar sekolah dan CV ringkas dalam format PDF.\n\nTerima kasih atas waktu dan perhatian Bapak/Ibu."',
      },
    ],
    faqs: [
      {
        q: 'Kapan waktu terbaik mengirimkan pesan WhatsApp ke kantor?',
        a: 'Pada hari kerja (Senin - Jumat) di antara pukul 08.30 hingga 16.00 WIB. Hindari mengirim pesan di larut malam atau hari libur.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/kontak/', '/dokumen-pkl/surat-lamaran/'],
  },
  {
    id: 'B10-05',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/skill-anak-magang/',
    slug: 'skill-anak-magang',
    categorySlug: 'persiapan-pkl',
    title: 'Keahlian Pokok (Hard Skill) yang Dicari Perusahaan Digital | pkldisaka.com',
    h1: 'Hard Skill Dasar yang Dicari dari Calon Peserta PKL',
    metaDescription: 'Daftar keahlian teknis yang sangat disukai mentor industri: penguasaan shortcut software, riset mandiri, penataan file rapi, dan dasar penulisan.',
    summary: 'Perusahaan tidak menuntut Anda menjadi pakar berpengalaman, namun menguasai fondasi dasar berikut akan membuat proses belajar Anda melesat cepat.',
    targetDate: '01/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Fondasi Teknis yang Diapresiasi',
        content: '1. Kecepatan navigasi komputer dan penguasaan shortcut keyboard baku.\n2. Kemampuan mengetik 10 jari secara efisien.\n3. Pemahaman struktur direktori folder agar file proyek tidak berserakan.\n4. Keterampilan riset Google lanjutan menggunakan kata kunci spesifik.',
      },
    ],
    faqs: [
      {
        q: 'Apakah pemula yang masih lambat tetap bisa diterima?',
        a: 'Bisa, asalkan memiliki kemauan keras untuk terus berlatih dan tidak malu bertanya.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/persiapan-pkl/tools-gratis/', '/persiapan-pkl/belajar-seo/'],
  },
  {
    id: 'B10-06',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/soft-skill/',
    slug: 'soft-skill',
    categorySlug: 'persiapan-pkl',
    title: 'Soft Skill Kunci untuk Peserta Magang: Disiplin & Komunikasi | pkldisaka.com',
    h1: 'Soft Skill Utama Penunjang Keberhasilan Magang',
    metaDescription: 'Pelajari soft skill penting di lingkungan kerja: komunikasi proaktif, keterbukaan terhadap feedback, kerja sama tim, dan manajemen stres.',
    summary: 'Keahlian teknis membuka pintu kesempatan, namun kecerdasan emosional dan sikap santun yang akan mempertahankan dan memajukan reputasi Anda di industri.',
    targetDate: '02/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: '4 Pilar Sikap Kerja Unggul',
        content: '1. Inisiatif: proaktif melapor bila tugas selesai tanpa harus selalu disuruh.\n2. Tanggung Jawab: mengakui kesalahan secara jujur dan segera memperbaiki.\n3. Empati Tim: saling membantu rekan satu divisi yang sedang menghadapi kesulitan.\n4. Sopan Santun: menyapa rekan dan mentor dengan ramah saat datang dan berpamitan.',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana cara melatih soft skill sejak di sekolah?',
        a: 'Aktif dalam kerja kelompok, disiplin mengumpulkan tugas tepat waktu, dan menghargai pendapat teman sekelas.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/pengalaman/testimoni-mentor/', '/persiapan-pkl/interview/'],
  },
  {
    id: 'B10-07',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/tools-gratis/',
    slug: 'tools-gratis',
    categorySlug: 'persiapan-pkl',
    title: 'Rekomendasi Tools Digital Gratis Penunjang Kerja Magang | pkldisaka.com',
    h1: 'Tools & Aplikasi Digital Gratis Pendukung Kerja PKL',
    metaDescription: 'Kumpulan software gratis legal untuk anak magang: Canva, Figma, Notion, VS Code, Google Docs/Sheets, dan ekstensi browser penunjang riset.',
    summary: 'Maksimalkan produktivitas Anda tanpa biaya mahal dengan memanfaatkan perangkat lunak gratis terbaik yang umum digunakan di industri agensi digital modern.',
    targetDate: '28/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kategori Aplikasi Berdasarkan Kebutuhan',
        content: 'Desain & UI: Figma (gratis untuk perancangan visual dan wireframing web).\n\nManajemen Tugas: Notion & Trello untuk mengorganisir daftar to-do list harian.\n\nCoding: Visual Studio Code dengan ekstensi Prettier dan Live Server.\n\nDokumen: Google Workspace untuk kolaborasi dokumen secara real-time bersama tim.',
      },
    ],
    faqs: [
      {
        q: 'Apakah seluruh software di atas aman digunakan di laptop kerja?',
        a: 'Ya, seluruh tools yang direkomendasikan adalah aplikasi resmi yang teruji aman dan berstandar internasional.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/jurusan/rpl/', '/jurusan/dkv/', '/persiapan-pkl/skill-anak-magang/'],
  },
  {
    id: 'B10-08',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/belajar-seo/',
    slug: 'belajar-seo',
    categorySlug: 'persiapan-pkl',
    title: 'Panduan Belajar Dasar SEO untuk Pemula yang Ingin Magang | pkldisaka.com',
    h1: 'Dasar Belajar Search Engine Optimization (SEO) Pemula',
    metaDescription: 'Pelajari konsep dasar SEO untuk siswa magang: cara kerja crawler Google, riset keyword, on-page optimization, dan faktor perangkingan konten.',
    summary: 'SEO adalah salah satu keahlian digital paling dicari saat ini. Pahami fondasi cara kerja mesin pencari agar Anda siap berkontribusi di divisi web.',
    targetDate: '29/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: '3 Komponen Pokok Belajar SEO',
        content: '1. On-Page SEO: mengoptimalkan elemen di dalam halaman seperti H1, meta description, alt text gambar, dan kepadatan teks bermakna.\n2. Technical SEO: memastikan website cepat diakses di perangkat mobile dan terbebas dari link rusak (broken links).\n3. Content Intent: menyajikan jawaban yang paling relevan dan komprehensif bagi pembaca.',
      },
    ],
    faqs: [
      {
        q: 'Apakah butuh keahlian coding tingkat tinggi untuk belajar SEO?',
        a: 'Tidak harus. Pemahaman dasar tag HTML sederhana sudah sangat cukup untuk memulai optimasi SEO On-Page.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/divisi/seo-website/', '/divisi/digital-marketing/'],
  },
  {
    id: 'B10-09',
    group: 'B10',
    groupName: 'Persiapan PKL',
    path: '/persiapan-pkl/pkl-jadi-karyawan/',
    slug: 'pkl-jadi-karyawan',
    categorySlug: 'persiapan-pkl',
    title: 'Strategi & Etos Kerja agar Diangkat Menjadi Karyawan Selepas PKL | pkldisaka.com',
    h1: 'Strategi Mengubah Kesempatan PKL Menjadi Karier Profesional',
    metaDescription: 'Cara menunjukkan kinerja unggul saat magang: bukti inisiatif, membangun relasi baik dengan tim, menjaga integritas, dan peluang rekrutmen.',
    summary: 'Banyak talenta berprestasi direkrut langsung oleh tempat magangnya sebelum lulus sekolah. Pelajari etos kerja pembeda yang membuat Anda dilirik pimpinan.',
    targetDate: '30/12/2026',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Pembeda Utama Peserta yang Direkrut',
        content: 'Perusahaan merekrut bukan mereka yang paling pintar teori, melainkan mereka yang terbukti dapat diandalkan (reliable), cepat belajar dari koreksi, dan memiliki kecocokan kultur dengan tim kerja.',
      },
    ],
    faqs: [
      {
        q: 'Apakah Saka membuka peluang rekrutmen bagi lulusan PKL terbaik?',
        a: 'Ya, peserta dengan rekam jejak performa dan etika kerja luar biasa memiliki prioritas untuk diproyeksikan bergabung di tim inti.',
      },
      {
        q: 'Keterampilan non-teknis (*soft skill*) apa yang paling dihargai?',
        a: 'Kedisiplinan kehadiran, inisiatif bertanya, kemampuan menerima masukan (*feedback*), serta kejujuran dalam pelaporan progres kerja harian.',
      },
      {
        q: 'Bagaimana cara berpakaian yang pantas selama masa PKL?',
        a: 'Peserta mengenakan seragam kejuruan sekolah pada hari yang ditentukan, atau pakaian kasual rapi (kemeja/polo, celana panjang sopan, dan sepatu tertutup).',
      },
    ],
    relatedUrls: ['/pengalaman/cerita-alumni/', '/persiapan-pkl/soft-skill/'],
  },

  // =========================================================================
  // B11: PKL MALANG (8 URLs)
  // =========================================================================
  {
    id: 'B11-01',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/',
    slug: 'pkl-malang',
    title: 'Panduan Lengkap Tempat PKL di Kota Malang | pkldisaka.com',
    h1: 'Panduan Informasi Praktik Kerja Lapangan di Kota Malang',
    metaDescription: 'Panduan menyeluruh seputar ekosistem PKL dan magang industri di Kota Malang: keunggulan kota pendidikan, daftar bidang industri, dan tips adaptasi.',
    summary: 'Kota Malang dikenal sebagai salah satu pusat pendidikan dan pertumbuhan ekonomi digital terdepan di Jawa Timur. Pelajari mengapa Malang menjadi destinasi ideal untuk mengasah keahlian industri.',
    targetDate: '04/01/2027',
    status: 'Panduan Faktual',
    isHub: true,
    sections: [
      {
        heading: 'Malang sebagai Kota Kreatif & Digital',
        content: 'Dengan hadirnya puluhan kampus ternama, ratusan SMK kejuruan, dan ekosistem industri kreatif yang dinamis, Malang menyediakan iklim belajar yang suportif, biaya hidup terjangkau, dan komunitas talenta yang aktif.',
      },
    ],
    faqs: [
      {
        q: 'Apakah Malang ramah bagi siswa dari luar daerah Jawa Timur?',
        a: 'Sangat ramah. Malang terbiasa menyambut ribuan pelajar perantau dari berbagai penjuru nusantara dengan fasilitas umum dan transportasi yang mudah.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/pkl-malang/daftar-per-jurusan/', '/pkl-malang/biaya-hidup-kos/', '/pkl-malang/mahasiswa-luar-kota/'],
  },
  {
    id: 'B11-02',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/daftar-per-jurusan/',
    slug: 'daftar-per-jurusan',
    categorySlug: 'pkl-malang',
    title: 'Daftar Rekomendasi Bidang PKL di Malang per Jurusan | pkldisaka.com',
    h1: 'Pemetaan Kebutuhan PKL di Malang Berdasarkan Jurusan',
    metaDescription: 'Cek peluang penempatan magang di Malang untuk jurusan DKV, RPL, TKJ, Pemasaran, Akuntansi, dan Multimedia di sektor industri riil.',
    summary: 'Ketahui sektor industri lokal di kawasan Malang Raya yang aktif menyerap peserta magang sesuai spesialisasi keahlian jurusan masing-masing.',
    targetDate: '05/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Pemetaan Potensi Sektor Lokal',
        content: 'Teknologi & IT: terkonsentrasi pada software house, agensi SEO, dan jasa infrastruktur jaringan.\n\nKreatif & Desain: berpusat pada industri merchandise, agensi branding, percetakan kemasan, dan studio animasi.\n\nBisnis & Pemasaran: berkembang pesat di sektor UMKM oleh-oleh khas, retail modern, dan e-commerce kuliner.',
      },
    ],
    faqs: [
      {
        q: 'Bagaimana posisi Saka di antara industri di Malang?',
        a: 'Saka bergerak di perpaduan agensi digital marketing, perancangan web, serta produksi merchandise kreatif.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/jurusan/', '/divisi/', '/pkl-malang/it-jaringan/'],
  },
  {
    id: 'B11-03',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/it-jaringan/',
    slug: 'it-jaringan',
    categorySlug: 'pkl-malang',
    title: 'Peluang PKL IT, Jaringan, dan Web Developer di Malang | pkldisaka.com',
    h1: 'Eksplorasi Magang Sektor IT & Jaringan di Kota Malang',
    metaDescription: 'Ulasan peluang magang IT di Malang: software house, agensi digital, ISP lokal, dan peran Saka dalam membina teknisi muda.',
    summary: 'Bagi siswa TKJ dan RPL, Malang menawarkan ekosistem teknologi yang sangat subur. Pelajari apa saja yang dicari perusahaan IT lokal dari calon anak magang.',
    targetDate: '06/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Kebutuhan Talenta IT Lokal',
        content: 'Perusahaan IT di Malang sangat membutuhkan talenta muda yang memiliki kemauan riset mandiri, ketelitian membaca dokumentasi API, dan kemampuan kerja sama dalam tim pengembang.',
      },
    ],
    faqs: [
      {
        q: 'Apakah peserta IT di Saka dilibatkan dalam proyek klien langsung?',
        a: 'Peserta membantu modul penugasan teruji di bawah pengawasan ketat lead developer.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/jurusan/tkj/', '/jurusan/rpl/', '/divisi/seo-website/'],
  },
  {
    id: 'B11-04',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/marketing/',
    slug: 'marketing',
    categorySlug: 'pkl-malang',
    title: 'Peluang PKL Digital Marketing & Bisnis Online di Malang | pkldisaka.com',
    h1: 'Peluang Magang Digital Marketing & Bisnis di Malang',
    metaDescription: 'Ketahui potensi magang pemasaran digital di Malang: industri kreatif yang bertumbuh, strategi live commerce, optimasi media sosial, dan copywriting.',
    summary: 'Bagaimana Malang berkembang menjadi salah satu poros kreator konten dan pemasar digital di Jawa Timur, serta bagaimana Anda dapat ikut berkecimpung.',
    targetDate: '07/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Dinamika Industri Pemasaran Malang',
        content: 'Tingginya aktivitas usaha mikro dan menengah di Malang mendorong permintaan tinggi terhadap talenta yang menguasai konten video vertikal dan pengelolaan toko online secara profesional.',
      },
    ],
    faqs: [
      {
        q: 'Apakah ada pembekalan materi sebelum mulai praktik?',
        a: 'Ya, sesi orientasi minggu pertama diisi pembekalan alur kerja pemasaran dasar.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/divisi/digital-marketing/', '/jurusan/bisnis-digital/'],
  },
  {
    id: 'B11-05',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/kota-vs-kabupaten/',
    slug: 'kota-vs-kabupaten',
    categorySlug: 'pkl-malang',
    title: 'Perbandingan Lokasi PKL: Kota Malang vs Kabupaten Malang | pkldisaka.com',
    h1: 'Perbandingan Lokasi PKL: Wilayah Kota vs Kabupaten Malang',
    metaDescription: 'Pertimbangan memilih lokasi magang: kemudahan akses transportasi angkot/online di Kota Malang vs karakteristik industri manufaktur di Kabupaten.',
    summary: 'Pahami karakteristik perbedaan tata kota, kemudahan mobilitas harian, fasilitas penunjang kos, dan konsentrasi jenis industri antara Kota dan Kabupaten Malang.',
    targetDate: '08/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Keunggulan Memilih Wilayah Kota Malang',
        content: '1. Akses transportasi online dan angkutan kota yang melimpah 24 jam.\n2. Kedekatan dengan pusat fotokopi, percetakan, dan toko perlengkapan komputer.\n3. Banyak pilihan tempat makan murah khusus kantong pelajar di sekitar pemukiman kos.',
      },
    ],
    faqs: [
      {
        q: 'Di mana lokasi Saka berada?',
        a: 'Saka berlokasi di area strategis Kota Malang yang mudah dijangkau dari berbagai terminal dan stasiun kereta api.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/pkl-malang/biaya-hidup-kos/', '/kontak/'],
  },
  {
    id: 'B11-06',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/mahasiswa-luar-kota/',
    slug: 'mahasiswa-luar-kota',
    categorySlug: 'pkl-malang',
    title: 'Panduan Siswa & Mahasiswa Luar Kota yang Ingin PKL di Malang | pkldisaka.com',
    h1: 'Panduan Peserta Perantau Luar Kota untuk Magang di Malang',
    metaDescription: 'Tips bagi siswa/mahasiswa luar daerah: persiapan tiket perjalanan ke Malang, memilih kos aman, adaptasi cuaca sejuk, dan etika bertetangga.',
    summary: 'Menjalani magang di luar kota adalah kesempatan berharga melatih kemandirian hidup. Simak panduan praktis adaptasi agar masa tinggal Anda di Malang nyaman.',
    targetDate: '09/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Langkah Adaptasi di Kota Malang',
        content: '1. Cari informasi kos minimal 2 minggu sebelum keberangkatan.\n2. Siapkan jaket atau pakaian hangat karena udara malam dan pagi hari di Malang cenderung sejuk.\n3. Simpan nomor darurat kantor dan narahubung pembimbing sekolah di ponsel Anda.',
      },
    ],
    faqs: [
      {
        q: 'Apakah ada stasiun kereta terdekat menuju kantor Saka?',
        a: 'Stasiun Malang Kota Baru dan Stasiun Malang Kota Lama adalah stasiun utama yang dapat dijangkau dalam waktu 15-20 menit berkendara.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/pkl-malang/biaya-hidup-kos/', '/cara-daftar/'],
  },
  {
    id: 'B11-07',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/biaya-hidup-kos/',
    slug: 'biaya-hidup-kos',
    categorySlug: 'pkl-malang',
    title: 'Estimasi Biaya Hidup, Kos, dan Transportasi Selama PKL di Malang | pkldisaka.com',
    h1: 'Estimasi Biaya Hidup & Sewa Kos Selama PKL di Malang',
    metaDescription: 'Rincian anggaran realistis untuk anak magang di Malang: harga sewa kamar kos per bulan, biaya makan sehari-hari, kuota internet, dan transportasi.',
    summary: 'Rincian estimasi pengeluaran bulanan yang terjangkau agar orang tua dan peserta dapat merencanakan anggaran hidup secara bijak selama berada di Malang.',
    targetDate: '04/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Simulasi Anggaran Pengeluaran Bulanan',
        content: 'Perkiraan biaya hidup hemat standar pelajar di Kota Malang:',
        bullets: [
          'Sewa Kamar Kos: Rp400.000 - Rp750.000 per bulan (kamar standar termasuk listrik & air).',
          'Biaya Konsumsi Makan: Rp20.000 - Rp35.000 per hari (warung makan prasmanan/nasi pecel).',
          'Transportasi & Bensin: Rp100.000 - Rp150.000 per bulan untuk motor pribadi.',
          'Kebutuhan Tak Terduga & Print Berkas: Rp100.000 per bulan.',
          'Total Estimasi: sekitar Rp1.100.000 hingga Rp1.800.000 per bulan.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Apakah harga makanan di sekitar kantor terjangkau?',
        a: 'Ya, terdapat banyak warung makan dengan menu ramah kantong siswa di radius jalan kaki.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/pkl-malang/mahasiswa-luar-kota/', '/faq/'],
  },
  {
    id: 'B11-08',
    group: 'B11',
    groupName: 'PKL Malang',
    path: '/pkl-malang/magang-mahasiswa/',
    slug: 'magang-mahasiswa',
    categorySlug: 'pkl-malang',
    title: 'Ketentuan Magang Mahasiswa Semester Akhir di Malang | pkldisaka.com',
    h1: 'Panduan Magang bagi Mahasiswa Perguruan Tinggi di Malang',
    metaDescription: 'Informasi magang terapan mahasiswa: penyelarasan judul skripsi/tugas akhir dengan data riil industri, surat evaluasi dekanat, dan portofolio kerja.',
    summary: 'Menyediakan peluang riset terapan bagi mahasiswa yang ingin memvalidasi teori akademik melalui implementasi sistem dan studi kasus industri nyata di Saka.',
    targetDate: '05/01/2027',
    status: 'Panduan Faktual',
    sections: [
      {
        heading: 'Penyelarasan Tugas Akhir & Magang',
        content: 'Mahasiswa diperkenankan mengangkat topik proyek yang dikerjakan di Saka sebagai bahan penelitian skripsi atau laporan magang kampus, dengan persetujuan mengenai kerahasiaan data (NDA).',
      },
    ],
    faqs: [
      {
        q: 'Apakah Saka menerima mahasiswa dari luar Malang?',
        a: 'Ya, kami menyambut mahasiswa dari berbagai perguruan tinggi negeri maupun swasta di seluruh Indonesia.',
      },
      {
        q: 'Apakah mudah menemukan tempat kos di dekat lokasi kantor Saka?',
        a: 'Kawasan Cemorokandang dan Kedungkandang memiliki banyak pilihan kos putra/putri dengan rentang harga terjangkau bagi siswa dan mahasiswa.',
      },
      {
        q: 'Bagaimana akses transportasi umum menuju lokasi kantor?',
        a: 'Lokasi dapat dijangkau menggunakan transportasi online (Gojek/Grab) serta angkutan kota yang melintasi jalur lingkar timur Kota Malang.',
      },
    ],
    relatedUrls: ['/jurusan/teknik-informatika/', '/info-pkl/mbkm-vs-pkl-smk/', '/cara-daftar/'],
  },
];

// Helper functions for easy querying across 72 pages
export const getPageByPath = (path: string): PklPage | undefined => {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  return PKL_PAGES.find((p) => p.path === normalized);
};

export const getPagesByGroup = (group: PklPage['group']): PklPage[] => {
  return PKL_PAGES.filter((p) => p.group === group);
};

export const getCategoryChildren = (categorySlug: string): PklPage[] => {
  return PKL_PAGES.filter((p) => p.categorySlug === categorySlug);
};
