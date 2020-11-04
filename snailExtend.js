const $comeOnSnail = document.getElementById('snail');

function snailClick() {
  console.log($comeOnSnail.value);
}

function createStarArr(num) {
  let sqrtArr = [];

  for (let k = 1; k <= num; k++) {
    sqrtArr.push('*');
  }
  return sqrtArr;
}
const snailBox = createStarArr(121);

// const snailBox = createStarArr(196);
// spliceArray

function newArr(arr) {
  let sqrt = Math.sqrt(arr.length);
  let realNewArray = [];
  for (i = 0; i < sqrt; i++) {
    realNewArray.push(arr.slice(sqrt - sqrt + sqrt * i, sqrt + sqrt * i));
  }
  return realNewArray;
}

// snail

// const snailTwo = newArr(snailBox);
const imRealSnail = newArr(snailBox);

// console.log(snailTwo);

let garo = 0; // 가로
let sero = 0; //세로
let snailCount = 0; // 카운트

// 가로 fix, 세로 + => 오른쪽
// 가로 +, 세로 fix => 아래
// 가로 fix, 세로 - => 왼쪽
// 가로 -, 세로 fix => 위

// 방향체크
// function checkDirecton(arr, j, i) {
//   if (arr[j][i + 1] === '*') {
//     console.log('right');
//     // right(arr);
//   } else if (arr[i][j - 1] === '*') {
//     console.log('left');
//   } else if (arr[j + 1][i] === '*') {
//     console.log('down', j, i);
//     down(arr, j, i);
//   } else if (arr[i - 1][j] === '*') {
//     console.log('up');
//   }
// }

// let arrData = [];

// function start(arr) {
//   let j = sero;
//   for (let i = garo; i < arr.length; i++) {
//     arr[j][i] = snailCount + 1;
//     snailCount++;
//     if (arr[j][i + 1] === undefined) {
//       console.log(arr, j, i);
//       checkDirecton(arr, j, i);
//     }
//   }
// }

// function right(arr) {
//   let j = sero;
//   for (let i = garo; i < arr.length; i++) {
//     arr[j][i] = snailCount + 1;
//     snailCount++;
//   }
// }

// function left(arr) {
//   let j = sero;
//   for (let i = garo; i < -arr.length; i--) {
//     arr[j][i] = snailCount + 1;
//     snailCount++;
//   }
// }

// function down(arr, j, i) {
//   for (j + 1; j < arr.length; j++) {
//     arr[j][i] = snailCount + 1;
//     snailCount++;
//   }
// }
// function up(arr) {}

// // checkDirecton(snailTwo, 0, 0);
// // checkDirecton(snailTwo, 0, 8);
// start(snailTwo);

// let printSnails = '';

// for (let j = 0; j < snailTwo.length; j++) {
//   for (let i = 0; i < snailTwo.length; i++) {
//     printSnails = printSnails + ' ' + String(snailTwo[j][i]).padStart(2, ' ');
//   }
//   printSnails += '\n';
// }

// console.log(printSnails);

// 갑자기 while 쓰면 될 것 같아서 바꿔봄
// *을 계속 따라가는 방식으로 해볼 예정

let rows = 0;
let cols = 0;
let newCount = 1;

function startWhile(arr) {
  arr[rows][cols] = newCount;

  while (arr[rows][cols + 1] === '*') {
    newCount++;
    arr[rows][cols + 1] = newCount;
    cols++;
    if (arr[rows][cols + 1] !== '*') {
      chkDir(arr, rows, cols, newCount);
    }
  }
}

function chkDir(arr, rows, cols, newCount) {
  if (arr[rows][cols + 1] === '*') {
    console.log('right');
    goRight(arr, rows, cols, newCount);
  } else if (arr[rows][cols - 1] === '*') {
    console.log('left');
    goLeft(arr, rows, cols, newCount);
  } else if (
    arr[rows + 1] === undefined ? false : arr[rows + 1][cols] === '*'
  ) {
    console.log('down');
    goDown(arr, rows, cols, newCount);
  } else if (arr[rows - 1][cols] === '*') {
    console.log('up');
    goUp(arr, rows, cols, newCount);
  }
}

function goRight(arr, rows, cols, newCount) {
  while (arr[rows][cols + 1] === '*') {
    newCount++;
    arr[rows][cols + 1] = newCount;
    cols++;
    if (arr[rows][cols + 1] !== '*') {
      chkDir(arr, rows, cols, newCount);
    }
  }
}
function goLeft(arr, rows, cols, newCount) {
  while (arr[rows][cols - 1] === '*') {
    newCount++;
    arr[rows][cols - 1] = newCount;
    cols--;

    if (arr[rows][cols - 1] !== '*') {
      chkDir(arr, rows, cols, newCount);
    }
  }
}
function goDown(arr, rows, cols, newCount) {
  while (
    arr[rows + 1] === undefined || typeof arr[rows + 1][cols] === 'number'
      ? chkDir(arr, rows, cols, newCount)
      : arr[rows + 1][cols] === '*'
  ) {
    newCount++;
    arr[rows + 1][cols] = newCount;
    rows++;
  }
}
function goUp(arr, rows, cols, newCount) {
  while (arr[rows - 1][cols] === '*') {
    newCount++;
    arr[rows - 1][cols] = newCount;
    rows--;
    if (arr[rows - 1][cols] !== '*') {
      chkDir(arr, rows, cols, newCount);
    }
  }
}

startWhile(imRealSnail);

let printSnailYaHo = '';

for (let j = 0; j < imRealSnail.length; j++) {
  for (let i = 0; i < imRealSnail.length; i++) {
    printSnailYaHo =
      printSnailYaHo + ' ' + String(imRealSnail[j][i]).padStart(3, '  ');
  }
  printSnailYaHo += '\n';
}

console.log(printSnailYaHo);
