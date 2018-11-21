// https://leetcode.com/problems/n-queens/description/

var solveNQueens = function(n) {
  let result = [];

  // Create 2-D array, and fill it with "."
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
    arr[i].fill(".");
  }

  let notDanger = function(board, row, col) {
    // check the same column before current row
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    // check diagonal before current row (from current to upper left)
    for (let i = row, j = col; i > 0 && j > 0; i--, j--) {
      if (board[i - 1][j - 1] === "Q") return false;
    }
    // check diagonal before current row (from current to upper right)
    for (let i = row, j = col; i > 0 && j < n - 1; i--, j++) {
      if (board[i - 1][j + 1] === "Q") return false;
    }
    return true;
  };

  function queen(array, row) {
    let temp = array.slice();
    // if row is greater than the index of last row, push result
    if (row === n) {
      for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i].join("");
      }
      result.push(temp);
    } else {
      for (let i = 0; i < n; i++) {
        if (notDanger(temp, row, i)) {
          for (let j = 0; j < n; j++) {
            array[row][j] = ".";
          }
          temp[row][i] = "Q";
          queen(temp, row + 1);
        }
      }
    }
  }
  queen(arr, 0);
  return result;
};

console.log(solveNQueens(4));
