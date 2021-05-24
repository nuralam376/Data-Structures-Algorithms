function firstRecurringCharacter(input) {
  const length = input.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)

function firstRecurringCharacter2(input) {
  const length = input.length;

  const map = {};
  for (let i = 0; i < length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }

  return undefined;
}

const array = [2, 5, 5, 2, 1, 2, 3, 4, 5];

let result = firstRecurringCharacter(array);
let result2 = firstRecurringCharacter2(array);

console.log(result, result2);
