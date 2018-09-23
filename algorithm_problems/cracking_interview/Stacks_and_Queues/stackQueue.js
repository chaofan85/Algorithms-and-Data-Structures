//Implement Queue using Stacks

class Stack {
  constructor() {
    this.items = [];
  }

  push(ele) {
    this.items.push(ele);
  }

  pop() {
    if (!this.item.length) {
      return "No item to pop";
    }
    this.items.pop();
  }

  peek() {
    return this.item[this.item.length - 1];
  }

  isEmpty() {
    return this.item.length === 0;
  }
}

class myQueue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }

  push(val) {
    this.in.push(val);
  }

  pop() {
    this.peek();
    return this.out.pop();
  }

  peek() {
    if (this.out.isEmpty()) {
      while (!this.in.isEmpty()) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.peek();
  }

  empty() {
    return this.in.isEmpty() && this.out.isEmpty();
  }
}
