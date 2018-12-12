class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function isBalanced(root) {
  return getDepth(root) !== -1;
}

function getDepth(root) {
  if (!root) return 0;

  let left = getDepth(root.left);
  if (left === -1) return -1;
  let right = getDepth(root.right);
  if (right === -1) return -1;

  return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
f.right = g;

console.log(isBalanced(a));
