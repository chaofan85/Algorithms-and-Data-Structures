// https://leetcode.com/problems/validate-binary-search-tree/description/

var isValidBST = function(root, min = null, max = null) {
  if (!root) return true;
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max))
    return false;
  if (
    !isValidBST(root.left, min, root.val) ||
    !isValidBST(root.right, root.val, max)
  )
    return false;

  return true;
};
