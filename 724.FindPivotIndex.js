import Case from "./cases.js";

const cases = [
    new Case([1, 7, 3, 6, 5, 6], 3),
    new Case([1, 2, 3], -1),
    new Case([2, 1, -1], 0),
];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let l = 0;
    let rsum = 0;
    let lsum = 0;
    while (l < nums.length) {
        rsum = rsum + nums[l];
        l++;
    }
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        rsum = rsum - element;
        lsum = i > 0 ? lsum + nums[i - 1] : lsum;
        if (lsum == rsum) {
            return i;
        }
    }
    return -1;
};
cases.forEach(element => {
    let a = runningSum(element.nums);
    console.log("ANS", a, element.ans);
});