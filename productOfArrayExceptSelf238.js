import Case from "./cases.js";

const cases = [
    new Case([1, 2, 3, 4], [24, 12, 8, 6]),
    new Case([-1, 1, 0, -3, 3], [0, 0, 9, 0, 0]),
];
var productExceptSelf = function (nums) {
    let output = [];

    let counter = 1;

    for (let i = 0; i < nums.length; i++) {
        counter *= i > 0 ? nums[i - 1] : counter;
        output.push(counter);
    }

    counter = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        const element = nums[i];

        if (i < nums.length - 1) {
            counter *= nums[i + 1];
            // console.log("L", nums[i + 1]);
        }
        // console.log(counter);
        let o = output[i] * counter;
        if (o == -0) {
            o = 0
        }
        output[i] = o;
    }

    return output;

};
cases.forEach(element => {
    let a = productExceptSelf(element.nums);
    console.log("ANS", a, element.ans);
});