class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var a = new Node(1);
var b = new Node(1);
var c = new Node(1);
var d = new Node(1);
var e = new Node(5);
var f = new Node(5);
var g = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

function printList(head) {
  let node = head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

function removeDups(head) {
  let vals = new Set();
  vals.add(head.val);

  let node = head;

  while (node.next) {
    if (vals.has(node.next.val)) {
      node.next = node.next.next;
    } else {
      vals.add(node.next.val);
      node = node.next;
    }
  }

  return head;
}

function removeDups2(head) {
  let current = head;
  while (current !== null) {
    let runner = current;
    while (runner.next !== null) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }

  printList(head);

  return head;
}

removeDups2(a);
