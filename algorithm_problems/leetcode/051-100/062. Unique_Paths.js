// https://leetcode.com/problems/unique-paths/description/

var uniquePaths = function(m, n) {
  let arr = new Array(n);
  arr.fill([]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) arr[i][j] = 1;
      if (i !== 0 && j !== 0) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }

  return arr[n - 1][m - 1];
};
