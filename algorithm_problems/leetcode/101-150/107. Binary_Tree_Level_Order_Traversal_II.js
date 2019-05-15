// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/

// Given a binary tree, return the bottom-up level order traversal of its nodes' values.
// (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

var levelOrderBottom = function(root) {
  if (!root) return [];

  return getLevels(root, 0).reverse();
};

function getLevels(root, level, arr = []) {
  if (!root) return;
  getLevels(root.left, level + 1, arr);
  getLevels(root.right, level + 1, arr);

  if (arr[level] === undefined) {
    arr[level] = [root.val];
  } else {
    arr[level].push(root.val);
  }

  return arr;
}
