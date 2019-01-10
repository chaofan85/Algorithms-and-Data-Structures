/*
https://leetcode.com/problems/trapping-rain-water/description/

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.

Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

var trap = function(height) {
  if (!height.length) return 0;
  let stack = [];
  let i = 0;
  let max = 0;
  let part = 0;

  while (i < height.length) {
    if (!stack.length || height[i] <= height[stack[stack.length - 1]]) {
      stack.push(i++);
    } else {
      let idx = stack.pop();
      if (!stack.length) {
        part = 0;
      } else {
        part =
          (Math.min(height[stack[stack.length - 1]], height[i]) - height[idx]) *
          (i - stack[stack.length - 1] - 1);
      }
      max += part;
    }
  }
  return max;
};
