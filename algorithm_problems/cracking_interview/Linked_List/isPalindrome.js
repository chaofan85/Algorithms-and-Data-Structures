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
var e = new Node(3);
var f = new Node(2);
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

function isPalindrome(head) {
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }

  console.log(len);

  for (let i = 0; i < Math.ceil(len / 2); i++) {
    let j = 0,
      k = 0;
    let runner1 = head,
      runner2 = head;
    while (j < i) {
      runner1 = runner1.next;
      j++;
    }
    while (k < len - 1 - i) {
      runner2 = runner2.next;
      k++;
    }

    if (runner1.val !== runner2.val) return false;
  }

  return true;
}

function isPalindrome2(head) {
  if (!head || !head.next) return true;
  if (!head.next.next) return head.val === head.next.val;

  let runner1 = head,
    runner2 = head,
    helper1 = head.next,
    helper2 = helper1.next;
  while (runner1.next.next) {
    runner1 = runner1.next.next;
    helper1.next = runner2;
    runner2 = helper1;
    helper1 = helper2;

    helper2 = helper2.next;
    if (!runner1.next) break;
  }

  if (!runner1.next) runner2 = runner2.next;
  runner1 = helper1;

  while (runner1) {
    if (runner1.val !== runner2.val) return false;
    runner1 = runner1.next;
    runner2 = runner2.next;
  }

  return true;
}

console.log(isPalindrome2(a));
