// https://leetcode.com/problems/flip-string-to-monotone-increasing/description/

var minFlipsMonoIncr = function(S) {
  if (S.length <= 1) return 0;
  let countOne = 0;
  let countZero = 0;

  for (let i = 0; i < S.length; i++) {
    countOne = Math.min(countOne, countZero) + (S[i] === "1" ? 0 : 1);
    countZero += S[i] === "0" ? 0 : 1;
  }

  return Math.min(countOne, countZero);
};
