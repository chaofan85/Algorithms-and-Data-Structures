// https://leetcode.com/problems/symmetric-tree/description/

var isSymmetric = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;

  let p1 = root;
  let p2 = root;
  let stack1 = [root];
  let stack2 = [root];
  while (stack1.length && stack2.length) {
    let top1 = stack1.pop();
    let top2 = stack2.pop();
    if (top1.val !== top2.val) return false;
    if (top1.left && !top2.right) return false;
    if (top1.right && !top2.left) return false;

    if (top1.right) stack1.push(top1.right);
    if (top1.left) stack1.push(top1.left);
    if (top2.left) stack2.push(top2.left);
    if (top2.right) stack2.push(top2.right);
  }

  return true;
};

