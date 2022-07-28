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
var intertVal = function (intervals, newInterval) {
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            for (let j = i; j < intervals.length; j++) {
                result.push(intervals[j]);
            }
            return result;
        } else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1]),
            ];
            // console.log(newInterval);
        }
    }
    result.push(newInterval);
    return result;
};

cases.forEach(element => {
    let a = intertVal(element.nums, element.target);
    console.log("ANS", a, element.ans);
});