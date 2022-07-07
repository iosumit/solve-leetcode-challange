import Case from "./cases.js";

const cases = [
    new Case([2, 3, -2, 4], 6),
    new Case([-3, -1, -1], 3),
    new Case([-2, 0, -1], 0),
    new Case([-2, 3, -4], 24),
];
var maxProduct = function (nums) {
    let maxProduct = Math.max(...nums);
    let curMax = 1, curMin = 1;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (element == 0) {
            curMin = 1;
            curMax = 1;
            continue;
        }
        let _maxp = curMax * element;
        let _minp = curMin * element;
        curMax = Math.max(_maxp, _minp, element);
        curMin = Math.min(_maxp, _minp, element);

        maxProduct = max(curMax, maxProduct);
        // console.log(curMax, curMin, maxProduct);
    }
    return maxProduct;
};
function max(a, b) {
    if (a >= b) {
        return a;
    }
    return b;
}
cases.forEach(element => {
    let a = maxProduct(element.nums);
    console.log("ANS", a, element.ans);
});