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

function canFinish2(numCourses, prerequisites) {}

console.log(canFinish(2, [[0, 1]]));
