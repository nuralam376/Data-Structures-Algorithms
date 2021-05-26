const person = {
  name: "Abc",
  age: 23,
  getInformation: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};

for (let key in person) {
  console.log(person[key]);
}

const obj1 = { a: 21 };
let obj2 = obj1;
console.log(obj1);
delete obj1;
obj2 = "Hello";
console.log(obj2);
