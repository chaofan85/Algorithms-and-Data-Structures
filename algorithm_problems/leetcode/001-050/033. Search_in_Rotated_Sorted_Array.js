/*
https://leetcode.com/problems/search-in-rotated-sorted-array/description/


Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

function search(nums, target) {
  if (nums.length < 3) return nums.indexOf(target);
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    if (high - low === 1) {
      if (nums[high] === target) return high;
      if (nums[low] === target) return low;
      if (nums[high] !== target && nums[low] !== target) return -1;
    }
    let mid = ~~((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[low] < nums[mid]) {
      if (target >= nums[low] && target <= nums[mid]) {
        return binarySearch(nums, low, mid, target);
      } else {
        low = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[high]) {
        return binarySearch(nums, mid, high, target);
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

function binarySearch(nums, low = 0, high = nums.length - 1, target) {
  let i = low;
  let j = high;
  while (i <= j) {
    let mid = ~~((i + j) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}
