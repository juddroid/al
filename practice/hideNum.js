const phone_number = '01033334444';

function solution(phone_number) {
  let numArr = phone_number.split('').reverse();

  console.log(numArr);

  let hideNum = [];

  for (let i = 0; i < numArr.length; i++) {
    hideNum.push(numArr[i]);
    if (i === 4) {
      for (i; i < numArr.length; i++) {
        hideNum.splice(i, 1, '*');
      }
    }
  }

  console.log(hideNum);

  let revNum = hideNum.reverse();

  let result = '';

  for (let i = 0; i < revNum.length; i++) {
    result += revNum[i];
  }
  return result;
}
