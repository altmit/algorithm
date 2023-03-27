function solution(number, limit, power) {
  let num = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i / 2;j++) {
      if (i % j === 0) {
        count ++;
      }
    }
    num += (count + 1) > limit ? power : (count + 1) ;
  }

  return num
}