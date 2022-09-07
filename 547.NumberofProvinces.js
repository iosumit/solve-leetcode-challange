import Case from "./cases.js";

const cases = [
    new Case([[1, 1, 0], [1, 1, 0], [0, 0, 1]], 2),
    new Case([[1, 0, 0], [0, 1, 0], [0, 0, 1]], 3),
    new Case([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1),
];
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let count = 0;

    let isVisited = Array(n).fill(false);
    function dfs1(c) {
        isVisited[c] = true;
        let arr = [];
        for (let i = 0; i < n; i++) {
            if (isConnected[c][i] == 1) {
                arr.push(i);
            }
        }
        for (const o of arr) {
            if (!isVisited[o]) {
                dfs1(o);
            }
        }
    }
    for (let c = 0; c < n; c++) {
        if (!isVisited[c]) {
            dfs1(c);
            count += 1;
        }
    }
    return count;

    //O(n*n)
    function dfs(i, j) {
        if (isConnected[i][j] == 0 || isConnected[j][i] == 0 || isConnected[j][i] == 2) {
            return;
        }
        isConnected[i][j] = 2;
        isConnected[j][i] = 2;
        for (let r = 0; r < n; r++) {
            dfs(r, j);
        }
        for (let r = 0; r < n; r++) {
            dfs(i, r);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] == 1) {
                count += 1;
                dfs(i, j);
            }
        }
    }
    return count;

};
cases.forEach(element => {
    let a = findCircleNum(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});