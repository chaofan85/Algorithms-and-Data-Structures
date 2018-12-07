// https://leetcode.com/problems/word-ladder/description/

var ladderLength = function(beginWord, endWord, wordList) {
  let wordDict = new Set(wordList);
  if (!wordDict.has(endWord)) return 0;

  let set1 = new Set([beginWord]);
  let set2 = new Set([endWord]);

  let steps = 0;
  while (set1.size && set2.size) {
    steps++;
    if (set1.size > set2.size) [set1, set2] = [set2, set1];
    let wordSet = new Set();
    for (let word of set1) {
      for (let i = 0; i < word.length; i++) {
        for (let j = "a".charCodeAt(0); j <= "z".charCodeAt(0); j++) {
          let newWord =
            word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
          if (set2.has(newWord)) return steps + 1;
          if (!wordDict.has(newWord)) continue;
          wordDict.delete(newWord);
          wordSet.add(newWord);
        }
      }
    }
    [set1, wordSet] = [wordSet, set1];
  }
  return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(
  ladderLength("kiss", "tusk", [
    "miss",
    "dusk",
    "kiss",
    "musk",
    "tusk",
    "diss",
    "disk",
    "sang",
    "ties",
    "muss"
  ])
);