var combinationSum = function(candidates, target) {
  if (target === 0) {
    return [[]];
  }

  if (target < 0) {
    return [];
  }

  let allCombs = [];

  candidates.forEach(cand => {
    allCombs.push(
      ...combinationSum(candidates, target - cand).map(comb => [cand, ...comb])
    );
  });

  return allCombs;
};

var combinationSum2 = function(candidates, target) {
  if (target === 0) return [[]];
  if (target < 0 || !candidates.length) return [];

  let allCombs = [];

  let cand = candidates[0];

  for (let num = 0; num <= target / cand; num++) {
    allCombs.push(
      ...combinationSum(candidates.slice(1), target - cand * num).map(
        combination => {
          return [...new Array(num).fill(cand), ...combination];
        }
      )
    );
  }

  return allCombs;
};

function combinationSum3(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);

  let result = [];
  let comb = [];

  getCombs(candidates, target, result, comb, 0);

  return result;
}

function getCombs(candidates, target, result, comb, begin) {
  if (target === 0) {
    result.push(comb.slice(0));
    return;
  }
  for (let i = begin; i < candidates.length && target >= candidates[i]; i++) {
    console.log(target, candidates[i]);
    comb.push(candidates[i]);
    getCombs(candidates, target - candidates[i], result, comb, i);
    comb.pop();
  }
}

console.log(combinationSum3([2, 3, 6, 7], 7));
