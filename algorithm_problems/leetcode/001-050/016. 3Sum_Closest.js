/*
https://leetcode.com/problems/3sum-closest/description/

Given an array nums of n integers and an integer target, 
find three integers in nums such that the sum is closest to target. 
Return the sum of the three integers. 
You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
  let diff = Infinity;
  let closest = 0;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) return sum;
      if (Math.abs(target - sum) < diff) {
        diff = Math.abs(target - sum);
        closest = sum;
      }
      if (sum > target) k--;
      if (sum < target) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return closest;
};

// There's more efficient solution

console.log(threeSumClosest([-1, 2, 1, -4], 1));
