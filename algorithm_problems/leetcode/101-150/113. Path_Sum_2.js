// https://leetcode.com/problems/path-sum-ii/description/

/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

var pathSum = function(root, sum, currSum = 0) {
  if (!root) return [];
  currSum += root.val;
  if (currSum === sum && !root.left && !root.right) return [[root.val]];
  if (currSum !== sum && !root.left && !root.right) return [];

  let result = [];

  let left = pathSum(root.left, sum, currSum);
  let right = pathSum(root.right, sum, currSum);

  left.forEach(path => path.unshift(root.val));
  right.forEach(path => path.unshift(root.val));

  result.push(...left);
  result.push(...right);
  return result;
};
