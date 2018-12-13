/*
https://leetcode.com/problems/longest-palindromic-substring/description/

Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

var longestPalindrome = function(s) {
  let maxLen = 0;
  let start, end;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; i + j < s.length && i - j >= 0; j++) {
      if (s[i + j] === s[i - j]) {
        if (2 * j + 1 > maxLen) {
          maxLen = 2 * j + 1;
          start = i - j;
          end = i + j;
        }
      } else break;
    }

    for (let j = 0; i + j + 1 < s.length && i - j >= 0; j++) {
      if (s[i + j + 1] === s[i - j]) {
        if (2 * j + 2 > maxLen) {
          maxLen = 2 * j + 2;
          start = i - j;
          end = i + j + 1;
        }
      } else break;
    }
  }

  return s.slice(start, end + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
