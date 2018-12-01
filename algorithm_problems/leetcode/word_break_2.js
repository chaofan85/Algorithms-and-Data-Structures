//https://leetcode.com/problems/word-break-ii/description/

var wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) return [];
  let dict = new Set(wordDict);
  let result = [];
  if (!isBreak(s, dict)) return result;
  helper(s, 0, dict, [], result);
  return result;
};

function helper(str, start, dict, path, result) {
  if (start === str.length) {
    result.push(path.slice());
    return;
  }

  for (let i = start; i < str.length; i++) {
    let subStr = str.slice(start, i + 1);
    if (!dict.has(subStr)) continue;

    path.push(subStr);
    helper(str, i + 1, dict, path, result);
    path.pop();
  }
}

function isBreak(s, dict) {
  let arr = new Array(s.length + 1);
  arr.fill(false);
  arr[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] && dict.has(s.substring(j, i))) {
        arr[i] = true;
        break;
      }
    }
  }
  return arr[s.length];
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
