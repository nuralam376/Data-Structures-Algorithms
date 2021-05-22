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

function containsElements2(arr1, arr2) {
  let map = {};

  let arr1Length = arr1.length;
  let arr2Length = arr2.length;

  if (arr1Length) {
    for (let i = 0; i < arr1Length; i++) {
      if (!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
      }
    }
  }

  if (arr2Length) {
    for (let i = 0; i < arr2Length; i++) {
      if (map[arr2[i]]) {
        return true;
      }
    }
  }
  return false;
}

function containsElements3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const arr1 = ["a", undefined, "x"];
const arr2 = [undefined, null, []];

// console.log(containElements(arr1, arr2));
// console.log(containsElements2(arr1, arr2));
console.log(containsElements3(arr1, arr2));
