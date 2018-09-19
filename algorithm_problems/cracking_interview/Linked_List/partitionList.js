class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var a = new Node(0);
var b = new Node(4);
var c = new Node(3);
var d = new Node(2);
var e = new Node(0);
var f = new Node(0);
var g = new Node(4);

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

function partitionList(head, partition) {
  let less = new Node(null);
  let pointerForLess = less;
  let greater = new Node(null);
  let pointerForGreater = greater;

  let node = head;

  while (node) {
    if (node.val < partition) {
      if (less.val === null) {
        less.val = node.val;
      } else {
        pointerForLess.next = new Node(node.val);
        pointerForLess = pointerForLess.next;
      }
      node = node.next;
    } else {
      if (greater.val === null) {
        greater.val = node.val;
      } else {
        pointerForGreater.next = new Node(node.val);
        pointerForGreater = pointerForGreater.next;
      }
      node = node.next;
    }
  }

  if (less.val === null && greater.val === null) return null;
  if (less.val === null) return greater;
  if (greater.val === null) return less;

  pointerForLess.next = greater;

  printList(less);

  return less;
}

function partitionList2(head, partition) {
  let header = head;
  let tail = head;

  while (head) {
    let next = head.next;
    if (head.val < partition) {
      head.next = header;
      header = head;
    } else {
      tail.next = head;
      tail = head;
    }
    head = next;
  }
  tail.next = null;
  printList(header);
  return header;
}

partitionList2(a, 4);
