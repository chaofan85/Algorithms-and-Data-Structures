function BSTSequences(root) {
  if (!root) return [[]];

  let left = BSTSequences(root.left);
  let right = BSTSequences(root.right);
  let collection = [];

  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      let comb = weave(left[i], right[j]);
      comb.forEach(c => {
        collection.push([root.val, ...c]);
      });
    }
  }

  return collection;
}

function weave(arr1, arr2) {
  if (!arr2.length) return [arr1];

  let ele = arr2[0];
  let insertions = [];
  for (var i = 0; i <= arr1.length; i++) {
    let left = arr1.slice(0, i);
    let right = arr1.slice(i);
    let restWeaves = weave(right, arr2.slice(1));
    restWeaves.forEach(rest => {
      insertions.push([...left, ele, ...rest]);
    });
  }

  return insertions;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let a = new TreeNode(2);
let b = new TreeNode(1);
let c = new TreeNode(3);

a.left = b;
a.right = c;

console.log(BSTSequences(a));
// weave([1, 2], [3, 4]);
