import Case from "./cases.js";

const cases = [
    new Case([[5, 5], [6, 3], [3, 6],], 0),
    new Case([[2, 2], [3, 3]], 1),
    new Case([[1, 5], [10, 4], [4, 3]], 1),
];
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
    // console.log(properties);
    // properties.sort((a, b) => a[0] == b[0] ? a[1] > b[1] : a[0] < b[0]);
    properties.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
    // console.log(properties);
    let min = -Infinity;
    let count = 0;
    for (let i = properties.length - 1; i >= 0; i--) {
        const c = properties[i];
        if (c[1] < min) {
            count += 1;
        }
        min = Math.max(c[1], min);
    }
    return count;
};
cases.forEach(element => {
    let a = numberOfWeakCharacters(element.nums);
    console.log("ANS", a, element.ans);
});

// 0 + 1 + 1 + 2 + 3 + 5;