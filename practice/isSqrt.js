const n = 120;

function solution(n) {
  let result = 0;
  let m = Math.sqrt(n);

  if (Math.sqrt(n) - parseInt(Math.sqrt(n)) === 0) {
    result += (m + 1) ** 2;
  } else {
    result -= 1;
  }

  console.log(result);
  return result;
}
