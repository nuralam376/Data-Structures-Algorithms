// 1 ---> 10 ---> 5 ----> 16

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    return this;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
console.log(linkedList);
