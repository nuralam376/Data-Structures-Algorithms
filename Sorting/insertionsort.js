const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const arrayLength = array.length;
  for(let i = 0; i < arrayLength - 1; i++) {
    let min = i;
    for(let j = i + 1; j < arrayLength; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }

    if(min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
}

insertionSort(numbers);
console.log(numbers);
