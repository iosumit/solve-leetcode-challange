import Case from "./cases.js";

const cases = [
    new Case([-1, 0, 3, 5, 9, 12], 4, 9),
    new Case([-1, 0, 3, 5, 9, 12], -1, -2),
];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let end = nums.length - 1;
    let start = 0;

    while (start <= end) {
        let mid = parseInt((end + start) / 2);
        // console.log(start, mid, start, end, nums[mid], target);
        if (nums[mid] == target) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
            // console.log("SS");
        } else {
            end = mid - 1;
        }
    }
    return -1
};
cases.forEach(element => {
    let a = search(element.nums, element.target);
    console.log("ANS", a, element.ans);
});