class SetsOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
  }

  getLastStack() {
    // if (stacks.length === 0) return null;
  }
}

class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  push(val) {
    if (this.size >= this.capacity) return false;
    this.size++;
  }
}
