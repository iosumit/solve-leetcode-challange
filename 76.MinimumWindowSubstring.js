import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    new Case("ADOBECODEBANC", "BANC", "ABC"),
    new Case("a", "a", "a"),
    new Case("a", "", "aa"),
    new Case("ab", "a", "a"),
]
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t == "")
        return t;

    let tMap = {};
    let need = 0;
    for (let i = 0; i < t.length; i++) {
        if (tMap[t[i]] == undefined) {
            tMap[t[i]] = 1;
            need += 1
        } else { tMap[t[i]] = tMap[t[i]] + 1; }
    }
    let window = {};
    let have = 0;
    let res = [-1, -1], resLen = Infinity;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        const c = s[r];
        window[c] = 1 + (window[c] == undefined ? 0 : window[c]);

        if (tMap[c] != undefined && window[c] == tMap[c])
            have += 1;

        while (have == need) {
            if ((r - l + 1) < resLen) {
                res = [l, r];
                resLen = (r - l + 1);
            }
            window[s[l]] -= 1;
            if (tMap[s[l]] != undefined && tMap[s[l]] > window[s[l]])
                have -= 1;
            l += 1;
        }
    }
    return resLen != Infinity ? s.substring(res[0], res[1] + 1) : "";

};

cases.forEach(element => {
    let a = minWindow(element.nums, element.target);
    console.log("ANS", a, element.ans);
});