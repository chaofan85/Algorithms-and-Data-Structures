class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
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

function listOfDepths(root, depths = [], level = 0) {
  if (!root) return [];

  if (depths[level] === undefined) {
    depths[level] = new ListNode(root.val);
  } else {
    let node = depths[level];
    while (node.next) {
      node = node.next;
    }
    node.next = new ListNode(root.val);
  }

  listOfDepths(root.left, depths, level + 1);
  listOfDepths(root.right, depths, level + 1);

  return depths;
}

let lists = listOfDepths(d);
let vals = [];
lists.forEach(list => {
  let valsOfLevel = [];
  let node = list;
  while (node) {
    valsOfLevel.push(node.val);
    node = node.next;
  }
  vals.push(valsOfLevel);
});

console.log(vals);
