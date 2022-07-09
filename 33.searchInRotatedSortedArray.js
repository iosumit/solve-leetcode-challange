import Case from "./cases.js";

const cases = [
    new Case([[4, 5, 6, 7, 0, 1, 2], 0], 4),
    new Case([[4, 5, 6, 7, 0, 1, 2], 3], -1),
    new Case([[1], 0], -1),
];

var search = function (nums, target) {

    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = parseInt(l + (r - l) / 2)
        if (nums[mid] == target) {
            return mid;
        }

        if (nums[mid] >= nums[l]) {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1;
            } else
                r = mid - 1;
        } else {
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
    let a = search(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});