const array = [10,20,30,40,50,60,70,80];

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    let mid;

    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        if(array[mid] === target) {
            return "Data found at position " + mid;
        } else if(array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return "Data not found";
}

const target = 30;
console.log(binarySearch(array, target));