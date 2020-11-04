const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let sliceArr = [];
  let returnArr = [];

  for (let i = 0; i < commands.length; i++) {
    let j = array.slice(commands[i][0] - 1, commands[i][1]);
    sliceArr.push(j);
    sliceArr[i].sort((a, b) => a - b);
    let k = sliceArr[i][commands[i][2] - 1];
    returnArr.push(k);
  }

  var answer = returnArr;

  return answer;
}

console.log(solution(array, commands));
