// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

/*

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
*/

var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  function helper(root) {
    if (!root) return 0;

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    if (!root.left || !root.right) return Math.max(left, right) + 1;
    if (root.left && root.right) return Math.min(left, right) + 1;
  }

  return helper(root);
};
