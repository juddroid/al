const n = 12;

function solution(n) {
  let trivial = [];

  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      trivial.push(i);
    }
  }

  console.log(trivial);

  let sum = 0;

  for (let i = 0; i < trivial.length; i++) {
    sum += trivial[i];
  }

  console.log(sum);

  return sum;
}
