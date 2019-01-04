// https://leetcode.com/problems/search-a-2d-matrix/description/

var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  let i = 0;
  for (; i < matrix.length; i++) {
    if (i === matrix.length - 1) {
      if (matrix[i][matrix[matrix[0].length - 1]] < target) return false;
      break;
    }
    if (matrix[i + 1][0] > target) break;
  }

  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] === target) return true;
  }

  return false;
};
