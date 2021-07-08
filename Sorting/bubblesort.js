const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    for (index2 = 0; index2 < arrayLength; index2++) {
      if (array[index2] > array[index2 + 1]) {
        let temp = array[index2]; // 99
        array[index2] = array[index2 + 1]; // 99
        array[index2 + 1] = temp; // 44
      }
    }
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);
