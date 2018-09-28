class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.parent = null;
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
b.parent = d;
b.left = a;
a.parent = b;
b.right = c;
c.parent = b;
d.right = f;
f.parent = d;
f.left = e;
e.parent = f;
f.right = g;
g.parent = f;

function successor(node) {
  if (!node) return null;

  let root = findRoot(node);
  let result = inOrder(root, node) ? inOrder(root, node)[1] : null;
  console.log(result ? result.val : null);
  return result;
}

function findRoot(node) {
  while (node.parent) {
    node = node.parent;
  }
  return node;
}

function inOrder(root, node, temp = []) {
  if (!root) return;
  if (temp.length === 2) {
    return temp;
  }

  inOrder(root.left, node, temp);
  if (root === node || temp.length) temp.push(root);
  inOrder(root.right, node, temp);

  return temp;
}

function successor2(node) {
  if (!node) return null;

  if (node.right) {
    return leftMostChild(node.right);
  } else {
    let p1 = node;
    let p2 = node.parent;
    while (p2 && p2.left !== p1) {
      p1 = p2;
      p2 = p2.parent;
    }
    return p2;
  }
}

function leftMostChild(node) {
  if (!node) return null;
  while (node.left) node = node.left;

  return node;
}

console.log(successor2(a));
console.log(successor2(b));
console.log(successor2(c));
console.log(successor2(d));
console.log(successor2(e));
console.log(successor2(f));
console.log(successor2(g));
