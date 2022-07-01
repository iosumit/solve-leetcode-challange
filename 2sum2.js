import Case from "./cases.js";

const cases = [
    new Case([[2, 7, 11, 15], 9], [1, 2]),
    new Case([[2, 3, 4], 6], [1, 3]),
    new Case([[-1, 0], -1], [1, 2]),
];

var twoSum = function (numbers, target) {

    let l = 0;
    let r = numbers.length - 1;

    // return target;

    while (l < r) {

        let a = numbers[l] + numbers[r];
        // console.log(a, numbers[l], numbers[r], l, r);
        if (a == target) {
            return [l + 1, r + 1];
        } else if (a < target) {
            l++;
        } else {
            r--;
        }
    }
    return [];

};
cases.forEach(element => {
    let a = twoSum(element.nums[0], element.nums[1]);
    console.log("ANS", a, element.ans);
});