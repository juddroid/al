const arr1 = [[1], [2]];
const arr2 = [[4], [3]];

function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr1[i][j] = arr1[i][j] + arr2[i][j];
      // if (isNaN(arr1[i][j])) {
      //   arr1[i].splice(arr1.length - 1, 1);
      // }
    }
  }

  return arr1;
}

console.log(solution(arr1, arr2));
