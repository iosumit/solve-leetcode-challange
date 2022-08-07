import Case from "./cases.js";

const cases = [
    new Case("abc", true, "ahbgdc"),
    new Case("axc", false, "ahbgdc"),
];

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length == 0) {
        return true;
    }
    let _si = 0;
    let _ti = 0;
    let _sc = s[_si];

    while (_si < s.length && _ti < t.length) {

        const _tc = t[_ti];
        // schar found in t -> move to next sc
        // sc not found in t -> move to next tc

        if (_sc == _tc) {
            if (s.length - 1 == _si) {
                return true;
            }
            _si++;
            _sc = s[_si];
        }
        _ti++;
    }

    return false;
};

cases.forEach(element => {
    let a = isIsomorphic(element.nums, element.target);
    console.log("ANS", a, element.ans);
});