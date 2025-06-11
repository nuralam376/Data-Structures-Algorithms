const arr = [5,4,3,2,1];

function sum(n) {
    if(n == 0) return arr[n];
    return arr[n] + sum(n-1);
}

function oddSum(n) {
    let isOdd = (arr[n] % 2) !== 0;
  

    if(n === 0) {
        return isOdd ? arr[n] : 0;
    }

    return (isOdd ? arr[n] : 0) + oddSum(n - 1);
}

// console.log(sum(arr.length - 1));
console.log(oddSum(arr.length - 1));