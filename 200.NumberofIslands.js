import Case from "./cases.js";

const cases = [
    new Case([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ], 1),
    new Case([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ], 3),
];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

};
cases.forEach(element => {
    let a = numIslands(element.nums, element.target, element.target1, element.target2);
    console.log("ANS", a, element.ans);
});