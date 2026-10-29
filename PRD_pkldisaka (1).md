# PRD --- Website pkldisaka.com

**Versi:** 1.0\
**Tanggal penyusunan:** 27 Oktober 2026\
**Dokumen acuan:** `MASTER_CONTENT_BRIEF_DAN_INDEKS.md`

## 1. Ringkasan Produk

pkldisaka.com adalah website informasi dan penerimaan Praktik Kerja
Lapangan (PKL) yang menggabungkan halaman utama program PKL, informasi
jurusan dan divisi, pengalaman peserta, panduan dokumen, artikel edukasi
PKL, persiapan PKL, serta informasi PKL di Malang.

Implementasi harus mengikuti brief editorial dan indeks URL yang
disediakan. Dokumen tersebut mencakup **72 URL untuk kelompok B4--B11**,
dengan kalender target 26 Oktober 2026--17 Januari 2027. Tanggal di
kalender adalah target, bukan bukti bahwa halaman sudah diterbitkan.

## 2. Tujuan

1.  Menyajikan informasi PKL yang mudah ditemukan dan dipahami.
2.  Menjaga struktur halaman, URL, dan urutan topik sesuai indeks
    master.
3.  Memudahkan calon peserta menemukan program, jurusan/divisi, cara
    daftar, dokumen, dan kontak.
4.  Membangun struktur SEO teknis dan internal linking yang konsisten.
5.  Menjaga agar fakta perusahaan, status penerimaan, fasilitas, alumni,
    studi kasus, testimoni, dan hubungan kampus tidak dipublikasikan
    sebelum diverifikasi.

## 3. Batasan dan Prinsip Wajib

-   **Dokumen master adalah sumber acuan utama** untuk daftar URL,
    pengelompokan, dan kalender target.
-   Jangan mengganti slug, menghapus halaman, menggabungkan halaman,
    atau membuat URL baru tanpa persetujuan pemilik proyek.
-   Jangan mengarang status lowongan, kuota, fasilitas, alamat, jam
    kerja, koordinat, data alumni, testimoni, studi kasus, atau hubungan
    dengan institusi pendidikan.
-   Semua konten bertanda fakta yang belum terverifikasi harus ditahan
    dari publikasi atau diberi status editorial internal.
-   Kalender publikasi adalah target editorial, bukan tanggal terbit
    aktual.
-   Jangan menganggap markup terstruktur otomatis menghasilkan rich
    result Google.
-   Jika detail visual/brand belum tersedia, gunakan arahan desain pada
    `DESIGN.md` sebagai usulan implementasi, bukan fakta dari brief.

## 4. Pengguna Sasaran

-   Siswa SMK dan mahasiswa yang mencari tempat PKL/magang.
-   Calon peserta yang ingin mengetahui program, jurusan, divisi, proses
    seleksi, dan cara mendaftar.
-   Peserta yang membutuhkan panduan dokumen dan persiapan PKL.
-   Pengunjung yang mencari informasi PKL di Malang.
-   Guru, dosen, atau pihak institusi yang ingin memahami proses
    pengajuan PKL.

Segmen ini merupakan definisi kebutuhan produk untuk implementasi;
validasi lebih lanjut dapat dilakukan dengan pemilik website.

## 5. Kebutuhan Fungsional

### 5.1 Navigasi global

Sediakan navigasi yang mengarah ke kelompok halaman utama: - Beranda -
Lowongan PKL - Program PKL - Tentang - Cara Daftar - Jurusan - Divisi -
Pengalaman - Dokumen PKL - Info PKL - Persiapan PKL - PKL Malang - FAQ -
Kontak

Gunakan menu bertingkat/dropdown untuk kelompok dengan halaman anak.
Pada perangkat kecil, navigasi harus bisa dibuka dan ditutup dengan
keyboard maupun sentuhan.

### 5.2 Halaman dan konten

Setiap URL dalam indeks harus memiliki halaman tersendiri sesuai topik
dan search intent-nya. Halaman kategori berfungsi sebagai pengantar
serta indeks ke halaman anak. Halaman anak harus memiliki isi yang
spesifik, bukan salinan tipis dari halaman induk.

