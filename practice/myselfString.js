let strings = ['sun', 'bed', 'car'];
const n = 1;

function solution(strings, n) {
  const idxArr = [];

  for (let i = 0; i < strings.length; i++) {
    idxArr.push(strings[i][n]);
  }

  console.log(idxArr);

  let readySort = [];

  for (let i = 0; i < idxArr.length; i++) {
    readySort.push(idxArr[i].concat(strings[i]));
  }

  console.log(readySort);

  let sortArr = readySort.sort();

  console.log(sortArr);

  let rcvArr = [];

  for (let i = 0; i < idxArr.length; i++) {
    rcvArr.push(sortArr[i].slice(1));
  }

  var answer = rcvArr;
  return answer;
}

console.log(solution(strings, n));
