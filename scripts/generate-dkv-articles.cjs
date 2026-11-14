const fs = require('fs');
const path = require('path');

const sourceFile = 'C:/Users/DELL/.gemini/antigravity/brain/bd45dca6-7fe5-476c-a7e9-c6605375c1c4/.user_uploaded/media_1794627742564_1ee55185.md';
const content = fs.readFileSync(sourceFile, 'utf8');

const pilarRaw = content.substring(content.indexOf('# ARTIKEL PILAR'), content.indexOf('# CLUSTER 1'));
const c1Raw = content.substring(content.indexOf('# CLUSTER 1'), content.indexOf('# CLUSTER 2'));
const c2Raw = content.substring(content.indexOf('# CLUSTER 2'), content.indexOf('# CLUSTER 3'));
const c3Raw = content.substring(content.indexOf('# CLUSTER 3'));

function extractFaq(sectionText) {
  const faqIdx = sectionText.indexOf('## FAQ');
  if (faqIdx === -1) return [];
  const nextSectionIdx = sectionText.indexOf('## Kesimpulan', faqIdx);
  const faqText = nextSectionIdx !== -1 ? sectionText.substring(faqIdx, nextSectionIdx) : sectionText.substring(faqIdx);
  const items = [];
  const parts = faqText.split(/### \d+\.\s*/);
  for (let i = 1; i < parts.length; i++) {
    const lines = parts[i].trim().split('\n');
    const q = lines[0].trim();
    const a = lines.slice(1).join(' ').trim().replace(/"/g, '\\"');
    items.push({ q, a });
  }
  return items;
}

function cleanBody(txt) {
  // normalize CV. Saudagar Kaya Abadi -> CV Saudagar Kaya Abadi
  return txt.replace(/CV\.\s*Saudagar Kaya Abadi/g, 'CV Saudagar Kaya Abadi');
}

// 1. PILAR: tempat-pkl-jurusan-dkv-malang.md
const pilarBodyStart = pilarRaw.indexOf('## Apa Itu PKL Jurusan DKV?');
let pilarBody = cleanBody(pilarRaw.substring(pilarBodyStart));

// Enhance Pilar Body with internal links & 2 inline figures:
pilarBody = pilarBody.replace(
  'Desain Komunikasi Visual merupakan bidang keahlian yang menggabungkan kreativitas, komunikasi, dan teknologi untuk menyampaikan pesan melalui media visual.',
  `Desain Komunikasi Visual merupakan bidang keahlian yang menggabungkan kreativitas, komunikasi, dan teknologi untuk menyampaikan pesan melalui media visual. Bagi siswa yang ingin mendalami praktik riil industri kreatif, program magang vokasi di [PKL jurusan DKV](/jurusan/dkv/) memberikan kurikulum komprehensif mulai dari perancangan identitas visual hingga implementasi media promosi.`
);

pilarBody = pilarBody.replace(
  '### SAKA Souvenir dari CV Saudagar Kaya Abadi',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/12.webp" alt="Siswa SMK DKV merancang tata letak dan desain visual merchandise di studio SAKA Souvenir" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Aktivitas perancangan tata letak visual dan grafis merchandise oleh siswa SMK DKV di studio produksi CV Saudagar Kaya Abadi Malang.
  </figcaption>
</figure>

### SAKA Souvenir dari CV Saudagar Kaya Abadi`
);

pilarBody = pilarBody.replace(
  'Informasi lebih lanjut dapat diarahkan melalui website resmi PKL Di Saka, yaitu [pkldisaka.id](https://pkldisaka.id/).',
  `Informasi lebih lanjut mengenai registrasi dan jadwal kuota dapat diakses melalui portal resmi [PKL di Saka](/) serta konsultasi langsung bersama koordinator pembinaan vokasi.`
);

pilarBody = pilarBody.replace(
  '## Kesimpulan Praktis',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/25.webp" alt="Siswa SMK DKV berdiskusi mengevaluasi portofolio desain merchandise dan cetak" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Evaluasi berkala karya portofolio desain souvenir dan materi grafis bersama mentor industri di Malang.
  </figcaption>
</figure>

Untuk panduan mendalam lainnya, pelajari juga rincian [kegiatan PKL jurusan DKV](/blog/kegiatan-pkl-jurusan-dkv/), panduan menyusun [portofolio DKV untuk PKL](/blog/portofolio-dkv-untuk-pkl/), serta alur lengkap [syarat dan cara daftar PKL DKV di Malang](/blog/syarat-cara-daftar-pkl-dkv-malang/).

## Kesimpulan Praktis`
);

const pilarFaq = extractFaq(pilarRaw);
const pilarFaqYaml = pilarFaq.map(f => `  - q: "${f.q}"\n    a: "${f.a}"`).join('\n');

const pilarContent = `---
title: "Tempat PKL Jurusan DKV di Malang untuk Mengembangkan Kreativitas Siswa SMK"
description: "Cari tempat PKL jurusan DKV di Malang yang relevan dengan industri kreatif. Kenali kriteria, alur kerja desain promosi, dan persiapannya sebelum mendaftar."
answer: "Tempat PKL jurusan DKV di Malang memberikan kesempatan bagi siswa SMK untuk mengembangkan keterampilan desain grafis, komunikasi visual, produksi media kreatif, dan persiapan aset promosi bisnis melalui bimbingan kerja langsung di unit usaha industri seperti CV Saudagar Kaya Abadi (SAKA Souvenir)."
category: "Tips & Panduan Lokasi"
eyebrow: "PANDUAN LOKASI & MAGANG INDUSTRI DKV"
author: "Mochammad Evan Pratama"
authorRole: "Penulis & Reviewer Teknis Vokasi Industri Saka Malang"
published: 2026-11-14
updated: 2026-11-14
readingTime: "~8 Menit"
image: "/images/blog/tempat-pkl-jurusan-dkv-malang.webp"
imageAlt: "Siswa SMK DKV berkolaborasi merancang desain kemasan produk dan grafis promosi saat PKL di Malang"
imageCaption: "Kolaborasi siswa SMK jurusan Desain Komunikasi Visual saat menyelesaikan proyek grafis merchandise di CV Saudagar Kaya Abadi Malang."
faq:
${pilarFaqYaml}
---

${pilarBody}
`;

fs.writeFileSync('d:/saka-digipro/saka-digipro/src/content/blog/tempat-pkl-jurusan-dkv-malang.md', pilarContent, 'utf8');
console.log('Written: tempat-pkl-jurusan-dkv-malang.md');

// 2. CLUSTER 1: kegiatan-pkl-jurusan-dkv.md
const c1BodyStart = c1Raw.indexOf('## Apa Saja Kegiatan PKL Jurusan DKV?');
let c1Body = cleanBody(c1Raw.substring(c1BodyStart));

c1Body = c1Body.replace(
  'Desain Komunikasi Visual bukan hanya tentang menggambar atau membuat tampilan menarik. Siswa juga harus memahami bagaimana sebuah desain menyampaikan pesan kepada target audiens.',
  `Desain Komunikasi Visual bukan hanya tentang menggambar atau membuat tampilan menarik. Siswa juga harus memahami bagaimana sebuah desain menyampaikan pesan kepada target audiens. Seluruh materi ini dipelajari secara aplikatif dalam program kejuruan terstruktur di [PKL jurusan DKV](/jurusan/dkv/) Kota Malang.`
);

c1Body = c1Body.replace(
  '### 3. Merancang Identitas Visual dan Branding',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/19.webp" alt="Siswa SMK DKV mempraktikkan proses cetak dan verifikasi grafis kemasan produk" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Penerapan visual desain langsung pada media cetak merchandise souvenir di workshop CV Saudagar Kaya Abadi.
  </figcaption>
</figure>

### 3. Merancang Identitas Visual dan Branding`
);

c1Body = c1Body.replace(
  '## Mengapa PKL di Bidang Souvenir Relevan untuk DKV?',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/23.webp" alt="Siswa SMK DKV sedang berdiskusi menyusun materi promosi media digital" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Diskusi tim penyusunan konsep konten visual media sosial dan katalog promosi produk.
  </figcaption>
</figure>

## Mengapa PKL di Bidang Souvenir Relevan untuk DKV?`
);

c1Body = c1Body.replace(
  '## Kesimpulan Praktis',
  `Bagi siswa yang sedang mencari referensi studio magang, simak rujukan utama kami di [tempat PKL jurusan DKV di Malang](/blog/tempat-pkl-jurusan-dkv-malang/), pelajari panduan [portofolio DKV untuk PKL](/blog/portofolio-dkv-untuk-pkl/), serta tata [cara daftar PKL DKV di Malang](/blog/syarat-cara-daftar-pkl-dkv-malang/). Untuk registrasi langsung, kunjungi portal resmi [PKL di Saka](/) Malang.

## Kesimpulan Praktis`
);

const c1Faq = extractFaq(c1Raw);
const c1FaqYaml = c1Faq.map(f => `  - q: "${f.q}"\n    a: "${f.a}"`).join('\n');

const c1Content = `---
title: "Kegiatan PKL Jurusan DKV yang Dipelajari Siswa SMK di Malang"
description: "Kenali kegiatan PKL jurusan DKV mulai dari desain grafis, branding, hingga produksi souvenir. Pelajari keterampilan nyata yang diasah selama magang kerja."
answer: "Kegiatan PKL jurusan DKV meliputi desain grafis, pengolahan gambar digital, pembuatan materi promosi, pengembangan identitas visual (branding), serta pemahaman alur produksi media kreatif dan produk merchandise nyata."
category: "Kegiatan & Pembelajaran"
eyebrow: "PANDUAN KURIKULUM & PRAKTIK INDUSTRI DKV"
author: "Mochammad Evan Pratama"
authorRole: "Penulis & Reviewer Teknis Vokasi Industri Saka Malang"
published: 2026-11-14
updated: 2026-11-14
readingTime: "~7 Menit"
image: "/images/blog/kegiatan-pkl-jurusan-dkv.webp"
imageAlt: "Siswa SMK DKV mempraktikkan desain grafis dan pengolahan aset visual di studio kerja"
imageCaption: "Siswa SMK keahlian DKV mengolah tata letak desain dan aset visual digital dengan bimbingan mentor industri."
faq:
${c1FaqYaml}
---

${c1Body}
`;

fs.writeFileSync('d:/saka-digipro/saka-digipro/src/content/blog/kegiatan-pkl-jurusan-dkv.md', c1Content, 'utf8');
console.log('Written: kegiatan-pkl-jurusan-dkv.md');

// 3. CLUSTER 2: portofolio-dkv-untuk-pkl.md
const c2BodyStart = c2Raw.indexOf('## Apa Itu Portofolio DKV untuk PKL?');
let c2Body = cleanBody(c2Raw.substring(c2BodyStart));

c2Body = c2Body.replace(
  'Portofolio DKV untuk PKL adalah dokumen yang berisi kumpulan karya desain sebagai gambaran kemampuan siswa dalam bidang Desain Komunikasi Visual.',
  `Portofolio DKV untuk PKL adalah dokumen yang berisi kumpulan karya desain sebagai gambaran kemampuan siswa dalam bidang Desain Komunikasi Visual. Saat mengajukan magang ke program unggulan [PKL jurusan DKV](/jurusan/dkv/), portofolio ini menjadi acuan utama mentor untuk menempatkan siswa pada divisi desain grafis, digital marketing, atau produksi merchandise yang tepat.`
);

c2Body = c2Body.replace(
  '### 3. Desain Identitas Visual atau Logo',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/25.webp" alt="Siswa SMK DKV menata layout dan halaman portofolio desain grafis" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Penyusunan halaman portofolio desain visual dengan struktur studi kasus yang jelas dan rapi.
  </figcaption>
</figure>

### 3. Desain Identitas Visual atau Logo`
);

c2Body = c2Body.replace(
  '## Kesalahan yang Sering Terjadi dalam Portofolio Siswa SMK',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/wawancara-seleksi-magang.webp" alt="Sesi wawancara dan review portofolio desain siswa SMK DKV oleh pembimbing industri" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Sesi verifikasi dan kurasi portofolio kreatif saat wawancara penerimaan magang industri.
  </figcaption>
</figure>

## Kesalahan yang Sering Terjadi dalam Portofolio Siswa SMK`
);

c2Body = c2Body.replace(
  '## Kesimpulan Praktis',
  `Setelah portofolio siap, pelajari rekomendasi [tempat PKL jurusan DKV di Malang](/blog/tempat-pkl-jurusan-dkv-malang/), ketahui ragam [kegiatan PKL jurusan DKV](/blog/kegiatan-pkl-jurusan-dkv/), dan lengkapi [syarat dan cara daftar PKL DKV di Malang](/blog/syarat-cara-daftar-pkl-dkv-malang/). Untuk mendaftar langsung ke CV Saudagar Kaya Abadi, kunjungi beranda [PKL di Saka](/) sekarang juga.

## Kesimpulan Praktis`
);

const c2Faq = extractFaq(c2Raw);
const c2FaqYaml = c2Faq.map(f => `  - q: "${f.q}"\n    a: "${f.a}"`).join('\n');

const c2Content = `---
title: "Portofolio DKV untuk PKL yang Menarik dan Profesional bagi Siswa SMK"
description: "Pelajari cara membuat portofolio DKV untuk PKL, mulai dari kurasi karya, layout, hingga format file profesional agar peluang diterima magang semakin besar."
answer: "Portofolio DKV untuk PKL adalah kumpulan karya desain terpilih yang menunjukkan kemampuan visual, kreativitas konsep, dan keterampilan teknis siswa SMK sebagai bahan pertimbangan utama perusahaan dalam menerima peserta magang."
category: "Tips & Strategi Portofolio"
eyebrow: "PANDUAN PORTOFOLIO & KURASI KARYA DKV"
author: "Mochammad Evan Pratama"
authorRole: "Penulis & Reviewer Teknis Vokasi Industri Saka Malang"
published: 2026-11-14
updated: 2026-11-14
readingTime: "~7 Menit"
image: "/images/blog/portofolio-dkv-untuk-pkl.webp"
imageAlt: "Kumpulan karya desain visual dan portofolio cetak siswa SMK DKV yang rapi dan terstruktur"
imageCaption: "Penyusunan portofolio desain komunikasi visual yang memadukan konsep identitas merek dan media promosi."
faq:
${c2FaqYaml}
---

${c2Body}
`;

fs.writeFileSync('d:/saka-digipro/saka-digipro/src/content/blog/portofolio-dkv-untuk-pkl.md', c2Content, 'utf8');
console.log('Written: portofolio-dkv-untuk-pkl.md');

// 4. CLUSTER 3: syarat-cara-daftar-pkl-dkv-malang.md
const c3BodyStart = c3Raw.indexOf('## Apa Saja Syarat Masuk PKL Jurusan DKV?');
let c3Body = cleanBody(c3Raw.substring(c3BodyStart));

c3Body = c3Body.replace(
  'Siswa jurusan Desain Komunikasi Visual perlu mempersiapkan berkas administrasi dan dokumen pendukung kompetensi sebelum mengajukan permohonan PKL.',
  `Siswa jurusan Desain Komunikasi Visual perlu mempersiapkan berkas administrasi dan dokumen pendukung kompetensi sebelum mengajukan permohonan PKL. Bagi siswa yang ingin bergabung di program [PKL jurusan DKV](/jurusan/dkv/) CV Saudagar Kaya Abadi Malang, kelengkapan berkas resmi sekolah menjamin kelancaran validasi dan penjadwalan magang.`
);

c3Body = c3Body.replace(
  '### 3. Portofolio Desain Grafis',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/penyerahan-dokumen-pkl.webp" alt="Penyerahan dokumen administrasi dan surat permohonan PKL siswa SMK DKV di kantor mitra industri" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Penyerahan berkas pengantar resmi dan verifikasi administrasi pengajuan magang di CV Saudagar Kaya Abadi.
  </figcaption>
</figure>

### 3. Portofolio Desain Grafis`
);

c3Body = c3Body.replace(
  '## Cara Daftar PKL DKV di Malang',
  `<figure class="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
  <img src="/images/verifikasi-jurnal-magang.webp" alt="Siswa SMK DKV mencatat dan memverifikasi administrasi jurnal kegiatan PKL" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
    Pencatatan dan verifikasi berkas administrasi magang untuk memastikan kepatuhan kurikulum sekolah.
  </figcaption>
</figure>

## Cara Daftar PKL DKV di Malang`
);

c3Body = c3Body.replace(
  '## Kesimpulan Praktis',
  `Untuk mempersiapkan diri secara menyeluruh, baca juga panduan [tempat PKL jurusan DKV di Malang](/blog/tempat-pkl-jurusan-dkv-malang/), tinjau rincian [kegiatan PKL jurusan DKV](/blog/kegiatan-pkl-jurusan-dkv/), serta persiapkan [portofolio DKV untuk PKL](/blog/portofolio-dkv-untuk-pkl/) Anda. Segera ajukan kemitraan dan pendaftaran Anda melalui beranda resmi [PKL di Saka](/) Malang.

## Kesimpulan Praktis`
);

const c3Faq = extractFaq(c3Raw);
const c3FaqYaml = c3Faq.map(f => `  - q: "${f.q}"\n    a: "${f.a}"`).join('\n');

const c3Content = `---
title: "Syarat dan Cara Daftar PKL DKV di Malang untuk Siswa SMK"
description: "Cari tahu syarat dan cara daftar PKL DKV di Malang untuk siswa SMK. Persiapkan surat pengantar sekolah, CV, dan portofolio desain agar pengajuan diterima."
answer: "Cara daftar PKL DKV di Malang diawali dengan memastikan jadwal sekolah, menyiapkan surat pengantar resmi, menyusun CV dan portofolio karya desain, lalu mengajukan permohonan ke mitra industri seperti CV Saudagar Kaya Abadi melalui saluran pendaftaran resmi."
category: "Syarat & Pendaftaran"
eyebrow: "PANDUAN PENDAFTARAN & DOKUMEN RESMI"
author: "Mochammad Evan Pratama"
authorRole: "Penulis & Reviewer Teknis Vokasi Industri Saka Malang"
published: 2026-11-14
updated: 2026-11-14
readingTime: "~8 Menit"
image: "/images/blog/syarat-cara-daftar-pkl-dkv-malang.webp"
imageAlt: "Siswa SMK DKV mempersiapkan berkas pendaftaran dan portofolio karya untuk pengajuan PKL di Malang"
imageCaption: "Pemeriksaan kelengkapan dokumen administrasi dan portofolio desain sebelum pengajuan magang industri."
faq:
${c3FaqYaml}
---

${c3Body}
`;

fs.writeFileSync('d:/saka-digipro/saka-digipro/src/content/blog/syarat-cara-daftar-pkl-dkv-malang.md', c3Content, 'utf8');
console.log('Written: syarat-cara-daftar-pkl-dkv-malang.md');
