const fs = require('fs');
const xml = fs.readFileSync('d:/saka-digipro/saka-digipro/scripts/docx_extracted/word/document.xml', 'utf8');

const pRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
let match;
let paras = [];
while ((match = pRegex.exec(xml)) !== null) {
  const pContent = match[1];
  const tRegex = /<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g;
  let tMatch;
  let text = '';
  while ((tMatch = tRegex.exec(pContent)) !== null) {
    text += tMatch[1];
  }
  const isCenter = pContent.includes('w:jc w:val="center"');
  const isBold = pContent.includes('<w:b/>') || pContent.includes('<w:b ');
  const isPageBreak = pContent.includes('w:type="page"') || pContent.includes('<w:br w:type="page"/>');
  paras.push({ text: text.trim(), isCenter, isBold, isPageBreak });
}

console.log('Total paragraphs:', paras.length);
const nonEmpty = paras.filter(p => p.text.length > 0 || p.isPageBreak);
fs.writeFileSync('d:/saka-digipro/saka-digipro/scripts/parsed_paras.json', JSON.stringify(nonEmpty, null, 2), 'utf8');
console.log('Sample paras 0-25:');
nonEmpty.slice(0, 25).forEach((p, idx) => console.log(`${idx}: [${p.isCenter ? 'CENTER' : 'LEFT'}][${p.isBold ? 'BOLD' : 'NORM'}] ${p.text}`));
