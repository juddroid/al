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

let marker = [robotArr[0][0]];

function goRight(arr, i, j) {
  if (i - 1 < 0) {
    leftDown(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
  } else if (i + 1 > n) {
    rightUp(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
  } else {
    marker.splice(0, 1, arr[i][j + 1]);
    second++;
    console.log(marker, second, 'goRight');
  }
}

function leftDown(arr, i, j) {
  for (let k = 0; k < arr.length; k++) {
    // console.log(i + 1, j - 1);
    if (i + 1 > 3 || j - 1 < 0) {
      goDown(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
    } else {
      marker.splice(0, 1, arr[i + 1][j - 1]);
      i++;
      j--;
      second += 2;
      console.log(marker, second, 'leftDown');
    }
  }
}

function goDown(arr, i, j) {
  if (i - 1 < 0 || j + 1 > 3) {
    marker.splice(0, 1, arr[i + 1][j]);
    second++;
    console.log(marker, second, 'goDown');
    rightUp(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
  } else {
    return;
  }
}

function rightUp(arr, i, j) {
  for (let k = 0; k < arr.length; k++) {
    if (i - 1 < 0) {
      goRight(arr, parseInt(marker[0][0]), parseInt(marker[0][1]));
    } else {
      marker.splice(0, 1, arr[i - 1][j + 1]);
      i--;
      j++;
      second += 2;
      console.log(marker, second, 'rightUp');
    }
  }

  return marker;
}

if (horizontal) {
  goRight(robotArr, parseInt(marker[0][0]), parseInt(marker[0][1]));
}
