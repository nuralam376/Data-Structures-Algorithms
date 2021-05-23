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
