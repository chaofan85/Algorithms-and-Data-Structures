/*
https://leetcode.com/problems/maximal-square/description/

Given a 2D binary matrix filled with 0's and 1's, 
find the largest square containing only 1's and return its area.

Example:
Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  let squareLen = 0;
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  let arr = new Array(rowLen + 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(colLen + 1);
    arr[i].fill(0);
  }

  for (let i = 1; i <= rowLen; i++) {
    for (let j = 1; j <= colLen; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        arr[i][j] =
          Math.min(Math.min(arr[i][j - 1], arr[i - 1][j]), arr[i - 1][j - 1]) +
          1;
        squareLen = Math.max(arr[i][j], squareLen);
      }
    }
  }

  return squareLen * squareLen;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
