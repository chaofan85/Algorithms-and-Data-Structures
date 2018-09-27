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
      return;
    }

    if (word[0] in current.children) {
      this.insert(word.slice(1), current.children[word[0]]);
    } else {
      let node = new Node();
      current.children[word[0]] = node;
      this.insert(word.slice(1), node);
    }
  }

  has(word, current = this.root) {
    if (word.length === 0) return "" in current.children;
    if (!(word[0] in current.children)) return false;
    return this.has(word.slice(1), current.children[word[0]]);
  }

  startWith(word, current = this.root) {
    if (word.length === 0) return true;
    if (!(word[0] in current.children)) return false;
    return this.startWith(word.slice(1), current.children[word[0]]);
  }
}

function DFS(root) {
  for (let letter in root.children) {
    console.log(letter);
    DFS(root.children[letter]);
  }
  return;
}

let t = new Trie();
t.insert("apple");
console.log(t.has("apple"));
console.log(t.has("app"));
