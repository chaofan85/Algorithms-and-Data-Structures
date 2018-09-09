// https://leetcode.com/problems/minimum-path-sum/description/

function minPathSum(grid, row = 0, col = 0) {
  if (row === grid.length || col === grid[0].length) return;

  console.log(row, col);

  minPathSum(grid, row, col + 1);
  minPathSum(grid, row + 1, col);
}
