/*
 A child is running up a staircase with n steps and can hop either 1 step,
 2 steps, or 3 steps at a time. Implement a method to count how many
 possible ways the child can run up the stairs.
 */

function tripleStep(num, cache = {}) {
  if (num < 0) return 0;
  if (num === 0) return 1;

  if (cache[num] !== undefined) return cache[num];
  let prev1 = tripleStep(num - 1, cache);
  let prev2 = tripleStep(num - 2, cache);
  let prev3 = tripleStep(num - 3, cache);
  cache[num] = prev1 + prev2 + prev3;

  return cache[num];
}

console.log(tripleStep(2));
