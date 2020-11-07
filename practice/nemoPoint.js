const v = [
  [3, 11],
  [3, 7],
  [8, 7],
];

let rows = [];
let cols = [];

for (let i = 0; i < v.length; i++) {
  for (let j = 0; j < v[i].length; j++) {
    if (j === 0) {
      rows.push(v[i][j]);
    } else {
      cols.push(v[i][j]);
    }
  }
}

console.log(rows);
console.log(cols);

let resultRows = '';
let resultCols = '';

if (rows[0] === rows[1]) {
  resultRows += rows[2];
} else if (rows[1] === rows[2]) {
  resultRows += rows[0];
} else if (rows[0] === rows[2]) {
  resultRows += rows[1];
}

if (cols[0] === cols[1]) {
  resultCols += cols[2];
} else if (cols[1] === cols[2]) {
  resultCols += cols[0];
} else if (cols[0] === cols[2]) {
  resultCols += cols[1];
}

let result = [parseInt(resultRows), parseInt(resultCols)];

console.log(result);
