class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, node = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < node.val) {
      if (node.left) {
        this.insert(val, node.left);
      } else {
        node.left = new TreeNode(val);
      }
    } else {
      if (node.right) {
        this.insert(val, node.right);
      } else {
        node.right = new TreeNode(val);
      }
    }
  }

  find(val, node = this.root) {
    if (!node) return;

    let left = this.find(val, node.left);
    if (left) return left;
    let right = this.find(val, node.right);
    if (right) return right;
    if (node.val === val) return node;
  }

  delete(val, node = this.root) {}

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.val);
    this.inOrder(node.right);
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(16);
tree.insert(13);
tree.insert(4);
tree.insert(7);

console.log(tree.find(16));
