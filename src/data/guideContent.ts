// src/data/guideContent.ts
// Data konten khusus dan relevan untuk setiap sub-halaman Panduan & Edukasi
// Memastikan setiap halaman memiliki template, checklist, dan panduan yang sesuai dengan topiknya masing-masing

export interface GuideSpecialContent {
  badge: string;
  boxTitle: string;
  boxSubtitle: string;
  templateCode?: string;
  keyPointsTitle?: string;
  keyPoints?: { icon: string; title: string; desc: string }[];
  checklistTitle?: string;
  checklists?: string[];
  tipsTitle: string;
  tipsContent: string;
}

export const GUIDE_CONTENT: Record<string, GuideSpecialContent> = {
  // =========================================================================
  // DOKUMEN PKL (B8)
  // =========================================================================
  '/dokumen-pkl/surat-lamaran/': {
    badge: 'Template Resmi Siap Pakai',
    boxTitle: 'Contoh Naskah Surat Lamaran PKL Standar Industri',
    boxSubtitle: 'Format teks resmi yang sopan, terstruktur, dan disukai oleh HRD/pembimbing industri:',
    templateCode: `Hal: Permohonan Praktik Kerja Lapangan (PKL)
Lampiran: 4 (Empat) Berkas

Kepada Yth.
Pimpinan / HRD Saka Malang
Jl. Band. Palmerah No.D3-35B, Cemorokandang, Kota Malang

Dengan hormat,
Sehubungan dengan program Praktik Kerja Lapangan (PKL) dari [Nama Sekolah/Kampus Anda], saya yang bertanda tangan di bawah ini:

Nama                : [Nama Lengkap Anda]
NISN / NIM          : [Nomor Induk Siswa/Mahasiswa]
Kelas / Jurusan     : [Contoh: XI DKV / Semester 5 Teknik Informatika]
Asal Institusi      : [Nama SMK / Universitas Anda]

Bermaksud mengajukan permohonan PKL di Saka Malang untuk periode [Bulan Mulai] s/d [Bulan Selesai] pada divisi [Nama Divisi Pilihan, contoh: Desain Grafis / Digital Marketing].

Saya memiliki minat besar dan dasar keterampilan yang sesuai dengan kebutuhan divisi tersebut. Sebagai bahan pertimbangan Bapak/Ibu, bersama surat ini saya lampirkan:
1. Surat Pengantar Resmi dari Sekolah/Kampus
2. Curriculum Vitae (CV) Magang Pemula
3. Salinan Portofolio Karya / Hasil Praktik Kejuruan
4. Salinan Rapor / Transkrip Nilai Terakhir

Besar harapan saya untuk diberikan kesempatan belajar, mempraktikkan kompetensi, dan berkontribusi langsung pada proyek industri di Saka Malang.

Atas perhatian dan kesempatan yang Bapak/Ibu berikan, saya ucapkan terima kasih.

Hormat saya,

(Tanda Tangan & Nama Terang)
[Nama Lengkap Anda]`,
    checklistTitle: 'Checklist Berkas Sebelum Surat Dikirim',
    checklists: [
      'Gunakan format file PDF dengan nama file rapi: SuratLamaran_NamaLengkap_Jurusan.pdf',
      'Pastikan periode bulan magang dan nama divisi yang dituju sudah tertulis jelas',
      'Sertakan nomor kontak WhatsApp aktif dan email yang rutin dibuka',
      'Lampirkan dokumen pendukung (CV, Portofolio, Surat Pengantar) dalam satu folder Google Drive atau lampiran email',
    ],
    tipsTitle: 'Tips dari Tim Rekrutmen Saka',
    tipsContent: 'Hindari surat lamaran yang terlalu panjang bertele-tele. Tuliskan dengan jujur kompetensi yang sudah Anda pelajari di sekolah dan apa yang ingin Anda kembangkan selama masa magang di Saka.',
  },

  '/dokumen-pkl/cv-magang/': {
    badge: 'Format 1 Halaman ATS-Friendly',
    boxTitle: 'Panduan Struktur CV Magang Pemula Tanpa Pengalaman Kerja',
    boxSubtitle: 'Susunan bagian CV yang ringkas, rapi, dan menonjolkan potensi keahlian siswa/mahasiswa:',
    templateCode: `[NAMA LENGKAP ANDA]
Kota Malang, Jawa Timur | 0812-XXXX-XXXX | email.anda@gmail.com | linkedin.com/in/namaanda | linkportofolio.com

TENTANG SAYA
Siswa jurusan Desain Komunikasi Visual (DKV) SMKN 4 Malang dengan pemahaman mendalam tentang prinsip desain tata letak, branding produk, dan fotografi studio. Terbiasa mengoperasikan Adobe Illustrator dan Photoshop. Memiliki disiplin tinggi, antusias belajar proyek komersial riil, dan mampu berkolaborasi dalam tim.

PENDIDIKAN
SMK Negeri 4 Malang (Grafika)                                          2024 - Sekarang
Kompetensi Keahlian: Desain Komunikasi Visual (Nilai Rata-rata Rapor: 88.5)

KETERAMPILAN TEKNIS & SOFTWARE
- Software Desain: Adobe Illustrator, Adobe Photoshop, Figma, Canva Pro
- Keahlian Teknis: Layout Kemasan Produk, Feed Media Sosial, Foto Produk Mini Studio, Tipografi
- Bahasa: Bahasa Indonesia (Aktif), Bahasa Inggris (Pasif)

PROYEK & PENGALAMAN KEJURUAN
Proyek Desain Kemasan Produk UMKM (Tugas Akhir Semester)                 November 2025
- Merancang identitas merek visual, logo, dan pola die-cut kemasan makanan ringan lokal.
- Menghasilkan 3 alternatif mockup desain visual dengan kepuasan nilai A dari guru pembimbing.

PENGALAMAN ORGANISASI
Anggota Divisi Dokumentasi & Media OSIS                                 2024 - 2025
- Mengelola publikasi feed Instagram acara sekolah dengan rata-rata kenaikan reach 20%.`,
    checklistTitle: 'Daftar Periksa CV Magang yang Menarik',
    checklists: [
      'Panjang CV maksimal 1 halaman (ringkas, padat, dan mudah dibaca cepat oleh HRD)',
      'Tuliskan keahlian software konkret yang Anda kuasai (jangan pakai rating bintang/persen abstrak)',
      'Sertakan link portofolio (Google Drive, Behance, atau website pribadi) yang izin aksesnya sudah Publik',
      'Gunakan font formal (Inter, Roboto, Arial, atau Calibri) dengan ukuran 10 - 11 pt',
    ],
    tipsTitle: 'Tips Khusus CV dari Mentor Saka',
    tipsContent: 'Bagi siswa magang, HRD tidak mencari pengalaman kerja 5 tahun, melainkan bukti ketertarikan nyata: proyek tugas sekolah yang rapi, kemauan belajar tinggi, dan kerapian berkas.',
  },

  '/dokumen-pkl/jurnal-harian/': {
    badge: 'Panduan Pengisian Logbook',
    boxTitle: 'Standar Format & Contoh Pengisian Jurnal Harian PKL',
    boxSubtitle: 'Contoh kalimat pelaporan kerja harian yang deskriptif dan memenuhi standar penilaian sekolah:',
    keyPointsTitle: 'Contoh Kalimat Pengisian yang Disukai Pembimbing',
    keyPoints: [
      {
        icon: 'bi-check2-circle text-success',
        title: 'Divisi Desain / DKV',
        desc: '"Merancang 3 opsi layout mockup kemasan box souvenir pesanan instansi, mengekspor aset file cetak format PDF 300 DPI, dan merevisi warna sesuai panduan mentor."',
      },
      {
        icon: 'bi-check2-circle text-success',
        title: 'Divisi IT / RPL / Web',
        desc: '"Mengembangkan komponen navigasi responsif website klien, menguji performa load page di perangkat mobile, dan mencatat perbaikan bug form validasi."',
      },
      {
        icon: 'bi-check2-circle text-success',
        title: 'Divisi Digital Marketing / Pemasaran',
        desc: '"Melakukan riset 15 kata kunci turunan produk UMKM, menyusun draft naskah copy feed media sosial, dan mengunggah katalog etalase marketplace."',
      },
    ],
    checklistTitle: 'Aturan Disiplin Jurnal Harian',
    checklists: [
      'Isi jurnal setiap sore sebelum pulang jam 16:00 agar ingatan aktivitas kerja masih segar',
      'Hindari kalimat satu kata seperti "Ngetik", "Bikin desain", atau "Foto-foto"',
      'Minta paraf/tanda tangan mentor industri secara berkala setiap akhir pekan (Jumat)',
      'Lampirkan bukti foto dokumentasi jika buku logbook sekolah menyediakan kolom lampiran',
    ],
    tipsTitle: 'Pesan Mentor Pembimbing',
    tipsContent: 'Jurnal harian yang terisi rapi setiap hari akan mempermudah Anda menyusun Laporan Akhir PKL di akhir masa magang tanpa perlu mengarang cerita.',
  },

  '/dokumen-pkl/laporan-pkl/': {
    badge: 'Struktur Sistematika Laporan',
    boxTitle: 'Sistematika Standar Bab Laporan Akhir PKL Sekolah Vokasi',
    boxSubtitle: 'Kerangka bab laporan magang yang lazim disahkan oleh pihak sekolah dan industri:',
    keyPointsTitle: 'Susunan Bab Laporan Akhir',
    keyPoints: [
      {
        icon: 'bi-1-circle-fill text-primary',
        title: 'BAB I: PENDAHULUAN',
        desc: 'Latar belakang pelaksanaan PKL, landasan hukum vokasi, tujuan magang, manfaat bagi siswa & sekolah, serta waktu dan tempat pelaksanaan di Saka Malang.',
      },
      {
        icon: 'bi-2-circle-fill text-primary',
        title: 'BAB II: GAMBARAN UMUM PERUSAHAAN',
        desc: 'Profil Saka Malang, sejarah singkat agensi, visi & misi industri, struktur organisasi perusahaan, dan deskripsi divisi kerja tempat penempatan.',
      },
      {
        icon: 'bi-3-circle-fill text-primary',
        title: 'BAB III: PELAKSANAAN PRAKTIK KERJA & PEMBAHASAN',
        desc: 'Uraian tugas dan proyek komersial yang dikerjakan, alat/software yang digunakan, studi kasus teknis, kendala yang dihadapi, serta solusi yang diterapkan bersama mentor.',
      },
      {
        icon: 'bi-4-circle-fill text-primary',
        title: 'BAB IV: PENUTUP, KESIMPULAN & SARAN',
        desc: 'Kesimpulan capaian kompetensi yang diperoleh, saran konstruktif untuk sekolah dalam mempersiapkan kurikulum, serta saran untuk pengembangan operasional magang.',
      },
    ],
    checklistTitle: 'Kelengkapan Lampiran Wajib Laporan',
    checklists: [
      'Lembar Pengesahan bermaterai/tanda tangan resmi Pembimbing Industri dan Pembimbing Sekolah',
      'Salinan Sertifikat PKL resmi dari Saka Malang',
      'Salinan Formulir Nilai Evaluasi Praktik Kerja Industri dari Saka',
      'Foto dokumentasi aktivitas kerja dan hasil karya portofolio proyek',
    ],
    tipsTitle: 'Layanan Asistensi Laporan di Saka',
    tipsContent: 'Mentor di Saka siap meluangkan waktu mereview draft laporan Anda dan menandatangani lembar pengesahan resmi sebelum jadwal sidang sekolah.',
  },

  '/dokumen-pkl/surat-pengantar/': {
    badge: 'Prosedur Surat Sekolah',
    boxTitle: 'Panduan Pengurusan Surat Pengantar PKL dari Sekolah/Kampus',
    boxSubtitle: 'Langkah taktis mengurus surat permohonan resmi ke pihak BKK/Hubin sekolah:',
    keyPointsTitle: 'Alur Pengurusan Surat Pengantar',
    keyPoints: [
      {
        icon: 'bi-arrow-right-circle-fill text-primary',
        title: '1. Periksa Kuota & Jurusan di Saka',
        desc: 'Hubungi narahubung resmi Saka terlebih dahulu via WhatsApp untuk memastikan kuota divisi yang dituju masih tersedia.',
      },
      {
        icon: 'bi-arrow-right-circle-fill text-primary',
        title: '2. Ajukan Permohonan ke Bagian BKK/Hubin',
        desc: 'Sampaikan kepada guru BKK nama perusahaan: Saka Malang, alamat kantor di Jl. Band. Palmerah Malang, dan periode pelaksanaan.',
      },
      {
        icon: 'bi-arrow-right-circle-fill text-primary',
        title: '3. Penerbitan Surat Resmi Bertanda Tangan Kepala Sekolah',
        desc: 'Sekolah menerbitkan surat berkop resmi yang memuat nama lengkap siswa, NISN, jurusan, dan tanggal mulai magang.',
      },
      {
        icon: 'bi-arrow-right-circle-fill text-success',
        title: '4. Kirimkan PDF Surat Pengantar ke Saka',
        desc: 'Kirimkan hasil scan PDF berkualitas tinggi ke admin Saka untuk diverifikasi dan diterbitkan Surat Balasan resmi.',
      },
    ],
    checklistTitle: 'Data yang Wajib Ada di Surat Pengantar',
    checklists: [
      'Kop surat resmi sekolah lengkap dengan nomor surat dan tanggal penerbitan',
      'Nama perusahaan tujuan: Saka Malang (Jalan Band. Palmerah No.D3-35B, Kota Malang)',
      'Daftar nama lengkap seluruh peserta beserta NISN dan kelas/jurusan',
      'Tanggal mulai dan berakhirnya periode magang yang diajukan',
    ],
    tipsTitle: 'Catatan Penting BKK',
    tipsContent: 'Satu surat pengantar sekolah dapat memuat beberapa nama siswa sekaligus jika Anda mendaftar secara berkelompok dalam satu jurusan.',
  },

  '/dokumen-pkl/portofolio-dkv/': {
    badge: 'Kurasi Karya Kreatif',
    boxTitle: 'Panduan Menyusun Portofolio Karya Desain Visual & DKV',
    boxSubtitle: 'Standar presentasi karya visual yang efektif membuktikan kesiapan kerja industri:',
    keyPointsTitle: 'Elemen Kunci Portofolio DKV yang Dinilai',
    keyPoints: [
      {
        icon: 'bi-palette-fill text-primary',
        title: 'Pilih 5 - 8 Karya Terbaik Anda',
        desc: 'Lebih baik menampilkan 5 karya yang matang dan berkonsep daripada 20 gambar sketsa yang belum selesai.',
      },
      {
        icon: 'bi-layout-text-window-reverse text-primary',
        title: 'Sertakan Konteks & Cerita di Balik Desain',
        desc: 'Tuliskan brief singkat: siapa kliennya, masalah apa yang ingin diselesaikan, software yang dipakai, dan peran Anda dalam pembuatannya.',
      },
      {
        icon: 'bi-box-seam-fill text-primary',
        title: 'Tampilkan Hasil dalam Bentuk Mockup Riil',
        desc: 'Tampilkan desain kemasan dalam bentuk 3D box, kartu nama dalam mockup kertas, atau feed Instagram dalam tampilan smartphone.',
      },
    ],
    checklistTitle: 'Checklist Format File Portofolio',
    checklists: [
      'Gunakan format PDF multi-halaman atau link web (Behance, Dribbble, atau Google Drive publik)',
      'Ukuran file PDF di bawah 15 MB agar tidak berat saat dikirim via WhatsApp atau email',
      'Pastikan gambar tidak pecah saat diperbesar pada layar monitor desktop',
      'Cantumkan informasi kontak Anda di slide pertama atau slide terakhir portofolio',
    ],
    tipsTitle: 'Komentar Mentor Desain Saka',
    tipsContent: 'Kami sangat menghargai peserta yang menyertakan proses sketsa awal sebelum hasil jadi, karena itu membuktikan cara berpikir kreatif Anda.',
  },

  '/dokumen-pkl/presentasi/': {
    badge: 'Struktur Sidang Magang',
    boxTitle: 'Panduan Menyiapkan Slide Presentasi Evaluasi PKL',
    boxSubtitle: 'Urutan 8-10 slide efektif untuk mempresentasikan pencapaian kerja di hadapan penguji:',
    keyPointsTitle: 'Rekomendasi Struktur Slide Presentasi',
    keyPoints: [
      {
        icon: 'bi-file-easel-fill text-primary',
        title: 'Slide 1 - 2: Judul & Pengenalan Perusahaan',
        desc: 'Identitas peserta, sekolah, divisi magang di Saka Malang, serta ringkasan profil agensi tempat belajar.',
      },
      {
        icon: 'bi-file-easel-fill text-primary',
        title: 'Slide 3 - 5: Proyek Utama & Pembagian Tugas',
        desc: 'Tampilkan brief penugasan klien nyata yang Anda kerjakan, peran teknis, serta software yang digunakan.',
      },
      {
        icon: 'bi-file-easel-fill text-primary',
        title: 'Slide 6 - 7: Galeri Karya & Bukti Hasil Nyata',
        desc: 'Tampilkan dokumentasi mockup produk, tangkapan layar website, atau laporan performa kampanye pemasaran.',
      },
      {
        icon: 'bi-file-easel-fill text-primary',
        title: 'Slide 8 - 10: Kendala, Solusi, & Kesimpulan Pembelajaran',
        desc: 'Ceritakan tantangan teknis yang berhasil diatasi bersama mentor dan keterampilan baru apa yang Anda dapatkan.',
      },
    ],
    checklistTitle: 'Tips Tampil Percaya Diri saat Presentasi',
    checklists: [
      'Hindari teks yang terlalu rapat di dalam slide; gunakan poin-poin dan perbanyak visual gambar',
      'Berlatihlah membawakan materi presentasi dalam waktu 10 hingga 15 menit',
      'Siapkan file slide dalam format PPTX dan PDF cadangan di flashdisk serta Google Drive',
      'Kenakan seragam sekolah rapi atau pakaian formal kantor berkerah',
    ],
    tipsTitle: 'Dukungan Fasilitas Presentasi di Saka',
    tipsContent: 'Peserta di Saka difasilitasi sesi gladi bersih presentasi bersama mentor sebelum jadwal sidang resmi di sekolah/kampus.',
  },

  '/dokumen-pkl/surat-balasan/': {
    badge: 'Legalitas Penerimaan',
    boxTitle: 'Informasi Penerbitan Surat Balasan Resmi dari Saka Malang',
    boxSubtitle: 'Prosedur legalitas penerimaan peserta didik untuk diserahkan kembali ke sekolah:',
    keyPointsTitle: 'Fungsi & Prosedur Surat Balasan',
    keyPoints: [
      {
        icon: 'bi-check-all text-success',
        title: 'Ketetapan Resmi Diterimanya Siswa',
        desc: 'Surat balasan adalah bukti sah bahwa permohonan magang Anda telah diverifikasi dan kuota divisi telah dikunci untuk Anda.',
      },
      {
        icon: 'bi-shield-fill-check text-primary',
        title: 'Berkop Resmi & Bertanda Tangan Pimpinan',
        desc: 'Dokumen diterbitkan dengan kop surat resmi Saka, stempel perusahaan, dan nama pembimbing industri yang ditugaskan.',
      },
      {
        icon: 'bi-folder-check text-primary',
        title: 'Arsip Wajib untuk Koordinator BKK/Hubin',
        desc: 'Salinan fisik atau PDF surat balasan wajib diserahkan siswa ke guru BKK sekolah sebagai syarat izin dispensasi PKL.',
      },
    ],
    checklistTitle: 'Langkah Setelah Menerima Surat Balasan',
    checklists: [
      'Simpan baik-baik file PDF surat balasan di ponsel dan laptop Anda',
      'Serahkan salinan surat balasan ke pihak BKK atau koordinator PKL sekolah Anda',
      'Catat tanggal hari pertama masuk dan jam mulai kerja (08:00 WIB)',
      'Lakukan konfirmasi kesiapan H-3 sebelum masuk kerja melalui WhatsApp mentor Saka',
    ],
    tipsTitle: 'Waktu Penerbitan Surat Balasan',
    tipsContent: 'Saka memproses surat balasan maksimal 1 - 2 hari kerja setelah surat pengantar resmi dari sekolah Anda kami terima.',
  },

  // =========================================================================
  // PERSIAPAN PKL (B10)
  // =========================================================================
  '/persiapan-pkl/checklist/': {
    badge: 'Action Plan Pra-Magang',
    boxTitle: 'Checklist Wajib Menjelang Hari Pertama Masuk PKL',
    boxSubtitle: 'Daftar periksa perlengkapan, administrasi, dan kesiapan sebelum tiba di kantor:',
    keyPointsTitle: 'Timeline Persiapan Masuk Kerja',
    keyPoints: [
      {
        icon: 'bi-calendar-check-fill text-primary',
        title: 'Persiapan H-7: Administrasi & Alat Kerja',
        desc: 'Pastikan surat pengantar dan balasan sudah lengkap. Cek performa laptop pribadi, charger, mouse, dan install software kejuruan yang diperlukan.',
      },
      {
        icon: 'bi-geo-alt-fill text-primary',
        title: 'Persiapan H-3: Rute & Transportasi',
        desc: 'Ketahui rute perjalanan menuju Jl. Band. Palmerah Cemorokandang Malang. Lakukan simulasi estimasi waktu tempuh dari kos/rumah.',
      },
      {
        icon: 'bi-alarm-fill text-success',
        title: 'Persiapan Hari-H: Kehadiran Prima',
        desc: 'Datang 15 menit lebih awal (07:45 WIB). Kenakan pakaian sopan berkerah atau seragam sekolah, bawa buku jurnal dan botol minum.',
      },
    ],
    checklistTitle: 'Daftar Barang Bawaan Hari Pertama',
    checklists: [
      'Laptop kerja pribadi beserta charger dan mouse',
      'Buku agenda / jurnal harian dan alat tulis',
      'Salinan dokumen surat lamaran, CV, dan surat balasan Saka',
      'Pakaian sopan berkerah (kemeja / batik / seragam sekolah) dan bersepatu tertutup',
    ],
    tipsTitle: 'Suasana Hari Pertama di Saka',
    tipsContent: 'Tidak perlu grogi di hari pertama! Anda akan disambut ramah oleh tim mentor, diajak tur kantor, dan diberi briefing orientasi santai.',
  },

  '/persiapan-pkl/interview/': {
    badge: 'Tips Wawancara Magang',
    boxTitle: 'Strategi Sukses Interview & Tanya Jawab PKL',
    boxSubtitle: 'Cara menjawab pertanyaan wawancara dengan jujur, percaya diri, dan profesional:',
    keyPointsTitle: 'Pertanyaan yang Kerap Ditanyakan & Cara Menjawabnya',
    keyPoints: [
      {
        icon: 'bi-chat-dots-fill text-primary',
        title: '"Ceritakan tentang diri Anda dan jurusan sekolah Anda"',
        desc: 'Fokus pada nama, sekolah, jurusan, alasan memilih bidang tersebut, dan proyek sekolah yang paling Anda banggakan.',
      },
      {
        icon: 'bi-chat-dots-fill text-primary',
        title: '"Software atau alat apa saja yang sudah pernah Anda gunakan?"',
        desc: 'Sebutkan software yang benar-benar pernah Anda pakai (misal: Photoshop, Canva, Figma, atau VS Code). Jujurlah pada tingkat kemahiran Anda.',
      },
      {
        icon: 'bi-chat-dots-fill text-primary',
        title: '"Apa yang ingin Anda capai selama magang di Saka?"',
        desc: 'Jawab bahwa Anda ingin merasakan alur kerja industri komersial nyata, memperbanyak portofolio riil, dan belajar bekerja dalam tim.',
      },
    ],
    checklistTitle: 'Etika Sikap saat Wawancara',
    checklists: [
      'Hadir tepat waktu (atau login tepat waktu jika wawancara online via Google Meet)',
      'Tatap mata pewawancara dengan sopan dan gunakan intonasi suara yang jelas',
      'Bawa hasil karya portofolio Anda di laptop atau ponsel untuk ditunjukkan jika diminta',
      'Siapkan 1 - 2 pertanyaan untuk mentor di akhir wawancara (menunjukkan antusiasme Anda)',
    ],
    tipsTitle: 'Kultur Wawancara di Saka',
    tipsContent: 'Wawancara di Saka bersifat diskusi dua arah yang santai tanpa intimidasi. Kami ingin mengenal potensi dan minat Anda agar penempatan divisi tepat sasaran.',
  },

  '/persiapan-pkl/chat-hrd/': {
    badge: 'Etika Komunikasi Online',
    boxTitle: 'Template Chat WhatsApp Resmi Menghubungi Pembimbing / HRD',
    boxSubtitle: 'Contoh etika kirim pesan WhatsApp yang sopan, tidak membuat bingung, dan cepat direspon:',
    templateCode: `Selamat pagi/siang Bapak/Ibu Admin Kemitraan Saka Malang,

Perkenalkan saya:
Nama: [Nama Lengkap Anda]
Asal Sekolah/Kampus: [Nama SMK / Universitas]
Jurusan: [Nama Jurusan Anda]

Mohon maaf mengganggu waktunya. Saya bermaksud menanyakan informasi ketersediaan kuota Praktik Kerja Lapangan (PKL) di Saka Malang untuk divisi [Nama Divisi Pilihan, misal: Desain Grafis / IT / Digital Marketing] pada periode [Bulan Mulai] s/d [Bulan Selesai].

Sebagai bahan perkenalan awal, saya lampirkan surat permohonan resmi dan ringkasan portofolio saya dalam format PDF.

Apakah saat ini kuota divisi tersebut masih terbuka untuk periode yang saya ajukan? Terima kasih banyak atas waktu dan bantuan Bapak/Ibu.`,
    checklistTitle: 'Aturan Penting Chat WhatsApp Perusahaan',
    checklists: [
      'Kirim pesan pada jam kerja operasional (Senin - Jumat, pukul 08:00 - 16:00 WIB)',
      'Gunakan foto profil WhatsApp yang sopan dan nama kontak akun yang jelas',
      'Tuliskan seluruh maksud tujuan dalam satu pesan lengkap (hindari hanya mengetik "P", "Halo", atau "Test")',
      'Ucapkan salam pembuka, perkenalan diri, maksud pesan, dan terima kasih di penutup',
    ],
    tipsTitle: 'Respon Cepat Tim Admin',
    tipsContent: 'Pesan yang disusun rapi dan sopan akan langsung diprioritaskan oleh tim admin kami untuk dicek ketersediaan kuotanya di sistem.',
  },

  '/persiapan-pkl/tools-gratis/': {
    badge: 'Katalog Tools Industri',
    boxTitle: 'Rekomendasi Software & Aplikasi Gratis Standar Industri',
    boxSubtitle: 'Tools gratis yang umum dipakai tim kreatif dan teknologi di lingkungan Saka:',
    keyPointsTitle: 'Kategori Aplikasi Berdasarkan Kebutuhan',
    keyPoints: [
      {
        icon: 'bi-brush-fill text-primary',
        title: 'Desain Visual & UI/UX',
        desc: 'Figma (prototipe desain gratis berbasis browser), Canva (aset cepat dan ide konten), Photopea (alternatif Photoshop berbasis web tanpa instalasi).',
      },
      {
        icon: 'bi-code-slash text-primary',
        title: 'Koding & Web Development',
        desc: 'Visual Studio Code (code editor terbaik dengan ribuan ekstensi gratis), Git & GitHub (manajemen versi kode), Google Lighthouse (audit performa web).',
      },
      {
        icon: 'bi-kanban-fill text-primary',
        title: 'Manajemen Tugas & Komunikasi Tim',
        desc: 'Trello (manajemen kartu tugas Kanban), Google Drive (penyimpanan cloud dokumen), Slack / Discord (koordinasi diskusi proyek).',
      },
    ],
    checklistTitle: 'Langkah Persiapan Software di Laptop',
    checklists: [
      'Install Visual Studio Code dan ekstensi Live Server bagi siswa jurusan RPL/TKJ',
      'Buat akun gratis Figma dan pelajari dasar membuat frame serta layout bagi siswa DKV',
      'Pastikan browser Google Chrome terupdate ke versi terbaru untuk kenyamanan riset',
      'Siapkan akun Google Drive dengan ruang penyimpanan yang cukup untuk arsip berkas kerja',
    ],
    tipsTitle: 'Pelatihan Tools di Saka',
    tipsContent: 'Jika Anda belum menguasai tools di atas, jangan berkecil hati. Mentor Saka akan mengajarkan workflow penggunaan tools industri dari dasar di minggu pertama.',
  },

  // =========================================================================
  // PKL MALANG (B11)
  // =========================================================================
  '/pkl-malang/biaya-hidup-kos/': {
    badge: 'Simulasi Anggaran Riil',
    boxTitle: 'Estimasi Rincian Biaya Kos & Kebutuhan Harian Selama PKL di Malang',
    boxSubtitle: 'Gambaran anggaran nyata bagi peserta didik dan mahasiswa perantau di Kota Malang:',
    keyPointsTitle: 'Rincian Estimasi Biaya Bulanan',
    keyPoints: [
      {
        icon: 'bi-house-door-fill text-primary',
        title: 'Sewa Kamar Kos Sekitar Kantor (Rp400.000 - Rp750.000/bln)',
        desc: 'Di kawasan Cemorokandang, Kedungkandang, dan sekitarnya, banyak tersedia kos putri/putra aman dengan fasilitas kasur, lemari, kamar mandi dalam, dan WiFi.',
      },
      {
        icon: 'bi-cup-hot-fill text-primary',
        title: 'Biaya Makan Harian (Rp25.000 - Rp40.000/hari)',
        desc: 'Banyak warung makan prasmanan murah ramah kantong pelajar di sekitar studio dengan menu nasi campur/sayur mulai Rp8.000 - Rp15.000 per porsi.',
      },
      {
        icon: 'bi-fuel-pump-fill text-primary',
        title: 'Transportasi Lokal (Rp100.000 - Rp200.000/bln)',
        desc: 'Jika membawa sepeda motor sendiri, pengeluaran bensin sangat hemat. Bagi pengguna ojek online atau angkot, akses sangat dekat dan terjangkau.',
      },
      {
        icon: 'bi-gift-fill text-success',
        title: 'Fasilitas Hemat di Kantor Saka (GRATIS 100%)',
        desc: 'Kantor Saka menyediakan air minum galon gratis sepuasnya, dispenser panas/dingin, koneksi WiFi kantor berkecepatan tinggi, dan area makan nyaman.',
      },
    ],
    checklistTitle: 'Tips Menghemat Pengeluaran Anak Magang',
    checklists: [
      'Pilih kos yang lokasinya dapat ditempuh dengan berjalan kaki atau 5 menit berkendara ke kantor',
      'Bawa botol minum sendiri dan manfaatkan air isi ulang gratis di kantor',
      'Membawa bekal makan siang dari kos atau makan bersama rekan tim di warung sekitar',
      'Gunakan fasilitas WiFi kantor untuk download materi belajar agar hemat kuota internet ponsel',
    ],
    tipsTitle: 'Bantuan Pencarian Kos dari Tim Saka',
    tipsContent: 'Peserta dari luar kota atau luar provinsi dapat berkonsultasi dengan admin kami untuk mendapatkan rekomendasi kontak ibu kos terdekat yang terpercaya dan aman.',
  },

  '/pkl-malang/kota-vs-kabupaten/': {
    badge: 'Aksesibilitas Lokasi',
    boxTitle: 'Keunggulan Memilih Tempat PKL di Wilayah Kota Malang',
    boxSubtitle: 'Keuntungan strategis lokasi kantor Saka di kawasan Kota Malang:',
    keyPointsTitle: 'Fasilitas Pendukung di Sekitar Lokasi',
    keyPoints: [
      {
        icon: 'bi-geo-alt-fill text-primary',
        title: 'Akses Jalan Utama & Transportasi Mudah',
        desc: 'Terletak di Jl. Band. Palmerah Malang, lokasi mudah dijangkau dari arah stasiun kota, terminal Arjosari/Hamid Rusdi, maupun tol Madyopuro.',
      },
      {
        icon: 'bi-printer-fill text-primary',
        title: 'Dekat dengan Pusat Percetakan & Fotokopi',
        desc: 'Memudahkan peserta saat mencetak dokumen, menjilid laporan PKL, atau mencetak sample kemasan produk.',
      },
      {
        icon: 'bi-shield-check text-success',
        title: 'Lingkungan Aman, Asri & Kondusif',
        desc: 'Kawasan kantor tenang dan jauh dari kebisingan jalan raya utama, sangat ideal untuk fokus belajar dan bekerja kreatif.',
      },
    ],
    checklistTitle: 'Kemudahan Sekitar Studio Saka',
    checklists: [
      'Dekat dengan masjid/musholla untuk kemudahan sholat Dzuhur dan Ashar',
      'Banyak toko ritel (Indomaret/Alfamart) dan apotek dalam radius 200 meter',
      'Tersedia area parkir motor yang aman dan terlindung di dalam area studio',
    ],
    tipsTitle: 'Titik Lokasi Google Maps',
    tipsContent: 'Lokasi Saka Malang sudah terdaftar resmi di Google Maps. Anda dapat mencari kata kunci "Saka Malang" untuk panduan rute navigasi akurat.',
  },

  // =========================================================================
  // INFORMASI PKL (B9)
  // =========================================================================
  '/info-pkl/pkl-vs-magang/': {
    badge: 'Komparasi Regulasi Vokasi',
    boxTitle: 'Perbedaan Mendasar PKL SMK, Magang MBKM, dan Magang Industri',
    boxSubtitle: 'Penjelasan istilah resmi agar Anda tidak salah memilih jalur penempatan:',
    keyPointsTitle: 'Tabel Perbandingan Konsep',
    keyPoints: [
      {
        icon: 'bi-mortarboard-fill text-primary',
        title: 'PKL SMK (Prakerin)',
        desc: 'Kewajiban kurikulum sekolah kejuruan (biasanya kelas XI atau XII) berdurasi 3 hingga 6 bulan dengan fokus pembinaan kompetensi teknis dan etika kerja industri.',
      },
      {
        icon: 'bi-buildings-fill text-primary',
        title: 'Magang MBKM (Kampus Merdeka)',
        desc: 'Program bagi mahasiswa perguruan tinggi vokasi/akademik berdurasi 1 semester dengan konversi hingga 20 SKS mata kuliah dan penugasan proyek tingkat lanjut.',
      },
      {
        icon: 'bi-briefcase-fill text-primary',
        title: 'Magang Industri Bersertifikat',
        desc: 'Pelatihan kerja mandiri untuk mengasah portofolio profesional dan mempersiapkan transisi menuju karier staf penuh waktu di industri kreatif.',
      },
    ],
    checklistTitle: 'Kebijakan Terbuka di Saka Malang',
    checklists: [
      'Saka menerima siswa PKL SMK maupun mahasiswa magang MBKM dari seluruh Indonesia',
      'Materi penugasan disesuaikan dengan jenjang pendidikan (SMK fokus teknis, Mahasiswa fokus analisis & arsitektur proyek)',
      'Semua peserta mendapatkan sertifikat resmi dan penilaian transparan sesuai format instansi pengirim',
    ],
    tipsTitle: 'Sinergi Antar Jenjang di Saka',
    tipsContent: 'Di Saka, mahasiswa magang dan siswa SMK sering berkolaborasi harmonis dalam satu tim, menciptakan lingkungan belajar yang saling melengkapi.',
  },

  '/info-pkl/durasi-pkl/': {
    badge: 'Manajemen Waktu Magang',
    boxTitle: 'Aturan Durasi PKL: Memahami Skema 3 Bulan vs 6 Bulan',
    boxSubtitle: 'Dampak durasi magang terhadap kedalaman portofolio dan kesiapan kerja Anda:',
    keyPointsTitle: 'Perbandingan Skema Durasi',
    keyPoints: [
      {
        icon: 'bi-hourglass-split text-warning',
        title: 'Skema 3 Bulan (Dasar Industri)',
        desc: 'Cocok untuk pengenalan kultur kerja agensi, adaptasi tools profesional, dan penyelesaian proyek-proyek skala kecil hingga menengah.',
      },
      {
        icon: 'bi-award-fill text-success',
        title: 'Skema 6 Bulan (Kurikulum Merdeka Unggulan)',
        desc: 'Sangat direkomendasikan karena peserta dapat mengawal proyek komersial klien dari hulu ke hilir, membangun portofolio tebal, dan berpeluang direkrut.',
      },
    ],
    checklistTitle: 'Penyesuaian Jadwal di Saka',
    checklists: [
      'Saka membuka penerimaan untuk kedua skema: Batch Ganjil (Juli - Desember) dan Batch Genap (Januari - Juni)',
      'Jadwal masuk disesuaikan dengan kalender akademik BKK sekolah Anda',
      'Tidak ada biaya tambahan untuk durasi magang yang lebih panjang (100% Bebas Biaya)',
    ],
    tipsTitle: 'Rekomendasi dari Mentor Industri',
    tipsContent: 'Peserta yang mengambil skema 6 bulan memiliki tingkat kepercayaan diri dan kematangan portofolio yang jauh lebih siap saat melamar pekerjaan pertama mereka.',
  },

  // =========================================================================
  // PENGALAMAN (B7)
  // =========================================================================
  '/pengalaman/cerita-alumni/': {
    badge: 'Kisah Nyata Lulusan',
    boxTitle: 'Cerita Alumni & Refleksi Selepas Menyelesaikan PKL di Saka',
    boxSubtitle: 'Refleksi jujur para alumni tentang perubahan skill dan mental kerja mereka:',
    keyPointsTitle: 'Pelajaran Terpenting Menurut Alumni',
    keyPoints: [
      {
        icon: 'bi-chat-heart-fill text-danger',
        title: 'Ekosistem Kerja Tanpa Senioritas',
        desc: 'Mentor membimbing dari nol dengan bahasa santai, tidak pernah meremehkan siswa magang, dan selalu membuka ruang diskusi dua arah.',
      },
      {
        icon: 'bi-briefcase-fill text-primary',
        title: 'Portofolio Nyata yang Beneran Diproduksi',
        desc: 'Merasakan kepuasan luar biasa saat melihat hasil desain kemasan atau halaman website yang dikerjakan beneran dicetak dan dipakai oleh klien.',
      },
      {
        icon: 'bi-clock-fill text-success',
        title: 'Jam Kerja Teratur & Manusiawi',
        desc: 'Jam kerja 08:00 - 16:00 WIB, hari Sabtu & Minggu libur penuh, dan istirahat 1 jam sangat cukup untuk makan serta sholat Dzuhur santai.',
      },
    ],
    checklistTitle: 'Apa yang Dibawa Pulang Alumni Saka?',
    checklists: [
      'Portofolio karya nyata berstandar industri komersial',
      'Sertifikat PKL resmi industri dan nilai rapor evaluasi transparan',
      'Jejaring relasi pertemanan lintas sekolah dan koneksi langsung ke mentor praktisi',
      'Kepercayaan diri tinggi menghadapi dunia kerja profesional sesungguhnya',
    ],
    tipsTitle: 'Jejaring Komunitas Alumni Saka',
    tipsContent: 'Setelah lulus magang, alumni tetap terhubung dalam grup komunikasi kami untuk berbagi info lowongan kerja dan konsultasi proyek mandiri.',
  },

  // =========================================================================
  // PENGALAMAN (B7) - TAMBAHAN LENGKAP
  // =========================================================================
  '/pengalaman/studi-kasus/': {
    badge: 'Bedah Proyek Nyata',
    boxTitle: 'Studi Kasus Alur Penanganan Proyek Desain & Branding UMKM',
    boxSubtitle: 'Simulasi alur nyata pengerjaan proyek komersial dari brief hingga serah terima:',
    templateCode: `[STUDI KASUS]: Rebranding Kemasan Kopi Robusta Dampit Malang
Klien: UMKM Kopi Lokal Dampit
Tim: 1 Siswa DKV (Visual Design) + 1 Siswa Digital Marketing (Content & Copy)
Mentor Pendamping: Praktisi Senior Saka Malang

Tahap 1: Creative Brief & Research
- Menganalisis target audiens (anak muda 18-35 th penikmat kopi artisan).
- Membedah USP (keunggulan biji kopi lereng Semeru dengan roasted profile medium-dark).

Tahap 2: Sketsa & Dieline Packaging
- Merancang pola lipatan pouch standing zipper 250gr di Adobe Illustrator.
- Mengatur color profile CMYK, resolusi aset raster 300 DPI, dan safe margin 3mm.

Tahap 3: Asistensi & Review Mentor
- Evaluasi legibility teks komposisi dan perizinan P-IRT.
- Penyesuaian kontras warna palet earthy warm agar menonjol di rak display toko.

Tahap 4: Proofing Cetak & Mockup Promosi
- Mencetak dummy digital proof untuk memvalidasi presisi garis potong dan lipat.
- Membuat 3 variasi foto produk digital 3D mockup untuk feed Instagram promosi.`,
    keyPointsTitle: 'Kompetensi Industri yang Terasah',
    keyPoints: [
      {
        icon: 'bi-briefcase-fill text-primary',
        title: 'Pemahaman Brief Klien',
        desc: 'Mampu menerjemahkan kebutuhan klien menjadi aset visual yang menjual, bukan sekadar menggambar indah.',
      },
      {
        icon: 'bi-check-all text-success',
        title: 'Standar Prepress Komersial',
        desc: 'Menguasai teknis pisah warna CMYK, resolusi cetak minimal 300 DPI, bleed, dan format font convert to curves.',
      },
      {
        icon: 'bi-people-fill text-warning',
        title: 'Kolaborasi Antar Disiplin',
        desc: 'Desainer bekerja berdampingan dengan copywriter pemasaran agar pesan produk tersampaikan padu.',
      },
    ],
    checklistTitle: 'Checklist Output Akhir Proyek',
    checklists: [
      'File master vektor (.AI/.CDR) rapi berlayer',
      'File siap cetak PDF/X-1a dengan registration mark & bleed 3mm',
      'Aset mockup promosi PNG transparan 2000x2000px',
      'Dokumentasi studi kasus mini untuk portofolio pribadi',
    ],
    tipsTitle: 'Kunci Sukses Menghadapi Revisi',
    tipsContent: 'Revisi dalam proyek industri adalah hal yang lumrah. Jangan baper, jadikan masukan mentor dan klien sebagai sarana memperdalam wawasan standar pasar.',
  },

  '/pengalaman/sehari-di-saka/': {
    badge: 'Aktivitas Harian Realistis',
    boxTitle: 'Rundown Sehari di Saka: Ritme Jam Kerja & Pendampingan Magang',
    boxSubtitle: 'Jadwal harian peserta PKL yang teratur, produktif, dan seimbang:',
    templateCode: `08:00 - 08:30 WIB | Morning Standup & Daily Sync
- Absensi kehadiran via sistem internal
- Briefing pembagian tugas harian bersama mentor divisi
- Review kendala teknis hari sebelumnya

08:30 - 12:00 WIB | Sesi Kerja Fokus 1 (Deep Work)
- Eksekusi penugasan proyek sesuai divisi masing-masing
- Riset referensi, pengerjaan aset desain / penulisan naskah / koding fitur
- Konsultasi teknis cepat ke meja mentor bila mengalami kebuntuan

12:00 - 13:00 WIB | Jam Istirahat, Makan Siang & Sholat
- Istirahat santai di pantry / mushola terdekat
- Menikmati makan siang bersama rekan magang dari berbagai sekolah

13:00 - 15:30 WIB | Sesi Kerja Fokus 2 & Asistensi
- Melanjutkan pengerjaan proyek komersial atau materi edukasi
- Sesi 1-on-1 feedback dengan mentor: review file, perbaikan detail karya
- Quality Check (QC) terhadap aset sebelum submit ke server proyek

15:30 - 16:00 WIB | Logbook Update & Closing Standup
- Pengisian jurnal harian / logbook kegiatan PKL
- Backup file kerja ke cloud storage internal
- Jam pulang tepat waktu (on-time, no overtime)`,
    keyPointsTitle: 'Kultur Kerja Sehari-hari',
    keyPoints: [
      {
        icon: 'bi-alarm-fill text-primary',
        title: 'Disiplin Waktu On-Time',
        desc: 'Jam masuk 08:00 WIB dan selesai 16:00 WIB. Tepat waktu melatih etos profesional sejak dini.',
      },
      {
        icon: 'bi-chat-heart-fill text-success',
        title: 'Bimbingan Terbuka & Ramah',
        desc: 'Tidak ada senioritas toxic. Bertanya disambut hangat oleh mentor yang siap mengarahkan solusi.',
      },
      {
        icon: 'bi-cup-hot-fill text-warning',
        title: 'Suasana Kantor Nyaman',
        desc: 'Ruangan ber-AC, dispenser air minum gratis, meja kerja luas, dan koneksi internet cepat.',
      },
    ],
    checklistTitle: 'Rutinitas Wajib Harian Siswa',
    checklists: [
      'Datang 10 menit sebelum jam 08:00 WIB',
      'Menyiapkan laptop dan perlengkapan kerja sebelum standup',
      'Melaporkan progres tugas sebelum jam istirahat siang',
      'Mengisi jurnal kegiatan harian sebelum jam pulang 16:00 WIB',
    ],
    tipsTitle: 'Tips Mengatur Energi & Fokus',
    tipsContent: 'Gunakan teknik jeda istirahat mata setiap 50 menit menatap layar agar stamina kerja tetap prima hingga sore hari.',
  },

  '/pengalaman/proyek-dkv/': {
    badge: 'Portofolio Desain Grafis',
    boxTitle: 'Alur Pengerjaan Proyek Visual & Desain Komunikasi Nyata',
    boxSubtitle: 'Standar baku eksekusi desain grafis dan branding di lingkungan industri Saka:',
    templateCode: `[STANDAR OPERASIONAL DIVISI DESAIN GRAFIS SAKA]

1. Spesifikasi Media Cetak (Packaging, Banner, Merchandise):
- Color Mode: CMYK (Coated FOGRA39 / US Web Coated SWOP v2)
- Resolution: Minimum 300 DPI pada skala 100%
- Bleed Area: Wajib 3 mm di setiap sisi luar
- Safety Margin: Minimum 5 mm dari garis potong ke elemen teks
- Text Rules: Wajib Create Outlines / Convert to Curves sebelum serah terima

2. Spesifikasi Media Digital (Feed IG, Story, Banner Web):
- Color Mode: RGB / sRGB
- Dimensi IG Feed: 1080 x 1080 px (1:1) atau 1080 x 1350 px (4:5)
- Dimensi Story/Reels: 1080 x 1920 px (9:16) dengan safe zone atas-bawah
- Format File: WebP / PNG untuk grafis tajam, JPG kompresi 85% untuk foto

3. Tata Kelola File & Folder:
- Penamaan: [TGL]_[KLIEN]_[JENIS_KARYA]_v[VERSI].ai
- Contoh: 20261106_KeripikMalang_KemasanStandingPouch_v02.ai`,
    keyPointsTitle: 'Keunggulan Pembinaan DKV di Saka',
    keyPoints: [
      {
        icon: 'bi-palette-fill text-primary',
        title: 'Bukan Sekadar Teori',
        desc: 'Karya siswa dicetak nyata menjadi standing pouch, sticker label, souvenir mug, dan merchandise.',
      },
      {
        icon: 'bi-laptop text-info',
        title: 'Standar Industri Nyata',
        desc: 'Menggunakan Adobe Illustrator, Photoshop, dan Figma dengan standar layer dan grid yang rapi.',
      },
      {
        icon: 'bi-award-fill text-success',
        title: 'Portofolio Bernilai Jual',
        desc: 'Setiap karya yang lolos supervisi berhak dimasukkan ke dalam portofolio pribadi siswa berizin resmi.',
      },
    ],
    checklistTitle: 'Checklist Validasi File Sebelum Cetak',
    checklists: [
      'Semua font telah di-outline (Ctrl+Shift+O / Ctrl+Q)',
      'Semua gambar raster berstatus Linked/Embedded 300 DPI CMYK',
      'Tersedia tanda potong (crop marks) dan bleed 3mm',
      'Barcode dan nomor izin (P-IRT/BPOM) dapat di-scan dengan jelas',
    ],
    tipsTitle: 'Kunci Desainer Grafis Profesional',
    tipsContent: 'Desain yang baik bukan yang paling ramai ornamennya, melainkan yang paling fungsional dan sukses menyampaikan pesan produk ke audiens target.',
  },

  '/pengalaman/pembelajaran-rpl/': {
    badge: 'Standar Software Engineering',
    boxTitle: 'Kultur Koding & Standar Web Development Modern di Saka',
    boxSubtitle: 'Praktik koding nyata yang diajarkan pada siswa RPL dan Teknik Informatika:',
    templateCode: `[KULTUR KODING DIVISI WEB & TEKNOLOGI SAKA]

1. Version Control & Git Flow:
- Main Branch: Production-ready code, hanya menerima merge dari staging
- Feature Branch: feat/nama-fitur (contoh: feat/navbar-responsive)
- Commit Message: Mengikuti Conventional Commits
  Format: <tipe>: <deskripsi singkat>
  Contoh: feat: tambahkan validasi form pendaftaran siswa
          fix: perbaiki alignment logo mitra pada tampilan mobile

2. Kualitas Kode & Arsitektur:
- Semantic HTML5: Wajib menggunakan tag header, nav, main, section, footer
- Responsive First: Layout wajib sempurna di mobile (375px), tablet (768px), dan desktop (1280px)
- Performance First: Gambar wajib format WebP/AVIF dengan width/height eksplisit
- Core Web Vitals: Target skor Google Lighthouse >= 90 pada Performance, SEO, dan Accessibility

3. Code Review & Mentorship:
- Setiap Pull Request (PR) diperiksa langsung oleh mentor teknis
- Pembahasan refactoring kode agar modular, efisien, dan mudah dirawat tim`,
    keyPointsTitle: 'Fondasi Teknis yang Diajarkan',
    keyPoints: [
      {
        icon: 'bi-git text-danger',
        title: 'Penguasaan Git & GitHub',
        desc: 'Siswa diajarkan mengelola branch, resolve conflict, dan push/pull kode secara kolaboratif dalam tim.',
      },
      {
        icon: 'bi-speedometer2 text-success',
        title: 'Optimasi Web Speed',
        desc: 'Memahami cara memangkas render-blocking assets, font display swap, dan lazy-loading media.',
      },
      {
        icon: 'bi-shield-lock-fill text-primary',
        title: 'Etika Koding & Keamanan',
        desc: 'Pencegahan celah XSS, sanitasi input formulir, dan penanganan data secara aman dan etis.',
      },
    ],
    checklistTitle: 'Checklist Sebelum Submit Pull Request',
    checklists: [
      'Kode telah lolos uji coba tanpa error console',
      'Tampilan responsif di semua ukuran layar browser',
      'Menggunakan semantic tag dan alt text pada seluruh gambar',
      'Commit message jelas dan deskriptif',
    ],
    tipsTitle: 'Kunci Belajar Koding Pemula',
    tipsContent: 'Jangan hanya copy-paste solusi dari AI atau internet. Pahami baris demi baris mengapa kode tersebut bekerja agar mental problem solving Anda terbentuk kuat.',
  },

  '/pengalaman/testimoni-mentor/': {
    badge: 'Wawasan Praktisi Senior',
    boxTitle: 'Karakter Peserta Magang Terbaik Menurut Evaluasi Mentor',
    boxSubtitle: 'Rangkuman catatan pembimbing industri terhadap sikap siswa yang cepat berkembang:',
    keyPointsTitle: '3 Karakter Emas Penentu Nilai A',
    keyPoints: [
      {
        icon: 'bi-megaphone-fill text-primary',
        title: 'Komunikasi Proaktif Saat Buntu',
        desc: 'Jika bingung atau mentok lebih dari 20 menit, segera bertanya ke mentor. Jangan diam pura-pura paham lalu tugas tidak selesai.',
      },
      {
        icon: 'bi-heart-pulse-fill text-danger',
        title: 'Menerima Kritik Sebagai Bahan Belajar',
        desc: 'Memandang koreksi mentor sebagai peluang emas menyerap ilmu industri, bukan sebagai serangan personal.',
      },
      {
        icon: 'bi-lightning-charge-fill text-warning',
        title: 'Inisiatif Mencari Solusi Mandiri',
        desc: 'Mencoba membaca dokumentasi atau mencari referensi terlebih dahulu sebelum berkonsultasi ke mentor.',
      },
    ],
    checklistTitle: 'Standar Sikap Kerja Harian',
    checklists: [
      'Mengucapkan salam dan bersikap ramah kepada seluruh tim kantor',
      'Menjaga kebersihan dan kerapian meja kerja masing-masing',
      'Tidak bermain game atau medsos pribadi di saat jam kerja aktif',
      'Selalu konfirmasi pemahaman brief sebelum mengeksekusi tugas',
    ],
    tipsTitle: 'Pesan Mentor untuk Calon Siswa Magang',
    tipsContent: 'Kami di Saka tidak mencari siswa yang sudah jenius sempurna. Kami mencari siswa yang punya kemauan keras untuk belajar, jujur, dan berattitude santun.',
  },

  '/pengalaman/galeri/': {
    badge: 'Dokumentasi Ekosistem',
    boxTitle: 'Suasana & Fasilitas Nyata Tempat Belajar PKL di Saka Malang',
    boxSubtitle: 'Gambaran lingkungan kantor yang didesain hangat, modern, dan kondusif:',
    keyPointsTitle: 'Fasilitas Penunjang yang Disediakan',
    keyPoints: [
      {
        icon: 'bi-display text-primary',
        title: 'Workstation & Meja Luas',
        desc: 'Meja kerja ergonomis yang nyaman untuk meletakkan laptop, mousepad, dan buku catatan kerja.',
      },
      {
        icon: 'bi-wifi text-success',
        title: 'Internet Fiber Optic Berkecepatan Tinggi',
        desc: 'Koneksi internet stabil tanpa kuota untuk riset materi, download asset kreatif, dan push repo.',
      },
      {
        icon: 'bi-camera text-info',
        title: 'Studio Foto & Lighting Terpadu',
        desc: 'Akses ke peralatan foto produk: softbox lighting, backdrop studio, tripod, dan properti foto.',
      },
      {
        icon: 'bi-cup-straw text-warning',
        title: 'Pantry & Air Minum Galon Gratis',
        desc: 'Fasilitas dispenser air minum panas/dingin gratis untuk seluruh peserta magang setiap hari.',
      },
    ],
    checklistTitle: 'Perlengkapan yang Disarankan Dibawa Sendiri',
    checklists: [
      'Laptop pribadi beserta charger untuk efisiensi penugasan harian',
      'Mouse eksternal dan mousepad agar lebih leluasa saat mengoperasikan software',
      'Headphone/earphone untuk keperluan preview audio video editing',
      'Buku jurnal/logbook fisik dari sekolah untuk paraf mingguan',
    ],
    tipsTitle: 'Kenyamanan Belajar',
    tipsContent: 'Suasana kantor dibuat ramah anak muda tanpa sekat kaku hierarki agar peserta merasa nyaman berdiskusi dan mencurahkan kreativitas terbaiknya.',
  },

  // =========================================================================
  // INFO PKL (B9) - TAMBAHAN LENGKAP
  // =========================================================================
  '/info-pkl/cara-mencari/': {
    badge: 'Panduan Strategis',
    boxTitle: 'Metodologi 5 Langkah Mencari Tempat PKL yang Relevan & Kredibel',
    boxSubtitle: 'Langkah taktis agar siswa SMK & mahasiswa tidak salah memilih tempat magang:',
    templateCode: `[TIMELINE & STRATEGI MENCARI TEMPAT PKL]

H-90 (3 Bulan Sebelum Magang):
- Petakan 5 perusahaan target yang memiliki divisi sesuai jurusan keahlian.
- Cek legalitas, portofolio karya, dan akun media sosial perusahaan.
- Siapkan draf Curriculum Vitae (CV) dan kumpulkan karya portofolio kejuruan.

H-60 (2 Bulan Sebelum Magang):
- Ajukan Surat Pengantar Resmi dari BKK Sekolah / Fakultas Kampus.
- Hubungi narahubung/HRD perusahaan via WhatsApp resmi dengan bahasa santun.
- Kirimkan berkas lamaran lengkap (Surat Lamaran + Surat Pengantar + CV + Portofolio).

H-30 (1 Bulan Sebelum Magang):
- Konfirmasi kepastian kuota penerimaan dan jadwal wawancara (bila ada).
- Minta Surat Balasan Penerimaan resmi dari industri untuk diserahkan ke pihak sekolah.

H-7 (1 Minggu Sebelum Hari Pertama):
- Siapkan seragam sekolah/baju kerja rapi, kelengkapan laptop, dan logbook.
- Cek rute transportasi menuju lokasi kantor agar tidak terlambat di hari pertama.`,
    keyPointsTitle: '5 Ciri Tempat PKL yang Layak Dipilih',
    keyPoints: [
      {
        icon: 'bi-person-check-fill text-success',
        title: 'Memiliki Mentor Pembimbing Khusus',
        desc: 'Tersedia staf/praktisi yang ditugaskan membimbing dan mengevaluasi karya siswa secara berkala.',
      },
      {
        icon: 'bi-diagram-3-fill text-primary',
        title: 'Penugasan Relevan dengan Jurusan',
        desc: 'Siswa DKV mengerjakan desain, RPL koding, Pemasaran promosi—bukan disuruh sekadar bersih-bersih kantor.',
      },
      {
        icon: 'bi-award-fill text-warning',
        title: 'Memberikan Sertifikat Resmi',
        desc: 'Perusahaan bersedia mengisi rubrik penilaian sekolah dan menerbitkan sertifikat industri resmi.',
      },
    ],
    checklistTitle: 'Checklist Berkas Pengajuan',
    checklists: [
      'Surat Pengantar dari BKK Sekolah / Surat Rekomendasi Kampus',
      'Surat Lamaran Magang yang ditujukan spesifik ke perusahaan target',
      'CV 1 halaman yang memuat keahlian software dan data kontak aktif',
      'Link portofolio online (PDF Google Drive atau Behance/GitHub)',
    ],
    tipsTitle: 'Hindari Mendaftar Terlalu Mepet',
    tipsContent: 'Kuota tempat magang berkualitas di Malang sangat cepat penuh. Daftarkan diri Anda minimal 2 hingga 3 bulan sebelum tanggal mulai magang.',
  },

  '/info-pkl/pkl-berbayar/': {
    badge: 'Regulasi & Transparansi',
    boxTitle: 'Mengenal Kebijakan Uang Saku & Nilai Tambah Nyata dalam PKL',
    boxSubtitle: 'Ulasan objektif dan transparan mengenai skema benefit magang vokasi:',
    keyPointsTitle: 'Dasar Aturan & Nilai Tambah Hakiki',
    keyPoints: [
      {
        icon: 'bi-journal-bookmark-fill text-primary',
        title: 'Regulasi Kurikulum Vokasi',
        desc: 'Berdasarkan Permendikbud, PKL SMK berstatus proses pembelajaran kurikuler resmi di dunia kerja, bukan hubungan perburuhan tenaga kerja.',
      },
      {
        icon: 'bi-gift-fill text-success',
        title: 'Benefit Non-Finansial yang Signifikan',
        desc: 'Akses fasilitas studio gratis, bimbingan praktisi 1-on-1, WiFi kantor gratis, dan portofolio komersial bernilai jual tinggi.',
      },
      {
        icon: 'bi-star-fill text-warning',
        title: 'Peluang Rekrutmen Karier',
        desc: 'Peserta yang menunjukkan kinerja dan etika luar biasa sering kali ditawari peluang kerja lepas (freelance) atau kontrak karyawan.',
      },
    ],
    checklistTitle: 'Keuntungan Nyata Magang di Saka',
    checklists: [
      'Bebas biaya pendaftaran dan operasional pembinaan (100% Gratis)',
      'Bimbingan langsung oleh praktisi industri berpengalaman',
      'Penggunaan fasilitas studio foto dan internet cepat tanpa biaya',
      'Sertifikat PKL industri dan portofolio riil penunjang masa depan',
    ],
    tipsTitle: 'Fokus pada Akuisisi Skill',
    tipsContent: 'Di usia sekolah dan kuliah pemula, fokuslah mengumpulkan skill nyata dan portofolio emas. Portofolio inilah yang akan menjadi tiket Anda mendapatkan gaji tinggi di masa depan.',
  },

  '/info-pkl/online-vs-offline/': {
    badge: 'Analisis Komparatif',
    boxTitle: 'Perbandingan Praktik: PKL Tatap Muka (Offline) vs Daring (Online)',
    boxSubtitle: 'Memahami keunggulan dan tantangan dari dua model pelaksanaan magang:',
    keyPointsTitle: 'Perbandingan Aspek Kunci',
    keyPoints: [
      {
        icon: 'bi-building text-primary',
        title: 'Kultur Magang Offline di Saka',
        desc: 'Merasakan atmosfer kantor nyata, belajar komunikasi tatap muka, asistensi langsung di meja mentor, dan memperluas koneksi pertemanan lintas sekolah.',
      },
      {
        icon: 'bi-laptop text-info',
        title: 'Tantangan Model Online',
        desc: 'Komunikasi rawan miskomunikasi, sulit konsultasi teknis cepat, dan minim pengalaman dinamika kerja tim secara langsung.',
      },
      {
        icon: 'bi-shield-check text-success',
        title: 'Kesiapan Mental Kerja',
        desc: 'Magang tatap muka terbukti 3x lebih efektif membentuk kedisiplinan jam kerja dan etika profesional siswa.',
      },
    ],
    checklistTitle: 'Mengapa Offline Lebih Direkomendasikan di Saka?',
    checklists: [
      'Tersedia alat studio dan printer yang hanya bisa dipelajari secara fisik',
      'Mentor dapat langsung mencontohkan teknik penggunaan tools di layar',
      'Mendapat pengalaman berinteraksi dengan berbagai klien industri nyata',
      'Membangun ikatan persahabatan yang kuat dengan rekan magang lainnya',
    ],
    tipsTitle: 'Rekomendasi Terbaik',
    tipsContent: 'Bagi siswa yang berdomisili di Malang atau luar kota yang sanggup ngekos, pilihlah skema tatap muka untuk hasil pembelajaran maksimal.',
  },

  '/info-pkl/pkl-di-umkm/': {
    badge: 'Karakter Ekosistem',
    boxTitle: 'Kelebihan Magang di Agensi Digital Kreatif & Ekosistem UMKM',
    boxSubtitle: 'Mengapa agensi memberikan ruang belajar yang jauh lebih luas bagi siswa magang:',
    keyPointsTitle: 'Keuntungan Belajar di Agensi Digital',
    keyPoints: [
      {
        icon: 'bi-stars text-warning',
        title: 'Dilibatkan Langsung dalam Proyek Riil',
        desc: 'Di perusahaan korporat raksasa anak magang kerap hanya disuruh fotokopi. Di agensi, Anda langsung memegang proyek desain dan konten nyata.',
      },
      {
        icon: 'bi-cpu-fill text-primary',
        title: 'Spektrum Keterampilan Lebih Luas',
        desc: 'Anda tidak terkungkung pada 1 tugas monoton; Anda bisa belajar alur desain, riset pasar, hingga finishing cetak sekaligus.',
      },
      {
        icon: 'bi-chat-dots-fill text-success',
        title: 'Dekat dengan Pimpinan & Praktisi',
        desc: 'Struktur tim yang ramping memungkinkan Anda berdiskusi santai setiap hari dengan mentor dan pimpinan tanpa birokrasi berbelit.',
      },
    ],
    checklistTitle: 'Keahlian Multidisiplin yang Didapat',
    checklists: [
      'Keahlian teknis software kreatif (Adobe, Figma, CapCut)',
      'Pemahaman proses bisnis dari penawaran harga hingga produksi',
      'Keterampilan komunikasi presentasi karya kepada tim',
      'Kesiapan mental beradaptasi cepat dengan tren pasar digital',
    ],
    tipsTitle: 'Maksimalkan Ruang Belajar',
    tipsContent: 'Manfaatkan kesempatan di agensi untuk mencoba berbagai peran penugasan agar Anda menemukan minat spesialisasi karier Anda.',
  },

  '/info-pkl/startup-vs-perusahaan/': {
    badge: 'Panduan Keputusan',
    boxTitle: 'Memilih Lingkungan Magang: Startup & Agensi Rintisan vs Korporasi',
    boxSubtitle: 'Perbandingan objektif iklim kerja untuk menentukan wadah belajar terbaik:',
    keyPointsTitle: 'Matriks Perbandingan Singkat',
    keyPoints: [
      {
        icon: 'bi-rocket-takeoff-fill text-danger',
        title: 'Startup & Agensi Kreatif',
        desc: 'Ritme kerja cepat, fleksibel, minim birokrasi, penugasan bervariasi, dan karya magang langsung terlihat dampaknya pada bisnis klien.',
      },
      {
        icon: 'bi-buildings-fill text-primary',
        title: 'Korporasi Besar / BUMN',
        desc: 'Struktur organisasi mapan, SOP kaku, namun siswa magang sering dibatasi aksesnya ke proyek inti karena faktor kerahasiaan data.',
      },
      {
        icon: 'bi-gem text-success',
        title: 'Nilai Portofolio yang Dihasilkan',
        desc: 'Karya nyata beredar komersial dari agensi justru sering kali lebih memikat recruiter kerja daripada surat magang korporat tanpa portofolio.',
      },
    ],
    checklistTitle: 'Cocokkan dengan Gaya Belajar Anda',
    checklists: [
      'Pilih agensi jika Anda suka tantangan kreatif dan ingin pegang proyek nyata',
      'Pilih agensi jika Anda ingin bimbingan akrab tanpa sekat kaku',
      'Pastikan perusahaan memiliki legalitas resmi dan izin operasional jelas',
      'Cek ulasan dan testimoni alumni magang sebelumnya',
    ],
    tipsTitle: 'Kualitas Magang Ditentukan oleh Karya',
    tipsContent: 'Saat melamar pekerjaan pertama nanti, HRD akan bertanya: "Apa yang pernah kamu buat?", bukan sekadar nama besar logo perusahaan tempat magang Anda.',
  },

  '/info-pkl/mbkm-vs-pkl-smk/': {
    badge: 'Skema Kampus vs Vokasi',
    boxTitle: 'Perbedaan Magang MBKM Mahasiswa vs PKL Siswa SMK',
    boxSubtitle: 'Panduan teknis penyelarasan dokumen akademik kampus dan sekolah di Saka:',
    templateCode: `[MATRIKS PERBEDAAN SKEMA MBKM vs PKL SMK]

1. Aspek Peserta & Jenjang:
- PKL SMK: Siswa Kelas XI atau XII SMK (Usia 16-18 tahun)
- MBKM Kampus: Mahasiswa D3 / D4 / S1 (Semester 5 ke atas)

2. Tujuan & Bobot Akademik:
- PKL SMK: Memenuhi jam kurikulum kejuruan (480-800 jam pelajaran)
- MBKM Kampus: Konversi 20 SKS mata kuliah perkuliahan

3. Dokumen Persyaratan Masuk:
- PKL SMK: Surat Pengantar BKK Sekolah, Rekomendasi Jurusan, Jurnal Fisik
- MBKM: Surat Rekomendasi Dekan/Kaprodi, SPTJM, Form Learning Agreement

4. Output Akhir & Evaluasi:
- PKL SMK: Rapor Nilai Magang Vokasi + Ujian Sidang PKL Sekolah
- MBKM: Laporan Akhir Konversi SKS + Logbook Harian + Evaluasi Capstone`,
    keyPointsTitle: 'Kesiapan Penerimaan Saka Malang',
    keyPoints: [
      {
        icon: 'bi-mortarboard-fill text-primary',
        title: 'Terbuka untuk Jenjang SMK & Kuliah',
        desc: 'Saka Malang secara resmi menerima baik peserta didik SMK maupun mahasiswa program magang mandiri perguruan tinggi.',
      },
      {
        icon: 'bi-file-earmark-check-fill text-success',
        title: 'Legitimasi Berkas Akademik',
        desc: 'Perusahaan bersedia menandatangani formulir evaluasi, learning agreement, dan logbook konversi SKS kampus.',
      },
    ],
    checklistTitle: 'Dokumen Tambahan Mahasiswa MBKM',
    checklists: [
      'Formulir Konversi SKS / Learning Agreement dari Prodi Kampus',
      'Surat Izin Magang Mandiri bermeterai (bila disyaratkan kampus)',
      'Proposal rencana studi kasus magang atau proyek capstone',
      'Daftar kompetensi mata kuliah yang ingin dikonversikan',
    ],
    tipsTitle: 'Koordinasi Kaprodi Kampus',
    tipsContent: 'Sebelum mulai magang, konsultasikan draf Learning Agreement kepada Dosen Pembimbing Akademik agar proses konversi 20 SKS berjalan mulus.',
  },

  '/info-pkl/kesalahan-mencari/': {
    badge: 'Panduan Antisipasi',
    boxTitle: '5 Kesalahan Fatal Saat Mencari Tempat PKL & Solusinya',
    boxSubtitle: 'Hindari kesalahan umum yang sering menyebabkan berkas lamaran ditolak:',
    keyPointsTitle: 'Daftar Kesalahan & Cara Menghindarinya',
    keyPoints: [
      {
        icon: 'bi-x-circle-fill text-danger',
        title: '1. Mengajukan Terlalu Mepet (H-7)',
        desc: 'Banyak siswa baru bingung mencari tempat 1 minggu sebelum jadwal. Solusi: Mulai ajukan berkas 2-3 bulan sebelumnya karena kuota industri terbatas.',
      },
      {
        icon: 'bi-x-circle-fill text-danger',
        title: '2. Surat Lamaran Copy-Paste Salah Nama',
        desc: 'Menulis nama perusahaan lain karena malas mengedit draf. Solusi: Teliti periksa nama pimpinan, nama instansi, dan alamat sebelum dikirim.',
      },
      {
        icon: 'bi-x-circle-fill text-danger',
        title: '3. Chat WA Tidak Sopan (P, Ping, Tes)',
        desc: 'Mengirim pesan hanya "P", tanpa salam dan identitas. Solusi: Gunakan format salam resmi, sebutkan nama, asal sekolah, dan maksud tujuan dengan santun.',
      },
      {
        icon: 'bi-x-circle-fill text-danger',
        title: '4. Tidak Menyertakan Contoh Karya',
        desc: 'Melamar divisi desain atau koding tapi portofolionya kosong. Solusi: Lampirkan minimal 3-5 hasil tugas sekolah terbaik.',
      },
      {
        icon: 'bi-x-circle-fill text-danger',
        title: '5. Melamar ke Industri yang Tidak Relevan',
        desc: 'Jurusan RPL melamar ke bengkel las. Solusi: Pastikan perusahaan target memiliki divisi yang relevan dengan kurikulum keahlian Anda.',
      },
    ],
    checklistTitle: 'Checklist Sebelum Menekan Tombol Kirim Lamaran',
    checklists: [
      'Nama perusahaan dan alamat tujuan sudah 100% benar',
      'Nomor kontak WhatsApp dan email diri aktif serta dapat dihubungi',
      'File PDF CV dan Portofolio ukurannya di bawah 5MB (mudah dibuka)',
      'Surat pengantar sekolah sudah ditandatangani kepala sekolah / BKK',
    ],
    tipsTitle: 'Kesan Pertama Sangat Menentukan',
    tipsContent: 'Kerapian format dokumen dan kesopanan bahasa chat Anda adalah cerminan pertama karakter Anda di mata pimpinan industri.',
  },

  // =========================================================================
  // PERSIAPAN PKL (B10) - TAMBAHAN LENGKAP
  // =========================================================================
  '/persiapan-pkl/skill-anak-magang/': {
    badge: 'Fondasi Keterampilan',
    boxTitle: 'Hard Skill Dasar yang Dicari Industri dari Calon Anak Magang',
    boxSubtitle: 'Keahlian teknis awal per jurusan yang membuat proses belajar di Saka langsung melesat:',
    templateCode: `[PETA KEAHLIAN TEKNIS DASAR CALON PESERTA MAGANG]

1. Jurusan DKV / Desain Grafis:
- Menguasai Pen Tool, Shape Builder, dan Pathfinder di Illustrator
- Memahami konsep dasar Typography (Hierarchy, Kerning, Leading)
- Mengerti Color Space: RGB untuk digital dan CMYK untuk kebutuhan cetak

2. Jurusan TKJ / Jaringan Komputer:
- Pemahaman dasar TCP/IP, Subnetting, dan IP Addressing
- Konfigurasi dasar Access Point, router WiFi, dan crimping kabel LAN RJ-45
- Keterampilan troubleshooting hardware PC dan instalasi OS Windows/Linux

3. Jurusan RPL / Informatika:
- Struktur HTML5 Semantik dan dasar CSS3 / Flexbox / Grid
- Dasar logika pemrograman (JavaScript / PHP / Python dasar)
- Pemahaman fungsi perintah dasar Git (git status, commit, branch, push)

4. Jurusan Pemasaran / Bisnis Digital:
- Kemampuan menulis naskah copywriting pendek (Hook, Value, Call-to-Action)
- Pengoperasian dasar platform Canva dan CapCut untuk konten visual
- Pengenalan marketplace (Shopee, Tokopedia, TikTok Shop)`,
    keyPointsTitle: 'Standar Ekspektasi Mentor',
    keyPoints: [
      {
        icon: 'bi-lightbulb-fill text-warning',
        title: 'Bukan Menuntut Keahlian Master',
        desc: 'Mentor tidak mengharapkan Anda menjadi master berpengalaman, yang terpenting adalah mengenal fungsi dasar software jurusannya.',
      },
      {
        icon: 'bi-speedometer text-success',
        title: 'Kemauan Cepat Belajar',
        desc: 'Peserta yang memiliki dasar teknis akan jauh lebih cepat menyerap studi kasus proyek industri nyata.',
      },
    ],
    checklistTitle: 'Checklist Pengujian Diri Sebelum Masuk',
    checklists: [
      'Dapat mengoperasikan software utama jurusannya dengan lancar',
      'Memahami cara menyimpan file dengan format baku industri (.AI, .PSD, .PDF, .ZIP)',
      'Memiliki akun Google Drive aktif untuk pengumpulan tugas',
      'Mampu mengetik dengan kecepatan wajar dan teliti',
    ],
    tipsTitle: 'Latihan Mandiri 1 Jam Tiap Hari',
    tipsContent: 'Sebelum hari pertama magang, luangkan waktu 1 jam setiap hari untuk melatih shortcut software desain atau koding agar jari Anda terbiasa lincah.',
  },

  '/persiapan-pkl/soft-skill/': {
    badge: 'Etika & Sikap Kerja',
    boxTitle: 'Soft Skill Utama Penunjang Keberhasilan Magang di Industri',
    boxSubtitle: 'Sikap kerja unggul yang membedakan anak magang biasa dengan talenta berprestasi:',
    keyPointsTitle: '4 Pilar Soft Skill Prioritas',
    keyPoints: [
      {
        icon: 'bi-clock-history text-primary',
        title: '1. Punctuality (Kedisiplinan Waktu)',
        desc: 'Hadir sebelum jam 08:00 WIB, menyelesaikan tugas sesuai deadline, dan memberi kabar terlebih dahulu jika ada kendala mendesak.',
      },
      {
        icon: 'bi-chat-left-heart-fill text-success',
        title: '2. Communicative (Komunikasi Santun)',
        desc: 'Menyapa tim kantor, berani menyampaikan progres kerja, dan menggunakan bahasa yang sopan saat berkirim pesan.',
      },
      {
        icon: 'bi-shield-check text-warning',
        title: '3. Accountability (Tanggung Jawab Penuh)',
        desc: 'Menjaga kerahasiaan data proyek klien, merawat fasilitas kantor, dan mengakui kesalahan bila berbuat keliru untuk segera diperbaiki.',
      },
      {
        icon: 'bi-graph-up-arrow text-danger',
        title: '4. Growth Mindset (Haus Belajar)',
        desc: 'Tidak gampang menyerah saat menghadapi revisi rumit dan selalu bersemangat mencoba teknologi baru.',
      },
    ],
    checklistTitle: 'Etiket Komunikasi di Lingkungan Saka',
    checklists: [
      'Ucapkan "Tolong" saat meminta bantuan dan "Terima Kasih" setelahnya',
      'Jangan memotong pembicaraan mentor saat sedang memberi instruksi',
      'Fokus mendengarkan dan catat poin-poin penting pada buku saku',
      'Simpan ponsel pada mode hening (vibrate) selama jam kerja berlangsung',
    ],
    tipsTitle: 'Skill Teknis Membuka Pintu, Soft Skill Menentukan Masa Depan',
    tipsContent: 'Perusahaan kerap kali merekrut karyawan baru bukan karena nilai sekolahnya yang paling tinggi, melainkan karena attitudenya yang paling santun dan bisa diandalkan.',
  },

  '/persiapan-pkl/belajar-seo/': {
    badge: 'Kurikulum Digital Marketing',
    boxTitle: 'Dasar Belajar Search Engine Optimization (SEO) untuk Pemula',
    boxSubtitle: 'Fondasi cara kerja mesin pencari Google yang dipelajari di divisi web & marketing Saka:',
    templateCode: `[BLUEPRINT ON-PAGE SEO PEMULA DI SAKA MALANG]

1. Riset Kata Kunci (Keyword Research):
- Identifikasi kata kunci dengan Search Intent jelas (contoh: "tempat pkl dkv di malang")
- Analisis Long-Tail Keyword: lebih spesifik, persaingan lebih rendah, konversi tinggi
- Perhatikan Volume Pencarian dan Search Difficulty

2. Struktur Heading & Konten:
- H1: Hanya 1 per halaman, wajib memuat kata kunci utama di depan
- H2 & H3: Memecah topik menjadi sub-pembahasan logis dan mudah dibaca
- First Paragraph: Tempatkan keyword utama secara natural di 100 kata pertama
- Bullet Points & Tables: Meningkatkan readability bagi pembaca manusia

3. Optimasi Metadata & Visual:
- Title Tag: 50 - 60 karakter, memuat brand dan keunggulan utama
- Meta Description: 140 - 155 karakter persuasif dengan ajakan bertindak (CTA)
- Image Alt Text: Wajib deskriptif dan relevan dengan gambar (bukan keyword stuffing)
- URL Slug: Singkat, bersih, huruf kecil, dan dipisahkan tanda hubung (-)

4. Core Web Vitals & Kecepatan:
- Optimasi gambar ke format modern WebP dengan kompresi terukur
- Pastikan tampilan ramah seluler (Mobile-Friendly Responsive)`,
    keyPointsTitle: 'Mengapa Belajar SEO Sangat Bernilai?',
    keyPoints: [
      {
        icon: 'bi-graph-up text-success',
        title: 'Keahlian Bernilai Jual Tinggi',
        desc: 'Hampir seluruh bisnis modern membutuhkan traffic organik dari Google untuk mendatangkan pelanggan tanpa harus membayar iklan terus-menerus.',
      },
      {
        icon: 'bi-search text-primary',
        title: 'Praktik di Proyek Nyata',
        desc: 'Di Saka, Anda tidak hanya belajar teori SEO, tapi ikut mengoptimasi halaman web komersial yang bersaing langsung di Google.',
      },
    ],
    checklistTitle: 'Checklist Audit On-Page Artikel Baru',
    checklists: [
      'Hanya ada satu tag H1 di seluruh halaman',
      'Title tag tidak terpotong di hasil pencarian Google (< 60 karakter)',
      'Meta description informatif dan menggugah minat klik audiens',
      'Semua file gambar memiliki atribut Alt Text deskriptif',
    ],
    tipsTitle: 'Tulis untuk Manusia Terlebih Dahulu',
    tipsContent: 'Algoritma Google modern mengutamakan konten yang bermanfaat bagi manusia nyata. Jangan pernah melakukan keyword stuffing yang merusak keterbacaan artikel.',
  },

  '/persiapan-pkl/pkl-jadi-karyawan/': {
    badge: 'Karier Pasca-Magang',
    boxTitle: 'Strategi Emas Mengubah Status Siswa PKL Menjadi Karyawan',
    boxSubtitle: 'Rangkuman langkah taktis yang terbukti membuat anak magang direkrut perusahaan:',
    keyPointsTitle: '4 Faktor Kunci yang Dilirik Pimpinan',
    keyPoints: [
      {
        icon: 'bi-trophy-fill text-warning',
        title: '1. Konsisten Memberikan Output di Atas Rata-rata',
        desc: 'Tidak sekadar menggugurkan kewajiban. Jika diminta 3 variasi desain, berikan 4 variasi terbaik dengan argumentasi konsep yang matang.',
      },
      {
        icon: 'bi-calendar-check-fill text-primary',
        title: '2. Jam Terbang Kehadiran Tanpa Cela',
        desc: 'Tingkat kehadiran 100%, selalu on-time, dan tidak pernah bolos tanpa surat keterangan resmi membuktikan Anda layak dipercaya.',
      },
      {
        icon: 'bi-people-fill text-success',
        title: '3. Menyatu Erat dengan Budaya Tim',
        desc: 'Mudah bergaul, kooperatif saat proyek genting, dan ringan tangan membantu rekan tim yang kesulitan.',
      },
      {
        icon: 'bi-chat-dots-fill text-info',
        title: '4. Sampaikan Minat Karier Menjelang Akhir Magang',
        desc: 'Pada H-14 sebelum magang berakhir, mintalah sesi evaluasi dengan pimpinan dan utarakan ketertarikan Anda untuk berkontribusi lebih lanjut.',
      },
    ],
    checklistTitle: 'Roadmap Mempersiapkan Diri Dilirik Perusahaan',
    checklists: [
      'Dokumentasikan seluruh pencapaian dan proyek yang pernah Anda kerjakan',
      'Susun portofolio komprehensif yang menampilkan peran spesifik Anda',
      'Minta surat rekomendasi resmi dan ulasan kerja dari mentor pembimbing',
      'Jaga komunikasi silaturahmi dengan staf kantor pasca kelulusan sekolah',
    ],
    tipsTitle: 'Sikap Menentukan Nilai Kontrak',
    tipsContent: 'Banyak alumni Saka yang ditarik menjadi staf atau freelancer tetap karena membuktikan diri punya dedikasi tinggi dan inisiatif tanpa harus disuruh berkali-kali.',
  },

  // =========================================================================
  // PKL MALANG (B11) - TAMBAHAN LENGKAP
  // =========================================================================
  '/pkl-malang/daftar-per-jurusan/': {
    badge: 'Direktori Kejuruan Malang',
    boxTitle: 'Pemetaan Kebutuhan Magang Kota Malang Berdasarkan Jurusan Vokasi',
    boxSubtitle: 'Daftar kompetensi kejuruan yang terserap aktif di ekosistem Saka Malang:',
    templateCode: `[PETA JURUSAN & PENEMPATAN DIVISI DI SAKA MALANG]

1. Desain Komunikasi Visual (DKV):
- Kebutuhan: Desain identitas brand, kemasan produk, materi promosi cetak, konten medsos
- Software Utama: Adobe Illustrator, Photoshop, Figma

2. Rekayasa Perangkat Lunak (RPL):
- Kebutuhan: Pengembangan front-end web modern, optimasi kecepatan, integrasi UI responsif
- Teknologi: Semantic HTML, CSS modern, Astro, Tailwind, Git

3. Teknik Komputer & Jaringan (TKJ):
- Kebutuhan: Maintenance infrastruktur LAN kantor, setup hardware studio, keamanan jaringan
- Kompetensi: Router Mikrotik, crimping kabel, konfigurasi workstation

4. Bisnis Digital & Pemasaran:
- Kebutuhan: Optimasi riset kata kunci SEO, riset tren TikTok/IG, manajemen marketplace
- Tools: Google Search Console, Google Trends, Canva, CapCut

5. Teknik Grafika & Produksi:
- Kebutuhan: Pra-cetak, pisah warna kemasan, sublimasi merchandise, finishing lipat
- Mesin: Printer indoor/outdoor, mesin press sublimasi, mesin laminasi`,
    keyPointsTitle: 'Kesesuaian Kurikulum dengan DUDI',
    keyPoints: [
      {
        icon: 'bi-check-circle-fill text-success',
        title: '100% Selaras Skema Kurikulum Merdeka',
        desc: 'Penugasan dirancang sinkron dengan Capaian Pembelajaran (CP) jurusan SMK dan MBKM perguruan tinggi.',
      },
      {
        icon: 'bi-award text-primary',
        title: 'Pengesahan Rapor Terperinci',
        desc: 'Nilai akhir dipecah per elemen kompetensi teknis dan non-teknis sesuai format resmi sekolah pengirim.',
      },
    ],
    checklistTitle: 'Pilihan Jalur Magang Sesuai Minat',
    checklists: [
      'Pilih Divisi Desain Grafis bila menggemari ilustrasi vektor dan branding',
      'Pilih Divisi SEO & Web bila berminat pada arsitektur web dan ranking Google',
      'Pilih Divisi Content Creator bila menyukai storytelling video dan tren media sosial',
      'Pilih Divisi Produksi Souvenir bila menyukai perakitan fisik merchandise',
    ],
    tipsTitle: 'Konsultasi Penempatan',
    tipsContent: 'Bila Anda ragu memilih divisi mana yang paling cocok, konsultasikan karya portofolio Anda ke admin Saka untuk mendapatkan rekomendasi penempatan terbaik.',
  },

  '/pkl-malang/it-jaringan/': {
    badge: 'Sektor Teknologi Malang',
    boxTitle: 'Peluang & Standar Magang Bidang IT, Web & Jaringan di Kota Malang',
    boxSubtitle: 'Malang sebagai kota pendidikan dan poros talenta digital Jawa Timur:',
    keyPointsTitle: 'Kebutuhan Sektor IT Malang',
    keyPoints: [
      {
        icon: 'bi-hdd-network-fill text-primary',
        title: 'Infrastruktur Jaringan & Cloud',
        desc: 'Pemeliharaan konektivitas jaringan kantor, manajemen bandwidth, dan stabilitas server local development.',
      },
      {
        icon: 'bi-code-square text-success',
        title: 'Pengembangan Web Cepat & Aksesibel',
        desc: 'Industri digital Malang menuntut website yang tidak hanya cantik, tapi ringan dibuka di koneksi smartphone Indonesia.',
      },
      {
        icon: 'bi-cpu text-info',
        title: 'Dukungan Teknis Studio Foto',
        desc: 'Integrasi hardware kamera digital ke PC untuk pemotretan live tethering real-time katalog produk.',
      },
    ],
    checklistTitle: 'Keahlian Teknis Pendukung yang Dibutuhkan',
    checklists: [
      'Mampu melakukan instalasi dan setup sistem operasi tanpa kendala',
      'Memahami dasar konfigurasi IP statis dan pengujian ping jaringan',
      'Mengenal struktur repositori Git dan kolaborasi berbasis cloud',
      'Memahami pemeliharaan hardware dan kebersihan komponen elektronik',
    ],
    tipsTitle: 'Praktik di Lingkungan Server Nyata',
    tipsContent: 'Di Saka, siswa IT mempraktikkan konfigurasi jaringan nyata di kantor dan berkontribusi langsung pada deployment web proyek yang diakses publik.',
  },

  '/pkl-malang/marketing/': {
    badge: 'Pemasaran Digital Lokal',
    boxTitle: 'Peluang Magang Pemasaran Digital & Bisnis Kreatif di Malang',
    boxSubtitle: 'Dinamika ekosistem promosi online, marketplace, dan periklanan di Malang:',
    keyPointsTitle: 'Fokus Pembelajaran Pemasaran di Saka',
    keyPoints: [
      {
        icon: 'bi-bullseye text-danger',
        title: 'Riset Audiens & Tren Konten',
        desc: 'Memetakan apa yang sedang dicari masyarakat melalui Google Trends dan analitik TikTok untuk materi kampanye promosi.',
      },
      {
        icon: 'bi-shop text-primary',
        title: 'Pengelolaan Marketplace UMKM',
        desc: 'Optimasi judul produk, foto cover berstandar konversi tinggi, deskripsi persuasif, dan riset harga kompetitor.',
      },
      {
        icon: 'bi-bar-chart-fill text-success',
        title: 'Analisis Performa Metrik',
        desc: 'Membaca data analitik tayangan, klik, conversion rate, dan interaksi audiens untuk perbaikan kampanye berikutnya.',
      },
    ],
    checklistTitle: 'Output Proyek yang Dikerjakan Divisi Marketing',
    checklists: [
      'Menyusun kalender konten bulanan untuk brand klien UMKM',
      'Menulis 5 artikel berorientasi SEO untuk meningkatkan traffic website',
      'Membuat naskah video pendek reels/tiktok yang memiliki hook kuat',
      'Melakukan audit katalog toko online dan menyempurnakan informasi produk',
    ],
    tipsTitle: 'Pemasaran Modern Berbasis Data',
    tipsContent: 'Pemasaran bukan sekadar menebak-nebak selera orang, melainkan menyajikan solusi yang tepat kepada orang yang sedang membutuhkannya melalui analisa data.',
  },

  '/pkl-malang/mahasiswa-luar-kota/': {
    badge: 'Panduan Perantau',
    boxTitle: 'Panduan Adaptasi & Tempat Tinggal Peserta Magang Perantau Luar Kota',
    boxSubtitle: 'Tips praktis bagi siswa/mahasiswa dari luar Malang yang ingin magang di Saka:',
    templateCode: `[PANDUAN LENGKAP PERANTAU PKL DI KOTA MALANG]

1. Lokasi Strategis Pencarian Kos:
- Wilayah Ideal: Cemorokandang, Madyopuro, Sawojajar, Kedungkandang
- Radius dari Kantor Saka: 500m s/d 2.5 km (5-10 menit perjalanan)
- Rentang Harga Kos Standar: Rp 400.000 - Rp 700.000 / bulan (kasur, lemari, WiFi, air)

2. Akses Transportasi:
- Sepeda Motor Pribadi: Sangat direkomendasikan, tersedia parkir kantor aman
- Ojek Online (Gojek / Maxim / Grab): Sangat mudah diakses dengan tarif hemat
- Angkutan Kota (Mikrolet): Tersedia trayek melintasi jalan protokol sekitar Sawojajar

3. Biaya Hidup & Makanan:
- Warung Makan / Warteg / Depot: Rp 12.000 - Rp 20.000 per porsi
- Air Minum: Gratis isi ulang sepuasnya di dispenser kantor Saka
- Cuci Baju (Laundry Kiloan): Rp 6.000 - Rp 8.000 per kg (waktu selesai 2 hari)

4. Cuaca & Kesehatan:
- Suhu Kota Malang relatif sejuk (19°C - 27°C), terutama di pagi dan malam hari
- Disarankan membawa jaket hangat, jas hujan, dan obat-obatan pribadi`,
    keyPointsTitle: 'Keuntungan Menjadi Perantau Magang',
    keyPoints: [
      {
        icon: 'bi-geo-alt-fill text-danger',
        title: 'Melatih Kemandirian Nyata',
        desc: 'Belajar mengatur anggaran keuangan, mencuci baju sendiri, dan disiplin bangun pagi tanpa dibangunkan orang tua.',
      },
      {
        icon: 'bi-people-fill text-primary',
        title: 'Relasi Pertemanan Lintas Daerah',
        desc: 'Bertemu rekan magang dari berbagai kota di Jawa Timur, Bali, dan daerah lainnya di studio Saka.',
      },
    ],
    checklistTitle: 'Checklist Perlengkapan Wajib Bawa Perantau',
    checklists: [
      'Jaket tebal dan jas hujan motor untuk musim hujan Malang',
      'Dokumen fisik identitas (KTP / Kartu Pelajar) dan berkas PKL asli',
      'Colokan kabel ekstensi (stopkontak roll) untuk di kos',
      'Perlengkapan ibadah dan obat-obatan pribadi',
    ],
    tipsTitle: 'Bantuan Rekomendasi Kos dari Admin',
    tipsContent: 'Bila Anda bingung mencari kos di sekitar kantor Saka, hubungi admin kami melalui WhatsApp untuk mendapatkan rekomendasi kos terdekat yang bersih dan aman.',
  },

  '/pkl-malang/magang-mahasiswa/': {
    badge: 'Riset Terapan Kampus',
    boxTitle: 'Panduan Magang Mandiri & Riset Terapan Mahasiswa di Saka Malang',
    boxSubtitle: 'Implementasi teori perkuliahan ke dalam proyek industri nyata dan capstone project:',
    templateCode: `[SKEMA MAGANG MAHASISWA PERGURUAN TINGGI DI SAKA]

1. Penyelarasan Studi Kasus & Skripsi / Tugas Akhir:
- Mahasiswa diperbolehkan mengangkat sistem kerja atau data non-rahasia di Saka sebagai topik riset Tugas Akhir / Skripsi.
- Topik yang Relevan: Optimasi UI/UX, Analisis Arsitektur SEO, Strategi Branding UMKM, Audit Performa Web.

2. Fasilitas Validasi Dokumen Akademik:
- Penandatanganan berkas resmi kampus: Logbook Mingguan, Laporan Kemajuan, Lembar Pengesahan Mitra.
- Dosen Pembimbing Lapangan (DPL) kampus dapat mengadakan sesi monitoring atau ujian evaluasi secara langsung maupun daring.

3. Standar Penugasan Khusus Mahasiswa:
- Diberikan porsi tanggung jawab memimpin mini-proyek atau mendampingi adik-adik siswa SMK (Co-Mentoring).
- Menyusun laporan studi kasus berbasis data kuantitatif / kualitatif.`,
    keyPointsTitle: 'Keunggulan Magang Mahasiswa di Saka',
    keyPoints: [
      {
        icon: 'bi-mortarboard text-primary',
        title: 'Validitas Konversi SKS Resmi',
        desc: 'Perusahaan memiliki badan hukum resmi yang memenuhi syarat verifikasi administrasi kampus.',
      },
      {
        icon: 'bi-file-earmark-bar-graph text-success',
        title: 'Data Riset Otentik',
        desc: 'Bebas dari rekayasa data karena mahasiswa menguji teori langsung pada studi kasus industri komersial nyata.',
      },
    ],
    checklistTitle: 'Checklist Berkas Pengajuan Magang Mahasiswa',
    checklists: [
      'Surat Pengantar Magang resmi dari Fakultas / Jurusan',
      'Curriculum Vitae (CV) akademik lengkap dengan link portfolio/proyek GitHub',
      'Draf Proposal Singkat (memuat target kompetensi dan rentang waktu magang)',
      'Formulir penilaian standar perguruan tinggi',
    ],
    tipsTitle: 'Dapatkan Rekomendasi Karier Profesional',
    tipsContent: 'Mahasiswa yang berkinerja unggul akan diberikan surat rekomendasi resmi berbobot tinggi dari pimpinan Saka untuk melamar kerja profesional pasca kelulusan sarjana.',
  },

  // =========================================================================
  // PROGRAM PKL (B4) - FASILITAS & TRAINING BERKALA
  // =========================================================================
  '/program-pkl/fasilitas/': {
    badge: 'Fasilitas Unggulan Saka',
    boxTitle: 'Fasilitas Belajar & Program Training Berkala Saka Malang',
    boxSubtitle: 'Komitmen kami: Peserta tidak hanya disuruh mengerjakan tugas, tetapi dibimbing intensif sampai bisa:',
    keyPointsTitle: 'Pilar Fasilitas Pembinaan Peserta PKL',
    keyPoints: [
      {
        icon: 'bi-mortarboard-fill text-primary',
        title: 'Training Berkala Terjadwal',
        desc: 'Pelatihan rutin seputar teknik software, workflow industri, dan tren terkini agar kompetensi kejuruan siswa meningkat pesat.',
      },
      {
        icon: 'bi-person-check-fill text-success',
        title: 'Dibimbing Sampai Bisa',
        desc: 'Tidak hanya disuruh mengerjakan tugas lalu ditinggal. Mentor mendampingi proses pengerjaan sampai peserta benar-benar paham dan percaya diri.',
      },
      {
        icon: 'bi-display text-info',
        title: 'Ruang Kerja & Internet Cepat',
        desc: 'Meja kerja kolaboratif ber-AC yang nyaman, koneksi internet fiber optic kecepatan tinggi, dan suasana studio yang kondusif.',
      },
      {
        icon: 'bi-camera text-warning',
        title: 'Studio Foto & Peralatan Terpadu',
        desc: 'Akses ke mini studio foto produk, properti, dan lighting profesional untuk praktik pemotretan katalog komersial nyata.',
      },
    ],
    checklistTitle: 'Daftar Fasilitas yang Diterima Setiap Peserta',
    checklists: [
      'Training berkala dan pembekalan materi kejuruan dari praktisi',
      'Bimbingan teknis intensif 1-on-1 (dibimbing sampai bisa)',
      'Meja kerja kelompok ber-AC dan WiFi kantor berkecepatan tinggi',
      'Dispenser air minum galon gratis dan area istirahat/musholla',
      'Akses studio fotografi produk dan perangkat uji kerja',
      'Sertifikat PKL resmi industri dan pengesahan nilai rapor sekolah',
    ],
    tipsTitle: 'Kultur Edukasi Tanpa Senioritas',
    tipsContent: 'Di Saka, Anda datang untuk belajar. Jika ada materi yang belum pernah diajarkan di sekolah, jangan ragu untuk bertanya karena mentor kami berkomitmen membimbing Anda dari nol sampai bisa.',
  },
};

export function getGuideSpecialContent(path: string): GuideSpecialContent | null {
  // Normalize path with trailing slash
  const normPath = path.endsWith('/') ? path : `${path}/`;
  return GUIDE_CONTENT[normPath] || null;
}
