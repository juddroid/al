//baseball
document.getElementById('start_btn');

let $box1 = document.getElementById('number_box_1');
let $box2 = document.getElementById('number_box_2');
let $box3 = document.getElementById('number_box_3');

let $check1 = document.getElementById('check_box_1');
let $check2 = document.getElementById('check_box_2');
let $check3 = document.getElementById('check_box_3');
let $checkButton = document.getElementById('check_btn');

function getGameNums() {
  let ranNumArr = [];
  let numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (ranNumArr.length !== 3) {
    let rnd = Math.floor(Math.random() * (numSet.length - 0) + 0);
    ranNumArr.push(numSet[rnd]);
    numSet.splice(rnd, 1);
  }
  return ranNumArr;
}

let gameNums = [];
let userInput = [];

function ranNums() {
  resetFocus();
  resetData();
  resetColorBox();
  $check1.focus();
  gameNums = getGameNums();

  $box1.innerText = '?';
  $box2.innerText = '?';
  $box3.innerText = '?';
  randomBackground();
  return gameNums;
}

/** 잔기능 **/

// auto tab
function autoTab(current, next) {
  if (current.value.length === 1) {
    moveFocus(next);
  }
}

// move focus
function moveFocus(next) {
  next.focus();
}

/** user number check **/

// 스타트 없이 체크 할 때,
const noStartCheck = () => gameNums.length === 0;
// 스타트 했지만 빈 상태로 체크 할 때,
const startButEmptyCheck = (arr) => arr.includes('');
// 중복된 숫자가 있을 때,
const sameNumberCheck = (arr) => Array.from(new Set(arr)).length !== 3;
// 숫자만 입력했는지,
const notOnlyNumber = (arr) => {
  let numberCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) - parseInt(arr[i]) === 0) {
      numberCount++;
    }
  }
  return numberCount !== 3;
};
// check Number를 다 통과했을 때,
const goToCheckBallCount = (arr) => {
  userInput = arr.map((e) => e * 1);
  return checkBallCount(gameNums, userInput);
};

function checkNum() {
  let checkArr = [$check1.value, $check2.value, $check3.value];
  if (noStartCheck()) {
    alert('START를 해라');
    $check1.focus();
  } else if (startButEmptyCheck(checkArr)) {
    alert('3개 다 입력을 해라!');
    let indexSet = { 0: $check1, 1: $check2, 2: $check3 };
    indexSet[checkArr.indexOf('')].focus();
  } else if (notOnlyNumber(checkArr)) {
    alert('숫자만!!');
    resetFocus();
  } else if (sameNumberCheck(checkArr)) {
    alert('중복!');
    resetFocus();
  } else {
    goToCheckBallCount(checkArr);
  }
}

/** score check for each inning **/

let scoreArr = [];

function checkBallCount(baseballNum, yourNum) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < baseballNum.length; i++) {
    for (let j = 0; j < yourNum.length; j++) {
      if (i === j && baseballNum[i] === yourNum[j]) {
        strike++;
      } else if (i !== j && baseballNum[i] === yourNum[j]) {
        ball++;
      }
    }
  }
  scoreArr = [strike, ball];
  return inningScore(scoreArr);
}

let result = '';

const winGame = (arr) => arr[0] === 3;
let resultBox = document.getElementById('result_box');

function inningScore(arr) {
  if (winGame(arr)) {
    $box1.innerText = gameNums[0];
    $box2.innerText = gameNums[1];
    $box3.innerText = gameNums[2];
    result = 'FINISH!';
    pushNum(arr);
    resultBox.innerText = 'You Win! \n Start New Game!';
  } else if (arr[0] === 0 && arr[1] === 0) {
    result = '3 OUT';
    pushNum(arr);
  } else {
    result = arr[0] + ' Strike ' + arr[1] + ' Ball';
    pushNum(arr);
  }
  return result;
}

let inning = 1;

function pushNum(arr) {
  resetFocus();
  document.getElementById('middle' + `${inning}`).childNodes[3].innerText =
    userInput[0];
  document.getElementById('middle' + `${inning}`).childNodes[5].innerText =
    userInput[1];
  document.getElementById('middle' + `${inning}`).childNodes[7].innerText =
    userInput[2];
  inningColorBox();
  if (arr[0] === 0 && arr[1] === 0) {
    document.getElementById('inning' + `${inning}`).innerText = result;
    threeOutColorBox();
  } else if (arr[0] === 3) {
    document.getElementById('inning' + `${inning}`).innerText = result;
    finishColorBox();
  } else {
    document.getElementById('inning' + `${inning}`).innerText = result;
  }
  inning++;
  fireGame();
}

let randomColor = '';
const randomBackground = () => {
  randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  $box1.style.backgroundColor = randomColor;
  $box2.style.backgroundColor = randomColor;
  $box3.style.backgroundColor = randomColor;
};

function inningColorBox() {
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[3].style.backgroundColor = randomColor;
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[5].style.backgroundColor = randomColor;
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[7].style.backgroundColor = randomColor;
  document.getElementById(
    'inning' + `${inning}`
  ).style.backgroundColor = randomColor;
}

function threeOutColorBox() {
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[3].style.backgroundColor = 'yellowgreen';
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[5].style.backgroundColor = 'yellowgreen';
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[7].style.backgroundColor = 'yellowgreen';
  document.getElementById('inning' + `${inning}`).style.backgroundColor =
    'yellowgreen';
}

function finishColorBox() {
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[3].style.backgroundColor = 'blue';
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[5].style.backgroundColor = 'blue';
  document.getElementById(
    'middle' + `${inning}`
  ).childNodes[7].style.backgroundColor = 'blue';
  document.getElementById('inning' + `${inning}`).style.backgroundColor =
    'blue';
  resultBox.style.backgroundColor = 'blue';
}

function resetFocus() {
  $check1.value = '';
  $check2.value = '';
  $check3.value = '';
  $check1.focus();
}

function resetColorBox() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(
      'middle' + `${i + 1}`
    ).childNodes[3].style.backgroundColor = '';
    document.getElementById(
      'middle' + `${i + 1}`
    ).childNodes[5].style.backgroundColor = '';
    document.getElementById(
      'middle' + `${i + 1}`
    ).childNodes[7].style.backgroundColor = '';
    document.getElementById('inning' + `${i + 1}`).style.backgroundColor = '';
  }
  resultBox.style.backgroundColor = '';
}

function resetData() {
  for (let i = 0; i < 9; i++) {
    document.getElementById('middle' + `${i + 1}`).childNodes[3].innerText = '';
    document.getElementById('middle' + `${i + 1}`).childNodes[5].innerText = '';
    document.getElementById('middle' + `${i + 1}`).childNodes[7].innerText = '';
    document.getElementById('inning' + `${i + 1}`).innerText = '';
  }
  resultBox.innerText = '';
  inning = 1;
}

function fireGame() {
  if (inning === 10) {
    resultBox.innerText = 'You Lose!';
    resultBox.style.backgroundColor = 'red';
  }
}

// Start 될때 ? 배경색 랜덤색상으로
// 이닝이 지나서 박스가 차면 색상이 바뀌도록
// 3아웃일때 색상 레드
// 입력창 리셋버튼
// 결과창 추가
// 승리, 패배화면 추가