### 5.3 CTA

-   CTA utama untuk proses pendaftaran hanya boleh ditampilkan dengan
    instruksi, kontak, dan status penerimaan yang telah dikonfirmasi.
-   CTA kontak harus menggunakan kanal resmi yang diverifikasi pemilik
    website.
-   Jangan menampilkan tombol "Daftar sekarang", kuota, deadline, atau
    lowongan aktif jika statusnya belum dipastikan.
-   CTA internal dapat mengarah ke halaman cara daftar, FAQ, dokumen
    terkait, atau kontak sesuai konteks.

### 5.4 FAQ

FAQ harus terlihat oleh pengguna dan menjawab pertanyaan yang
benar-benar relevan pada halaman. FAQPage JSON-LD harus sesuai persis
dengan FAQ yang tampil. Jangan menambahkan jawaban tersembunyi hanya
untuk schema.

### 5.5 Galeri dan media

Gunakan foto/ilustrasi yang memiliki izin dan konteks yang benar. Foto
alumni, peserta, mentor, kantor, fasilitas, dan proyek tidak boleh
diberi keterangan yang menyiratkan fakta yang belum dikonfirmasi.

### 5.6 Kontak

Halaman kontak hanya boleh memuat alamat, nomor, email, jam operasional,
peta, dan tautan sosial yang diberikan serta diverifikasi oleh pemilik
website.

## 6. Arsitektur Informasi dan Daftar URL

Daftar di bawah wajib dipertahankan sesuai indeks master. Semua URL
harus menggunakan trailing slash sebagaimana ditetapkan.

### B4 --- Halaman utama dan informasi program

  ID      URL                            Target
  ------- ------------------------------ ------------
  B4-01   `/`                            16/11/2026
  B4-02   `/lowongan-pkl/`               17/11/2026
  B4-03   `/program-pkl/`                18/11/2026
  B4-04   `/tentang/`                    19/11/2026
  B4-05   `/cara-daftar/`                20/11/2026
  B4-06   `/program-pkl/fasilitas/`      21/11/2026
  B4-07   `/program-pkl/alur-seleksi/`   16/11/2026
  B4-08   `/faq/`                        17/11/2026
  B4-09   `/kontak/`                     18/11/2026

### B5 --- Jurusan

  ID      URL                              Target
  ------- -------------------------------- ------------
  B5-01   `/jurusan/`                      23/11/2026
  B5-02   `/jurusan/dkv/`                  24/11/2026
  B5-03   `/jurusan/tkj/`                  25/11/2026
  B5-04   `/jurusan/rpl/`                  26/11/2026
  B5-05   `/jurusan/bisnis-digital/`       27/11/2026
  B5-06   `/jurusan/pemasaran/`            28/11/2026
  B5-07   `/jurusan/teknik-grafika/`       23/11/2026
  B5-08   `/jurusan/teknik-informatika/`   24/11/2026
  B5-09   `/jurusan/manajemen/`            25/11/2026
  B5-10   `/jurusan/multimedia/`           26/11/2026

### B6 --- Divisi

  ID      URL                            Target
  ------- ------------------------------ ------------
  B6-01   `/divisi/`                     30/11/2026
  B6-02   `/divisi/digital-marketing/`   01/12/2026
  B6-03   `/divisi/seo-website/`         02/12/2026
  B6-04   `/divisi/social-media/`        03/12/2026
  B6-05   `/divisi/foto-video-produk/`   04/12/2026
  B6-06   `/divisi/content-creator/`     05/12/2026
  B6-07   `/divisi/desain-grafis/`       30/11/2026
  B6-08   `/divisi/produksi-souvenir/`   01/12/2026
  B6-09   `/divisi/packaging/`           02/12/2026

