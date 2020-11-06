const d = [1, 3, 2, 5, 4];
let budget = 9;

function solution(d, budget) {
  let check = 0;

  let d2 = d.sort((a, b) => a - b);

  console.log(d2);

  for (let i = 0; i < d2.length; i++) {
    budget -= d2[i];
    console.log(budget);
    if (budget < 0) {
      console.log('exeed');
      break;
    }
    check += 1;
  }

  return check;
}
