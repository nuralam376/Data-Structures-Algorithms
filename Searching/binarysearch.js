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