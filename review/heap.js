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
    if (this.array.length <= 3) {
      if (this.array[1] < this.array[2]) {
        [this.array[1], this.array[2]] = [this.array[2], this.array[1]];
      }
      return;
    }

    if (
      this.array[idx] < this.array[2 * idx] ||
      this.array[idx] < this.array[2 * idx + 1]
    ) {
      if (this.array[2 * idx] < this.array[2 * idx + 1]) {
        while (
          this.array[idx] < this.array[2 * idx + 1] &&
          2 * idx + 1 <= this.array.length - 1
        ) {
          [this.array[idx], this.array[2 * idx + 1]] = [
            this.array[2 * idx + 1],
            this.array[idx]
          ];
          idx = 2 * idx + 1;
        }
      } else {
        while (
          this.array[idx] < this.array[2 * idx] &&
          2 * idx <= this.array.length - 1
        ) {
          [this.array[idx], this.array[2 * idx]] = [
            this.array[2 * idx],
            this.array[idx]
          ];
          idx *= 2;
        }
      }
    }
  }

  print() {
    console.log(this.array);
  }
}

let heap = new MaxHeap();

heap.insert(50);
heap.insert(75);
heap.insert(100);
heap.insert(60);
heap.insert(45);
heap.insert(62);
heap.insert(1);

heap.print();

heap.delete();

heap.print();
