const money = 1200;
const expected = ['T', 'T', 'H', 'H', 'H'];
const actual = ['H', 'H', 'T', 'H', 'T'];

function solution(money, expected, actual) {
  // ex act 가 같으면 승 더해주고 다시 100원부터/ 다르면 패 뺴주고, 직전두배로

  let extraMoney = money;

  let bet = 100;
  for (let i = 0; i < actual.length; i++) {
    if (expected[i] === actual[i]) {
      console.log('win');
      extraMoney += bet;
      bet = 100;
    } else {
      console.log('lose');
      extraMoney -= bet;
      bet = bet * 2;
      if (extraMoney < bet) {
        bet = extraMoney;
      }
    }
    console.log('이전베팅: ' + bet, '다음베팅: ' + bet, '잔돈: ' + extraMoney);
  }

  return extraMoney;
}

console.log(solution(money, expected, actual));
