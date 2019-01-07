/*
https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
*/

var deleteDuplicates = function(head) {
  if (!head) return null;
  if (!head.next) return head;

  let temp = head;
  while (temp.next) {
    if (temp.val === temp.next.val) {
      if (temp.next.next) {
        temp.next = temp.next.next;
      } else {
        temp.next = null;
      }
    } else {
      if (temp.next) temp = temp.next;
    }
  }
  return head;
};
