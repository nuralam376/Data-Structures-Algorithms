function additiveInverse(arr) {
  let newArray = [];
  for (let i of arr) {
    console.log(arr[i]);
    let number = -1 * Math.abs(arr[i]);
    newArray.push(number);
  }
  return newArray;
}

const arr = [5, -7, -8, 3];
const newAyy = additiveInverse(arr);

console.log(newAyy);
