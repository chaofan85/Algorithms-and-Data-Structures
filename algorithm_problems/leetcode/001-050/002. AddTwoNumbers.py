class Solution:
    def addTwoNumbers(self, l1, l2, carry=0):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if not l1 and not l2 and carry == 0:
            return

        result = ListNode(None)
        node = result

        value = carry
        if l1:
            value += l1.val
        if l2:
            value += l2.val

        result.val = value % 10

        if l1 or l2:
            next = self.addTwoNumbers(
                l1.next if l1 else None,
                l2.next if l2 else None,
                1 if value >= 10 else 0,
            )
            node.next = next

        return result
