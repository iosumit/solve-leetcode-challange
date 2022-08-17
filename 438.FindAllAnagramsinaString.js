import Case from "./cases.js";

const cases = [
    new Case("cbaebabacd", [0, 6], "abc"),
    new Case("abab", [0, 1, 2], 'ab'),
];
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let result = [];
    let pm = new Map();
    let sm = new Map();

    for (let i = 0; i < p.length; i++) {
        if (pm.has(p[i])) {
            pm.set(p[i], pm.get(p[i]) + 1);
        } else {
            pm.set(p[i], 1);
        }
        if (sm.has(s[i])) {
            sm.set(s[i], sm.get(s[i]) + 1);
        } else {
            sm.set(s[i], 1);
        }
    }
    result = compareMaps(sm, pm) ? [0] : [];
    let l = 0;
    for (let r = p.length; r < s.length; r++) {
        if (sm.has(s[r])) {
            sm.set(s[r], sm.get(s[r]) + 1);
        } else {
            sm.set(s[r], 1);
        }
        sm.set(s[l], sm.get(s[l]) - 1);

        if (sm.get(s[l]) == 0) {
            sm.delete(s[l]);
        }
        l += 1;
        if (compareMaps(sm, pm))
            result.push(l);
    }
    return result;
};
function compareMaps(map1, map2) {
    var testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (var [key, val] of map1) {
        testVal = map2.get(key);
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}


cases.forEach(element => {
    let a = findAnagrams(element.nums, element.target);
    console.log("ANS", a, element.ans);
});