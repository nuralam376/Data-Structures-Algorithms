const countDigit = (num) => {
    if(num == 0) return 1;
    let count = 0;

    num = Math.abs(num);
    while(num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
};

console.log(countDigit(-0));