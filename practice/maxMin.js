const n = 2;
const m = 5;

function solution(n, m) {
  let nArr = [];
  let mArr = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      nArr.push(i);
    }
  }

  for (let i = 0; i <= m; i++) {
    if (m % i === 0) {
      mArr.push(i);
    }
  }

  console.log(nArr, mArr);

  let maxArr = [];
  if (nArr.length >= mArr.length) {
    for (let i = 0; i < nArr.length; i++) {
      for (let j = 0; j < mArr.length; j++) {
        if (nArr[i] === mArr[j]) {
          maxArr.push(nArr[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < mArr.length; i++) {
      for (let j = 0; j < nArr.length; j++) {
        if (mArr[i] === nArr[j]) {
          maxArr.push(mArr[i]);
        }
      }
    }
  }

  console.log(maxArr);

  let maxNum = maxArr[maxArr.length - 1];

  let minArr = [];
  for (let i = n * m; i > 0; i--) {
    if (i % n === 0 && i % m === 0) {
      minArr.push(i);
    }
  }

  console.log(minArr);

  let minNum = minArr[minArr.length - 1];

  let result = [maxNum, minNum];

  return result;
}

console.log(solution(n, m));
