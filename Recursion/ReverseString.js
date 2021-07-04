function reverseStringIterative(str) {
  let arrayStr = str.split("");
  let reverseArray = [];

  function addToArray(array) {
    if (array.length > 0) {
      reverseArray.push(array.pop());
      addToArray(array);
    }
    return;
  }

  addToArray(arrayStr);
  return reverseArray.join("");
}

console.log(reverseStringIterative("Hello World"));

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringIterative(str.substr(1) + str.charAt(0));
  }
}

console.log(reverseStringRecursive("Hello World"));
