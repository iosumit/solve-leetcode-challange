import Case from "./cases.js";

const cases = [
    new Case([1, 2, 3, 1], true),
    new Case([1, 2, 3, 4], false),
    new Case([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true),
];
var containsDuplicate = function (nums) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (set.has(element)) {
            return true;
        }
        set.add(element);
    }
    return false;
};
cases.forEach(element => {
    let a = containsDuplicate(element.nums);
    console.log("ANS", a, element.ans);
});