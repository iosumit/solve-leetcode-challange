import Case from "./cases.js";

const cases = [
    new Case([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6),
    new Case([1], 1),
    new Case([5, 4, -1, 7, 8], 23),
];
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += element;
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
};
function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
cases.forEach(element => {
    let a = maxSubArray(element.nums);
    console.log("ANS", a, element.ans);
});