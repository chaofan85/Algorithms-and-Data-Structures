/*
https://leetcode.com/problems/longest-increasing-subsequence/description/

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:
Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Note:
There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

var lengthOfLIS = function(nums) {
  let longest = 0;
  let comb = [];
  function helper(arr, path) {
    longest = Math.max(longest, path.length);
    if (!arr.length) return;

    for (let i = 0; i < arr.length; i++) {
      if (!path.length || arr[i] > path[path.length - 1]) {
        path.push(arr[i]);
        helper(arr.slice(i + 1), path);
        path.pop();
      }
    }
  }

  helper(nums, comb);
  return longest;
};

console.log(lengthOfLIS([4, 3, 1, 2, 5, 1, 2, 5, 2, 3, 5, 2, 1, 3, 5, 2, 1, 4, 3, 2]));