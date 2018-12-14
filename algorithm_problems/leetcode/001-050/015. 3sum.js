/*
https://leetcode.com/problems/3sum/description/

Given an array nums of n integers, 
are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
var threeSum = function(nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k && nums[k] >= 0) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        if (nums[j] !== nums[j - 1] || nums[k] !== nums[k + 1]) {
          result.push([nums[i], nums[j], nums[k]]);
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
    if (nums[i] > 0) break;
  }
  return result;
};
