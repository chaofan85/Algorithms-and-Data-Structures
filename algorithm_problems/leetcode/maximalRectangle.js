// https://leetcode.com/problems/maximal-rectangle/description/
var maximalRectangle = function(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== "0") search(matrix, i, j);
    }
  }
  function search(matrix, row, col) {
    let rows = 0;
    let stops = [];
    let i = row;
    let j = col;
    while (i < matrix.length && matrix[i][j] === "1") {
      let counter = 0;
      while (j < matrix[0].length && matrix[i][j] === "1") {
        counter++;
        console.log(row, col, i, j);
        j++;
        if (j === matrix[0].length || matrix[i][j] === "0") {
          console.log(i, j);
          stops.push(counter);
        }
      }
      rows++;
      i++;
      j = col;
    }

    let area = rows * Math.min(...stops);
    console.log(rows, stops);
    // if (area > max) console.log(stops, rows, area);
    max = Math.max(max, area);
    console.log("------");
  }

  return max;
};

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
