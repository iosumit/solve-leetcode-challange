import Case from "./cases.js";

const cases = [
    new Case(["lc", "cl", "gg"], 6),
    new Case(["ab", "ty", "yt", "lc", "cl", "ab"], 8),
    new Case(["cc", "ll", "xx"], 2),
    new Case(["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc"], 22),
];
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let h = {};
    let l = 0;
    while (l < words.length) {
        h[words[l]] = h[words[l]] == undefined ? 1 : h[words[l]] + 1;
        l++;
    }
    let counts = 0;
    for (const o in h) {
        let rev = o[1] + o[0];
        if (h[rev] != undefined) {
            if (rev == o) {
                let pairs = Math.floor(h[rev] / 2);
                h[rev] -= pairs * 2;
                counts += pairs * 2 * 2;
                continue;
            }
            let pairs = (h[rev] <= h[o] ? h[rev] : h[o]);
            counts += pairs * 2 * 2;
            h[rev] -= pairs;
            h[o] -= pairs;
        }
    }
    for (const o in h) {
        let rev = o[1] + o[0];
        if (rev == o && h[rev] > 0) {
            counts += 2;
            break;
        }
    }
    return counts;
};
cases.forEach(element => {
    let a = longestPalindrome(element.nums);
    console.log("ANS", a, element.ans);
});