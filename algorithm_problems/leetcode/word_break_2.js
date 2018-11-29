//https://leetcode.com/problems/word-break-ii/description/

var wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) return [];
  let dict = new Set(wordDict);
  let result = [];
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

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
