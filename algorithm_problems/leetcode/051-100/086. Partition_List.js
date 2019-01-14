/*
https://leetcode.com/problems/partition-list/description/

Given a linked list and a value x, 
partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
*/

function partition(head, partition) {
  let less = new ListNode(null);
  let pointerForLess = less;
  let greater = new ListNode(null);
  let pointerForGreater = greater;

  let node = head;

  while (node) {
    if (node.val < partition) {
      if (less.val === null) {
        less.val = node.val;
      } else {
        pointerForLess.next = new ListNode(node.val);
        pointerForLess = pointerForLess.next;
      }
      node = node.next;
    } else {
      if (greater.val === null) {
        greater.val = node.val;
      } else {
        pointerForGreater.next = new ListNode(node.val);
        pointerForGreater = pointerForGreater.next;
      }
      node = node.next;
    }
  }

  if (less.val === null && greater.val === null) return null;
  if (less.val === null) return greater;
  if (greater.val === null) return less;

  pointerForLess.next = greater;
  return less;
}
