/*
Given two words (beginWord and endWord), and a dictionary's word list,
find the length of shortest transformation sequence from beginWord to endWord,
such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not
a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.


Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is
"hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.


Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList,
therefore no possible transformation.
*/

var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  if (!wordList.includes(beginWord)) wordList.push(beginWord);

  let counter = 1;
  let list = {};
  for (let i = 0; i < wordList.length; i++) {
    list[wordList[i]] = new Set();
    for (let j = 0; j < wordList.length; j++) {
      if (oneDiff(wordList[i], wordList[j])) list[wordList[i]].add(wordList[j]);
    }
  }

  function getLength(start, end, visited = new Set()) {
    let queue = [[beginWord, 1]];
    while (queue.length) {
      let word = queue.shift();
      visited.add(word[0]);
      let neighbors = list[word[0]];
      if (neighbors.has(end)) return word[1] + 1;
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) queue.push([neighbor, word[1] + 1]);
      }
    }
    return 0;
  }

  return getLength(beginWord, endWord);
};

function oneDiff(word1, word2) {
  if (word1.length !== word2.length) return false;

  let diff = false;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      if (diff) {
        return false;
      } else {
        diff = true;
      }
    }
  }
  return diff;
}
