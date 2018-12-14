// https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function(height) {
  let result = 0;

  for (let i = 0, j = height.length - 1; i < j; ) {
    result = Math.max(result, Math.min(height[i], height[j]) * (j - i));
    height[i] > height[j] ? j-- : i++;
  }

  return result;
};
