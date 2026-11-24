const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

const targetStr = "id: 'B8-09',";
const targetIdx = pklData.indexOf(targetStr);
console.log('B8-09 found at:', targetIdx);

const endOfB809 = pklData.indexOf("  },", targetIdx);
console.log('End of B8-09 at:', endOfB809);
console.log(pklData.substring(endOfB809, endOfB809 + 50));
