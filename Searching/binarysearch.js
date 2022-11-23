function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    let mid;
    let order;

    if(array[start] > array[end]) {
        order = "desc";
    } else {
        order = "asc";
    }

    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        if(array[mid] === target) {
            return "Data found at position " + mid;
        } else if((order === "desc" && array[mid] > target) || (order === "asc" && array[mid] < target)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return "Data not found";
}

const array = [10,20,30,40,50,60,70,80];
const array2 = [80, 70, 60, 50, 40, 30, 20, 10];
const target = 30;
const target2 = 50;
console.log(binarySearch(array, target));
console.log(binarySearch(array2, target2));

// Binary Search - Flooring, Ceiling

function floorCeil(array, target) {
    let start = 0;
    let end = array.length - 1;
    let mid;
    let order;

    if(array[start] > array[end]) {
        order = "desc";
    } else {
        order = "asc";
    }

    while(start <= end) {
        mid = Math.floor((start + end) / 2); 
        if(array[mid] === target) {
            break;
        } else if((order === "asc" && array[mid] < target) || (order === "desc" && array[mid] > target)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log(mid)
    if (order === "asc") {
        return `Floor - ${array[mid]} and Ceil ${array[mid + 1]}`
    } else {
        return `Floor - ${array[mid + 1]} and Ceil - ${array[mid]}}`
    }
}

// 10,20,30,40,50,60,70,80];
// [80, 70, 60, 50, 40, 30, 20, 10]

console.log(floorCeil(array, 58));
console.log(floorCeil(array2, 58));


// Count numbers
function findDuplicateNumbers(array, target) {
    let start = 0;
    let end = array.length - 1;
    let mid, order, count = 0;

    if(array[start] > array[end]) {
        order = "desc";
    } else {
        order = "asc";
    }

    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        if(array[mid] === target) {
            break;
        } else if((order === "asc" && array[mid] < target) || (order === "desc" && array[mid] > target)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
   
    for(let i = mid; i >= 0; i--) {
        if(array[i] === target) {
            count++;
        } else {
            break;
        }
    }   

    for(let i = mid + 1; i < array.length; i++) {
        if(array[i] === target) {
            count++;
        } else {
            break;
        }
    }
    return count;
}


console.log(findDuplicateNumbers([2,3,5,8,8,8,8,9,12,12,12,15], 8));
console.log(findDuplicateNumbers([25,19,17,15,12,12,8,8,8,6,5,4,4,3,2], 12));