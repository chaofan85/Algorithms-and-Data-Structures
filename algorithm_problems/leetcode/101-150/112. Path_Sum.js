// https://leetcode.com/problems/path-sum/description/

/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that 
adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === sum;
  }

  let stack = [];
  let node = root;
  node.sum = node.val;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
      if (node) {
        node.sum = node.val + stack[stack.length - 1].sum;
      }
    }

    node = stack.pop();
    if (!node.left && !node.right) {
      if (node.sum === sum) {
        return true;
      }
    }
    let lastSum = node.sum;
    node = node.right;
    if (node) {
      node.sum = node.val + lastSum;

      if (!node.left && !node.right) {
        if (node.sum === sum) {
          return true;
        }
      }
    }
  }

  return false;
};
