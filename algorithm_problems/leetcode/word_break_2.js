//https://leetcode.com/problems/word-break-ii/description/

var wordBreak = function(s, wordDict) {
  let breaks = [];

  function helper(str, n, result) {
    for (let i = 0; i <= str.length; i++) {
      let prefix = str.substring(0, i);
      if (wordDict.includes(prefix)) {
        if (i === n) {
          result += prefix;
          breaks.push(result);
          return;
        }
        helper(
          str.substring(i),
          str.substring(i).length,
          result + prefix + " "
        );
      }
    }
  }
  helper(s, s.length, "");
  return breaks;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
