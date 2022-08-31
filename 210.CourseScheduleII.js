import Case from "./cases.js";

const cases = [
    new Case(2, [0, 1], [[1, 0]]),
    new Case(4, [0, 2, 1, 3], [[1, 0], [2, 0], [3, 1], [3, 2]]),
    new Case(1, [0], [])
];
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let m = {};
    for (let i = 0; i < numCourses; i++) {
        m[i] = [];
    }
    for (let i = 0; i < prerequisites.length; i++) {
        const a = prerequisites[i];
        m[a[0]].push(a[1]);
    }
    let visitSet = new Set();
    let cycleSet = new Set();
    let res = [];
    function dfs(c) {
        if (cycleSet.has(c)) {
            return false;
        } else if (visitSet.has(c)) {
            return true;
        }
        cycleSet.add(c);
        for (let i = 0; i < m[c].length; i++) {
            if (!dfs(m[c][i])) {
                return false;
            }
        }
        cycleSet.delete(c);
        visitSet.add(c);
        res.push(c);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i) == false) {
            return [];
        }
    }
    return res;
};
cases.forEach(element => {
    let a = findOrder(element.nums, element.target);
    console.log("ANS", a, element.ans);
});