const numbers = [4,5,1,3,9];

function insertionSort(array) {
  let arrayLength = array.length;
  
  for(let i = 1; i < arrayLength; i++) {
    let curr = array[i];
    let prev = i - 1;

    while((array[prev] > curr) && prev >= 0) {
      array[prev + 1] = array[prev];
      prev--; 
    }
    array[prev + 1] = curr;
  }
}

insertionSort(numbers);
console.log(numbers);
