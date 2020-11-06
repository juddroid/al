const arr = [1, 2, 3, 4];

function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avr = sum / arr.length;

  console.log(avr);
  return avr;
}
