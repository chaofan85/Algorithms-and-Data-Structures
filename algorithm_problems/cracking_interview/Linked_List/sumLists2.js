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
function sumLists(l1, l2) {
  let stack1 = [];
  let stack2 = [];

  let node1 = l1;
  let node2 = l2;

  while (node1) {
    stack1.push(node1.val);
    node1 = node1.next;
  }

  while (node2) {
    stack2.push(node2.val);
    node2 = node2.next;
  }
  let result = new Node(null);
  let carry = 0;

  while (stack1.length || stack2.length) {
    let value = 0;

    if (stack1.length !== 0) value += stack1[stack1.length - 1];
    if (stack2.length !== 0) value += stack2[stack2.length - 1];

    value += carry;
    carry = value >= 10 ? 1 : 0;

    if (result.val === null) {
      result.val = value % 10;
    } else {
      let prevNum = new Node(value % 10);
      prevNum.next = result;
      result = prevNum;
    }

    stack1.pop();
    stack2.pop();
  }

  if (carry) {
    let prevNum = new Node(1);
    prevNum.next = result;
    result = prevNum;
  }

  printList(result);
  return result;
}

sumLists(a, d);
