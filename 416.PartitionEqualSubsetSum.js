import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    new Case([1, 5, 11, 5], true),
    new Case([1, 2, 3, 5], false)
]
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 != 0) {
        return false;
    }
    let dp = new Set();
    dp.add(0);

    let target = Math.floor(sum / 2);

    for (let r = nums.length - 1; r >= 0; r--) {
        let next = new Set();
        for (const o of dp) {
            // console.log(o)
            if (o + nums[r] == target) {
                return true;
            }
            next.add((o + nums[r]));
            next.add(o);
        }
        dp = next;
    }
    return dp.has(target) ? true : false;
};
cases.forEach(element => {
    let a = canPartition(element.nums);
    console.log("ANS", a, element.ans);
});