### B7 --- Pengalaman

  ID      URL                               Target
  ------- --------------------------------- ------------
  B7-01   `/pengalaman/`                    07/12/2026
  B7-02   `/pengalaman/cerita-alumni/`      08/12/2026
  B7-03   `/pengalaman/studi-kasus/`        09/12/2026
  B7-04   `/pengalaman/sehari-di-saka/`     10/12/2026
  B7-05   `/pengalaman/proyek-dkv/`         11/12/2026
  B7-06   `/pengalaman/pembelajaran-rpl/`   12/12/2026
  B7-07   `/pengalaman/testimoni-mentor/`   07/12/2026
  B7-08   `/pengalaman/galeri/`             08/12/2026

### B8 --- Dokumen PKL

  ID      URL                               Target
  ------- --------------------------------- ------------
  B8-01   `/dokumen-pkl/`                   14/12/2026
  B8-02   `/dokumen-pkl/surat-lamaran/`     15/12/2026
  B8-03   `/dokumen-pkl/surat-pengantar/`   16/12/2026
  B8-04   `/dokumen-pkl/cv-magang/`         17/12/2026
  B8-05   `/dokumen-pkl/portofolio-dkv/`    18/12/2026
  B8-06   `/dokumen-pkl/laporan-pkl/`       19/12/2026
  B8-07   `/dokumen-pkl/jurnal-harian/`     14/12/2026
  B8-08   `/dokumen-pkl/presentasi/`        15/12/2026
  B8-09   `/dokumen-pkl/surat-balasan/`     16/12/2026

### B9 --- Informasi PKL

  ID      URL                                  Target
  ------- ------------------------------------ ------------
  B9-01   `/info-pkl/`                         21/12/2026
  B9-02   `/info-pkl/cara-mencari/`            22/12/2026
  B9-03   `/info-pkl/pkl-vs-magang/`           23/12/2026
  B9-04   `/info-pkl/durasi-pkl/`              24/12/2026
  B9-05   `/info-pkl/pkl-berbayar/`            25/12/2026
  B9-06   `/info-pkl/online-vs-offline/`       26/12/2026
  B9-07   `/info-pkl/pkl-di-umkm/`             21/12/2026
  B9-08   `/info-pkl/startup-vs-perusahaan/`   22/12/2026
  B9-09   `/info-pkl/mbkm-vs-pkl-smk/`         23/12/2026
  B9-10   `/info-pkl/kesalahan-mencari/`       24/12/2026

### B10 --- Persiapan PKL

  ID       URL                                   Target
  -------- ------------------------------------- ------------
  B10-01   `/persiapan-pkl/`                     28/12/2026
  B10-02   `/persiapan-pkl/checklist/`           29/12/2026
  B10-03   `/persiapan-pkl/interview/`           30/12/2026
  B10-04   `/persiapan-pkl/chat-hrd/`            31/12/2026
  B10-05   `/persiapan-pkl/skill-anak-magang/`   01/01/2027
  B10-06   `/persiapan-pkl/soft-skill/`          02/01/2027
  B10-07   `/persiapan-pkl/tools-gratis/`        28/12/2026
  B10-08   `/persiapan-pkl/belajar-seo/`         29/12/2026
  B10-09   `/persiapan-pkl/pkl-jadi-karyawan/`   30/12/2026

### B11 --- PKL Malang

  ID       URL                                  Target
  -------- ------------------------------------ ------------
  B11-01   `/pkl-malang/`                       04/01/2027
  B11-02   `/pkl-malang/daftar-per-jurusan/`    05/01/2027
  B11-03   `/pkl-malang/it-jaringan/`           06/01/2027
  B11-04   `/pkl-malang/marketing/`             07/01/2027
  B11-05   `/pkl-malang/kota-vs-kabupaten/`     08/01/2027
  B11-06   `/pkl-malang/mahasiswa-luar-kota/`   09/01/2027
  B11-07   `/pkl-malang/biaya-hidup-kos/`       04/01/2027
  B11-08   `/pkl-malang/magang-mahasiswa/`      05/01/2027

**Catatan audit:** Indeks sumber menuliskan path file B10 dan B11 dengan
folder `B1/`. Jangan mengubah arsip sumber secara diam-diam; konfirmasi
dengan pengelola konten apakah penamaan folder itu memang disengaja atau
typo. URL situs di atas tetap mengikuti indeks.

