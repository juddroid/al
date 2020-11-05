const arr = [4, 4, 4, 3, 3];

function solution(arr) {
  let sameArr = [];

  let marker = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== marker[0]) {
      marker[0] = arr[i];
      sameArr.push(marker[0]);
    }
  }

  var answer = sameArr;
  return answer;
}

console.log(solution(arr));
