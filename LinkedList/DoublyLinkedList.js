class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    const nodes = [];

    while (currentNode !== null) {
      const current = currentNode.value;
      const next = currentNode.next ? currentNode.next.value : null;
      const prev = currentNode.prev ? currentNode.prev.value : null;
      nodes.push([prev, current, next]);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      // 1 2 5 10 15
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const leader = this.traverseList(index - 1);
    leader.next.prev = newNode;
    newNode.next = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    this.length++;
    return this;
  }

  traverseList(index) {
    let counter = 0;
    let currentNode = this.head;

    while (index !== counter) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      return;
    }

    const leader = this.traverseList(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = unwantedNode.next;
    follower.prev = leader;
    this.length--;
    return this;
  }
}

const list = new DoublyLinkedList(5);
list.append(10);
list.append(15);
list.prepend(2);
list.prepend(1);
list.insert(2, 3);
list.remove(3);
console.log(list.printList());