## 7. Template Halaman

### 7.1 Halaman utama dan halaman konversi

-   Breadcrumb (kecuali beranda).
-   H1 tunggal yang jelas dan sesuai maksud halaman.
-   Ringkasan utama yang langsung menjawab kebutuhan pengunjung.
-   Bagian isi yang didukung fakta/dokumen.
-   CTA kontekstual yang sudah diverifikasi.
-   Tautan internal ke halaman lanjutan.
-   FAQ yang terlihat bila relevan.
-   Metadata SEO dan data terstruktur sesuai jenis halaman.

### 7.2 Halaman kategori

-   Pengantar kategori yang unik.
-   Kartu/link ke seluruh halaman anak yang relevan.
-   Penjelasan singkat untuk membantu pengguna memilih.
-   Tidak mengulang seluruh isi artikel anak.

### 7.3 Artikel panduan

-   Judul/H1 sesuai topik URL.
-   Jawaban ringkas di bagian awal.
-   Struktur heading logis.
-   Langkah, checklist, contoh, atau tabel jika benar-benar membantu.
-   Sumber/reviewer dan tanggal diperbarui bila tersedia.
-   Link ke halaman terkait.
-   FAQ yang relevan dan terlihat, jika diperlukan.

### 7.4 Halaman pengalaman, alumni, studi kasus, testimoni, dan galeri

-   Gunakan bukti, persetujuan, dan keterangan yang dapat diverifikasi.
-   Jangan membuat testimoni atau cerita rekaan yang disajikan sebagai
    pengalaman nyata.
-   Jika bahan belum tersedia, gunakan status draft dan jangan
    menerbitkan klaimnya.

## 8. Persyaratan SEO Teknis

-   Satu title unik dan meta description relevan per URL.
-   Canonical absolut yang menunjuk ke URL utama halaman itu sendiri,
    kecuali ada keputusan SEO berbeda yang terdokumentasi.
-   Hanya satu H1 utama; hierarki H2/H3 logis.
-   Open Graph dan metadata sosial yang sesuai dengan halaman.
-   Gambar dioptimalkan, punya alt yang deskriptif, dan tidak
    menggunakan keyword stuffing.
-   XML sitemap hanya memuat URL kanonis yang boleh diindeks.
-   `robots.txt` tidak boleh tanpa sengaja memblokir CSS, JS, atau
    halaman penting.
-   Terapkan redirect 301 jika URL yang telah terbit berubah setelah
    mendapat persetujuan.
-   Internal linking mengikuti hierarki kategori--anak dan hubungan
    topik yang relevan.
-   Jangan membuat doorway pages, halaman lokal tipis, atau duplikasi
    konten untuk mengejar keyword.
-   Gunakan data author/reviewer dan tanggal terbit/perubahan aktual
    jika memang tersedia.
-   Sediakan halaman 404 yang membantu pengunjung kembali ke halaman
    penting.

## 9. Persyaratan Schema / JSON-LD

Setiap URL memiliki JSON-LD `@graph` tersendiri sebagaimana panduan
master: - `Organization` dan `WebSite` menggunakan `@id` bersama yang
tetap. - `WebPage`, `CollectionPage` atau `Article` sesuai jenis
halaman. - `BreadcrumbList` unik untuk halaman yang memiliki
breadcrumb. - `FAQPage` hanya jika ada FAQ yang terlihat dan sesuai. -
`JobPosting` hanya setelah posisi, pemberi kerja, lokasi, tanggal
tayang, masa berlaku, dan cara melamar diverifikasi. - Jangan
menambahkan `LocalBusiness` dengan alamat, jam kerja, koordinat, atau
data lain yang belum diverifikasi. - Isi schema harus sama dengan konten
yang terlihat dan tidak boleh berisi klaim palsu. - Validasi dengan
Schema.org Validator dan Google Rich Results Test. - Schema valid bukan
jaminan rich result akan tampil; FAQ rich results dibatasi Google.

## 10. Aksesibilitas, Responsif, dan Performa

-   Layout mobile-first dan dapat digunakan pada ponsel, tablet, dan
    desktop.
