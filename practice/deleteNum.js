const arr = [1, 4, 2, 3, 1];

function solution(arr) {
  let copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    copyArr.push(arr[i]);
  }

  let sortedArr = copyArr.sort((a, b) => a - b).reverse();

  console.log(sortedArr);

  let min = sortedArr[sortedArr.length - 1];
  console.log(min);

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      newArr.push(arr[i]);
    }
  }

  let result = '';
  if (newArr.length === 0) {
    result = [-1];
  } else {
    result = newArr;
  }

  return result;
}

console.log(solution(arr));
