// var groupAnagrams = function(strs) {
//   let patternMap = {};
//   for (let i = 0; i < strs.length; i++) {
//     const pattern = getPattern(strs[i]);
//     if (!patternMap[pattern]) {
//       patternMap[pattern] = [strs[i]];
//     } else {
//       patternMap[pattern].push(strs[i]);
//     }
//   }
//
//   return Object.values(patternMap);
// };
//
// function getPattern(str) {
//   return str
//     .split("")
//     .sort()
//     .join("");
// }

const primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101
];

const alphaToInteger = x => x.charCodeAt(0) - 97;
const alphaToPrime = x => primes[alphaToInteger(x)];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hashStr = s => {
    let hash = 1;
    for (let i = 0; i < s.length; i++) {
      hash *= alphaToPrime(s[i]);
    }
    return hash;
  };

  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const curr = strs[i];
    const hash = hashStr(curr);
    if (map[hash]) {
      map[hash].push(curr);
    } else {
      map[hash] = [curr];
    }
  }

  return map;
};

console.log(
  groupAnagrams([
    "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzab",
    "zzzzzzzzzzazzzzzzzzzzbzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
  ])
);
