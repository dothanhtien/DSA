class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  bfs() {
    if (!this.root) return [];

    const data = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  dfsPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    if (this.root) traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    if (this.root) traverse(this.root);
    return data;
  }

  dfsInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    if (this.root) traverse(this.root);
    return data;
  }
}
