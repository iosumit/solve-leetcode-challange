import Case from "./cases.js";

const cases = [
    new Case([[2, 1, 1], [1, 1, 0], [0, 1, 1]], 4),
    new Case([[2, 1, 1], [0, 1, 1], [1, 0, 1]], -1),
    new Case([[0, 2]], 0),
    new Case([[0, 1]], -1),
];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    let fresh = 0;
    let q = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == 1) {
                fresh += 1;
            } else if (grid[r][c] == 2) {
                q.push([r, c]);
            }
        }
    }
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    while (q.length && fresh > 0) {
        let rl = q.length;
        while (rl > 0) {
            let current = q.shift();
            rl -= 1;
            for (const d of directions) {
                let ro = d[0] + current[0];
                let co = d[1] + current[1];
                if (ro >= rows || co >= cols || ro < 0 || co < 0 || grid[ro][co] == 2 || grid[ro][co] == 0) {
                    continue;
                }
                q.push([ro, co]);
                grid[ro][co] = 2;
                fresh -= 1
            }
        }
        count += 1;
    }
    return fresh > 0 ? -1 : count;
};


cases.forEach(element => {
    let a = orangesRotting(element.nums);
    console.log("ANS", a, element.ans);
});