let s = 'AZbcBdeCfg';

function solution(s) {
  let sArr = s.split('');
  sArr.sort().reverse();

  let ansStr = [];

  sArr.forEach((j, i) => {
    ansStr += sArr[i];
  });

  var answer = ansStr;
  return answer;
}
console.log(solution(s));
