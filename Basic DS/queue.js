class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.queue.length) {
      return this.queue.shift();
    }
  }
}

const queueObj = new Queue();
queueObj.enqueue("Abc");
queueObj.enqueue("Def");
queueObj.enqueue("GHI");
console.log(queueObj.queue);
const removedObj = queueObj.dequeue();
console.log(removedObj);
console.log(queueObj.queue);
