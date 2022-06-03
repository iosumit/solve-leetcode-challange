const reverseInteger = (x) => {
    let rev = 0;
    let rem = 0;
    let flag = false;
    if (x < 0) {
        x = x * -1;
        flag = true;
    }
    while (x > 0) {
        rem = x % 10;
        rev = rev * 10 + rem;
        x = parseInt(x / 10);
        console.log(rem, rev, x);
    }
    let pow31 = Math.pow(2, 31);
    if ((-1 * pow31) <= rev && pow31 < rev) {
        return 0;
    }

    return flag ? rev * -1 : rev;
}
console.log(reverseInteger(1534236469));