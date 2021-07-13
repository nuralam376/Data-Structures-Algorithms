let calculation = 0;
function fibonacci(n) {
  calculation++;
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(20));
console.log("Calculation", calculation);

calculation = 0;

function memorizedFibonacci() {
  let cache = {};

  return function fib(n) {
    calculation++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return 1;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const memFibonacci = memorizedFibonacci();

console.log(memFibonacci(20));
console.log("Memorized calculation", calculation);
