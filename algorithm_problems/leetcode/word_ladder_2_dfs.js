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

  let steps = 0;

  while (set1.size && set2.size && !found) {
    steps++;
    if (set1.size > set2.size) {
      [set1, set2] = [set2, set1];
      backward = !backward;
    }

    dict.delete(beginWord);
    dict.delete(endWord);

    let wordSet = new Set();

    for (let word of set1) {
      // let curr = word;
      for (let i = 0; i < len; i++) {
        for (let j = "a".charCodeAt(0); j <= "z".charCodeAt(0); j++) {
          let newWord =
            word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);

          if (newWord === word) continue;
          let parent = word;
          let child = newWord;
          if (backward) {
            parent = newWord;
            child = word;
          }
          // console.log(newWord, parent, word, dict);

          // if (!children[parent]) {
          //   children[parent] = new Set();
          // }

          if (set2.has(newWord)) {
            found = true;
            steps++;
            children[parent] = children[parent] || new Set();
            children[parent].add(child);
          } else if (dict.has(newWord) && !found) {
            wordSet.add(newWord);
            children[parent] = children[parent] || new Set();
            children[parent].add(child);
          }
          // console.log(newWord, parent, word, wordSet);
        }
      }
    }
    [wordSet, set1] = [set1, wordSet];
  }

  console.log(children, steps);

  if (found) {
    let path = [beginWord];
    getPaths(beginWord, endWord, children, path, result);
  }

  return result;
};

function getPaths(
  beginWord,
  endWord,
  children,
  path,
  result,
  visited = new Set()
) {
  // console.log(beginWord, endWord);

  if (beginWord === endWord) {
    result.push(path.slice());
    return;
  }

  let words = children[beginWord];

  if (!words || !words.size) return;
  // console.log(words, 'lalala');

  // if (words.has(endWord)) {
  //   path.push(endWord);
  // }

  for (let word of words) {
    if (!visited.has(word)) {
      path.push(word);
      visited.add(word);
      getPaths(word, endWord, children, path, result, visited);
      path.pop();
      visited.delete(word);
    }
    // console.log(path);
  }
}

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
// console.log(
//   findLadders("cold", "warm", ["cold", "cord", "card", "ward", "warm"])
// );
