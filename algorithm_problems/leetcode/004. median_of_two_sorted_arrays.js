/*
https://leetcode.com/problems/median-of-two-sorted-arrays/description/

There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity
should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  let len1 = nums1.length;
  let len2 = nums2.length;

  let low = 0;
  let high = len1;

  while (low <= high) {
    let par1 = Math.floor((low + high) / 2);
    let par2 = Math.floor((len1 + len2 + 1) / 2) - par1;

    let maxLeft1 = par1 === 0 ? -Infinity : nums1[par1 - 1];
    let minRight1 = par1 === len1 ? Infinity : nums1[par1];

    let maxLeft2 = par2 === 0 ? -Infinity : nums2[par2 - 1];
    let minRight2 = par2 === len2 ? Infinity : nums2[par2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      high = par1 - 1;
    } else if (maxLeft2 > minRight1) {
      low = par1 + 1;
    }
  }
  return "Something wrong with your arrays";
};

console.log(findMedianSortedArrays([2], [1, 3]));
