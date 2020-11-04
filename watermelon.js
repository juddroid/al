const n = 10000;

function solution(n) {
  const text = '수박';

  let waterMelon = '';

  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      waterMelon += text;
    }
  } else {
    for (let i = 0; i < n / 2 - 1; i++) {
      waterMelon += text;
    }
    waterMelon += text[0];
  }

  var answer = waterMelon;
  return answer;
}

console.log(solution(n));

// 이건 돌아가나 궁금해서 가져와봄

// function waterMelon(n) {
//   var result =
//     '수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박';
//   //함수를 완성하세요

//   return result.substring(0, n);
// }

console.log(waterMelon(n));
