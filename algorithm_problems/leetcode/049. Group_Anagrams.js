// https://leetcode.com/problems/group-anagrams/description/

var groupAnagrams = function(strs) {
  let patterns = {};
  let patternMap = {};
  let index = 1;
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    const pattern = getPattern(strs[i]);
    patternMap[strs[i]] = pattern;

    if (!patterns[getPattern(strs[i])]) {
      patterns[pattern] = index;
      index++;
    }
  }

  const len = Object.keys(patterns).length;

  for (let i = 0; i < len; i++) {
    result.push([]);
  }

  for (let i = 0; i < strs.length; i++) {
    result[patterns[patternMap[strs[i]]] - 1].push(strs[i]);
  }

  return result;
};

function getPattern(str) {
  return str
    .split('')
    .sort()
    .join('');
}

console.log(groupAnagrams(['abc', 'cba', 'abd', 'bcd', 'cab', 'bda']));
