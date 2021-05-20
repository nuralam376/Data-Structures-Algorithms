const numbers = [1, 3, 5, 7, 9, 11, 13];

function binary_search(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (numbers[mid] === target) {
      return mid;
    }

    if (numbers[mid] < target) {
      start = mid + 1;
    } else if (numbers[mid] > target) {
      end = mid - 1;
    }
  }

  return -1;
}

const target = 9;
const searchPosition = binary_search(numbers, target);
console.log(searchPosition);
