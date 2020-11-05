const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  function decodeMap(arr, n) {
    let decodedMap = [];
    for (let i = 0; i < arr.length; i++) {
      let map = arr[i].toString(2).padStart(n, 0);
      decodedMap.push(map);
    }
    return decodedMap;
  }

  function isWall(v1, v2) {
    return v1 === '0' && v2 === '0';
  }

  function getField(v1, v2) {
    return isWall(v1, v2) ? ' ' : '#';
  }

  function getRow(map1, map2, currentRow) {
    let newMap = '';
    for (let i = 0; i < map1.length; i++) {
      newMap += getField(map1[currentRow][i], map2[currentRow][i]);
    }
    return newMap;
  }

  function getSecretMap(map1, map2) {
    let secretMap = [];
    for (let i = 0; i < map1.length; i++) {
      secretMap.push(getRow(map1, map2, i));
    }
    return secretMap;
  }

  return getSecretMap(decodeMap(arr1, n), decodeMap(arr2, n));
}

console.log(solution(n, arr1, arr2));
