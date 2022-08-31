import Case from "./cases.js";

const cases = [
    new Case([1, 2, 5], 3, 11),
    new Case([2], -1, 3),
    new Case([1], 0, 0),
];
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            let c = coins[j];
            if (dp[i - c] >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - c])
            }
        }
    }
    return dp[amount] != amount + 1 ? dp[amount] : -1;
};
cases.forEach(element => {
    let a = coinChange(element.nums, element.target);
    console.log("ANS", a, element.ans);
});