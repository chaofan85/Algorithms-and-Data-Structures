// https://leetcode.com/problems/add-two-numbers/description/

var addTwoNumbers = function(l1, l2, carry = 0) {
  if (!l1 && !l2 && carry === 0) return;

  let result = new ListNode(null);
  let node = result;

  let value = carry;
  if (l1) value += l1.val;
  if (l2) value += l2.val;

  result.val = value % 10;

  if (l1 || l2) {
    let next = addTwoNumbers(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      value >= 10 ? 1 : 0
    );
    node.next = next;
  }

  return result;
};
