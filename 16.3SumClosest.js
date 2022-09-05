import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    new Case([-1, 2, 1, -4], 2, 1),
    new Case([0, 0, 0], 0, 1),
]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let f = 0
    let l = f + 1;
    let r = nums.length - 1;
    let closer = Infinity;
    let diff = Infinity;
    nums.sort((a, b) => a - b)
    while ((f <= nums.length - 3)) {
        l = f + 1;
        r = nums.length - 1;
        while (l < r) {
            let s = nums[f] + nums[l] + nums[r];
            if (Math.abs(target - s) < diff) {
                closer = s;
                diff = Math.abs(target - s);
            }
            if (s == target) {
                return s;
            } else if (s < target) {
                l += 1;
            } else {
                r -= 1;
            }
        }
        f += 1;
    }
    return closer;
};

cases.forEach(element => {
    let a = threeSumClosest(element.nums, element.target);
    console.log("ANS", a, element.ans);
});