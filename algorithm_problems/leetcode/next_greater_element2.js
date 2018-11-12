// https://leetcode.com/problems/next-greater-element-ii/description/

var nextGreaterElements = function(nums) {
  let double = nums.concat(nums);

  let cache = {};
  let stack = [];
  let result = [];

  for (let i = 0; i < double.length; i++) {
    if (!stack.length || nums[stack[stack.length - 1]] > double[i]) {
      stack.push(i);
    } else {
      while (double[stack[stack.length - 1]] < double[i]) {
        cache[stack.pop()] = double[i];
      }
      stack.push(i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    result.push(cache[i] !== undefined ? cache[i] : -1);
  }
  console.log(cache, double);
  return result;
};

console.log(nextGreaterElements([-1, 0]));
// console.log(nextGreaterElements([1, 3, 2, 4, 5, 3]));
