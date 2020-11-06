const x = 18;

function solution(x) {
  let arrX = x.toString().split('');

  console.log(arrX);

  let sum = 0;
  for (let i = 0; i < arrX.length; i++) {
    sum += parseInt(arrX[i]);
  }

  console.log(sum);

  let result = true;

  if (x % sum === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
