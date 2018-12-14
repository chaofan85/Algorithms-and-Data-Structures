/* 
https://leetcode.com/problems/4sum/description/


Given an array nums of n integers and an integer target, 
are there elements a, b, c, and d in nums such that a + b + c + d = target? 
Find all unique quadruplets in the array which gives the sum of target.

Note:
The solution set must not contain duplicate quadruplets.

Example:
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          if (nums[k] !== nums[k - 1] || nums[l] !== nums[l + 1]) {
            result.push([nums[i], nums[j], nums[k], nums[l]]);
          }
          k++;
          l--;
        }
        if (sum > target) l--;
        if (sum < target) k++;
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

console.log(fourSum([0, 0, 0, 0], 1));
