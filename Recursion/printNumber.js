function printNumber(num) {
    if(num === 0) return;
    console.log(num);
    printNumber(--num);
}

function printNumber2(x, n) {
    if(x > n) return;
    console.log(x);
    printNumber2(++x,n);
}

printNumber(5);
printNumber2(1,10);