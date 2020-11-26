//baseball

function ranNums() {
  let rnd = Math.floor(Math.random() * (9 - 0) + 0);
  return rnd;
}

function ranNumsPick() {
  let tempNum = [];
  while (tempNum.length !== 3) {
    tempNum.push(ranNums());
  }
  return removeSameNumber(tempNum);
}

// 중복제거
function removeSameNumber(arr) {
  if (
    arr[0] === arr[1] ||
    arr[0] === arr[2] ||
    arr[0] === arr[2] ||
    arr[1] === arr[2]
  ) {
    console.log('same');
    console.log(arr);
    return ranNumsPick();
  }
  return arr;
}
