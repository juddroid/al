// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10];

function testCase1() {
  // when
  const bridge_length = 2;
  const weight = 10;
  const truck_weights = [7, 4, 5, 6];

  // then
  const result = solution(bridge_length, weight, truck_weights);
  const expected = 8;

  return result == expected;
}

console.log(testCase1());

function solution(bridge_length, weight, truck_weights) {
  const SPACE = 0;
  let second = 0;
  let bridge = [];

  function startWorld() {
    bridge = new Array(bridge_length).fill(SPACE);

    while (truck_weights.length > 0 || getCurrentBridgeWeight() > 0) {
      let truck = truck_weights[0];
      bridge.shift();
      controlMove(truck);
      second++;
    }
    return second;
  }

  function controlMove(truck) {
    if (canEnterTruck() && isOverWeightBridge(truck)) {
      enterTruck(truck);
    } else {
      enterEmptySpace(SPACE);
    }
  }

  function enterTruck(truck) {
    bridge.push(truck);
    truck_weights.shift();
  }

  function enterEmptySpace(space) {
    bridge.push(space);
  }

  function getCurrentBridgeWeight() {
    return bridge.reduce((x, y) => x + y, 0);
  }

  function canEnterTruck() {
    return bridge_length >= bridge.length - 1;
  }

  function isOverWeightBridge(truckWeight) {
    return getCurrentBridgeWeight() + truckWeight <= weight;
  }

  return startWorld();
}
