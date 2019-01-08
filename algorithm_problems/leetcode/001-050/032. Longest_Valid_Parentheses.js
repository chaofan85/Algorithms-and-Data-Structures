/*
Given a string containing just the characters '(' and ')', 
find the length of the longest valid (well-formed) parentheses substring.

Example 1:
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"

Example 2:
Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
*/

var longestValidParentheses = function(s) {
  let n = s.length;
  let longest = 0;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length) {
        if (s[stack[stack.length - 1]] === "(") {
          stack.pop();
        } else {
          stack.push(i);
        }
      } else stack.push(i);
    }
  }

  if (!stack.length) {
    longest = n;
  } else {
    let a = n;
    let b = 0;
    while (stack.length) {
      b = stack.pop();
      longest = Math.max(longest, a - b - 1);
      a = b;
    }
    longest = Math.max(longest, a);
  }
  return longest;
};
