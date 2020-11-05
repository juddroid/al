const n = 987;

function solution(n) {
  let num = String(n).split('');

  console.log(num);

  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result += parseInt(num[i]);
  }

  console.log(result);
  return result;
}
