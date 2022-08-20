import Case from "./cases.js";

const cases = [
    new Case(19, true),
    new Case(2, false),
    new Case(7, false),
];
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let visited = new Set();

    function checkIsHappy(num) {
        if (num == 1) return true;
        if (visited.has(num)) return false;
        visited.add(num);
        let final = 0;
        let rem = 0;
        while (num > 0) {
            rem = num % 10;
            final += (rem * rem);
            num = Math.floor(num / 10);
        }
        return checkIsHappy(final);
    }

    return checkIsHappy(n);
};
// function isHappy(n) {
//     let slow = n, fast = n;
//     do {
//         slow = findsqsum(slow);
//         fast = findsqsum(findsqsum(fast));

//     } while (slow != fast);

//     return (slow == 1);
// }

// function findsqsum(num) {
//     console.log(num);
//     let sum = 0;
//     while (num > 0) {
//         sum += (num % 10) * (num % 10);
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

cases.forEach(element => {
    let a = isHappy(element.nums);
    console.log("ANS", a, element.ans);
});