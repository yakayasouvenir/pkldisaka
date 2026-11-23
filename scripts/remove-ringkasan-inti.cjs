const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let cleanedCount = 0;

files.forEach(f => {
  const filePath = path.join(blogDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('## Ringkasan Inti')) {
    // Regex fleksibel: hapus '## Ringkasan Inti' dan daftar poin bullet list di bawahnya
    const updated = content.replace(/## Ringkasan Inti\s*\r?\n([\s\S]*?)(?=\r?\n## |\r?\n<figure|\r?\n<div|\r?\n---|\s*$)/, '');
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      cleanedCount++;
    }
  }
});

console.log('CLEANED_RINGKASAN_INTI_ARTICLES: ' + cleanedCount);
