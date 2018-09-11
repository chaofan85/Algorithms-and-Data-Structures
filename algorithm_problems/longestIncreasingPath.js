// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/

var longestIncreasingPath = function(matrix, memo = {}) {
  let longest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // let length = 0;
      // let key = `${i}-${j}`;
      let length = IncreasingPathLength(matrix, i, j, memo);
      if (length > longest) longest = length;
    }
  }
  return longest;
};

function IncreasingPathLength(matrix, row, col, memo, length = 1) {
  console.log(memo);
  let paths = moveForward(matrix, row, col);
  let longestLength = 0;
  if (!paths.length) {
    return length;
  } else {
    paths.forEach(coor => {
      let key = `${coor[0]}-${coor[1]}`;
      let pathLength;
      if (key in memo) {
        longestLength = length + memo[key];
      } else {
        pathLength = IncreasingPathLength(
          matrix,
          coor[0],
          coor[1],
          memo,
          length + 1
        );
        // memo[key] = pathLength;
      }
      if (pathLength > longestLength) longestLength = pathLength;
    });
  }
  let key = `${row}-${col}`;
  if (key[memo] === undefined) {
    memo[key] = longestLength;
  }

  return longestLength;
}

function moveForward(matrix, row, col) {
  let result = [];
  [[row - 1, col], [row, col - 1], [row + 1, col], [row, col + 1]].forEach(
    coor => {
      // console.log(coor);
      if (
        coor[0] >= 0 &&
        coor[0] < matrix.length &&
        coor[1] >= 0 &&
        coor[1] < matrix[0].length
      ) {
        if (matrix[coor[0]][coor[1]] > matrix[row][col]) {
          result.push(coor);
        }
      }
    }
  );
  return result;
}

console.log(longestIncreasingPath([[1, 2, 3], [6, 5, 4], [7, 8, 9]]));
