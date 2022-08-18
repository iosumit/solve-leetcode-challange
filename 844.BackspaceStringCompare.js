import Case from "./cases.js";

const cases = [
    new Case("ab#c", true, "ad#c"),
    new Case("ab##", true, "c#d#"),
    new Case("a#c", false, "b"),
];
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    let r = 0;
    let arr1 = [];
    let arr2 = [];

    while (r < s.length) {
        if (s[r] != '#') {
            arr1.push(s[r]);
        } else {
            arr1.pop();
        }
        r++;
    }
    r = 0;
    while (r < t.length) {
        if (t[r] != '#') {
            arr2.push(t[r]);
        } else {
            arr2.pop();
        }
        r++;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
};


cases.forEach(element => {
    let a = backspaceCompare(element.nums, element.target);
    console.log("ANS", a, element.ans);
});