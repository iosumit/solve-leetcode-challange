import Case from "./cases.js";

const cases = [
    new Case(3, 28, 7),
    new Case(3, 3, 2),
];/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let r = new Array(n).fill(1);
    // console.log(r);
    for (let i = 0; i < m - 1; i++) {
        for (let j = r.length - 2; j >= 0; j--) {
            r[j] = r[j] + r[j + 1];
        }
    }
    return r[0];
};

cases.forEach(element => {
    let a = uniquePaths(element.nums, element.target);
    console.log("ANS", a, element.ans);
});