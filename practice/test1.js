const grades = ['A+', 'D+', 'F', 'C0'];
const weights = [2, 5, 10, 3];
const threshold = 50;

function solution(grades, weights, threshold) {
  const score = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'];
  const weight = [10, 9, 8, 7, 6, 5, 4, 3, 0];

  let yetScore = [];
  for (let i = 0; i < grades.length; i++) {
    yetScore.push(weight[score.indexOf(grades[i])]);
  }

  console.log(yetScore);

  let lastScore = 0;
  for (let i = 0; i < yetScore.length; i++) {
    lastScore += yetScore[i] * weights[i];
  }

  console.log(lastScore);

  let result = lastScore - threshold;

  console.log(result);
  return result;
}
