function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let answer = 2;

  for (let i = 3; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(-4));