-   Kontras teks memadai; jangan mengandalkan warna saja untuk
    menyampaikan status.
-   Semua menu dan kontrol dapat dioperasikan dengan keyboard.
-   Fokus keyboard terlihat jelas.
-   Gunakan label untuk form; error form harus jelas.
-   Gunakan teks alternatif yang bermakna pada gambar informatif dan alt
    kosong untuk dekorasi.
-   Ukuran gambar responsif, kompresi sesuai, dan lazy-load untuk gambar
    non-kritis.
-   Hindari animasi berlebihan, pop-up yang menghalangi konten, dan
    elemen yang mengganggu akses informasi.

## 11. Model Data / CMS yang Disarankan

Jika memakai CMS, setiap halaman sebaiknya memiliki: - ID konten dan
kelompok (B4--B11). - Judul, slug, URL kanonis. - Jenis halaman:
landing, kategori, artikel, pengalaman, dokumen, lowongan, kontak. -
Status: backlog, draft, review fakta, review SEO, siap terbit, terbit,
perlu diperbarui, ditahan. - Penulis, reviewer, tanggal target, tanggal
terbit aktual, tanggal revisi. - H1, title, meta description, OG
title/description/image. - Isi, FAQ terlihat, gambar dan sumber/izin. -
Parent URL dan internal links. - Status verifikasi fakta dan catatan
bukti. - Jenis schema dan hasil validasi.

## 12. Alur Kerja Editorial

1.  Ambil URL dan target dari indeks master.
2.  Tulis konten berdasarkan brief halaman yang disetujui.
3.  Tandai klaim yang membutuhkan bukti.
4.  Verifikasi fakta oleh pemilik/penanggung jawab.
5.  Review search intent, keunikan, dan internal linking.
6.  Review SEO on-page dan metadata.
7.  Validasi schema, tautan, gambar, CTA, dan tampilan mobile.
8.  Terbitkan hanya setelah lolos checklist.
9.  Catat tanggal terbit aktual dan pantau perubahan lowongan/informasi
    lokal.

## 13. Kriteria Penerimaan

Website dinyatakan sesuai PRD bila: - \[ \] Seluruh 72 URL terpetakan
dan tidak ada slug yang berubah tanpa persetujuan. - \[ \] Navigasi
mencerminkan hierarki B4--B11. - \[ \] Setiap halaman memiliki satu
tujuan dan konten yang spesifik. - \[ \] Tidak ada fakta, testimoni,
fasilitas, lowongan, alamat, atau relasi institusi yang dikarang. - \[
\] CTA hanya menggunakan instruksi dan kontak yang telah dikonfirmasi. -
\[ \] Metadata, canonical, Open Graph, dan internal links diperiksa per
halaman. - \[ \] JSON-LD sesuai dengan tipe dan konten terlihat. - \[ \]
`JobPosting` dan `LocalBusiness` hanya dipasang setelah data wajib
terverifikasi. - \[ \] Semua halaman utama berfungsi di mobile dan
desktop. - \[ \] Tautan internal/eksternal, formulir, gambar, dan
halaman 404 diuji. - \[ \] Tanggal target tidak ditampilkan sebagai
tanggal terbit aktual. - \[ \] Halaman pengalaman dan testimoni memiliki
persetujuan serta bukti.

## 14. Hal yang Masih Harus Dikonfirmasi

Brief indeks belum menentukan secara rinci: - Logo, warna brand resmi,
font, dan referensi visual. - Framework/CMS dan hosting. - Nomor
WhatsApp, email, alamat, jam operasional, dan kanal pendaftaran resmi. -
Detail status lowongan, persyaratan, kuota, periode, dan lokasi kerja. -
Konten lengkap masing-masing dari 72 halaman (indeks ini terutama
menyediakan URL dan target). - Data/foto/izin alumni, mentor, peserta,
proyek, fasilitas, dan studi kasus. - Penanggung jawab konten, penulis,
reviewer, serta tanggal terbit aktual.

Jangan mengisi kekosongan ini dengan asumsi yang disajikan sebagai
fakta.
