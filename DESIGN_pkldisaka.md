# DESIGN.md --- Panduan Desain Website pkldisaka.com

**Versi:** 1.0\
**Tanggal:** 27 Oktober 2026\
**Acuan struktur:** `MASTER_CONTENT_BRIEF_DAN_INDEKS.md`\
**Status visual:** Usulan desain implementasi; brief sumber tidak
menetapkan warna, font, atau sistem visual resmi.

## 1. Prinsip Desain

1.  **Informasi lebih penting daripada dekorasi.** Pengunjung harus
    cepat menemukan cara daftar, jurusan, divisi, dokumen, dan panduan
    PKL.
2.  **Jelas dan dapat dipercaya.** Hindari angka, badge "resmi", klaim
    penerimaan, testimoni, foto fasilitas, atau logo mitra yang belum
    diverifikasi.
3.  **Satu halaman, satu maksud utama.** Jangan mengubah artikel edukasi
    menjadi landing page promosi yang berlebihan.
4.  **Mobile-first.** Navigasi, daftar tautan, tabel, dan CTA harus
    nyaman digunakan dari layar ponsel.
5.  **Konsisten dengan 72 URL.** Desain mendukung struktur konten
    master, bukan membuat struktur URL baru.
6.  **Mudah dipelihara.** Gunakan komponen dan template berulang untuk
    kategori, artikel, halaman informasi, dan halaman konversi.

## 2. Arah Visual yang Diusulkan

Karena file master tidak menetapkan identitas visual, gunakan arah awal
yang netral dan profesional. Konfirmasikan kepada pemilik brand sebelum
menganggapnya sebagai standar final.

-   **Karakter:** profesional, edukatif, ramah untuk siswa/mahasiswa,
    rapi.
-   **Warna dasar:** putih atau abu-abu sangat muda untuk latar; teks
    abu-abu gelap; satu warna utama biru yang dapat diganti sesuai brand
    resmi.
-   **Warna aksen:** gunakan satu warna aksen secukupnya untuk tautan
    dan CTA; hindari banyak warna yang bersaing.
-   **Tipografi:** sans-serif yang mudah dibaca; gunakan maksimal dua
    keluarga font.
-   **Foto:** gunakan foto nyata yang telah disetujui dan memiliki
    konteks akurat. Jangan menggunakan foto stok seolah-olah
    menggambarkan kantor, peserta, fasilitas, atau kegiatan Saka.
-   **Ikon:** sederhana dan konsisten. Ikon dekoratif tidak boleh
    menggantikan label teks.

### Token awal (dapat diganti setelah brand dikonfirmasi)

  ------------------------------------------------------------------------
  Token                    Nilai awal              Penggunaan
  ------------------------ ----------------------- -----------------------
  `--color-primary`        `#2457A7`               Tautan utama, elemen
                                                   navigasi

  `--color-primary-dark`   `#183D78`               Hover/fokus yang tetap
                                                   kontras

  `--color-text`           `#202938`               Teks utama

  `--color-muted`          `#5F6B7A`               Teks sekunder

  `--color-surface`        `#FFFFFF`               Permukaan kartu

  `--color-background`     `#F5F7FA`               Latar halaman

  `--color-border`         `#DCE2EA`               Garis pemisah

  `--color-success`        `#216E4E`               Status sukses yang
                                                   benar-benar diperlukan

  `--radius-card`          `12px`                  Kartu

  `--content-width`        `1120px`                Lebar konten maksimum

  `--body-line-height`     `1.65`                  Kenyamanan baca
  ------------------------------------------------------------------------

Nilai di atas adalah proposal, bukan identitas resmi pkldisaka.com.
Periksa kontras dan fokus setelah implementasi.

## 3. Struktur Global

### Header

-   Logo resmi di kiri, jika aset telah disediakan.
-   Navigasi desktop dengan kelompok menu yang jelas.
-   Tombol menu mobile dengan nama aksesibel dan status
    terbuka/tertutup.
-   Header tidak perlu terlalu tinggi atau penuh ornamen.
-   Jangan menempatkan seluruh 72 URL sebagai item navigasi tingkat
    pertama.

### Footer

-   Link ke halaman utama yang paling penting.
-   Tautan kelompok Jurusan, Divisi, Dokumen PKL, Info PKL, Persiapan
    PKL, dan PKL Malang.
-   Kontak hanya setelah data resmi diverifikasi.
-   Tautan kebijakan privasi atau halaman legal jika memang tersedia dan
    dibutuhkan.
-   Jangan menampilkan alamat atau jam kerja hasil asumsi.

### Breadcrumb

-   Tampilkan pada halaman selain beranda.
-   Mencerminkan hierarki yang nyata, misalnya
    `Beranda > Jurusan > DKV`.
-   Link setiap level harus valid.
-   Breadcrumb visual dan `BreadcrumbList` harus konsisten.

