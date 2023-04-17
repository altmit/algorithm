function solution(n) {
  const getNonCursedNumber = (count) => {
    if (count % 3 === 0) {
      count += 1;
      count = getNonCursedNumber(count);
    }

    if (count.toString().includes('3')) {
      count += 1;
      count = getNonCursedNumber(count);
    }

    return count;
  };

  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += 1;
    count = getNonCursedNumber(count);
  }

  return count;
}