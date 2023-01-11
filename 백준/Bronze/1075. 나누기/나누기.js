let fs = require('fs');
let [N, F] = fs.readFileSync('/dev/stdin').toString().split('\n');
N = Math.floor(N/100)+"00";
let result = N%F ? F-N%F : 0
result = result.toString();

console.log(result.length === 1 ? "0"+result : result);