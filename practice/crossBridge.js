const bridge_length = 100;
const weight = 100;
const truck_weights = [10];

// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7, 4, 5, 6];

// second

// 다리 길이만큼의 트럭들을 모아서 봤을 때,
// 무게가 넘지 않으면 시간을 카운트,
// 무게가 넘으면 공백을 넣어줄까

let bridge = [];
let goneTruck = [];
let count = 0;
const finishNum = truck_weights.length;

for (let i = 0; i < bridge_length; i++) {
  bridge.push(0);
}

function currentWeight(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function pushBridge(truck_weights) {
  bridge.splice(1, 1, truck_weights[0]);

  if (currentWeight(bridge) > weight) {
    bridge.splice(1, 1, 0);
  } else if (bridge[1] === undefined) {
    bridge.splice(1, 1, -1);
  } else {
    bridge.splice(1, 1, truck_weights[0]);
    truck_weights.splice(truck_weights.indexOf(truck_weights[0]), 1);
  }
  // if (currentWeight(bridge) === -2) {
  //   console.log('done');
  // }
  console.log(bridge);
  count++;
}

function goTruck(bridge) {
  if (bridge[0] === 0) {
  } else {
    goneTruck.push(bridge[0]);
  }
  bridge.splice(0, 1, bridge[1]);
  pushBridge(truck_weights);
}

while (finishNum !== goneTruck.length) {
  goTruck(bridge);
}

console.log(count);
