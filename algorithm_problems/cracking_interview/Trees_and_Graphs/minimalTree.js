class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function minimalTree(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return new Node(arr[0]);

  let middle = Math.floor(arr.length / 2);
  let root = new Node(arr[middle]);
  root.left = minimalTree(arr.slice(0, middle - 1));
  root.right = minimalTree(arr.slice(middle + 1));

  return root;
}
