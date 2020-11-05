const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

function solution(numbers, hand) {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  // 거리 체크용 패드
  // 00 01 02
  // 10 11 12
  // 20 21 22
  // 30 31 32

  const disKeyPad = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['30', '31', '32'],
  ];

  // numbers를 바꿔주기

  const disNums = [];

  for (let k = 0; k < numbers.length; k++) {
    for (let j = 0; j < keyPad.length; j++) {
      for (let i = 0; i < keyPad[0].length; i++) {
        if (keyPad[j][i] === numbers[k]) {
          disNums.push(String(j) + String(i));
        }
      }
    }
  }

  console.log(disNums);

  let leftMarker = ['30'];
  let rightMarker = ['32'];

  let result = '';

  for (let k = 0; k < disNums.length; k++) {
    for (let j = 0; j < disKeyPad.length; j++) {
      for (let i = 0; i < disKeyPad[0].length; i++) {
        if (disNums[k] === disKeyPad[j][i]) {
          // 왼손
          if (disKeyPad[j][i] === '00') {
            leftMarker.splice(0, 1, disKeyPad[j][i]);
            result += 'L';
            console.log('L' + ' ' + leftMarker);
          } else if (disKeyPad[j][i] === '10') {
            result += 'L';
            leftMarker.splice(0, 1, disKeyPad[j][i]);
            console.log('L' + ' ' + leftMarker);
          } else if (disKeyPad[j][i] === '20') {
            result += 'L';
            leftMarker.splice(0, 1, disKeyPad[j][i]);
            console.log('L' + ' ' + leftMarker);
          }

          // 오른손
          if (disKeyPad[j][i] === '02') {
            rightMarker.splice(0, 1, disKeyPad[j][i]);
            result += 'R';
            console.log('R' + ' ' + rightMarker);
          } else if (disKeyPad[j][i] === '12') {
            rightMarker.splice(0, 1, disKeyPad[j][i]);
            result += 'R';
            console.log('R' + ' ' + rightMarker);
          } else if (disKeyPad[j][i] === '22') {
            rightMarker.splice(0, 1, disKeyPad[j][i]);
            result += 'R';
            console.log('R' + ' ' + rightMarker);
          }

          // 센터
          if (disKeyPad[j][i] === '01') {
            if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) <
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              leftMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'L';
              console.log('L' + ' ' + leftMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) >
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              rightMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'R';
              console.log('R' + ' ' + rightMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) +
                Math.abs(leftMarker[0][1] - i) ===
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              if (hand === 'left') {
                leftMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'L';
                console.log('L' + ' ' + leftMarker);
              } else {
                rightMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'R';
                console.log('R' + ' ' + rightMarker);
              }
            }
          }

          if (disKeyPad[j][i] === '11') {
            if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) <
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              leftMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'L';
              console.log('L' + ' ' + leftMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) >
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              rightMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'R';
              console.log('R' + ' ' + rightMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) +
                Math.abs(leftMarker[0][1] - i) ===
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              if (hand === 'left') {
                leftMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'L';
                console.log('L' + ' ' + leftMarker);
              } else {
                rightMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'R';
                console.log('R' + ' ' + rightMarker);
              }
            }
          }

          if (disKeyPad[j][i] === '21') {
            if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) <
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              leftMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'L';
              console.log('L' + ' ' + leftMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) >
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              rightMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'R';
              console.log('R' + ' ' + rightMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) +
                Math.abs(leftMarker[0][1] - i) ===
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              if (hand === 'left') {
                leftMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'L';
                console.log('L' + ' ' + leftMarker);
              } else {
                rightMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'R';
                console.log('R' + ' ' + rightMarker);
              }
            }
          }

          if (disKeyPad[j][i] === '31') {
            if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) <
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              leftMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'L';
              console.log('L' + ' ' + leftMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) + Math.abs(leftMarker[0][1] - i) >
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              rightMarker.splice(0, 1, disKeyPad[j][i]);
              result += 'R';
              console.log('R' + ' ' + rightMarker);
            } else if (
              Math.abs(leftMarker[0][0] - j) +
                Math.abs(leftMarker[0][1] - i) ===
              Math.abs(rightMarker[0][0] - j) + Math.abs(rightMarker[0][1] - i)
            ) {
              if (hand === 'left') {
                leftMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'L';
                console.log('L' + ' ' + leftMarker);
              } else {
                rightMarker.splice(0, 1, disKeyPad[j][i]);
                result += 'R';
                console.log('R' + ' ' + rightMarker);
              }
            }
          }
        }
      }
    }
  }

  return result;
}

console.log(solution(numbers, hand));
