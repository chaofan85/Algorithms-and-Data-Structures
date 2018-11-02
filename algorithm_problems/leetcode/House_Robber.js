// https://leetcode.com/problems/house-robber/description/

var rob1 = function(nums) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = a;
    a = Math.max(a, b);
    b = nums[i] + temp;
  }

  return Math.max(a, b);
};

var rob2 = function(nums) {
  if (!nums.length) return 0;
  let memo = [];
  memo[0] = 0;
  memo[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let val = nums[i];
    console.log(memo[i], memo[i - 1], val, i);
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + val);
  }
  console.log(memo);
  return memo[nums.length];
};

console.log(rob2([2, 7, 9, 3, 1]));
