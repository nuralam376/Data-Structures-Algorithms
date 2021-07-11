const strings = ["a", "b", "c", "d"];

console.log(strings[2]); // O(1)

strings.push("e"); // O(1)

console.log(strings);

strings.unshift("x"); // O(n)

console.log(strings);

strings.pop(); // O(1)
strings.pop();

console.log(strings);

strings.shift(); // O(1)

console.log(strings);

strings.splice(2, 0, "x"); // O(n)

console.log(strings);

let a = 5;
let b = 6;

[a, b] = [b, a];

console.log(a, b);
const array = [1, 2, 3, 4, 5];

const [, , d, e, f] = array;
console.log(d, e, f);

const arrayObjects = array.map((num) => {
  return { square: num * num, squrt: Math.sqrt(num) };
});

console.log(arrayObjects);
const sum = array.reduce((sum, num) => sum + num, 0);
console.log(sum);