## 4. Template Halaman

### A. Beranda `/`

Urutan komponen yang disarankan: 1. Header dan navigasi. 2. Hero dengan
judul yang menjelaskan layanan/informasi PKL secara langsung. 3. CTA
utama hanya jika proses penerimaan dan kanal daftar sudah diverifikasi.
4. Ringkasan program atau jalur informasi. 5. Pintasan ke jurusan dan
divisi. 6. Cara daftar/alur seleksi dalam ringkasan faktual. 7. Artikel
atau panduan terbaru yang memang telah terbit. 8. FAQ singkat jika
bermanfaat. 9. Footer.

Jangan menampilkan jumlah peserta, angka keberhasilan, logo partner,
atau klaim "terbaik" tanpa bukti.

### B. Halaman kategori

Berlaku untuk `/jurusan/`, `/divisi/`, `/pengalaman/`, `/dokumen-pkl/`,
`/info-pkl/`, `/persiapan-pkl/`, dan `/pkl-malang/`. - Breadcrumb dan
H1. - Intro singkat yang menjelaskan kategori. - Grid/list kartu halaman
anak. - Setiap kartu berisi judul, ringkasan yang unik, dan link teks
atau tombol yang jelas. - Jangan membuat kartu dengan ringkasan identik
atau tautan kosong.

### C. Halaman detail jurusan/divisi

-   H1 spesifik.
-   Penjelasan ruang lingkup dan aktivitas yang telah dikonfirmasi.
-   Contoh tugas atau hasil belajar hanya jika valid dan sesuai kondisi
    sebenarnya.
-   Persyaratan/kesesuaian peserta jika telah ditetapkan.
-   Link ke cara daftar, dokumen, dan halaman terkait.
-   CTA tidak boleh menyiratkan lowongan aktif tanpa verifikasi.

### D. Halaman artikel edukasi

-   Breadcrumb, kategori, H1, ringkasan awal.
-   Isi dengan H2/H3 yang deskriptif.
-   Gunakan daftar langkah, checklist, tabel, atau contoh bila membantu.
-   Kotak ringkasan hanya jika benar-benar mempermudah pemahaman;
    hindari elemen dekoratif berlebihan.
-   Metadata penulis/reviewer/tanggal hanya berdasarkan data aktual.
-   Related links di akhir artikel, dipilih berdasarkan topik, bukan
    sekadar daftar acak.

### E. Halaman dokumen

-   Jelaskan fungsi dokumen dan kapan dibutuhkan.
-   Struktur atau contoh hanya jika relevan.
-   File unduhan hanya jika benar-benar tersedia, sudah diperiksa, dan
    boleh dibagikan.
-   Nyatakan bahwa format dapat bergantung pada ketentuan sekolah/kampus
    bila hal tersebut telah diverifikasi atau ditulis sebagai panduan
    umum dengan batasan yang jelas.
-   Jangan membuat file contoh seolah-olah merupakan formulir resmi
    Saka.

### F. Halaman pengalaman, alumni, testimoni, studi kasus, galeri

-   Gunakan layout editorial yang sederhana.
-   Foto dan kutipan harus memiliki izin serta keterangan yang benar.
-   Identitas, jabatan, jurusan, institusi, dan hasil proyek harus
    diverifikasi.
-   Jika bahan belum ada, jangan isi dengan cerita atau foto rekaan;
    tahan halaman dari publikasi atau tampilkan status internal di CMS.

### G. Lowongan dan cara daftar

-   Status lowongan harus terlihat dan selalu mutakhir.
-   Tampilkan posisi, lokasi, tanggal tayang, tanggal kedaluwarsa,
    persyaratan, dan cara melamar hanya setelah dikonfirmasi.
-   Jika tidak ada lowongan terverifikasi, jangan menampilkan lowongan
    kedaluwarsa seolah-olah aktif.
-   `JobPosting` hanya untuk lowongan nyata dan lengkap sesuai
    persyaratan schema.

### H. Kontak

-   Prioritaskan kanal kontak yang diverifikasi.
-   Formulir harus memiliki label, validasi, pesan berhasil/gagal, dan
    penjelasan penggunaan data bila mengumpulkan informasi pribadi.
-   Jangan menampilkan peta/alamat placeholder sebagai lokasi asli.

## 5. Komponen UI

Buat komponen reusable berikut: - `SiteHeader` - `MobileNavigation` -
`SiteFooter` - `Breadcrumbs` - `PageHero` - `SectionHeading` -
`LinkCard` - `ArticleCard` - `RelatedLinks` - `FAQList` - `CTASection` -
`ArticleMetadata` - `StatusNotice` - `ContactForm` (jika formulir
benar-benar diperlukan) - `Pagination` (jika daftar konten cukup
panjang)

