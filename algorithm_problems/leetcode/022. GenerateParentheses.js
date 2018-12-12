// https://leetcode.com/problems/generate-parentheses/description/

var generateParenthesis = function(n) {
  if (n === 1) return ["()"];
  if (n === 0) return [""];

  let prevComb = generateParenthesis(n - 1);
  let combinations = [];
  prevComb.forEach(comb => {
    for (let i = 0; i < comb.length; i++) {
      combinations.push(comb.slice(0, i) + "()" + comb.slice(i));
    }
  });

  return Array.from(new Set(combinations));
};

console.log(generateParenthesis(3));