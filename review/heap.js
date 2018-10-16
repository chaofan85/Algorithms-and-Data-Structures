// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

class MaxHeap {
  constructor() {
    this.array = [null];
  }

  insert(val) {
    this.array.push(val);
    let node = this.array.length - 1;
    let parent = node % 2 === 0 ? node / 2 : (node - 1) / 2;
    while (this.array[node] > this.arreay[parent] && node !== 1) {
      [this.array[node], this.array[parent]] = [
        this.array[parent],
        this.array[node]
      ];
      node = parent;
      parent = node % 2 === 0 ? node / 2 : (node - 1) / 2;
    }
  }
}
