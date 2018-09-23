class minStack {
  constructor() {
    this.items = [];
  }

  push(val) {
    if (this.empty()) {
      this.items.push([val, val]);
    } else {
      let min = Math.min(this.getMin(), val);
      this.items.push([val, min]);
    }
  }

  pop() {
    if (this.empty()) throw "The stack is empty.";
    return this.items.pop()[0];
  }

  peek() {
    if (this.empty()) throw "The stack is empty.";
    return this.items[this.items.length - 1][0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getMin() {
    if (!this.items.length) throw "The stack is empty.";
    return this.items[this.items.length - 1][1];
  }
}
