// https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/

var isCompleteTree = function(root) {
  let queue = [root];

  while (queue.length) {
    if (queue[0] === "null") {
      for (let i = 0; i < queue.length; i++) {
        if (queue[i] !== "null") return false;
      }
    }

    let first = queue.shift();
    if (first !== "null") {
      let left = first.left || "null";
      let right = first.right || "null";
      queue.push(left);
      queue.push(right);
    }
  }
  return true;
};
