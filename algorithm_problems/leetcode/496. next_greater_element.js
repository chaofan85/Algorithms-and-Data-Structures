// https://leetcode.com/problems/next-greater-element-i/description/

var nextGreaterElement = function(nums1, nums2) {
  let result = [];
  let hashmap = {};
  let stack = [];

  for (let i = 0; i < nums2.length; i++) {
    if (!stack.length || nums2[i] < stack[stack.length - 1]) {
      stack.push(nums2[i]);
    } else {
      while (stack[stack.length - 1] < nums2[i]) {
        hashmap[stack.pop()] = nums2[i];
      }
      stack.push(nums2[i]);
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    result.push(hashmap[nums1[i]] ? hashmap[nums1[i]] : -1);
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 4, 5, 3, 1, 2]));
