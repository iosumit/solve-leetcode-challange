import Case from "./cases.js";

const cases = [
    new Case([10, 15, 20], 15),
    new Case([1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6),
];
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let m = new Map();
    let count = 0;

    // O(n)
    function climb(i) {
        // console.log(count++);
        if (i >= cost.length) {
            return 0;
        } if (m.has(i)) {
            return m.get(i);
        } else {
            let c = i < 0 ? 0 : cost[i];
            let minimum = min(c + climb(i + 1), c + climb(i + 2));
            m.set(i, minimum);
            return minimum;
        }
    }
    // console.log(count);
    // return climb(-1, 0);

    cost.push(0);
    for (let i = cost.length - 3; i >= 0; i--) {
        // console.log(count++);
        cost[i] += min(cost[i + 1], cost[i + 2]);
    }
    return min(cost[0], cost[1]);

};
// 464, 15
function min(a, b) {
    return a > b ? b : a;
}
cases.forEach(element => {
    let a = minCostClimbingStairs(element.nums);
    console.log("ANS", a, element.ans);
});