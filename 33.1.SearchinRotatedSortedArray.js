import Case from "./cases.js";

const cases = [
    new Case([4, 5, 6, 7, 0, 1, 2], 4, 0),
    new Case([4, 5, 6, 7, 0, 1, 2], -1, 3),
    new Case([1], -1, 0),
];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        //SORTED
        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        // Not Sorted
        else {
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return -1;
};

cases.forEach(element => {
    let a = search(element.nums, element.target);
    console.log("ANS", a, element.ans);
});