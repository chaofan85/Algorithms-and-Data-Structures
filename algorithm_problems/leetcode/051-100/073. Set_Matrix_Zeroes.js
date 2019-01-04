// https://leetcode.com/problems/set-matrix-zeroes/description/

var setZeroes = function(matrix) {
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
      matrix[i][0] = 0;
    }
  }
};
