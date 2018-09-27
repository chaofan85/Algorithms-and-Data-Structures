class Node {
  constructor() {
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, current = this.root) {
    if (!word.length) {
      current.children[""] = new Node();
    }

    if (word[0] in current.children) {
      this.insert(word.slice(1), current.children[word[0]]);
    } else {
      let node = new Node();
      current.children[word[0]] = node;
      this.insert(word.slice(1), node);
    }
  }
}
