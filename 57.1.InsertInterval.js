import Case from "./cases.js";

const cases = [
    new Case([[1, 3], [6, 9]], [[1, 5], [6, 9]], [2, 5]),
    new Case([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [[1, 2], [3, 10], [12, 16]], [4, 8]),
];

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = [];

    for (let i = 0; i < intervals.length; i++) {

        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            let r = i;
            while (r < intervals.length) {
                res.push(intervals[r]);
                r += 1;
            }
            return res;
        }
        else if (newInterval[0] > intervals[i][1])
            res.push(intervals[i]);
        else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1]),
            ];
        }
    }
    res.push(newInterval);
    return res;
};

cases.forEach(element => {
    let a = insert(element.nums, element.target);
    console.log("ANS", a, element.ans);
});