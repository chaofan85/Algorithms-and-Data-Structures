// https://leetcode.com/problems/the-skyline-problem/description/

var getSkyline = function(buildings) {
  let points = [];
  for (let i = 0; i < buildings.length; i++) {
    points.push([buildings[i][0], buildings[i][2], "start"]);
    points.push([building[i][1], building[i][2], "end"]);
  }
};
