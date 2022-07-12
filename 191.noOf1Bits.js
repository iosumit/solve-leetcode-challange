import Case from "./cases.js";

const cases = [
    new Case('00000000000000000000000000001011', 3),
    new Case('00000000000000000000000010000000', 1),
    new Case('11111111111111111111111111111101', 31),
];
var hammingWeight = function (n) {
    while (n != 0) {
        n = n >> 1;
    }
    return n;
};
cases.forEach(element => {
    let a = hammingWeight(element.nums);
    console.log("ANS", a, element.ans);
});