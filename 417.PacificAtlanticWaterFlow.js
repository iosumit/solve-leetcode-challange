import Case from "./cases.js";
import { atc417, tc417 } from "./testcase/417tc.js";

const cases = [
    new Case([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]], [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]),
    new Case([[2, 1], [1, 2]], [[0, 0], [0, 1], [1, 0], [1, 1]]),
    new Case([[3, 3, 3, 3, 3, 3], [3, 0, 3, 3, 0, 3], [3, 3, 3, 3, 3, 3]]),
    new Case(tc417, atc417),
];
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let pac = new Set();
    let atl = new Set();

    function dfs(r, c, visit, ph) {
        let s = "" + r + c;
        if (r == rows || c == cols || r < 0 || c < 0 ||
            visit.has(s) || heights[r][c] < ph) {
            return;
        }
        visit.add(s);
        dfs(r + 1, c, visit, heights[r][c]);
        dfs(r - 1, c, visit, heights[r][c]);
        dfs(r, c + 1, visit, heights[r][c]);
        dfs(r, c - 1, visit, heights[r][c]);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c, pac, heights[0][c]);
        dfs(rows - 1, c, atl, heights[rows - 1][c]);
    }
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pac, heights[r][0]);
        dfs(r, cols - 1, atl, heights[r][cols - 1]);
    }
    let both = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let s = "" + r + c;
            if (atl.has(s) && pac.has(s)) {
                both.push([r, c]);
            }
        }
    }
    return both;
};

cases.forEach(element => {
    let a = pacificAtlantic(element.nums);
    console.log("ANS", a, element.ans);
});