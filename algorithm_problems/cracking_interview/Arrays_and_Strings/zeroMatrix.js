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

console.log(
  zeroMatrix([[1, 4, 6, 0], [6, 2, 0, 1], [2, 3, 4, 5], [5, 2, 1, 1]])
);
