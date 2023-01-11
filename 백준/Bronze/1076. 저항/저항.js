const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const table = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
const answer =  table.indexOf(input[0]).toString() + table.indexOf(input[1]).toString() + "0".repeat(table.indexOf(input[2])).toString();
console.log(parseInt(answer))