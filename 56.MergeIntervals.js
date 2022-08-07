import Case from "./cases.js";

const cases = [
    new Case([[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]]),
    new Case([[1, 4], [4, 5]], [[1, 5]]),
    new Case([[1, 3], [8, 10], [15, 18], [2, 6]],),
];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] > b[0] ? 1 : -1)

    let res = [];
    let newInterval = [];

    for (let i = 0; i < intervals.length; i++) {

        if (i < intervals.length - 1) {
            if (intervals) {

            }
        }

    }

    return res;
};

cases.forEach(element => {
    let a = merge(element.nums);
    console.log("ANS", a, element.ans);
});