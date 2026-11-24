const fs = require('fs');

const guidePath = 'src/data/guideContent.ts';
let guideData = fs.readFileSync(guidePath, 'utf8');

console.log(guideData.split('\n').slice(0, 30).join('\n'));
