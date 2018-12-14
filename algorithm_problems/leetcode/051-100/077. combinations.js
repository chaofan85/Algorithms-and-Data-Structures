// https://leetcode.com/problems/combinations/description/

function combine(n, k) {
  if (k === 0) return [[]];
  if (n < k) return [];

  return [
    ...combine(n - 1, k - 1).map(comb => [n, ...comb]),
    ...combine(n - 1, k)
  ];
}

console.log(combine(4, 2));
