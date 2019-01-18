# https://leetcode.com/problems/reverse-integer/description/

import math


class Solution:
    def reverse(self, x):
        """
      :type x: int
      :rtype: int
      """
        y = abs(x)
        arr = []

        while y >= 1:
            arr.append(y % 10)
            y = math.floor(y / 10)

        result = 0
        tens = 1
        while arr:
            result += arr.pop() * tens
            tens *= 10

        upper = pow(2, 31) - 1
        lower = 0 - pow(2, 31)

        if result > upper or -result < lower:
            return 0
        return result if x > 0 else -result

