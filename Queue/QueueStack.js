class QueueStack {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
  }
  dequeue(value) {
    const length = this.last.length;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const queue = new QueueStack();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.dequeue();
console.log(queue);
console.log(queue.peek());
