import Case from "./cases.js";

const cases = [
    new Case("egg", true, "add"),
    new Case("foo", false, "bar"),
    new Case("paper", true, "title"),
    new Case("badc", false, "baba"),
];

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let m = new Map();
    let _m = new Map();

    for (let i = 0; i < s.length; i++) {
        const _sc = s[i];
        const _tc = t[i];
        if ((m.has(_sc) && m.get(_sc) != _tc) || (_m.has(_tc) && _m.get(_tc) != _sc)) {
            return false;
        }
        m.set(_sc, _tc);
        _m.set(_tc, _sc);
    }
    return true;
};

cases.forEach(element => {
    let a = isIsomorphic(element.nums, element.target);
    console.log("ANS", a, element.ans);
});