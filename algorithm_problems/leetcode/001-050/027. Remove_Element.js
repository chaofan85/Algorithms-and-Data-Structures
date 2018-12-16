// https://leetcode.com/problems/remove-element/description/

var removeElement = function(nums, val) {
  let i = 0;
  let j = 1;
  for (; i < nums.length && j < nums.length; i++) {
    if (nums[i] === val) {
      if (nums[j] === val) {
        i--;
      } else {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    j++;
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) return i;
  }

  return nums.length;
};
