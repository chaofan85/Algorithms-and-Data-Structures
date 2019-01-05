/*
https://leetcode.com/problems/subsets/description/

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

var subsets = function(nums) {
  if (!nums.length) return [[]];
  let prev = subsets(nums.slice(1));
  let first = nums[0];
  let newSet = [];
  for (let i = 0; i < prev.length; i++) {
    newSet.push([...prev[i], first]);
  }

  return [...prev, ...newSet];
};
