// 기능을 한가지만!

// 뽑고,
// 푸쉬하고, check
// 체크하고, check
// 정렬하고, check

// 번호 한세트 추출
let lottoSet = [];
function pickNumber() {
  let tempArr = [];
  while (tempArr.length !== 6) {
    let randomNum = randomNumber();
    if (checkNumber(tempArr, randomNum)) {
      continue;
    }
    pushNumber(tempArr, randomNum);
  }
  sortNumber(tempArr);
  lottoSet = tempArr;
}
const randomNumber = () => Math.floor(Math.random() * (45 - 0) + 1);
const checkNumber = (arr, num) => arr.includes(num);
const pushNumber = (arr, num) => arr.push(num);
const sortNumber = (arr) => arr.sort((a, b) => a - b);

// 타이틀 만들기

// 엘리먼트 만들기
const titleText = 'LOTTOWORLD';
function createCircleBox(title, i) {
  let createDiv = document.createElement('div');
  createDiv.className = 'circle_box';
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
getTitle();

// 타이틀 색상관련
let $titleCircleBox = document.querySelectorAll('.title_box .circle_box');
let $randomCircleBox = document.getElementsByClassName('random_circle_box');
let $numberBox = document.querySelector('.view_box');
let $createButton = document.getElementById('createButton');
let $resetButton = document.getElementById('resetButton');
let $viewNumber = document.querySelectorAll('.view_box > .circle_box');

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
const counter = () => count++;

const checkCount = () => {
  if (count === 0) {
    viewNumber();
  } else {
    viewNumber();
    addNumber();
  }
};

function viewNumber() {
  counter();
  pickNumber();
  controlColor();
  for (let i = 0; i < $viewNumber.length; i++) {
    $viewNumber[i].innerText = lottoSet[i];
  }
}

function addNumber() {
  let createDiv = document.createElement('div');
  createDiv.className = 'circle_box';
  document.querySelector('.add_box').append(createDiv);
  createDiv.innerText = '';
}

const colorSet = {
  1: 'yellow',
  2: 'skyblue',
  3: 'red',
  4: 'gray',
  5: 'yellowgreen',
};
const controlColor = () => {
  for (let i = 0; i < lottoSet.length; i++) {
    if (lottoSet[i] <= 10) {
      $viewNumber[i].style.backgroundColor = colorSet[1];
    } else if (lottoSet[i] <= 21) {
      $viewNumber[i].style.backgroundColor = colorSet[2];
    } else if (lottoSet[i] <= 31) {
      $viewNumber[i].style.backgroundColor = colorSet[3];
    } else if (lottoSet[i] <= 41) {
      $viewNumber[i].style.backgroundColor = colorSet[4];
    } else {
      $viewNumber[i].style.backgroundColor = colorSet[5];
    }
  }
};

function reset() {
  count = 0;
  for (let i = 0; i < $viewNumber.length; i++) {
    $viewNumber[i].innerText = '';
    $viewNumber[i].style.backgroundColor = '';
  }
  changeBoxColor($titleCircleBox, $randomCircleBox);
}

$createButton.addEventListener('click', checkCount);
$resetButton.addEventListener('click', reset);

changeBoxColor($titleCircleBox, $randomCircleBox);

// 앞으로...
// 번호 구간에 따라 색상 변경 (display: none)으로 해보자.
// 1 - 10: 노랑
// 11 - 20: 하늘색
// 21 -30: 빨강
// 31 - 40: 회색
// 41 - 45: 녹색
// 5세트 뽑기
// 리셋버튼
// 뽑은 번호, 일정 구간 보여주기, 아래에 배치
// 몇가지 조건 추가해보기(연속 된 숫자, 구간별 숫자 개수)
// API연동해서 지난 주 번호와 겹치지 않게 하기.. 이건 시간이 걸릴듯
// 숫자 입력 받아서 지금까지 당첨된 번호 있는지 보기
