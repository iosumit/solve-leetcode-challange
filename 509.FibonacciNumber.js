import Case from "./cases.js";

const cases = [
    new Case(2, 1),
    new Case(3, 2),
    new Case(5, 5),
];
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let m = new Map();
    function calculateFib(n) {
        if (n == 0 || n == 1) {
            return n;
        } if (m.has(n)) {
            return m.get(n);
        } else {
            console.log((n - 1), (n - 2), n);
            let c = calculateFib(n - 1) + calculateFib(n - 2);
            m.set(n, c);
            return c;
        }
    }
    return calculateFib(n);
};
cases.forEach(element => {
    let a = fib(element.nums);
    console.log("ANS", a, element.ans);
});

// 0 + 1 + 1 + 2 + 3 + 5;