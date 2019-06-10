// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

var connect = function(root) {
  if (!root) return;

  if (root.left) root.left.next = root.right;
  if (root.right) root.right.next = null;
  if (root.next && root.right) root.right.next = root.next.left;

  connect(root.left);
  connect(root.right);
};