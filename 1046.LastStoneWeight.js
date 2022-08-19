import Case from "./cases.js";

const cases = [
    new Case([2, 7, 4, 1, 8, 1], 1),
    new Case([1], 1),
    new Case([8, 10, 4], 2),
];/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    // ✅
    stones.sort((a, b) => (a > b ? 1 : -1));

    while (stones.length > 1) {
        let y = stones.pop();
        let x = stones.pop();
        if (x < y) {
            stones.push(y - x);
        }
        stones.sort((a, b) => (a > b ? 1 : -1));
    }
    return stones.length > 0 ? stones[0] : 0;
};

cases.forEach(element => {
    let a = lastStoneWeight(element.nums);
    console.log("ANS", a, element.ans);
});