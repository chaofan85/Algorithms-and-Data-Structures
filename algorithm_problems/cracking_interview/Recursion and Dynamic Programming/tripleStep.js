/*
 A child is running up a staircase with n steps and can hop either 1 step,
 2 steps, or 3 steps at a time. Implement a method to count how many
 possible ways the child can run up the stairs.
 */

function tripleStep(num, cache = {}) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  if (num === 2) return 2;
  if (num === 3) return 4;

  if (cache[num] !== undefined) return cache[num];
  let prev1 = tripleStep(num - 1, cache);
  cache[num - 1] = prev1;
  let prev2 = tripleStep(num - 2, cache);
  cache[num - 2] = prev2;
  let prev3 = tripleStep(num - 3, cache);
  cache[num - 3] = prev3;

  return prev1 + prev2 + prev3;
}

console.log(tripleStep(2000));
