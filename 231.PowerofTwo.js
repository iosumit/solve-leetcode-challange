import Case from "./cases.js";

const cases = [
    new Case(1, true),
    new Case(16, true),
    new Case(3, false),
    new Case(0, false),
];

var isPowerOfTwo = function (n) {
    // if (n == 0) {
    //     return false;
    // }
    // function divByTwo(n) {
    //     if (n == 1) {
    //         return true;
    //     } else if (n % 2 != 0) {
    //         return false;
    //     } else {
    //         return divByTwo(n / 2);
    //     }
    // }
    // return divByTwo(n);

    return n > 0 && (n & (n - 1)) == 0;
};

cases.forEach(element => {
    let a = isPowerOfTwo(element.nums);
    console.log("ANS", a, element.ans);
});