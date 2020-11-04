const a = 1;
const b = -1;

function solution(a, b) {
  let numArr = [a, b];
  let sortArr = numArr.sort((a, b) => a - b);
  let i = sortArr[0];
  let j = sortArr[1];
  let k = 0;

  console.log(sortArr);

  for (j; i <= j; j--) {
    k += j;
  }

  var answer = k;
  return answer;
}

console.log(solution(a, b));
