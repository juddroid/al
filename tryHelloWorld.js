const s = 'try hello world';

function solution(s) {
  let splitS = s.split(' ');

  let result = '';

  for (let i = 0; i < splitS.length; i++) {
    for (let j = 0; j < splitS[i].length; j++) {
      if (j % 2 === 0) {
        result += splitS[i][j].toUpperCase();
      } else {
        result += splitS[i][j].toLowerCase();
      }
    }
    result += ' ';
  }

  let realResult = result.slice(0, -1);
  console.log(realResult);
  console.log(result.length, realResult.length);
  return realResult;
}

console.log(solution(s));
