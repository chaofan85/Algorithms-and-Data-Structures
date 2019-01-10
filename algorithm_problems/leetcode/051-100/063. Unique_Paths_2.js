// https://leetcode.com/problems/unique-paths-ii/description/

var uniquePathsWithObstacles = function(obstacleGrid) {
  if (
    obstacleGrid[0][0] === 1 ||
    obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1
  )
    return 0;
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (i === 0) {
        if (j === 0) {
          obstacleGrid[i][j] = 1;
        } else {
          if (obstacleGrid[i][j] === 0) {
            if (obstacleGrid[i][j - 1] === 0) {
              obstacleGrid[i][j] = 0;
            } else {
              obstacleGrid[i][j] = 1;
            }
          } else {
            obstacleGrid[i][j] = 0;
          }
        }
      }
      if (j === 0) {
        if (i > 0) {
          if (obstacleGrid[i][j] === 0) {
            if (obstacleGrid[i - 1][j] === 0) {
              obstacleGrid[i][j] = 0;
            } else {
              obstacleGrid[i][j] = 1;
            }
          } else {
            obstacleGrid[i][j] = 0;
          }
        }
      }
      if (i !== 0 && j !== 0) {
        if (obstacleGrid[i][j] === 1) {
          obstacleGrid[i][j] = 0;
        } else {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        }
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
