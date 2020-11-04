// 2016년 1월 1일, 금요일
// SUN MON TUE WED THU FRI SAT

let a = 5;
let b = 24;

function solution(a, b) {
  const findingDay = new Date(`2016, ${a}, ${b}`);
  const when = findingDay.getDay();

  console.log(when);

  const dayBox = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  console.log(dayBox[when]);

  var answer = dayBox[when];
  return answer;
}

solution(a, b);
