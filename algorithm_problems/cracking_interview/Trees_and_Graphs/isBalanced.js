class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);
let g = new TreeNode(7);

d.left = b;
b.left = a;
b.right = c;
d.right = f;
f.left = e;
f.right = g;

// function isBalanced(root) {
//   if (!root) return true;
//   let diff = Math.abs(getHeight(root.left) - getHeight(root.right));
//   if (diff > 1) {
//     return false;
//   } else {
//     return isBalanced(root.left) && isBalanced(root.right);
//   }
// }
//
// function getHeight(root) {
//   if (!root) return -1;
//   return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
// }

function isBalanced2(root) {
  return getHeight(root) !== -2;
}

function getHeight(root) {
  if (!root) return -1;

  let leftHeight = getHeight(root.left);
  if (leftHeight === -2) return -2;
  let rightHeight = getHeight(root.right);
  if (rightHeight === -2) return -2;

  let diff = Math.abs(leftHeight - rightHeight);
  return diff > 1 ? -2 : Math.max(leftHeight, rightHeight) + 1;
}

console.log(isBalanced2(d));
