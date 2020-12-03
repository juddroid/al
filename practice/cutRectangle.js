const w = 8;
const h = 12;

function solution(w, h) {
  const smaller = (a, b) => (a > b ? b : a);
  const bigger = (a, b) => (a > b ? a : b);
  let allRec = w * h;
  let uselessRec;
  let devider = parseInt(bigger(w, h) / smaller(w, h));
  if (w === 1 || h === 1) {
    usefulRec = 0;
  } else if (w === h) {
    uselessRec = w;
  } else if (w % 2 === 0 && h % 2 === 0) {
    uselessRec = smaller(w, h) * devider;
  } else if (w % 2 === 1 && h % 2 === 1) {
    uselessRec = smaller(w, h) * (devider + 1);
  } else if ((w % 2 === 0 && h % 2 === 1) || (w % 2 === 1 && h % 2 === 0)) {
    console.log('test');
  }
  let usefulRec = allRec - uselessRec;
  result = usefulRec;

  return result;
}
