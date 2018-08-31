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

function inverse(neighbors) {
  let inverseObj = {};

  // Object.keys(neighbors).forEach(node => (inverseObj[node] = new Set()));

  for (let parent in neighbors) {
    for (let child of neighbors[parent]) {
      inverseObj[child].add(parent);
    }
  }
}

function topSort(neighbors) {}

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
