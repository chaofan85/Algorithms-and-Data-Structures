// https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

// Brute Force
var findCheapestPrice = function (n, flights, src, dst, K) {
  let dp = new Array(n);
  dp.fill(Infinity);
  dp[src] = 0;

  for (let i = 0; i <= K; i++) {
    let newDp = dp.slice();
    for (let j = 0; j < flights.length; j++) {
      newDp[flights[j][1]] = Math.min(newDp[flights[j][1]], dp[flights[j][0]] + flights[j][2]);
    }
    dp = newDp;
  }
  return dp[dst] === Infinity ? -1 : dp[dst];
};

console.log(
  findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)
);

console.log(
  findCheapestPrice(
    10,
    [
      [3, 4, 4],
      [2, 5, 6],
      [4, 7, 10],
      [9, 6, 5],
      [7, 4, 4],
      [6, 2, 10],
      [6, 8, 6],
      [7, 9, 4],
      [1, 5, 4],
      [1, 0, 4],
      [9, 7, 3],
      [7, 0, 5],
      [6, 5, 8],
      [1, 7, 6],
      [4, 0, 9],
      [5, 9, 1],
      [8, 7, 3],
      [1, 2, 6],
      [4, 1, 5],
      [5, 2, 4],
      [1, 9, 1],
      [7, 8, 10],
      [0, 4, 2],
      [7, 2, 8]
    ], 6, 0, 7
  )
);
