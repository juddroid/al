const n = 6;

function solution(n) {
  // move = n, n-1, n-2, n-3, ... , 2, 1
  // direction = down => right, up, leftDown, right, up, leftDown

  let snailNum = 1;
  let snail = [0, 0];
  let repeatNumber = n;

  const makeSanilArray = function (size) {
    let array = [];
    for (let i = 0; i < size; i++) {
      let temp = [];
      for (let j = 0; j < size; j++) {
        temp.push(0);
      }
      array.push(temp);
    }
    return array;
  };
  let imSnail = makeSanilArray(n);

  const changeNumber = (snailNumber, arr, snailArr) =>
    (arr[snailArr[0]][snailArr[1]] = snailNumber);

  const goDown = (snailArr) => snailArr[0]++;
  const goRight = (snailArr) => snailArr[1]++;
  const goUp = (snailArr) => snailArr[0]--;
  const goLeftDown = (snailArr) => {
    snailArr[0]++;
    snailArr[1]--;
  };

  const goRepeatDown = function () {
    changeNumber(snailNum, imSnail, snail);
    let i = 0;
    while (i !== repeatNumber - 1) {
      i++;
      snailNum++;
      goDown(snail);
      changeNumber(snailNum, imSnail, snail);
    }
    repeatNumber--;
    repeatNumber === 0 ? finish() : goRepeatRight();
  };

  const goRepeatRight = function () {
    let i = 0;
    while (i !== repeatNumber) {
      i++;
      snailNum++;
      goRight(snail);
      changeNumber(snailNum, imSnail, snail);
    }
    repeatNumber--;
    repeatNumber === 0 ? finish() : goRepeatUp();
  };

  const goRepeatUp = function () {
    let i = 0;
    while (i !== repeatNumber) {
      i++;
      snailNum++;
      goUp(snail);
      changeNumber(snailNum, imSnail, snail);
    }
    repeatNumber--;
    repeatNumber === 0 ? finish() : goRepeatLeftDown();
  };

  const goRepeatLeftDown = function () {
    let i = 0;
    while (i !== repeatNumber) {
      i++;
      snailNum++;
      goLeftDown(snail);
      changeNumber(snailNum, imSnail, snail);
    }
    repeatNumber--;
    repeatNumber === 0 ? finish() : goRepeatRight();
  };

  const finish = () => imSnail;

  const concatSnail = function (arr) {
    let concatedSnail = [];
    for (let i = 0; i < arr.length; i++) {
      concatedSnail = concatedSnail.concat(arr[i]);
    }
    return concatedSnail;
  };

  const zeroSnail = concatSnail(imSnail);

  let realSnail = [];
  const popZero = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] !== 0) {
          realSnail.push(arr[i][j]);
        }
      }
    }
    return realSnail;
  };
  console.log(imSnail);
  goRepeatDown(n);
  popZero(imSnail);

  return realSnail;
}
