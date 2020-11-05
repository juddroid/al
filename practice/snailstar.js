// normal

let snail = '';

for (let j = 1; j <= 1; j++) {
  for (let i = 1; i <= 25; i++) {
    snail = snail + ' ' + String(i).padStart(2, ' ');
    if (i % 5 === 0) {
      snail = snail + '\n';
    }
  }
}
console.log(snail);

// createArray

function createArr(num) {
  let sqrtArr = [];

  for (let k = 1; k <= num; k++) {
    sqrtArr.push(k);
  }
  return sqrtArr;
}

const twentyFive = createArr(25);

function createStarArr(num) {
  let sqrtArr = [];

  for (let k = 1; k <= num; k++) {
    sqrtArr.push('*');
  }
  return sqrtArr;
}

const twentyFiveStar = createStarArr(25);

// zigzag

let newSnail = '';

for (let g = 0; g <= 20; g += 5) {
  if (g % 10 === 0) {
    for (let h = 1; h <= 5; h++) {
      newSnail =
        newSnail +
        ' ' +
        String(twentyFive.slice(g, g + 5)[h - 1]).padStart(2, ' ');
      if (h % 5 === 0) {
        newSnail = newSnail + '\n';
      }
    }
  } else {
    for (let h = 1; h <= 5; h++) {
      newSnail =
        newSnail +
        ' ' +
        String(twentyFive.slice(g, g + 5).reverse()[h - 1]).padStart(2, ' ');
      if (h % 5 === 0) {
        newSnail = newSnail + '\n';
      }
    }
  }
}

// console.log(newSnail);

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

const snailOne = newArr(twentyFiveStar);

for (let s = 0; s < snailOne.length; s++) {
  // console.log(snailOne[s]);
}

// let realSnail = [];
// for (sero = 0; sero < 5; sero++) {
//   for (garo = 0; garo < 5; garo++) {
//     realSnail.push([`[${sero}][${garo}]`]);
//   }
// }

xBox = '';

for (x = 0; x < 5; x++) {
  xBox = xBox + '*';
  if (x === 4) {
    xBox = xBox + '\n';
    for (y = 0; y < 3; y++) {
      for (x = 0; x < 4; x++) {
        xBox = xBox + ' ';
      }
      xBox = xBox + '*';
      xBox = xBox + '\n';
      if (y === 2) {
        for (x = 0; x < 5; x++) {
          xBox = xBox + '*';
        }
      }
    }
  }
}
// console.log(xBox);

// let garo = 0; // 가로
// let sero = 0; //세로
// let snailCount = 0; // 카운트

// for (let sero = 0; sero < 5; sero++) {
//   snailCount++;
//   snailOne[garo][sero] = snailCount;
//   if (sero === 4) {
//     for (let garo = 0; garo < 5; garo++) {
//       snailOne[garo][sero] = snailCount;
//       snailCount++;
//       if (garo === 4) {
//         for (let sero = 3; sero > -1; sero--) {
//           snailOne[garo][sero] = snailCount;
//           snailCount++;
//           if (sero === 0) {
//             for (let garo = 3; garo > 0; garo--) {
//               snailOne[garo][sero] = snailCount;
//               snailCount++;
//               if (garo === 1) {
//                 for (let sero = 1; sero < 4; sero++) {
//                   snailOne[garo][sero] = snailCount;
//                   snailCount++;
//                   if (sero === 3) {
//                     for (let garo = 2; garo < 4; garo++) {
//                       snailOne[garo][sero] = snailCount;
//                       snailCount++;
//                       if (garo === 3) {
//                         for (let sero = 2; sero > 0; sero--) {
//                           snailOne[garo][sero] = snailCount;
//                           snailCount++;
//                           if (sero === 1) {
//                             for (let garo = 2; garo < 3; garo++) {
//                               snailOne[garo][sero] = snailCount;
//                               snailCount++;
//                               if (garo === 2) {
//                                 for (let sero = 2; sero < 3; sero++) {
//                                   snailOne[garo][sero] = snailCount;
//                                   snailCount++;
//                                 }
//                               }
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// snailOne[0][0] = 1;
// snailOne[0][1] = 2;
// snailOne[0][2] = 3;
// snailOne[0][3] = 4;
// snailOne[0][4] = 5;

// snailOne[1][4] = 6;
// snailOne[2][4] = 7;
// snailOne[3][4] = 8;
// snailOne[4][4] = 9;

// snailOne[4][3] = 10;
// snailOne[4][2] = 11;
// snailOne[4][1] = 12;
// snailOne[4][0] = 13;

// snailOne[3][0] = 14;
// snailOne[2][0] = 15;
// snailOne[1][0] = 16;

// snailOne[1][1] = 17;
// snailOne[1][2] = 18;
// snailOne[1][3] = 19;

// snailOne[2][3] = 20;
// snailOne[3][3] = 21;

// snailOne[3][2] = 22;
// snailOne[3][1] = 23;

// snailOne[2][1] = 24;

// snailOne[2][2] = 25;

console.log(snailOne);

let printSnail = '';

for (let j = 0; j < snailOne.length; j++) {
  for (let i = 0; i < snailOne.length; i++) {
    printSnail = printSnail + ' ' + String(snailOne[j][i]).padStart(2, ' ');
  }
  printSnail += '\n';
}
console.log(printSnail);
