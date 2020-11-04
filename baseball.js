//baseball

function ranNums() {
  let rnd = Math.random();
  console.log(rnd);
  return Math.floor(rnd * (9 - 0) + 1);

  const ranNum = Math.floor(Math.random() * 10);
  if (ranNum !== 0) {
    return ranNum;
  } else {
    console.log('0 아님!!!');
    let num = ranNums();
    console.log(num);
    return num;
  }
}

function createBaseball() {
  const nums = [];
  for (let i = 0; nums.length < 3; i++) {
    if (nums[i] !== 0) {
      nums.push(ranNums());
    }
  }
  return nums;
}
