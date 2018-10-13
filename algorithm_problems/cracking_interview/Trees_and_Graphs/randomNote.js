class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
    this.values = [];
  }

  insert(val, node = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      this.size++;
      this.values.push(val);
      return;
    }

    if (val < node.val) {
      if (node.left) {
        this.insert(val, node.left);
      } else {
        node.left = new TreeNode(val);
        this.size++;
        this.values.push(val);
      }
    } else {
      if (node.right) {
        this.insert(val, node.right);
      } else {
        node.right = new TreeNode(val);
        this.size++;
        this.values.push(val);
      }
    }
  }

  find(val) {
    let node = this.root;
    while (node) {
      if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  // delete(val) {
  //   let node = this.find(val);
  // }

  getSize() {
    return this.size;
  }

  randomNode() {
    let randomNum = Math.floor(Math.random() * this.size);
    return this.find(this.values[randomNum]);
  }

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

console.log(tree.randomNode());
