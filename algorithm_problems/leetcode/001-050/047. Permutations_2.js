/*
https://leetcode.com/problems/permutations-ii/description/

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

var permuteUnique = function(nums) {
  if (!nums.length) return [[]];
  let prev = permuteUnique(nums.slice(1));
  let set = new Set();

  let permutes = [];
  for (let i = 0; i < prev.length; i++) {
    for (let j = 0; j < prev[i].length + 1; j++) {
      let permute = [...prev[i].slice(0, j), nums[0], ...prev[i].slice(j)];
      let str = permute.toString();
      if (!set.has(str)) {
        permutes.push(permute);
        set.add(str);
      }
    }
  }

  return permutes;
};
