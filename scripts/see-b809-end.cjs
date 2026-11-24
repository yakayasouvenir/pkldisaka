const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

const b809Idx = 103907;
console.log(pklData.substring(b809Idx + 500, b809Idx + 1200));
