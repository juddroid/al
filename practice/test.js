const s = 'try hello wrold';

// function solution(s) {
//   let splitString = s.split(' ');

//   var answer = console.log(s);
//   return answer;
// }

// solution(s);

let splitString = s.split(' ');

console.log(splitString[0], splitString[0].length);
console.log(splitString[1], splitString[1].length);
console.log(splitString[2], splitString[2].length);

let upper = [];
// let newArray = upper.map(tsetUpper);

// function testUpper() {
//   for (let i = 0; i < splitString[0].length; i += 2) {
//     console.log(splitString[0][i].toUpperCase());
//   }

//   for (let i = 0; i < splitString[1].length; i += 2) {
//     console.log(splitString[1][i].toUpperCase());
//   }

//   for (let i = 0; i < splitString[2].length; i += 2) {
//     console.log(splitString[2][i].toUpperCase());
//   }
// }

// console.log(newArray);

for (let i = 0; i < splitString[0].length; i += 2) {
  let newChar = splitString[0][i].toUpperCase();
  console.log(newChar);
  let upperArray = splitString[0].replace(splitString[0][i], newChar);
  console.log(upperArray);
}

// for (let i = 0; i < splitString[1].length; i += 2) {
//   let newChar = splitString[1][i].toUpperCase();
//   console.log(newChar);
// }
// for (let i = 0; i < splitString[2].length; i += 2) {
//   let newChar = splitString[2][i].toUpperCase();
//   console.log(newChar);
// }

let result = '';
for (let j = 0; j < splitString.length; j++) {
  for (let i = 0; i < splitString[j].length; i++) {
    if (i % 2 === 0) {
      result += splitString[j][i].toUpperCase();
    } else {
      result += splitString[j][i];
    }
  }
  result += ' ';
}

console.log(result);
