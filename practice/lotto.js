// 기능을 한가지만!

// 뽑고,
// 푸쉬하고, check
// 체크하고, check
// 정렬하고, check

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

let $circleBox = document.querySelectorAll('.title_box .circle_box');
let $randomCircleBox = document.getElementsByClassName('random_circle_box');
let $numberBox = document.querySelector('.view_box');
let $createButton = document.getElementById('createButton');

const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

const changeClassName = (box, index) =>
  (box[index].className = 'random_circle_box');

function changeBoxColor(box1, box2) {
  changeBox(box1);
  changeColor(box2);
}

const changeBox = (box) => {
  for (let i = 0; i < box.length; i++) {
    changeClassName(box, i);
  }
};

const changeColor = (box) => {
  for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = randomColor();
  }
};

changeBoxColor($circleBox, $randomCircleBox);

// 여기 for... in 으로 어떠케 하는거지
function viewNumber() {
  pickNumber();
  let board = document.querySelectorAll('.view_box > .circle_box');
  for (let i = 0; i < board.length; i++) {
    board[i].innerText = lottoSet[i];
  }
}

$createButton.addEventListener('click', viewNumber);

const titleText = 'LOTTOWORLD';
