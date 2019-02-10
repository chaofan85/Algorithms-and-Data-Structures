// https://leetcode.com/problems/recover-binary-search-tree/description/

var recoverTree = function(root) {
  if (!root) return;
  let wrong = [];

  function helper2(
    root,
    wrong = [],
    trueRoot = root,
    val = [-Infinity, -Infinity]
  ) {
    if (!root) return;
    helper2(root.left, wrong, trueRoot, val);
    if (
      val[0] < root.val &&
      ((val[1] > val[0] && val[1] > root.val) ||
        (val[1] < val[0] && val[1] < root.val))
    ) {
      wrong.push(val[1]);
    }

    val[0] = val[1];
    val[1] = root.val;
    helper2(root.right, wrong, trueRoot, val);
  }

  helper2(root, wrong);
  let node1 = findNode(root, wrong[0]);
  let node2 = findNode(root, wrong[1]) || lastNode(root);

  let temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
};

function findNode(root, val) {
  if (!root) return;

  if (root.val === val) return root;
  let left = findNode(root.left, val);
  let right = findNode(root.right, val);

  return left || right;
}

function lastNode(root) {
  let node = root;
  while (node.right) node = node.right;
  return node;
}
