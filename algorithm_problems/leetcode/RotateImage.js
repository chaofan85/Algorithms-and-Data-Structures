// https://leetcode.com/problems/rotate-image/description/

var rotate = function(matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  for (let i = 0; i <= Math.floor(colLength / 2); i++) {
    for (let j = i; j < matrix[i].length - i - 1; j++) {
      let temp = matrix[i][j];
      // console.log(
      //   matrix[i][j],
      //   matrix[j][matrix[i].length - 1],
      //   matrix[matrix.length - 1][matrix[i].length - 1 - j],
      //   matrix[matrix.length - 1 - j][0]
      // );
      matrix[i][j] = matrix[j][matrix[i].length - 1];

      matrix[j][matrix[i].length - 1] =
        matrix[matrix.length - 1][matrix[i].length - 1 - j];

      matrix[matrix.length - 1][matrix[i].length - 1 - j] =
        matrix[matrix.length - 1 - j][0];

      matrix[matrix.length - 1 - j][0] = temp;
      console.log(matrix);
    }
  }

  return matrix;
};
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
//
// a a a a a a a
// a a a a a a a
// a a a a a a a
// a a a a a a a
// a a a a a a a
// a a a a a a a
// a a a a a a a
