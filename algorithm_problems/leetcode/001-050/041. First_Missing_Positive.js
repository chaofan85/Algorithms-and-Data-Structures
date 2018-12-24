/*
https://leetcode.com/problems/first-missing-positive/description/

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
Input: [1,2,0]
Output: 3

Example 2:
Input: [3,4,-1,1]
Output: 2

Example 3:
Input: [7,8,9,11,12]
Output: 1

Note:
Your algorithm should run in O(n) time and uses constant extra space.
*/

var firstMissingPositive = function(nums) {
  nums.sort((a, b) => a - b);
  if (nums.length === 0) return 1;
  if (nums.length === 1) return nums[0] === 1 ? 2 : 1;

  if (nums[0] > 1) return 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > 1 && nums[i] - nums[i - 1] > 1) {
      if (nums[i - 1] < 1) return 1;
      return nums[i - 1] + 1;
    }
  }
  return nums[nums.length - 1] + 1;
};
