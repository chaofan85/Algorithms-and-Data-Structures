// https://leetcode.com/problems/word-break/description/

var wordBreak = function(s, wordDict) {
  let count = new Array(s.length);
  count.fill(0);
  let dict = new Set(wordDict);
  let markers = [];

  for (let i = 0; i < s.length; i++) {
    if (dict.has(s.substring(0, i + 1))) {
      count[i]++;
      markers.push(i);
    }
  }

  for (let i = 0; i < markers.length; i++) {
    let sub = "";
    for (let j = markers[i] + 1; j < s.length; j++) {
      sub += s[j];
      if (dict.has(sub)) {
        if (count[j]) break;
        count[j]++;
        markers.push(j);
      }
    }
  }

  return count[s.length - 1] > 0;
};

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("leetcode", ["leet", "code"]));
