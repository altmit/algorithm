let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

a = BigInt(a);
b = BigInt(b);
console.log((a+b).toString());