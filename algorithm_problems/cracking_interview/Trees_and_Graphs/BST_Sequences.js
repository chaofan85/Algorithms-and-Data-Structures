function BSTSequences(root) {
  let result = [];
}

function getSequence(root) {
  if (!root) return [];
  let left = getSequence(root.left);
  let right = getSequence(root.right);
  if (!left.length && !right.length) return [[root.val]];
  if (!left.length) {
    return right[0].unshift(root.val);
  }
  if (!right.length) {
    return left[0].unshift(root.val);
  }
}
