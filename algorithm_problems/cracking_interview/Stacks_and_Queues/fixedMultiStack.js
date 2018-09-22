class fixedMultiStack {
  constructor(stackSize) {
    this.numOfStacks = 3;
    this.stackCapacity = stackSize;
    this.values = new Array();
    this.sizes = new Array(this.numOfStacks);
    this.sizes.fill(0);
  }

  // Push value onto stack.
  push(stackNum, value) {
    if (this.isFull(stackNum)) throw "This stack is full.";
    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
  }

  // Pop item from top stack.
  pop(stackNum) {
    if (this.isEmpty(stackNum)) throw "This stack is empty.";

    let topIndex = this.indexOfTop(stackNum);
    let value = this.values[topIndex];
    this.sizes[stackNum]--;
    return value;
  }

  // Return top element
  peek(stackNum) {
    if (this.isEmpty(stackNum)) throw "This stack is empty.";
    return this.values[this.indexOfTop(stackNum)];
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  // Returns index of the top of the stack.
  indexOfTop(stackNum) {
    let offset = stackNum * this.stackCapacity;
    let size = this.sizes[stackNum];
    return offset + size - 1;
  }
}

let stack = new fixedMultiStack(5);
console.log(stack.isFull(2));
stack.push(2, 3);
stack.push(2, 3);
stack.push(2, 3);
stack.push(2, 3);

stack.push(1, 4);
stack.push(1, 4);
stack.push(1, 4);
stack.push(1, 4);

console.log(stack.values);
