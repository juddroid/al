// 기능을 한가지만!

// 뽑고,
// 푸쉬하고, check
// 체크하고, check
// 정렬하고, check

// 번호 한세트 추출
let lottoSet = [];
const fixNumber = { length: 6, lottoLength: 45 };

function pickNumber() {
  const randomNumber = () =>
    Math.floor(Math.random() * (fixNumber['lottoLength'] - 0) + 1);
  const checkNumber = (arr, num) => arr.includes(num);
  const pushNumber = (arr, num) => arr.push(num);
  const sortNumber = (arr) => arr.sort((a, b) => a - b);
  let tempArr = [];
  while (tempArr.length !== fixNumber['length']) {
    let randomNum = randomNumber();
    if (!checkNumber(tempArr, randomNum)) {
      pushNumber(tempArr, randomNum);
    }
  }
  sortNumber(tempArr);
  lottoSet = tempArr;
}

// 엘리먼트 만들기
const titleText = 'LOTTOWORLD';
function createCircleBox(title, i) {
  let createDiv = document.createElement('div');
  createDiv.className = 'circle_box';
  createDiv.style.type = 'text';
  document.querySelector('.title_box').append(createDiv);
  createDiv.innerText = title[i];
}

// 텍스트 넣어주기
function getTitle() {
  let splitTitle = titleText.split('');
  for (let i = 0; i < splitTitle.length; i++) {
    createCircleBox(splitTitle, i);
  }
}

// circle 6개 만들기
function createCircle() {
  for (let i = 0; i < fixNumber['length']; i++) {
    let tempDiv = document.createElement('input');
    tempDiv.className = 'circle_box';
    $inputBox.append(tempDiv);
  }
}

getTitle();

let $titleCircleBox = document.querySelectorAll('.title_box .circle_box');
let $randomCircleBox = document.getElementsByClassName('random_circle_box');
let $numberBox = document.querySelector('.view_box');
let $plusFiveButton = document.getElementById('plusFiveButton');
let $increaseButton = document.getElementById('increaseButton');
let $decreaseButton = document.getElementById('decreaseButton');
let $resetButton = document.getElementById('resetButton');
let $viewNumber = document.querySelectorAll('.view_box > .circle_box');
let $inputBox = document.querySelector('.input_box');
let $addBox = document.querySelector('.add_box');
let $addNumber;
let $addedViewBox = document.getElementsByClassName('add_view_circle_box');

createCircle();
controlFocus();
function controlFocus() {
  $inputBox.getElementsByClassName('circle_box')[0].focus();
}

// 랜던색상추출
const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

// 클래스이름 / 색상 바꿔주기
function changeBoxColor(box1, box2) {
  changeBox(box1);
  changeRandomColor(box2);
}

// 클래스 이름
const changeBox = (box) => {
  for (let i = 0; i < box.length; i++) {
    changeClassName(box, i);
  }
};
const changeClassName = (box, index) =>
  (box[index].className = 'random_circle_box');

// 색상
const changeRandomColor = (box) => {
  for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = randomColor();
  }
};

// 번호 보여주기
// 여기 for... in 으로 어떠케 하는거지
let count = 0;
// const checkCounter = () => {
//   if (count !== 0) {
//     displayToggle($addNumber);
//   }
// };

function viewNumber() {
  pickNumber();
  controlColor($viewNumber);
  controlNumber($viewNumber);
  getBottomBox();
  count++;
}

function controlNumber(num) {
  for (let i = 0; i < num.length; i++) {
    num[i].innerText = lottoSet[i];
  }
}

function addBox() {
  let tempBox;
  tempBox = document.createElement('div');
  tempBox.className = 'add_view_circle_box';
  $addBox.append(tempBox);
}

function addNumber() {
  let tempArr = [];
  for (let i = 0; i < fixNumber['length']; i++) {
    let tempDiv = document.createElement('div');
    tempDiv.className = 'circle_box';

    $addBox
      .getElementsByClassName('add_view_circle_box')
      [count].append(tempDiv);
    tempDiv.innerText = lottoSet[i];
    tempArr.push(tempDiv);
  }
  controlColor(tempArr);
  $addNumber = $addBox.querySelector('.add_view_circle_box');
}

function getBottomBox() {
  addBox();
  addNumber();
}

// const displayToggle = (num) => (num.className = 'add_view_circle_box');

function getColorCode(num) {
  const colorSet = {
    1: 'yellow',
    2: 'skyblue',
    3: 'red',
    4: 'gray',
    5: 'yellowgreen',
  };

  let colorIndex = parseInt(num / 10) + 1;
  return colorSet[colorIndex];
}

const controlColor = (arr) => {
  for (let i = 0; i < lottoSet.length; i++) {
    arr[i].style.backgroundColor = getColorCode(lottoSet[i]);
  }
};

const removeBox = (box) => box[0].remove();
const removeOneBox = () => {
  if (count !== 0) {
    $addedViewBox[0].remove();
    count--;
  }
};
const removeAllBox = (box) => {
  while (box.length !== 0) {
    removeBox(box);
    box.length--;
  }
};

function reset() {
  count = 0;
  for (let $viewNum of $viewNumber) {
    $viewNum.innerText = '';
    $viewNum.style.backgroundColor = '';
  }
  changeBoxColor($titleCircleBox, $randomCircleBox);
  removeAllBox($addedViewBox);
}

function fiveGames() {
  for (let i = 0; i < 5; i++) {
    viewNumber();
  }
}

$plusFiveButton.addEventListener('click', fiveGames);
$increaseButton.addEventListener('click', viewNumber);
$decreaseButton.addEventListener('click', removeOneBox);
$resetButton.addEventListener('click', reset);

changeBoxColor($titleCircleBox, $randomCircleBox);

// 앞으로...
// 번호 구간에 따라 색상 변경 (display: none)으로 해보자. check
// 1 - 10: 노랑
// 11 - 20: 하늘색
// 21 -30: 빨강
// 31 - 40: 회색
// 41 - 45: 녹색
// 5세트 뽑기
// 리셋버튼 check
// 뽑은 번호, 일정 구간 보여주기, 아래에 배치 check
// 몇가지 조건 추가해보기(연속 된 숫자, 구간별 숫자 개수)
// API연동해서 지난 주 번호와 겹치지 않게 하기.. 이건 시간이 걸릴듯
// 숫자 입력 받아서 지금까지 당첨된 번호 있는지 보기
