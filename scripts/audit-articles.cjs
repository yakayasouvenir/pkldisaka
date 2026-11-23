const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

console.log('TOTAL_ARTICLES: ' + files.length);

let altAudit = [];
let patternAudit = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(blogDir, f), 'utf8');
  
  // 1. Audit Ringkasan Inti & Jawaban Singkat
  const hasJawabanSingkat = content.includes('## Jawaban Singkat');
  const hasRingkasanInti = content.includes('## Ringkasan Inti');
  if (hasJawabanSingkat && hasRingkasanInti) {
    patternAudit.push({ file: f, issue: 'Both Jawaban Singkat and Ringkasan Inti present (Template redundancy)' });
  }

  // 2. Audit Alt Text in frontmatter and body
  const frontmatterImgAlt = content.match(/imageAlt:\s*["'](.*?)["']/);
  if (frontmatterImgAlt) {
    const alt = frontmatterImgAlt[1];
    if (alt.length > 60 || alt.toLowerCase().includes('tempat pkl') || alt.toLowerCase().includes('terbaik')) {
      altAudit.push({ file: f, type: 'hero_alt', alt });
    }
  }

  const imgTags = content.match(/<img[^>]+>/g) || [];
  imgTags.forEach(tag => {
    const m = tag.match(/alt=["'](.*?)["']/);
    if (m) {
      const alt = m[1];
      if (alt.length > 55 || alt.toLowerCase().includes('tempat pkl') || alt.toLowerCase().includes('terbaik') || alt.toLowerCase().includes('di malang')) {
        altAudit.push({ file: f, type: 'body_img_alt', alt });
      }
    }
  });
});

console.log('ARTICLES_WITH_REDUNDANT_SUMMARY: ' + patternAudit.length);
console.log('UNNATURAL_ALT_COUNT: ' + altAudit.length);
console.log('SAMPLE_UNNATURAL_ALTS:', JSON.stringify(altAudit.slice(0, 10), null, 2));
