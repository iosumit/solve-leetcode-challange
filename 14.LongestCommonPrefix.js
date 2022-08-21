import Case from "./cases.js";

const cases = [
    new Case(["flower", "flow", "flight"], "fl"),
    new Case(["dog", "racecar", "car"], ""),
];
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 0) {
        return "";
    } else if (strs.length == 1)
        return strs[0];

    // strs.sort((a, b) => a.length > b.length ? 1 : -1); O(nlogn)

    let common = "";
    let tempCommon = strs[0];

    //O(n)
    for (let i = 0; i < strs.length; i++) {
        if (tempCommon.length > strs[i].length) {
            tempCommon = strs[i]
        }
    }

    // O(k * n)
    let r = 0;
    while (r < tempCommon.length) {
        // console.log(tempCommon[r]);
        for (let i = 0; i < strs.length; i++) {
            if (tempCommon[r] != strs[i][r]) {
                return common;
            }
        }
        common += tempCommon[r];
        r += 1;
    }
    return common;

};

cases.forEach(element => {
    let a = longestCommonPrefix(element.nums, element.target);
    console.log("ANS", a, element.ans);
});