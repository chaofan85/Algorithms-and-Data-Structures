// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let curr = 0;

  function helper(root) {
    if (!root) return null;

    let left = helper(root.left);
    if (left || left === 0) return left;

    curr++;
    if (curr === k) return root.val;

    let right = helper(root.right);
    if (right || right === 0) return right;
  }

  return helper(root, k);
};
