const numbers = [4,5,1,3,9];

function selectionSort(array) {
  const arrayLength = array.length;

 for(let i = 0; i < arrayLength; i++) {
  let min = i;

  for(let j = i + 1; j < arrayLength - 1; j++) {
    if(array[j] < array[min]) {
      min = j;
    }
  }
  let temp = array[i];
  array[i] = array[min];
  array[min] = temp;
 }
}

selectionSort(numbers);
console.log(numbers);
