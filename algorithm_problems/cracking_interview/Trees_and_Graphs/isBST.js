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

function isBST(root) {}
