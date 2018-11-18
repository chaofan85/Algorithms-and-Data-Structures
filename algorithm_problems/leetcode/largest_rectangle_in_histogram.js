// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

var largestRectangleArea = function(heights) {
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
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
