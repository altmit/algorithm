var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.forEach((e) => {
    let [a, b] = e.split(' ');
    let pow = 1;
    b = b%4 === 0 ? 4 : b%4;

    for (let j = 0; j < b; j++) {
      pow = (pow * a) % 10;
    }
  
    console.log(pow === 0 ? 10 : pow);
})


