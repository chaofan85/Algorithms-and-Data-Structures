// https://leetcode.com/problems/max-points-on-a-line/description/

var maxPoints = function(points) {
  if (points.length <= 2) return points.length;
  let max = 0;
  let slopes = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let x = points[j][0] - points[i][0];
      let y = points[j][1] - points[i][1];
      let slope = getSlope(x, y);
      let slopeStr = stringify(slope);
      let axisDist = onAxis(points[i], slope);
      let key = `${axisDist[0]}-${axisDist[1]}-${slopeStr}`;
      if (!slopes[key]) {
        slopes[key] = new Set();
        slopes[key].add(points[i]);
        slopes[key].add(points[j]);
      } else {
        slopes[key].add(points[i]);
        slopes[key].add(points[j]);
      }
    }
  }
  for (let key in slopes) {
    if (slopes[key].size > max) max = slopes[key].size;
  }
  return max;
};

function getSlope(num1, num2) {
  if (num1 !== 0 && num2 !== 0) {
    let n1 = Math.abs(num1);
    let n2 = Math.abs(num2);
    let divisor = gcd(n1, n2);
    num1 /= divisor;
    num2 /= divisor;
  }

  if (num1 > 0 && num2 > 0) {
    return [num1, num2];
  }
  if (num1 <= 0 && num2 <= 0) {
    return [-num1, -num2];
  }
  if (num1 < 0) {
    return [-num1, -num2];
  } else {
    return [num1, num2];
  }
}

function onAxis(pos, slope) {
  let y;
  if (pos[0] === 0) {
    return pos;
  } else if (slope[0] === 0) {
    return [pos[0], 0];
  } else if (slope[1] === 0) {
    return [0, pos[1]];
  } else {
    y = pos[1] - ((slope[1] * pos[0]) / slope[0]).toFixed(5);
    return [0, y];
  }
}

function stringify(slope) {
  if (slope[1] === 0) {
    return "0";
  } else if (slope[0] === 0) {
    return "infinity";
  } else {
    return `${slope[1]} / ${slope[0]}`;
  }
}

function gcd(num1, num2) {
  let remainder = num1 % num2;
  while (remainder > 0) {
    num1 = num2;
    num2 = remainder;
    remainder = num1 % num2;
  }
  return num2;
}
// console.log(getSlope(2, -2));

console.log(
  maxPoints([
    [40, -23],
    [9, 138],
    [429, 115],
    [50, -17],
    [-3, 80],
    [-10, 33],
    [5, -21],
    [-3, 80],
    [-6, -65],
    [-18, 26],
    [-6, -65],
    [5, 72],
    [0, 77],
    [-9, 86],
    [10, -2],
    [-8, 85],
    [21, 130],
    [18, -6],
    [-18, 26],
    [-1, -15],
    [10, -2],
    [8, 69],
    [-4, 63],
    [0, 3],
    [-4, 40],
    [-7, 84],
    [-8, 7],
    [30, 154],
    [16, -5],
    [6, 90],
    [18, -6],
    [5, 77],
    [-4, 77],
    [7, -13],
    [-1, -45],
    [16, -5],
    [-9, 86],
    [-16, 11],
    [-7, 84],
    [1, 76],
    [3, 77],
    [10, 67],
    [1, -37],
    [-10, -81],
    [4, -11],
    [-20, 13],
    [-10, 77],
    [6, -17],
    [-27, 2],
    [-10, -81],
    [10, -1],
    [-9, 1],
    [-8, 43],
    [2, 2],
    [2, -21],
    [3, 82],
    [8, -1],
    [10, -1],
    [-9, 1],
    [-12, 42],
    [16, -5],
    [-5, -61],
    [20, -7],
    [9, -35],
    [10, 6],
    [12, 106],
    [5, -21],
    [-5, 82],
    [6, 71],
    [-15, 34],
    [-10, 87],
    [-14, -12],
    [12, 106],
    [-5, 82],
    [-46, -45],
    [-4, 63],
    [16, -5],
    [4, 1],
    [-3, -53],
    [0, -17],
    [9, 98],
    [-18, 26],
    [-9, 86],
    [2, 77],
    [-2, -49],
    [1, 76],
    [-3, -38],
    [-8, 7],
    [-17, -37],
    [5, 72],
    [10, -37],
    [-4, -57],
    [-3, -53],
    [3, 74],
    [-3, -11],
    [-8, 7],
    [1, 88],
    [-12, 42],
    [1, -37],
    [2, 77],
    [-6, 77],
    [5, 72],
    [-4, -57],
    [-18, -33],
    [-12, 42],
    [-9, 86],
    [2, 77],
    [-8, 77],
    [-3, 77],
    [9, -42],
    [16, 41],
    [-29, -37],
    [0, -41],
    [-21, 18],
    [-27, -34],
    [0, 77],
    [3, 74],
    [-7, -69],
    [-21, 18],
    [27, 146],
    [-20, 13],
    [21, 130],
    [-6, -65],
    [14, -4],
    [0, 3],
    [9, -5],
    [6, -29],
    [-2, 73],
    [-1, -15],
    [1, 76],
    [-4, 77],
    [6, -29]
  ])
);
