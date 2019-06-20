//https://leetcode.com/problems/pascals-triangle-ii/description/

/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 3
Output: [1,3,3,1]

Follow up:
Could you optimize your algorithm to use only O(k) extra space?
*/

var getRow = function(rowIndex) {
  let arr = [1];
  while (arr.length < rowIndex + 1) {
    arr[arr.length] = 1;
    for (let i = arr.length - 2; i > 0; i--) {
      arr[i] += arr[i - 1];
    }
  }
  return arr;
};
