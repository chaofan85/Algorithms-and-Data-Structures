class MaxHeap {
  constructor() {
    this.array = [null];
  }

  insert(val) {
    this.array.push(val);
    let node = this.array.length - 1;
    let parent = node % 2 === 0 ? node / 2 : (node - 1) / 2;
    while (this.array[node] > this.array[parent] && node !== 1) {
      [this.array[node], this.array[parent]] = [
        this.array[parent],
        this.array[node]
      ];
      node = parent;
      parent = node % 2 === 0 ? node / 2 : (node - 1) / 2;
    }
  }

  delete() {
    [this.array[1], this.array[this.array.length - 1]] = [
      this.array[this.array.length - 1],
      this.array[1]
    ];
    this.array.pop();
    this.siftDown(1);
  }

  siftDown(idx) {
    let ary = this.array;
    let leftIdx = 2 * idx;
    let rightIdx = 2 * idx + 1;
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (ary[idx] > leftVal && ary[idx] > rightVal) return;

    if (leftVal < rightVal) {
      var swapIdx = rightIdx;
    } else {
      swapIdx = leftIdx;
    }

    [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
    this.siftDown(swapIdx);
  }

  print() {
    console.log(this.array);
  }
}

let heap = new MaxHeap();

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(8);

heap.print();

// heap.delete();
//
// heap.print();
