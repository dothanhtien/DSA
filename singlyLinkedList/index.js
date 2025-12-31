class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    this.tail = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    return this;
  }

  print() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}
