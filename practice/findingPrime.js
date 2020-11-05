const n = 999999;

function solution(n) {
  // 소수 판별
  let primeNums = [];

  function primeChk(num) {
    let primeCheck = 0;
    for (let i = num; i > 0; i--) {
      if (num % i === 0) {
        primeCheck += 1;
      }
    }
    primeNums.push(primeCheck);
    return primeCheck;
  }

  for (let i = 2; i <= n; i++) {
    primeChk(i);
  }

  // console.log(primeNums);

  let primeCount = 0;

  for (let i = 0; i < primeNums.length; i++) {
    if (primeNums[i] === 2) {
      primeCount += 1;
    }
  }

  var answer = primeCount;
  return answer;
}

console.log(solution(n));
