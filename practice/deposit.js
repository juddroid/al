const money = 30678;
// result = [1, 0, 0, 0, 0, 2, 0, 3, 7]
// 오만, 만, 오천, 천, 오백, 백, 오십, 십, 일

const don = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

let wallet = [];

let tempMoney = [money];

for (let i = 0; i < don.length; i++) {
  wallet.push(parseInt(tempMoney[0] / don[i]));
  tempMoney.splice(0, 1, tempMoney[0] % don[i]);
}

console.log(wallet);
