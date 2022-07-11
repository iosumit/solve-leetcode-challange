import Case from "./cases.js";

const cases = [
    new Case([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
    new Case([1, 1], 1)
];
var maxArea = function (height) {
    let max = 0;
    //Brute force
    // for (let i = 0; i < height.length; i++) {
    //     const start = height[i];
    //     for (let j = i + 1; j < height.length; j++) {
    //         const end = height[j];

    //         const res = min(start, end) * (j - i);
    //         if (max < res) {
    //             max = res;
    //         }
    //     }
    // }
    let l = 0, r = height.length - 1;
    while (l < r) {
        const res = min(height[r], height[l]) * (r - l);
        max = maxi(res, max);
        // console.log(max, res);
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};
function min(a, b) {
    return a < b ? a : b;
}
function maxi(a, b) {
    return a > b ? a : b;
}
cases.forEach(element => {
    let a = maxArea(element.nums);
    console.log("ANS", a, element.ans);
});