// https://leetcode.com/problems/house-robber-iii/description/

function rob(root, parent = null) {
  if (!root && !parent) return 0;
  if (!root) return [0, 0];

  let left = rob(root.left, root);
  let right = rob(root.right, root);

  let childrenSum = left[0] + right[0];
  let grandchildrenSum = left[1] + right[1];


  if (parent) {
    let max = Math.max(root.val + grandchildrenSum, childrenSum);
    return [max, childrenSum];
  } else {
    return Math.max((root.val + grandchildrenSum), childrenSum);
  }
}
