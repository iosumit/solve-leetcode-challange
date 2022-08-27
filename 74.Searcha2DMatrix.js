import Case from "./cases.js";

const cases = [
    new Case([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], true, 3),
    new Case([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], false, 13),
    new Case([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], false, 70),
    new Case([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], true, 34),
    new Case([[1]], true, 1),
    new Case([[1, 3]], true, 3),
];
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let indexFound = -1;
    for (let i = 1; i < rows; i++) {
        if (target >= matrix[i - 1][0] && target < matrix[i][0]) {
            indexFound = i - 1;
        }
    }
    if (indexFound == -1) {
        if (target >= matrix[rows - 1][0] && target <= matrix[rows - 1][cols - 1]) {
            indexFound = rows - 1;
        } else {
            return false;
        }
    }
    // console.log(indexFound);
    // Binary Search
    let l = 0;
    let r = cols - 1
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (matrix[indexFound][mid] == target) {
            return true;
        } else if (target > matrix[indexFound][mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
};

cases.forEach(element => {
    let a = searchMatrix(element.nums, element.target);
    console.log("ANS", a, element.ans);
});