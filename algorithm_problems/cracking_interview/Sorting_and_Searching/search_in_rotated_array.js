/*
Search in Rotated Array: Given a sorted array of n integers that has been
rotated an unknown number of times, write code to find an element in the array.
You may assume that the array was originally sorted in increasing order.

EXAMPLE
lnput:find 5 in{15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
Output: 8 (the index of 5 in the array)
*/

function search(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    if (high - low === 1) {
      if (nums[high] === target) return high;
      if (nums[low] === target) return low;
      if (nums[high] !== target && nums[low] !== target) return -1;
    }
    let mid = ~~((low + high) / 2);
    console.log(low, high, mid);
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

console.log(search([5, 1, 2, 3, 4], 1));
