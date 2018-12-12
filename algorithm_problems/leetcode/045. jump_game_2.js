// https://leetcode.com/problems/jump-game-ii/

function jump(nums, idx = 0, memo = {}) {
  if (idx in memo) return memo[idx];
  if (idx === nums.length - 1) return 0;
  if (idx > nums.length - 1) return nums.length;

  let max = nums[idx];
  let ways = [];
  for (let i = 1; i <= max; i++) {
    ways.push(jump(nums, idx + i, memo) + 1);
  }

  memo[idx] = Math.min(...ways);
  return memo[idx];
}

// console.log(jump([2, 3, 1, 1, 4]));
