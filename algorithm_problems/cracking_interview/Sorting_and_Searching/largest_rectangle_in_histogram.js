// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

// var largestRectangleArea = function(heights) {
//   let max = 0;
//
//   for (let i = 0; i < heights.length; i++) {
//     let left = 0;
//     let right = 0;
//     if (i !== 0) {
//       for (let j = i - 1; j >= 0 && heights[j] >= heights[i]; j--) {
//         left += heights[i];
//       }
//     }
//     if (i !== heights.length - 1) {
//       for (let j = i + 1;
//            j < heights.length && heights[j] >= heights[i]; j++) {
//         right += heights[i];
//       }
//     }
//     let area = left + right + heights[i];
//     max = Math.max(area, max);
//     console.log(area, max, i);
//   }
//
//   return max;
// };

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
