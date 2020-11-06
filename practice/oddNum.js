const num = 3;

function solution(num) {
  let result = '';

  if (num % 2 === 0) {
    result += 'Even';
  } else {
    result += 'Odd';
  }

  return result;
}
