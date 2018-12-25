/*
https://leetcode.com/problems/permutations/description/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(nums) {
  if (!nums.length) return [[]];
  let prev = permute(nums.slice(1));

  let permutes = [];
  for (let i = 0; i < prev.length; i++) {
    for (let j = 0; j < prev[i].length + 1; j++) {
      permutes.push([...prev[i].slice(0, j), nums[0], ...prev[i].slice(j)]);
    }
  }

  return permutes;
};
