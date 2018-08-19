// How to Memorize
// 1. Solve the brute force
// 2. add an object as a param to the function
//    obj should have param(s) : return val
// 3. everywhere you return a value, add that value to the memo,
//    using the param as the key
// 4. at the very top, if memo contains param(s), return memo value

function fibRecur(n, memo = { 1: 1, 2: 1 }) {
  if (n in memo) return memo[n];
  memo[n] = fibRecur(n - 1, memo) + fibRecur(n - 2, memo);

  return memo[n];
}

function fibIter(n) {
  if (n === 1 || n === 2) return 1;
  let last = 0;
  let secondLast = 1;

  let i = 2;
  while (i < n) {
    var next = last + secondLast;
    secondLast = last;
    last = next;
    i++;
  }

  return next;
}
