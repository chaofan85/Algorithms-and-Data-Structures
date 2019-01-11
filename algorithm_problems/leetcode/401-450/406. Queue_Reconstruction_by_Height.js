/*
https://leetcode.com/problems/queue-reconstruction-by-height/description/

Suppose you have a random list of people standing in a queue. 
Each person is described by a pair of integers (h, k), 
where h is the height of the person 
and k is the number of people in front of this person who have a height greater than or equal to h. 
Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

Example
Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

var reconstructQueue = function(people) {
  let result = [];
  people = people.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
    // return a[0] < b[0] ?  1 : -1;
  });
  // console.log(people);

  result.push(people[0]);
  for (let i = 1; i < people.length; i++) {
    let j = 0;
    let counter = 0;
    while (counter < people[i][1]) {
      // console.log(i, people[i], counter);
      // console.log(result)
      if (people[i][0] <= result[j][0]) counter++;
      if (j === result.length - 1) break;
      j++;
    }
    while (result[j][1] === people[i][1] && result[j][0] < people[i][0]) {
      j++;
      if (j > result.length - 1) break;
      console.log(i, j);
    }

    console.log(result, j, people[i], "lalalal");
    result = result
      .slice(0, j)
      .concat([people[i]])
      .concat(result.slice(j));
  }
  return result;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
