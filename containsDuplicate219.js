import Case from "./cases.js";

const cases = [
    new Case([[1, 2, 3, 1], 3], true),
    new Case([[1, 0, 1, 1], 1], true),
    new Case([[1, 2, 3, 1, 2, 3], 2], false),
];
var containsNearbyDuplicate = function (nums, k) {
    let m = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        // console.log(m);
        if (m.has(element)) {
            // console.log(i, m.get(element));
            if (Math.abs(i - m.get(element)) <= k) {
                return true;
            }
        }
        m.set(element, i);
    }
    return false;
};
cases.forEach(element => {
    let a = containsNearbyDuplicate(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});