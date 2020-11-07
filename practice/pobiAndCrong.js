const pobi = [399, 400];
const crong = [90, 91];

// pobi score

let pobiStr = [];
for (let i = 0; i < pobi.length; i++) {
  pobiStr.push(pobi[i].toString().split(''));
}

console.log(pobiStr);

let pobiScoreArr = [];

for (let i = 0; i < pobiStr.length; i++) {
  let tempPlus = 0;
  let tempMulti = 1;
  for (let j = 0; j < pobiStr[i].length; j++) {
    tempPlus += parseInt(pobiStr[i][j]);
    tempMulti *= parseInt(pobiStr[i][j]);
  }
  pobiScoreArr.push(tempPlus);
  pobiScoreArr.push(tempMulti);
}

console.log(pobiScoreArr);

let pobiMaxScore = pobiScoreArr.sort((a, b) => a - b).reverse()[0];

console.log(pobiMaxScore);

// crong score

let crongStr = [];
for (let i = 0; i < crong.length; i++) {
  crongStr.push(crong[i].toString().split(''));
}

console.log(crongStr);

let crongScoreArr = [];

for (let i = 0; i < crongStr.length; i++) {
  let tempPlus = 0;
  let tempMulti = 1;
  for (let j = 0; j < crongStr[i].length; j++) {
    tempPlus += parseInt(crongStr[i][j]);
    tempMulti *= parseInt(crongStr[i][j]);
  }
  crongScoreArr.push(tempPlus);
  crongScoreArr.push(tempMulti);
}

console.log(crongScoreArr);

let crongMaxScore = crongScoreArr.sort((a, b) => a - b).reverse()[0];

console.log(crongMaxScore);

// 점수비교
console.log(
  '[pobi Score:',
  pobiMaxScore,
  '], ' + '[crong Score:',
  crongMaxScore,
  ']'
);

let result = 0;

if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
  console.log('wierd page');
  result = -1;
} else if (pobiMaxScore > crongMaxScore) {
  console.log('pobi Win');
  result = 1;
} else if (pobiMaxScore < crongMaxScore) {
  console.log('crong Win');
  result = 2;
} else if (pobiMaxScore === crongMaxScore) {
  result = 0;
} else {
  result = -1;
}

console.log(result);