Komponen harus menerima konten melalui data, bukan menggandakan markup
dan membuat teks berbeda-beda secara tidak sengaja. Semua CTA, kartu,
dan tautan harus memiliki tujuan nyata.

## 6. Tata Letak dan Responsif

-   Gunakan container terpusat dengan lebar maksimum sekitar 1120px
    sebagai nilai awal.
-   Spasi mengikuti skala konsisten, misalnya 4, 8, 12, 16, 24, 32, 48,
    dan 64px.
-   Grid kartu: 3 kolom pada desktop lebar, 2 kolom pada tablet, 1 kolom
    pada ponsel; sesuaikan berdasarkan panjang judul dan isi.
-   Artikel utama gunakan satu kolom yang mudah dibaca, dengan lebar
    teks terbatas.
-   Tabel lebar harus dapat digulir horizontal di ponsel atau diubah
    menjadi format yang lebih sesuai.
-   Jangan menyembunyikan informasi penting hanya karena layar kecil.
-   Hindari horizontal overflow, teks terpotong, dan tombol terlalu
    rapat.

## 7. Interaksi dan Aksesibilitas

-   Menu dan dropdown dapat digunakan dengan keyboard.
-   Gunakan elemen semantik: `header`, `nav`, `main`, `article`,
    `section`, `footer`.
-   Tambahkan link "Lewati ke konten utama".
-   Fokus keyboard harus terlihat.
-   Form input memiliki label dan pesan error yang jelas.
-   Status tidak hanya dibedakan dengan warna.
-   Hormati `prefers-reduced-motion`.
-   Jangan membuat slider/carousel otomatis sebagai tempat utama
    informasi penting.
-   Link harus memiliki teks bermakna, bukan hanya "klik di sini".

## 8. Aturan Konten dan SEO di Dalam Desain

-   Hanya satu H1 utama per halaman.
-   Heading dipilih berdasarkan struktur isi, bukan ukuran visual.
-   Title dan meta description dikelola per URL.
-   Gambar memiliki alt sesuai fungsi dan isi; gambar dekoratif
    menggunakan alt kosong.
-   Open Graph image harus sesuai halaman dan memiliki hak penggunaan.
-   FAQ yang ditampilkan harus sama dengan FAQ pada JSON-LD.
-   Breadcrumb visual harus cocok dengan struktur schema.
-   Jangan memasukkan schema untuk konten yang tidak terlihat atau belum
    diverifikasi.
-   Jangan menampilkan tanggal target kalender sebagai tanggal
    publikasi.
-   Hindari pop-up, keyword stuffing, animasi berat, dan elemen yang
    mengganggu akses konten.

## 9. Struktur File Front-end yang Disarankan

Struktur ini adalah rekomendasi dan dapat disesuaikan dengan stack yang
dipilih.

``` text
/
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   ├── js/
│   │   ├── navigation.js
│   │   └── main.js
│   └── images/
├── templates/
│   ├── base
│   ├── landing
│   ├── category
│   ├── article
│   ├── experience
│   └── contact
└── content/
    ├── B4/
    ├── B5/
    ├── B6/
    ├── B7/
    ├── B8/
    ├── B9/
    ├── B10/
    └── B11/
```

Nama dan ekstensi file final harus mengikuti framework/CMS yang
disepakati. Struktur folder sumber B10/B11 pada indeks tertulis `B1/`;
verifikasi sebelum memindahkan atau mengganti arsip.

## 10. Checklist Sebelum Publish

-   [ ] URL dan slug cocok dengan indeks master.
-   [ ] Desain menggunakan aset brand resmi atau token sementara yang
    telah disetujui.
-   [ ] Konten unik dan menjawab intent halaman.
-   [ ] Semua fakta, lowongan, kontak, fasilitas, dan testimoni telah
    diverifikasi.
-   [ ] CTA mengarah ke tujuan yang benar.
-   [ ] Breadcrumb dan internal links berfungsi.
-   [ ] Title, meta description, canonical, dan OG telah diperiksa.
-   [ ] Schema sesuai konten yang terlihat.
-   [ ] Tampilan mobile, tablet, dan desktop telah diuji.
-   [ ] Keyboard navigation, fokus, kontras, dan label form telah
    diperiksa.
-   [ ] Gambar terkompresi, memiliki alt, dan izin penggunaan jelas.
-   [ ] Tidak ada placeholder, tautan mati, atau tanggal target yang
    disajikan sebagai tanggal terbit aktual.

## 11. Hal yang Harus Diputuskan Sebelum Desain Final

1.  Logo dan pedoman brand resmi.
2.  Warna dan font yang disetujui.
3.  Stack teknis/CMS.
4.  CTA dan kanal pendaftaran resmi.
5.  Data kontak dan informasi operasional yang boleh ditampilkan.
6.  Aset foto dan izin publikasi.
7.  Detail konten untuk 72 URL, karena indeks master terutama berisi
    daftar URL dan tanggal target.
