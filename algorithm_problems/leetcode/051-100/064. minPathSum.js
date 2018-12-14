// https://leetcode.com/problems/minimum-path-sum/description/

function minPathSum(grid, row = 0, col = 0, memo = {}) {
  let key = `${row}-${col}`;

  if (row >= grid.length || col >= grid[0].length) return Infinity;
  if (row === grid.length - 1 && col === grid[0].length - 1)
    return grid[row][col];

  if (key in memo) {
    return memo[key];
  }

  let result =
    grid[row][col] +
    Math.min(
      minPathSum(grid, row + 1, col, memo),
      minPathSum(grid, row, col + 1, memo)
    );

  memo[key] = result;
  return memo[key];
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
