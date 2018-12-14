// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function(x) {
  if (x < 0) return false;
  let arr = [];
  while (x >= 1) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }
  while (arr.length > 1) {
    if (arr.pop() !== arr.shift()) return false;
  }
  return true;
};


