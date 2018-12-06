// https://leetcode.com/problems/word-ladder-ii/description/

var findLadders = function (beginWord, endWord, wordList) {
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

    let min = getLength(beginWord, endWord);
    // console.log(list)
    let result = [];

    function getSeqs(start, end, visited = new Set(), seq = []) {
        if (seq.includes(end)) {
            result.push(seq.slice(0));
            return;
        } 
        if (seq.length >= min) return;

        


    }
    getSeqs(beginWord, endWord);
    console.log(result);
    return null;
}

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

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
log