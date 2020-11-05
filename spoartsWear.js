// 전체 학생의 수 n ( 2<= n <= 30)
// 체육복 도난당한 학생 배열 lost ( 1<= lost.length <= n)
// 여벌 체육복 학생 reserve

// 수업가능 학생 최대값

let n = 8;
let lost = [1, 3, 5, 7];
let reserve = [2, 4, 6, 8];

function solution(n, lost, reserve) {
  // 전체학생배열
  let stu = {};
  for (let i = 0; i < n; i++) {
    stu[i + 1] = 1;
  }

  console.log(stu);
  console.log('전체');

  // 도둑맞은 친구들
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (lost[i] === j + 1) {
        stu[j + 1] -= 1;
      }
    }
  }

  console.log(stu);
  console.log('도난');

  // 여벌의 친구들
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (reserve[i] === j + 1) {
        stu[j + 1] += 1;
      }
    }
  }

  console.log(stu);
  console.log('여벌');

  // 줄수있나?
  for (let i = 0; i < n; i++) {
    if (stu[i + 1] === 0) {
      if (stu[i] === undefined || stu[i + 2] === undefined) {
        if (stu[i] === undefined && stu[i + 2] === 2) {
          stu[i + 1] += 1;
          stu[i + 2] -= 1;
          console.log(`${i + 2}가 준다`);
        } else if (stu[i] === 2 && stu[i + 2] === undefined) {
          stu[i + 1] += 1;
          stu[i] -= 1;
          console.log(`${i}가 준다`);
        }
      }
      if (stu[i] + stu[i + 2] >= 2) {
        console.log('줄게', i + 1);

        // 누가 줄건가
        if (stu[i] + stu[i + 2] === 2) {
          if (stu[i] === 2) {
            stu[i] -= 1;
            console.log(`${i}가 준다`);
            stu[i + 1] += 1;
          } else if (stu[i + 2] === 2) {
            stu[i + 2] -= 1;
            console.log(`${i + 2}가 준다`);
            stu[i + 1] += 1;
          } else {
            console.log('못줘', i + 1);
          }
        }

        if (stu[i] + stu[i + 2] === 3) {
          if (stu[i] === 2) {
            stu[i] -= 1;
            console.log(`${i}가 준다`);
            stu[i + 1] += 1;
          } else {
            stu[i + 2] -= 1;
            console.log(`${i + 2}가 준다`);
            stu[i + 1] += 1;
          }
        }

        if (stu[i] + stu[i + 2] === 4) {
          // 모서리
          if (stu[i - 1] === undefined) {
            stu[i] -= 1;
            console.log(`${i}가 준다`);
            stu[i + 1] += 1;
          } else if (stu[i + 3] <= 2) {
            stu[i] -= 1;
            console.log(`${i}가 준다`);
            stu[i + 1] += 1;
          }

          if (stu[i + 3] === undefined) {
            stu[i + 2] -= 1;
            console.log(`${i + 2}가 준다`);
            stu[i + 1] += 1;
          } else if (stu[i - 1] <= 2) {
            stu[i + 2] -= 1;
            console.log(`${i + 2}가 준다`);
            stu[i + 1] += 1;
          }
        }

        console.log(stu);
      } else {
        console.log('못줘', i + 1);
      }
    }
  }

  console.log(stu);

  let check = 0;
  for (let i = 0; i < n; i++) {
    if (stu[i + 1] !== 0) {
      check += 1;
    }
  }

  console.log(check);

  return check;
}

console.log(solution(n, lost, reserve));
