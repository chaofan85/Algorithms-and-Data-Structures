var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  if (!candidates.length) return [[]];
  let result = [];
  let checked = new Set();
  let comb = [];
  function helper(arr,sum = 0) {
    if (sum >= target) {
      if (sum === target) result.push(comb.slice());
      return;
    }
    for (let i = 0; i < arr.length && target >= arr[0]; i++) {
      // if (!checked.has(arr[i])) {
      if (arr[i] !== arr[i-1]) {
        comb.push(arr[i]);
        sum += arr[i];
        helper(arr.slice(i + 1), sum);
        let last = comb.pop();
        sum -= last;
      }
      // }
      // checked.add(arr[i]);
    }
  }
  helper(candidates);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
