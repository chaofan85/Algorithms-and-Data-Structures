// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

/*
Given a binary tree, flatten it to a linked list in-place.
For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6

The flattened tree should look like:
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/

var flatten = function(root) {
  if (root) flat(root);
};

function flat(root) {
  if (!root.left && !root.right) return root;
  let rightRoot = root.right;
  if (root.left) {
    var leftTail = flat(root.left);

    root.right = root.left;
    leftTail.right = rightRoot;
    root.left = null;
  }

  return rightRoot ? flat(rightRoot) : leftTail;
}
