import Case from "./cases.js";

const cases = [
    new Case("ABAB", 4, 2),
    new Case("AABABBA", 4, 1),
];
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let occured = Array(26).fill(0);
    let l = 0;
    let res = 0;
    let maxF = 0;


    for (let r = 0; r < s.length; r++) {
        let ri = s.charCodeAt(r) - 65;
        occured[ri] = occured[ri] + 1;

        maxF = occured[ri] > maxF ? occured[ri] : maxF;

        while ((r - l + 1) - maxF > k) {
            ri = s.charCodeAt(l) - 65;
            occured[ri] = occured[ri] - 1;
            l += 1;
        }
        res = (res < r - l + 1) ? r - l + 1 : res;
    }
    return res;
};


cases.forEach(element => {
    let a = characterReplacement(element.nums, element.target);
    console.log("ANS", a, element.ans);
});