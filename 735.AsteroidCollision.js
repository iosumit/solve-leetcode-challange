import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    new Case([5, 10, -5], [5, 10]),
    new Case([8, -8], []),
    new Case([10, 2, -5], [10]),
]
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];
    for (let a of asteroids) {
        while (stack.length > 0 && a < 0 && stack[stack.length - 1] > 0) {
            let dif = a + stack[stack.length - 1];
            if (dif < 0) {
                stack.pop()
            } else if (dif > 0) {
                a = 0;
            } else {
                a = 0; stack.pop();
            }
        }
        if (a) {
            stack.push(a);
        }
    }
    return stack;
};
cases.forEach(element => {
    let a = asteroidCollision(element.nums);
    console.log("ANS", a, element.ans);
});