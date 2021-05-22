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
