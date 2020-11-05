let ranNum1 = Math.floor(Math.random() * (9 - 0) + 1);
let ranNum2 = Math.floor(Math.random() * (9 - 0) + 1);

const answerNum = ranNum1 * ranNum2;

document.getElementById(
  'multiple'
).innerText = `Question: ${ranNum1} * ${ranNum2} = ?`;

function inputValue() {
  let userAnswer = parseInt(document.getElementById('userAnswer').value);

  if (userAnswer === answerNum) {
    document.getElementById('answer').innerText = `정답! ${answerNum}`;
    document.getElementById('next-btn').className = 'next-btn-active';
  } else {
    document.getElementById('answer').innerText = '땡!!!';
    document.getElementById('userAnswer').value = '';
    document.getElementById('userAnswer').focus();
  }
}
document.getElementById('userAnswer').focus();
function onReset() {
  document.getElementById('userAnswer').value = '';
}

function next() {
  window.location.reload();
}
