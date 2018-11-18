/*
Given n pairs of parentheses, write a function to generate all
combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = function(n) {
  if (n === 0) return [];

  function helper(curr, openNum, closeNum) {
    if (openNum === 0) {
      return [curr + ")".repeat(closeNum)];
    } else if (closeNum === 0) {
      return helper(curr + "(", openNum - 1, closeNum + 1);
    } else {
      return helper(curr + "(", openNum - 1, closeNum + 1).concat(
        helper(curr + ")", openNum, closeNum - 1)
      );
    }
  }

  return helper("", n, 0);
};
