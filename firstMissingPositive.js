import Case from "./cases.js";

const cases = [
    new Case([1, 2, 0], 3),
    new Case([1], 2),
    new Case([3, 4, -1, 1], 2),
    new Case([7, 8, 9, 11, 12], 1)
];

var firstMissingPositive = function (nums) {
    // let hashT = {};
    // for (let i = 0; i < nums.length; i++) {
    //     const element = nums[i];
    //     hashT[element] = i;
    // }
    // for (let i = 1; i < nums.length + 2; i++) {
    //     if (!hashT.hasOwnProperty(i)) {
    //         return i;
    //     }
    // }
    var set = new Set(nums);
    for (let i = 1; i < nums.length + 2; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return -1;
};

cases.forEach(element => {
    let a = firstMissingPositive(element.nums);
    console.log("ANS", a, element.ans);
});