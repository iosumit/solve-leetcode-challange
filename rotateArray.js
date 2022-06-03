import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    new Case([[1, 2, 3, 4, 5, 6, 7], 3], [5, 6, 7, 1, 2, 3, 4]),
    new Case([[-1, -100, 3, 99], 2], [3, 99, -1, -100])
]
var rotateArray = function (nums, k) {
    // let nums = nums;
    if (nums.length <= 1) {
        return nums;
    }
    let i = k - 1;
    let j = nums.length - 1;
    // console.log(current);
    while (i >= 0) {
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
        // let current = nums.pop();
        // // console.log(current);
        // nums.splice(0, 0, current);
        i--;
        j--;
    }
    return nums;
};
cases.forEach(element => {
    let a = rotateArray(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});