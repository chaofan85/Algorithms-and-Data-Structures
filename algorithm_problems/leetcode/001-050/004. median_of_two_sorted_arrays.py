import math


class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)

        len1 = len(nums1)
        len2 = len(nums2)

        low = 0
        high = len1

        while low <= high:
            par1 = math.floor((low + high) / 2)
            par2 = math.floor((len1 + len2 + 1) / 2) - par1

            maxLeft1 = -math.inf if par1 == 0 else nums1[par1 - 1]
            minRight1 = math.inf if par1 == len1 else nums1[par1]
            maxLeft2 = -math.inf if par2 == 0 else nums2[par2 - 1]
            minRight2 = math.inf if par2 == len2 else nums2[par2]

            if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
                if (len1 + len2) % 2 == 0:
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2
                else:
                    return max(maxLeft1, maxLeft2)
            elif maxLeft1 > minRight2:
                high = par1 - 1
            else:
                low = par1 + 1

        return "Something wrong with your arrays"

