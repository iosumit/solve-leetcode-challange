import Case from "./cases.js";

const cases = [
    new Case("abccccdd", 7),
    new Case("a", 1),
    new Case("ccc", 3),
];

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let _m = new Map();
    let i = 0;
    // console.log(s);
    while (i < s.length) {
        if (_m.has(s[i])) {
            let x = _m.get(s[i]);
            _m.set(s[i], ++x);
        } else {
            _m.set(s[i], 1);
        }
        i++;
    }
    let max = 0;
    let unPair = 0;
    for (const o of _m) {
        // console.log(o[1]);
        if (o[1] % 2 == 0) {
            max += o[1];
        } else if (o[1] > 1) {
            max += o[1] - 1;
            unPair++;
        } else {
            unPair++;
        }
    }
    return unPair > 0 ? max + 1 : max;

};

cases.forEach(element => {
    let a = longestPalindrome(element.nums);
    console.log("ANS", a, element.ans);
});