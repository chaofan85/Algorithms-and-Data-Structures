// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

