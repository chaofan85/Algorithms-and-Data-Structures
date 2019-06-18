// https://leetcode.com/problems/pascals-triangle/description/

/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

var generate = function(numRows) {
  let arr = new Array(numRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(i + 1);
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0 || j === arr[i].length - 1) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }

  return arr;
};
