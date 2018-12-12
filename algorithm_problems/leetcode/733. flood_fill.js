// https://leetcode.com/problems/flood-fill/description/

var floodFill = function(image, sr, sc, newColor) {
  if (!image.length || image[sr][sc] === newColor) return image;
  let originColor = image[sr][sc];

  function helper(matrix, row, col, color) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
      return;
    let up = matrix[row - 1] ? matrix[row - 1][col] : Infinity;
    let down = matrix[row + 1] ? matrix[row + 1][col] : Infinity;
    let left =
      matrix[row][col - 1] !== undefined ? matrix[row][col - 1] : Infinity;
    let right =
      matrix[row][col + 1] !== undefined ? matrix[row][col + 1] : Infinity;
    if (
      [matrix[row][col], up, down, left, right].every(
        num => num !== originColor
      )
    )
      return;
    if (matrix[row][col] === originColor) matrix[row][col] = color;
    if (matrix[row - 1] && matrix[row - 1][col] === originColor) {
      matrix[row - 1][col] = color;
      helper(matrix, row - 1, col, color);
    }

    if (matrix[row + 1] && matrix[row + 1][col] === originColor) {
      matrix[row + 1][col] = color;
      helper(matrix, row + 1, col, color);
    }

    if ([col - 1] && matrix[row][col - 1] === originColor) {
      matrix[row][col - 1] = color;
      helper(matrix, row, col - 1, color);
    }

    if ([col + 1] && matrix[row][col + 1] === originColor) {
      matrix[row][col + 1] = color;
      helper(matrix, row, col + 1, color);
    }
  }

  helper(image, sr, sc, newColor);
  return image;
};

// console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
// console.log(floodFill([[0, 0, 0], [1, 1, 1]], 1, 0, 2));
console.log(floodFill([[0, 0, 0], [1, 1, 1]], 1, 0, 2));
