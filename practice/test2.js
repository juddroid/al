const s = '1234';
const op = '+';

function solution(s, op) {
  function plus(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }

  function multi(a, b) {
    return a * b;
  }

  let sArr = [];
  for (let i = 1; i < s.length; i++) {
    if (op === '+') {
      sArr.push(plus(parseInt(s.slice(0, i)), parseInt(s.slice(i, s.length))));
    } else if (op === '-') {
      sArr.push(minus(parseInt(s.slice(0, i)), parseInt(s.slice(i, s.length))));
    } else if (op === '*') {
      sArr.push(multi(parseInt(s.slice(0, i)), parseInt(s.slice(i, s.length))));
    }
  }

  console.log(sArr);
  return sArr;
}
