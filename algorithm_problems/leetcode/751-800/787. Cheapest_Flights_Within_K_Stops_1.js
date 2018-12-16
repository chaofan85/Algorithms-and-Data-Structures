// https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

// Dynamic Programming
var findCheapestPrice = function(n, flights, src, dst, K) {
  let list = getList(flights);
  let minPrice = Infinity;

  function getMinPrice(flightList, start, end, stops, currPrice = 0, visited = new Set()) {
    if (!flightList[start]) return;
    if (stops === 0) {
      if (flightList[start][end]) {
        minPrice = Math.min(minPrice, currPrice + flightList[start][end]);
      }
      return;
    }

    for (let neighbor in flightList[start]) {
      let price = currPrice + flightList[start][neighbor];
      if (neighbor !== end.toString()) {
        if (!visited.has(neighbor) && price < minPrice) {
          visited.add(neighbor);
          getMinPrice(flightList, neighbor, end, stops - 1, price, visited);
        }
      } else minPrice = Math.min(minPrice, price);
      visited.delete(neighbor);
    }
  }

  getMinPrice(list, src, dst, K);
  return minPrice === Infinity ? -1 : minPrice;
};

function getList(arr) {
  let list = {};
  for (let i = 0; i < arr.length; i++) {
    if (!list[arr[i][0]]) {
      list[arr[i][0]] = {};
    }
    list[arr[i][0]][arr[i][1]] = arr[i][2];
  }
  return list;
}

console.log(
  findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 300]], 0, 2, 0)
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
    ],
    6,
    0,
    7
  )
);
