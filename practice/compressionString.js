const s = [
  'aabbaccc',
  'ababcdcdababcdcd',
  'abcabcdede',
  'abcabcabcabcdededededede',
  'xababcdcdababcdcd',
];

const n = s[0];

// string 을 cuttinNumber로 자르기
const getCutStringArray = function (str, cuttingNumber) {
  let cutString = [];
  let repeatNumber = parseInt(str.length / cuttingNumber) + 1;
  for (let i = 0, k = 0; i < repeatNumber; i++) {
    let tempString = '';
    for (let j = 0; j < cuttingNumber; j++) {
      if (str[k] !== undefined && str[k] !== '') {
        tempString += str[k];
        k++;
      }
    }
    cutString.push(tempString);
  }
  deleteSpace(cutString);
  return cutString;
};

const deleteSpace = function (arr) {
  let spaceElement = arr.includes('');
  if (spaceElement) {
    arr.splice(arr.indexOf(spaceElement), 1);
  }
};

// 자른 배열들
let cutStringArray = [];
const getPieceArray = function (str) {
  for (let i = 1; i < str.length + 1; i++) {
    cutStringArray.push(getCutStringArray(str, i));
  }
  return cutStringArray;
};

// 중복확인

const checkOverlap = function (arr) {
  let overlapArr = [arr[0]];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === arr[i + 1]) {
      overlapArr.push(1);
    } else {
      overlapArr.push(arr[i + 1]);
    }
  }
  return overlapArr;
};

let undefinedArr = [];
const getMore = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp;
    temp = checkOverlap(arr[i]);
    undefinedArr.push(temp);
  }
  return undefinedArr;
};

let plusNumberArr = [];
const plusNumber = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pop();
    plusNumberArr.push(arr[i]);
  }
  return plusNumberArr;
};

let joinStringArr = [];
const joinArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = '';
    for (let j = 0; j < arr[i].length; j++) {
      temp += arr[i][j];
    }
    joinStringArr.push(temp);
  }
  return joinStringArr;
};

let stringLength = [];
const stringArr = function (arr) {
  let temp = '';
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i].length;
    stringLength.push(temp);
  }
  return stringLength;
};

getPieceArray(n);
getMore(cutStringArray);
plusNumber(undefinedArr);
console.log(plusNumberArr);
joinArr(plusNumberArr);
stringArr(joinStringArr);

let sortLength = stringLength.sort((a, b) => a - b);
let result = sortLength[0];

console.log(result);
