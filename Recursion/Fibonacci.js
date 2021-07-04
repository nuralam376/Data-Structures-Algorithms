function fibonacciIterative(n) {
  const array = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }

  return array[n];
}

console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(8));
