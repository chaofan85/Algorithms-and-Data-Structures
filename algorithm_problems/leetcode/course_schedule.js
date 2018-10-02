var canFinish = function(numCourses, prerequisites) {
  let parents = getPreList(prerequisites);
  let visited = new Set([]);
  let len = Object.keys(parents).length;

  while (visited.size < len) {
    let curr = visited.size;

    for (let node in parents) {
      if (!parents[node].length) {
        visited.add(node);
      } else {
        if (parents[node].every(parent => visited.has(parent.toString()))) {
          visited.add(node);
        }
      }
    }

    if (curr === visited.size) return false;
  }
  return true;
};

function getPreList(prereqs) {
  let preList = {};
  for (let i = 0; i < prereqs.length; i++) {
    if (!preList[prereqs[i][1]]) {
      preList[prereqs[i][1]] = [];
    }
    if (!preList[prereqs[i][0]]) {
      preList[prereqs[i][0]] = [prereqs[i][1]];
    } else {
      preList[prereqs[i][0]].push(prereqs[i][1]);
    }
  }

  return preList;
}

// ================== Another One ==================

function canFinish2(numCourses, prerequisites) {
  if (!prerequisites.length) return true;
  let preList = getPreList2(numCourses, prerequisites);
  let result = 0;
  let processPre = [];

  for (let course in preList) {
    if (preList[course] === 0) processPre.push(course);
  }

  while (processPre.length) {
    let pre = Number(processPre.shift());
    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] === pre) {
        if (--preList[prerequisites[i][0]] === 0) {
          processPre.push(prerequisites[i][0]);
        }
      }
    }
    result++;
  }
  return result === numCourses;
}

function getPreList2(num, prereqs) {
  let preList = {};

  for (let i = 0; i < num; i++) preList[i] = 0;
  for (let i = 0; i < prereqs.length; i++) preList[prereqs[i][0]]++;

  return preList;
}

// ================== Another One ==================
function canFinish3(numCourses, prerequisites) {
  let preList = getPreList3(numCourses, prerequisites);
  let adjacentList = getAdjacentList(prerequisites);
  let counter = 0;
  let queue = [];
  for (let i = 0; i < preList.length; i++) {
    if (preList[i] === 0) queue.push(i);
  }
  while (queue.length) {
    let pre = queue.shift();
    counter++;
    if (adjacentList[pre] !== undefined) {
      for (let i = 0; i < adjacentList[pre].length; i++) {
        preList[adjacentList[pre][i]]--;
        if (preList[adjacentList[pre][i]] === 0) {
          queue.push(adjacentList[pre][i]);
        }
      }
    }
  }

  return counter === numCourses;
}

function getPreList3(num, prereqs) {
  let preList = new Array(num);
  preList.fill(0);
  for (let i = 0; i < prereqs.length; i++) preList[prereqs[i][0]]++;
  return preList;
}

function getAdjacentList(prerequisites) {
  let list = {};
  for (let i = 0; i < prerequisites.length; i++) {
    if (list[prerequisites[i][1]] === undefined) {
      list[prerequisites[i][1]] = [prerequisites[i][0]];
    } else {
      list[prerequisites[i][1]].push(prerequisites[i][0]);
    }
  }

  return list;
}

console.log(canFinish3(3, [[1, 0], [2, 1]]));
