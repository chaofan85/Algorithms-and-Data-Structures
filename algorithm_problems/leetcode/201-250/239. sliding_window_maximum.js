// https://leetcode.com/problems/sliding-window-maximum/description/

var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) return [];
  if (k === nums.length) return [Math.max(...nums)];
  if (k === 1) return nums;

  let result = [];
  let queue = [];

  let i = 0;
  while (i < k) {
    if (!queue.length || nums[i] <= queue[queue.length - 1][0]) {
      queue.push([nums[i], i]);
    } else {
      while (queue.length && nums[i] > queue[queue.length - 1][0]) {
        queue.pop();
      }
      queue.push([nums[i], i]);
    }
    i++;
  }

  result.push(queue[0][0]);

  for (; i < nums.length; i++) {
    if (i - queue[0][1] >= k) queue.shift();
    if (!queue.length || nums[i] <= queue[queue.length - 1][0]) {
      queue.push([nums[i], i]);
    } else {
      while (queue.length && nums[i] > queue[queue.length - 1][0]) {
        queue.pop();
      }
      queue.push([nums[i], i]);
    }
    result.push(queue[0][0]);
  }

  return result;
};

console.log(
  maxSlidingWindow([1, -1, 1, 3, 5, 1, 2, 3, 1, 5, -2, -1, -5, -2], 4)
);
console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));
