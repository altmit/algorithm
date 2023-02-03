let fs = require('fs');
let num = fs.readFileSync('/dev/stdin').toString()
num = Number(num);
for(let i = 1; i<=9;i++) {
    console.log(`${num} * ${i} = ${num*i}`)
}