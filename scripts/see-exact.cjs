const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

const b809Idx = 103907;
console.log(JSON.stringify(pklData.substring(b809Idx + 1650, b809Idx + 1850)));
