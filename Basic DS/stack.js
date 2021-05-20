class Stack {
  constructor() {
    this.stack = [];
  }

  add(item) {
    this.stack.push(item);
  }
  remove() {
    if (this.stack.length) {
      return this.stack.pop();
    }
  }

  printStack() {
    console.log(this.stack);
  }
}

const stack = new Stack();
stack.add("Abc");
stack.add("Def");
stack.add("GHI");
stack.printStack();
const removedItem = stack.remove();
console.log(removedItem);
stack.printStack();
