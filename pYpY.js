// 알파벳 숫자 세기

// const s = 'pPoooyY';

// function solution(s) {
//   let pNum = 0;
//   let yNum = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'P') {
//       pNum += 1;
//     } else if (s[i] === 'p') {
//       pNum += 1;
//     } else if (s[i] === 'Y') {
//       yNum += 1;
//     } else if (s[i] === 'y') {
//       yNum += 1;
//     }
//   }
//   debugger;
//   var answer = true;

//   if (pNum === yNum) {
//     answer = true;
//   } else {
//     answer = false;
//   }

//   return answer;
// }

// 완주하지 못한 사람

// const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
// const completion = ['josipa', 'filipa', 'marina', 'nikola'];

// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     if (participant.includes(completion[i]) === true) {
//       let finIdx = participant.indexOf(completion[i]);
//       participant.splice(finIdx, 1);
//     }
//   }

//   var answer = participant[0];
//   return answer;
// }

// const who = solution(participant, completion);
// console.log(who);

// 수포자 모의고사

// const answers = [3, 3, 1, 1, 5, 4, 2, 4, 3, 3, 2, 1, 3, 4, 5, 2, 1, 1, 1, 3];

// function solution(answers) {
//   let soopo1Arr = [];
//   let soopo2Arr = [];
//   let soopo3Arr = [];

//   const soopo1 = () => {
//     for (i = 0; i < answers.length; i++) {
//       soopo1Arr.push(1, 2, 3, 4, 5);
//     }
//     return soopo1Arr;
//   };

//   const soopo2 = () => {
//     for (i = 0; i < answers.length; i++) {
//       soopo2Arr.push(2, 1, 2, 3, 2, 4, 2, 5);
//     }
//     return soopo2Arr;
//   };

//   const soopo3 = () => {
//     for (i = 0; i < answers.length; i++) {
//       soopo3Arr.push(3, 3, 1, 1, 2, 2, 4, 4, 5, 5);
//     }
//     return soopo3Arr;
//   };

//   let soopo1Check = soopo1();
//   let soopo2Check = soopo2();
//   let soopo3Check = soopo3();

//   let soopo1Score = 0;
//   let soopo2Score = 0;
//   let soopo3Score = 0;

//   function checkScore1() {
//     for (let i = 0; i < answers.length; i++) {
//       if (soopo1Check[i] === answers[i]) {
//         soopo1Score += 1;
//       }
//     }
//     return soopo1Score;
//   }

//   function checkScore2() {
//     for (let i = 0; i < answers.length; i++) {
//       if (soopo2Check[i] === answers[i]) {
//         soopo2Score += 1;
//       }
//     }
//     return soopo2Score;
//   }

//   function checkScore3() {
//     for (let i = 0; i < answers.length; i++) {
//       if (soopo3Check[i] === answers[i]) {
//         soopo3Score += 1;
//       }
//     }
//     return soopo3Score;
//   }

//   let lastScore1 = checkScore1();
//   let lastScore2 = checkScore2();
//   let lastScore3 = checkScore3();

//   let lastScoreArr = [lastScore1, lastScore2, lastScore3];
//   console.log(lastScoreArr);

//   Array.max = function (arr) {
//     return Math.max.apply(Math, arr);
//   };

//   let maxScore = Array.max(lastScoreArr);

//   let check = 0;
//   let checkIndex = [];

//   for (let i = 0; i < lastScoreArr.length; i++) {
//     if (lastScoreArr[i] === maxScore) {
//       check += 1;
//       checkIndex.push(i + 1);
//     }
//   }
//   console.log('공동점수: ' + check);

//   let answer = checkIndex;

//   return answer;
// }

// console.log(solution(answers));
