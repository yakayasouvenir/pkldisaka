const fs = require('fs');
const c = fs.readFileSync('src/data/pklData.ts', 'utf8');
const lines = c.split('\n');
const start = lines.findIndex(l => l.includes("id: 'B8-08'"));
console.log(lines.slice(start, start + 35).join('\n'));
