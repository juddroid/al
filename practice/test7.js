const n = 4;
const horizontal = true;

let robotArr = [];
for (let i = 0; i < n; i++) {
  let temp = [];
  for (let j = 0; j < n; j++) {
    temp.push(i.toString() + j.toString());
  }
  robotArr.push(temp);
}

console.log(robotArr);

let second = 0;

let x = 0;
let y = 0;

function ctrlRd(arr, i, j) {
  console.log('ctrlRd', 'x', i, 'y', j);
  if (i === 0 && j === 0) {
    arr[i].splice(j, 1, second);
    console.log('go right');
    console.log('x', i, 'y', j);
    goRight(arr, i, j);
  } else if (
    (typeof arr[i - 1] === 'undefined' && typeof arr[i][j + 1] === 'string') ||
    (typeof arr[i + 1] === 'undefined' && typeof arr[i][j + 1] === 'string')
  ) {
    console.log('go right');
    console.log('x', i, 'y', j);
    goRight(arr, i, j);
  } else if (
    (typeof arr[i][j - 1] === 'undefined' &&
      typeof arr[i + 1][j] === 'string') ||
    (typeof arr[i][j + 1] === 'undefined' && typeof arr[i + 1][j] === 'string')
  ) {
    console.log('go down');
    console.log('x', i, 'y', j);
    goDown(arr, i, j);
  }
}

function ctrlLu(arr, i, j) {
  console.log('ctrlLu', 'x', i, 'y', j);
  if (
    (typeof arr[i - 1] === 'undefined' &&
      typeof arr[i - 1][j + 1] === 'string') ||
    (typeof arr[i + 1] === 'undefined' && typeof arr[i - 1][j + 1] === 'string')
  ) {
    if (typeof arr[i - 1][j + 1] === 'string') {
      console.log('go rightup');
      rightUp(arr, i, j);
    }
  }
  if (typeof arr[i - 1] === 'undefined') {
    if (typeof arr[i + 1][j - 1] === 'string') {
      console.log('go leftdown');
      leftDown(arr, i, j);
    }
  }
}

function goRight(arr, i, j) {
  second += 1;
  j++;
  arr[i].splice(j, 1, second); // robotArr 에 second 입력해주고
  console.log('x', i, 'y', j, 'second: ' + second);
  console.log('go ctrlLu');
  ctrlLu(arr, i, j);
}

function goDown(arr, i, j) {
  second += 1;
  i++;
  arr[i].splice(j, 1, second); // robotArr 에 second 입력해주고
  console.log('x', i, 'y', j, 'second: ' + second);
  ctrlLu(arr, i, j);
}

function leftDown(arr, i, j) {
  for (i, j; i < n, j >= 0; i++, j--) {
    console.log('leftdown operating');
    arr[i].splice(j, 1, second);
    console.log('x', i, 'y', j, 'second: ' + second);
    second += 2;
  }
  second -= 2;
  i--;
  j++;
  ctrlRd(arr, i, j);
  // if (i + 1 > 0 && j - 1 < 0) {
  //   console.log('go ctrlRd');
  //   ctrlRd(arr, i, j);
  // } else {
  //   i++;
  //   j--;
  //   second += 2;
  //   arr[i].splice(j, 1, second);
  //   console.log('x', i, 'y', j, 'second: ' + second);
  // }
}

function rightUp(arr, i, j) {
  for (i, j; i > 0 || j < n - 1; i--, j++) {
    console.log('rightup operating');
    arr[i].splice(j, 1, second);
    console.log('x', i, 'y', j, 'second: ' + second);
    second += 2;
  }
  second -= 2;
  i++;
  j--;
  ctrlRd(arr, i, j);
}

if (horizontal) {
  ctrlRd(robotArr, x, y);
}

// let robotArr = [];
// for (let i = 0; i < n; i++) {
//   let temp = [];
//   for (let j = 0; j < n; j++) {
//     temp.push(i.toString() + j.toString());
//   }
//   robotArr.push(temp);
// }

// console.log(robotArr);

// let second = 0;

// let marker = [robotArr[0][0]];

// function goRight(arr, i, j) {
//   if (i - 1 < 0) {
//     leftDown(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
//   } else if (i + 1 > n) {
//     rightUp(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
//   } else {
//     marker.splice(0, 1, arr[i][j + 1]);
//     second++;
//     console.log(marker, second, 'goRight');
//   }
// }

// function leftDown(arr, i, j) {
//   for (let k = 0; k < arr.length; k++) {
//     // console.log(i + 1, j - 1);
//     if (i + 1 > 3 || j - 1 < 0) {
//       goDown(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
//     } else {
//       marker.splice(0, 1, arr[i + 1][j - 1]);
//       i++;
//       j--;
//       second += 2;
//       console.log(marker, second, 'leftDown');
//     }
//   }
// }

// function goDown(arr, i, j) {
//   if (i - 1 < 0 || j + 1 > 3) {
//     marker.splice(0, 1, arr[i + 1][j]);
//     second++;
//     console.log(marker, second, 'goDown');
//     rightUp(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
//   } else {
//     return;
//   }
// }

// function rightUp(arr, i, j) {
//   for (let k = 0; k < arr.length; k++) {
//     if (i - 1 < 0) {
//       goRight(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
//     } else {
//       marker.splice(0, 1, arr[i - 1][j + 1]);
//       i--;
//       j++;
//       second += 2;
//       console.log(marker, second, 'rightUp');
//     }
//   }

//   return marker;
// }

// if (horizontal) {
//   goRight(robotArr, parseInt(marker[0][0]), parseInt(marker[0][1]));
// }
