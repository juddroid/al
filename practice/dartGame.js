const dartResult = '1D#2S*3S';

function solution(dartResult) {
  // S = *1, D = *2, T = *3
  //
  // 점수계산

  function score(num, scr) {
    if (scr === 'S') {
      num = num ** 1;
    } else if (scr === 'D') {
      num = num ** 2;
    } else if (scr === 'T') {
      num = num ** 3;
    }
    return num;
  }

  let dart = dartResult.split('');

  console.log(dart);

  for (let i = 0; i < dart.length; i++) {
    if (
      isNaN(parseInt(dart[i])) !== true &&
      isNaN(parseInt(dart[i + 1])) !== true
    ) {
      dart.splice(i, 2, dart[i] + dart[i + 1]);
    }
  }

  console.log(dart);

  let dartArr = [];

  for (let i = 0; i < dart.length; i++) {
    if (dart[i] === 'S' || dart[i] === 'D' || dart[i] === 'T') {
      let temp = [];
      temp.push(dart[i - 1]);
      temp.push(dart[i]);
      if (dart[i + 1] === '*' || dart[i + 1] === '#') {
        temp.push(dart[i + 1]);
      } else {
        temp.push(undefined);
      }
      dartArr.push(temp);
    }
  }

  console.log(dartArr);

  let scoreArr = [];

  for (let i = 0; i < dartArr.length; i++) {
    for (let j = 0; j < dartArr.length - 2; j++) {
      scoreArr.push(score(dartArr[i][j], dartArr[i][j + 1]));
    }
  }

  console.log(scoreArr);

  for (let i = 0; i < dartArr.length; i++) {
    if (dartArr[i].includes('*')) {
      if (scoreArr[i - 1] === undefined) {
        scoreArr[i] = scoreArr[i] * 2;
      } else {
        scoreArr[i - 1] = scoreArr[i - 1] * 2;
        scoreArr[i] = scoreArr[i] * 2;
      }
    } else if (dartArr[i].includes('#')) {
      scoreArr[i] = scoreArr[i] * -1;
    }
  }
  console.log(scoreArr);

  let lastScore = 0;

  for (let i = 0; i < scoreArr.length; i++) {
    lastScore += scoreArr[i];
  }

  console.log(lastScore);
  return lastScore;
}
