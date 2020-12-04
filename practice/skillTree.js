const skill = 'CBD';
const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA', 'AQWER'];

function solution(skill, skill_trees) {
  const splitSkills = function (arr) {
    let splitArr = [];
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i].split('');
      splitArr.push(temp);
    }
    return splitArr;
  };

  const splitString = skill.split('');
  const splitTrees = splitSkills(skill_trees);

  let eachTree = splitTrees;

  const checkSkill = function (arr) {
    let tempString = '';
    for (let i = 0; i < arr.length; i++) {
      if (splitString.includes(arr[i])) {
        tempString += arr[i];
      }
    }
    return tempString;
  };

  const forCheckSkill = function (arr) {
    let tempSkill = [];
    for (let i = 0; i < arr.length; i++) {
      tempSkill.push(checkSkill(arr[i]));
    }
    return tempSkill;
  };

  const checkedSkill = forCheckSkill(eachTree);
  console.log(checkedSkill);

  const countSkill = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((skill.includes(arr[i]) && skill[0] === arr[i][0]) || arr[i] === '') {
        count++;
      }
    }
    return count;
  };

  let result = countSkill(checkedSkill);
  return result;
}
