class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
var g = new Node(7);

a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;

function kthToLast(head, k) {
  let first = head;

  for (let i = 0; i < k - 1; i++) {
    first = first.next;
    if (!first) return null;
  }

  let second = head;
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  return second.val;
}

console.log(kthToLast(a, 2));
