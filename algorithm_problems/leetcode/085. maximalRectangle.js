/*
 https://leetcode.com/problems/maximal-rectangle/description/

 Given a 2D binary matrix filled with 0's and 1's, 
 find the largest rectangle containing only 1's and return its area.

Example:
Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6

 */

var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let arr = new Array(matrix[0].length);
  arr.fill(0);
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      arr[j] = matrix[i][j] === "0" ? 0 : arr[j] + 1;
    }
    max = Math.max(max, largestRectangleArea(arr));
  }

  return max;
};

function largestRectangleArea(heights) {
  let max = 0;
  let stack = [];

  for (let i = 0; i <= heights.length; i++) {
    if (!stack.length || heights[i] > heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      let idx = stack.pop();
      let area =
        heights[idx] * (stack.length ? i - 1 - stack[stack.length - 1] : i);
      max = Math.max(max, area);
      i--;
    }
  }

  return max;
}

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
