const fs = require('fs');
const c = fs.readFileSync('src/data/guideContent.ts', 'utf8');
const lines = c.split('\n');
const start = lines.findIndex(l => l.includes('/dokumen-pkl/laporan-pkl/'));
console.log(lines.slice(start, start + 60).join('\n'));
