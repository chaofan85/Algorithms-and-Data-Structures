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

function combinationSum3(candidates, target, currComb = []) {
  let candSet = new Set(candidates);
  let combs = [];

  if (target < 0) {
    currComb = [];
    return;
  }
  if (candSet.has(target)) {
    currComb.push(target);
    combs.push(currComb);
    currComb = [];
  }
  candidates.forEach(cand => {
    currComb.push(cand);
    console.log(currComb);
    combinationSum3(candidates, target - cand, currComb);
  });

  return combs;
}

console.log(combinationSum3([2, 3, 6, 7], 7));
