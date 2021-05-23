// const string = "Hello World";
// const array = string.split("").reverse().join("");
// console.log(array);

// let reverseString = "";
// for (let i = string.length - 1; i >= 0; i--) {
//   reverseString += string[i];
// }
// console.log(reverseString);

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return str;
  }

  let backwords = [];
  const length = str.length;

  for (let i = length - 1; i >= 0; i--) {
    backwords.push(str[i]);
  }

  return backwords.join("");
}

function reverse2(str) {
  return [...str].reverse("").join("");
}

const str = "Hello World";
console.log(reverse(str));
console.log(reverse2(str));
