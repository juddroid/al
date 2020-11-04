let $firstWord = document.getElementById('firstWord');
let $userWord = document.getElementById('userword');

const wordList = ['거북이', '닌텐도', '키보드', '마우스', '선풍기', '스피커'];

function firstWord() {
  let num = Math.floor(Math.random() * (wordList.length - 1 - 0) + 1);
  const wordFirst = wordList[num];
  return wordFirst;
}

function start() {
  return ($firstWord.innerText = firstWord());
}

function pandan() {
  let prevPandan = $firstWord.innerText;
  let userPandan = $userWord.value;

  if (userPandan === '') {
    alert('값이 없어');
    $userWord.focus();
  } else if (userPandan.length === 1) {
    alert('한글자 노노해');
    $userWord.focus();
  } else if (userPandan[0] !== prevPandan[prevPandan.length - 1]) {
    alert('땡');
    $userWord.value = '';
    $userWord.focus();
  } else if (userPandan[0] === prevPandan[prevPandan.length - 1]) {
    pushPrevWord();
  }
}

const pushPrevWord = () => {
  $firstWord.innerText = $userWord.value;
  $userWord.value = '';
  $userWord.focus();
};

function onChange() {
  if (typeof $userWord.value !== 'string') {
    alert('안돼!');
  }
}
