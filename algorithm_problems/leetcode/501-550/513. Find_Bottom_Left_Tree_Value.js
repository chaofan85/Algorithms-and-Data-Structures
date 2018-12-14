/*
https://leetcode.com/problems/find-bottom-left-tree-value/description/

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:
    2
   / \
  1   3

Output:
1

Example 2:
Input:
        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7

Note: You may assume the tree (i.e., the given root node) is not NULL.
*/

var findBottomLeftValue = function(root, parent = null) {
  if (!root) return [Infinity, -1];
  let left = findBottomLeftValue(root.left, root);
  let right = findBottomLeftValue(root.right, root);
  let maxArr = left[1] >= right[1] ? left : right;
  maxArr[1]++;
  if (maxArr[0] === Infinity) maxArr[0] = root.val;
  return parent ? maxArr : maxArr[0];
};
