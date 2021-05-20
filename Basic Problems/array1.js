function containElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

const arr1 = ["a", "b", "x"];
const arr2 = ["w", "c", "y"];

console.log(containElements(arr1, arr2));
