// https://leetcode.com/problems/rotate-image/description/

var rotate = function(matrix) {
  for (let i = 0; i <= Math.floor(matrix.length / 2); i++) {
    for (let j = i; j < matrix[i].length - i - 1; j++) {
      let temp = matrix[i][j];

      matrix[i][j] = matrix[matrix.length - 1 - j][i];

      matrix[matrix.length - 1 - j][i] =
        matrix[matrix.length - 1 - i][matrix[i].length - 1 - j];

      matrix[matrix.length - 1 - i][matrix[i].length - 1 - j] =
        matrix[j][matrix[i].length - 1 - i];

      matrix[j][matrix[i].length - 1 - i] = temp;
    }
  }
  return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
