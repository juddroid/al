const logs = [
  '0001 3 95',
  '0001 5 90',
  '0001 5 100',
  '0002 3 95',
  '0001 7 80',
  '0001 8 80',
  '0001 10 90',
  '0002 10 90',
  '0002 7 80',
  '0002 8 80',
  '0002 5 100',
  '0003 99 90',
];

let logsArr = [];
for (let i = 0; i < logs.length; i++) {
  logsArr.push(logs[i].split(' '));
}

console.log(logsArr);

let stuNum = [];
let problem = [];
let score = [];

for (let i = 0; i < logsArr.length; i++) {
  stuNum.push(logsArr[i][0]);
  problem.push(logsArr[i][1]);
  score.push(logsArr[i][2]);
}

console.log(stuNum);
console.log(problem);
console.log(score);

let chkStu = 0;
let chkPro = 0;

let setStu = new Set(stuNum);

console.log(setStu);

for (let i = 0; i < stuNum.length; i++) {}
