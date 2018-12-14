/*
https://leetcode.com/problems/sort-list/description/

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:
Input: 4->2->1->3
Output: 1->2->3->4

Example 2:
Input: -1->5->3->4->0
Output: -1->0->3->4->5
*/

var sortList = function(head) {
  if (!head || !head.next) return head;
  let rightHead = split(head);

  let sortedLeft = sortList(head);
  let sortedRight = sortList(rightHead);

  return merge(sortedLeft, sortedRight);
};

function split(head) {
  if (!head.next.next) {
    let temp = head.next;
    head.next = null;
    return temp;
  }

  let p1 = head;
  let p2 = head;

  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  let temp = p1.next;
  p1.next = null;
  return temp;
}

function merge(left, right) {
  if (!left) return right;
  if (!right) return left;

  if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}
