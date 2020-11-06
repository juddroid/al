const n = 4;
const m = 6;

let nArr = [];
let mArr = [];

for (let i = 0; i <= n; i++) {
  if (n % i === 0) {
    nArr.push(i);
  }
}

for (let i = 0; i <= m; i++) {
  if (m % i === 0) {
    mArr.push(i);
  }
}

console.log(nArr, mArr);

let length = Math.max(nArr.length, mArr.length);

console.log(length);
