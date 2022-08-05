import Case from "./cases.js";

const cases = [
    new Case([1, 2, 3, 4], [1, 3, 6, 10]),
    new Case([1, 1, 1, 1, 1], [1, 2, 3, 4, 5]),
    new Case([3, 1, 2, 10, 1], [3, 4, 6, 16, 17]),
];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let l = 0;
    let sum = 0;
    let result = [];
    while (l < nums.length) {
        sum = sum + nums[l];
        result.push(sum);
        l++;
    }
    return result;
};
cases.forEach(element => {
    let a = runningSum(element.nums);
    console.log("ANS", a, element.ans);
});