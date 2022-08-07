import Case from "./cases.js";

const cases = [
    new Case([[1, 0]], true, 2),
    new Case([[1, 0], [0, 1]], false, 2),
    new Case([[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]], true, 5),
    new Case([[1, 0], [0, 3], [0, 2], [3, 2], [2, 5], [4, 5], [5, 6], [2, 4]], true, 7),
    new Case([[0, 10], [3, 18], [5, 5], [6, 11], [11, 14], [13, 1], [15, 1], [17, 4]], false, 20),
];
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let m = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
        const element = prerequisites[i];
        if (element.length <= 0) {
            continue;
        }
        if (m.has(element[0])) {
            m.set(element[0], [...m.get(element[0]), element[1]]);
        } else {
            m.set(element[0], [element[1]]);
        }
    }

    let visitors = new Set();

    function dfs(node) {
        console.log(node);
        // return true;
        if (visitors.has(node)) {
            return false;
        }
        if (!m.has(node) || m.get(node).length == 0) {
            return true;
        }
        visitors.add(node);

        m.get(node).forEach(element => {
            if (!dfs(element)) {
                return false;
            }
        });
        visitors.delete(node);
        m.set(node, []);
        return true;
        // let a = true;
        // while (m.get(node).length > 0) {
        //     let current = m.get(node).shift();
        //     a = a && dfs(current);
        // }
        // return a;
    }

    for (let i = 0; i < 1; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;

};
let a = canFinish(cases[1].target, cases[1].nums);
console.log("ANS", a, cases[1].ans);
// cases.forEach(element => {
//     let a = canFinish(element.target, element.nums);
//     console.log("ANS", a, element.ans);
// });