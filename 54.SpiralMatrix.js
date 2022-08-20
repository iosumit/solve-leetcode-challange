import Case from "./cases.js";

const cases = [
    new Case([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]),
    new Case([[2, 5, 8], [4, 0, -1]], [2, 5, 8, -1, 0, 4]),
    new Case([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]),
];
/**
 * [1, 2, 3, 4]
 * [5, 6, 7, 8]
 * [9, 10, 11, 12]
 * 
 * [1, 2, 3]
 * [4, 5, 6]
 * [7, 8, 9]
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let top = 0;
    let bottom = matrix.length;
    let left = 0;
    let right = matrix[0].length;
    let spiral = [];

    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
            spiral.push(matrix[top][i]);
        }
        top += 1;
        for (let i = top; i < bottom; i++) {
            spiral.push(matrix[i][right - 1]);
        }
        right -= 1;

        if (!(left < right && top < bottom))
            break;


        for (let i = right - 1; i >= left; i--) {
            spiral.push(matrix[bottom - 1][i]);
        }
        bottom -= 1;

        for (let i = bottom - 1; i >= top; i--) {
            spiral.push(matrix[i][left]);
        }
        left += 1

    }
    return spiral;
}
// var spiralOrder = function (matrix) {
//     let spiralMat = [];
//     let h = {
//         from: 0,
//         to: matrix[0].length - 1
//     };
//     let v = {
//         from: 0,
//         to: matrix.length - 1
//     };
//     while (h.from <= h.to && v.from <= v.to) {

//         for (let i = h.from; i <= h.to; i++) {
//             spiralMat.push(matrix[v.from][i]);
//         }
//         v.from += 1;
//         for (let i = v.from; i <= v.to; i++) {
//             spiralMat.push(matrix[i][h.to]);
//         }
//         console.log(v, h)
//         h.to -= 1;
//         if (h.from < h.to) {
//             for (let i = h.to; i >= h.from; i--) {
//                 spiralMat.push(matrix[v.to][i]);
//             }
//             // console.log(v, h, "M", spiralMat);
//             v.to -= 1;
//         }
//         if (v.from < v.to) {
//             for (let i = v.to; i >= v.from; i--) {
//                 spiralMat.push(matrix[i][h.from]);
//             }
//             // v.from += 1
//             h.from += 1;
//         }
//     }
//     return spiralMat;

// };

cases.forEach(element => {
    let a = spiralOrder(element.nums);
    console.log("ANS", a, element.ans);
});