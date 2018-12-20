// https://leetcode.com/problems/task-scheduler/description/

var leastInterval = function(tasks, n) {
  let moves = 0;
  let map = {};
  for (let i = 0; i < tasks.length; i++) {
    if (!map[tasks[i]]) {
      map[tasks[i]] = 1;
    } else {
      map[tasks[i]]++;
    }
  }

  let unfinished = Object.values(map);
  // let min = Math.min(...unfinished);

  while (unfinished.length) {
    console.log(unfinished);

    let min = Math.min(...unfinished);
    if (unfinished.length > n) {
      moves += unfinished.length * min;
      let newUnfinished = [];
      for (let task in map) {
        map[task] -= min;
        if (map[task] > 0) newUnfinished.push(map[task]);
      }
      unfinished = newUnfinished;
    } else {
      // let length = unfinished.length;
      moves += min * (n + 1);
      for (let task in map) map[task] -= min;
      let newUnfinished = [];
      for (let task in map) {
        map[task] -= min;
        if (map[task] > 0) newUnfinished.push(map[task]);
      }
      if (!newUnfinished.length) {
        moves -= n - 1;
        break;
      }
      unfinished = newUnfinished;
    }
    console.log(unfinished);
  }
  return moves;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 1));
