// Implementing Binary Search Tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    if (val < node.val) {
      if (node.left) {
        this.insert(val, node.left);
      } else {
        node.left = new Node(val);
      }
    } else {
      if (node.right) {
        this.insert(val, node.right);
      } else {
        node.right = new Node(val);
      }
    }
  }

  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.val);
    this.inorder(node.right);
  }

  DFS() {
    let stack = [this.root];
    while (stack.length) {
      let top = stack.pop();
      console.log(top.val);
      if (top.right) {
        stack.push(top.right);
      }
      if (top.left) {
        stack.push(top.left);
      }
    }
  }

  dfsRec(node = this.root) {
    if (!node) return;
    console.log(node.val);
    this.dfsRec(node.left);
    this.dfsRec(node.right);
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(16);
tree.insert(13);
// tree.inorder();
tree.dfsRec();
