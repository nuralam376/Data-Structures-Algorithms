function hasPair(numbers, sum) {
  let pairNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    let firstNumber = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      if (
        firstNumber + numbers[j] === sum &&
        !pairNumbers.includes(firstNumber) &&
        !pairNumbers.includes(numbers[j])
      ) {
        pairNumbers.push(firstNumber);
        pairNumbers.push(numbers[j]);
      }
    }
  }
  return pairNumbers;
}

const numbers = [1, 2, 7, 4, 4];
const sum = 8;
console.log(hasPair(numbers, sum));
