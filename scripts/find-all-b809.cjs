const fs = require('fs');

const pklDataPath = 'src/data/pklData.ts';
let pklData = fs.readFileSync(pklDataPath, 'utf8');

const regex = /id:\s*'B8-09'/g;
let m;
while ((m = regex.exec(pklData)) !== null) {
  console.log('Match at index:', m.index);
  console.log(pklData.substring(m.index - 50, m.index + 200));
}
