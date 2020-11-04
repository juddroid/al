const arr = [3, 2, 6];
const divisor = 10;

function solution(arr, divisor) {
  let sortArr = arr.sort((a, b) => a - b);

  console.log(sortArr);

  let divArr = [];

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] % divisor === 0) {
      divArr.push(sortArr[i]);
    }
  }

  if (divArr.length === 0) {
    divArr.push(-1);
  }

  var answer = divArr;
  return answer;
}

console.log(solution(arr, divisor));
