const n = 626331;

function solution(n) {
  let check = 0;

  // 2로 나누기
  function divide(num) {
    let divNum = num / 2;
    oddNum(divNum);
  }

  // 3으로 곱하고 1을 더하기
  function multiple1(num) {
    let multiNum = num * 3 + 1;
    oddNum(multiNum);
  }

  // 홀짝

  function oddNum(num) {
    if (num === 1) {
      if (check > 500) {
        check = -1;
      }
    } else if (num % 2 === 0) {
      check += 1;
      divide(num);
    } else {
      check += 1;
      multiple1(num);
    }
  }

  console.log(oddNum(n), check);
  return check;
}
