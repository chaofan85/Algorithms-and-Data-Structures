// https://leetcode.com/problems/walking-robot-simulation/description/

var robotSim = function(commands, obstacles) {
  let obs = new Set([]);
  obstacles.forEach(ob => obs.add(`${ob[0]}-${ob[1]}`));
  let direction = "north";
  let coors = [0, 0];
  let max = 0;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] < 0) {
      direction = getDirection(direction, commands[i]);
    } else {
      let newCoors = move(direction, coors, commands[i]);
      let currObst = ifStuck(direction, coors, commands[i], obs);
      if (!currObst.length) {
        coors = newCoors;
      } else {
        coors = currObst;
      }
    }
    let dist = coors[0] * coors[0] + coors[1] * coors[1];
    if (dist > max) max = dist;
  }
  return max;
};

function ifStuck(dir, coors, moves, set) {
  if (dir === "north") {
    for (let i = 1; i <= moves; i++) {
      if (set.has(`${coors[0]}-${coors[1] + i}`))
        return [coors[0], coors[1] + i - 1];
    }
  }
  if (dir === "west") {
    for (let i = 1; i <= moves; i++) {
      if (set.has(`${coors[0] - i}-${coors[1]}`))
        return [coors[0] - i + 1, coors[1]];
    }
  }
  if (dir === "south") {
    for (let i = 1; i <= moves; i++) {
      if (set.has(`${coors[0]}-${coors[1] - i}`))
        return [coors[0], coors[1] - i + 1];
    }
  }
  if (dir === "east") {
    for (let i = 1; i <= moves; i++) {
      if (set.has(`${coors[0] + i}-${coors[1]}`))
        return [coors[0] + i - 1, coors[1]];
    }
  }

  return [];
}

function move(dir, coors, moves) {
  if (dir === "north") {
    return [coors[0], coors[1] + moves];
  }
  if (dir === "west") {
    return [coors[0] - moves, coors[1]];
  }
  if (dir === "south") {
    return [coors[0], coors[1] - moves];
  }
  if (dir === "east") {
    return [coors[0] + moves, coors[1]];
  }
}

function getDirection(curr, val) {
  if (curr === "north") {
    return val === -2 ? "west" : "east";
  }
  if (curr === "west") {
    return val === -2 ? "south" : "north";
  }
  if (curr === "south") {
    return val === -2 ? "east" : "west";
  }
  if (curr === "east") {
    return val === -2 ? "north" : "south";
  }
}
console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));
