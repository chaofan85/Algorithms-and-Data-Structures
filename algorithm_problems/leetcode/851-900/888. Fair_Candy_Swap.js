// https://leetcode.com/problems/fair-candy-swap/description/

var fairCandySwap = function(A, B) {
  let result = [];
  let candyB = {};
  let sumB = 0;
  for (let i = 0; i < B.length; i++) {
    if (!candyB[B[i]]) candyB[B[i]] = true;

    sumB += B[i];
  }
  const sumA = A.reduce((a, b) => a + b);
  const diff = (sumA - sumB) / 2;

  for (let i = 0; i < A.length; i++) {
    if (candyB[A[i] - diff]) return [A[i], A[i] - diff];
  }

  return result;
};
