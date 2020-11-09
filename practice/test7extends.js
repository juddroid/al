const n = 7;
const horizontal = true;

function solution(n, horizontal) {
  let robotArr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(i.toString() + j.toString());
    }
    robotArr.push(temp);
  }

  console.log(robotArr);

  let second = 0;

  let x = 0;
  let y = 0;

  // n = 짝수 , true
  let rightUpperBox = [x, y];
  let rightBottomBox = [n - 1, y];
  let downLeftBox = [x + 1, y];
  let downRightBox = [x + 1, n - 1];
  let leftDownUpperBox = [x, y + 1];
  let leftDownRightBox = [x + 2, n - 1];
  let rightUpLeftBox = [x + 2, y];
  let rightUpBottomBox = [n - 1, y + 1];

  // n = 짝수 , false
  let downLeftBoxV = [x, y];
  let downRightBoxV = [x, n - 1];
  let rightUpperBoxV = [x, y + 1];
  let rightBottomBoxV = [n - 1, y + 1];
  let leftDownUpperBoxV = [x, y + 2];
  let leftDownRightBoxV = [x + 1, n - 1];
  let rightUpLeftBoxV = [x + 1, y];
  let rightUpBottomBoxV = [n - 1, y + 2];

  function controlRobotT(arr, i, j) {
    console.log('controlRobotT', 'x', i, 'y', j);

    if (i === n - 1 && j === n - 1) {
      return arr;
    } else if (rightUpperBox[0] === i && rightUpperBox[1] === j) {
      console.log('go right');
      rightUpperBox[1] += 2;
      console.log('x', i, 'y', j, rightUpperBox);
      goRight(arr, i, j);
    } else if (rightBottomBox[0] === i && rightBottomBox[1] === j) {
      console.log('go right');
      rightBottomBox[1] += 2;
      console.log('x', i, 'y', j, rightBottomBox);
      goRight(arr, i, j);
    } else if (downLeftBox[0] === i && downLeftBox[1] === j) {
      console.log('go down');
      downLeftBox[0] += 2;
      console.log('x', i, 'y', j, downLeftBox);
      goDown(arr, i, j);
    } else if (downRightBox[0] === i && downRightBox[1] === j) {
      console.log('go down');
      downRightBox[0] += 2;
      console.log('x', i, 'y', j, downRightBox);
      goDown(arr, i, j);
    } else if (leftDownUpperBox[0] === i && leftDownUpperBox[1] === j) {
      console.log('go leftdown');
      leftDownUpperBox[1] += 2;
      console.log('x', i, 'y', j, leftDownUpperBox);
      leftDown(arr, i, j);
    } else if (leftDownRightBox[0] === i && leftDownRightBox[1] === j) {
      console.log('go leftdown');
      leftDownRightBox[0] += 2;
      console.log('x', i, 'y', j, leftDownRightBox);
      leftDown(arr, i, j);
    } else if (rightUpLeftBox[0] === i && rightUpLeftBox[1] === j) {
      console.log('go rightup');
      rightUpLeftBox[0] += 2;
      console.log('x', i, 'y', j, rightUpLeftBox);
      rightUp(arr, i, j);
    } else if (rightUpBottomBox[0] === i && rightUpBottomBox[1] === j) {
      console.log('go rightup');
      rightUpBottomBox[1] += 2;
      console.log('x', i, 'y', j, rightUpBottomBox);
      rightUp(arr, i, j);
    }
  }

  function controlRobotOT(arr, i, j) {
    console.log('controlRobotOT', 'x', i, 'y', j);
    if (i === n - 1 && j === n - 1) {
      return arr;
    } else if (rightUpLeftBox[0] === i && rightUpLeftBox[1] === j) {
      console.log('go rightup');
      rightUpLeftBox[0] += 2;
      console.log('x', i, 'y', j, rightUpLeftBox);
      rightUp(arr, i, j);
    } else if (rightUpBottomBoxV[0] === i && rightUpBottomBoxV[1] === j) {
      console.log('go rightup');
      rightUpBottomBoxV[1] += 2;
      console.log('x', i, 'y', j, rightUpBottomBoxV);
      rightUp(arr, i, j);
    } else if (downLeftBox[0] === i && downLeftBox[1] === j) {
      console.log('go down');
      downLeftBox[0] += 2;
      console.log('x', i, 'y', j, downLeftBox);
      goDown(arr, i, j);
    } else if (downRightBoxV[0] === i && downRightBoxV[1] === j) {
      console.log('go down');
      downRightBoxV[0] += 2;
      console.log('x', i, 'y', j, downRightBoxV);
      goDown(arr, i, j);
    } else if (rightUpperBox[0] === i && rightUpperBox[1] === j) {
      console.log('go right');
      rightUpperBox[1] += 2;
      console.log('x', i, 'y', j, rightUpperBox);
      goRight(arr, i, j);
    } else if (rightBottomBoxV[0] === i && rightBottomBoxV[1] === j) {
      console.log('go right');
      rightBottomBoxV[1] += 2;
      console.log('x', i, 'y', j, rightBottomBoxV);
      goRight(arr, i, j);
    } else if (leftDownUpperBox[0] === i && leftDownUpperBox[1] === j) {
      console.log('go leftdown');
      leftDownUpperBox[1] += 2;
      console.log('x', i, 'y', j, leftDownUpperBox);
      leftDown(arr, i, j);
    } else if (leftDownRightBoxV[0] === i && leftDownRightBoxV[1] === j) {
      console.log('go leftdown');
      leftDownRightBoxV[0] += 2;
      console.log('x', i, 'y', j, leftDownRightBoxV);
      leftDown(arr, i, j);
    }
  }

  function controlRobotV(arr, i, j) {
    console.log('controlRobotV', 'x', i, 'y', j);
    if (i === n - 1 && j === n - 1) {
      return arr;
    } else if (downLeftBoxV[0] === i && downLeftBoxV[1] === j) {
      console.log('go down');
      downLeftBoxV[0] += 2;
      console.log('x', i, 'y', j, downLeftBoxV);
      goDown(arr, i, j);
    } else if (downRightBoxV[0] === i && downRightBoxV[1] === j) {
      console.log('go down');
      downRightBoxV[0] += 2;
      console.log('x', i, 'y', j, downRightBoxV);
      goDown(arr, i, j);
    } else if (rightUpperBoxV[0] === i && rightUpperBoxV[1] === j) {
      console.log('go right');
      rightUpperBoxV[1] += 2;
      console.log('x', i, 'y', j, rightUpperBoxV);
      goRight(arr, i, j);
    } else if (rightBottomBoxV[0] === i && rightBottomBoxV[1] === j) {
      console.log('go right');
      rightBottomBoxV[1] += 2;
      console.log('x', i, 'y', j, rightBottomBoxV);
      goRight(arr, i, j);
    } else if (leftDownUpperBoxV[0] === i && leftDownUpperBoxV[1] === j) {
      console.log('go leftdown');
      leftDownUpperBoxV[1] += 2;
      console.log('x', i, 'y', j, leftDownUpperBoxV);
      leftDown(arr, i, j);
    } else if (leftDownRightBoxV[0] === i && leftDownRightBoxV[1] === j) {
      console.log('go leftdown');
      leftDownRightBoxV[0] += 2;
      console.log('x', i, 'y', j, leftDownRightBoxV);
      leftDown(arr, i, j);
    } else if (rightUpLeftBoxV[0] === i && rightUpLeftBoxV[1] === j) {
      console.log('go rightup');
      rightUpLeftBoxV[0] += 2;
      console.log('x', i, 'y', j, rightUpLeftBoxV);
      rightUp(arr, i, j);
    } else if (rightUpBottomBoxV[0] === i && rightUpBottomBoxV[1] === j) {
      console.log('go rightup');
      rightUpBottomBoxV[1] += 2;
      console.log('x', i, 'y', j, rightUpBottomBoxV);
      rightUp(arr, i, j);
    }
  }

  function controlRobotOV(arr, i, j) {
    console.log('controlRobotOV', 'x', i, 'y', j);
    if (i === n - 1 && j === n - 1) {
      return arr;
    } else if (leftDownUpperBoxV[0] === i && leftDownUpperBoxV[1] === j) {
      console.log('go leftdown');
      leftDownUpperBoxV[1] += 2;
      console.log('x', i, 'y', j, leftDownUpperBoxV);
      leftDown(arr, i, j);
    } else if (leftDownRightBox[0] === i && leftDownRightBox[1] === j) {
      console.log('go leftdown');
      leftDownRightBox[0] += 2;
      console.log('x', i, 'y', j, leftDownRightBox);
      leftDown(arr, i, j);
    } else if (rightUpperBoxV[0] === i && rightUpperBoxV[1] === j) {
      console.log('go right');
      rightUpperBoxV[1] += 2;
      console.log('x', i, 'y', j, rightUpperBoxV);
      goRight(arr, i, j);
    } else if (rightBottomBox[0] === i && rightBottomBox[1] === j) {
      console.log('go right');
      rightBottomBox[1] += 2;
      console.log('x', i, 'y', j, rightBottomBox);
      goRight(arr, i, j);
    } else if (downLeftBoxV[0] === i && downLeftBoxV[1] === j) {
      console.log('go down');
      downLeftBoxV[0] += 2;
      console.log('x', i, 'y', j, downLeftBoxV);
      goDown(arr, i, j);
    } else if (downRightBox[0] === i && downRightBox[1] === j) {
      console.log('go down');
      downRightBox[0] += 2;
      console.log('x', i, 'y', j, downRightBox);
      goDown(arr, i, j);
    } else if (rightUpLeftBoxV[0] === i && rightUpLeftBoxV[1] === j) {
      console.log('go rightup');
      rightUpLeftBoxV[0] += 2;
      console.log('x', i, 'y', j, rightUpLeftBoxV);
      rightUp(arr, i, j);
    } else if (rightUpBottomBox[0] === i && rightUpBottomBox[1] === j) {
      console.log('go rightup');
      rightUpBottomBox[1] += 2;
      console.log('x', i, 'y', j, rightUpBottomBox);
      rightUp(arr, i, j);
    }
  }

  function goRight(arr, i, j) {
    second += 1;
    j++;
    arr[i].splice(j, 1, second); // robotArr 에 second 입력해주고
    console.log('x', i, 'y', j, 'second: ' + second);

    if (horizontal && n % 2 === 0) {
      controlRobotT(arr, i, j);
    } else if (horizontal && n % 2 === 1) {
      controlRobotOT(arr, i, j);
    } else if (!horizontal && n % 2 === 0) {
      controlRobotV(arr, i, j);
    } else if (!horizontal && n % 2 === 1) {
      controlRobotOV(arr, i, j);
    }
  }

  function goDown(arr, i, j) {
    second += 1;
    i++;
    arr[i].splice(j, 1, second); // robotArr 에 second 입력해주고
    console.log('x', i, 'y', j, 'second: ' + second);
    if (horizontal && n % 2 === 0) {
      controlRobotT(arr, i, j);
    } else if (horizontal && n % 2 === 1) {
      controlRobotOT(arr, i, j);
    } else if (!horizontal && n % 2 === 0) {
      controlRobotV(arr, i, j);
    } else if (!horizontal && n % 2 === 1) {
      controlRobotOV(arr, i, j);
    }
  }

  let rptPlus = 1;
  let rptMinus = n - 1;

  function toggleRepeat(repeater) {
    repeater < n ? (rptPlus += 1) : (rptMinus -= 1);
  }

  function leftDown(arr, i, j) {
    if (rptPlus < n) {
      let temp = rptPlus;
      toggleRepeat(rptPlus);

      for (temp; temp > 0; temp--) {
        second += 2;
        i++;
        j--;
        console.log(rptPlus, rptMinus, 'rpt', temp);
        console.log('leftdown operating');
        arr[i].splice(j, 1, second);
        console.log('x', i, 'y', j, 'second: ' + second);
      }
    } else if (rptPlus === n) {
      toggleRepeat(rptPlus);
      let temp = rptMinus;
      for (temp; temp > 0; temp--) {
        second += 2;
        i++;
        j--;
        console.log(rptPlus, rptMinus, 'rpt', temp);
        console.log('leftdown operating');
        arr[i].splice(j, 1, second);
        console.log('x', i, 'y', j, 'second: ' + second);
      }
    }
    if (horizontal && n % 2 === 0) {
      controlRobotT(arr, i, j);
    } else if (horizontal && n % 2 === 1) {
      controlRobotOT(arr, i, j);
    } else if (!horizontal && n % 2 === 0) {
      controlRobotV(arr, i, j);
    } else if (!horizontal && n % 2 === 1) {
      controlRobotOV(arr, i, j);
    }
  }

  function rightUp(arr, i, j) {
    if (rptPlus < n) {
      console.log(rptPlus);
      let temp = rptPlus;
      toggleRepeat(rptPlus);
      for (temp; temp > 0; temp--) {
        second += 2;
        i--;
        j++;
        console.log(rptPlus, rptMinus, 'rpt', temp);
        console.log('rightup operating');
        arr[i].splice(j, 1, second);
        console.log('x', i, 'y', j, 'second: ' + second);
      }
    } else if (rptPlus === n) {
      toggleRepeat(rptPlus);
      let temp = rptMinus;
      for (temp; temp > 0; temp--) {
        second += 2;
        i--;
        j++;
        console.log(rptPlus, rptMinus, 'rpt', temp);
        console.log('rightup operating');
        arr[i].splice(j, 1, second);
        console.log('x', i, 'y', j, 'second: ' + second);
      }
    }
    if (horizontal && n % 2 === 0) {
      controlRobotT(arr, i, j);
    } else if (horizontal && n % 2 === 1) {
      controlRobotOT(arr, i, j);
    } else if (!horizontal && n % 2 === 0) {
      controlRobotV(arr, i, j);
    } else if (!horizontal && n % 2 === 1) {
      controlRobotOV(arr, i, j);
    }
  }

  function startRobot(arr, i, j) {
    arr[i].splice(j, 1, second);
    console.log('x', i, 'y', j, 'second: ' + second);
    controlRobotT(arr, i, j);
  }

  function startRobotOT(arr, i, j) {
    arr[i].splice(j, 1, second);
    console.log('x', i, 'y', j, 'second: ' + second);
    controlRobotOT(arr, i, j);
  }

  function startRobotV(arr, i, j) {
    arr[i].splice(j, 1, second);
    console.log('x', i, 'y', j, 'second: ' + second);
    controlRobotV(arr, i, j);
  }

  function startRobotOV(arr, i, j) {
    arr[i].splice(j, 1, second);
    console.log('x', i, 'y', j, 'second: ' + second);
    controlRobotOV(arr, i, j);
  }

  if (horizontal && n % 2 === 0) {
    startRobot(robotArr, x, y);
  } else if (horizontal && n % 2 === 1) {
    startRobotOT(robotArr, x, y);
  } else if (!horizontal && n % 2 === 0) {
    startRobotV(robotArr, x, y);
  } else if (!horizontal && n % 2 === 1) {
    startRobotOV(robotArr, x, y);
  }

  return robotArr;
}

console.log(solution(n, horizontal));
