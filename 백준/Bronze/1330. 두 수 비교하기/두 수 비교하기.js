let fs = require('fs');
let [A,B] = fs.readFileSync('/dev/stdin').toString().split(' ');
A = Number(A);
B = Number(B);
if(A == B) { 
    console.log("==");
} else {console.log(A > B  ? ">" : "<")}