function buildOrder(proj, depend) {
  let result = [];
  let resultSet = new Set();
  let dependMap = {};
  proj.forEach(p => {
    depend.forEach(d => {
      if (p === d[1]) {
        if (!dependMap[p]) {
          dependMap[p] = new Set([d[0]]);
        } else {
          dependMap[p].add(d[0]);
        }
      }
    });
  });
  let dependSet = new Set(Object.keys(dependMap));

  proj.forEach(p => {
    if (!dependSet.has(p) && !resultSet.has(p)) {
      result.push(p);
      resultSet.add(p);
    }
  });

  while (result.length !== proj.length) {
    if (!removeDepend(result, dependMap)) return false;
    dependSet = new Set(Object.keys(dependMap));

    for (let key in dependMap) {
      if (!dependMap[key].size && !resultSet.has(key)) {
        result.push(key);
        resultSet.add(key);
      }
    }
  }
  return result;
}

function removeDepend(finished, depends) {
  let numOfOp = 0;
  finished.forEach(proj => {
    for (let dep in depends) {
      if (depends[dep].has(proj)) {
        depends[dep].delete(proj);
        numOfOp++;
      }
    }
  });
  return numOfOp !== 0;
}

// ===================== Another Solution =====================
function buildOrder2(projects, depends) {
  let preList = getPrelist(projects, depends);
  let adjacentList = getAdjacentList(projects, depends);
  let order = [];
  let queue = [];

  for (let project in preList) {
    if (preList[project] === 0) {
      queue.push(project);
    }
  }

  // console.log(preList, adjacentList);

  while (queue.length) {
    let pre = queue.shift();
    order.push(pre);

    for (let i = 0; i < adjacentList[pre].length; i++) {
      if (--preList[adjacentList[pre][i]] === 0) {
        queue.push(adjacentList[pre][i]);
      }
    }
  }

  return order.length === projects.length ? order : "Can't finish";
}

function getPrelist(projects, depends) {
  let list = {};

  for (let i = 0; i < projects.length; i++) {
    list[projects[i]] = 0;
  }
  for (let i = 0; i < depends.length; i++) {
    list[depends[i][1]]++;
  }

  return list;
}

function getAdjacentList(projects, depends) {
  let list = {};

  for (let i = 0; i < projects.length; i++) {
    list[projects[i]] = [];
  }
  for (let i = 0; i < depends.length; i++) {
    list[depends[i][0]].push(depends[i][1]);
  }

  return list;
}

console.log(
  buildOrder(
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
      ["e", "f"],
      ["i", "k"],
      ["i", "a"],
      ["k", "a"],
      ["h", "d"],
      ["k", "h"]
    ]
  )
);

console.log(
  buildOrder2(
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
      ["e", "f"],
      ["i", "k"],
      ["i", "a"],
      ["k", "a"],
      ["h", "d"],
      ["k", "h"]
    ]
  )
);
