// https://leetcode.com/problems/sort-colors/description/

var sortColors = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
      i--;
    } else if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      i--;
    }
  }
  return nums;
};

console.log(sortColors([2, 1, 2, 1, 0, 2, 2, 0, 1, 1, 0, 2]));
