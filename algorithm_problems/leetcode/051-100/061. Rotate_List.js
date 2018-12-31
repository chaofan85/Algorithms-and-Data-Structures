// https://leetcode.com/problems/rotate-list/description/

var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let len = 1;
  let node = head;
  while (node.next) {
    len++;
    node = node.next;
  }

  if (k % len === 0) return head;
  let times = len - (k % len);
  let temp = head;

  for (let i = 0; i < times - 1; i++) {
    temp = temp.next;
  }

  let result = temp.next;
  node.next = head;
  temp.next = null;

  return result;
};
