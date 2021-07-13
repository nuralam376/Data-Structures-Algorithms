function addTo80(n) {
  console.log("Long task");
  return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

function memorizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long task");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memorized = memorizedAddTo80();

console.log(memorized(5));
console.log(memorized(5));
console.log(memorized(5));
