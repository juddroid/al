const numbers = [5, 0, 2, 7];

function solution(numbers) {
  let sums = [];

  for (let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < numbers.length; i++) {
      if (i === j) {
      } else if (sums.includes(numbers[j] + numbers[i]) === false) {
        console.log(j, i);
        sums.push(numbers[j] + numbers[i]);
      }
    }
  }

  console.log(sums);

  let result = sums.sort((a, b) => a - b);

  console.log(result);

  return result;
}

console.log(solution(numbers));
