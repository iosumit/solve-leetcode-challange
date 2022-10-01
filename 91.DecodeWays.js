import Case from "./cases.js";

const cases = [
    new Case("12", 2),
    new Case("226", 3),
    new Case("06", 0)
];
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length
    let dp = {};
    dp[n] = 1;
    console.log(dp);
    function dfs(i) {
        if (dp[i] != undefined)
            return dp[i];
        if (s[i] == '0')
            return 0;

        let res = dfs(i + 1);
        if (i + 1 < n && (s[i] == "1" || s[i] == "2" && "0123456".includes(s[i + 1])))
            res += dfs(i + 2);
        dp[i] = res;
        return res;
    }
    return dfs(0);
};
cases.forEach(element => {
    let a = numDecodings(element.nums);
    console.log("ANS", a, element.ans, a == element.ans);
});
