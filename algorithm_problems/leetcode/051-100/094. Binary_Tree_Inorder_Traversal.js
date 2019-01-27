// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

var inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let temp = root;
  while (temp || stack.length) {
    while (temp) {
      stack.push(temp);
      temp = temp.left;
    }
    temp = stack.pop();
    result.push(temp.val);
    temp = temp.right;
  }
  return result;
};
