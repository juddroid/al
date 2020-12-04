const w = 8;
const h = 12;

// function solution(w, h) {
//   let angle = h / w;
//   let generalFn = (x) => angle * x;

//   let rectangle = 0;

//   const transFn = function (num) {
//     let floorNum = generalFn(num);
//     let string = floorNum.toString();
//     let toNum;
//     if (string.includes('.')) {
//       toNum = Number(string.slice(0, string.indexOf('.')));
//     } else {
//       toNum = floorNum;
//     }
//     return toNum;
//   };

//   for (let i = 0; i < w; i++) {
//     if (generalFn(i) >= transFn(i)) {
//       rectangle += transFn(i);
//     }
//   }

//   let result = rectangle * 2;
//   return result;
// }

function solution(w, h) {
  // const fixAngle = function (a) {
  //   let stringFloat = a.toString();
  //   let fixFloat = '';
  //   if (stringFloat.includes('.')) {
  //     fixFloat =
  //       stringFloat.slice(0, stringFloat.indexOf('.')) +
  //       stringFloat.slice(
  //         stringFloat.indexOf('.'),
  //         stringFloat.indexOf('.') + 6
  //       );
  //   } else {
  //     fixFloat = stringFloat;
  //   }
  //   let fixedNumber = Number(fixFloat);

  //   return fixedNumber;
  // };
  let angle = (1000 * h) / w;
  let generalFn = (x) => (angle * x) / 1000;

  let rectangle = 0;

  for (let i = 0; i < w; i++) {
    if (generalFn(i) >= Math.floor(generalFn(i))) {
      rectangle += Math.floor(generalFn(i));
    }
    console.log(i, rectangle);
  }

  let result = rectangle * 2;
  return result;
}
