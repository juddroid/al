const pobi = [131, 132];
const crong = [211, 212];

// pobi score

let pobiStr = [];
for (let i = 0; i < pobi.length; i++) {
  pobiStr.push(pobi[i].toString().split(''));
}

console.log(pobiStr);

let pobiScoreArr = [];

for (let i = 0; i < pobiStr.length; i++) {
  for (let j = 0; j < pobiStr[i].length; j++) {
    console.log(i, j);
    pobiScoreArr.push(parseInt(pobiStr[i][j]) + parseInt(pobiStr[i][j + 1]));
    pobiScoreArr.push(pobiStr[i][j] * pobiStr[i][j + 1]);
  }
}

console.log(pobiScoreArr);

let pobiOnlyScore = [];
pobiScoreArr.forEach((e) => {
  if (!isNaN(e)) {
    pobiOnlyScore.push(e);
  }
});

console.log(pobiOnlyScore);

let pobiMaxScore = pobiOnlyScore.sort((a, b) => a - b).reverse()[0];

console.log(pobiMaxScore);

// crong score

let crongStr = [];
for (let i = 0; i < crong.length; i++) {
  crongStr.push(crong[i].toString().split(''));
}

console.log(crongStr);

let crongScoreArr = [];

for (let i = 0; i < crongStr.length; i++) {
  for (let j = 0; j < crongStr[i].length; j++) {
    console.log(i, j);
    crongScoreArr.push(parseInt(crongStr[i][j]) + parseInt(crongStr[i][j + 1]));
    crongScoreArr.push(crongStr[i][j] * crongStr[i][j + 1]);
  }
}

console.log(crongScoreArr);

let crongOnlyScore = [];
crongScoreArr.forEach((e) => {
  if (!isNaN(e)) {
    crongOnlyScore.push(e);
  }
});

console.log(crongOnlyScore);

let crongMaxScore = crongOnlyScore.sort((a, b) => a - b).reverse()[0];

console.log(crongMaxScore);

// 점수비교
console.log(pobiMaxScore, crongMaxScore);

let result = 0;
if (pobiMaxScore > crongMaxScore) {
  result = 1;
} else if (pobiMaxScore < crongMaxScore) {
  result = 2;
} else if (pobiMaxScore === crongMaxScore) {
  result = 0;
} else {
  result = -1;
}

console.log(result);
