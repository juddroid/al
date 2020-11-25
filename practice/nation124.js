const n = 100;

// 1, 2, 4
// 몫 / 나머지 리스트
// 1 = 1
// 2 = 2
// 3 = 4

// 1 = (3 * 0) + 1 = 1
// 2 = (3 * 0) + 2 = 2
// 3 = (3 * 0) + 3 = 4
// 4 = (3 * 1) + 1 = 11
// 5 = (3 * 1) + 2 = 12
// 6 = (3 * 1) + 3 = 14
// 7 = (3 * 2) + 1 = 21
// 8 = (3 * 2) + 2 = 22
// 9 = (3 * 2) + 3 = 24
// 10 = (3 * 3) + 1 = 41
// 11 = (3 * 3) + 2 = 42
// 12 = (3 * 3) + 3 = 44
// 13 = (3 * 4) + 1 = 111
// 14 = (3 * 4) + 2 = 112
// 15 = (3 * 4) + 3 = 114

// 숫자가 세 개라서 10진법을 3으로 나눴을 때, 몫이 앞 자리를 결정하고, 나머지가 뒷자리를 결정
// ex) 십진수 11 = (3 * 3) + 2
// 몫이 3이기 때문에 앞자리는 4, 나머지가 2이기 때문에 뒷자리는 2, 따라서 11은 124나라에서는 42

// 십진수를 3으로 나눈 나머지를, 십진수에서 뺀 후에, 3으로 나눠서 몫을 봐야겠다.

// 3으로 나눈 나머지가 0이면 +3
// 3으로 나눈 나머지가 2이면 +2
// 3으로 나눈 나머지가 1이면 +1
// 몫은 각 나머지를 뺀 수를 나누자

function solution(n) {
  // 나머지

  let extraNum;
  function extra(num) {
    if (num % 3 === 0) {
      extraNum = 3;
    } else {
      extraNum = num % 3;
    }
  }

  // 몫
  let quotientNum;
  function quotient(num) {
    quotientNum = parseInt((num - extraNum) / 3);
  }

  // 124 숫자로 만들기
  extra(n);
  quotient(n);

  if (extraNum === 3) {
    extraNum = 4;
  }
  if (quotientNum > 3) {
    quotientNum = solution(quotientNum);
  }
  if (quotientNum === 3) {
    quotientNum = 4;
  }

  let nationNum = parseInt(quotientNum.toString() + extraNum.toString());

  return nationNum.toString();
}

// for (let i = 1; i < n + 1; i++) {
//   console.log('n: ' + `${i}`, solution(i));
// }
