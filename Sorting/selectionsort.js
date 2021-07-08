const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    let min = index;
    let temp = array[index];
    for (index2 = index + 1; index2 < arrayLength; index2++) {
      if (array[min] > array[index2]) {
        min = index2;
      }
    }
    array[index] = array[min];
    array[min] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
