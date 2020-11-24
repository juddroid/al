// const board = [
//   [3, 5, 6],
//   [9, 2, 7],
//   [4, 1, 8],
// ];

const board = [
  [2, 8, 6],
  [1, 4, 7],
  [5, 9, 3],
];

let ijArr = [];

for (let n = 1; n < board.length ** 2 + 1; n++) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === n) {
        console.log(i, j, 'n: ' + n);
        let tempArr = new Array();
        tempArr.push(i);
        tempArr.push(j);
        ijArr.push(tempArr);
      }
    }
  }
}

// i나 j가 바뀐것의 절대값의 합이 1이면 count 1
// i나 j가 바뀐것의 절대값의 합이 2이면 count 2, 하지만 반대편으로 갈 수 있으면 1

// 다음 번호로 갈 때, 값 계산

const nextDistance = function (a, b) {
  let distance = Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  return distance;
};

let disArr = [];

for (let i = 0; i < ijArr.length - 1; i++) {
  let tempDis = nextDistance(ijArr[i], ijArr[i + 1]);
  disArr.push(tempDis);
}

console.log(ijArr);
console.log(disArr);

// 거리가 2일 때, i나 j가 같으면(같은 줄에 있으면) 반대편으로 바로 갈 수 있다. -1
// 거리가 3일 때, i끼리 다르고, j끼리 다르면 반대편으로 바로 갈 수 있다. -1
// 거리가 4일 때, max... , 무조건 반대편으로 가서 접근하는게 더 빠르다. -1

for (let i = 0; i < disArr.length; i++) {
  if (disArr[i] === 1) {
    continue;
  } else if (disArr[i] === 2) {
    if (ijArr[i][0] === ijArr[i + 1][0] || ijArr[i][1] === ijArr[i + 1][1]) {
      disArr[i]--;
    }
  } else if (disArr[i] === 3) {
    if (ijArr[i][0] !== ijArr[i + 1][0] && ijArr[i][1] !== ijArr[i + 1][1]) {
      disArr[i]--;
    }
  } else if (disArr[i] === 4) {
    disArr[i]--;
  }
}

console.log(disArr);

let count = 0;

for (let i = 0; i < disArr.length; i++) {
  count += disArr[i];
}

console.log(count);
