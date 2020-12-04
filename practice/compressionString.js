// const s = [
//   'aabbaccc',
//   'ababcdcdababcdcd',
//   'abcabcdede',
//   'abcabcabcabcdededededede',
//   'xababcdcdababcdcd',
// ];

const s = 'aabbaccc';

// function solution(s) {
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

let seperateArr = [];
const seperateNumber = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'string' && typeof arr[i][j + 1] === 'string') {
        temp.push(arr[i][j]);
      } else if (
        typeof arr[i][j] === 'string' &&
        typeof arr[i][j + 1] === 'undefined'
      ) {
        temp.push(arr[i][j]);
      } else if (
        typeof arr[i][j] === 'string' &&
        typeof arr[i][j + 1] === 'number'
      ) {
        let count = 1;
        let k = j;
        while (typeof arr[i][k + 1] === 'number') {
          count++;
          k++;
        }
        temp.push(count);
        temp.push(arr[i][j]);
      }
    }
    seperateArr.push(temp);
  }
  return seperateArr;
};

let joinStringArr = [];
const joinArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = '';
    temp += arr[i].join('');
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

getPieceArray(s);
getMore(cutStringArray);
plusNumber(undefinedArr);
seperateNumber(plusNumberArr);
joinArr(seperateArr);
stringArr(joinStringArr);

let sortLength = stringLength.sort((a, b) => a - b);
let result = sortLength[0];

// return result;
// }

// const testCode = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     console.log(solution(s[i]));
//   }
// };

// testCode(s);

// const anotherSolution = (s) => {
//   const range = [...Array(s.length)].map((_, i) => i + 1);
//   return Math.min(...range.map((i) => compress(s, i).length));
// };

// const compress = (s, n) => {
//   const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
//   return make(
//     chunk(s, n).reduce(
//       ([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
//       ['', '', 0]
//     )
//   );
// };

// const chunk = (s, n) =>
//   s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];

function solution2(s) {
  let length = s.length;
  let answer = length;

  const compressStr = (str, ch, size) => {
    let res = '';
    let count = 1;

    for (let i = size; i < str.length; i += size) {
      let ch2 = str.slice(i, i + size);
      if (ch === ch2) {
        count += 1;
      } else {
        count = count > 1 ? String(count) : '';
        res += count + ch;
        ch = ch2;
        count = 1;
      }
    }
    if (ch) {
      count = count > 1 ? String(count) : '';
      res += count + ch;
    }
    return res || '';
  };

  /* 자를 문자열 길이 */
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    let ch = s.slice(0, i);
    let compressed = compressStr(s, ch, i);
    answer = Math.min(answer, compressed.length);
  }

  return answer;
}
