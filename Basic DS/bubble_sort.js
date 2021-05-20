const numbers = [23, 54, 12, 8, 45, 90, 2];

for (let i = 0; i < numbers.length; i++) {
  for (j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log(numbers);
