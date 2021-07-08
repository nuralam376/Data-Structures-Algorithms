const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    if (array[index] < array[0]) {
      array.unshift(array.splice(index, 1)[0]);
    } else {
      for (let index2 = 1; index2 < index; index2++) {
        if (array[index] > array[index2 - 1] && array[index] < array[index2]) {
          array.splice(index2, 0, array.splice(index, 1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
