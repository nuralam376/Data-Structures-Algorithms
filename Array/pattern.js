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
// firstStarPattern(4);
// secondStarPattern(4);
// thridStarPattern(4);
// numberPattern(4);
// secondNumberPattern(4);
// thridNumberPattern(4);
// fourthNumberPattern(4);
fifthNumberPattern(4);