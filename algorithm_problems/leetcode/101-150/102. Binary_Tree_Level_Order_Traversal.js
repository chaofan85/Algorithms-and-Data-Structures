// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

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
