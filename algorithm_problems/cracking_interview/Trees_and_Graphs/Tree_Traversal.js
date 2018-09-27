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

function inOrder(root, vals = []) {
  if (!root) return;

  inOrder(root.left, vals);
  vals.push(root.val);
  inOrder(root.right, vals);

  return vals;
}
function preOrder(root, vals = []) {
  if (!root) return;

  vals.push(root.val);
  preOrder(root.left, vals);
  preOrder(root.right, vals);

  return vals;
}
function postOrder(root, vals = []) {
  if (!root) return;

  postOrder(root.left, vals);
  postOrder(root.right, vals);
  vals.push(root.val);

  return vals;
}

console.log(inOrder(d));
console.log(preOrder(d));
console.log(postOrder(d));
