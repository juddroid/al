const n = 13;

let nStr = '';
for (let i = 1; i <= n; i++) {
  nStr += i.toString();
}

console.log(nStr);

let nArr = nStr.split('');

console.log(nArr);

let result = 0;
for (let i = 0; i < nArr.length; i++) {
  if (nArr[i] === '3' || nArr[i] === '6' || nArr[i] === '9') {
    result += 1;
  }
}

console.log(result);
