// https://leetcode.com/problems/climbing-stairs/description/

var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  let a = 2;
  let b = 3;
  let c = 5;
  i = 4;
  while (i <= n) {
    c = a + b;
    a = b;
    b = c;
    i++;
  }
  return c;
};
