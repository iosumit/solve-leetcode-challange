import Case from "./cases.js";

const cases = [
    new Case([1, 2, 3, 1], 4),
    new Case([2, 7, 9, 3, 1], 12),
    new Case([226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37, 157, 43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245, 63, 25, 194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63, 201, 172, 130, 103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77, 223, 188, 99, 228, 90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123, 120, 131, 203, 219, 10, 82, 35, 120, 180, 249, 106, 37, 169, 225, 54, 103, 55, 166, 124], 12),
];
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let m = new Map();
    function sum(i) {
        if (i >= nums.length) {
            return 0;
        } else if (m.has(i)) {
            return m.get(i);
        } else if (nums[i] == 0) {
            let l = nums[i] + Math.max(sum(i + 1), sum(i + 2));
            m.set(i, l);
            return l;
        } else {
            let l = nums[i] + Math.max(sum(i + 2), sum(i + 3));
            m.set(i, l);
            return l;
        }
    }
    if (nums.length > 1) {
        return Math.max(sum(0), sum(1));
    }
    return nums[0];
};
cases.forEach(element => {
    let a = rob(element.nums);
    console.log("ANS", a, element.ans);
});