const fs = require('fs');
const xml = fs.readFileSync('scripts/docx_extracted/word/document.xml', 'utf8');
const rels = fs.readFileSync('scripts/docx_extracted/word/_rels/document.xml.rels', 'utf8');

// Parse rels
const relMap = {};
const relRegex = /<Relationship\b[^>]*Id="([^"]+)"[^>]*Target="([^"]+)"/g;
let rMatch;
while ((rMatch = relRegex.exec(rels)) !== null) {
  relMap[rMatch[1]] = rMatch[2];
}

const pRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
let match;
let i = 0;
while ((match = pRegex.exec(xml)) !== null) {
  const p = match[1];
  const imgMatch = p.match(/r:embed="([^"]+)"/);
  const tMatch = p.match(/<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g);
  let text = '';
  if (tMatch) {
    text = tMatch.map(t => t.replace(/<[^>]+>/g, '')).join('');
  }
  if (imgMatch) {
    const rId = imgMatch[1];
    console.log(`P${i} has image ${rId} -> ${relMap[rId]} | Text: "${text.trim()}"`);
  }
  i++;
}
