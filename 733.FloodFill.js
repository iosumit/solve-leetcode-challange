import Case from "./cases.js";

const cases = [
    new Case([[1, 1, 1], [1, 1, 0], [1, 0, 1]], [[2, 2, 2], [2, 2, 0], [2, 0, 1]], 1, 1, 2),
    new Case([[0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0]], 0, 0, 0),
];
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] == color) {
        return image;
    }
    function fillColor(sr, sc, prevColor, fill) {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != prevColor) {
            return;
        }
        image[sr][sc] = fill;
        fillColor(sr - 1, sc, prevColor, fill);
        fillColor(sr + 1, sc, prevColor, fill);
        fillColor(sr, sc - 1, prevColor, fill);
        fillColor(sr, sc + 1, prevColor, fill);
    }
    fillColor(sr, sc, image[sr][sc], color);
    return image;
};
cases.forEach(element => {
    let a = floodFill(element.nums, element.target, element.target1, element.target2);
    console.log("ANS", a, element.ans);
});