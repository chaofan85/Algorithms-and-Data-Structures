let neighbors = {
  a: new Set(['b', 'c']),
  b: new Set(['g']),
  z: new Set([]),
  c: new Set(['b', 'd']),
  d: new Set(),
  e: new Set(['f']),
  f: new Set(),
  g: new Set()
};

function df(neighbors) {
  let visited = new Set();
  for (let node in neighbors) {
    _df(neighbors, node, visited);
  }
}

function _df(neighbors, curr, visited = new Set()) {
  if (visited.has(curr)) return;
  console.log(curr);
  visited.add(curr);

  // doing depth first order
  for (let node of neighbors[curr]) {
    _df(neighbors, node, visited);
  }
}

df(neighbors);

// Objects, Arrays, etc.. are passed by Reference
// meaning when you pass it as an arg, you are giving the exact object in memory
// Primitive types: nums, string, bools.. are pass by Value
// meaning when you pass it as an arg, you are giving a copy of the value
