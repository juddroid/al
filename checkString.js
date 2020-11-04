let s = '1234aa';

function solution(s) {
  let result = '';
  let sp = s.split('');
  let spn = [];

  for (let i = 0; i < sp.length; i++) {
    spn.push(parseInt(sp[i]));
  }

  if (spn.length === 4 || spn.length === 6) {
    result = true;
  } else {
    result = false;
  }

  for (let i = 0; i < sp.length; i++) {
    if (isNaN(spn[i])) {
      result = false;
    } else {
      result;
    }
  }

  var answer = result;
  return answer;
}

function solution2(s) {
  if (!(s.length === 4 || s.length === 6)) return false;

  return Number.isInteger(s * 1);
}

console.log(solution2(s));
