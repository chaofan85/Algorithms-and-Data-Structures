class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(head1, head2, carry = 0) {
  if (!head1 && !head2) return null;
  if (!head1) {
    let result = new Node(head2.val);
    result.next = addTwoNumbers(head1, head2.next);
    return result;
  }
  if (!head1) {
    let result = new Node(head1.val);
    result.next = addTwoNumbers(head1.next, head2);
    return result;
  }
  let sum = head1.val + head2.val + carry;
  let ans;
  if (sum > 9) {
    ans = new Node(sum % 10);
    ans.next = addTwoNumbers(head1.next, head2.next, 1);
  } else {
    ans = new Node(sum % 10);
    ans.next = addTwoNumbers(head1.next, head2.next);
  }

  return ans;
}
