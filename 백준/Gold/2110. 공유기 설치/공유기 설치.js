const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const [N, C, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
arr.sort((a, b) => a - b);

function solve(arr, C) {
  let start = 1;
  let end = arr[N - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 1;
    let pre = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] - pre >= mid) {
        cnt += 1;
        pre = arr[i];
      }
    }

    if (cnt < C) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

console.log(solve(arr, C));
