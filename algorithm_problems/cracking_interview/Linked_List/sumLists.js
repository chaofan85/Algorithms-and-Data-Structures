class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var a = new Node(7);
var b = new Node(1);
var c = new Node(6);
var d = new Node(5);
var e = new Node(9);
var f = new Node(2);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

function printList(head) {
  let node = head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

function sumLists(l1, l2, carry = 0) {
  if (!l1 && !l2 && carry === 0) return;

  let result = new Node(null);
  let node = result;

  let value = carry;
  if (l1) value += l1.val;
  if (l2) value += l2.val;

  result.val = value % 10;

  if (l1 || l2) {
    let next = sumLists(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      value >= 10 ? 1 : 0
    );
    node.next = next;
  }

  return result;
}

console.log(sumLists(a, d));
