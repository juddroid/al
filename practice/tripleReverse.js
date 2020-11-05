// 1 2  3  4  5  6  7  8  9 10
// 1 2 10 11 12 20 21 22 100

// 3진법

// 45 = (1 * 3^3) + (2 * 3^2) + (0 * 3^1) + (0 * 3^0) = 1200
// 0021 = (2 * 3^1) + (1 * 3^0) = 7

const n = 125;

function solution(n) {
  // 1. n => 3진법 , base3

  const base3N = n.toString(3);

  // 2. 뒤집기

  let arr3N = [];

  for (let i = 0; i < base3N.length; i++) {
    arr3N.push(parseInt(String(base3N.charAt(i))));
  }

  let reverse3N = arr3N.reverse();

  // 3. 다시 10진법 , base10

  let base10N = '';

  for (let i = 0; i < reverse3N.length; i++) {
    base10N += String(reverse3N[i]);
  }

  const result = parseInt(base10N, 3);

  var answer = result;
  return answer;
}
