const x = -4;
const n = 2;

function solution(x, n) {
  let increase = x;
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(increase);
    increase += x;
  }

  console.log(arr);
  return arr;
}
