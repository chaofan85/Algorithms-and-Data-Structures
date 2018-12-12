// https://leetcode.com/problems/delete-node-in-a-bst/description/

var deleteNode = function(root, key) {
  if (!root) return null;
  if (root.val === key) return removeRoot(root);

  let parent = findParent(root, key);
  if (!parent) return root;

  deleteHelper(parent, key);
  return root;
};

function findParent(root, key) {
  let node = root;
  while (node.left || node.right) {
    if (node.left && node.left.val === key) return node;
    if (node.right && node.right.val === key) return node;
    if (node.val > key) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return null;
}

function deleteHelper(parent, key) {
  if (parent.left && parent.left.val === key) {
    if (!parent.left.left && !parent.left.right) {
      parent.left = null;
    } else if (!parent.left.left || !parent.left.right) {
      parent.left = parent.left.left || parent.left.right;
    } else if (parent.left.left && parent.left.right) {
      if (!parent.left.right.left) {
        parent.left.right.left = parent.left.left;
        parent.left = parent.left.right;
      } else {
        let node = parent.left.left;
        while (node.right) {
          node = node.right;
        }
        node.right = parent.left.right.left;
        parent.left.right.left = parent.left.left;
        parent.left = parent.left.right;
      }
    }
  }

  if (parent.right && parent.right.val === key) {
    if (!parent.right.left && !parent.right.right) {
      parent.right = null;
    } else if (!parent.right.left || !parent.right.right) {
      parent.right = parent.right.left || parent.right.right;
    } else if (parent.right.left && parent.right.right) {
      if (!parent.right.right.left) {
        parent.right.right.left = parent.right.left;
        parent.right = parent.right.right;
      } else {
        let node = parent.right.left;
        while (node.right) {
          node = node.right;
        }
        node.right = parent.right.right.left;
        parent.right.right.left = parent.right.left;
        parent.right = parent.right.right;
      }
    }
  }
}

function removeRoot(root) {
  let node;

  if (!root.left) {
    node = root.right;
    root.right = null;
    return node;
  }

  if (!root.right) {
    node = root.left;
    root.left = null;
    return node;
  }

  node = root.left;
  while (node.right) node = node.right;
  node.right = root.right;
  node = root.left;
  root.left = null;
  root.right = null;
  return node;
}
