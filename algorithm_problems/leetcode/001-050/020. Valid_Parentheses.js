// https://leetcode.com/problems/valid-parentheses/description/

var isValid = function(s) {
  let check = [];
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      check.push(pairs[s[i]]);
    }
    if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      if (s[i] === check[check.length - 1]) {
        check.pop();
      } else {
        return false;
      }
    }
  }
  return check.length === 0;
};
