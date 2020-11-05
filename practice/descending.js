const n = 118372;

function solution(n) {
  let nStr = n
    .toString()
    .split('')
    .sort((a, b) => a - b)
    .reverse();

  let result = '';
  for (let i = 0; i < nStr.length; i++) {
    result += nStr[i];
  }
  console.log(result);

  return parseInt(result);
}

console.log(solution(n));
