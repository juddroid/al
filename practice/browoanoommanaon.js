// const cryptogram = 'zyelleyz';
const cryptogram = 'browoanoommnaon';

let cryptoArr = cryptogram.split('');

console.log(cryptoArr);

let copyCrypto = [];

for (let i = 0; i < cryptoArr.length; i++) {
  copyCrypto.push(cryptoArr[i]);
}

console.log(copyCrypto);

function del(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      console.log(i);
      arr.splice(i, 2);
      del(arr);
    }
  }
  return arr;
}

console.log(del(copyCrypto));

let result = '';

for (let i = 0; i < copyCrypto.length; i++) {
  result += copyCrypto[i];
}

console.log(result);
