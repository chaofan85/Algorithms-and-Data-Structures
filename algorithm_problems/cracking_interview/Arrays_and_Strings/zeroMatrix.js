function zeroMatrix(matrix) {
  let rows = new Set();
  let cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

function zeroMatrix2(matrix) {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 && matrix[i][j] === 0) firstRowHasZero = true;
      if (j === 0 && matrix[i][j] === 0) firstColHasZero = true;
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0) matrix[i][j] = 0;
      if (matrix[i][0] === 0) matrix[i][j] = 0;
    }
  }

  if (firstRowHasZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(i);
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

console.log(zeroMatrix([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
console.log(zeroMatrix2([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
