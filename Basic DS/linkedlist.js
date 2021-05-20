class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  add(value) {
    const newNode = new Node(value);
    let current = this.head;

    while (current.next != null) {
      current = current.next;
    }

    current.next = newNode;
  }
}

const head = new Node(2000);
const linkedlist = new LinkedList(head);

linkedlist.add(1000);
linkedlist.add(5000);

console.log(JSON.stringify(linkedlist));
