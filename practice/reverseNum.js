const n = 12345;

function solution(n) {
  let num = String(n).split('').reverse();

  console.log(num);

  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(parseInt(num[i]));
  }

  console.log(result);
  return result;
}
