class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.pop();
console.log(stack);
console.log(stack.peek());
