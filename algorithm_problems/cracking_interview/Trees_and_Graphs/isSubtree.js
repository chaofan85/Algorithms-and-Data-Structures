function isSubtree(s, t) {
  let string1 = { str: "" };
  let string2 = { str: "" };
  treeString(s, string1);
  treeString(t, string2);

  return string1.str.includes(string2.str);
}

function treeString(root, string = { str: "" }) {
  if (!root) {
    string.str += "X";
    return;
  }
  string.str += `,${root.val},`;
  treeString(root.left, string);
  treeString(root.right, string);
}

// var isSubtree = function(s, t) {
//   let nodes = getRoot(s, t);
//   if (!nodes.length) return false;

//   for(let i = 0; i < nodes.length; i++) {
//     let q1 = [nodes[i]];
//     let q2 = [t];
//     let sameVals = true;
//     while (q1.length && q2.length) {
//       let n1 = q1.shift();
//       let n2 = q2.shift();
//       if (n1.val !== n2.val) sameVals = false;
//       if (n1.left) q1.push(n1.left);
//       if (n1.right) q1.push(n1.right);
//       if (n2.left) q2.push(n2.left);
//       if (n2.right) q2.push(n2.right);
//     }
//     if (q1.length === q2.length && sameVals) return true;
//   }
//   return false;
// };

// function getRoot(root1, root2) {
//   let nodes = [];
//   let queue = [root1];
//   while (queue.length) {
//     let node = queue.shift();
//     if (node.val === root2.val) nodes.push(node);
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return nodes;
// }
