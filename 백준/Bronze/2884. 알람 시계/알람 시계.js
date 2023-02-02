let fs = require('fs');
let [H,M] = fs.readFileSync('/dev/stdin').toString().split(' ');
H = Number(H === "0" ? 24 : H);
M = Number(M);

const hours = Math.floor(((H*60 +M)-45)/60) === 24? 0 : Math.floor(((H*60 +M)-45)/60)
const min = ((H*60 + M)-45)%60

console.log( `${hours} ${min}`);