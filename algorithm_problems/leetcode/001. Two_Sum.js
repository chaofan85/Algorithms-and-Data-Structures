/*
https://leetcode.com/problems/two-sum/description/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      if (i < map[target - nums[i]]) {
        result.push(i, map[target - nums[i]]);
      } else {
        result.push(map[target - nums[i]], i);
      }
    } else {
      map[nums[i]] = i;
    }
  }
  return result;
};
