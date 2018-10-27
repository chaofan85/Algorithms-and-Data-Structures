// https://leetcode.com/problems/surrounded-regions/description/

var solve = function(board) {
  if (!board.length) return;
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] === "O") DFS(board, 0, i);
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === "O") DFS(board, i, 0);
  }
  for (let i = 0; i < board[0].length; i++) {
    if (board[board.length - 1][i] === "O") {
      DFS(board, board.length - 1, i);
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][board[0].length - 1] === "O") {
      DFS(board, i, board[0].length - 1);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "#") board[i][j] = "O";
    }
  }
};

function DFS(matrix, row, col) {
  if (
    row < 0 ||
    row > matrix.length - 1 ||
    col < 0 ||
    col > matrix[0].length - 1
  )
    return;
  if (matrix[row][col] === "X" || matrix[row][col] === "#") return;

  matrix[row][col] = "#";
  DFS(matrix, row + 1, col);
  DFS(matrix, row - 1, col);
  DFS(matrix, row, col + 1);
  DFS(matrix, row, col - 1);
}
