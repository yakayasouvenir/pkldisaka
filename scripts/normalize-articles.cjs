const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

// Fungsi penyederhana ALT text agar alami (objek visual nyata, bukan keyword SEO)
function cleanAlt(alt) {
  if (!alt) return 'Suasana kegiatan praktik siswa';
  
  let cleaned = alt
    // Hapus frasa keyword stuffing
    .replace(/tempat pkl terbaik di malang/gi, 'ruang kerja praktik')
    .replace(/tempat pkl di malang/gi, 'ruang kerja praktik')
    .replace(/terbaik dan berkualitas/gi, '')
    .replace(/untuk siswa smk dan mahasiswa/gi, '')
    .replace(/pada studio saka malang/gi, 'di kantor')
    .replace(/di lingkungan kantor modern/gi, 'di kantor')
    .replace(/melaksanakan kegiatan praktik kerja lapangan/gi, 'praktik kerja')
    .replace(/menjalani kegiatan praktik kerja lapangan/gi, 'praktik kerja')
    .replace(/merancang antarmuka aplikasi di studio komputer/gi, 'mendesain antarmuka di komputer')
    .replace(/Apa Itu PKL Pengertian Tujuan Manfaat dan Pelaksanaannya bagi Siswa SMK/gi, 'Siswa SMK berdiskusi di ruang kelas industri')
    .trim();

  // Jika masih terlalu panjang (>60 karakter) dan bertipe kalimat promosi
  if (cleaned.length > 60) {
    if (cleaned.toLowerCase().includes('coding') || cleaned.toLowerCase().includes('pemrograman') || cleaned.toLowerCase().includes('laptop')) {
      cleaned = 'Siswa mengerjakan tugas pemrograman di laptop';
    } else if (cleaned.toLowerCase().includes('desain') || cleaned.toLowerCase().includes('grafis') || cleaned.toLowerCase().includes('dkv')) {
      cleaned = 'Siswa mengerjakan proyek desain grafis di komputer';
    } else if (cleaned.toLowerCase().includes('jaringan') || cleaned.toLowerCase().includes('komputer') || cleaned.toLowerCase().includes('tkj')) {
      cleaned = 'Siswa praktik perakitan dan konfigurasi komputer';
    } else if (cleaned.toLowerCase().includes('kamera') || cleaned.toLowerCase().includes('foto') || cleaned.toLowerCase().includes('video')) {
      cleaned = 'Siswa praktik fotografi produk di studio';
    } else if (cleaned.toLowerCase().includes('diskusi') || cleaned.toLowerCase().includes('mentor') || cleaned.toLowerCase().includes('briefing')) {
      cleaned = 'Siswa berdiskusi dengan mentor pembimbing';
    } else {
      cleaned = 'Aktivitas siswa selama kegiatan praktik kerja';
    }
  }

  return cleaned;
}

let modifiedCount = 0;
let redundantSummaryRemoved = 0;

files.forEach(f => {
  const filePath = path.join(blogDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Bersihkan imageAlt di frontmatter jika keyword stuffed
  content = content.replace(/imageAlt:\s*["'](.*?)["']/g, (match, p1) => {
    const naturalAlt = cleanAlt(p1);
    return `imageAlt: "${naturalAlt}"`;
  });

  // 2. Bersihkan alt text di tag img HTML body
  content = content.replace(/<img([^>]+)alt=["']([^"']*)["']([^>]*)>/g, (match, prefix, alt, suffix) => {
    const naturalAlt = cleanAlt(alt);
    return `<img${prefix}alt="${naturalAlt}"${suffix}>`;
  });

  // 3. Evaluasi redundansi: jika ada "## Jawaban Singkat" DAN "## Ringkasan Inti", gabungkan secara natural
  // Hapus blok Ringkasan Inti yang hanya mengulang poin jawaban singkat
  if (content.includes('## Jawaban Singkat') && content.includes('## Ringkasan Inti')) {
    // Regex untuk membuang blok '## Ringkasan Inti' beserta list bullet di bawahnya sampai heading berikutnya atau figure
    content = content.replace(/## Ringkasan Inti\s*\r?\n(\s*-[^\r\n]*\r?\n)+\s*/g, '');
    redundantSummaryRemoved++;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
  }
});

console.log(`PROCESSED: ${files.length} articles.`);
console.log(`MODIFIED_FILES: ${modifiedCount}`);
console.log(`REDUNDANT_SUMMARIES_CLEANED: ${redundantSummaryRemoved}`);
