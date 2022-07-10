import Case from "./cases.js";

const cases = [
    new Case([[2, 7, 11, 15], 9], [0, 1]),
    new Case([[3, 5, 4], 6], [1, 2]),
    new Case([[3, 3], 6], [0, 1]),
];

var twoSum = function (nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (m.has(element)) {
            return [m.get(element), i];
        }
        m.set(target - element, i);
        // console.log(element, m);
    }
    return [];
};

cases.forEach(element => {
    let a = twoSum(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});