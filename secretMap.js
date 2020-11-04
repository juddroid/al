const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  // n * n 지도를 만들고,
  // arr1, arr2를 각각 입력하고,

  let map1Arr = [];
  let map2Arr = [];

  // function createMap(map) {
  //   for (let j = 0; j < n; j++) {
  //     let star = [];
  //     map.push(star);
  //     for (let i = 0; i < n; i++) {
  //       star.push('*');
  //     }
  //   }
  //   return map;
  // }

  for (let i = 0; i < arr1.length; i++) {
    let map1 = arr1[i].toString(2).padStart(n, 0);
    map1Arr.push(map1);
  }
  for (let i = 0; i < arr2.length; i++) {
    let map2 = arr2[i].toString(2).padStart(n, 0);
    map2Arr.push(map2);
  }

  console.log(map1Arr);
  console.log(map2Arr);

  // 두 지도를 비교해가면서
  // arr1에 #이 있으면 유지
  // arr2에 #이 있으면 arr1에 적용
  // 0은 빈거고, 1이 벽임

  let secretMap = [];

  for (let i = 0; i < map1Arr.length; i++) {
    let newMap = '';
    for (let j = 0; j < map1Arr.length; j++) {
      if (map1Arr[i][j] === '0' && map2Arr[i][j] === '0') {
        newMap += ' ';
      } else {
        newMap += '#';
      }
    }
    secretMap.push(newMap);
  }

  console.log(secretMap);

  var answer = secretMap;
  return answer;
}

console.log(solution(n, arr1, arr2));
