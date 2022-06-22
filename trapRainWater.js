import Case from "./cases.js";

const cases = [
    new Case([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6),
    new Case([4, 2, 0, 3, 2, 5], 9)
];

var trap = function (height) {
    let maxLeft = [];
    let maxRight = [];

    let m = 0;
    let i = 0;
    while (height.length > i) {
        if (m < height[i]) {
            m = height[i];
        }
        maxLeft.push(m);
        i++;
    }
    m = 0;
    i = height.length - 1;
    while (i >= 0) {
        if (m < height[i]) {
            m = height[i];
        }
        maxRight.unshift(m);
        i--;
    }
    let sum = 0;
    i = 0;
    while (i < height.length) {
        let waterHold = getMin(maxLeft[i], maxRight[i]) - height[i];
        if (waterHold > 0) {
            sum += waterHold;
        }
        i++;
    }
    return sum;
};
function getMin(a, b) {
    if (a < b) {
        return a;
    } else return b;
}

cases.forEach(element => {
    let a = trap(element.nums);
    console.log("ANS", a, element.ans);
});