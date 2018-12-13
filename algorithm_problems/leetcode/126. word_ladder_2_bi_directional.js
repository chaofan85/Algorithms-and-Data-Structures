// https://leetcode.com/problems/word-ladder-ii/description/

var findLadders = function(beginWord, endWord, wordList) {
  let result = [];
  let dict = new Set(wordList);
  if (!dict.has(endWord)) return result;

  let len = beginWord.length;
  let set1 = new Set([beginWord]);
  let set2 = new Set([endWord]);
  let children = {};
  let found = false;
  let backward = false;

  while (set1.size && set2.size && !found) {
    if (set1.size > set2.size) {
      [set1, set2] = [set2, set1];
      backward = !backward;
    }

    for (let word of set1) dict.delete(word);
    for (let word of set2) dict.delete(word);

    let wordSet = new Set();
    for (let word of set1) {
      for (let i = 0; i < len; i++) {
        for (let j = "a".charCodeAt(0); j <= "z".charCodeAt(0); j++) {
          let newWord =
            word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
          let parent = word;
          let child = newWord;

          if (backward) {
            parent = newWord;
            child = word;
          }

          if (set2.has(newWord)) {
            found = true;
            children[parent] = children[parent] || new Set();
            children[parent].add(child);
          } else if (dict.has(newWord) && !found) {
            wordSet.add(newWord);
            children[parent] = children[parent] || new Set();
            children[parent].add(child);
          }
        }
      }
    }
    [wordSet, set1] = [set1, wordSet];
  }

  if (found) {
    let path = [beginWord];
    getPaths(beginWord, endWord, children, path, result);
  }
  return result;
};

function getPaths(beginWord, endWord, children, path, result) {
  if (beginWord === endWord) {
    result.push(path.slice());
    return;
  }

  let words = children[beginWord];
  if (!words || !words.size) return;

  for (let word of words) {
    path.push(word);
    getPaths(word, endWord, children, path, result);
    path.pop();
  }
}

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(
  findLadders("cold", "warm", ["cold", "cord", "card", "ward", "warm"])
);
