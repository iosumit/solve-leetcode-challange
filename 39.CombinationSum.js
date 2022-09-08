import Case from "./cases.js";

const cases = [
    new Case([2, 3, 6, 7], [[2, 2, 3], [7]], 7),
    new Case([2, 3, 5], [[2, 2, 2, 2], [2, 3, 3], [3, 5]], 8),
    new Case([2], [], 1),
];
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    function dfs(i, cur, total) {
        if (total == target) {
            res.push(Array.from(cur))
            return;
        }
        if (i >= candidates.length || total > target) {
            return;
        }
        cur.push(candidates[i]);
        dfs(i, cur, total + candidates[i]);
        cur.pop();
        dfs(i + 1, cur, total);
    }
    dfs(0, [], 0);
    return res;
};
cases.forEach(element => {
    let a = combinationSum(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});