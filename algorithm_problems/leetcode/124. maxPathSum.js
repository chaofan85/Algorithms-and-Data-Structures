// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var maxPathSum = function(root) {
  let max = root.val;
  _maxPath(root);
  return max;

  function _maxPath(rootNode) {
    if (!rootNode) return 0;
    let lsum = _maxPath(rootNode.left);
    let rsum = _maxPath(rootNode.right);
    let leftSum = Math.max(0, lsum);
    let rightSum = Math.max(0, rsum);
    let thisMax = rootNode.val + leftSum + rightSum;
    max = Math.max(max, thisMax);
    return rootNode.val + Math.max(leftSum, rightSum);
  }
};
