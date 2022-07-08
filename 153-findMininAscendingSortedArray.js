import Case from "./cases.js";

const cases = [
    new Case([3, 4, 5, 1, 2], 1),
    new Case([4, 5, 6, 7, 0, 1, 2], 0),
    new Case([11, 13, 15, 17], 11),
    new Case([2, 1], 1),
    new Case([3, 1, 2], 1),
];

var findMin = function (nums) {
    let min = nums[0];
    let l = 0, r = nums.length - 1;

    while (l <= r) {

        if (nums[l] < nums[r]) {
            min = mini(min, nums[l]);
            break;
        }

        let mid = parseInt(l + (r - l) / 2);
        // let mid = parseInt((l + r) / 2);
        min = mini(nums[mid], min);
        // console.log(min, mid, l, r);
        if (nums[mid] >= nums[l]) {
            // Serach right
            l = mid + 1;
            // console.log(l);
        } else {
            // Search left
            r = mid - 1;
        }

    }
    return min;

};

function mini(a, b) {
    if (a <= b) {
        return a;
    }
    return b;
}
cases.forEach(element => {
    let a = findMin(element.nums);
    console.log("ANS", a, element.ans);
});