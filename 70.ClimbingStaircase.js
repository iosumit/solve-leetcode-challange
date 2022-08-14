import Case from "./cases.js";

const cases = [
    new Case(2, 2),
    new Case(3, 3),
    new Case(4, 4),
];
/**
 * @param {number} n
 * @return {number}
 */
//       0 
//    1    2
//   2 3   4  3
// 3 4  x  x  



var climbStairs = function (n) {
    // let counts = 0;
    let m = new Map();
    function climb(w) {
        if (w == n) {
            return 1;
        } else if (m.has(w)) {
            return m.get(w);
        } else if (w > n) {
            return 0;
        } else {
            let c = climb(w + 2) + climb(w + 1);
            m.set(w, c);
            return c;
        }
    }
    return climb(0);
};
cases.forEach(element => {
    let a = climbStairs(element.nums);
    console.log("ANS", a, element.ans);
});

// 0 + 1 + 1 + 2 + 3 + 5;