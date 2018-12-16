// https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

// Priority Queue Solution

var findCheapestPrice = function(n, flights, src, dst, K) {
  let prices = {};
  for (let i = 0; i < flights.length; i++) {
    let flight = flights[i];
    if (!prices[flight[0]]) prices[flight[0]] = {};
    prices[flight[0]][flight[1]] = flight[2];
  }
  // should use heap or priority queue
  let queue = [];
  queue.push([0, src, K + 1]);
  while (queue.length) {
    queue = queue.sort((a, b) => a[0] - b[0]);
    let top = queue.shift();
    let price = top[0],
      city = top[1],
      stops = top[2];
    if (city === dst.toString()) return price;
    if (stops > 0) {
      let adjacent = prices[city] || {};
      for (let key in adjacent) {
        queue.push([price + adjacent[key], key, stops - 1]);
      }
    }
  }
  return -1;
};

console.log(
  findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)
);
