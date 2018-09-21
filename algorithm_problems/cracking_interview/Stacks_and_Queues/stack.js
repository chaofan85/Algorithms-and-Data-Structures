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
