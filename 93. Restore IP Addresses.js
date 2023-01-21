import Case from "./cases.js";

const cases = [
    new Case("25525511135", ["255.255.11.135", "255.255.111.35"]),
    new Case("0000", ["0.0.0.0"]),
    new Case("101023", ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]),
];
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = [];
    if (s.length > 12)
        return res;
    /**
     * @param {string} curIp
     */
    function backtrack(i, dots, curIp) {
        if (dots == 4 && i == s.length) {
            res.push(curIp.substring(0, curIp.length - 1));
            return;
        } else if (dots > 4) {
            return;
        }

        for (let j = i; j < Math.min(s.length, i + 3); j++) {
            if (parseInt(s.substring(i, j + 1)) <= 255 && (i == j || s[i] != '0')) {
                backtrack(j + 1, dots + 1, curIp + s.substring(i, j + 1) + ".");
            }
        }
    }
    backtrack(0, 0, "");
    return res;
};

cases.forEach(element => {
    let a = restoreIpAddresses(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});