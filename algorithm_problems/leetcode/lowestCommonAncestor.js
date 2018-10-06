function lowestCommonAncestor(root, p, q) {
  if (!root) return new Set();

  let left = lowestCommonAncestor(root.left, q, p);
  if (left.val !== undefined) return left;
  let right = lowestCommonAncestor(root.right, q, p);
  if (right.val !== undefined) return right;

  let combined = left;
  for (let node of right) {
    combined.add(node);
  }

  if (combined.has(p) && combined.has(q)) return root;
  if (root === p && combined.has(q)) return root;
  if (root === q && combined.has(p)) return root;

  combined.add(root);
  return combined;
}

function lowestCommonAncestor2(root, p, q) {
  if (!root) return null;

  lowestCommonAncestor2(root.left, p, q);
  lowestCommonAncestor2(root.right, p, q);
  if (coverNode(root, q) && coverNode(root, p)) return root;
}

function coverNode(root, node) {
  if (root === node) return true;

  let left = coverNode(root.left, node);
  if (left) return true;
  let right = coverNode(root.right, node);
  if (right) return true;

  return false;
}
