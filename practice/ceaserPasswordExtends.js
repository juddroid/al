const s = 'a B z';
const n = 4;

const alpha = 'abcdefghijklmnopqrstuvwxyz';
let newPass = '';

// 소문자체크
function lowerChk(str, idx) {
  if (alpha.indexOf(str[idx]) >= 0) {
    console.log('im lower', idx, n);
    longChk(idx, n);
  } else {
    reChk(str, idx);
  }
}

// 소문자가 아닐 경우, 공백인지 대문자인지 체크
function reChk(str, idx) {
  let num = 0;
  if (str[idx] === ' ') {
    console.log('im space');
    inputPassword(num);
  } else {
    console.log('im upper. need to make lowercase');
    toggleStr(str, idx);
    lowerChk(toggledStr, idx);
  }
}

// 박스 안에 있는지 체크
function longChk(idx, n) {
  let num = 0;
  if (idx + n < 26) {
    console.log('im in box');
    num = idx + n;
    inputPassword(num);
  } else {
    console.log('im out of box. need minus 26');
    num = idx + n - 26;
    inputPassword(num);
  }
  console.log(num);
}

// 대소문자 토글
function toggleStr(str, idx) {
  str[idx] === str[idx].toUpperCase()
    ? (str = str[idx].toLowerCase())
    : (str = str[idx].toUpperCase());
  return str;
}

// 비번 새로 만들어주기
function inputPassword(num) {
  if (num === 0) {
    newPass += ' ';
  } else {
    newPass += alpha[num];
  }
  console.log(newPass);
  return newPass;
}

lowerChk(s, 2);
