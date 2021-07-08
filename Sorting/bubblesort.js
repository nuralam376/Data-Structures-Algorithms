const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    for (index2 = index + 1; index2 <= arrayLength; index2++) {
      if (array[index] > array[index2]) {
        let temp = array[index2]; // 44
        array[index2] = array[index]; // 99
        array[index] = temp; // 44
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));
console.log(numbers);
