// https://leetcode.com/problems/same-tree/description/

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  if (p.val !== q.val) return false;
  if (isSameTree(p.left, q.left) === false) return false;
  if (isSameTree(p.right, q.right) === false) return false;
  return true;
};