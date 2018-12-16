// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function(nums) {
  let pre = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[i - 1]) {
      nums[pre++] = nums[i];
    }
  }
  return pre;
};
