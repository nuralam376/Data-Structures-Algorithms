const colors = ["Red", "Green", "Blue", "Violet"];

console.log(colors.indexOf("Blue"));

console.log(colors.findIndex((color) => color === "Blue"));

console.log(colors.find((color) => color === "Blue"));

console.log(colors.includes("Blue"));


// Linear Search

const array = [10,20,30,40, 50, 60, 70, 80];

function linearSearch(array, target) {
    let arrayLength = array.length;

    for(let i = 0; i < arrayLength; i++) {
        if(array[i] === target) {
            return "Data found on position " + i;
        }
    }
    return "Data not found";
}

console.log(linearSearch(array, 60));