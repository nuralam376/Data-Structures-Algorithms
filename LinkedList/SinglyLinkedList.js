// 1 ---> 10 ---> 99 ---> 5 ----> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let leader = this.traverseList(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      return;
    }
    let leader = this.traverseList(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  traverseList(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return;
    }
    let first = this.head; // 1 -> 5 -> 10 -> 16
    let second = this.head.next; // 5 -> 10 -> 16
    this.tail = this.head; // 1->5->10->16

    while (second) {
      const temp = second.next; // 10->16
      second.next = first; // 5->1->5->10->16
      first = second; // 1->5->10->16
      console.log(first);
      second = temp; // 5
    } // 10 -> 5 - 16 - 1
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insert(2, 99);
linkedList.insert(200, 9);
linkedList.remove(2);
linkedList.remove(4);
console.log(linkedList.printList());
console.log(linkedList.reverse());
