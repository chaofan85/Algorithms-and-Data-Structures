class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function height(root) {
  if (!root) return -1;
  return 1 + Math.max(height(root.left), height(root.right));
}

function isBalanced(root) {
  if (!root) return true;
  let areGooeHeights = Math.abs(height(root.left) - height(root.right)) <= 1;
  return areGooeHeights && isBalanced(root.left) && isBalanced(root.right);
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
