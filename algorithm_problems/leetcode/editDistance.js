// https://leetcode.com/problems/edit-distance/description/

var minDistance = function(word1, word2) {
  let matrix = new Array(word2.length + 1);
  for (let i = 0; i <= word2.length; i++) {
    matrix[i] = new Array(word1.length + 1);
    matrix[i].fill(0);
  }

  matrix[0][0] = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= word1.length; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        matrix[i][j] = matrix[i][j - 1] + 1;
      } else if (j === 0) {
        matrix[i][j] = matrix[i - 1][j] + 1;
      } else {
        let up = matrix[i - 1][j] + 1;
        let left = matrix[i][j - 1] + 1;
        let diagonal =
          word1[j - 1] === word2[i - 1]
            ? matrix[i - 1][j - 1]
            : matrix[i - 1][j - 1] + 1;
        matrix[i][j] = Math.min(up, left, diagonal);
      }
    }
  }

  return matrix[word2.length][word1.length];
};
