const seoul = ['Jane', 'Kim'];

function solution(seoul) {
  let kim = '';

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      kim += i;
    }
  }

  var answer = `김서방은 ${kim}에 있다`;
  return answer;
}

console.log(solution(seoul));
