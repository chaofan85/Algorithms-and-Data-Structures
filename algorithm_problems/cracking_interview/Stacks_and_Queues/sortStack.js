class Stack {
  constructor() {
    this.items = [];
  }

  push(ele) {
    this.items.push(ele);
  }

  pop() {
    if (!this.items.length) {
      return "No item to pop";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

function sortStack(stack) {
  let sorted = new Stack();
  sorted.push(stack.pop());

  while (!stack.isEmpty()) {
    if (stack.peek() <= sorted.peek()) {
      sorted.push(stack.pop());
    } else {
      let greater = stack.pop();
      while (sorted.peek() < greater) {
        stack.push(sorted.pop());
      }
      sorted.push(greater);
    }
  }

  return sorted;
}

let stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(2);
stack.push(1);
stack.push(4);
stack.push(8);
stack.push(5);
stack.push(4);

console.log(sortStack(stack));
