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
var h = new Node(8);
var i = new Node(9);
var j = new Node(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

h.next = i;
i.next = j;
j.next = d;

function printList(head) {
  let node = head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

function intersection(head1, head2) {
  let node1 = head1;

  while (node1) {
    let node2 = head2;
    while (node2) {
      console.log(node2);
      if (node1 === node2) return true;
      node2 = node2.next;
    }
    node1 = node1.next;
  }

  return false;
}

function intersection2(head1, head2) {
  let len1 = listLength(head1);
  let len2 = listLength(head2);

  let diff = Math.abs(len1 - len2);

  let short = len1 < len2 ? head1 : head2;
  let long = short === head1 ? head2 : head1;

  for (let idx = 0; idx < diff; idx++) {
    long = long.next;
  }

  while (long) {
    if (long === short) return true;
    long = long.next;
    short = short.next;
  }

  return false;
}

function listLength(head) {
  let len = 0;
  let node = head;

  while (node) {
    len++;
    node = node.next;
  }
  return len;
}

console.log(intersection2(a, h));
