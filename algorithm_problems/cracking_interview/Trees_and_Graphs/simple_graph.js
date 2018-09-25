class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new Node(0);
let b = new Node(1);
let c = new Node(2);
let d = new Node(3);
let e = new Node(4);
let f = new Node(5);

a.neighbors = [b, e, f];
b.neighbors = [d, e];
c.neighbors = [b];
d.neighbors = [c, e];

const nodes = [a, b, c, d, e, f];
