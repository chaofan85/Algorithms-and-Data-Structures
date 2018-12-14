/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
*/

var removeNthFromEnd = function(head, n) {
  let temp1 = head;
  let temp2 = head;

  for (let i = 0; i < n; i++) temp1 = temp1.next;
  if (!temp1) return head.next;

  while (temp1.next) {
    temp2 = temp2.next;
    temp1 = temp1.next;
  }

  temp2.next = temp2.next.next;
  return head;
};
