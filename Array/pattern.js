function firstStarPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < n; j++) {
           row = row + "*";
        }
        console.log(row);
    }
}

function secondStarPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j <= i; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}

function thridStarPattern(n) {
    for(let  i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < n - i - 1; j++) {
            row+=" ";
        }
        for(let k = 0; k <= i; k++) {
            row += "*";
        }
        console.log(row);
    }
   
}

function numberPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j <= i; j++) {
            row += j + 1;
        }
        console.log(row);
    }
}

function secondNumberPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j <= i; j++) {
            row += (i + 1);
        }
        console.log(row);
    }
}

function thridNumberPattern(n) {
    for(let  i = n; i > 0; i--) {
        let row = "";
        for(let j = 0; j < i; j++) {
            row +=(j+1);
        }
        console.log(row);
    }
}

function fourthNumberPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1;
        for(let j = 0; j <=i; j++) {
            row += toggle;
            toggle = toggle === 1 ? 0 : 1;
        }
        console.log(row);
    }
}

function fifthNumberPattern(n) {
    let toggle = 1;
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j <= i; j++) {
            row += toggle;
            toggle = toggle === 1 ? 0 : 1
        }
        console.log(row);
    }
}

function secondLargest(arr) {
    if(arr.length < 2) {
        return "Arrays should have at least two elements";
    }
    let firstLargest = -Infinity;
    let secondLargest = Infinity;

    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ?  "No second largets found" : secondLargest;
}
// firstStarPattern(4);
// secondStarPattern(4);
// thridStarPattern(4);
// numberPattern(4);
// secondNumberPattern(4);
// thridNumberPattern(4);
// fourthNumberPattern(4);
// fifthNumberPattern(4);
console.log(secondLargest([1,2,4,3,9,7,13,8]));