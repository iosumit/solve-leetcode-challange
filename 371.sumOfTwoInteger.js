import Case from "./cases.js";

const cases = [
    new Case([1, 2], 3),
    new Case([2, 3], 5),
];
var getSum = function (a, b) {
    while (b != 0) {
        let temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
        // console.log(a, b);
    }
    return a;
};
cases.forEach(element => {
    let a = getSum(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});