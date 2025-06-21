const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const n = array.length;

  for(let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for(let j = 0; j < n - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j + 1]; // 99
        array[j + 1] = array[j]; // 99
        array[j] = temp; 

        isSwapped = true;
      }
    }

    if(!isSwapped) return;
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);
