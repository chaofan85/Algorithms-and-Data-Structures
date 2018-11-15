// https://leetcode.com/problems/max-points-on-a-line/description/

var maxPoints = function(points) {
  let slopes = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let arr = getSlope(
        points[j][0] - points[i][0],
        points[j][1] - points[i][1]
      );
      let slope = `${arr[1]}/${arr[0]}`;
      if (!slopes[slope]) {
        slopes[slope] = new Set();
        slopes[slope].add(stringify(points[i]));
        slopes[slope].add(stringify(points[j]));
      } else {
        slopes[slope].add(stringify(points[i]));
        slopes[slope].add(stringify(points[j]));
      }
    }
  }
  console.log(slopes);
};

function getSlope(num1, num2) {
  let n = Math.min(Math.abs(num1), Math.abs(num2));

  let i = 2;
  while (i <= n) {
    if (num1 % i === 0 && num2 % i === 0) {
      num1 /= i;
      num2 /= i;
      i--;
    }
    i++;
  }

  if (num1 > 0 && num2 > 0) {
    return [num1, num2];
  } else if (num1 < 0 && num2 < 0) {
    return [-num1, -num2];
  } else {
    if (num1 < 0) {
      return [num1, num2];
    } else {
      return [-num1, -num2];
    }
  }
}

function stringify(point) {
  return `${point[0]}-${point[1]}`;
}
console.log(getSlope(2, -2));
console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]));
