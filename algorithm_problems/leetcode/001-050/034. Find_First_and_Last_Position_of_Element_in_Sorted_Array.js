/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

var searchRange = function(nums, target) {
  if (nums.length === 1 && nums[0] !== target) return [-1, -1];
  if (nums.length === 1 && nums[0] === target) return [0, 0];
  var pos = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      pos.push(i);
      break;
    }
  }
  if (nums[nums.length - 1] === target) {
    pos.push(nums.length - 1);
  }
  for (j = pos[0]; j < nums.length; j++) {
    if (nums[j] !== target) {
      pos.push(j - 1);
      break;
    }
  }
  if (pos.length === 0) return [-1, -1];
  return pos;
};
