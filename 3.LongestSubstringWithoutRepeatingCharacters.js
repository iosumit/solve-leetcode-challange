import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    // new Case("abcabcbb", 3),
    new Case("bbbbb", 1),
    // new Case("pwwkew", 3),
    // new Case("dvdf", 3),
]
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0) {
        return 0;
    }
    let result = 1;
    let l = 0;
    let r = l + 1;
    while (r < s.length && l <= r) {

        for (let i = l; i < r; i++) {
            if (s[i] == s[r]) {
                l = i + 1;
                break;
            }
        }
        result = max(result, r - l + 1);
        r++;
    }
    return result;
};
function max(a, b) {
    if (a >= b) {
        return a;
    }
    return b;
}
cases.forEach(element => {
    let a = lengthOfLongestSubstring(element.nums);
    console.log("ANS", a, element.ans);
});