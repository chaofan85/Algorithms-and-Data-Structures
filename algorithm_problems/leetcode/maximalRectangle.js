// https://leetcode.com/problems/maximal-rectangle/description/

var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let colLen = matrix[0].length;
  let rowLen = matrix.length;

  let h = new Array(colLen + 1);
  h.fill(0);
  let max = 0;

  for (let row = 0; row < rowLen; row++) {
    let stack = [];
    for (let i = 0; i < colLen + 1; i++) {
      if (i < colLen) {
        h[i] = matrix[row][i] === "1" ? h[i] + 1 : 0;
      }

      if (!stack.length || h[stack[stack.length - 1]] <= h[i]) {
        stack.push(i);
        console.log(stack, h);
      } else {
        while (stack.length && h[i] < h[stack[stack.length - 1]]) {
          let top = stack.pop();
          let area =
            h[top] * (!stack.length ? i : i - stack[stack.length - 1] - 1);
          max = Math.max(area, max);
        }
        stack.push(i);
      }
    }
  }
  return max;
};

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
// console.log(
//   maximalRectangle([
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "0", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"]
//   ])
// );
