import Case from "./cases.js";
import { MaxHeap } from "./lib.js";
import { tc621 } from "./testcase/621tc.js";
const cases = [
    new Case(["A", "A", "A", "B", "B", "B"], 8, 2),
    new Case(["A", "A", "A", "B", "B", "B", "B"], 10, 2),
    new Case(["A", "A", "A", "B", "B", "B"], 6, 0),
    new Case(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 16, 2),
    new Case(tc621, 10000, 6),
];
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

    let m = {};
    let l = 0;
    while (l < tasks.length) {
        m[tasks[l]] = m[tasks[l]] == undefined ? 1 : m[tasks[l]] + 1;
        l += 1;
    }
    let mH = [];
    for (const o in m) {
        mH.push(m[o]);
    }
    mH.sort((a, b) => b - a);
    let queue = [];

    let time = 0;
    while (mH.length || queue.length) {
        time += 1;
        if (mH.length > 0) {
            let c = mH.shift() - 1;
            let x = [c, (time + n)];
            // console.log(mH, "TT", time, "TT", "XX", x, "XX", queue);
            if (c > 0) {
                queue.push(x);
            }
        }
        // else {
        //     console.log("IDLE");
        // }
        if (queue.length > 0 && (time == queue[0][1])) {
            let c = queue.shift();
            mH.push(c[0]);
            if (mH.length > 1) {
                mH.sort((a, b) => b - a);
            }
        }
    }
    return time;

};
cases.forEach(element => {
    let a = leastInterval(element.nums, element.target);
    console.log("ANS", a, element.ans);
});