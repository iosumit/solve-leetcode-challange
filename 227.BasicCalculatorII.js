import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


class TrieNode {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}
const cases = [
    new Case("3+2*2", 7),
    new Case(" 3/2 ", 1),
    new Case(" 3+5 / 2 ", 5),
    new Case("0-2147483647", -2147483647),
    new Case("14-3/2", 13),
]
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let cur = 0;
    let op = '+';
    let stack = [];

    for (const w of "object") {
        console.log(w);
    }

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const cc = c.charCodeAt(0);
        const isDigit = cc >= 48 && cc <= 57;
        if (isDigit) {
            cur = cur * 10 + (cc - 48);
        }
        if ((!isDigit && c != ' ') || (i == s.length - 1)) {
            switch (op) {
                case '+':
                    stack.push(cur);
                    break;
                case '-':
                    stack.push(-cur);
                    break;
                case '*':
                    stack.push(stack.pop() * cur);
                    break;
                case '/':
                    stack.push(parseInt(stack.pop() / cur));
                    break;
                default:
                    break;
            }
            op = c;
            cur = 0;
        }
    }
    let sum = 0;
    for (const o of stack) {
        sum += o;
    }
    return sum;
};
cases.forEach(element => {
    let a = calculate(element.nums);
    console.log("ANS", a, element.ans);
});