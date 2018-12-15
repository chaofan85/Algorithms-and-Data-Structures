// https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

var findCheapestPrice = function(n, flights, src, dst, K) {
  let list = getList(flights);
  let minPrice = Infinity;

  function getMinPrice(flightList, start, end, stops, currPrice = 0) {
    // console.log(flightList[start]["1"]);
    
    if (stops === 0) {
      console.log(flightList[start], start, end);
      
      if (flightList[start][end]) {
        minPrice = Math.min(minPrice, currPrice + flightList[start][end]);
        
      }
      return;
    }

    // if (start === end) {
    //   minPrice = Math.min(minPrice, currPrice + flightList[start][end]);
    // }

    

    for (let neighbor in flightList[start]) {
      console.log(neighbor, end, 'lalal');
      
      if (neighbor !== end.toString()) {
        getMinPrice(flightList, neighbor, end, stops - 1, flightList[start][neighbor]);
      } else {
        minPrice = Math.min(minPrice, currPrice + flightList[start][neighbor]);
      }
    }
  }
  console.log(list);
  
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

// console.log(findCheapestPrice([[0, 1, 100], [1, 2, 100], [0, 2, 500]]));

console.log(
  findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 300]], 0, 2, 0)
);
