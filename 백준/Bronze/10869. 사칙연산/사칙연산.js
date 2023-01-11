let fs = require('fs');
let [A, B] = fs.readFileSync('/dev/stdin').toString().split(' ');
A = parseInt(A);
B = parseInt(B);
console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);
