const penter = '10';
const pexit = '11';
const pescape = '00';
const data = '00011011';

function solution(penter, pexit, pescape, data) {
  let dataArr = [];
  for (let i = 0; i < data.length; i += penter.length) {
    dataArr.push(data.slice(i, i + penter.length));
  }

  console.log(dataArr);

  for (let i = 0; i < dataArr.length; i++) {
    if (
      dataArr[i] === penter ||
      dataArr[i] === pexit ||
      dataArr[i] === pescape
    ) {
      dataArr[i] = pescape + dataArr[i];
    }
  }

  console.log(dataArr);

  let temp = '';
  for (let i = 0; i < dataArr.length; i++) {
    temp += dataArr[i];
  }

  console.log(temp);

  let result = penter + temp + pexit;
  return result;
}

console.log(solution(penter, pexit, pescape, data));
